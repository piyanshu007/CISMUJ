'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  const router = useRouter();

  // Smooth 3D Mouse Parallax Tilt for the 404 neural water sculpture
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  const rotateX = useTransform(smoothY, [-250, 250], [6, -6]);
  const rotateY = useTransform(smoothX, [-250, 250], [-7, 7]);

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
    <div 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="min-h-screen bg-white text-[#0F172A] flex flex-col justify-between selection:bg-[#0284C7] selection:text-white relative overflow-hidden font-sans"
    >
      
      {/* Soft Ethereal Blue Ambient Glow in Top-Right Corner (Matches Reference) */}
      <div 
        className="absolute top-0 right-0 w-[850px] h-[650px] pointer-events-none opacity-45"
        style={{
          background: 'radial-gradient(circle at 85% 15%, rgba(186, 230, 253, 0.7) 0%, rgba(224, 242, 254, 0.3) 45%, transparent 72%)',
        }}
      />

      {/* ============================================================ */}
      {/* 1. TOP NAVBAR (Exact 1:1 Match with Reference Image 2)       */}
      {/* ============================================================ */}
      <header className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-6 sm:pt-8 flex items-center justify-between relative z-20">
        
        {/* Left: CIS Logo + Vertical Divider + Navigation Links */}
        <div className="flex items-center gap-6 sm:gap-8">
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/logo-mark.png"
              alt="IEEE CIS MUJ Logo"
              className="w-8 h-8 object-contain filter group-hover:scale-105 transition-transform"
            />
            <div className="w-px h-5 bg-slate-200 hidden sm:block" />
          </Link>

          {/* Navigation Links matching reference */}
          <nav className="hidden md:flex items-center gap-7 text-[13px] font-sans">
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
              href="/newsletter"
              className="text-slate-500 hover:text-[#0F172A] transition-colors pb-1"
            >
              Resources
            </Link>

            <Link
              href="/projects"
              className="text-slate-500 hover:text-[#0F172A] transition-colors pb-1"
            >
              Projects
            </Link>

            <Link
              href="/#contact"
              className="text-slate-500 hover:text-[#0F172A] transition-colors pb-1"
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Right: History Navigation Buttons ( ←  → ) */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => router.back()}
            aria-label="Go Back"
            className="w-8 h-8 rounded-full border border-slate-200 hover:border-[#0284C7] text-slate-400 hover:text-[#0284C7] flex items-center justify-center transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => router.forward()}
            aria-label="Go Forward"
            className="w-8 h-8 rounded-full border border-slate-200 hover:border-[#0284C7] text-slate-400 hover:text-[#0284C7] flex items-center justify-center transition-colors cursor-pointer"
          >
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </header>

      {/* ============================================================ */}
      {/* 2. HERO CONTENT: Left Heading & CTA + Right 404 Sculpture   */}
      {/* ============================================================ */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex items-center py-6 sm:py-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
          
          {/* Left Column: Heading & Pill CTA (1:1 with Reference Image 2) */}
          <div className="lg:col-span-5 space-y-7 z-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-sans font-light text-[#0F172A] tracking-tight leading-[1.18]">
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
                className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-slate-300 hover:border-[#0284C7] bg-white text-slate-700 hover:text-[#0284C7] font-mono text-xs tracking-wider uppercase transition-all shadow-xs hover:shadow-md group cursor-pointer"
              >
                <span>RETURN TO SAFE DATASPACE</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#0284C7]" />
              </Link>
            </motion.div>
          </div>

          {/* Right Column: 3D Fluid Water Splash 404 Sculpture with Moving Animations */}
          <div
            style={{ perspective: 1200 }}
            className="lg:col-span-7 relative flex items-center justify-center min-h-[360px] sm:min-h-[440px] lg:min-h-[500px]"
          >
            {/* 3D Floating Motion Container with Interactive Tilt */}
            <motion.div
              style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
              animate={{
                y: [-6, 6, -6],
                rotateZ: [-0.4, 0.4, -0.4],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative w-full max-w-[880px] lg:max-w-[940px] aspect-[16/9] flex items-center justify-center select-none"
            >
              {/* Soft Ethereal Blue Glow behind 404 Center Vortex */}
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
                className="absolute left-[56%] top-[48%] -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-gradient-to-tr from-sky-400/25 via-cyan-400/20 to-transparent blur-2xl pointer-events-none"
              />

              {/* Exact High-Resolution 404 Neural Water Splash Sculpture */}
              <img
                src="/404-sculpture.png"
                alt="404 Neural Water Splash Sculpture"
                className="w-full h-full object-contain pointer-events-none select-none relative z-10 filter drop-shadow-[0_16px_36px_rgba(2,132,199,0.14)]"
              />

              {/* Animated Floating Energy Particles & Glossy Spheres around the 404 */}
              
              {/* Floating Bead 1: Hovering above top curve of '0' */}
              <motion.div
                animate={{
                  y: [-8, 8, -8],
                  x: [-3, 3, -3],
                  scale: [1, 1.12, 1],
                }}
                transition={{
                  duration: 4.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute left-[52%] top-[19%] w-3.5 h-3.5 rounded-full pointer-events-none z-20 shadow-[0_4px_12px_rgba(2,132,199,0.6)]"
                style={{
                  background: 'radial-gradient(circle at 35% 35%, #ffffff 0%, #38bdf8 35%, #0284c7 75%, #075985 100%)',
                }}
              />

              {/* Floating Bead 2: Hovering near top ribbon of second '4' */}
              <motion.div
                animate={{
                  y: [7, -7, 7],
                  x: [3, -3, 3],
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  duration: 4.8,
                  repeat: Infinity,
                  delay: 0.8,
                  ease: 'easeInOut',
                }}
                className="absolute right-[22%] top-[31%] w-3 h-3 rounded-full pointer-events-none z-20 shadow-[0_4px_10px_rgba(2,132,199,0.5)]"
                style={{
                  background: 'radial-gradient(circle at 35% 35%, #ffffff 0%, #7dd3fc 35%, #0284c7 80%, #0369a1 100%)',
                }}
              />

              {/* Floating Bead 3: Hovering inside '0' vortex near center logo */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 16,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute left-[56.5%] top-[45%] -translate-x-1/2 -translate-y-1/2 w-44 h-44 sm:w-56 sm:h-56 rounded-full pointer-events-none z-20"
              >
                <div 
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full shadow-[0_0_8px_#0284c7]"
                  style={{
                    background: 'radial-gradient(circle at 35% 35%, #ffffff 0%, #38bdf8 40%, #0284c7 100%)',
                  }}
                />
                <div 
                  className="absolute bottom-6 right-8 w-2 h-2 rounded-full shadow-[0_0_6px_#38bdf8]"
                  style={{
                    background: 'radial-gradient(circle at 35% 35%, #ffffff 0%, #bae6fd 50%, #0284c7 100%)',
                  }}
                />
              </motion.div>

              {/* Floating Bead 4: Near lower droplet splash of first '4' */}
              <motion.div
                animate={{
                  y: [-6, 6, -6],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 3.6,
                  repeat: Infinity,
                  delay: 0.4,
                  ease: 'easeInOut',
                }}
                className="absolute left-[40%] bottom-[22%] w-2 h-2 rounded-full bg-[#0284c7] shadow-[0_0_6px_#0284c7] pointer-events-none z-20"
              />

              {/* Twinkling Diamond Star Sparkle near ribbon */}
              <motion.div
                animate={{
                  scale: [0.75, 1.25, 0.75],
                  opacity: [0.35, 0.95, 0.35],
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute top-[8%] right-[12%] text-[#0284C7] text-xl select-none pointer-events-none z-20"
              >
                ✦
              </motion.div>
            </motion.div>
          </div>

        </div>
      </main>

      {/* ============================================================ */}
      {/* 3. FOOTER TELEMETRY STRIP (1:1 with Reference)               */}
      {/* ============================================================ */}
      <footer className="w-full py-4 text-center text-xs font-mono text-slate-400 border-t border-slate-100">
        IEEE COMPUTATIONAL INTELLIGENCE SOCIETY • MANIPAL UNIVERSITY JAIPUR
      </footer>

    </div>
  );
}

