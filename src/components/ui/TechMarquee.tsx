'use client';

import React from 'react';

interface PureLogoItem {
  alt: string;
  imageSrc: string;
  className?: string;
}

const brandLogos: PureLogoItem[] = [
  {
    alt: 'Genesis MUJ',
    imageSrc: '/logos/genesis-logo-dark.png',
    className: 'h-8 sm:h-9 max-w-[180px]',
  },
  {
    alt: 'IEEE CIS Logo',
    imageSrc: '/logo-mark.png',
    className: 'h-10 sm:h-11 max-w-[90px]',
  },
  {
    alt: 'WebForge Hackathon',
    imageSrc: '/logos/webforge-logo.png',
    className: 'h-9 sm:h-10 max-w-[170px] rounded-lg object-cover',
  },
  {
    alt: 'IEEE Official Logo',
    imageSrc: '/logos/ieee-logo.svg',
    className: 'h-7 sm:h-8 max-w-[140px]',
  },
  {
    alt: 'Cyber Mafia Event',
    imageSrc: '/logos/cybermafia-logo.png',
    className: 'h-9 sm:h-10 max-w-[150px] rounded-lg object-cover',
  },
  {
    alt: 'Genesis Emblem',
    imageSrc: '/logos/genesis-icon-blue.png',
    className: 'h-9 sm:h-10 max-w-[90px]',
  },
];

export const TechMarquee: React.FC = () => {
  return (
    <section className="w-full py-5 bg-slate-50/70 border-y border-slate-200 overflow-hidden relative select-none">
      {/* Subtle edge fades for infinite depth */}
      <div className="absolute left-0 inset-y-0 w-16 sm:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-16 sm:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

      {/* Single Continuous Flowing Row */}
      <div className="flex w-max animate-marquee space-x-4 hover:[animation-play-state:paused]">
        {[...brandLogos, ...brandLogos, ...brandLogos, ...brandLogos].map((item, idx) => (
          <div
            key={`logo-${idx}`}
            className="h-16 px-6 sm:px-8 rounded-2xl bg-white border border-slate-200 hover:border-[#0284C7] hover:shadow-[0_4px_16px_rgba(2,132,199,0.15)] transition-all duration-300 flex items-center justify-center group cursor-pointer hover:-translate-y-0.5 shrink-0"
          >
            <img
              src={item.imageSrc}
              alt={item.alt}
              className={`${item.className} w-auto object-contain transition-transform duration-300 group-hover:scale-105`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};



