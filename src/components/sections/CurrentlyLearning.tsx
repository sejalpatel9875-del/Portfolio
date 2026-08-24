import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { roadmapGoals } from '../../data/roadmap';
import { Target } from 'lucide-react';

export const CurrentlyLearning: React.FC = () => {
  const stateBadgeMap: Record<'BUILDING' | 'EXPLORING' | 'LEARNING', string> = {
    BUILDING: 'bg-blue-500/10 border-blue-500/30 text-blue-400',
    EXPLORING: 'bg-purple-500/10 border-purple-500/30 text-purple-400',
    LEARNING: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
  };

  return (
    <section id="roadmap" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Growth Trajectory"
          title="Currently Exploring & Building"
          description="Active learning vectors and technical expansions — ambitious pursuits grounded in practical experiments."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {roadmapGoals.map((goal, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl builder-glass border border-white/10 space-y-4 flex flex-col justify-between hover:border-white/20 transition-all builder-card-hover"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-md bg-blue-500/10 text-blue-400 font-mono text-xs flex items-center justify-center font-bold">
                      0{idx + 1}
                    </span>
                    <h3 className="text-base font-bold font-display text-slate-100">
                      {goal.topic}
                    </h3>
                  </div>
                  <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border ${stateBadgeMap[goal.state]}`}>
                    {goal.state}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {goal.description}
                </p>
              </div>

              {/* Practical Project Target */}
              <div className="pt-3 border-t border-white/10 space-y-1">
                <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-blue-400 flex items-center gap-1">
                  <Target className="w-3.5 h-3.5" />
                  <span>Practical Focus:</span>
                </span>
                <p className="text-xs text-slate-300">
                  {goal.practicalTarget}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
