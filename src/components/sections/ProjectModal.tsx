import React, { useState } from 'react';
import type { Project } from '../../types';
import { Modal } from '../ui/Modal';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { GithubIcon } from '../ui/Icons';
import { ProjectDNA } from '../ui/ProjectDNA';
import { CheckCircle2, Sparkles } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'dna' | 'approach' | 'features' | 'learnings'>('overview');

  if (!project) return null;

  const statusVariants: Record<string, 'primary' | 'warning' | 'purple' | 'cyan' | 'default'> = {
    Building: 'primary',
    Prototype: 'purple',
    Experimental: 'warning',
    Academic: 'cyan',
    Completed: 'default'
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      maxWidth="4xl"
      title={
        <div className="flex items-center gap-3">
          <span className="font-display font-bold text-lg">{project.title}</span>
          <Badge variant={statusVariants[project.status] || 'default'} size="sm">
            {project.status}
          </Badge>
        </div>
      }
    >
      <div className="space-y-6 text-sm text-slate-300">
        {/* Navigation Tabs */}
        <div className="flex items-center gap-1.5 border-b border-white/10 pb-2 overflow-x-auto no-scrollbar">
          {(
            [
              { id: 'overview', label: 'Overview' },
              { id: 'dna', label: 'Project DNA' },
              { id: 'approach', label: 'Problem & Approach' },
              { id: 'features', label: 'Architecture & Tech' },
              { id: 'learnings', label: 'Key Learnings' },
            ] as const
          ).map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-colors cursor-pointer shrink-0 ${
                activeTab === tab.id
                  ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab 1: Overview */}
        {activeTab === 'overview' && (
          <div className="space-y-5 animate-in fade-in duration-200">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
              <span className="text-[10px] font-mono text-blue-400 uppercase tracking-wider">
                Product Vision
              </span>
              <p className="text-slate-100 text-base font-display font-medium">
                {project.tagline}
              </p>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-wider font-mono font-semibold text-slate-400 mb-2">
                Executive Summary
              </h4>
              <p className="text-slate-300 leading-relaxed">
                {project.shortDescription}
              </p>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-wider font-mono font-semibold text-slate-400 mb-2">
                What Was Engineered
              </h4>
              <ul className="space-y-2">
                {project.whatBuilt.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-3.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs text-blue-300 flex items-start gap-2">
              <Sparkles className="w-4 h-4 shrink-0 mt-0.5 text-blue-400" />
              <div>
                <strong>My Engineering Role:</strong> {project.role}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Project DNA Interactive Visualizer */}
        {activeTab === 'dna' && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <ProjectDNA />
          </div>
        )}

        {/* Tab 3: Problem & Approach */}
        {activeTab === 'approach' && (
          <div className="space-y-5 animate-in fade-in duration-200">
            <div>
              <h4 className="text-xs uppercase tracking-wider font-mono font-semibold text-slate-400 mb-1.5">
                The Engineering Challenge
              </h4>
              <p className="text-slate-200 leading-relaxed bg-black/40 p-4 rounded-xl border border-white/5">
                {project.problemStatement}
              </p>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-wider font-mono font-semibold text-slate-400 mb-1.5">
                Technical Strategy & Solution
              </h4>
              <p className="text-slate-300 leading-relaxed bg-black/40 p-4 rounded-xl border border-white/5">
                {project.approach}
              </p>
            </div>
          </div>
        )}

        {/* Tab 4: Architecture & Features */}
        {activeTab === 'features' && (
          <div className="space-y-5 animate-in fade-in duration-200">
            <div>
              <h4 className="text-xs uppercase tracking-wider font-mono font-semibold text-slate-400 mb-2">
                Core Feature Set
              </h4>
              <ul className="space-y-2">
                {project.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0 mt-2" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-wider font-mono font-semibold text-slate-400 mb-2">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-xs text-slate-200 font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 5: Learnings */}
        {activeTab === 'learnings' && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <div className="p-4 rounded-xl bg-black/30 border border-white/5 space-y-2">
              <h4 className="text-sm font-bold font-display text-slate-200">
                Key Technical Takeaways
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {project.verifiedNotes}
              </p>
            </div>
          </div>
        )}

        {/* Modal Footer Actions */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <Button
                href={project.githubUrl}
                external
                variant="secondary"
                size="sm"
                icon={<GithubIcon className="w-4 h-4" />}
              >
                View Repository
              </Button>
            )}
          </div>

          <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Verified Grounded Project</span>
          </div>
        </div>
      </div>
    </Modal>
  );
};
