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
  Compass
} from 'lucide-react';

interface StatItem {
  id: string;
  metric: string;
  label: string;
  subtext: string;
  icon: React.ElementType;
  detail: string;
  statusText: string;
  badge: string;
}

const STATS_DATA: StatItem[] = [
  {
    id: 'members',
    metric: '1,500+',
    label: 'ACTIVE MEMBERS',
    subtext: 'Global student engineers & AI researchers',
    icon: Users,
    detail: 'Over 1,500 students enrolled across undergraduate & postgraduate engineering streams at MUJ.',
    statusText: 'COMMUNITY GROWING',
    badge: 'MEMBERSHIP',
  },
  {
    id: 'events',
    metric: '30+',
    label: 'EVENTS & HACKATHONS',
    subtext: 'Flagships, workshops & coding labs',
    icon: Calendar,
    detail: '36-hour hackathons, agentic AI bootcamps, CTF cybersecurity tournaments, and hands-on ML workshops.',
    statusText: 'ANNUAL CALENDAR',
    badge: 'COMPETITIONS',
  },
  {
    id: 'projects',
    metric: '25+',
    label: 'FLAGSHIP PROJECTS',
    subtext: 'Autonomous rovers, LLMs & web platforms',
    icon: Layers,
    detail: 'Student-led deep tech projects spanning computer vision, robotics, web engineering, and competitive research.',
    statusText: 'ACTIVE LABS',
    badge: 'PROJECTS',
  },
  {
    id: 'mentors',
    metric: '10+',
    label: 'MENTORS & FACULTY',
    subtext: 'Senior IEEE fellows & research advisors',
    icon: Award,
    detail: 'Distinguished university faculty, IEEE Senior Members, and alumni mentors guiding projects.',
    statusText: 'RESEARCH GUIDANCE',
    badge: 'FACULTY',
  },
];

export const RetroStatsTerminal: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const activeStat = STATS_DATA[activeIndex];

  return (
    <section className="relative w-full min-h-[840px] bg-white/90 backdrop-blur-xs py-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-slate-200 select-none">
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/4 w-[650px] h-[450px] bg-[#0284C7]/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="space-y-3 mb-16">
          <div className="flex items-center gap-2 font-mono text-xs text-[#0284C7] font-bold tracking-widest uppercase">
            <span>TELEMETRY &amp; IMPACT METRICS</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-[#0F172A] tracking-tight">
            IEEE CIS <span className="text-[#0284C7]">MUJ</span> by the Numbers
          </h2>
          <div className="w-16 h-1 bg-[#0284C7] rounded-full shadow-[0_2px_8px_rgba(2,132,199,0.3)]" />
        </div>

        {/* Main Grid: Interactive Telemetry Cards (Left) vs Interactive Smartphone Mockup (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LEFT: Giant Stat Cards Matrix */}
          <div className="lg:col-span-7 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {STATS_DATA.map((item, idx) => {
                const isActive = activeIndex === idx;
                const IconComponent = item.icon;

                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveIndex(idx)}
                    className={`group p-6 rounded-2xl transition-all duration-300 cursor-pointer border-2 flex flex-col justify-between ${
                      isActive
                        ? 'bg-sky-50/70 border-[#0284C7] shadow-[0_8px_24px_rgba(2,132,199,0.18)] translate-x-1'
                        : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-sm'
                    }`}
                  >
                    <div>
                      <span className="font-mono text-xs font-bold text-slate-500 uppercase tracking-wider block mb-3">
                        {item.label}
                      </span>

                      <div className="text-4xl sm:text-5xl font-display font-black text-[#0F172A] tracking-tight leading-none">
                        {item.metric}
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-200/80">
                      <p className="font-sans text-xs text-slate-600 font-normal line-clamp-1">
                        {item.subtext}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT: High-Precision Interactive Smartphone Mockup */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center w-full">
            <div className="relative w-full max-w-[280px] sm:max-w-[330px] rounded-[44px] sm:rounded-[48px] bg-[#0F172A] p-3 sm:p-3.5 border-[3px] sm:border-[4px] border-slate-700/80 shadow-[0_20px_60px_rgba(15,23,42,0.35)]">
              {/* Phone Speaker & Dynamic Island */}
              <div className="absolute top-5 sm:top-6 left-1/2 -translate-x-1/2 w-24 sm:w-28 h-5 sm:h-6 bg-black rounded-full z-40 flex items-center justify-between px-2.5 sm:px-3">
                <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-slate-900 border border-slate-800" />
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7] animate-pulse" />
                  <span className="text-[8px] sm:text-[9px] font-mono font-bold text-sky-400">CIS</span>
                </div>
              </div>

              {/* Smartphone Inner Screen */}
              <div className="relative w-full h-[520px] sm:h-[570px] rounded-[34px] sm:rounded-[38px] bg-[#080D1A] overflow-hidden p-3.5 sm:p-4 pt-9 sm:pt-10 flex flex-col justify-between border border-slate-800 shadow-inner">
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

