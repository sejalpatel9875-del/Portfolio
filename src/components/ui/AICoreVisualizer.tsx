import React, { useState } from 'react';
import { Bot, Code2, Palette, Cpu, Layers } from 'lucide-react';

interface NodeData {
  id: string;
  label: string;
  sub: string;
  icon: React.ReactNode;
  x: number;
  y: number;
  color: string;
}

export const AICoreVisualizer: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const nodes: NodeData[] = [
    {
      id: 'ai',
      label: 'AI & AGENTS',
      sub: 'Multi-Agent Loops & LLMs',
      icon: <Bot className="w-4 h-4 text-blue-400" />,
      x: 50,
      y: 12,
      color: '#3B82F6'
    },
    {
      id: 'code',
      label: 'FULL STACK',
      sub: 'Next.js, FastAPI & SQL',
      icon: <Code2 className="w-4 h-4 text-purple-400" />,
      x: 88,
      y: 38,
      color: '#8B5CF6'
    },
    {
      id: 'automation',
      label: 'AUTOMATION',
      sub: 'Voice Pipelines & Scripts',
      icon: <Cpu className="w-4 h-4 text-cyan-400" />,
      x: 74,
      y: 86,
      color: '#06B6D4'
    },
    {
      id: 'systems',
      label: 'SYSTEMS',
      sub: 'Docker, PostgreSQL & APIs',
      icon: <Layers className="w-4 h-4 text-emerald-400" />,
      x: 26,
      y: 86,
      color: '#10B981'
    },
    {
      id: 'design',
      label: 'PRODUCT DESIGN',
      sub: 'Linear/Stripe Craft UI',
      icon: <Palette className="w-4 h-4 text-rose-400" />,
      x: 12,
      y: 38,
      color: '#F43F5E'
    },
  ];

  return (
    <div className="relative w-full max-w-lg aspect-square mx-auto flex items-center justify-center p-4">
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-purple-600/10 to-cyan-500/10 blur-3xl rounded-full pointer-events-none" />

      {/* SVG Connecting Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
        <defs>
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Center circular radar guides */}
        <circle cx="50" cy="50" r="28" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeDasharray="2 2" />
        <circle cx="50" cy="50" r="38" fill="none" stroke="rgba(255, 255, 255, 0.03)" />

        {/* Lines from center (50, 50) to each node */}
        {nodes.map((node) => {
          const isCurrent = activeNode === node.id;
          return (
            <g key={node.id}>
              <line
                x1="50"
                y1="50"
                x2={node.x}
                y2={node.y}
                stroke={isCurrent ? node.color : 'rgba(255, 255, 255, 0.12)'}
                strokeWidth={isCurrent ? '0.8' : '0.4'}
                strokeDasharray={isCurrent ? 'none' : '1 1'}
                className="transition-all duration-300"
              />
              {/* Pulsing particle on the line */}
              <circle
                cx={50 + (node.x - 50) * 0.6}
                cy={50 + (node.y - 50) * 0.6}
                r={isCurrent ? '1.2' : '0.8'}
                fill={node.color}
                className="animate-pulse"
              />
            </g>
          );
        })}
      </svg>

      {/* Center Intelligence Core */}
      <div className="relative z-20 flex flex-col items-center justify-center w-28 h-28 rounded-full builder-glass border border-blue-500/30 shadow-xl shadow-blue-500/20 group cursor-pointer transition-transform hover:scale-105">
        <div className="absolute inset-1 rounded-full bg-gradient-to-tr from-blue-600/20 via-purple-600/20 to-transparent animate-pulse-subtle" />
        <div className="w-4 h-4 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50 mb-1 animate-ping absolute" />
        <div className="w-3.5 h-3.5 rounded-full bg-blue-400 shadow-md shadow-blue-400 mb-1 relative z-10" />
        <span className="text-[11px] font-bold font-display uppercase tracking-widest text-slate-100 relative z-10">
          BUILDER OS
        </span>
        <span className="text-[9px] font-mono text-blue-400 relative z-10">
          INTELLIGENCE
        </span>
      </div>

      {/* Orbiting Satellite Nodes */}
      {nodes.map((node) => {
        const isCurrent = activeNode === node.id;
        return (
          <div
            key={node.id}
            onMouseEnter={() => setActiveNode(node.id)}
            onMouseLeave={() => setActiveNode(null)}
            className="absolute z-20 -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300"
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
          >
            <div
              className={`p-2.5 rounded-xl builder-glass border flex items-center gap-2 shadow-lg backdrop-blur-md transition-all duration-300 ${
                isCurrent
                  ? 'border-white/40 scale-110 shadow-blue-500/20 bg-slate-900/90'
                  : 'border-white/10 hover:border-white/20 bg-slate-950/70'
              }`}
            >
              <div
                className="p-1.5 rounded-lg shrink-0"
                style={{ backgroundColor: `${node.color}15` }}
              >
                {node.icon}
              </div>
              <div className="text-left hidden sm:block">
                <div className="text-[11px] font-bold font-display tracking-wider text-slate-100">
                  {node.label}
                </div>
                <div className="text-[9px] text-slate-400 font-mono">
                  {node.sub}
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Floating Statement Footer */}
      <div className="absolute bottom-1 text-[10px] font-mono text-slate-500 tracking-wider">
        INTERACTIVE AI CORE · MULTI-DISCIPLINARY ARCHITECTURE
      </div>
    </div>
  );
};
