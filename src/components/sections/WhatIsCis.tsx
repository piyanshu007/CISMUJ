'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

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
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-24 sm:pt-28 pb-6 sm:pb-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Left Column: Heading, Indicators, Subtitle & Circular Arrow CTA */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6 z-10">
            
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
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-sans font-light text-[#1E293B] tracking-tight leading-[1.12]">
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

          {/* Right Column: 3D Translucent Orbital Ribbon Artwork & Center Emblem (Expanded & Transparent) */}
          <div className="lg:col-span-7 relative flex items-center justify-center min-h-[320px] sm:min-h-[400px] lg:min-h-[460px]">
            
            {/* Dynamic Motion Container for Ribbon + Orbits + Logo */}
            <motion.div
              animate={{
                y: [-6, 6, -6],
                rotateZ: [-0.4, 0.4, -0.4],
              }}
              transition={{
                duration: 6.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative w-full max-w-[740px] lg:max-w-[820px] aspect-[16/9] flex items-center justify-center select-none"
            >
              {/* Base Ethereal 3D Swirling Silk Ribbon Artwork */}
              <img
                src="/orbital-ribbon-transparent.png"
                alt="3D Translucent Orbital Silk Ribbon"
                className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none z-10 filter drop-shadow-[0_16px_36px_rgba(2,132,199,0.18)]"
              />

              {/* Dynamic CSS/SVG Orbital Track Overlays for Interactive Depth */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                
                {/* Inner Tilted Orbit Ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
                  className="absolute w-[80%] sm:w-[480px] lg:w-[540px] h-[36%] sm:h-[210px] lg:h-[240px] rounded-[100%] border border-[#0284C7]/30"
                  style={{
                    transform: 'rotateX(64deg) rotateZ(-22deg)',
                  }}
                >
                  {/* 3D Glossy Blue Planetary Sphere */}
                  <div
                    className="absolute -top-3 left-1/4 w-4 sm:w-5 h-4 sm:h-5 rounded-full shadow-[0_4px_14px_rgba(2,132,199,0.5)]"
                    style={{
                      background:
                        'radial-gradient(circle at 35% 35%, #bae6fd 0%, #0284c7 50%, #0369a1 100%)',
                    }}
                  />
                  <div
                    className="absolute bottom-2 right-1/3 w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full shadow-[0_2px_8px_rgba(2,132,199,0.4)]"
                    style={{
                      background:
                        'radial-gradient(circle at 35% 35%, #e0f2fe 0%, #0284c7 60%, #075985 100%)',
                    }}
                  />
                </motion.div>

                {/* Outer Counter-Rotating Orbit Ring */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 44, repeat: Infinity, ease: 'linear' }}
                  className="absolute w-[94%] sm:w-[580px] lg:w-[640px] h-[44%] sm:h-[250px] lg:h-[280px] rounded-[100%] border border-[#0284C7]/20 border-dashed"
                  style={{
                    transform: 'rotateX(58deg) rotateZ(28deg)',
                  }}
                >
                  {/* Large 3D Planetary Sphere at Bottom-Right */}
                  <div
                    className="absolute top-1/2 -right-3 w-5 sm:w-6 h-5 sm:h-6 rounded-full shadow-[0_6px_18px_rgba(2,132,199,0.55)]"
                    style={{
                      background:
                        'radial-gradient(circle at 35% 35%, #7dd3fc 0%, #0284c7 50%, #0c4a6e 100%)',
                    }}
                  />
                  <div
                    className="absolute -bottom-2 left-1/5 w-3 sm:w-3.5 h-3 sm:h-3.5 rounded-full shadow-[0_2px_8px_rgba(2,132,199,0.4)]"
                    style={{
                      background:
                        'radial-gradient(circle at 35% 35%, #e0f2fe 0%, #0284c7 60%, #0369a1 100%)',
                    }}
                  />
                </motion.div>

                {/* Floating Constellation Synapse Dots */}
                <span className="absolute top-[22%] left-[28%] w-1.5 h-1.5 rounded-full bg-[#0284C7] shadow-[0_0_6px_#0284C7]" />
                <span className="absolute bottom-[26%] right-[22%] w-2 h-2 rounded-full bg-[#38BDF8] shadow-[0_0_8px_#38BDF8]" />
                <span className="absolute top-[38%] right-[16%] w-1.5 h-1.5 rounded-full bg-[#0284C7]" />
                <span className="absolute bottom-[40%] left-[18%] w-2 h-2 rounded-full bg-[#0284C7]" />
              </div>

              {/* Center Core: IEEE CIS Fluid Logo Emblem - Placed DIRECTLY in the center of the ribbon */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
                <motion.div
                  initial={{ scale: 0.85, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.15 }}
                  className="relative flex items-center justify-center"
                >
                  {/* Soft blue back aura */}
                  <div className="absolute w-32 h-32 rounded-full bg-[#0284C7]/20 blur-xl pointer-events-none" />

                  {/* Logo Emblem centered perfectly inside ribbon loop */}
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center">
                    <img
                      src="/logo-mark.png"
                      alt="IEEE CIS Emblem"
                      className="w-full h-full object-contain filter drop-shadow-[0_6px_20px_rgba(2,132,199,0.4)]"
                    />
                  </div>
                </motion.div>
              </div>

            </motion.div>

          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* PART 2: OUR FOCUS SECTION (1:1 Match with User's Reference)  */}
      {/* ============================================================ */}
      <div className="w-full border-t border-slate-100/90 bg-white py-8 sm:py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Neural Synapse Graphic Card */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-50 border border-slate-200/80 shadow-xs group"
              >
                <img
                  src="/neural-focus.jpg"
                  alt="Neural Synapse Network"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0284C7]/10 via-transparent to-transparent pointer-events-none" />
              </motion.div>
            </div>

            {/* Middle Column: Eyebrow + Headline */}
            <div className="lg:col-span-4 space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-px bg-[#0284C7]" />
                <span className="font-mono text-[11px] font-bold text-[#0284C7] tracking-widest uppercase">
                  OUR FOCUS
                </span>
                <div className="w-8 h-px bg-[#0284C7]" />
              </div>

              <h2 className="text-2xl sm:text-[1.75rem] font-sans font-normal text-[#0F172A] tracking-tight leading-snug">
                Building intelligent systems
                <br />
                for a smarter tomorrow.
              </h2>
            </div>

            {/* Right Column: 3 Clean Focus Areas with Thin Vertical Dividers */}
            <div className="lg:col-span-5 grid grid-cols-3 gap-2 sm:gap-4 items-center">
              
              {/* Focus 1: Machine Learning */}
              <div className="text-center px-2 py-3 space-y-2.5">
                <div className="w-9 h-9 mx-auto flex items-center justify-center text-[#0284C7]">
                  {/* Precise Brain Dual Hemisphere Outline SVG */}
                  <svg
                    className="w-7 h-7 stroke-[#0284C7] fill-none"
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
                <h3 className="text-xs sm:text-[13px] font-sans font-medium text-slate-700 leading-snug">
                  Machine Learning
                </h3>
              </div>

              {/* Focus 2: Pattern Recognition */}
              <div className="text-center px-2 py-3 space-y-2.5 border-l border-slate-200">
                <div className="w-9 h-9 mx-auto flex items-center justify-center text-[#0284C7]">
                  {/* Pattern Recognition Constellation Mesh SVG */}
                  <svg
                    className="w-7 h-7 stroke-[#0284C7] fill-none"
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
                <h3 className="text-xs sm:text-[13px] font-sans font-medium text-slate-700 leading-snug">
                  Pattern Recognition
                </h3>
              </div>

              {/* Focus 3: Adaptive Systems */}
              <div className="text-center px-2 py-3 space-y-2.5 border-l border-slate-200">
                <div className="w-9 h-9 mx-auto flex items-center justify-center text-[#0284C7]">
                  {/* Adaptive Connected Cluster SVG */}
                  <svg
                    className="w-7 h-7 stroke-[#0284C7] fill-none"
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
                <h3 className="text-xs sm:text-[13px] font-sans font-medium text-slate-700 leading-snug">
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
