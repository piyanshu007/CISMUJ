import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'blue' | 'black' | 'solid-blue';
  className?: string;
  dot?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'blue',
  className,
  dot = false,
}) => {
  const variantStyles = {
    default: 'bg-white text-slate-800 border-slate-300',
    blue: 'bg-sky-50 text-sky-700 border-sky-200',
    black: 'bg-slate-900 text-white border-slate-900',
    'solid-blue': 'bg-sky-600 text-white border-sky-600',
  };

  const dotColors = {
    default: 'bg-slate-700',
    blue: 'bg-sky-600 animate-pulse',
    black: 'bg-white animate-pulse',
    'solid-blue': 'bg-white',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-mono font-bold tracking-wider uppercase rounded-full border transition-all',
        variantStyles[variant] || variantStyles.blue,
        className
      )}
    >
      {dot && <span className={cn('w-1.5 h-1.5 rounded-full', dotColors[variant] || dotColors.blue)} />}
      {children}
    </span>
  );
};
