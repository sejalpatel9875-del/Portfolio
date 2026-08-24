import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'glass' | 'solid' | 'gradient' | 'bordered';
  hoverEffect?: boolean;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'glass',
  hoverEffect = true,
  className,
  ...props
}) => {
  const variantStyles = {
    glass: 'bg-slate-900/60 backdrop-blur-md border border-slate-800/80',
    solid: 'bg-slate-900 border border-slate-800',
    gradient: 'bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-slate-950/90 border border-slate-800/90',
    bordered: 'bg-transparent border border-slate-800'
  };

  const hoverStyles = hoverEffect
    ? 'transition-all duration-300 hover:border-slate-700 hover:shadow-xl hover:shadow-indigo-500/5 hover:-translate-y-0.5'
    : '';

  return (
    <div
      className={twMerge(
        clsx('rounded-xl p-5 md:p-6', variantStyles[variant], hoverStyles, className)
      )}
      {...props}
    >
      {children}
    </div>
  );
};
