'use client';

import React, { useEffect, useState } from 'react';

interface KineticTextProps {
  text: string;
  className?: string;
  delay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'span' | 'p';
}

export const KineticText: React.FC<KineticTextProps> = ({
  text,
  className = '',
  delay = 0,
  as: Component = 'span',
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <Component className={`inline-block ${className}`}>
      <span
        className={`inline-block transition-all duration-700 ease-out ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
        }`}
      >
        {text}
      </span>
    </Component>
  );
};
