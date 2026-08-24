import { useState, useEffect } from 'react';
import type { ThemePreset, AppearanceSettings } from '../types';

const STORAGE_KEY = 'km_appearance_settings';

const defaultSettings: AppearanceSettings = {
  preset: 'obsidian',
  customAccent: '#3B82F6',
  glassOpacity: 0.75,
  spotlightEnabled: true,
  motionEnabled: true
};

export function useAppearance() {
  const [settings, setSettings] = useState<AppearanceSettings>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) return JSON.parse(saved);
      } catch (e) {
        console.error('Error loading appearance settings', e);
      }
    }
    return defaultSettings;
  });

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', settings.preset);
    
    // Update custom accent if set
    if (settings.customAccent) {
      root.style.setProperty('--accent-primary', settings.customAccent);
    }
    
    // Update glass blur / opacity
    root.style.setProperty('--glass-blur', `${settings.glassOpacity * 20}px`);

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch (e) {
      console.error('Error saving appearance settings', e);
    }
  }, [settings]);

  const setPreset = (preset: ThemePreset) => {
    setSettings((prev: AppearanceSettings) => ({ ...prev, preset }));
  };

  const updateSetting = <K extends keyof AppearanceSettings>(key: K, value: AppearanceSettings[K]) => {
    setSettings((prev: AppearanceSettings) => ({ ...prev, [key]: value }));
  };

  return { settings, setPreset, updateSetting };
}
