import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Bot, Code2, Palette, Cpu, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const WhatIBuild: React.FC = () => {
  const pillars = [
    {
      id: 'ai-systems',
      title: 'AI SYSTEMS',
      badge: 'Agent Orchestration',
      description: 'Designing autonomous multi-agent pipelines with supervisor delegation, deterministic tool calling, and human-in-the-loop approval gates.',
      details: [
        'Multi-agent workflow planning (Supervisor pattern)',
        'Low-latency LLM stream integrations (Groq & Gemini)',
        'Local offline model execution with Ollama',
        'Human approval checkpoints for critical operations'
      ],
      icon: <Bot className="w-6 h-6 text-blue-400" />,
      color: '#3B82F6',
      accentBg: 'bg-blue-500/10 border-blue-500/20 text-blue-400'
    },
    {
      id: 'full-stack',
      title: 'FULL STACK',
      badge: 'Systems & APIs',
      description: 'Building end-to-end web applications combining responsive React/Next.js interfaces with asynchronous FastAPI/Node backend services.',
      details: [
        'App Router SSR & Client Component architecture',
        'High-performance Python FastAPI REST endpoints',
        'Relational database schemas with PostgreSQL',
        'Docker containerization & Railway/Vercel deployment'
      ],
      icon: <Code2 className="w-6 h-6 text-purple-400" />,
      color: '#8B5CF6',
      accentBg: 'bg-purple-500/10 border-purple-500/20 text-purple-400'
    },
    {
      id: 'product-design',
      title: 'PRODUCT DESIGN',
      badge: 'Interface Craft',
      description: 'Crafting restrained, high-contrast SaaS interfaces inspired by the simplicity of Apple and the polish of Linear and Stripe.',
      details: [
        'Strict typography scale with Space Grotesk & Inter',
        'Controlled glassmorphism depth & tokenized palettes',
        'Accessible WCAG contrast ratios & keyboard navigation',
        'Micro-interactions that communicate state effortlessly'
      ],
      icon: <Palette className="w-6 h-6 text-rose-400" />,
      color: '#F43F5E',
      accentBg: 'bg-rose-500/10 border-rose-500/20 text-rose-400'
    },
    {
      id: 'automation',
      title: 'AUTOMATION',
      badge: 'Workflows & Pipelines',
      description: 'Developing voice-assisted tools, speech-to-text transcription flows, background worker tasks, and automated system scripts.',
      details: [
        'Real-time voice processing using OpenAI Whisper',
        'Text-to-speech audio feedback interaction loops',
        'OS subprocess and terminal automation scripting',
        'Telemetry audit logs for token usage and latency'
      ],
      icon: <Cpu className="w-6 h-6 text-cyan-400" />,
      color: '#06B6D4',
      accentBg: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400'
    }
  ];

  return (
    <section id="what-i-build" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Core Competencies"
          title="What I Build"
          description="Four interconnected disciplines forming a unified builder philosophy — merging intelligence, engineering, design, and automation."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="p-6 md:p-8 rounded-2xl builder-glass border border-white/10 flex flex-col justify-between group builder-card-hover cursor-pointer"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                    {pillar.icon}
                  </div>
                  <span className={`text-xs font-mono font-semibold px-2.5 py-1 rounded-full border ${pillar.accentBg}`}>
                    {pillar.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold font-display text-slate-100 group-hover:text-blue-400 transition-colors flex items-center justify-between">
                    <span>{pillar.title}</span>
                    <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mt-2">
                    {pillar.description}
                  </p>
                </div>

                {/* Expandable Revealed Details */}
                <div className="pt-4 border-t border-white/10 space-y-2">
                  <span className="text-[11px] font-mono font-semibold text-slate-400 uppercase tracking-wider">
                    Core Implementations:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {pillar.details.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
