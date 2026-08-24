import React from 'react';
import { ArrowUp, Mail, ShieldCheck } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { profileData } from '../../data/profile';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 builder-surface-secondary text-slate-400 text-xs font-mono mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Identity */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-blue-600/20 border border-blue-500/40 text-blue-400 flex items-center justify-center text-xs font-mono font-bold">
                K
              </span>
              <span className="font-display font-bold text-slate-100 text-sm">{profileData.name}</span>
            </div>
            <p className="text-slate-400 text-xs max-w-md leading-relaxed font-sans">
              Personal Digital Builder OS · Exploring multi-agent AI systems, full-stack architecture, and refined digital product design.
            </p>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>100% Verified Profile · Zero Fabrication Guarantee</span>
            </div>
          </div>

          {/* Quick Jump */}
          <div className="space-y-2">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-200">
              Navigation
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li><a href="#projects" className="hover:text-blue-400 transition-colors">Selected Builds</a></li>
              <li><a href="#skills" className="hover:text-blue-400 transition-colors">Connected Stack</a></li>
              <li><a href="#journey" className="hover:text-blue-400 transition-colors">Learning Milestones</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About & Ethos</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact Protocol</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-2">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-200">
              Source & Network
            </h4>
            <div className="flex flex-col space-y-1.5 text-xs text-slate-400">
              <a
                href={profileData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-blue-400 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>@sejalpatel9875-del</span>
              </a>
              <a
                href={profileData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-blue-400 transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
              <a
                href={profileData.socialLinks.email}
                className="flex items-center gap-2 hover:text-blue-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{profileData.contactEmail}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Status Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} Kajal Maurya. Built with React 19, TypeScript, Vite & Tailwind CSS.</p>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>OS Operational</span>
            </span>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>TOP</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
