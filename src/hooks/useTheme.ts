import { useState, useEffect } from 'react';

export type ThemeMode = 'dark' | 'light';

const THEME_KEY = 'km_portfolio_theme';
const VALID_THEMES: ThemeMode[] = ['dark', 'light'];

export function useTheme() {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem(THEME_KEY);
        if (stored && VALID_THEMES.includes(stored as ThemeMode)) {
          return stored as ThemeMode;
        }
        // Fallback to system preference or default dark
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
          return 'light';
        }
      } catch (e) {
        console.error('Error reading theme from localStorage:', e);
      }
    }
    return 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    // Map 'dark' to obsidian preset tokens, 'light' to paper preset tokens
    const presetName = theme === 'light' ? 'paper' : 'obsidian';
    root.setAttribute('data-theme', presetName);
    
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }

    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch (e) {
      console.error('Error saving theme to localStorage:', e);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return { theme, toggleTheme, setTheme };
}
