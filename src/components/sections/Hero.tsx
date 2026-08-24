import React from 'react';
import { ArrowRight, Sliders } from 'lucide-react';
import { Button } from '../ui/Button';
import { GithubIcon } from '../ui/Icons';
import { AICoreVisualizer } from '../ui/AICoreVisualizer';
import { profileData } from '../../data/profile';

interface HeroProps {
  onOpenStudio?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenStudio }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Subtle Gradient Accents */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-blue-600/10 via-purple-600/5 to-cyan-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full builder-glass border border-white/10 text-xs font-mono text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{profileData.eyebrow}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display tracking-tight text-slate-100 leading-[1.08]">
              BUILDING DIGITAL
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">
                SYSTEMS WITH AI.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed">
              {profileData.subheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Button
                href="#projects"
                variant="glow"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
              >
                EXPLORE MY WORK
              </Button>
              <Button
                href={profileData.socialLinks.github}
                variant="outline"
                size="lg"
                external
                icon={<GithubIcon className="w-4 h-4" />}
              >
                GITHUB ↗
              </Button>
              {onOpenStudio && (
                <Button
                  onClick={onOpenStudio}
                  variant="secondary"
                  size="lg"
                  icon={<Sliders className="w-4 h-4 text-blue-400" />}
                >
                  CUSTOMIZE OS
                </Button>
              )}
            </div>

            {/* Live Operational Status Footnote */}
            <div className="pt-4 flex items-center gap-4 text-xs font-mono text-slate-500">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span>BUILDER OS v2.4</span>
              </span>
              <span>·</span>
              <span>100% EVIDENCE-BASED</span>
              <span>·</span>
              <span className="hidden sm:inline">ZERO FABRICATION</span>
            </div>
          </div>

          {/* Right Column: Abstract Interactive AI Core Visualizer */}
          <div className="lg:col-span-5">
            <AICoreVisualizer />
          </div>
        </div>
      </div>
    </section>
  );
};
