'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wifi, Battery, Bell } from 'lucide-react';
import { StatItem } from '@/data/stats';
import { StatGraphVisual } from './StatGraphVisual';

interface SmartphoneMockupProps {
  statsData: StatItem[];
  activeIndex: number;
  direction: number;
  istTime: string;
  onSelectIndex: (index: number) => void;
  onPrev: () => void;
  onNext: () => void;
}

export const SmartphoneMockup: React.FC<SmartphoneMockupProps> = ({
  statsData,
  activeIndex,
  direction,
  istTime,
  onSelectIndex,
  onPrev,
  onNext,
}) => {
  const activeStat = statsData[activeIndex];

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir >= 0 ? 30 : -30,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      transition: {
        x: { type: 'spring', stiffness: 350, damping: 32 },
        opacity: { duration: 0.2 },
      },
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? 30 : -30,
      opacity: 0,
      transition: {
        duration: 0.15,
      },
    }),
  };

  return (
    <div className="relative w-full max-w-[310px] sm:max-w-[340px] rounded-[44px] sm:rounded-[48px] bg-[#0F172A] p-3 sm:p-3.5 border-[4px] border-slate-700/80 shadow-[0_20px_60px_rgba(15,23,42,0.35)] mx-auto">
      {/* Phone Speaker & Dynamic Island */}
      <div className="absolute top-5 sm:top-6 left-1/2 -translate-x-1/2 w-24 sm:w-28 h-5 sm:h-6 bg-black rounded-full z-40 flex items-center justify-between px-2.5 sm:px-3">
        <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-slate-900 border border-slate-800" />
        <div className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7] animate-pulse" />
          <span className="text-[8px] sm:text-[9px] font-mono font-bold text-sky-400">CIS</span>
        </div>
      </div>

      {/* Smartphone Inner Screen */}
      <div className="relative w-full min-h-[490px] sm:min-h-[530px] rounded-[34px] sm:rounded-[38px] bg-[#080D1A] overflow-hidden p-3.5 sm:p-4 pt-8 sm:pt-10 flex flex-col justify-between border border-slate-800 shadow-inner">
        {/* Top Phone Status Bar with Live Indian Standard Time */}
        <div className="flex items-center justify-between font-mono text-[10px] text-slate-400 px-1 pt-0.5 z-30">
          <span className="font-bold text-white tracking-wider">
            {istTime}
          </span>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Wifi className="w-3.5 h-3.5 text-white" />
            <span className="font-bold text-white text-[9px]">5G</span>
            <Battery className="w-3.5 h-3.5 text-[#0284C7]" />
          </div>
        </div>

        {/* App Brand Header */}
        <div className="pt-3 sm:pt-4 flex items-center justify-between border-b border-slate-800/80 pb-2.5 sm:pb-3">
          <div className="flex items-center gap-2">
            <img
              src="/logo-mark.png"
              alt="IEEE CIS Logo"
              className="w-6 h-6 sm:w-7 sm:h-7 object-contain filter drop-shadow-[0_0_8px_rgba(2,132,199,0.8)]"
            />
            <div>
              <h4 className="font-display font-black text-[11px] sm:text-xs text-white leading-none">
                IEEE CIS MUJ
              </h4>
              <span className="font-mono text-[8px] sm:text-[9px] text-[#0284C7] font-bold">
                COMPANION // LIVE
              </span>
            </div>
          </div>
          <div className="p-1 sm:p-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300">
            <Bell className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#0284C7]" />
          </div>
        </div>

        {/* Main Dynamic Screen Content with Swipe Gesture Support */}
        <div className="my-auto py-2 space-y-3">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeStat.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, { offset, velocity }) => {
                const swipeDistance = offset.x + velocity.x;
                if (swipeDistance < -40) {
                  onNext();
                } else if (swipeDistance > 40) {
                  onPrev();
                }
              }}
              className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-[#0284C7]/40 shadow-[0_0_25px_rgba(2,132,199,0.15)] space-y-2.5 sm:space-y-3 touch-pan-y"
            >
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="px-2 sm:px-2.5 py-0.5 rounded-full bg-[#0284C7]/20 text-[#0284C7] font-bold border border-[#0284C7]/30 text-[9px] sm:text-[10px]">
                  {activeStat.badge}
                </span>
                <span className="text-slate-400 text-[9px] sm:text-[10px]">
                  0{activeIndex + 1} / 0{statsData.length}
                </span>
              </div>

              <div className="text-center py-1 sm:py-2 space-y-0.5">
                <div className="font-mono text-3xl sm:text-4xl lg:text-5xl font-black text-white drop-shadow-[0_0_15px_rgba(2,132,199,0.6)]">
                  {activeStat.metric}
                </div>
                <div className="font-mono text-[11px] sm:text-xs font-bold text-[#0284C7] uppercase tracking-wider">
                  {activeStat.label}
                </div>
              </div>

              {/* Dynamic in-phone Graph Widget */}
              <div className="p-2.5 sm:p-3 rounded-xl bg-black/60 border border-slate-800 space-y-1.5">
                <div className="flex items-center justify-between text-[8px] sm:text-[9px] font-mono text-slate-400">
                  <span>LIVE TRAJECTORY</span>
                  <span className="text-emerald-400 font-bold">{activeStat.growth}</span>
                </div>
                <StatGraphVisual item={activeStat} prefix="phone" />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Micro Live Activity Widget */}
          <div className="p-2.5 sm:p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between text-[9px] sm:text-[10px] font-mono text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-slate-300">NODE STATUS: ACTIVE</span>
            </span>
            <span className="text-[#0284C7] font-bold">CHAPTER #6248</span>
          </div>
        </div>

        {/* Bottom App Navigation Dock */}
        <div className="pt-2 border-t border-slate-800/80 flex items-center justify-around text-slate-500">
          {statsData.map((item, i) => {
            const IconComp = item.icon;
            const isTabActive = activeIndex === i;
            return (
              <button
                key={item.id}
                onClick={() => onSelectIndex(i)}
                className={`p-2 rounded-xl transition-all cursor-pointer flex flex-col items-center gap-0.5 ${
                  isTabActive
                    ? 'bg-[#0284C7] text-white shadow-[0_0_10px_#0284C7]'
                    : 'hover:text-slate-300 hover:bg-slate-900 text-slate-500'
                }`}
                aria-label={item.label}
              >
                <IconComp className="w-4 h-4" />
              </button>
            );
          })}
        </div>

        {/* Home Indicator Bar */}
        <div className="w-24 sm:w-28 h-1 bg-slate-600 rounded-full mx-auto mt-2" />
      </div>
    </div>
  );
};
