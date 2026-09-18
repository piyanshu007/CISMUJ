'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { ArrowRight } from 'lucide-react';

export const WhyCis: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

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

  return (
    <section id="why-cis" className="py-10 sm:py-20 lg:py-32 bg-white border-b border-slate-200 relative overflow-hidden">
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

        {/* 5 Benefits Grid - Strictly 3 Colors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-5 mt-6 sm:mt-12">
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
                className="p-4 sm:p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#0284C7] shadow-sm hover:shadow-[0_12px_32px_rgba(2,132,199,0.14)] transition-all duration-300 font-mono text-xs flex flex-col justify-between space-y-4 sm:space-y-6 group relative overflow-hidden cursor-default"
              >
                {/* Large watermark number */}
                <div className="absolute -bottom-4 -right-2 font-display font-black text-7xl text-slate-100 select-none pointer-events-none group-hover:text-sky-50 transition-colors">
                  {b.num}
                </div>

                <div className="space-y-4 relative z-10">
                  <div className="border-b border-slate-100 pb-3">
                    <span className="text-[#0284C7] font-extrabold text-lg tracking-tight font-display">
                      {b.num}
                    </span>
                  </div>

                  <h3 className="text-2xl font-display font-extrabold text-[#0F172A] tracking-tight group-hover:text-[#0284C7] transition-colors uppercase">
                    {b.title}
                  </h3>

                  <p className="font-sans text-slate-600 text-xs leading-relaxed">
                    {b.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between relative z-10">
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
