# Kajal Maurya — Freelance Full-Stack Developer & AI Automation Builder

A high-performance, conversion-focused personal freelance portfolio and software studio website built with React 19, TypeScript, Vite, Tailwind CSS, and secure Vercel Serverless Functions.

---

## 🚀 Live Demo & Repository

- **GitHub Repository:** [https://github.com/sejalpatel9875-del/Portfolio](https://github.com/sejalpatel9875-del/Portfolio)
- **LinkedIn Profile:** [https://www.linkedin.com/in/kajal-maurya-156bb0370](https://www.linkedin.com/in/kajal-maurya-156bb0370?utm_source=share_via&utm_content=profile&utm_medium=member_android)
- **Contact Email:** [kajaltech75@gmail.com](mailto:kajaltech75@gmail.com)

---

## 🛠️ Technology Stack

- **Frontend:** React 19, TypeScript, Vite 8, Tailwind CSS v4, Lucide Icons
- **Backend API:** Vercel Serverless Functions (Node.js runtime)
- **Validation:** Zod schema validation
- **Email Delivery:** Resend API (via serverless backend with visitor `replyTo`)
- **Anti-Spam & Security:** Cloudflare Turnstile CAPTCHA, hidden honeypots, rate limiting (Upstash Redis / In-memory)
- **Security Headers:** Strict Content Security Policy (CSP), HSTS, X-Frame-Options, Permissions-Policy

---

## 🔐 Environment Variables & Configuration

Copy `.env.example` to create your local `.env` file for testing:

```bash
cp .env.example .env
```

| Variable Name | Required | Scope | Description |
|---|---|---|---|
| `RESEND_API_KEY` | Recommended | Server | Resend API key for delivering client inquiries to your inbox |
| `CONTACT_TO_EMAIL` | Optional | Server | Destination email (defaults to `kajaltech75@gmail.com`) |
| `VITE_TURNSTILE_SITE_KEY` | Optional | Client | Cloudflare Turnstile Public Site Key |
| `TURNSTILE_SECRET_KEY` | Optional | Server | Cloudflare Turnstile Private Secret Key |
| `UPSTASH_REDIS_REST_URL` | Optional | Server | Upstash Redis REST URL for distributed rate limiting |
| `UPSTASH_REDIS_REST_TOKEN` | Optional | Server | Upstash Redis REST Token |

> [!CAUTION]
> **Zero Secrets in Client Code**: Never prefix private API keys (such as `RESEND_API_KEY` or `TURNSTILE_SECRET_KEY`) with `VITE_`. Only `VITE_TURNSTILE_SITE_KEY` is meant to be public.

---

## 🛡️ Security Architecture

1. **Strict Content-Security-Policy (CSP)**: Configured in `vercel.json` to prevent XSS, clickjacking, and unauthorized data exfiltration.
2. **Zero Fake Success States**: The contact form performs real network requests to `/api/contact` and provides a graceful, prefilled `mailto:` fallback if the backend service is offline.
3. **Server-Side Input Validation**: All fields (`name`, `email`, `projectType`, `budgetRange`, `timeline`, `message`) are validated with strict length constraints and character limits via Zod.
4. **Automated Dependency Updates**: Configured with `.github/dependabot.yml` for weekly npm vulnerability tracking.

---

## 📋 Production Deployment Guide (Vercel)

1. Fork or push this repository to GitHub: `https://github.com/sejalpatel9875-del/Portfolio`.
2. Go to [Vercel](https://vercel.com/new) and import the repository.
3. In **Project Settings** ➔ **Environment Variables**, configure:
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL`
   - `TURNSTILE_SECRET_KEY` (if using Turnstile)
   - `VITE_TURNSTILE_SITE_KEY` (if using Turnstile)
4. Click **Deploy**.

---

## 🔒 Recommended Manual Security Checklist

- [ ] **Enable Two-Factor Authentication (2FA)** on GitHub: Go to GitHub Settings ➔ Password and authentication ➔ Enable 2FA.
- [ ] **Enable Two-Factor Authentication (2FA)** on Vercel: Go to Vercel Account Settings ➔ Security ➔ Two-Factor Authentication.
- [ ] **Verify Domain in Resend**: To send from your custom domain instead of `onboarding@resend.dev`, add DNS records (DKIM, SPF) in [Resend Domains](https://resend.com/domains).
- [ ] **Rotate API Keys Periodically**: Ensure Resend and Cloudflare API keys are scoped with minimal required permissions.

---

## 💻 Local Development

```bash
# Install dependencies
npm install

# Run Vite local development server
npm run dev

# Run TypeScript check and production build
npm run build

# Run security audit
npm audit
```
