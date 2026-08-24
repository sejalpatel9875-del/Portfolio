import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { journeyMilestones } from '../../data/journey';
import { CheckCircle2 } from 'lucide-react';

export const JourneyTimeline: React.FC = () => {
  return (
    <section id="journey" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Milestones"
          title="Learning & Builder Journey"
          description="A chronological timeline of verified academic progress and hands-on software development milestones."
        />

        <div className="relative border-l-2 border-white/10 ml-4 sm:ml-32 space-y-12 py-4">
          {journeyMilestones.map((m, idx) => (
            <div key={idx} className="relative pl-8 group">
              {/* Timeline Node Icon */}
              <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-slate-900 border-2 border-blue-500 flex items-center justify-center text-blue-400 shadow-md shadow-blue-500/20 group-hover:scale-110 transition-transform">
                <span className="w-2 h-2 rounded-full bg-blue-400" />
              </div>

              {/* Period Label (Floating to the left on desktop) */}
              <div className="sm:absolute sm:-left-36 sm:top-1 sm:text-right sm:w-28 text-xs font-mono font-bold text-blue-400 mb-1 sm:mb-0">
                {m.period}
              </div>

              {/* Milestone Card */}
              <div className="p-6 rounded-2xl builder-glass border border-white/10 space-y-3 group-hover:border-white/20 transition-colors">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="text-lg font-bold font-display text-slate-100">
                    {m.title}
                  </h3>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300">
                    {m.tag}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {m.description}
                </p>

                <div className="pt-3 border-t border-white/10 space-y-1.5">
                  <ul className="space-y-1 text-xs text-slate-300">
                    {m.achievements.map((item, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
