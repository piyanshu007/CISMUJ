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
    <section className="w-full py-4 sm:py-6 bg-white border-b border-slate-100 overflow-hidden relative select-none">
      {/* Subtle edge fades for infinite depth */}
      <div className="absolute left-0 inset-y-0 w-16 sm:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-16 sm:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

      {/* Single Continuous Flowing Row with Pure Logos (No Background Tabs) */}
      <div className="flex w-max items-center animate-marquee space-x-8 sm:space-x-12 hover:[animation-play-state:paused]">
        {[...brandLogos, ...brandLogos, ...brandLogos, ...brandLogos].map((item, idx) => (
          <div
            key={`logo-${idx}`}
            className="flex items-center justify-center px-4 sm:px-6 transition-transform duration-300 hover:scale-110 shrink-0 cursor-pointer"
          >
            <img
              src={item.imageSrc}
              alt={item.alt}
              className={`${item.className} w-auto object-contain filter contrast-[1.05]`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};



