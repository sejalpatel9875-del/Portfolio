import { z } from 'zod';
import process from 'node:process';

export const config = {
  runtime: 'nodejs',
};

// In-memory rate limiting map for local development fallback
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;
const MAX_PAYLOAD_BYTES = 10240; // 10KB max payload limit

// Strict Zod schema for client inquiry validation
const contactSchema = z.object({
  name: z.string().trim().min(2, 'Name must be at least 2 characters').max(100, 'Name is too long'),
  email: z.string().trim().email('Invalid email address').max(150, 'Email is too long'),
  projectType: z.string().trim().min(1, 'Project type is required').max(100),
  budgetRange: z.string().trim().min(1, 'Budget range is required').max(100),
  timeline: z.string().trim().min(1, 'Timeline is required').max(100),
  message: z.string().trim().min(10, 'Message must be at least 10 characters').max(3000, 'Message exceeds 3000 characters limit'),
  honeypot: z.string().optional(),
  turnstileToken: z.string().optional(),
});

function sanitizeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function isAllowedOrigin(urlStr: string | null, hostHeader: string | null): boolean {
  if (!urlStr) return true; // Same-origin if header not explicitly set
  try {
    const parsed = new URL(urlStr);
    const hostname = parsed.hostname;
    // Allow local development
    if (hostname === 'localhost' || hostname === '127.0.0.1') return true;
    // Allow Vercel preview and production deployments
    if (hostname.endsWith('.vercel.app')) return true;
    // Allow host match if custom domain is configured
    if (hostHeader) {
      const hostWithoutPort = hostHeader.split(':')[0];
      if (hostname === hostWithoutPort) return true;
    }
    return false;
  } catch {
    return false;
  }
}

async function verifyTurnstile(token: string, secretKey: string, ip: string): Promise<boolean> {
  try {
    const formData = new URLSearchParams();
    formData.append('secret', secretKey);
    formData.append('response', token);
    formData.append('remoteip', ip);

    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: formData,
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
    });

    const outcome = (await res.json()) as { success?: boolean };
    return Boolean(outcome.success);
  } catch (error) {
    console.error('Turnstile verification error:', error);
    return false;
  }
}

async function checkRateLimit(ip: string, isProduction: boolean): Promise<{ allowed: boolean; unconfigured?: boolean }> {
  const upstashUrl = process.env.UPSTASH_REDIS_REST_URL;
  const upstashToken = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (upstashUrl && upstashToken) {
    try {
      const key = `ratelimit:contact:${ip}`;
      const res = await fetch(`${upstashUrl}/incr/${key}`, {
        headers: { Authorization: `Bearer ${upstashToken}` },
      });
      const data = (await res.json()) as { result?: number };
      const count = typeof data.result === 'number' ? data.result : 1;

      if (count === 1) {
        await fetch(`${upstashUrl}/expire/${key}/600`, {
          headers: { Authorization: `Bearer ${upstashToken}` },
        });
      }

      return { allowed: count <= MAX_REQUESTS_PER_WINDOW };
    } catch (e) {
      console.error('Upstash rate limit check failed:', e);
      if (isProduction) {
        return { allowed: false, unconfigured: true };
      }
    }
  }

  // In production, require Upstash rate limiting rather than unreliable distributed in-memory instances
  if (isProduction) {
    return { allowed: false, unconfigured: true };
  }

  // Fallback in-memory rate limiting for local development testing only
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true };
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return { allowed: false };
  }

  record.count += 1;
  return { allowed: true };
}

