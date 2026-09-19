'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { CyberBrainVisual } from '@/components/animated/CyberBrainVisual';

import { OrbitalCore3D } from '@/components/3d/OrbitalCore3D';

export const WhatIsCis: React.FC = () => {
  return (
    <section className="relative w-full bg-white text-[#0F172A] overflow-hidden select-none">
      {/* Soft ethereal ambient background glow */}
      <div
        className="absolute top-0 right-0 w-[850px] h-[700px] rounded-full pointer-events-none opacity-45"
        style={{
          background:
            'radial-gradient(circle at 65% 35%, rgba(224, 242, 254, 0.7) 0%, rgba(240, 249, 255, 0.3) 45%, transparent 75%)',
        }}
      />

      {/* ============================================================ */}
      {/* PART 1: HERO VIEWPORT (1:1 Match with User's Reference)      */}
      {/* ============================================================ */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-10 lg:px-12 pt-16 sm:pt-24 pb-4 sm:pb-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Indicators, Subtitle & Circular Arrow CTA */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6 z-10">
            
            {/* Top Micro-indicator: • ——— ▸ */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 text-[#0284C7]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]" />
              <div className="w-10 h-px bg-[#0284C7]" />
              <span className="text-[10px] font-mono font-bold leading-none select-none">▸</span>
            </motion.div>

            {/* Editorial Heading */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-1"
            >
              <h1 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-sans font-light text-[#1E293B] tracking-tight leading-[1.12]">
                Exploring the Future of
                <br />
                <span className="text-[#0284C7] font-normal">
                  Computational Intelligence
                </span>
              </h1>
            </motion.div>

            {/* Thin Horizontal Accent Divider: ——— */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="w-14 h-[2px] bg-[#0284C7] origin-left"
            />

            {/* Subtitle Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-sans text-slate-500 text-sm sm:text-[15px] max-w-md leading-relaxed"
            >
              A community driven by curiosity, innovation and a shared vision for intelligent systems.
            </motion.p>

            {/* Circular Arrow Button with Trailing Hairline: ( → ) —————— */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-1 flex items-center gap-4"
            >
              <Link
                href="/projects"
                className="w-11 h-11 rounded-full border border-[#0284C7] text-[#0284C7] hover:bg-[#0284C7] hover:text-white flex items-center justify-center transition-all duration-300 group cursor-pointer shadow-xs hover:shadow-md shrink-0"
                aria-label="Explore Computational Intelligence Projects"
              >
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <div className="w-20 h-px bg-[#0284C7]/40" />
            </motion.div>
          </div>

          {/* Right Column: 3D Interactive Glowing Orbital Core Assembly */}
          <div className="lg:col-span-7 relative flex items-center justify-center w-full min-h-[360px] sm:min-h-[440px] lg:min-h-[500px]">
            <OrbitalCore3D className="w-full h-full" />
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* PART 2: OUR FOCUS SECTION (1:1 Match with User's Reference)  */}
      {/* ============================================================ */}
      <div className="w-full border-t border-slate-100/90 bg-white py-6 sm:py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            
            {/* Left Column: Cyber Brain Glowing Hero Visual (Unconstrained & Bigger) */}
            <div className="lg:col-span-4 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full flex items-center justify-center"
              >
                <CyberBrainVisual />
              </motion.div>
            </div>

            {/* Middle Column: Eyebrow + Headline */}
            <div className="lg:col-span-4 space-y-2 sm:space-y-3 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <div className="w-8 h-px bg-[#0284C7]" />
                <span className="font-mono text-[11px] font-bold text-[#0284C7] tracking-widest uppercase">
                  OUR FOCUS
                </span>
                <div className="w-8 h-px bg-[#0284C7]" />
              </div>

              <h2 className="text-xl sm:text-2xl lg:text-[1.75rem] font-sans font-normal text-[#0F172A] tracking-tight leading-snug">
                Building intelligent systems
                <br className="hidden sm:inline" />{' '}
                for a smarter tomorrow.
              </h2>
            </div>

            {/* Right Column: 3 Clean Focus Areas with Thin Vertical Dividers */}
            <div className="lg:col-span-4 grid grid-cols-3 gap-1 sm:gap-3 items-center pt-2 lg:pt-0">
              
              {/* Focus 1: Machine Learning */}
              <div className="text-center px-1 sm:px-2 py-2 sm:py-3 space-y-1.5 sm:space-y-2.5">
                <div className="w-8 h-8 sm:w-9 sm:h-9 mx-auto flex items-center justify-center text-[#0284C7]">
                  {/* Precise Brain Dual Hemisphere Outline SVG */}
                  <svg
                    className="w-6 h-6 sm:w-7 sm:h-7 stroke-[#0284C7] fill-none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9.5 2A2.5 2.5 0 0 0 7 4.5V5A2.5 2.5 0 0 0 4.5 7.5v1A2.5 2.5 0 0 0 2 11v2a2.5 2.5 0 0 0 2.5 2.5v1A2.5 2.5 0 0 0 7 19v.5A2.5 2.5 0 0 0 9.5 22h.5V2H9.5z" />
                    <path d="M14.5 2A2.5 2.5 0 0 1 17 4.5V5a2.5 2.5 0 0 1 2.5 2.5v1A2.5 2.5 0 0 1 22 11v2a2.5 2.5 0 0 1-2.5 2.5v1A2.5 2.5 0 0 1 17 19v.5A2.5 2.5 0 0 1 14.5 22h-.5V2h.5z" />
                    <path d="M10 8h-.5A1.5 1.5 0 0 0 8 9.5v1A1.5 1.5 0 0 0 9.5 12H10" />
                    <path d="M14 8h.5A1.5 1.5 0 0 1 16 9.5v1A1.5 1.5 0 0 1 14.5 12H14" />
                    <path d="M10 15h-.5A1.5 1.5 0 0 0 8 16.5v.5" />
                    <path d="M14 15h.5A1.5 1.5 0 0 1 16 16.5v.5" />
                  </svg>
                </div>
                <h3 className="text-[11px] sm:text-xs lg:text-[13px] font-sans font-medium text-slate-700 leading-tight">
                  Machine Learning
                </h3>
              </div>

              {/* Focus 2: Pattern Recognition */}
              <div className="text-center px-1 sm:px-2 py-2 sm:py-3 space-y-1.5 sm:space-y-2.5 border-l border-slate-200">
                <div className="w-8 h-8 sm:w-9 sm:h-9 mx-auto flex items-center justify-center text-[#0284C7]">
                  {/* Pattern Recognition Constellation Mesh SVG */}
                  <svg
                    className="w-6 h-6 sm:w-7 sm:h-7 stroke-[#0284C7] fill-none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="6" cy="6" r="2.5" />
                    <circle cx="18" cy="7" r="2.5" />
                    <circle cx="12" cy="18" r="2.5" />
                    <circle cx="17" cy="17" r="2" />
                    <line x1="8.2" y1="7.2" x2="15.8" y2="7" />
                    <line x1="7.5" y1="8" x2="10.8" y2="16" />
                    <line x1="16.5" y1="9" x2="13.2" y2="16" />
                    <line x1="14.3" y1="18" x2="15" y2="17" />
                  </svg>
                </div>
                <h3 className="text-[11px] sm:text-xs lg:text-[13px] font-sans font-medium text-slate-700 leading-tight">
                  Pattern Recognition
                </h3>
              </div>

              {/* Focus 3: Adaptive Systems */}
              <div className="text-center px-1 sm:px-2 py-2 sm:py-3 space-y-1.5 sm:space-y-2.5 border-l border-slate-200">
                <div className="w-8 h-8 sm:w-9 sm:h-9 mx-auto flex items-center justify-center text-[#0284C7]">
                  {/* Adaptive Connected Cluster SVG */}
                  <svg
                    className="w-6 h-6 sm:w-7 sm:h-7 stroke-[#0284C7] fill-none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="5" r="2.5" />
                    <circle cx="6" cy="17" r="2.5" />
                    <circle cx="18" cy="17" r="2.5" />
                    <line x1="10.8" y1="7.2" x2="7.2" y2="14.8" />
                    <line x1="13.2" y1="7.2" x2="16.8" y2="14.8" />
                    <line x1="8.5" y1="17" x2="15.5" y2="17" />
                  </svg>
                </div>
                <h3 className="text-[11px] sm:text-xs lg:text-[13px] font-sans font-medium text-slate-700 leading-tight">
                  Adaptive Systems
                </h3>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
