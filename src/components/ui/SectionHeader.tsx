import React from 'react';
import { TextScramble } from './TextScramble';
import { KineticText } from './KineticText';

interface SectionHeaderProps {
  number?: string;
  badgeText?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  number,
  badgeText,
  title,
  subtitle,
  align = 'left',
}) => {
  return (
    <div className={`mb-10 md:mb-14 ${align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-4xl'}`}>
      <div className={`flex items-center gap-3 mb-3 ${align === 'center' ? 'justify-center' : 'justify-start'}`}>
        {number && (
          <span className="font-mono text-xs text-sky-600 font-bold tracking-widest uppercase">
            // <TextScramble text={number} speed={30} />
          </span>
        )}
        {badgeText && (
          <span className="font-mono text-xs text-[#0284C7] font-bold tracking-widest uppercase">
            {badgeText}
          </span>
        )}
      </div>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-slate-900 uppercase leading-[1.08]">
        <KineticText text={title} />
      </h2>

      {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
