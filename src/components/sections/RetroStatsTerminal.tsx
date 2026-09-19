'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  Calendar, 
  Layers, 
  Award, 
  Wifi, 
  Battery, 
  Sparkles, 
  ChevronRight, 
  Activity, 
  Bell,
  Cpu,
  Compass,
  TrendingUp,
  MoreVertical
} from 'lucide-react';

interface StatItem {
  id: string;
  metric: string;
  label: string;
  title: string;
  subtext: string;
  growth: string;
  icon: React.ElementType;
  detail: string;
  statusText: string;
  badge: string;
  type: 'matrix' | 'avatars' | 'sparkline' | 'progress';
}

const STATS_DATA: StatItem[] = [
  {
    id: 'members',
    metric: '1,500+',
    growth: '+38% YoY',
    label: 'ACTIVE MEMBERS',
    title: 'Active users growth',
    subtext: 'Global student engineers & AI researchers collaborating across MUJ this academic year.',
    icon: Users,
    detail: 'Over 1,500 students enrolled across undergraduate & postgraduate engineering streams at MUJ.',
    statusText: 'COMMUNITY GROWING',
    badge: 'MEMBERSHIP',
    type: 'matrix',
  },
  {
    id: 'mentors',
    metric: '10+',
    growth: '100% Guidance',
    label: 'MENTORS & FACULTY',
    title: 'Most active specialists',
    subtext: 'Senior IEEE fellows, pioneering professors & alumni research advisors guiding student labs.',
    icon: Award,
    detail: 'Distinguished university faculty, IEEE Senior Members, and alumni mentors guiding projects.',
    statusText: 'RESEARCH GUIDANCE',
    badge: 'FACULTY',
    type: 'avatars',
  },
  {
    id: 'events',
    metric: '30+',
    growth: '98.4% Attendance',
    label: 'EVENTS & HACKATHONS',
    title: 'Flagship runs & CTF',
    subtext: 'Real-time overview of competitive 36-hour hackathons, AI bootcamps, and CTF challenges.',
    icon: Calendar,
    detail: '36-hour hackathons, agentic AI bootcamps, CTF cybersecurity tournaments, and hands-on ML workshops.',
    statusText: 'ANNUAL CALENDAR',
    badge: 'COMPETITIONS',
    type: 'sparkline',
  },
  {
    id: 'projects',
    metric: '25+',
    growth: '100% Open Source',
    label: 'FLAGSHIP PROJECTS',
    title: 'Core engineering labs',
    subtext: 'Autonomous ground rovers, spiking neural models, and student-engineered PyTorch architectures.',
    icon: Layers,
    detail: 'Student-led deep tech projects spanning computer vision, robotics, web engineering, and competitive research.',
    statusText: 'ACTIVE LABS',
    badge: 'PROJECTS',
    type: 'progress',
  },
];

