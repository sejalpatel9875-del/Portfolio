import React, { useState } from 'react';
import { User, Layout, GitBranch, Cpu, Bot, Wrench, CheckCircle, ChevronRight } from 'lucide-react';

interface DNANode {
  id: string;
  name: string;
  role: string;
  tech: string;
  description: string;
  icon: React.ReactNode;
}

export const ProjectDNA: React.FC = () => {
  const [selectedNodeIndex, setSelectedNodeIndex] = useState<number>(3); // Default AI node

  const dnaNodes: DNANode[] = [
    {
      id: 'user',
      name: 'USER',
      role: 'Human Intent & Command',
      tech: 'Voice Input / Direct UI Prompt',
      description: 'The initiating point where user queries or voice commands are captured and normalized into session context.',
      icon: <User className="w-4 h-4 text-blue-400" />
    },
    {
      id: 'interface',
      name: 'INTERFACE',
      role: 'Command Dashboard UI',
      tech: 'Next.js, Tailwind CSS, TypeScript',
      description: 'High-performance command center presenting real-time step streaming, telemetry, and approval dialogs.',
      icon: <Layout className="w-4 h-4 text-purple-400" />
    },
    {
      id: 'workflow',
      name: 'WORKFLOW',
      role: 'DAG Task Planner',
      tech: 'State Machine & Dependency Graph',
      description: 'Decomposes complex requests into structured sub-tasks with deterministic tool permissions.',
      icon: <GitBranch className="w-4 h-4 text-cyan-400" />
    },
    {
      id: 'ai',
      name: 'AI RUNTIME',
      role: 'LLM Reasoning & Routing',
      tech: 'Groq (Cloud) / Ollama (Local) / Gemini',
      description: 'High-speed inference kernel that handles structured prompt reasoning and tool calling decisions.',
      icon: <Cpu className="w-4 h-4 text-indigo-400" />
    },
    {
      id: 'agents',
      name: 'AGENTS',
      role: 'Supervisor & Workers',
      tech: 'Python FastAPI Microservices',
      description: 'Specialized task workers (Data Extractor, Code Generator, System Controller) running in parallel.',
      icon: <Bot className="w-4 h-4 text-emerald-400" />
    },
    {
      id: 'tools',
      name: 'TOOLS',
      role: 'Sandboxed System Execution',
      tech: 'Terminal Subprocess, SQL, APIs',
      description: 'Isolated tool executions halted at human-approval gates for critical operations.',
      icon: <Wrench className="w-4 h-4 text-amber-400" />
    },
    {
      id: 'output',
      name: 'OUTPUT',
      role: 'Result & State Persistence',
      tech: 'PostgreSQL, TTS Speech, UI State',
      description: 'Final execution artifact delivered with full audit log and audible/visual feedback.',
      icon: <CheckCircle className="w-4 h-4 text-rose-400" />
    }
  ];

  const activeNode = dnaNodes[selectedNodeIndex];

  return (
    <div className="p-6 md:p-8 rounded-2xl builder-glass border border-white/10 space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-2 pb-4 border-b border-white/10">
        <div>
          <h4 className="text-base font-bold font-display uppercase tracking-wider text-slate-100 flex items-center gap-2">
            <span>Interactive Project DNA Pipeline</span>
          </h4>
          <p className="text-xs text-slate-400">
            Click any node below to inspect execution logic and underlying technology
          </p>
        </div>
        <div className="text-[11px] font-mono px-2.5 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
          7-STAGE PIPELINE
        </div>
      </div>

      {/* Horizontal Node Stepper */}
      <div className="flex items-center justify-between overflow-x-auto pb-2 gap-2 no-scrollbar">
        {dnaNodes.map((node, idx) => {
          const isSelected = selectedNodeIndex === idx;
          return (
            <React.Fragment key={node.id}>
              <button
                onClick={() => setSelectedNodeIndex(idx)}
                className={`p-3 rounded-xl border text-center transition-all duration-200 cursor-pointer shrink-0 min-w-[84px] flex flex-col items-center gap-1.5 ${
                  isSelected
                    ? 'border-blue-500 bg-blue-500/15 shadow-md shadow-blue-500/20 ring-1 ring-blue-500'
                    : 'border-white/5 bg-white/5 hover:border-white/15'
                }`}
              >
                <div className="p-1.5 rounded-lg bg-black/40">{node.icon}</div>
                <span className="text-[10px] font-bold font-display tracking-wider text-slate-200">
                  {node.name}
                </span>
              </button>
              {idx < dnaNodes.length - 1 && (
                <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0 hidden sm:block" />
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Selected Node Inspector Box */}
      <div className="p-5 rounded-xl bg-black/30 border border-white/5 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
        <div className="md:col-span-8 space-y-2">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-blue-500/10">{activeNode.icon}</div>
            <div>
              <div className="text-sm font-bold font-display text-slate-100">
                Stage 0{selectedNodeIndex + 1}: {activeNode.name} — {activeNode.role}
              </div>
              <div className="text-xs text-slate-400">{activeNode.description}</div>
            </div>
          </div>
        </div>

        <div className="md:col-span-4 p-3 rounded-lg bg-white/5 border border-white/5 text-xs font-mono space-y-1">
          <div className="text-[10px] uppercase text-blue-400 font-bold">Tech Implementation</div>
          <div className="text-slate-300 break-words">{activeNode.tech}</div>
        </div>
      </div>
    </div>
  );
};
