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
                const IconComponent = item.icon;

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
                      {/* Card Header: Icon Box + Title + 3-Dots */}
                      <div className="flex items-center justify-between mb-2.5">
                        <div className="flex items-center gap-2.5">
                          <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-colors ${
                            isActive
                              ? 'bg-[#0284C7] text-white'
                              : 'bg-sky-50 border border-sky-200/60 text-[#0284C7] group-hover:bg-[#0284C7] group-hover:text-white'
                          }`}>
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <div>
                            <h3 className="font-display font-bold text-xs sm:text-sm text-[#0F172A] tracking-tight group-hover:text-[#0284C7] transition-colors">
                              {item.title}
                            </h3>
                          </div>
                        </div>

                        <div className="text-slate-300 group-hover:text-[#0284C7] transition-colors p-1">
                          <MoreVertical className="w-3.5 h-3.5" />
                        </div>
                      </div>

                      {/* Subtext description */}
                      <p className="font-sans text-[11px] text-slate-500 leading-relaxed line-clamp-2 mb-3">
                        {item.subtext}
                      </p>

                      {/* Large Metric & Growth Chip */}
                      <div className="flex items-center gap-2.5 my-1">
                        <span className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-[#0F172A] tracking-tight">
                          {item.metric}
                        </span>
                        <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-50 text-emerald-600 border border-emerald-200/60 shadow-2xs">
                          <TrendingUp className="w-3 h-3 text-emerald-600" />
                          <span>{item.growth}</span>
                        </span>
                      </div>
                    </div>

                    {/* Bottom Visual Modules (Matching Reference Style in CIS Blue) */}
                    {item.type === 'matrix' && (
                      <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-slate-100">
                        <div className="p-2.5 rounded-xl bg-gradient-to-br from-sky-500 to-[#0284C7] text-white shadow-2xs">
                          <div className="grid grid-cols-5 gap-1 w-fit mb-1.5">
                            {Array.from({ length: 15 }).map((_, i) => (
                              <span
                                key={i}
                                className={`w-1.5 h-1.5 rounded-full ${
                                  i < 12 ? 'bg-white' : 'bg-white/30'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-[9px] font-mono block opacity-90 leading-tight">Undergrad Cohort</span>
                          <span className="text-[10px] font-bold font-mono">↗ +22% vs term</span>
                        </div>

                        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-slate-700 flex flex-col justify-between">
                          <div>
                            <span className="text-[9px] font-mono text-slate-400 block uppercase">Postgraduate</span>
                            <span className="text-xs font-display font-black text-[#0F172A]">18% Research</span>
                          </div>
                          <span className="text-[10px] font-mono font-semibold text-emerald-600">↗ +8% YoY</span>
                        </div>
                      </div>
                    )}

                    {item.type === 'avatars' && (
                      <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                        <div className="flex items-center -space-x-2">
                          <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-sky-600 to-sky-400 text-white font-mono text-[9px] font-bold flex items-center justify-center ring-2 ring-white shadow-xs">
                            AI
                          </div>
                          <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-indigo-600 to-indigo-400 text-white font-mono text-[9px] font-bold flex items-center justify-center ring-2 ring-white shadow-xs">
                            IEEE
                          </div>
                          <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-slate-800 to-slate-600 text-white font-mono text-[9px] font-bold flex items-center justify-center ring-2 ring-white shadow-xs">
                            ROV
                          </div>
                          <div className="w-7 h-7 rounded-full bg-[#0284C7] text-white font-mono text-[9px] font-bold flex items-center justify-center ring-2 ring-white shadow-xs">
                            +7
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-[11px] font-mono font-bold text-[#0F172A] block leading-tight">10+ Active Fellows</span>
                          <span className="text-[10px] font-mono text-emerald-600 font-semibold">+18% mentor hours</span>
                        </div>
                      </div>
                    )}

                    {item.type === 'sparkline' && (
                      <div className="mt-3 pt-3 border-t border-slate-100 flex items-end justify-between gap-3">
                        <div>
                          <span className="text-[10px] font-mono font-bold text-[#0284C7] bg-sky-50 px-2 py-0.5 rounded-full border border-sky-100 inline-block mb-1">
                            36H Sprints ↗
                          </span>
                          <span className="text-[10px] font-mono text-slate-500 block">100% Run Rate</span>
                        </div>
                        <div className="w-24 h-9 relative">
                          <svg className="w-full h-full overflow-visible" viewBox="0 0 100 36" fill="none">
                            <defs>
                              <linearGradient id="sparkGrad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#0284C7" stopOpacity="0.35" />
                                <stop offset="100%" stopColor="#0284C7" stopOpacity="0.0" />
                              </linearGradient>
                            </defs>
                            <path
                              d="M 0,30 Q 20,28 35,16 T 70,12 T 100,4 L 100,36 L 0,36 Z"
                              fill="url(#sparkGrad)"
                            />
                            <path
                              d="M 0,30 Q 20,28 35,16 T 70,12 T 100,4"
                              stroke="#0284C7"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                            <circle cx="35" cy="16" r="2.5" fill="#0284C7" stroke="#FFFFFF" strokeWidth="1.5" />
                            <circle cx="70" cy="12" r="2.5" fill="#0284C7" stroke="#FFFFFF" strokeWidth="1.5" />
                            <circle cx="100" cy="4" r="3" fill="#0284C7" stroke="#FFFFFF" strokeWidth="1.5" />
                          </svg>
                        </div>
                      </div>
                    )}

                    {item.type === 'progress' && (
                      <div className="mt-3 pt-3 border-t border-slate-100 space-y-2">
                        <div>
                          <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                            <span className="text-slate-600 font-medium">Vision &amp; LLMs</span>
                            <span className="text-[#0284C7] font-bold">88%</span>
                          </div>
                          <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-sky-400 to-[#0284C7] rounded-full w-[88%]" />
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                            <span className="text-slate-600 font-medium">Swarm &amp; Robotics</span>
                            <span className="text-[#0284C7] font-bold">74%</span>
                          </div>
                          <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-sky-400 to-[#0284C7] rounded-full w-[74%]" />
                          </div>
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

                      <div className="p-2.5 rounded-xl bg-black/50 border border-slate-800 text-[11px] font-sans text-slate-300 leading-snug text-center">
                        {activeStat.subtext}
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