export const RetroStatsTerminal: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const activeStat = STATS_DATA[activeIndex];

  return (
    <section className="relative w-full bg-white/90 backdrop-blur-xs py-10 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-slate-200 select-none">
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/4 w-[650px] h-[450px] bg-[#0284C7]/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="space-y-2 sm:space-y-3 mb-8 sm:mb-16">
          <div className="flex items-center gap-2 font-mono text-[10px] sm:text-xs text-[#0284C7] font-bold tracking-widest uppercase">
            <span>TELEMETRY &amp; IMPACT METRICS</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-black text-[#0F172A] tracking-tight">
            IEEE CIS <span className="text-[#0284C7]">MUJ</span> by the Numbers
          </h2>
          <div className="w-12 sm:w-16 h-1 bg-[#0284C7] rounded-full shadow-[0_2px_8px_rgba(2,132,199,0.3)]" />
        </div>

        {/* Main Grid: Interactive Telemetry Cards (Left) vs Interactive Smartphone Mockup (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* LEFT: Giant Stat Cards Matrix */}
          <div className="lg:col-span-7 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              {STATS_DATA.map((item, idx) => {
                const isActive = activeIndex === idx;

                return (
                  <motion.div
                    key={item.id}
                    onClick={() => setActiveIndex(idx)}
                    whileHover={{ y: -3 }}
                    className={`group p-4 sm:p-5 rounded-2xl sm:rounded-3xl transition-all duration-300 cursor-pointer border flex flex-col justify-between relative overflow-hidden ${
                      isActive
                        ? 'bg-sky-50/60 border-[#0284C7] ring-2 ring-[#0284C7]/20 shadow-[0_10px_28px_rgba(2,132,199,0.16)]'
                        : 'bg-white border-slate-200/90 hover:border-slate-300 shadow-xs hover:shadow-[0_8px_20px_rgba(2,132,199,0.08)]'
                    }`}
                  >
                    <div>
                      {/* Top Metric Header (Clean, No pill badges) */}
                      <div className="mb-1">
                        <span className="font-mono text-[10px] sm:text-[11px] font-bold text-slate-500 uppercase tracking-wider group-hover:text-[#0284C7] transition-colors">
                          {item.title}
                        </span>
                      </div>

                      {/* Large Bold Metric Number */}
                      <div className="text-3xl sm:text-4xl font-display font-black text-[#0F172A] tracking-tight">
                        {item.metric}
                      </div>
                    </div>

                    {/* Prominent High-Impact Data Graphs */}
                    {item.type === 'matrix' && (
                      <div className="mt-3 pt-2">
                        {/* Area Trend Graph */}
                        <div className="w-full h-16 relative">
                          <svg className="w-full h-full overflow-visible" viewBox="0 0 200 60" preserveAspectRatio="none">
                            <defs>
                              <linearGradient id="memberAreaGrad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#0284C7" stopOpacity="0.4" />
                                <stop offset="100%" stopColor="#0284C7" stopOpacity="0.0" />
                              </linearGradient>
                            </defs>
                            {/* Gridlines */}
                            <line x1="0" y1="15" x2="200" y2="15" stroke="#E2E8F0" strokeWidth="0.75" strokeDasharray="3 3" />
                            <line x1="0" y1="35" x2="200" y2="35" stroke="#E2E8F0" strokeWidth="0.75" strokeDasharray="3 3" />
                            {/* Area Fill */}
                            <path
                              d="M 0,55 C 30,50 50,38 80,32 C 110,26 135,34 160,18 C 180,8 190,10 200,4 L 200,60 L 0,60 Z"
                              fill="url(#memberAreaGrad)"
                            />
                            {/* Main Stroke */}
                            <path
                              d="M 0,55 C 30,50 50,38 80,32 C 110,26 135,34 160,18 C 180,8 190,10 200,4"
                              stroke="#0284C7"
                              strokeWidth="2.2"
                              fill="none"
                              strokeLinecap="round"
                            />
                            {/* Data points */}
                            <circle cx="80" cy="32" r="2.5" fill="#0284C7" stroke="#FFFFFF" strokeWidth="1.5" />
                            <circle cx="160" cy="18" r="2.5" fill="#0284C7" stroke="#FFFFFF" strokeWidth="1.5" />
                            <circle cx="200" cy="4" r="3.5" fill="#0284C7" stroke="#FFFFFF" strokeWidth="2" />
                          </svg>
                        </div>
                        <div className="flex items-center justify-between text-[9px] font-mono text-slate-400 mt-1">
                          <span>Q1</span>
                          <span>Q2</span>
                          <span>Q3</span>
                          <span>Q4</span>
                          <span className="text-[#0284C7] font-bold">2026</span>
                        </div>
                      </div>
                    )}

                    {item.type === 'avatars' && (
                      <div className="mt-3 pt-2">
                        {/* Multi-Bar Domain Distribution Graph */}
                        <div className="h-16 flex items-end justify-between gap-2 px-1">
                          {[
                            { label: 'AI', height: '65%', val: '65' },
                            { label: 'ML', height: '90%', val: '90' },
                            { label: 'ROV', height: '75%', val: '75' },
                            { label: 'GNN', height: '85%', val: '85' },
                            { label: 'LLM', height: '100%', val: '100' },
                            { label: 'BIO', height: '70%', val: '70' },
                          ].map((bar, bIdx) => (
                            <div key={bIdx} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                              <div className="w-full bg-slate-100 rounded-t-md h-full relative flex items-end overflow-hidden">
                                <motion.div
                                  initial={{ height: 0 }}
                                  whileInView={{ height: bar.height }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 0.6, delay: bIdx * 0.08 }}
                                  className={`w-full rounded-t-md ${
                                    bIdx === 4
                                      ? 'bg-gradient-to-t from-[#0284C7] to-sky-400'
                                      : 'bg-gradient-to-t from-sky-400/80 to-sky-300'
                                  }`}
                                />
                              </div>
                              <span className="text-[8px] font-mono text-slate-500 font-bold">{bar.label}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {item.type === 'sparkline' && (
                      <div className="mt-3 pt-2">
                        {/* Dual Velocity Wave Graph */}
                        <div className="w-full h-16 relative">
                          <svg className="w-full h-full overflow-visible" viewBox="0 0 200 60" preserveAspectRatio="none">
                            <defs>
                              <linearGradient id="sprintAreaGrad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.35" />
                                <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.0" />
                              </linearGradient>
                            </defs>
                            <line x1="0" y1="20" x2="200" y2="20" stroke="#E2E8F0" strokeWidth="0.75" strokeDasharray="3 3" />
                            <path
                              d="M 0,48 Q 40,46 70,26 T 130,22 T 200,6 L 200,60 L 0,60 Z"
                              fill="url(#sprintAreaGrad)"
                            />
                            <path
                              d="M 0,48 Q 40,46 70,26 T 130,22 T 200,6"
                              stroke="#0284C7"
                              strokeWidth="2.2"
                              fill="none"
                              strokeLinecap="round"
                            />
                            <circle cx="70" cy="26" r="2.5" fill="#0284C7" stroke="#FFFFFF" strokeWidth="1.5" />
                            <circle cx="130" cy="22" r="2.5" fill="#0284C7" stroke="#FFFFFF" strokeWidth="1.5" />
                            <circle cx="200" cy="6" r="3.5" fill="#0284C7" stroke="#FFFFFF" strokeWidth="2" />
                          </svg>
                        </div>
                        <div className="flex items-center justify-between text-[9px] font-mono text-slate-400 mt-1">
                          <span>36H Spr.</span>
                          <span>Hacks</span>
                          <span>CTF Runs</span>
                          <span className="text-[#0284C7] font-bold">100% Rate</span>
                        </div>
                      </div>
                    )}

                    {item.type === 'progress' && (
                      <div className="mt-3 pt-2 space-y-2">
                        {/* Domain Progress Bars with Percentages */}
                        <div>
                          <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                            <span className="text-slate-600 font-semibold">Vision &amp; LLMs</span>
                            <span className="text-[#0284C7] font-bold">88%</span>
                          </div>
                          <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-sky-400 to-[#0284C7] rounded-full w-[88%]" />
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                            <span className="text-slate-600 font-semibold">Swarm &amp; Robotics</span>
                            <span className="text-[#0284C7] font-bold">74%</span>
                          </div>
                          <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-sky-400 to-[#0284C7] rounded-full w-[74%]" />
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-[9px] font-mono text-slate-400 pt-0.5">
                          <span>Active Repos</span>
                          <span className="text-emerald-600 font-bold">● Production Ready</span>
                        </div>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* RIGHT: High-Precision Interactive Smartphone Mockup */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center w-full">
            <div className="relative w-full max-w-[270px] sm:max-w-[330px] rounded-[40px] sm:rounded-[48px] bg-[#0F172A] p-3 sm:p-3.5 border-[3px] sm:border-[4px] border-slate-700/80 shadow-[0_20px_60px_rgba(15,23,42,0.35)]">
              {/* Phone Speaker & Dynamic Island */}
              <div className="absolute top-4 sm:top-6 left-1/2 -translate-x-1/2 w-24 sm:w-28 h-5 sm:h-6 bg-black rounded-full z-40 flex items-center justify-between px-2.5 sm:px-3">
                <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-slate-900 border border-slate-800" />
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7] animate-pulse" />
                  <span className="text-[8px] sm:text-[9px] font-mono font-bold text-sky-400">CIS</span>
                </div>
              </div>

              {/* Smartphone Inner Screen */}
              <div className="relative w-full h-[470px] sm:h-[570px] rounded-[30px] sm:rounded-[38px] bg-[#080D1A] overflow-hidden p-3.5 sm:p-4 pt-8 sm:pt-10 flex flex-col justify-between border border-slate-800 shadow-inner">
                {/* Top Phone Status Bar */}
                <div className="flex items-center justify-between font-mono text-[10px] text-slate-400 px-1 pt-1 z-30">
                  <span className="font-bold text-white">9:41</span>
                  <div className="flex items-center gap-2">
                    <Wifi className="w-3.5 h-3.5 text-white" />
                    <span className="font-bold text-white text-[9px]">5G</span>
                    <Battery className="w-3.5 h-3.5 text-[#0284C7]" />
                  </div>
                </div>

                {/* App Brand Header */}
                <div className="pt-4 flex items-center justify-between border-b border-slate-800/80 pb-3">
                  <div className="flex items-center gap-2">
                    <img
                      src="/logo-mark.png"
                      alt="IEEE CIS Logo"
                      className="w-7 h-7 object-contain filter drop-shadow-[0_0_8px_rgba(2,132,199,0.8)]"
                    />
                    <div>
                      <h4 className="font-display font-black text-xs text-white leading-none">
                        IEEE CIS MUJ
                      </h4>
                      <span className="font-mono text-[9px] text-[#0284C7] font-bold">
                        COMPANION // LIVE
                      </span>
                    </div>
                  </div>
                  <div className="p-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300">
                    <Bell className="w-3.5 h-3.5 text-[#0284C7]" />
                  </div>
                </div>

                {/* Main Dynamic Screen Content */}
                <div className="my-auto py-2 space-y-4">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeStat.id}
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -15, scale: 0.95 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      className="p-5 rounded-2xl bg-slate-900/90 border border-[#0284C7]/40 shadow-[0_0_25px_rgba(2,132,199,0.15)] space-y-3"
                    >
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="px-2.5 py-0.5 rounded-full bg-[#0284C7]/20 text-[#0284C7] font-bold border border-[#0284C7]/30 text-[10px]">
                          {activeStat.badge}
                        </span>
                        <span className="text-slate-400 text-[10px]">
                          TELEMETRY FEED
                        </span>
                      </div>

                      <div className="text-center py-2 space-y-1">
                        <div className="font-mono text-4xl sm:text-5xl font-black text-white drop-shadow-[0_0_15px_rgba(2,132,199,0.6)]">
                          {activeStat.metric}
                        </div>
                        <div className="font-mono text-xs font-bold text-[#0284C7] uppercase tracking-wider">
                          {activeStat.label}
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-black/60 border border-slate-800 space-y-2">
                        <div className="flex items-center justify-between text-[9px] font-mono text-slate-400">
                          <span>LIVE TRAJECTORY</span>
                          <span className="text-emerald-400 font-bold">{activeStat.growth}</span>
                        </div>
                        <div className="w-full h-10 relative">
                          <svg className="w-full h-full overflow-visible" viewBox="0 0 160 40" preserveAspectRatio="none">
                            <defs>
                              <linearGradient id="phoneGrad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#0284C7" stopOpacity="0.5" />
                                <stop offset="100%" stopColor="#0284C7" stopOpacity="0.0" />
                              </linearGradient>
                            </defs>
                            <path
                              d="M 0,35 Q 30,30 60,18 T 110,14 T 160,4 L 160,40 L 0,40 Z"
                              fill="url(#phoneGrad)"
                            />
                            <path
                              d="M 0,35 Q 30,30 60,18 T 110,14 T 160,4"
                              stroke="#38BDF8"
                              strokeWidth="2"
                              fill="none"
                              strokeLinecap="round"
                            />
                            <circle cx="160" cy="4" r="3" fill="#38BDF8" className="animate-ping" />
                            <circle cx="160" cy="4" r="2.5" fill="#FFFFFF" />
                          </svg>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Micro Live Activity Widget */}
                  <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between text-[10px] font-mono text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span className="text-slate-300">NODE STATUS: ACTIVE</span>
                    </span>
                    <span className="text-[#0284C7] font-bold">CHAPTER #6248</span>
                  </div>
                </div>

                {/* Bottom App Navigation Dock */}
                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-around text-slate-500">
                  {STATS_DATA.map((item, i) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveIndex(i)}
                      className={`p-2 rounded-xl transition-all cursor-pointer ${
                        activeIndex === i
                          ? 'bg-[#0284C7] text-white shadow-[0_0_10px_#0284C7]'
                          : 'hover:text-slate-300 hover:bg-slate-900'
                      }`}
                      aria-label={item.label}
                    >
                      {i === 0 && <Users className="w-4 h-4" />}
                      {i === 1 && <Calendar className="w-4 h-4" />}
                      {i === 2 && <Compass className="w-4 h-4" />}
                      {i === 3 && <Cpu className="w-4 h-4" />}
                    </button>
                  ))}
                </div>

                {/* Home Indicator Bar */}
                <div className="w-28 h-1 bg-slate-600 rounded-full mx-auto mt-2" />
              </div>
            </div>

            {/* Bottom Interaction Hint */}
            <p className="mt-4 font-mono text-xs text-[#0F172A] font-bold uppercase tracking-wider">
              TAP STATS OR DOCK TO EXPLORE METRICS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

