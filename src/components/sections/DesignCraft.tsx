import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Eye, Sparkles, Smartphone, MousePointerClick } from 'lucide-react';

export const DesignCraft: React.FC = () => {
  const designPillars = [
    {
      title: 'Minimalism & Typography Hierarchy',
      description: 'Carefully chosen font pairings (Plus Jakarta Sans, Inter, JetBrains Mono) with balanced scale, proportional leading, and intentional whitespace.',
      icon: <Eye className="w-5 h-5 text-indigo-400" />
    },
    {
      title: 'Glassmorphism & Depth Tokens',
      description: 'Refined multi-layer glass effects, subtle 1px border highlights, backdrop filters, and radial ambient glows that create tactile interface depth.',
      icon: <Sparkles className="w-5 h-5 text-purple-400" />
    },
    {
      title: 'Responsive & Accessible Systems',
      description: 'Mobile-first breakpoint grids, high WCAG contrast compliance, keyboard focus states, and seamless dark/light theme switching.',
      icon: <Smartphone className="w-5 h-5 text-cyan-400" />
    },
    {
      title: 'Micro-Interactions & State Polish',
      description: 'Subtle hover elevations, smooth button active states, springy tabs, and loading skeletons that make software feel responsive and alive.',
      icon: <MousePointerClick className="w-5 h-5 text-emerald-400" />
    }
  ];

  return (
    <section id="design" className="py-20 relative bg-slate-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="UI / UX & Product Craft"
          title="Designed with Restraint, Engineered for Polish"
          description="I care deeply about how software feels. Inspired by the clarity of Linear, the polish of Stripe, and the restraint of Apple-style minimalism."
        />

        {/* 4 Design Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {designPillars.map((pillar, idx) => (
            <Card key={idx} variant="glass" className="p-6 space-y-3 hover:border-slate-700 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 w-fit">
                  {pillar.icon}
                </div>
                <h3 className="text-base font-bold text-slate-100 font-heading">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Live Design System Palette Token Showcase */}
        <div className="p-6 md:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider font-heading">
              Design Tokens & Theme Surface Preview
            </h4>
            <span className="text-xs text-slate-400">
              * Independent design study • No corporate affiliation
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 space-y-1">
              <div className="w-4 h-4 rounded-full bg-slate-950 border border-slate-700" />
              <div className="font-semibold">Canvas Background</div>
              <div className="text-[10px] text-slate-500">#020617 (slate-950)</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 space-y-1">
              <div className="w-4 h-4 rounded-full bg-indigo-600" />
              <div className="font-semibold">Primary Accent</div>
              <div className="text-[10px] text-slate-500">#4f46e5 (indigo-600)</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 space-y-1">
              <div className="w-4 h-4 rounded-full bg-emerald-500" />
              <div className="font-semibold">Verification Token</div>
              <div className="text-[10px] text-slate-500">#10b981 (emerald-500)</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 space-y-1">
              <div className="w-4 h-4 rounded-full bg-slate-800 border border-slate-700" />
              <div className="font-semibold">Glass Surface</div>
              <div className="text-[10px] text-slate-500">rgba(15, 23, 42, 0.75)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
