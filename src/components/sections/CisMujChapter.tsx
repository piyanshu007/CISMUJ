'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { ArrowUpRight, ChevronLeft, ChevronRight, Users, Sparkles, TrendingUp } from 'lucide-react';

export const CisMujChapter: React.FC = () => {
  const [activeMobileIdx, setActiveMobileIdx] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);

  const chapterWings = [
    {
      title: 'INTELLIGENCE RESEARCH COHORTS',
      subtitle: 'PEER-REVIEWED TRACK',
      description: 'Undergraduate and postgraduate research teams working on graph neural networks, Type-2 fuzzy controllers, and neuromorphic vision.',
      badge: 'PEER-REVIEWED TRACK',
      metric: '4 PREPRINTS',
    },
    {
      title: 'BIO-COMPUTE HACKATHONS',
      subtitle: 'COMPETITIVE ARENA',
      description: '36-hour competitive coding arenas where student teams build genetic schedulers, swarm bots, and reinforcement learning game agents.',
      badge: 'COMPETITIVE ARENA',
      metric: '36H NATIONAL RUNS',
    },
    {
      title: 'IEEE DISTINGUISHED COLLOQUIA',
      subtitle: 'GLOBAL DIALOGUE',
      description: 'Masterclasses and technical research sessions hosted with global IEEE CIS Fellows, pioneering professors, and AI researchers.',
      badge: 'GLOBAL DIALOGUE',
      metric: 'GLOBAL MENTORS',
    },
    {
      title: 'OPEN SOURCE CODEBASES',
      subtitle: 'OPEN SOURCE',
      description: 'Developing reproducible PyTorch, Julia, and C++ computational intelligence libraries freely accessible to the global student community.',
      badge: 'OPEN SOURCE',
      metric: '100% REPRODUCIBLE',
    },
  ];

  const handlePrev = () => {
    setDirection(-1);
    setActiveMobileIdx((prev) => (prev > 0 ? prev - 1 : chapterWings.length - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setActiveMobileIdx((prev) => (prev + 1) % chapterWings.length);
  };

  const currentWing = chapterWings[activeMobileIdx];

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir >= 0 ? 40 : -40,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      transition: {
        x: { type: 'spring', stiffness: 350, damping: 32 },
        opacity: { duration: 0.22 },
      },
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? 40 : -40,
      opacity: 0,
      transition: {
        duration: 0.18,
      },
    }),
  };

  return (
    <section id="chapter" className="py-10 sm:py-20 lg:py-32 bg-slate-50/70 relative border-b border-slate-200 overflow-hidden">
      {/* Subtle blueprint grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#0284C7 1px, transparent 1px), linear-gradient(90deg, #0284C7 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          title="THIS IS CIS AT MUJ."
          subtitle="At Manipal University Jaipur, IEEE CIS translates mathematical proofs into working algorithms, embedded hardware prototypes, and student research."
        />

        {/* Chapter Overview Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="my-6 sm:my-12 p-5 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 relative overflow-hidden group"
        >
          {/* Subtle blue accent edge */}
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0284C7]" />

          <div className="space-y-3 sm:space-y-4 max-w-2xl">
            <h3 className="text-xl sm:text-3xl font-display font-extrabold text-[#0F172A] uppercase leading-snug">
              BRIDGING ACADEMIC RIGOR &amp; RAPID PROTOTYPING
            </h3>
            <p className="text-slate-600 font-sans text-xs sm:text-base leading-relaxed">
              IEEE CIS MUJ operates at the intersection of computer science, electrical engineering, mathematics, and cognitive biology to nurture the next generation of computational intelligence researchers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full md:w-auto shrink-0">
            {/* Bento Card 1: Students Engaged with Area Graph */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/90 border border-slate-200/80 shadow-2xs flex flex-col justify-between space-y-2 min-w-[190px]">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                  STUDENTS ENGAGED
                </span>
                <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full text-[9px] font-mono font-bold bg-emerald-50 text-emerald-600 border border-emerald-200/60">
                  <TrendingUp className="w-2.5 h-2.5" />
                  +40%
                </span>
              </div>

              <div>
                <div className="text-3xl font-display font-black text-[#0F172A] tracking-tight">
                  500+
                </div>
              </div>

              {/* Area Growth Graph */}
              <div className="pt-2 border-t border-slate-200/60">
                <div className="w-full h-11 relative">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 120 36" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="studGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#0284C7" stopOpacity="0.35" />
                        <stop offset="100%" stopColor="#0284C7" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 0,30 Q 30,26 60,16 T 120,4 L 120,36 L 0,36 Z"
                      fill="url(#studGrad)"
                    />
                    <path
                      d="M 0,30 Q 30,26 60,16 T 120,4"
                      stroke="#0284C7"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                    />
                    <circle cx="60" cy="16" r="2.5" fill="#0284C7" stroke="#FFFFFF" strokeWidth="1.5" />
                    <circle cx="120" cy="4" r="3" fill="#0284C7" stroke="#FFFFFF" strokeWidth="1.5" />
                  </svg>
                </div>
                <div className="flex items-center justify-between text-[8px] font-mono text-slate-400 mt-1">
                  <span>Growth Velocity</span>
                  <span className="text-[#0284C7] font-bold">● Active</span>
                </div>
              </div>
            </div>

            {/* Bento Card 2: Research Driven with Velocity Graph */}
            <div className="p-4 sm:p-5 rounded-2xl bg-sky-50/70 border border-sky-200/80 shadow-2xs flex flex-col justify-between space-y-2 min-w-[190px]">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] font-bold text-[#0284C7] uppercase tracking-wider">
                  RESEARCH DRIVEN
                </span>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[9px] font-mono font-bold bg-white text-[#0284C7] border border-sky-200 shadow-2xs">
                  4 Preprints
                </span>
              </div>

              <div>
                <div className="text-3xl font-display font-black text-[#0284C7] tracking-tight">
                  100%
                </div>
              </div>

              {/* Research Multi-Bar Distribution Graph */}
              <div className="pt-2 border-t border-sky-200/60">
                <div className="h-11 flex items-end justify-between gap-1.5 px-0.5">
                  {[
                    { label: 'GNN', h: '75%' },
                    { label: 'FUZZY', h: '90%' },
                    { label: 'ROV', h: '80%' },
                    { label: 'LLM', h: '100%' },
                  ].map((b, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-0.5 h-full justify-end">
                      <div className="w-full bg-sky-100 rounded-t-xs h-full relative flex items-end overflow-hidden">
                        <div
                          style={{ height: b.h }}
                          className="w-full bg-gradient-to-t from-[#0284C7] to-sky-400 rounded-t-xs"
                        />
                      </div>
                      <span className="text-[7px] font-mono text-slate-500 font-bold">{b.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ------------------------------------------------------------ */}
        {/* MOBILE VIEW (< md): Single-Card Slider with Arrows & Dots    */}
        {/* ------------------------------------------------------------ */}
        <div className="block md:hidden mt-6">
          <div className="relative min-h-[260px] flex flex-col justify-between">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeMobileIdx}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(_, { offset, velocity }) => {
                  const swipe = offset.x + velocity.x;
                  if (swipe < -50) {
                    handleNext();
                  } else if (swipe > 50) {
                    handlePrev();
                  }
                }}
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4 font-mono text-xs flex flex-col justify-between min-h-[250px] touch-pan-y"
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <span className="font-mono text-xs font-bold text-[#0284C7] uppercase tracking-widest">
                      0{activeMobileIdx + 1} // CHAPTER WING
                    </span>
                    <span className="text-[10px] font-mono font-semibold text-slate-500 uppercase tracking-wider bg-slate-100 px-2 py-0.5 rounded-md">
                      {currentWing.badge}
                    </span>
                  </div>

                  <h4 className="font-display font-extrabold text-[#0F172A] text-lg uppercase tracking-tight leading-snug">
                    {currentWing.title}
                  </h4>

                  <p className="font-sans text-slate-600 text-xs leading-relaxed">
                    {currentWing.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold">
                  <span className="text-[#0284C7]">{currentWing.metric}</span>
                  <div className="flex items-center gap-1 text-[#0284C7]">
                    <span className="text-[10px] uppercase font-mono">EXPLORE</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Compact Left/Right Navigation & Step Indicators */}
          <div className="flex items-center justify-between mt-4 px-1">
            <button
              onClick={handlePrev}
              aria-label="Previous Chapter Wing"
              className="p-2.5 rounded-full border border-slate-200 hover:border-[#0284C7] text-slate-700 hover:text-[#0284C7] bg-white shadow-2xs transition-all cursor-pointer active:scale-95"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Step Counter & Dot Indicators */}
            <div className="flex flex-col items-center gap-1.5">
              <span className="font-mono text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                WING 0{activeMobileIdx + 1} / 0{chapterWings.length}
              </span>
              <div className="flex items-center gap-1.5">
                {chapterWings.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setDirection(idx > activeMobileIdx ? 1 : -1);
                      setActiveMobileIdx(idx);
                    }}
                    aria-label={`Go to wing ${idx + 1}`}
                    className={`h-1.5 rounded-full transition-all cursor-pointer ${
                      activeMobileIdx === idx
                        ? 'w-6 bg-[#0284C7]'
                        : 'w-1.5 bg-slate-300 hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>
            </div>

            <button
              onClick={handleNext}
              aria-label="Next Chapter Wing"
              className="p-2.5 rounded-full border border-slate-200 hover:border-[#0284C7] text-slate-700 hover:text-[#0284C7] bg-white shadow-2xs transition-all cursor-pointer active:scale-95"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ------------------------------------------------------------ */}
        {/* DESKTOP VIEW (>= md): Full 2x2 Grid Layout                   */}
        {/* ------------------------------------------------------------ */}
        <div className="hidden md:grid md:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">
          {chapterWings.map((wing, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="p-5 sm:p-7 rounded-2xl bg-white border border-slate-200 hover:border-[#0284C7] shadow-sm hover:shadow-[0_12px_30px_rgba(2,132,199,0.1)] transition-all duration-300 space-y-3 sm:space-y-4 group font-mono text-xs flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#0284C7] uppercase tracking-widest">
                      0{idx + 1} // CHAPTER WING
                    </span>
                  </div>
                  <span className="text-[11px] font-mono font-semibold text-slate-500 uppercase tracking-wider group-hover:text-[#0284C7] transition-colors">
                    {wing.badge}
                  </span>
                </div>

                <h4 className="font-display font-extrabold text-[#0F172A] text-lg uppercase tracking-tight group-hover:text-[#0284C7] transition-colors">
                  {wing.title}
                </h4>

                <p className="font-sans text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {wing.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold">
                <span className="text-[#0284C7]">{wing.metric}</span>
                <div className="flex items-center gap-1 text-slate-400 group-hover:text-[#0284C7] transition-colors">
                  <span className="text-[10px] uppercase font-mono">EXPLORE</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
