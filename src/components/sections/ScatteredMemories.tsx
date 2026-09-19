'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, ArrowRight, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { MEMORY_EVENTS_DATA, MemoryEventRecord } from '@/data/memories';

export const ScatteredMemories: React.FC = () => {
  const [selectedMemoryEvent, setSelectedMemoryEvent] = useState<MemoryEventRecord | null>(null);
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState(1);

  const handleNextMobile = () => {
    setSwipeDirection(1);
    setActiveMobileIndex((prev) => (prev + 1) % MEMORY_EVENTS_DATA.length);
  };

  const handlePrevMobile = () => {
    setSwipeDirection(-1);
    setActiveMobileIndex((prev) => (prev - 1 + MEMORY_EVENTS_DATA.length) % MEMORY_EVENTS_DATA.length);
  };

  const handleJumpMobile = (targetIdx: number) => {
    setSwipeDirection(targetIdx > activeMobileIndex ? 1 : -1);
    setActiveMobileIndex(targetIdx);
  };

  return (
    <section className="relative w-full bg-white text-[#0F172A] py-8 sm:py-16 lg:py-24 overflow-hidden select-none border-b border-slate-100">
      {/* Soft ethereal ambient glow */}
      <div className="absolute top-1/4 right-0 w-[800px] h-[600px] bg-gradient-to-l from-sky-100/40 via-sky-50/20 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* ============================================================ */}
      {/* DESKTOP 2.5D CONSTELLATION CANVAS (>= 1024px)               */}
      {/* ============================================================ */}
      <div className="hidden lg:block relative w-full max-w-[1560px] mx-auto h-[820px]">
        {/* Continuous Flowing Winding Spline Path */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible"
          viewBox="0 0 1440 780"
          fill="none"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M 0,320 C 120,320 200,430 266,430 C 360,430 460,310 562,310 C 660,310 760,540 871,540 C 970,540 1060,200 1200,200 C 1310,200 1380,380 1440,380"
            stroke="#38BDF8"
            strokeWidth="1.5"
            strokeOpacity="0.85"
          />
          <path
            d="M 0,340 C 130,340 210,450 280,450 C 370,450 480,330 580,330 C 680,330 780,560 890,560 C 990,560 1080,220 1220,220 C 1330,220 1400,400 1440,400"
            stroke="#0284C7"
            strokeWidth="0.8"
            strokeOpacity="0.3"
            strokeDasharray="4 4"
          />

          <circle cx="266" cy="430" r="3.5" fill="#0284C7" />
          <circle cx="266" cy="430" r="7" stroke="#38BDF8" strokeWidth="1" strokeOpacity="0.5" />
          <circle cx="562" cy="310" r="3.5" fill="#0284C7" />
          <circle cx="562" cy="310" r="7" stroke="#38BDF8" strokeWidth="1" strokeOpacity="0.5" />
          <circle cx="871" cy="540" r="3.5" fill="#0284C7" />
          <circle cx="871" cy="540" r="7" stroke="#38BDF8" strokeWidth="1" strokeOpacity="0.5" />
          <circle cx="1200" cy="200" r="3.5" fill="#0284C7" />
          <circle cx="1200" cy="200" r="7" stroke="#38BDF8" strokeWidth="1" strokeOpacity="0.5" />

          <circle cx="80" cy="320" r="2.5" fill="#38BDF8" />
          <circle cx="420" cy="370" r="2" fill="#0284C7" />
          <circle cx="720" cy="420" r="2.5" fill="#38BDF8" />
          <circle cx="1040" cy="380" r="2.5" fill="#0284C7" />
          <circle cx="1320" cy="290" r="2" fill="#38BDF8" />
        </svg>

        {/* 1. Header Column (Top Left) */}
        <div className="absolute left-[4%] top-[6%] max-w-[25%] space-y-4 z-10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-px bg-[#0284C7]" />
            <span className="font-mono text-[11px] font-bold text-[#0284C7] tracking-widest uppercase">
              OUR EVENTS
            </span>
            <div className="w-8 h-px bg-[#0284C7]" />
          </div>

          <h2 className="font-sans font-light text-5xl xl:text-6xl tracking-tight leading-[1.08] text-slate-900">
            Ideas become <br />
            <span className="text-[#0284C7] font-normal">experiences.</span>
          </h2>

          <p className="font-sans text-xs text-slate-500 leading-relaxed max-w-sm pt-1">
            IEEE CIS brings together workshops, competitions, talks, projects and community experiences to build a stronger, smarter tomorrow.
          </p>
        </div>

        {/* 2. Top-Right 3D Glossy Orbital Spheres */}
        <motion.div
          animate={{
            y: [-6, 6, -6],
            rotate: [-1, 1, -1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute right-[2%] top-[3%] w-[26%] max-w-[340px] pointer-events-none z-10"
        >
          <img
            src="/orbital-cluster-trans.png"
            alt="3D Orbital Cyan Spheres"
            className="w-full h-auto object-contain select-none filter drop-shadow-emblem-lg"
          />
        </motion.div>

        {/* 3. The 5 Event Cards & Detail Blocks */}
        {MEMORY_EVENTS_DATA.map((memoryItem) => (
          <React.Fragment key={memoryItem.id}>
            <motion.div
              whileHover={{ scale: 1.03, y: -4 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedMemoryEvent(memoryItem)}
              className={`absolute ${memoryItem.photoClass} aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-blue-card border border-slate-100 hover:border-sky-300 transition-all cursor-pointer z-10 bg-slate-100 group`}
            >
              <img
                src={memoryItem.image}
                alt={memoryItem.title}
                className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>

            <div className={`absolute ${memoryItem.textClass} space-y-2 z-10`}>
              <span className="font-mono text-[10px] font-bold text-[#0284C7] uppercase tracking-wider block">
                {memoryItem.category}
              </span>

              <div>
                <h3 className="font-sans font-bold text-slate-900 text-base xl:text-lg leading-tight group-hover:text-[#0284C7] transition-colors">
                  {memoryItem.title}
                </h3>
                <span className="font-sans text-xs text-slate-500 font-normal block mt-0.5">
                  {memoryItem.year}
                </span>
              </div>

              <div className="space-y-0.5 font-mono text-[10px] text-slate-500 font-semibold uppercase">
                <p className="flex items-center gap-1.5">
                  <Calendar className="w-3 h-3 text-[#0284C7] shrink-0" />
                  <span>{memoryItem.date}</span>
                </p>
                <p className="flex items-center gap-1.5 truncate">
                  <MapPin className="w-3 h-3 text-[#0284C7] shrink-0" />
                  <span className="truncate">{memoryItem.location}</span>
                </p>
              </div>

              <p className="font-sans text-[11px] text-slate-500 leading-relaxed line-clamp-3">
                {memoryItem.description}
              </p>

              <button
                onClick={() => setSelectedMemoryEvent(memoryItem)}
                className="font-mono text-[10px] font-bold text-[#0284C7] hover:text-sky-700 uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer pt-1 group"
              >
                <span>VIEW EVENT</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </React.Fragment>
        ))}
      </div>

      {/* ============================================================ */}
      {/* MOBILE / TABLET RESPONSIVE FLOW (< 1024px)                   */}
      {/* ============================================================ */}
      <div className="lg:hidden px-4 sm:px-6 space-y-5 max-w-xl mx-auto">
        <div className="space-y-1.5 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <div className="w-5 h-px bg-[#0284C7]" />
            <span className="font-mono text-[10px] font-bold text-[#0284C7] tracking-widest uppercase">
              OUR EVENTS
            </span>
            <div className="w-5 h-px bg-[#0284C7]" />
          </div>

          <h2 className="font-sans font-light text-2xl sm:text-4xl tracking-tight text-slate-900 leading-tight">
            Ideas become <br />
            <span className="text-[#0284C7] font-normal">experiences.</span>
          </h2>

          <p className="font-sans text-xs text-slate-500 leading-relaxed max-w-sm mx-auto sm:mx-0">
            Workshops, hackathons, and community experiences driving computational intelligence.
          </p>
        </div>

        {/* Interactive Constellation Rail */}
        <div className="relative py-1">
          <div className="absolute top-4 left-4 right-4 h-0.5 bg-gradient-to-r from-sky-400 via-[#0284C7] to-sky-300 rounded-full opacity-35 z-0" />

          <div className="relative z-10 flex items-center justify-between px-1">
            {MEMORY_EVENTS_DATA.map((item, idx) => {
              const isActive = activeMobileIndex === idx;
              return (
                <button
                  key={item.id}
                  onClick={() => handleJumpMobile(idx)}
                  className="flex flex-col items-center gap-1 focus:outline-hidden group cursor-pointer"
                  aria-label={`Jump to ${item.title}`}
                >
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-mono text-[10px] sm:text-xs font-bold transition-all duration-300 ${
                      isActive
                        ? 'bg-[#0284C7] text-white ring-4 ring-sky-100 shadow-blue-sm scale-110'
                        : 'bg-white text-slate-500 border border-slate-200 hover:border-[#0284C7] hover:text-[#0284C7]'
                    }`}
                  >
                    0{idx + 1}
                  </div>
                  <span
                    className={`font-mono text-[9px] transition-colors truncate max-w-[56px] text-center ${
                      isActive ? 'text-[#0284C7] font-bold' : 'text-slate-400 font-medium'
                    }`}
                  >
                    {item.category.split(' ')[0]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Single Focused Active Event Card with Gesture Support */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait" custom={swipeDirection}>
            {MEMORY_EVENTS_DATA[activeMobileIndex] && (
              <motion.div
                key={MEMORY_EVENTS_DATA[activeMobileIndex].id}
                custom={swipeDirection}
                initial={{ opacity: 0, x: swipeDirection > 0 ? 50 : -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: swipeDirection > 0 ? -50 : 50 }}
                transition={{ duration: 0.28, ease: 'easeOut' }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(_e, info) => {
                  if (info.offset.x < -40) handleNextMobile();
                  else if (info.offset.x > 40) handlePrevMobile();
                }}
                className="p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 shadow-blue-card space-y-3.5 touch-pan-y"
              >
                <div
                  onClick={() => setSelectedMemoryEvent(MEMORY_EVENTS_DATA[activeMobileIndex])}
                  className="relative aspect-[16/10] w-full rounded-xl sm:rounded-2xl overflow-hidden bg-slate-100 cursor-pointer group"
                >
                  <img
                    src={MEMORY_EVENTS_DATA[activeMobileIndex].image}
                    alt={MEMORY_EVENTS_DATA[activeMobileIndex].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="px-2.5 py-1 rounded-md bg-slate-900/85 backdrop-blur-xs text-white font-mono text-[10px] font-bold uppercase tracking-wider shadow-xs">
                      {MEMORY_EVENTS_DATA[activeMobileIndex].category}
                    </span>
                  </div>
                  <div className="absolute bottom-2.5 right-2.5">
                    <span className="px-2 py-0.5 rounded bg-white/90 backdrop-blur-xs text-[#0284C7] font-mono text-[10px] font-bold shadow-xs">
                      {MEMORY_EVENTS_DATA[activeMobileIndex].year}
                    </span>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-sans font-bold text-slate-900 text-lg sm:text-xl leading-snug">
                      {MEMORY_EVENTS_DATA[activeMobileIndex].title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[11px] text-slate-500 font-semibold uppercase">
                    <span className="flex items-center gap-1.5 text-[#0284C7]">
                      <Calendar className="w-3.5 h-3.5" />
                      {MEMORY_EVENTS_DATA[activeMobileIndex].date}
                    </span>
                    <span className="flex items-center gap-1.5 truncate text-slate-600">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {MEMORY_EVENTS_DATA[activeMobileIndex].location}
                    </span>
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {MEMORY_EVENTS_DATA[activeMobileIndex].description}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedMemoryEvent(MEMORY_EVENTS_DATA[activeMobileIndex])}
                    className="font-mono text-xs font-bold text-[#0284C7] hover:text-[#0369A1] uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer py-1"
                  >
                    <span>VIEW EVENT</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[11px] font-bold text-slate-400 mr-1">
                      0{activeMobileIndex + 1} / 0{MEMORY_EVENTS_DATA.length}
                    </span>
                    <button
                      onClick={handlePrevMobile}
                      className="p-1.5 rounded-full bg-slate-100 hover:bg-sky-50 text-slate-700 hover:text-[#0284C7] border border-slate-200 transition-colors cursor-pointer"
                      aria-label="Previous event"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleNextMobile}
                      className="p-1.5 rounded-full bg-slate-100 hover:bg-sky-50 text-slate-700 hover:text-[#0284C7] border border-slate-200 transition-colors cursor-pointer"
                      aria-label="Next event"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedMemoryEvent && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs"
            onClick={() => setSelectedMemoryEvent(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-2xl space-y-6 text-[#0F172A]"
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="font-mono text-xs font-bold text-[#0284C7] uppercase tracking-wider block">
                  {selectedMemoryEvent.category} // {selectedMemoryEvent.year}
                </span>
                <button
                  onClick={() => setSelectedMemoryEvent(null)}
                  className="p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-sm">
                <img
                  src={selectedMemoryEvent.image}
                  alt={selectedMemoryEvent.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-3">
                <h3 className="font-sans text-2xl sm:text-3xl font-bold text-slate-900">
                  {selectedMemoryEvent.title}
                </h3>
                <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed">
                  {selectedMemoryEvent.description}
                </p>

                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-6 font-mono text-xs text-slate-500">
                  <span className="flex items-center gap-1.5 text-[#0284C7] font-bold">
                    <Calendar className="w-4 h-4" />
                    {selectedMemoryEvent.date}
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-700 font-semibold">
                    <MapPin className="w-4 h-4 text-[#0284C7]" />
                    {selectedMemoryEvent.location}
                  </span>
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <Link
                  href="/events"
                  className="px-5 py-2.5 rounded-xl bg-[#0284C7] hover:bg-[#0369A1] text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow-sm"
                >
                  <span>Go to Events Hub</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
