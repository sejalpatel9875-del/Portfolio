import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';

export const About: React.FC = () => {
  const metadataChips = [
    { label: 'BUILDING', desc: 'Practical Products & AI Agents', color: 'text-blue-400 border-blue-500/20 bg-blue-500/10' },
    { label: 'LEARNING', desc: 'BCA Coursework & Deep CS', color: 'text-emerald-400 border-emerald-500/20 bg-emerald-500/10' },
    { label: 'EXPERIMENTING', desc: 'Voice Models & Local LLMs', color: 'text-purple-400 border-purple-500/20 bg-purple-500/10' },
    { label: 'DESIGNING', desc: 'Linear & Stripe Minimal Craft', color: 'text-rose-400 border-rose-500/20 bg-rose-500/10' }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Identity & Ethos"
          title="About Kajal"
          description="A personal perspective on engineering, software craftsmanship, and academic direction."
        />

        {/* Large Signature Statement */}
        <div className="p-8 md:p-12 rounded-3xl builder-glass border border-white/10 shadow-2xl space-y-6 text-center sm:text-left">
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold">
              Core Philosophy
            </span>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-slate-100 leading-tight">
              "I learn by building."
            </h3>
          </div>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
            I am <strong className="text-white">Kajal Maurya</strong>, a <strong className="text-blue-400">BCA (Bachelor of Computer Applications) student</strong> and software builder. While establishing a solid mathematical and algorithmic foundation through academic study, I believe that authentic software mastery comes from writing code, architecting systems, handling real failures, and shipping usable products.
          </p>

          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-3xl">
            My primary technical explorations center around multi-agent workflow orchestration (FlowPilot AI), voice runtime pipelines (Jarvis AI), and clean SaaS interface systems.
          </p>

          {/* Visual Metadata Chips */}
          <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {metadataChips.map((chip) => (
              <div
                key={chip.label}
                className={`p-3.5 rounded-xl border ${chip.color} text-left space-y-1`}
              >
                <div className="text-xs font-mono font-bold tracking-wider">
                  {chip.label}
                </div>
                <div className="text-[10px] text-slate-400 line-clamp-1 font-mono">
                  {chip.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
