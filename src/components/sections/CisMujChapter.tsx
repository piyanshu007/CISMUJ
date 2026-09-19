'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';

export const CisMujChapter: React.FC = () => {
  return (
    <section id="chapter" className="py-10 sm:py-20 lg:py-28 bg-slate-50/70 relative border-b border-slate-200 overflow-hidden">
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
          className="mt-6 sm:mt-12 p-5 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 relative overflow-hidden group"
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
              <div>
                <span className="font-mono text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-0.5">
                  STUDENTS ENGAGED
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
              <div>
                <span className="font-mono text-[10px] font-bold text-[#0284C7] uppercase tracking-wider block mb-0.5">
                  RESEARCH DRIVEN
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
      </div>
    </section>
  );
};
