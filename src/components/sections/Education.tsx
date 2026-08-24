import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { educationData, learningPhilosophy } from '../../data/education';
import { GraduationCap, BookOpen, CheckCircle2 } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Academic Foundation"
          title="Education & Computer Science Direction"
          description="A transparent summary of my formal undergraduate studies in Computer Applications and foundational coursework."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
          {/* Main Degree Card */}
          <div className="lg:col-span-7">
            <Card variant="glass" className="p-6 sm:p-8 space-y-6">
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-100 font-heading">
                        {educationData.degree}
                      </h3>
                      <p className="text-xs text-indigo-400 font-medium">
                        {educationData.field}
                      </p>
                    </div>
                  </div>
                  <Badge variant="primary" size="sm">
                    {educationData.status}
                  </Badge>
                </div>

                <div className="text-xs text-slate-400 font-mono">
                  {educationData.institutionNote}
                </div>
              </div>

              {/* Core Focus Areas */}
              <div className="space-y-3 pt-4 border-t border-slate-800">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Primary Academic Focus:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {educationData.focusAreas.map((area: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Coursework list */}
              <div className="space-y-3 pt-4 border-t border-slate-800">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Key Coursework Modules:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {educationData.coreCoursework.map((course: string, idx: number) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Learning Philosophy Callout */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <Card variant="gradient" className="p-6 space-y-3 border-indigo-500/20">
              <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 w-fit">
                <BookOpen className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-100 font-heading">
                {learningPhilosophy.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {learningPhilosophy.description}
              </p>
            </Card>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2 text-xs text-slate-400">
              <span className="font-semibold text-slate-300">Verification Note:</span>
              <p>
                Academic credentials presented strictly as enrolled BCA student without inflated grades, hypothetical honours, or unverified ranks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
