'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CHAPTER_STATS_DATA } from '@/data/stats';
import { StatGraphVisual } from './terminal/StatGraphVisual';
import { SmartphoneMockup } from './terminal/SmartphoneMockup';

export const RetroStatsTerminal: React.FC = () => {
  const [activeMetricIndex, setActiveMetricIndex] = useState<number>(0);
  const [slideDirection, setSlideDirection] = useState<number>(0);
  const [currentIstTime, setCurrentIstTime] = useState<string>('12:00');

  const currentStatMetric = CHAPTER_STATS_DATA[activeMetricIndex];

  // Real-time live Indian Standard Time (IST) clock for the smartphone mockup
  useEffect(() => {
    const updateISTTime = () => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: 'numeric',
        minute: '2-digit',
        hour12: false,
      });
      setCurrentIstTime(formattedTime);
    };

    updateISTTime();
    const intervalTimer = setInterval(updateISTTime, 1000);
    return () => clearInterval(intervalTimer);
  }, []);

  const handlePreviousMetric = () => {
    setSlideDirection(-1);
    setActiveMetricIndex((previousIdx) => 
      previousIdx > 0 ? previousIdx - 1 : CHAPTER_STATS_DATA.length - 1
    );
  };

  const handleNextMetric = () => {
    setSlideDirection(1);
    setActiveMetricIndex((previousIdx) => (previousIdx + 1) % CHAPTER_STATS_DATA.length);
  };

  const handleSelectMetric = (targetIndex: number) => {
    setSlideDirection(targetIndex > activeMetricIndex ? 1 : -1);
    setActiveMetricIndex(targetIndex);
  };

  return (
    <section className="relative w-full bg-white/90 backdrop-blur-xs py-8 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-slate-200 select-none">
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/4 w-[650px] h-[450px] bg-[#0284C7]/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-14">
          <div className="flex items-center gap-2 font-mono text-[10px] sm:text-xs text-[#0284C7] font-bold tracking-widest uppercase">
            <span>TELEMETRY &amp; IMPACT METRICS</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-black text-[#0F172A] tracking-tight">
            IEEE CIS <span className="text-[#0284C7]">MUJ</span> by the Numbers
          </h2>
          <div className="w-12 sm:w-16 h-1 bg-[#0284C7] rounded-full shadow-[0_2px_8px_rgba(2,132,199,0.3)]" />
        </div>

        {/* ============================================================ */}
        {/* MOBILE VIEW (< lg): Smartphone Mockup as Centerpiece         */}
        {/* ============================================================ */}
        <div className="block lg:hidden space-y-5">
          <SmartphoneMockup
            statsData={CHAPTER_STATS_DATA}
            activeIndex={activeMetricIndex}
            direction={slideDirection}
            istTime={currentIstTime}
            onSelectIndex={handleSelectMetric}
            onPrev={handlePreviousMetric}
            onNext={handleNextMetric}
          />

          {/* Bottom Navigation Controls */}
          <div className="flex items-center justify-between max-w-[340px] mx-auto px-2">
            <button
              onClick={handlePreviousMetric}
              aria-label="Previous Stat"
              className="p-2.5 rounded-full border border-slate-200 hover:border-[#0284C7] text-slate-700 hover:text-[#0284C7] bg-white shadow-2xs transition-all cursor-pointer active:scale-95"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex flex-col items-center gap-1">
              <span className="font-mono text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                {currentStatMetric.badge} // {activeMetricIndex + 1} OF {CHAPTER_STATS_DATA.length}
              </span>
              <div className="flex items-center gap-1.5">
                {CHAPTER_STATS_DATA.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectMetric(idx)}
                    aria-label={`Go to metric ${idx + 1}`}
                    className={`h-1.5 rounded-full transition-all cursor-pointer ${
                      activeMetricIndex === idx ? 'w-6 bg-[#0284C7]' : 'w-1.5 bg-slate-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            <button
              onClick={handleNextMetric}
              aria-label="Next Stat"
              className="p-2.5 rounded-full border border-slate-200 hover:border-[#0284C7] text-slate-700 hover:text-[#0284C7] bg-white shadow-2xs transition-all cursor-pointer active:scale-95"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ============================================================ */}
        {/* DESKTOP VIEW (>= lg): Full 4-Card Matrix + Smartphone Mockup */}
        {/* ============================================================ */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* LEFT: Giant Stat Cards Matrix */}
          <div className="lg:col-span-7 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {CHAPTER_STATS_DATA.map((statMetric, metricIdx) => {
                const isActive = activeMetricIndex === metricIdx;

                return (
                  <motion.div
                    key={statMetric.id}
                    onClick={() => handleSelectMetric(metricIdx)}
                    whileHover={{ y: -3 }}
                    className={`group p-5 rounded-3xl transition-all duration-300 cursor-pointer border flex flex-col justify-between relative overflow-hidden ${
                      isActive
                        ? 'bg-sky-50/60 border-[#0284C7] ring-2 ring-[#0284C7]/20 shadow-[0_10px_28px_rgba(2,132,199,0.16)]'
                        : 'bg-white border-slate-200/90 hover:border-slate-300 shadow-xs hover:shadow-[0_8px_20px_rgba(2,132,199,0.08)]'
                    }`}
                  >
                    <div>
                      <div className="mb-1">
                        <span className="font-mono text-[11px] font-bold text-slate-500 uppercase tracking-wider group-hover:text-[#0284C7] transition-colors">
                          {statMetric.title}
                        </span>
                      </div>

                      <div className="text-4xl font-display font-black text-[#0F172A] tracking-tight">
                        {statMetric.metric}
                      </div>
                    </div>

                    <StatGraphVisual item={statMetric} prefix="desktop" />
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* RIGHT: High-Precision Interactive Smartphone Mockup */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center w-full">
            <SmartphoneMockup
              statsData={CHAPTER_STATS_DATA}
              activeIndex={activeMetricIndex}
              direction={slideDirection}
              istTime={currentIstTime}
              onSelectIndex={handleSelectMetric}
              onPrev={handlePreviousMetric}
              onNext={handleNextMetric}
            />

            <p className="mt-4 font-mono text-xs text-[#0F172A] font-bold uppercase tracking-wider">
              TAP STATS OR DOCK TO EXPLORE METRICS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
