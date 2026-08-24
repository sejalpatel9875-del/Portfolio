import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/Button';
import { GithubIcon } from '../ui/Icons';
import { profileData } from '../../data/profile';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full builder-glass border border-emerald-500/30 text-xs font-mono text-emerald-300 shadow-sm shadow-emerald-500/10">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{profileData.availabilityBadge}</span>
          </div>

          {/* Main Client-Focused Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-display tracking-tight text-slate-100 leading-[1.1]">
            I build modern websites and AI automations that{' '}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">
              help businesses move faster.
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-sans">
            {profileData.subheadline}
          </p>

          {/* Direct Conversion CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button
              href="#contact"
              variant="glow"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
            >
              Start a Project
            </Button>
            <Button
              href="#projects"
              variant="outline"
              size="lg"
            >
              View My Work
            </Button>
            <Button
              href={profileData.socialLinks.github}
              variant="secondary"
              size="lg"
              external
              icon={<GithubIcon className="w-4 h-4" />}
            >
              GitHub Code
            </Button>
          </div>

          {/* Trust Highlights Strip */}
          <div className="pt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-mono text-slate-400 border-t border-white/5">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-400" />
              <span>Full-Stack (React, Next.js, FastAPI)</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Practical AI & Automation (Groq, Whisper)</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-purple-400" />
              <span>Response Time &lt; 24h</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
