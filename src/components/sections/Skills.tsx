import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';
import { skillsData } from '../../data/skills';
import type { SkillCategory, SkillLevel } from '../../types';
import { Shield, GitBranch } from 'lucide-react';

const categories: (SkillCategory | 'All')[] = [
  'All',
  'AI & Agentic Tech',
  'Frontend Engineering',
  'Backend & APIs',
  'Languages & Core',
  'Databases & Infrastructure',
  'Developer Tools'
];

const levelBadgeVariants: Record<SkillLevel, 'success' | 'primary' | 'cyan' | 'warning' | 'amber'> = {
  'Hands-on': 'success',
  'Project Experience': 'primary',
  'Working Knowledge': 'cyan',
  'Learning': 'warning',
  'Exploring': 'amber'
};

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory | 'All'>('All');

  const filteredSkills = skillsData.filter((skill) => {
    return selectedCategory === 'All' || skill.category === selectedCategory;
  });

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Connected Tech Stack"
          title="Evidence-Based Technology Ecosystem"
          description="Every skill is mapped to real projects and working implementations — zero artificial percentage meters."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all duration-200 cursor-pointer border ${
                selectedCategory === cat
                  ? 'bg-blue-600/20 border-blue-500 text-blue-300 shadow-md shadow-blue-500/10'
                  : 'bg-white/5 border-white/5 text-slate-400 hover:text-slate-200 hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Connected Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill) => {
            return (
              <div
                key={skill.name}
                className="p-5 rounded-2xl builder-glass border border-white/10 flex flex-col justify-between hover:border-blue-500/40 transition-all duration-300 group builder-card-hover"
              >
                <div className="space-y-2.5">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-display font-bold text-slate-100 group-hover:text-blue-300 transition-colors text-sm sm:text-base">
                      {skill.name}
                    </h4>
                    <Badge variant={levelBadgeVariants[skill.level]} size="sm">
                      {skill.level}
                    </Badge>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                {/* Evidence Linkage Tag */}
                <div className="mt-4 pt-3 border-t border-white/10 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                    <GitBranch className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>Used in:</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {skill.usedInProjects.map((proj) => (
                      <span
                        key={proj}
                        className="px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-[10px] font-mono text-blue-300"
                      >
                        {proj}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Connected Ecosystem Guarantee Footnote */}
        <div className="mt-12 p-4 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between flex-wrap gap-3 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Connected Paradigm: <strong className="text-slate-200">SKILL ➔ REAL PROJECT</strong> (Evidence over subjective claims)</span>
          </div>
          <span className="text-slate-500">Verified BCA Coursework & Active Builds</span>
        </div>
      </div>
    </section>
  );
};
