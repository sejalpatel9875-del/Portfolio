import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, ArrowRight } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';
import { profileData } from '../../data/profile';
import { useTheme } from '../../hooks/useTheme';

const navItems = [
  { label: 'SERVICES', href: '#services' },
  { label: 'WORK', href: '#projects' },
  { label: 'WHY ME', href: '#why-me' },
  { label: 'ABOUT', href: '#about' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Floating Desktop & Tablet Navbar */}
      <header className="fixed top-4 left-0 right-0 z-40 px-4 sm:px-6 flex justify-center pointer-events-none">
        <nav
          className={`pointer-events-auto transition-all duration-300 rounded-full builder-glass border border-white/10 shadow-2xl flex items-center justify-between gap-6 sm:gap-8 ${
            isScrolled
              ? 'py-2 px-4 sm:px-6 bg-slate-950/85 backdrop-blur-xl scale-[0.98]'
              : 'py-2.5 px-5 sm:px-7 bg-slate-950/70 backdrop-blur-lg'
          }`}
        >
          {/* Left: Brand Monogram */}
          <a
            href="#"
            className="flex items-center gap-2 font-display font-bold text-sm tracking-wider text-slate-100 hover:text-blue-400 transition-colors"
          >
            <span className="w-6 h-6 rounded-md bg-blue-600/20 border border-blue-500/40 text-blue-400 flex items-center justify-center text-xs font-mono font-bold">
              K
            </span>
            <span>KAJAL.M</span>
          </a>

          {/* Center Navigation Links */}
          <div className="hidden md:flex items-center gap-6 text-xs font-mono tracking-widest text-slate-300">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-white transition-colors relative py-1 hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:right-0 hover:after:h-[1px] hover:after:bg-blue-400"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right: Theme Toggle & Direct Start Project CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors border border-white/10 cursor-pointer"
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            </button>

            <a
              href={profileData.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors border border-white/10 hidden sm:flex"
              title="GitHub Profile"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-3.5 h-3.5" />
            </a>

            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono font-bold transition-all shadow-sm shadow-blue-500/25"
            >
              <span>START A PROJECT</span>
              <ArrowRight className="w-3 h-3" />
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white md:hidden cursor-pointer"
              aria-label="Toggle navigation"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-x-4 top-20 z-40 md:hidden p-5 rounded-2xl builder-glass border border-white/10 shadow-2xl space-y-4 animate-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-2 text-xs font-mono">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-slate-200 hover:bg-white/10 text-center"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex items-center justify-between pt-2 border-t border-white/10 text-xs font-mono">
            <a
              href={profileData.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-slate-300 hover:text-white"
            >
              <GithubIcon className="w-4 h-4" />
              <span>@sejalpatel9875-del</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="px-3 py-1 rounded-lg bg-blue-600 text-white font-bold"
            >
              Start Project →
            </a>
          </div>
        </div>
      )}
    </>
  );
};
