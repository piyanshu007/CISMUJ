'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CisLogo3D } from '../3d/CisLogo3D';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] lg:min-h-screen flex flex-col justify-between pt-20 sm:pt-24 pb-6 sm:pb-8 bg-white border-b border-slate-200 overflow-hidden select-none">
      {/* Fluid Ambient Light-Blue & Vibrant Blue Animated Mesh Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Top-Right Glowing Aura behind 3D CIS Logo */}
        <motion.div
          animate={{
            x: [0, 25, -20, 0],
            y: [0, -20, 15, 0],
            scale: [1, 1.08, 0.95, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-20 right-0 lg:right-10 w-[550px] sm:w-[780px] h-[500px] sm:h-[680px] rounded-full opacity-70 blur-3xl pointer-events-none"
          style={{
            background:
              'radial-gradient(circle at 60% 40%, rgba(56, 189, 248, 0.45) 0%, rgba(2, 132, 199, 0.3) 40%, rgba(224, 242, 254, 0.2) 70%, transparent 85%)',
          }}
        />

        {/* Center-Left Ambient Wash behind Main Typography */}
        <motion.div
          animate={{
            x: [0, -20, 15, 0],
            y: [0, 25, -15, 0],
            scale: [1, 0.96, 1.06, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 -left-16 w-[480px] sm:w-[680px] h-[420px] sm:h-[580px] rounded-full opacity-60 blur-3xl pointer-events-none"
          style={{
            background:
              'radial-gradient(circle at 40% 50%, rgba(224, 242, 254, 0.85) 0%, rgba(125, 211, 252, 0.38) 45%, rgba(2, 132, 199, 0.15) 75%, transparent 90%)',
          }}
        />

        {/* Dynamic Center Fluid Gradient Loop Core */}
        <motion.div
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 1.05, 0.98, 1],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/3 right-1/4 w-[420px] sm:w-[560px] h-[380px] sm:h-[480px] rounded-[48%] opacity-45 blur-3xl pointer-events-none"
          style={{
            background:
              'conic-gradient(from 0deg at 50% 50%, rgba(56, 189, 248, 0.42) 0deg, rgba(2, 132, 199, 0.32) 120deg, rgba(224, 242, 254, 0.55) 240deg, rgba(56, 189, 248, 0.42) 360deg)',
          }}
        />
      </div>

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
              <span className="inline-flex items-center gap-2 sm:gap-3 lg:gap-4 align-baseline">
                <img
                  src="/logos/ieee-emblem.svg"
                  alt="IEEE Emblem"
                  className="w-7 h-7 sm:w-12 sm:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 object-contain inline-block shrink-0 -translate-y-0.5 sm:-translate-y-1"
                />
                <span>IEEE</span>
              </span>{' '}
              COMPUTATIONAL
              <br />
              <span className="text-[#0284C7]">INTELLIGENCE</span>
              <br />
              SOCIETY
            </h1>
            <p className="font-sans italic font-semibold text-xs sm:text-sm md:text-base lg:text-lg text-[#0284C7] tracking-normal">
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
