'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, Home, Compass } from 'lucide-react';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white text-[#0F172A] flex flex-col justify-between selection:bg-[#0284C7] selection:text-white relative overflow-hidden font-sans">
      {/* Soft Ethereal Blue Ambient Glow Centered Behind 404 */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[500px] sm:h-[650px] pointer-events-none opacity-40"
        style={{
          background:
            'radial-gradient(circle at 50% 45%, rgba(186, 230, 253, 0.6) 0%, rgba(224, 242, 254, 0.25) 45%, transparent 70%)',
        }}
      />

      {/* ============================================================ */}
      {/* 1. TOP NAVBAR                                                */}
      {/* ============================================================ */}
      <header className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pt-6 flex items-center justify-between relative z-20">
        {/* Left: CIS Logo + Vertical Divider + Nav Links */}
        <div className="flex items-center gap-5 sm:gap-8">
          <Link href="/" className="flex items-center gap-2.5 group">
            <img
              src="/logo-mark.png"
              alt="IEEE CIS MUJ Logo"
              className="w-8 h-8 object-contain group-hover:scale-105 transition-transform"
            />
            <div className="w-px h-5 bg-slate-200 hidden sm:block" />
            <span className="font-mono text-xs font-bold tracking-wider text-slate-800 uppercase hidden sm:inline-block">
              IEEE CIS MUJ
            </span>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-[13px] font-sans">
            <Link
              href="/"
              className="text-slate-500 hover:text-[#0284C7] transition-colors pb-0.5"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-slate-500 hover:text-[#0284C7] transition-colors pb-0.5"
            >
              About
            </Link>
            <Link
              href="/events"
              className="text-slate-500 hover:text-[#0284C7] transition-colors pb-0.5"
            >
              Events
            </Link>
            <Link
              href="/team"
              className="text-slate-500 hover:text-[#0284C7] transition-colors pb-0.5"
            >
              Team
            </Link>
            <Link
              href="/newsletter"
              className="text-slate-500 hover:text-[#0284C7] transition-colors pb-0.5"
            >
              Newsletter
            </Link>
            <Link
              href="/projects"
              className="text-slate-500 hover:text-[#0284C7] transition-colors pb-0.5"
            >
              Projects
            </Link>
          </nav>
        </div>

        {/* Right: History Navigation Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => router.back()}
            aria-label="Go Back"
            className="w-8 h-8 rounded-full border border-slate-200 hover:border-[#0284C7] text-slate-500 hover:text-[#0284C7] flex items-center justify-center transition-colors cursor-pointer bg-white/80 backdrop-blur-xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => router.forward()}
            aria-label="Go Forward"
            className="w-8 h-8 rounded-full border border-slate-200 hover:border-[#0284C7] text-slate-500 hover:text-[#0284C7] flex items-center justify-center transition-colors cursor-pointer bg-white/80 backdrop-blur-xs"
          >
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </header>

      {/* ============================================================ */}
      {/* 2. CENTERED HERO CONTENT (STATIONARY & CLEAN)                */}
      {/* ============================================================ */}
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center py-6 sm:py-10 relative z-10 text-center">
        {/* Centered Fluid Water Splash 404 Sculpture (Stationary) */}
        <div className="relative w-full max-w-[560px] sm:max-w-[680px] lg:max-w-[760px] flex items-center justify-center select-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative w-full aspect-[16/10] max-h-[340px] sm:max-h-[420px] flex items-center justify-center"
          >
            {/* Soft Cyan Ambient Glow inside Center */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-60 sm:h-60 rounded-full bg-gradient-to-tr from-sky-400/25 via-cyan-400/15 to-transparent blur-2xl pointer-events-none" />

            {/* Clean, Background-Free, Artifact-Free 404 Neural Fluid Sculpture */}
            <img
              src="/404-sculpture.png"
              alt="404 Neural Water Splash Sculpture"
              className="w-full h-full object-contain pointer-events-none select-none relative z-10 filter drop-shadow-[0_12px_28px_rgba(2,132,199,0.18)]"
            />
          </motion.div>
        </div>

        {/* Centered Typography & Info */}
        <div className="space-y-4 max-w-xl mx-auto mt-2 sm:mt-4 z-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1 className="text-2xl sm:text-4xl font-sans font-bold text-[#0F172A] tracking-tight">
              Page Lost in Cyber Space
            </h1>

            <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed mt-2 max-w-md mx-auto">
              The coordinates you requested do not point to an active data stream.
              Return to our main workspace to continue exploring.
            </p>
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="pt-2 flex flex-wrap items-center justify-center gap-3 font-mono text-xs"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold tracking-wider shadow-[0_4px_14px_rgba(2,132,199,0.25)] hover:shadow-[0_6px_20px_rgba(2,132,199,0.35)] transition-all cursor-pointer hover:-translate-y-0.5"
            >
              <Home className="w-3.5 h-3.5" />
              <span>RETURN HOME</span>
            </Link>

            <Link
              href="/events"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-[#0284C7] border border-slate-200 font-bold tracking-wider transition-all cursor-pointer shadow-xs hover:border-[#0284C7] hover:-translate-y-0.5"
            >
              <Compass className="w-3.5 h-3.5" />
              <span>DISCOVER EVENTS</span>
            </Link>
          </motion.div>
        </div>
      </main>

      {/* ============================================================ */}
      {/* 3. FOOTER TELEMETRY STRIP                                    */}
      {/* ============================================================ */}
      <footer className="w-full py-4 text-center text-[11px] sm:text-xs font-mono text-slate-400 border-t border-slate-100 relative z-20">
        IEEE COMPUTATIONAL INTELLIGENCE SOCIETY • MANIPAL UNIVERSITY JAIPUR
      </footer>
    </div>
  );
}

