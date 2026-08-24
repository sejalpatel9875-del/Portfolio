import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { GithubIcon } from '../ui/Icons';
import { projectsData } from '../../data/projects';
import type { Project } from '../../types';
import { ProjectModal } from './ProjectModal';
import { WaveformVisualizer } from '../ui/WaveformVisualizer';
import { ArrowUpRight, CheckCircle2, Bot, Mic, BookOpen, Terminal, ShieldCheck } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const flowpilot = projectsData.find((p) => p.id === 'flowpilot-ai')!;
  const jarvis = projectsData.find((p) => p.id === 'jarvis-ai')!;
  const karya = projectsData.find((p) => p.id === 'karya-pharmacy')!;
  const academic = projectsData.find((p) => p.id === 'academic-systems-lab')!;

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Selected Builds"
          title="Engineered Products & Real Codebases"
          description="Real projects. Real experiments. Real learning — built with multi-agent orchestration, speech-to-text pipelines, and full-stack systems."
        />

        <div className="space-y-12">
          {/* CENTERPIECE 1: FlowPilot AI (Large Cinematic Showcase) */}
          <div className="p-6 md:p-10 rounded-3xl builder-glass border border-white/10 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Details */}
              <div className="lg:col-span-6 space-y-5 text-left">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    FEATURED AI CENTERPIECE
                  </span>
                  <Badge variant="primary" size="sm">
                    {flowpilot.status}
                  </Badge>
                </div>

                <div>
                  <h3 className="text-3xl sm:text-4xl font-bold font-display text-slate-100 group-hover:text-blue-400 transition-colors">
                    {flowpilot.title}
                  </h3>
                  <p className="text-sm font-medium text-slate-300 mt-1">
                    {flowpilot.subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {flowpilot.shortDescription}
                </p>

                {/* Key Built Highlights */}
                <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold">
                    Key Implementations:
                  </span>
                  <ul className="space-y-1 text-xs text-slate-300">
                    {flowpilot.whatBuilt.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {flowpilot.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[11px] font-mono text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="pt-4 flex items-center gap-3">
                  <Button
                    onClick={() => setSelectedProject(flowpilot)}
                    variant="glow"
                    size="md"
                    icon={<ArrowUpRight className="w-4 h-4" />}
                    iconPosition="right"
                  >
                    View Case Study & DNA
                  </Button>
                  {flowpilot.githubUrl && (
                    <Button
                      href={flowpilot.githubUrl}
                      external
                      variant="outline"
                      size="md"
                      icon={<GithubIcon className="w-4 h-4" />}
                    >
                      Source Code
                    </Button>
                  )}
                </div>
              </div>

              {/* Right: Live Interactive Workflow Preview Mockup */}
              <div className="lg:col-span-6 p-5 rounded-2xl bg-slate-950/90 border border-white/10 shadow-2xl space-y-4 font-mono text-xs">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <Bot className="w-4 h-4 text-blue-400" />
                    <span className="font-bold text-slate-200">FlowPilot Command Engine</span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    SUPERVISOR ONLINE
                  </span>
                </div>

                {/* Workflow Simulation Graph */}
                <div className="space-y-2.5 text-[11px]">
                  <div className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-300 flex items-center justify-between">
                    <span>1. High-Level Objective Decomposed</span>
                    <span className="text-[9px] text-blue-400">Gemini 2.0 Flash</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-300 flex items-center justify-between">
                    <span>2. Worker Sandbox [Data Extractor]</span>
                    <span className="text-[9px] text-purple-400">FastAPI Async</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-300 flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                      <span>3. Human Approval Gate [HALTED FOR REVIEW]</span>
                    </span>
                    <span className="text-[9px] text-amber-400 font-bold">WAITING SIGN-OFF</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 flex items-center justify-between">
                    <span>4. State Synced & Telemetry Logged</span>
                    <span className="text-[9px] text-emerald-400">PostgreSQL Store</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* DUAL GRID: Jarvis AI + Karya Pharmacy */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Project 2: Jarvis AI */}
            <div className="p-6 md:p-8 rounded-2xl builder-glass border border-white/10 flex flex-col justify-between space-y-6 group builder-card-hover">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                      <Mic className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400">
                        Voice Assistant
                      </span>
                      <h3 className="text-2xl font-bold font-display text-slate-100 group-hover:text-cyan-400 transition-colors">
                        {jarvis.title}
                      </h3>
                    </div>
                  </div>
                  <Badge variant="warning" size="sm">
                    {jarvis.status}
                  </Badge>
                </div>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {jarvis.shortDescription}
                </p>

                {/* Animated Sound Wave Visualizer */}
                <WaveformVisualizer />

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {jarvis.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[11px] font-mono text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                <Button
                  onClick={() => setSelectedProject(jarvis)}
                  variant="outline"
                  size="sm"
                  icon={<ArrowUpRight className="w-4 h-4" />}
                  iconPosition="right"
                >
                  Case Study & Specs
                </Button>
                {jarvis.githubUrl && (
                  <a
                    href={jarvis.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors border border-white/10"
                    title="Source Code"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

            {/* Project 3: Karya Pharmacy */}
            <div className="p-6 md:p-8 rounded-2xl builder-glass border border-white/10 flex flex-col justify-between space-y-6 group builder-card-hover">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-purple-400">
                        EdTech & Course Portal
                      </span>
                      <h3 className="text-2xl font-bold font-display text-slate-100 group-hover:text-purple-400 transition-colors">
                        {karya.title}
                      </h3>
                    </div>
                  </div>
                  <Badge variant="purple" size="sm">
                    {karya.status}
                  </Badge>
                </div>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {karya.shortDescription}
                </p>

                {/* Dashboard Features Mini Grid */}
                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  <div className="p-3 rounded-lg bg-black/40 border border-white/5 text-slate-300">
                    <div className="text-purple-400 font-bold mb-0.5">Role Auth</div>
                    <div className="text-[10px] text-slate-400">Student & Admin</div>
                  </div>
                  <div className="p-3 rounded-lg bg-black/40 border border-white/5 text-slate-300">
                    <div className="text-blue-400 font-bold mb-0.5">Lecture Replays</div>
                    <div className="text-[10px] text-slate-400">Notes & PDF Lib</div>
                  </div>
                  <div className="p-3 rounded-lg bg-black/40 border border-white/5 text-slate-300">
                    <div className="text-emerald-400 font-bold mb-0.5">Attendance</div>
                    <div className="text-[10px] text-slate-400">Progression Tracker</div>
                  </div>
                  <div className="p-3 rounded-lg bg-black/40 border border-white/5 text-slate-300">
                    <div className="text-cyan-400 font-bold mb-0.5">SQL Store</div>
                    <div className="text-[10px] text-slate-400">PostgreSQL Schema</div>
                  </div>
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {karya.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[11px] font-mono text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                <Button
                  onClick={() => setSelectedProject(karya)}
                  variant="outline"
                  size="sm"
                  icon={<ArrowUpRight className="w-4 h-4" />}
                  iconPosition="right"
                >
                  Case Study & Architecture
                </Button>
                {karya.githubUrl && (
                  <a
                    href={karya.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors border border-white/10"
                    title="Source Code"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* PROJECT 4: Academic & Systems Lab Bar */}
          <div className="p-6 rounded-2xl builder-glass border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-300">
                <Terminal className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h4 className="text-base font-bold font-display text-slate-100">
                  {academic.title}
                </h4>
                <p className="text-xs text-slate-400">
                  Java OOP Data Structures · DBMS 3NF Relational Modeling · OS CPU Scheduling Simulators
                </p>
              </div>
            </div>
            <Button
              onClick={() => setSelectedProject(academic)}
              variant="outline"
              size="sm"
              icon={<ArrowUpRight className="w-3.5 h-3.5" />}
              iconPosition="right"
            >
              Inspect Drills
            </Button>
          </div>
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
