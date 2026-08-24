import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { profileData } from '../../data/profile';
import { UserCheck, Zap, Shield, Sparkles, Clock, CheckCircle } from 'lucide-react';

export const WhyWorkWithMe: React.FC = () => {
  const iconList = [
    <UserCheck className="w-5 h-5 text-blue-400" />,
    <Zap className="w-5 h-5 text-amber-400" />,
    <Shield className="w-5 h-5 text-emerald-400" />,
    <Sparkles className="w-5 h-5 text-purple-400" />,
  ];

  return (
    <section id="why-me" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Freelance Advantage"
          title="Why Work With Me"
          description="A direct, dependable partnership built on clear communication, rapid iteration, and modern software standards."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {profileData.whyWorkWithMe.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl builder-glass border border-white/10 space-y-4 flex flex-col justify-between hover:border-white/20 transition-all duration-300 shadow-lg"
            >
              <div className="space-y-3">
                <div className="p-3 w-fit rounded-xl bg-white/5 border border-white/10">
                  {iconList[idx] || <CheckCircle className="w-5 h-5 text-blue-400" />}
                </div>
                <h3 className="text-lg font-bold font-display text-slate-100">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Standard on every project</span>
              </div>
            </div>
          ))}
        </div>

        {/* Commitment Badge */}
        <div className="mt-12 p-5 rounded-2xl bg-black/40 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 text-left">
            <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold font-display text-slate-100">
                Guaranteed Response Time Under 24 Hours
              </div>
              <div className="text-xs text-slate-400">
                Direct asynchronous communication via email or scheduled video calls for project kickoffs.
              </div>
            </div>
          </div>
          <a
            href="#contact"
            className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold transition-colors shrink-0"
          >
            Start a Conversation →
          </a>
        </div>
      </div>
    </section>
  );
};
