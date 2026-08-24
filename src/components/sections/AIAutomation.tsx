import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { aiWorkflowPhases, supportedAIProviders } from '../../data/aiWorkflow';
import { Bot } from 'lucide-react';

export const AIAutomation: React.FC = () => {
  const [activePhaseIndex, setActivePhaseIndex] = useState<number>(0);
  const activePhase = aiWorkflowPhases[activePhaseIndex];

  return (
    <section id="ai-automation" className="py-20 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="AI & Automation Engineering"
          title="Multi-Agent Systems & LLM Tool Orchestration"
          description="How I architect practical multi-agent loops, voice recognition pipelines, local model inference, and deterministic human-approval safety gates."
        />

        {/* Interactive Multi-Agent Execution Visualizer */}
        <div className="mb-16">
          <div className="p-6 md:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-2xl backdrop-blur-xl">
            <div className="flex items-center justify-between pb-6 border-b border-slate-800/80 mb-6 flex-wrap gap-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-100 font-heading">
                    Multi-Agent Execution Pipeline (FlowPilot Engine)
                  </h3>
                  <p className="text-xs text-slate-400">
                    Step-by-step interactive breakdown of task decomposition, tool sandboxing, and approval gates.
                  </p>
                </div>
              </div>
              <Badge variant="primary" size="sm">
                Interactive Simulation
              </Badge>
            </div>

            {/* Step Selector Horizontal Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-8">
              {aiWorkflowPhases.map((phase, idx) => (
                <button
                  key={phase.id}
                  onClick={() => setActivePhaseIndex(idx)}
                  className={`p-3 rounded-xl text-left transition-all duration-200 cursor-pointer border ${
                    activePhaseIndex === idx
                      ? 'bg-indigo-600/20 border-indigo-500 text-white shadow-lg shadow-indigo-500/10'
                      : 'bg-slate-950/40 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] font-mono mb-1">
                    <span>Phase 0{idx + 1}</span>
                    {activePhaseIndex === idx && (
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-ping" />
                    )}
                  </div>
                  <div className="text-xs font-semibold truncate">{phase.badge}</div>
                </button>
              ))}
            </div>

            {/* Active Phase Deep Dive Detail Box */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-slate-950/70 p-6 rounded-xl border border-slate-800/80">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2">
                  <Badge variant="primary" size="sm">
                    {activePhase.badge}
                  </Badge>
                  <h4 className="text-base font-bold text-slate-100 font-heading">
                    {activePhase.name}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {activePhase.description}
                </p>

                <div className="space-y-1.5">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Target Technologies:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activePhase.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-xs font-mono text-indigo-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Input/Output Data Sandbox */}
              <div className="lg:col-span-5 space-y-3 font-mono text-xs">
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-1">
                  <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-bold">
                    Input Stream / Context
                  </span>
                  <div className="text-slate-300 break-words">{activePhase.inputOutput.input}</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-1">
                  <span className="text-[10px] uppercase tracking-wider text-cyan-400 font-bold">
                    Output Payload / State Event
                  </span>
                  <div className="text-slate-300 break-words">{activePhase.inputOutput.output}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Supported AI Ecosystem & Model Routing */}
        <div>
          <h3 className="text-xl font-bold text-slate-100 mb-6 font-heading text-center sm:text-left">
            Explored AI Ecosystem & Inference Layer
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {supportedAIProviders.map((prov) => (
              <Card key={prov.name} variant="glass" className="p-5 space-y-2.5">
                <div className="flex items-start justify-between gap-2">
                  <h4 className="font-semibold text-slate-100 text-sm">{prov.name}</h4>
                  <Badge variant={prov.tier.includes('Hands-on') ? 'success' : 'amber'} size="sm">
                    {prov.tier}
                  </Badge>
                </div>
                <div className="text-xs font-mono text-indigo-300">{prov.type}</div>
                <p className="text-xs text-slate-400 leading-relaxed">{prov.useCase}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
