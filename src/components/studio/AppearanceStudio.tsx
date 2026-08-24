import React, { useEffect } from 'react';
import { X, Sliders, Sparkles, Activity, RotateCcw, Check } from 'lucide-react';
import type { ThemePreset, AppearanceSettings } from '../../types';

interface AppearanceStudioProps {
  isOpen: boolean;
  onClose: () => void;
  settings: AppearanceSettings;
  setPreset: (preset: ThemePreset) => void;
  updateSetting: <K extends keyof AppearanceSettings>(key: K, value: AppearanceSettings[K]) => void;
}

const presets: { id: ThemePreset; name: string; desc: string; previewBg: string; previewAccent: string }[] = [
  { id: 'obsidian', name: 'OBSIDIAN', desc: 'Default Command Center', previewBg: '#08090C', previewAccent: '#3B82F6' },
  { id: 'paper', name: 'PAPER', desc: 'Editorial Minimal Light', previewBg: '#F7F7F4', previewAccent: '#1D4ED8' },
  { id: 'aurora', name: 'AURORA', desc: 'Emerald Obsidian Depth', previewBg: '#06120E', previewAccent: '#10B981' },
  { id: 'arctic', name: 'ARCTIC', desc: 'Frost Blue Titanium', previewBg: '#0B101B', previewAccent: '#38BDF8' },
  { id: 'midnight', name: 'MIDNIGHT', desc: 'Deep Space Navy', previewBg: '#050814', previewAccent: '#6366F1' },
  { id: 'sunset', name: 'SUNSET', desc: 'Ember Rose Obsidian', previewBg: '#12090C', previewAccent: '#F43F5E' },
];

const accentColors = [
  { name: 'Electric Blue', hex: '#3B82F6' },
  { name: 'Violet', hex: '#8B5CF6' },
  { name: 'Cyan', hex: '#06B6D4' },
  { name: 'Emerald', hex: '#10B981' },
  { name: 'Rose', hex: '#F43F5E' },
  { name: 'Amber', hex: '#F59E0B' },
];

export const AppearanceStudio: React.FC<AppearanceStudioProps> = ({
  isOpen,
  onClose,
  settings,
  setPreset,
  updateSetting
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-out Drawer */}
      <div className="relative w-full max-w-md h-full builder-glass border-l border-white/10 p-6 shadow-2xl flex flex-col justify-between overflow-y-auto z-10 animate-in slide-in-from-right duration-300">
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                <Sliders className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold font-display uppercase tracking-wider text-slate-100">
                  Adaptive Appearance Studio
                </h3>
                <p className="text-[11px] text-slate-400">
                  Personal Digital Builder OS Customizer
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-white/5 transition-colors cursor-pointer"
              aria-label="Close Studio"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Theme Presets Selection */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-300 font-display uppercase tracking-wider">
                Interface Presets
              </span>
              <span className="text-[10px] font-mono text-slate-500">6 Available</span>
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              {presets.map((p) => {
                const isActive = settings.preset === p.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => {
                      setPreset(p.id);
                      updateSetting('customAccent', p.previewAccent);
                    }}
                    className={`p-3 rounded-xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between h-20 relative overflow-hidden ${
                      isActive
                        ? 'border-blue-500 bg-white/5 shadow-md shadow-blue-500/10 ring-1 ring-blue-500/50'
                        : 'border-white/5 bg-black/20 hover:border-white/15'
                    }`}
                    style={{ backgroundColor: p.previewBg }}
                  >
                    <div className="flex items-center justify-between w-full">
                      <div
                        className="w-3.5 h-3.5 rounded-full border border-white/20"
                        style={{ backgroundColor: p.previewAccent }}
                      />
                      {isActive && <Check className="w-3.5 h-3.5 text-blue-400" />}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-100 font-display">
                        {p.name}
                      </div>
                      <div className="text-[9px] text-slate-400 line-clamp-1">
                        {p.desc}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Accent Color Tuner */}
          <div className="space-y-2.5 pt-4 border-t border-white/10">
            <span className="text-xs font-semibold text-slate-300 font-display uppercase tracking-wider">
              Strategic Accent Swatch
            </span>
            <div className="flex items-center justify-between gap-2">
              {accentColors.map((color) => (
                <button
                  key={color.hex}
                  onClick={() => updateSetting('customAccent', color.hex)}
                  className={`w-8 h-8 rounded-full transition-transform cursor-pointer flex items-center justify-center border-2 ${
                    settings.customAccent === color.hex ? 'scale-110 border-white' : 'border-transparent opacity-80 hover:opacity-100'
                  }`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                >
                  {settings.customAccent === color.hex && (
                    <Check className="w-3.5 h-3.5 text-white" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Depth & Glass Intensity */}
          <div className="space-y-2.5 pt-4 border-t border-white/10">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-300 font-display uppercase tracking-wider">
                Glass Blur Depth
              </span>
              <span className="text-xs font-mono text-blue-400">
                {Math.round(settings.glassOpacity * 20)}px
              </span>
            </div>
            <input
              type="range"
              min="0.3"
              max="1"
              step="0.05"
              value={settings.glassOpacity}
              onChange={(e) => updateSetting('glassOpacity', parseFloat(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
            />
          </div>

          {/* Toggles */}
          <div className="space-y-3 pt-4 border-t border-white/10">
            <span className="text-xs font-semibold text-slate-300 font-display uppercase tracking-wider">
              Interactive Micro-Behaviors
            </span>
            
            {/* Cursor Glow */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span className="text-xs text-slate-200">Cursor Ambient Spotlight</span>
              </div>
              <input
                type="checkbox"
                checked={settings.spotlightEnabled}
                onChange={(e) => updateSetting('spotlightEnabled', e.target.checked)}
                className="w-4 h-4 accent-blue-500 rounded cursor-pointer"
              />
            </div>

            {/* Motion Animations */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-purple-400" />
                <span className="text-xs text-slate-200">Fluid Micro-Animations</span>
              </div>
              <input
                type="checkbox"
                checked={settings.motionEnabled}
                onChange={(e) => updateSetting('motionEnabled', e.target.checked)}
                className="w-4 h-4 accent-blue-500 rounded cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Footer Reset & Apply */}
        <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs">
          <button
            onClick={() => {
              setPreset('obsidian');
              updateSetting('customAccent', '#3B82F6');
              updateSetting('glassOpacity', 0.75);
              updateSetting('spotlightEnabled', true);
              updateSetting('motionEnabled', true);
            }}
            className="flex items-center gap-1 text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset to Obsidian</span>
          </button>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors cursor-pointer shadow-md shadow-blue-500/20"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
