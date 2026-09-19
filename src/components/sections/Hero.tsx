'use client';

import React from 'react';
import { CisLogo3D } from '../3d/CisLogo3D';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] lg:min-h-screen flex flex-col justify-between pt-20 sm:pt-24 pb-6 sm:pb-8 bg-transparent border-b border-slate-200 overflow-hidden select-none">
      {/* 1. Full-Screen Interactive 3D Canvas */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden opacity-100 pointer-events-auto">
        <CisLogo3D />
      </div>

      {/* Top Floating Control Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20 flex items-center justify-between pt-2 sm:pt-4 mb-1 sm:mb-2 pointer-events-none">
        <div className="pointer-events-auto font-mono text-[10px] sm:text-xs font-bold text-[#0F172A] uppercase tracking-wider">
          IEEE CIS MUJ • CHAPTER 2024-2026
        </div>
      </div>

      {/* Hero Main Content Floating Layer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20 my-auto py-3 sm:py-6">
        <div className="max-w-2xl lg:max-w-3xl space-y-4 sm:space-y-6">
          {/* Main Huge Typography (Direct Crisp Black Font with IEEE Blue Accent) */}
          <div className="space-y-1.5 sm:space-y-2">
            <h1 className="text-3xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-black tracking-tight uppercase leading-[0.93] text-[#0F172A] drop-shadow-xs">
              IEEE COMPUTATIONAL
              <br />
              <span className="text-[#0284C7]">INTELLIGENCE</span>
              <br />
              SOCIETY
            </h1>
            <p className="font-sans italic font-semibold text-base sm:text-2xl lg:text-3xl text-[#0284C7] tracking-tight">
              Manipal University Jaipur
            </p>
          </div>


          {/* Action CTAs */}
          <div className="pt-2 flex flex-wrap items-center gap-3 font-mono text-xs">
            <a
              href="/events"
              className="px-6 py-3.5 rounded-xl bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold tracking-wider shadow-[0_4px_14px_rgba(2,132,199,0.3)] hover:shadow-[0_6px_20px_rgba(2,132,199,0.4)] transition-all cursor-pointer inline-block hover:-translate-y-0.5"
            >
              EXPLORE EVENTS &amp; HACKS
            </a>

            <a
              href="/newsletter"
              className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-[#0F172A] border border-slate-200 font-bold tracking-wider transition-all cursor-pointer shadow-xs hover:border-[#0284C7] inline-block hover:-translate-y-0.5"
            >
              READ OUR NEWSLETTER
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Hero Status Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20">
        <div className="pt-2 flex items-center justify-center sm:justify-end font-mono text-xs text-slate-600">
          <a
            href="#events"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 text-slate-700 hover:text-[#0284C7] font-bold transition-colors cursor-pointer shadow-xs"
          >
            <span>SCROLL TO DISCOVER</span>
            <ArrowDown className="w-3.5 h-3.5 text-[#0284C7] animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
