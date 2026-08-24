import React, { useState, useEffect, useRef } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { profileData } from '../../data/profile';
import type { ContactFormPayload, ContactApiResponse } from '../../types';
import { Copy, Check, Send, Mail, AlertCircle, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';

interface ContactProps {
  initialProjectType?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialProjectType }) => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState<ContactFormPayload>({
    name: '',
    email: '',
    projectType: initialProjectType || 'Business & Portfolio Websites',
    budgetRange: '$1,000 – $3,000',
    timeline: '1 month',
    message: '',
    honeypot: '',
    turnstileToken: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error' | 'unconfigured'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string>('');
  const turnstileRef = useRef<HTMLDivElement>(null);

  const turnstileSiteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY as string | undefined;

  // Update projectType if passed via props
  useEffect(() => {
    if (initialProjectType) {
      setFormData((prev) => ({ ...prev, projectType: initialProjectType }));
    }
  }, [initialProjectType]);

  // Optional Cloudflare Turnstile script loading
  useEffect(() => {
    if (!turnstileSiteKey) return;

    // Check if script already exists
    if (!document.getElementById('turnstile-script')) {
      const script = document.createElement('script');
      script.id = 'turnstile-script';
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);

      script.onload = () => {
        if (window.turnstile && turnstileRef.current) {
          window.turnstile.render(turnstileRef.current, {
            sitekey: turnstileSiteKey,
            callback: (token: string) => {
              setFormData((prev) => ({ ...prev, turnstileToken: token }));
            },
          });
        }
      };
    }
  }, [turnstileSiteKey]);

  const copyEmail = () => {
    navigator.clipboard.writeText(profileData.contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getMailtoUrl = () => {
    const subject = encodeURIComponent(`Project Inquiry: ${formData.projectType} - ${formData.name || 'New Client'}`);
    const body = encodeURIComponent(
      `Hi Kajal,\n\nName: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\nBudget Range: ${formData.budgetRange}\nTimeline: ${formData.timeline}\n\nMessage:\n${formData.message}\n`
    );
    return `mailto:${profileData.contactEmail}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result: ContactApiResponse = await response.json().catch(() => ({
        success: false,
        error: 'Unable to parse server response. Please use direct email.',
      }));

      if (response.ok && result.success) {
        setStatus('success');
        setSuccessMessage(result.message || 'Inquiry successfully sent! I will review your requirements and respond within 24 hours.');
        setFormData({
          name: '',
          email: '',
          projectType: 'Business & Portfolio Websites',
          budgetRange: '$1,000 – $3,000',
          timeline: '1 month',
          message: '',
          honeypot: '',
          turnstileToken: '',
        });
      } else {
        if (result.unconfigured) {
          setStatus('unconfigured');
        } else {
          setStatus('error');
        }
        setErrorMessage(result.error || 'Failed to submit form. Please use the direct mailto fallback below.');
      }
    } catch (err) {
      console.error('Contact form submission error:', err);
      setStatus('error');
      setErrorMessage('Network error while reaching serverless endpoint. Please click the button below to email directly.');
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Initiate Protocol"
          title="Start a Project"
          description="Have an upcoming project, web application, or automation workflow in mind? Let's discuss scope and timeline."
        />

        <div className="p-8 md:p-12 rounded-3xl builder-glass border border-white/10 shadow-2xl space-y-8">
          {/* Header & Direct Contact Options */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>ACTIVE CLIENT INBOX · RESPONSE &lt; 24H</span>
              </div>
              <h3 className="text-2xl font-bold font-display text-slate-100">
                Send an Inquiry
              </h3>
            </div>

            {/* Quick Action Chips */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={copyEmail}
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold transition-all shadow-md shadow-blue-500/20 flex items-center gap-2 cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copied to Clipboard' : 'Copy Email'}</span>
              </button>

              <a
                href={profileData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 font-mono text-xs font-semibold transition-colors flex items-center gap-1.5"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>

              <a
                href={profileData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 font-mono text-xs font-semibold transition-colors flex items-center gap-1.5"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Form Result State: Success */}
          {status === 'success' ? (
            <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4 animate-in fade-in duration-300">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold font-display text-slate-100">
                Inquiry Successfully Dispatched
              </h4>
              <p className="text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
                {successMessage}
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setStatus('idle')}
                  className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-slate-200 text-xs font-mono cursor-pointer transition-colors"
                >
                  Send another inquiry
                </button>
              </div>
            </div>
          ) : (
            /* Inquiry Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Error or Unconfigured Notification Banner */}
              {(status === 'error' || status === 'unconfigured') && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 space-y-3 animate-in fade-in duration-200">
                  <div className="flex items-start gap-2.5 text-red-300 text-xs">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <div>
                      <strong>Submission Notice:</strong> {errorMessage}
                    </div>
                  </div>
                  <div className="pt-1">
                    <a
                      href={getMailtoUrl()}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Open Pre-filled Email Draft (Mailto)</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              )}

              {/* Honeypot Field (Hidden from humans for anti-spam) */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website-honeypot">Leave this blank</label>
                <input
                  type="text"
                  id="website-honeypot"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="contact-name" className="text-xs font-mono font-semibold text-slate-300">
                    Your Name <span className="text-blue-400">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    maxLength={100}
                    placeholder="e.g. Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-slate-100 placeholder:text-slate-600 text-xs font-mono focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="contact-email" className="text-xs font-mono font-semibold text-slate-300">
                    Your Email Address <span className="text-blue-400">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    maxLength={150}
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-slate-100 placeholder:text-slate-600 text-xs font-mono focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                {/* Project Type */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="contact-project-type" className="text-xs font-mono font-semibold text-slate-300">
                    Service / Project Type <span className="text-blue-400">*</span>
                  </label>
                  <select
                    id="contact-project-type"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-slate-100 text-xs font-mono focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    <option value="Business & Portfolio Websites">Business & Portfolio Websites</option>
                    <option value="Full-Stack Web Applications">Full-Stack Web Applications</option>
                    <option value="AI Chatbots & Workflow Automation">AI Chatbots & Workflow Automation</option>
                    <option value="UI/UX & Dashboard Development">UI/UX & Dashboard Development</option>
                    <option value="Other / Custom Inquiry">Other / Custom Inquiry</option>
                  </select>
                </div>

                {/* Budget Range */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="contact-budget" className="text-xs font-mono font-semibold text-slate-300">
                    Estimated Budget Range <span className="text-blue-400">*</span>
                  </label>
                  <select
                    id="contact-budget"
                    value={formData.budgetRange}
                    onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-slate-100 text-xs font-mono focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    <option value="< $1,000">&lt; $1,000</option>
                    <option value="$1,000 – $3,000">$1,000 – $3,000</option>
                    <option value="$3,000 – $5,000">$3,000 – $5,000</option>
                    <option value="$5,000+">$5,000+</option>
                    <option value="To be discussed">To be discussed / Flexible</option>
                  </select>
                </div>

                {/* Timeline */}
                <div className="sm:col-span-2 space-y-1.5 text-left">
                  <label htmlFor="contact-timeline" className="text-xs font-mono font-semibold text-slate-300">
                    Desired Delivery Timeline <span className="text-blue-400">*</span>
                  </label>
                  <select
                    id="contact-timeline"
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-slate-100 text-xs font-mono focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    <option value="Urgent (< 2 weeks)">Urgent (&lt; 2 weeks)</option>
                    <option value="1 month">1 month</option>
                    <option value="2-3 months">2-3 months</option>
                    <option value="Flexible">Flexible</option>
                  </select>
                </div>

                {/* Message */}
                <div className="sm:col-span-2 space-y-1.5 text-left">
                  <label htmlFor="contact-message" className="text-xs font-mono font-semibold text-slate-300">
                    Project Scope & Goals <span className="text-blue-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    minLength={10}
                    maxLength={3000}
                    rows={4}
                    placeholder="Describe what you want to build, any key features, or design references..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-slate-100 placeholder:text-slate-600 text-xs font-mono focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  />
                  <div className="text-[10px] text-slate-500 font-mono text-right">
                    {formData.message.length} / 3000 chars
                  </div>
                </div>
              </div>

              {/* Turnstile Container (if enabled) */}
              {turnstileSiteKey && (
                <div className="pt-2 flex justify-start">
                  <div ref={turnstileRef} />
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <Button
                  type="submit"
                  variant="glow"
                  size="lg"
                  disabled={status === 'loading'}
                  className="w-full sm:w-auto"
                  icon={status === 'loading' ? <Clock className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                  iconPosition="right"
                >
                  {status === 'loading' ? 'Dispatching Inquiry...' : 'Submit Project Inquiry'}
                </Button>

                <div className="flex items-center gap-2 text-[11px] font-mono text-slate-500">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Encrypted Vercel Serverless Delivery</span>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
