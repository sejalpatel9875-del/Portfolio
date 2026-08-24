import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { profileData } from '../../data/profile';
import { Copy, Check, Send, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profileData.contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Initiate Protocol"
          title="Connect & Build"
          description="Have an interesting idea, engineering opportunity, or AI project? Let's start a conversation."
        />

        {/* Dramatic Minimalist Action Container */}
        <div className="p-8 md:p-14 rounded-3xl builder-glass border border-white/10 shadow-2xl space-y-10 text-center sm:text-left">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>COMMUNICATION CHANNEL OPEN</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display text-slate-100 tracking-tight leading-tight">
              LET'S BUILD
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">
                SOMETHING.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-xl">
              Open for software engineering internships, technical collaborations, AI agent prototypes, and product design explorations.
            </p>
          </div>

          {/* Core Action Channels */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
            <button
              onClick={copyEmail}
              className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold transition-all shadow-lg shadow-blue-500/25 flex items-center gap-2 cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'EMAIL COPIED TO CLIPBOARD' : `COPY EMAIL: ${profileData.contactEmail}`}</span>
            </button>

            <Button
              href={profileData.socialLinks.github}
              external
              variant="outline"
              size="lg"
              icon={<GithubIcon className="w-4 h-4" />}
            >
              GITHUB ↗
            </Button>

            <Button
              href={profileData.socialLinks.linkedin}
              external
              variant="secondary"
              size="lg"
              icon={<LinkedinIcon className="w-4 h-4" />}
            >
              LINKEDIN ↗
            </Button>
          </div>

          {/* Quick Direct Message Form */}
          <div className="pt-8 border-t border-white/10 text-left">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
              <MessageSquare className="w-3.5 h-3.5 text-blue-400" />
              <span>Or Dispatch a Direct Note</span>
            </h4>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-2">
                <Check className="w-6 h-6 text-emerald-400 mx-auto" />
                <h5 className="font-display font-bold text-slate-100">Note Prepared</h5>
                <p className="text-xs text-slate-400">
                  Thank you, <strong className="text-slate-200">{formState.name}</strong>. Feel free to follow up directly at <a href={`mailto:${profileData.contactEmail}`} className="text-blue-400 underline">{profileData.contactEmail}</a>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-slate-100 placeholder:text-slate-600 text-xs font-mono focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    required
                    placeholder="Your Email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-slate-100 placeholder:text-slate-600 text-xs font-mono focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="sm:col-span-2">
                  <textarea
                    required
                    rows={3}
                    placeholder="Message / Project Scope..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-slate-100 placeholder:text-slate-600 text-xs font-mono focus:outline-none focus:border-blue-500 resize-none"
                  />
                </div>
                <div className="sm:col-span-2">
                  <Button
                    type="submit"
                    variant="glow"
                    size="md"
                    className="w-full sm:w-auto"
                    icon={<Send className="w-4 h-4" />}
                    iconPosition="right"
                  >
                    SEND MESSAGE
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
