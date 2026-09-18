'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export const WhyCis: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [activeMobileIdx, setActiveMobileIdx] = useState<number>(0);

  const benefits = [
    {
      num: '01',
      title: 'LEARN.',
      desc: 'Hands-on workshops on PyTorch, Python, Computer Vision, and Transformer LLMs from senior student mentors.',
      keyword: 'KNOWLEDGE',
    },
    {
      num: '02',
      title: 'BUILD.',
      desc: 'Form teams to build real software applications, autonomous ground rovers, and deployable edge AI tools.',
      keyword: 'CREATION',
    },
    {
      num: '03',
      title: 'COMPETE.',
      desc: 'Compete in 36-hour hackathons like WebForge, national datathons, and algorithmic challenges with cash prizes.',
      keyword: 'VICTORY',
    },
    {
      num: '04',
      title: 'CONNECT.',
      desc: 'Join a welcoming community of 500+ tech enthusiasts, developers, and researchers at Manipal University Jaipur.',
      keyword: 'NETWORK',
    },
    {
      num: '05',
      title: 'LEAD.',
      desc: 'Organize campus-wide technical conferences, manage PR & design teams, and earn global IEEE credentials.',
      keyword: 'IMPACT',
    },
  ];

  const handleNext = () => {
    setActiveMobileIdx((prev) => (prev + 1) % benefits.length);
  };

  const handlePrev = () => {
    setActiveMobileIdx((prev) => (prev > 0 ? prev - 1 : benefits.length - 1));
  };

  const currentBenefit = benefits[activeMobileIdx];

  return (
    <section id="why-cis" className="py-8 sm:py-20 lg:py-32 bg-white border-b border-slate-200 relative overflow-hidden">
      {/* Subtle background tech lines */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#0284C7 1px, transparent 1px), linear-gradient(90deg, #0284C7 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          title="WHY JOIN IEEE CIS MUJ?"
          subtitle="Discover what being an active student member of our computational intelligence society gives you."
        />

        {/* ------------------------------------------------------------ */}
        {/* MOBILE VIEW (< sm): Compact Single-Card Slider with Arrows   */}
        {/* ------------------------------------------------------------ */}
        <div className="block sm:hidden mt-5 max-w-sm mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentBenefit.num}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="p-4 rounded-2xl bg-white border-2 border-slate-200 shadow-xs font-mono text-xs flex flex-col justify-between space-y-3.5 relative overflow-hidden"
              >
                {/* Large watermark number */}
                <div className="absolute -bottom-3 -right-1 font-display font-black text-6xl text-slate-100 select-none pointer-events-none">
                  {currentBenefit.num}
                </div>

                <div className="space-y-2.5 relative z-10">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                    <span className="text-[#0284C7] font-extrabold text-base tracking-tight font-display">
                      {currentBenefit.num}
                    </span>
                    <span className="font-mono text-[9px] text-[#0284C7] font-bold uppercase tracking-wider bg-sky-50 px-2 py-0.5 rounded-full border border-sky-100">
                      {currentBenefit.keyword}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-extrabold text-[#0F172A] tracking-tight uppercase">
                    {currentBenefit.title}
                  </h3>

                  <p className="font-sans text-slate-600 text-xs leading-relaxed">
                    {currentBenefit.desc}
                  </p>
                </div>

                {/* Bottom Accent Line */}
                <div className="h-[2px] w-full bg-[#0284C7] rounded-full" />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Compact Left/Right Arrow Navigation & Step Indicators */}
          <div className="flex items-center justify-between mt-3 px-1">
            <button
              onClick={handlePrev}
              aria-label="Previous Benefit"
              className="p-2 rounded-full border border-slate-200 hover:border-[#0284C7] text-slate-600 hover:text-[#0284C7] bg-white shadow-2xs transition-colors cursor-pointer active:scale-95"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Step Dots Indicator */}
            <div className="flex items-center gap-1.5">
              {benefits.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveMobileIdx(idx)}
                  aria-label={`Go to benefit ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${
                    activeMobileIdx === idx
                      ? 'w-6 bg-[#0284C7]'
                      : 'w-1.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              aria-label="Next Benefit"
              className="p-2 rounded-full border border-slate-200 hover:border-[#0284C7] text-slate-600 hover:text-[#0284C7] bg-white shadow-2xs transition-colors cursor-pointer active:scale-95"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ------------------------------------------------------------ */}
        {/* DESKTOP VIEW (>= sm): Full 5-Column Side-by-Side Grid        */}
        {/* ------------------------------------------------------------ */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-5 mt-8 sm:mt-12">
          {benefits.map((b, i) => {
            const isHovered = hoveredIdx === i;
            return (
              <motion.div
                key={b.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                onHoverStart={() => setHoveredIdx(i)}
                onHoverEnd={() => setHoveredIdx(null)}
                whileHover={{ y: -6 }}
                className="p-4 sm:p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#0284C7] shadow-xs hover:shadow-[0_12px_32px_rgba(2,132,199,0.14)] transition-all duration-300 font-mono text-xs flex flex-col justify-between space-y-4 sm:space-y-6 group relative overflow-hidden cursor-default"
              >
                {/* Large watermark number */}
                <div className="absolute -bottom-4 -right-2 font-display font-black text-7xl text-slate-100 select-none pointer-events-none group-hover:text-sky-50 transition-colors">
                  {b.num}
                </div>

                <div className="space-y-3 sm:space-y-4 relative z-10">
                  <div className="border-b border-slate-100 pb-2.5 sm:pb-3">
                    <span className="text-[#0284C7] font-extrabold text-base sm:text-lg tracking-tight font-display">
                      {b.num}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-display font-extrabold text-[#0F172A] tracking-tight group-hover:text-[#0284C7] transition-colors uppercase">
                    {b.title}
                  </h3>

                  <p className="font-sans text-slate-600 text-xs leading-relaxed">
                    {b.desc}
                  </p>
                </div>

                <div className="pt-3 sm:pt-4 border-t border-slate-100 flex items-center justify-between relative z-10">
                  <span className="font-mono text-[10px] text-[#0284C7] font-bold uppercase tracking-wider">
                    {b.keyword}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0284C7] group-hover:translate-x-1 transition-all" />
                </div>

                {/* Animated Bottom Accent Line in #0284C7 */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#0284C7] origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

