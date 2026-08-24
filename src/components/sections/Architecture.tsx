import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { architectureLayers } from '../../data/architecture';
import { CheckCircle2 } from 'lucide-react';

export const Architecture: React.FC = () => {
  return (
    <section id="architecture" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="System Architecture"
          title="Full-Stack Engineering Blueprint"
          description="How I structure full-stack applications from modern React/Next.js frontends to asynchronous FastAPI backends, PostgreSQL schemas, and Docker containers."
        />

        {/* Stack Layering Stack View */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {architectureLayers.map((layer, idx) => (
            <Card
              key={layer.name}
              variant="glass"
              className="p-6 border-l-4 border-l-indigo-500 hover:border-l-indigo-400 space-y-3"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-md bg-indigo-500/10 text-indigo-400 font-mono text-xs flex items-center justify-center font-bold">
                    0{idx + 1}
                  </span>
                  <h3 className="text-base font-bold text-slate-100 font-heading">
                    {layer.name}
                  </h3>
                </div>
                <Badge variant="primary" size="sm">
                  {layer.badge}
                </Badge>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {layer.description}
              </p>

              {/* Technologies row */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {layer.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded bg-slate-800 text-[11px] font-mono text-cyan-300 border border-slate-700/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Engineering Principles */}
              <div className="pt-2 border-t border-slate-800/60 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-400">
                {layer.principles.map((pr, pIdx) => (
                  <div key={pIdx} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{pr}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
