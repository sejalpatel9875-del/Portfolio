import React from 'react';
import { Activity } from 'lucide-react';

export const WaveformVisualizer: React.FC = () => {

  return (
    <div className="p-5 rounded-xl builder-glass border border-white/10 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-300">
            Voice Runtime Listening
          </span>
        </div>
        <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
          WHISPER STT + GROQ LLM
        </span>
      </div>

      {/* Animated Sound Wave Bars */}
      <div className="h-16 flex items-center justify-center gap-1.5 bg-black/40 rounded-lg p-3 border border-white/5">
        <div className="w-1.5 bg-blue-500 rounded-full animate-wave-1" />
        <div className="w-1.5 bg-indigo-500 rounded-full animate-wave-2" />
        <div className="w-1.5 bg-purple-500 rounded-full animate-wave-3" />
        <div className="w-1.5 bg-cyan-400 rounded-full animate-wave-4" />
        <div className="w-1.5 bg-blue-400 rounded-full animate-wave-5" />
        <div className="w-1.5 bg-indigo-400 rounded-full animate-wave-6" />
        <div className="w-1.5 bg-purple-400 rounded-full animate-wave-2" />
        <div className="w-1.5 bg-blue-500 rounded-full animate-wave-1" />
        <div className="w-1.5 bg-cyan-400 rounded-full animate-wave-4" />
        <div className="w-1.5 bg-indigo-500 rounded-full animate-wave-3" />
        <div className="w-1.5 bg-purple-500 rounded-full animate-wave-5" />
      </div>

      {/* Real-time Streaming State Footnote */}
      <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-1">
        <span className="flex items-center gap-1.5">
          <Activity className="w-3.5 h-3.5 text-blue-400" />
          <span>Inference Latency: ~180ms</span>
        </span>
        <span className="text-slate-500">Local Fallback: Ollama Llama-3</span>
      </div>
    </div>
  );
};