export default async function handler(req: Request): Promise<Response> {
  // 1. Method check: Only POST allowed
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ success: false, error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json', 'Allow': 'POST' },
    });
  }

  // 2. Request payload size check before reading body
  const contentLength = req.headers.get('content-length');
  if (contentLength && parseInt(contentLength, 10) > MAX_PAYLOAD_BYTES) {
    return new Response(
      JSON.stringify({ success: false, error: 'Payload exceeds maximum limit (10KB).' }),
      { status: 413, headers: { 'Content-Type': 'application/json' } }
    );
  }

  // 3. Content-Type check
  const contentType = req.headers.get('content-type');
  if (!contentType || !contentType.toLowerCase().includes('application/json')) {
    return new Response(
      JSON.stringify({ success: false, error: 'Content-Type must be application/json' }),
      { status: 415, headers: { 'Content-Type': 'application/json' } }
    );
  }

  // 4. Origin & Referer checks to prevent cross-origin resource abuse
  const origin = req.headers.get('origin');
  const referer = req.headers.get('referer');
  const host = req.headers.get('host');

  if ((origin && !isAllowedOrigin(origin, host)) || (referer && !isAllowedOrigin(referer, host))) {
    return new Response(
      JSON.stringify({ success: false, error: 'Forbidden: Unauthorized request origin.' }),
      { status: 403, headers: { 'Content-Type': 'application/json' } }
    );
  }

  try {
    const clientIp = req.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
                     req.headers.get('x-real-ip') ||
                     '127.0.0.1';

    const isProduction = process.env.NODE_ENV === 'production' || process.env.VERCEL_ENV === 'production';

    // 5. Rate Limiting Check (Mandatory Upstash in production)
    const rateLimitResult = await checkRateLimit(clientIp, isProduction);
    if (rateLimitResult.unconfigured) {
      return new Response(
        JSON.stringify({
          success: false,
          unconfigured: true,
          error: 'Production rate limiting protection (Upstash) is currently unconfigured. Please use direct email.',
        }),
        { status: 503, headers: { 'Content-Type': 'application/json' } }
      );
    }

    if (!rateLimitResult.allowed) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Too many requests. Please try again later or email directly.',
        }),
        { status: 429, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 5. Read body text and enforce payload size limits (handles missing Content-Length / chunked transfer)
    const rawBody = await req.text().catch(() => '');
    if (rawBody.length > MAX_PAYLOAD_BYTES) {
      return new Response(
        JSON.stringify({ success: false, error: 'Payload exceeds maximum limit (10KB).' }),
        { status: 413, headers: { 'Content-Type': 'application/json' } }
      );
    }

    let body: Record<string, unknown> = {};
    try {
      body = rawBody ? JSON.parse(rawBody) : {};
    } catch {
      return new Response(
        JSON.stringify({ success: false, error: 'Invalid JSON payload format.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 6. Honeypot check: If filled by automated bot, return 200 silently
    if (body.honeypot && typeof body.honeypot === 'string' && body.honeypot.trim().length > 0) {
      return new Response(
        JSON.stringify({ success: true, message: 'Inquiry received.' }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 7. Schema validation with Zod
    const validationResult = contactSchema.safeParse(body);
    if (!validationResult.success) {
      const firstError = validationResult.error.issues[0]?.message || 'Invalid input parameters';
      return new Response(
        JSON.stringify({ success: false, error: firstError }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const data = validationResult.data;

    // 8. Cloudflare Turnstile CAPTCHA verification (if secret configured)
    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
    if (turnstileSecret) {
      if (!data.turnstileToken) {
        return new Response(
          JSON.stringify({ success: false, error: 'Please complete the security challenge.' }),
          { status: 400, headers: { 'Content-Type': 'application/json' } }
        );
      }

      const isValidCaptcha = await verifyTurnstile(data.turnstileToken, turnstileSecret, clientIp);
      if (!isValidCaptcha) {
        return new Response(
          JSON.stringify({ success: false, error: 'Security challenge failed. Please refresh and try again.' }),
          { status: 400, headers: { 'Content-Type': 'application/json' } }
        );
      }
    }

    // 9. Check Resend API configuration
    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_TO_EMAIL || 'kajaltech75@gmail.com';

    if (!resendApiKey) {
      return new Response(
        JSON.stringify({
          success: false,
          unconfigured: true,
          error: 'Email delivery service is currently being configured. Please use the direct email button below.',
        }),
        { status: 503, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 10. Send email via Resend
    const htmlContent = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #08090C; color: #F5F7FA; border-radius: 12px; border: 1px solid #1E2330;">
        <h2 style="color: #3B82F6; margin-top: 0; font-size: 20px; border-bottom: 1px solid #1E2330; padding-bottom: 12px;">New Project Inquiry</h2>
        <p style="color: #9299A6; font-size: 14px;">A new prospective client has submitted an inquiry through your portfolio website.</p>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 14px;">
          <tr>
            <td style="padding: 10px 0; color: #9299A6; width: 140px; font-weight: 600;">Client Name:</td>
            <td style="padding: 10px 0; color: #FFFFFF; font-weight: bold;">${sanitizeHtml(data.name)}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #9299A6; font-weight: 600;">Email:</td>
            <td style="padding: 10px 0; color: #3B82F6;"><a href="mailto:${sanitizeHtml(data.email)}" style="color: #3B82F6; text-decoration: none;">${sanitizeHtml(data.email)}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #9299A6; font-weight: 600;">Project Type:</td>
            <td style="padding: 10px 0; color: #FFFFFF;">${sanitizeHtml(data.projectType)}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #9299A6; font-weight: 600;">Budget Range:</td>
            <td style="padding: 10px 0; color: #FFFFFF;">${sanitizeHtml(data.budgetRange)}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #9299A6; font-weight: 600;">Desired Timeline:</td>
            <td style="padding: 10px 0; color: #FFFFFF;">${sanitizeHtml(data.timeline)}</td>
          </tr>
        </table>

        <div style="margin-top: 20px; padding: 16px; background: #101218; border-radius: 8px; border: 1px solid #1E2330;">
          <strong style="color: #9299A6; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Message Details:</strong>
          <p style="margin: 8px 0 0 0; color: #E2E8F0; line-height: 1.6; white-space: pre-wrap; font-size: 14px;">${sanitizeHtml(data.message)}</p>
        </div>

        <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #1E2330; font-size: 12px; color: #5E6676;">
          IP: ${sanitizeHtml(clientIp)} · Sent from Kajal Maurya Freelance Portfolio
        </div>
      </div>
    `;

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Portfolio Inquiry <onboarding@resend.dev>',
        to: [recipientEmail],
        reply_to: data.email, // Visitor email as replyTo only
        subject: `New Client Inquiry: ${data.projectType} (${data.name})`,
        html: htmlContent,
      }),
    });

    if (!resendResponse.ok) {
      const errorText = await resendResponse.text();
      console.error('Resend API error:', errorText);
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Failed to deliver message via email provider. Please contact directly via email.',
        }),
        { status: 502, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Thank you! Your project inquiry has been received. I will review your requirements and respond within 24 hours.',
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Contact handler uncaught exception:', error);
    return new Response(
      JSON.stringify({ success: false, error: 'Internal server error. Please email directly.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
