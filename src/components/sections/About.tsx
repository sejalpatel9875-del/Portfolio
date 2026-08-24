import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Background & Ethos"
          title="About Kajal"
          description="A pragmatic full-stack developer and AI builder who focuses on delivering clean, usable software."
        />

        <div className="p-8 md:p-12 rounded-3xl builder-glass border border-white/10 shadow-2xl space-y-6 text-left">
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold">
              Engineering Mindset
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-slate-100 leading-tight">
              Solving real problems with modern full-stack code and practical AI workflows.
            </h3>
          </div>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            I am <strong className="text-white">Kajal Maurya</strong>, a freelance full-stack developer and computer applications student based in India. My focus is on turning business requirements and product ideas into fast, production-ready web applications and automated AI systems.
          </p>

          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            Rather than relying on abstract buzzwords, I emphasize strong foundational computer science principles, type-safe clean code (TypeScript & Python), responsive interface craftsmanship, and deterministic AI tools that deliver real operational efficiency for clients.
          </p>

          {/* Highlights Grid */}
          <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1">
              <div className="text-xs font-mono font-bold text-blue-400">Full-Stack Craft</div>
              <div className="text-xs text-slate-300">Next.js, React, TypeScript, FastAPI, PostgreSQL</div>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1">
              <div className="text-xs font-mono font-bold text-purple-400">AI & Automation</div>
              <div className="text-xs text-slate-300">LLM Tool Integration, Whisper Voice, Local Models (Ollama)</div>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1">
              <div className="text-xs font-mono font-bold text-emerald-400">Work Ethic</div>
              <div className="text-xs text-slate-300">Transparent updates, rapid prototyping, clean git history</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
