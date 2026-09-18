'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { ArrowUpRight } from 'lucide-react';

export const CisMujChapter: React.FC = () => {
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

  return (
    <section id="chapter" className="py-24 sm:py-32 bg-slate-50/70 relative border-b border-slate-200 overflow-hidden">
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
          number="02"
          badgeText="STUDENT CHAPTER IDENTITY"
          title="THIS IS CIS AT MUJ."
          subtitle="At Manipal University Jaipur, IEEE CIS translates mathematical proofs into working algorithms, embedded hardware prototypes, and student research."
        />

        {/* Chapter Overview Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="my-12 p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group"
        >
          {/* Subtle blue accent edge */}
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0284C7]" />

          <div className="space-y-4 max-w-2xl">
            <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-[#0F172A] uppercase leading-snug">
              BRIDGING ACADEMIC RIGOR &amp; RAPID PROTOTYPING
            </h3>
            <p className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed">
              IEEE CIS MUJ operates at the intersection of computer science, electrical engineering, mathematics, and cognitive biology to nurture the next generation of computational intelligence researchers.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 font-mono text-xs w-full md:w-auto shrink-0">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center shadow-2xs group-hover:border-sky-200 transition-colors">
              <span className="text-3xl sm:text-4xl font-display font-black text-[#0F172A] block">
                500+
              </span>
              <span className="text-[#0284C7] font-bold text-[10px] uppercase tracking-wider mt-1 block">
                Students Engaged
              </span>
            </div>
            <div className="p-6 rounded-2xl bg-sky-50/60 border border-sky-200 text-center shadow-2xs">
              <span className="text-3xl sm:text-4xl font-display font-black text-[#0284C7] block">
                100%
              </span>
              <span className="text-[#0284C7] font-bold text-[10px] uppercase tracking-wider mt-1 block">
                Research Driven
              </span>
            </div>
          </div>
        </motion.div>

        {/* 4 Chapter Wings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {chapterWings.map((wing, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="p-7 rounded-2xl bg-white border border-slate-200 hover:border-[#0284C7] shadow-sm hover:shadow-[0_12px_30px_rgba(2,132,199,0.1)] transition-all duration-300 space-y-4 group font-mono text-xs flex flex-col justify-between"
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
