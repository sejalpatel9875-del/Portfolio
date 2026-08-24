import React from 'react';
import { Badge } from './Badge';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  centered = true,
  className = ''
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'} ${className}`}>
      {eyebrow && (
        <div className="mb-3">
          <Badge variant="primary" size="md">
            {eyebrow}
          </Badge>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100 mb-4 font-heading">
        {title}
      </h2>
      {description && (
        <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
