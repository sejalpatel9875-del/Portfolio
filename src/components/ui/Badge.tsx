import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'purple' | 'amber' | 'cyan' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  dot?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  className,
  dot = false
}) => {
  const variantStyles = {
    default: 'bg-slate-800/80 text-slate-300 border-slate-700/60 dark:bg-slate-800/90 dark:text-slate-300',
    primary: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30 dark:bg-indigo-500/15 dark:text-indigo-300',
    success: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30 dark:bg-emerald-500/15 dark:text-emerald-300',
    warning: 'bg-amber-500/10 text-amber-400 border-amber-500/30 dark:bg-amber-500/15 dark:text-amber-300',
    purple: 'bg-purple-500/10 text-purple-400 border-purple-500/30 dark:bg-purple-500/15 dark:text-purple-300',
    amber: 'bg-orange-500/10 text-orange-400 border-orange-500/30 dark:bg-orange-500/15 dark:text-orange-300',
    cyan: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30 dark:bg-cyan-500/15 dark:text-cyan-300',
    outline: 'bg-transparent text-slate-400 border-slate-700/80 hover:border-slate-500'
  };

  const dotColors = {
    default: 'bg-slate-400',
    primary: 'bg-indigo-400',
    success: 'bg-emerald-400',
    warning: 'bg-amber-400',
    purple: 'bg-purple-400',
    amber: 'bg-orange-400',
    cyan: 'bg-cyan-400',
    outline: 'bg-slate-400'
  };

  const sizeStyles = {
    sm: 'text-xs px-2 py-0.5 font-medium',
    md: 'text-xs px-2.5 py-1 font-medium',
    lg: 'text-sm px-3 py-1.5 font-semibold'
  };

  return (
    <span
      className={twMerge(
        clsx(
          'inline-flex items-center gap-1.5 rounded-full border transition-colors select-none',
          variantStyles[variant],
          sizeStyles[size],
          className
        )
      )}
    >
      {dot && (
        <span className={clsx('w-1.5 h-1.5 rounded-full animate-pulse', dotColors[variant])} />
      )}
      {children}
    </span>
  );
};
