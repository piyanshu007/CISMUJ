'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { RESEARCH_ENTRIES } from '@/data/research';
import {
  Clock,
  User,
  ArrowUpRight,
  Gauge,
} from 'lucide-react';

export const IntelligenceLab: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [activeBenchmark, setActiveBenchmark] = useState<number>(0);

  const categories = ['ALL', 'RESEARCH', 'EXPLAINER', 'ARTICLE', 'PROJECT_NOTE'];

  const filteredEntries =
    selectedCategory === 'ALL'
      ? RESEARCH_ENTRIES
      : RESEARCH_ENTRIES.filter((r) => r.category === selectedCategory);

  const benchmarkMetrics = [
    {
      title: 'NEURAL CONV-NET PRUNING TOPOLOGY',
      metric: '3.2× INFERENCE ACCELERATION',
      sub: 'ON BARE-METAL ARM CORTEX-M4',
      baseline: 'Classical Float32: 90ms',
      optimized: 'Quantized INT8: 28ms',
      progress: 68,
      stats: [
        { label: 'SRAM Savings', value: '58 KB' },
        { label: 'Top-1 Acc Delta', value: '-0.6%' },
        { label: 'Energy / Inference', value: '4.2 mJ' },
      ],
    },
    {
      title: 'TYPE-2 FUZZY CAMPUS SOLAR BALANCING',
      metric: '99.8% VOLTAGE STABILITY',
      sub: 'SUB-5MS REACTIVE DISPATCH',
      baseline: 'Standard PID: 88.2% stability',
      optimized: 'Type-2 TSK Fuzzy: 99.8%',
      progress: 94,
      stats: [
        { label: 'Cycle Time', value: '4.8 ms' },
        { label: 'Load Drop Absorption', value: '50 kW' },
        { label: 'Harmonic Distortion', value: '< 1.2%' },
      ],
    },
    {
      title: 'DECENTRALIZED NEURO-SWARM MAPPING',
      metric: '40% LOWER COMPUTE OVERHEAD',
      sub: 'SUBTERRANEAN 3D OCTREE MESH',
      baseline: 'Classical LiDAR SLAM: 100% CPU',
      optimized: 'Spiking Odometry: 60% CPU',
      progress: 40,
      stats: [
        { label: 'Voxel Resolution', value: '2.5 cm' },
        { label: 'RF Sync Mesh', value: '14 ms' },
        { label: 'Drift Rate', value: '1.8 cm/m' },
      ],
    },
  ];

  return (
    <section id="research" className="py-24 sm:py-32 bg-slate-50/70 relative border-b border-slate-200 overflow-hidden">
      {/* Blueprint grid */}
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
          badgeText="THE CIS KNOWLEDGE LAB"
          title="RESEARCH &amp; TELEMETRY BENCHMARKS."
          subtitle="Peer-reviewed preprints, mathematical explainers, and real-time hardware telemetry benchmarks authored by IEEE CIS MUJ."
        />

        {/* Interactive Live Benchmark Telemetry Console */}
        <div className="my-12 p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-sky-50 border border-sky-200 text-[#0284C7]">
                <Gauge className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-xs text-[#0284C7] font-bold uppercase tracking-wider block">
                  INTERACTIVE HARDWARE BENCHMARK COMPARATOR
                </span>
                <h3 className="font-display font-black text-xl text-[#0F172A] uppercase">
                  REAL-TIME ALGORITHMIC PROFILING
                </h3>
              </div>
            </div>

            {/* Benchmark Tab Switcher */}
            <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl font-mono text-xs font-bold self-start sm:self-auto">
              {benchmarkMetrics.map((_b, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveBenchmark(i)}
                  className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer uppercase ${
                    activeBenchmark === i
                      ? 'bg-white text-[#0284C7] shadow-2xs'
                      : 'text-slate-600 hover:text-[#0F172A]'
                  }`}
                >
                  BENCH 0{i + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Active Benchmark Panel */}
          {(() => {
            const b = benchmarkMetrics[activeBenchmark];
            return (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <span className="font-mono text-xs text-slate-500 font-bold uppercase tracking-wider block">
                    TARGET ARCHITECTURE: <span className="text-[#0F172A]">{b.title}</span>
                  </span>
                  <div className="text-3xl sm:text-4xl font-display font-black text-[#0F172A] uppercase leading-tight">
                    {b.metric}
                    <span className="text-xs font-mono text-[#0284C7] block tracking-widest mt-1">
                      {b.sub}
                    </span>
                  </div>

                  {/* Visual Comparison Progress Bar */}
                  <div className="space-y-2 pt-2">
                    <div className="flex justify-between font-mono text-xs">
                      <span className="text-slate-500 font-medium">{b.baseline}</span>
                      <span className="text-[#0284C7] font-bold">{b.optimized}</span>
                    </div>
                    <div className="w-full h-3 rounded-full bg-slate-100 overflow-hidden border border-slate-200">
                      <motion.div
                        key={activeBenchmark}
                        className="h-full bg-[#0284C7] rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${b.progress}%` }}
                        transition={{ duration: 0.6 }}
                      />
                    </div>
                  </div>
                </div>

                {/* 3 Telemetry Metrics */}
                <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3 font-mono text-xs">
                  {b.stats.map((st) => (
                    <div
                      key={st.label}
                      className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between"
                    >
                      <span className="text-slate-500 font-bold uppercase text-[10px]">{st.label}</span>
                      <span className="text-base font-display font-black text-[#0F172A]">{st.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })()}
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-between gap-4 my-8 font-mono text-xs">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setSelectedCategory(c)}
                className={`px-4 py-2 rounded-xl border transition-all cursor-pointer font-bold uppercase tracking-wider ${
                  selectedCategory === c
                    ? 'bg-[#0284C7] text-white border-[#0284C7] shadow-sm'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:text-[#0284C7]'
                }`}
              >
                {c.replace('_', ' ')}
              </button>
            ))}
          </div>

          <span className="text-slate-400 font-bold">
            {filteredEntries.length} PAPERS &amp; EXPLAINERS
          </span>
        </div>

        {/* Research Archive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredEntries.map((paper, idx) => (
              <motion.article
                key={paper.id}
                layout
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                whileHover={{ y: -4 }}
                className="p-7 sm:p-8 rounded-2xl bg-white border border-slate-200 hover:border-[#0284C7] shadow-sm hover:shadow-[0_12px_32px_rgba(2,132,199,0.1)] transition-all duration-300 font-mono text-xs flex flex-col justify-between space-y-6 group cursor-default"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-[#0284C7] font-bold">{paper.code}</span>
                      <span className="text-slate-300">//</span>
                      <span className="text-slate-600 font-semibold">{paper.category}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-500 text-[11px] font-semibold">
                      <Clock className="w-3.5 h-3.5 text-[#0284C7]" />
                      <span>{paper.readTime}</span>
                    </div>
                  </div>

                  <h3 className="font-display font-black text-xl text-[#0F172A] group-hover:text-[#0284C7] transition-colors tracking-tight leading-snug uppercase">
                    {paper.title}
                  </h3>

                  <p className="font-sans text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {paper.abstract}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold">
                  <div className="flex items-center gap-1.5 text-slate-700">
                    <User className="w-3.5 h-3.5 text-[#0284C7]" />
                    <span>{paper.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#0284C7] font-bold bg-sky-50 px-2.5 py-1 rounded-full border border-sky-200">
                      {paper.date}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0284C7] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
