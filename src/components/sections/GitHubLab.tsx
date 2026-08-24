import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { GitBranch, ExternalLink } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';
import { profileData } from '../../data/profile';
import { projectsData } from '../../data/projects';

export const GitHubLab: React.FC = () => {
  return (
    <section id="github-lab" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Open Source & Code Lab"
          title="Source Code & Repository Studio"
          description="Direct access to verified repositories on GitHub — clean commit discipline and open architectures."
        />

        {/* GitHub × Linear Profile Header */}
        <div className="mb-10 p-6 md:p-8 rounded-2xl builder-glass border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white shadow-xl shadow-blue-500/20">
              <GithubIcon className="w-8 h-8" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold font-display text-slate-100">
                  sejalpatel9875-del
                </h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  ACTIVE
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono mt-0.5">
                https://github.com/sejalpatel9875-del
              </p>
            </div>
          </div>

          <Button
            href={profileData.socialLinks.github}
            external
            variant="glow"
            size="md"
            icon={<ExternalLink className="w-4 h-4" />}
            iconPosition="right"
          >
            VIEW GITHUB ↗
          </Button>
        </div>

        {/* Repository Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="p-6 rounded-2xl builder-glass border border-white/10 space-y-4 flex flex-col justify-between hover:border-white/20 transition-all builder-card-hover"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2 font-mono text-sm font-bold text-slate-200">
                    <GithubIcon className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>sejalpatel9875-del/{project.id}</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/10">
                    Public
                  </span>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {project.shortDescription}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.techStack.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-black/40 text-[10px] font-mono text-slate-400 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <GitBranch className="w-3.5 h-3.5 text-blue-400" />
                  <span>main</span>
                </span>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline flex items-center gap-1"
                  >
                    <span>Inspect Code</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
