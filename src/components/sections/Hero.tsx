'use client';

import React from 'react';
import { CisLogo3D } from '../3d/CisLogo3D';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-24 pb-8 bg-transparent border-b border-slate-200 overflow-hidden select-none">
      {/* 1. Full-Screen Interactive 3D Canvas Background */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden opacity-95 pointer-events-auto">
        <CisLogo3D />
      </div>

      {/* Subtle edge blend overlay */}
      <div className="absolute inset-0 pointer-events-none z-1 bg-gradient-to-b from-white/10 via-transparent to-white/60" />

      {/* Top Floating Control Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20 flex items-center justify-between pt-4 mb-2 pointer-events-none">
        <div className="pointer-events-auto font-mono text-xs font-bold text-[#0F172A] uppercase tracking-wider">
          IEEE CIS MUJ • CHAPTER 2024-2026
        </div>
      </div>

      {/* Hero Main Content Floating Layer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20 my-auto py-6">
        <div className="max-w-2xl lg:max-w-3xl space-y-6">
          {/* Main Huge Typography (Direct Crisp Black Font with IEEE Blue Accent) */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-black tracking-tight uppercase leading-[0.93] text-[#0F172A] drop-shadow-xs">
            IEEE COMPUTATIONAL
            <br />
            <span className="text-[#0284C7]">INTELLIGENCE</span>
            <br />
            SOCIETY{' '}
            <span className="font-mono text-3xl sm:text-5xl lg:text-6xl text-slate-400 font-bold">MUJ</span>
          </h1>

          {/* Club Description Box with high-contrast backdrop */}
          <p className="text-base sm:text-lg text-slate-800 font-sans max-w-xl leading-relaxed font-normal bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-200 shadow-sm">
            Manipal University Jaipur&apos;s premier student technology chapter exploring artificial intelligence, neural networks, robotics, competitive coding, and high-octane hackathons.
          </p>

          {/* Club Real Stats */}
          <div className="grid grid-cols-3 gap-3 pt-1 max-w-lg">
            <div className="p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 text-left hover:border-[#0284C7] hover:shadow-md transition-all">
              <span className="text-2xl sm:text-3xl font-display font-black text-[#0F172A] block leading-none">
                1,500+
              </span>
              <span className="font-mono text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-1 block">
                ACTIVE MEMBERS
              </span>
            </div>
            <div className="p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 text-left hover:border-[#0284C7] hover:shadow-md transition-all">
              <span className="text-2xl sm:text-3xl font-display font-black text-[#0284C7] block leading-none">
                30+
              </span>
              <span className="font-mono text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-1 block">
                EVENTS &amp; HACKS
              </span>
            </div>
            <div className="p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 text-left hover:border-[#0284C7] hover:shadow-md transition-all">
              <span className="text-2xl sm:text-3xl font-display font-black text-[#0F172A] block leading-none">
                25+
              </span>
              <span className="font-mono text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-1 block">
                FLAGSHIP PROJECTS
              </span>
            </div>
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
        <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs text-slate-600">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 font-bold">
            <span className="text-[#0284C7] flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#0284C7]" /> 01 / AI &amp; MACHINE LEARNING
            </span>
            <span className="text-[#0F172A] flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#0F172A]" /> 02 / ROBOTICS &amp; EMBEDDED
            </span>
            <span className="text-slate-600 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-slate-400" /> 03 / HACKATHONS &amp; PROJECTS
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#events"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 text-slate-700 hover:text-[#0284C7] font-bold transition-colors cursor-pointer shadow-xs"
            >
              <span>SCROLL TO DISCOVER</span>
              <ArrowDown className="w-3.5 h-3.5 text-[#0284C7] animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
