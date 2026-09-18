'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  const router = useRouter();

  // Mouse Parallax 3D Tilt for the 404 neural sculpture
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-200, 200], [6, -6]);
  const rotateY = useTransform(mouseX, [-200, 200], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div className="min-h-screen bg-white text-[#0F172A] flex flex-col justify-between selection:bg-[#0284C7] selection:text-white relative overflow-hidden font-sans">
      
      {/* Soft Ambient Neural Smoke Glow in Top-Right */}
      <div 
        className="absolute -top-24 -right-24 w-[750px] h-[600px] pointer-events-none opacity-45"
        style={{
          background: 'radial-gradient(circle at 80% 20%, rgba(186, 230, 253, 0.65) 0%, rgba(224, 242, 254, 0.25) 45%, transparent 70%)',
        }}
      />

      {/* ============================================================ */}
      {/* 1. TOP NAVBAR (1:1 Match with Reference)                     */}
      {/* ============================================================ */}
      <header className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-6 sm:pt-8 flex items-center justify-between relative z-20">
        
        {/* Left: Logo Mark + Divider + Nav Links */}
        <div className="flex items-center gap-6 sm:gap-8">
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/logo-mark.png"
              alt="IEEE CIS MUJ Logo"
              className="w-8 h-8 object-contain filter group-hover:scale-105 transition-transform"
            />
            <div className="w-px h-5 bg-slate-200 hidden sm:block" />
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-[13px] font-sans">
            <Link
              href="/"
              className="relative text-[#0284C7] font-medium transition-colors pb-1"
            >
              <span>Home</span>
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#0284C7] rounded-full" />
            </Link>

            <Link
              href="/about"
              className="text-slate-500 hover:text-[#0F172A] transition-colors pb-1"
            >
              About
            </Link>

            <Link
              href="/events"
              className="text-slate-500 hover:text-[#0F172A] transition-colors pb-1"
            >
              Events
            </Link>

            <Link
              href="/team"
              className="text-slate-500 hover:text-[#0F172A] transition-colors pb-1"
            >
              Team
            </Link>

            <Link
              href="/projects"
              className="text-slate-500 hover:text-[#0F172A] transition-colors pb-1"
            >
              Projects
            </Link>

            <Link
              href="/contact"
              className="text-slate-500 hover:text-[#0F172A] transition-colors pb-1"
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Right: History Navigation Arrows (← →) */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => router.back()}
            aria-label="Go Back"
            className="w-8 h-8 rounded-full border border-slate-200 hover:border-slate-300 text-slate-400 hover:text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => router.forward()}
            aria-label="Go Forward"
            className="w-8 h-8 rounded-full border border-slate-200 hover:border-slate-300 text-slate-400 hover:text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* ============================================================ */}
      {/* 2. HERO CONTENT: Headline + CTA on Left, 404 Sculpture Right */}
      {/* ============================================================ */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex items-center py-10 sm:py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center w-full">
          
          {/* Left Column: Heading & Pill CTA */}
          <div className="lg:col-span-5 space-y-8 z-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-sans font-normal text-[#0F172A] tracking-tight leading-[1.18]">
                404 ERROR - Network
                <br />
                Path Undetectable
                <br />
                Undetectable
              </h1>
            </motion.div>

            {/* Pill-shaped Button: RETURN TO SAFE DATASPACE → */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link
                href="/"
                className="inline-flex items-center gap-3.5 px-6 py-2.5 rounded-full border border-slate-300 hover:border-[#0284C7] bg-white text-slate-700 hover:text-[#0284C7] font-mono text-xs tracking-wider uppercase transition-all shadow-xs hover:shadow-md group cursor-pointer"
              >
                <span>RETURN TO SAFE DATASPACE</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#0284C7]" />
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Dynamic 3D Moving 404 Neural Particle Sculpture */}
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: 1200 }}
            className="lg:col-span-7 relative flex items-center justify-center min-h-[380px] sm:min-h-[460px] lg:min-h-[520px] cursor-pointer"
          >
            {/* 3D Floating Motion Container with Interactive Tilt */}
            <motion.div
              style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
              animate={{
                y: [-8, 8, -8],
                rotateZ: [-0.6, 0.6, -0.6],
              }}
              transition={{
                duration: 6.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative w-full max-w-[820px] aspect-[16/10] flex items-center justify-center select-none"
            >
              {/* Soft Ethereal Blue Glow behind 404 center vortex */}
              <motion.div
                animate={{
                  scale: [0.92, 1.1, 0.92],
                  opacity: [0.35, 0.65, 0.35],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute left-[36%] top-[45%] -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-gradient-to-tr from-sky-400/25 via-cyan-400/20 to-transparent blur-2xl pointer-events-none"
              />

              {/* Exact Transparent 404 Neural Swirl Sculpture */}
              <img
                src="/404-sculpture.png"
                alt="404 Neural Fiber Network Sculpture"
                className="w-full h-full object-contain pointer-events-none select-none relative z-10 filter drop-shadow-[0_16px_36px_rgba(2,132,199,0.12)]"
              />

              {/* Animated Floating Energy Particles around the 404 */}
              {/* Particle 1: Near Top of First 4 */}
              <motion.div
                animate={{
                  y: [-12, 12, -12],
                  x: [-6, 6, -6],
                  opacity: [0.4, 0.9, 0.4],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute left-[18%] top-[24%] w-2.5 h-2.5 rounded-full bg-sky-400 shadow-[0_0_10px_#38bdf8] pointer-events-none z-20"
              />

              {/* Particle 2: Orbiting Center '0' Vortex */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute left-[35%] top-[44%] -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-52 sm:h-52 rounded-full pointer-events-none z-20"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#0284C7] shadow-[0_0_8px_#0284c7]" />
                <div className="absolute bottom-4 right-6 w-1.5 h-1.5 rounded-full bg-cyan-300 shadow-[0_0_6px_#38bdf8]" />
              </motion.div>

              {/* Particle 3: Near Right Edge of Second 4 */}
              <motion.div
                animate={{
                  y: [10, -10, 10],
                  x: [4, -4, 4],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  delay: 1,
                  ease: 'easeInOut',
                }}
                className="absolute right-[12%] top-[35%] w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#38bdf8] pointer-events-none z-20"
              />

              {/* Particle 4: Lower Swirl Tendril */}
              <motion.div
                animate={{
                  y: [-8, 8, -8],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  delay: 0.5,
                  ease: 'easeInOut',
                }}
                className="absolute left-[48%] bottom-[18%] w-2 h-2 rounded-full bg-sky-300 shadow-[0_0_6px_#7dd3fc] pointer-events-none z-20"
              />

              {/* Floating Sparkle Star */}
              <motion.div
                animate={{
                  scale: [0.8, 1.2, 0.8],
                  opacity: [0.4, 0.9, 0.4],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute top-[12%] right-[22%] text-[#0284C7] text-lg select-none pointer-events-none z-20"
              >
                ✦
              </motion.div>
            </motion.div>
          </div>

        </div>
      </main>

      {/* Subtle Bottom Accent Line */}
      <footer className="w-full py-4 text-center text-xs font-mono text-slate-400 border-t border-slate-100">
        IEEE COMPUTATIONAL INTELLIGENCE SOCIETY • MANIPAL UNIVERSITY JAIPUR
      </footer>

    </div>
  );
}
