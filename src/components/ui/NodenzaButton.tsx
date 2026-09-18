'use client';

import React, { useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface NodenzaButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'contrast';
  className?: string;
  target?: string;
  rel?: string;
}

export const NodenzaButton: React.FC<NodenzaButtonProps> = ({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  target,
  rel,
}) => {
  const buttonRef = useRef<HTMLAnchorElement & HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);

    // Subtle magnetic attraction
    setPosition({ x: x * 0.25, y: y * 0.25 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles =
    'relative inline-flex items-center justify-between gap-3 pl-5 pr-2.5 py-2.5 rounded-full font-mono text-xs font-bold tracking-wider uppercase transition-all duration-300 group cursor-pointer select-none';

  const variantStyles = {
    primary:
      'bg-sky-600 hover:bg-sky-700 text-white shadow-xs border border-sky-600',
    secondary:
      'bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 hover:border-slate-900 shadow-xs',
    contrast:
      'bg-slate-900 hover:bg-black text-white border border-slate-900 shadow-xs',
  };

  const iconContainerStyles = {
    primary: 'bg-white text-sky-600 group-hover:rotate-45',
    secondary: 'bg-slate-900 text-white group-hover:rotate-45',
    contrast: 'bg-white text-slate-900 group-hover:rotate-45',
  };

  const content = (
    <>
      <span className="transition-transform duration-200">{children}</span>
      <span
        className={`w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-300 ease-out shadow-xs ${iconContainerStyles[variant]}`}
      >
        <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
      </span>
    </>
  );

  const style = {
    transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
    transition: position.x === 0 ? 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)' : 'none',
  };

  if (href) {
    return (
      <a
        ref={buttonRef as any}
        href={href}
        target={target}
        rel={rel}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={style}
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      ref={buttonRef as any}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {content}
    </button>
  );
};
