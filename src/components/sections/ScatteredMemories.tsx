'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, ArrowRight, X, Sparkles } from 'lucide-react';

interface EventItem {
  id: string;
  category: string;
  title: string;
  year: string;
  date: string;
  location: string;
  description: string;
  image: string;
  // Desktop layout positions (percentages in 1440x700 coordinate space)
  photoClass: string;
  textClass: string;
}

const EVENTS: EventItem[] = [
  {
    id: 'hackerz-street-4',
    category: 'TECHNICAL EVENT',
    title: 'Hackerz Street 4.0',
    year: '2026',
    date: 'MARCH 2026',
    location: 'TMA PAI AUDITORIUM',
    description: 'A high-energy hackathon where ideas meet execution. Build. Compete. Create.',
    image: '/events/webforge.jpg',
    photoClass: 'lg:left-[31%] lg:top-[6%] lg:w-[19%]',
    textClass: 'lg:left-[51.5%] lg:top-[8%] lg:max-w-[19%]',
  },
  {
    id: 'ragh-perm-sprint',
    category: 'WORKSHOP',
    title: 'Ragh PerM & Sprint',
    year: '2026',
    date: 'FEBRUARY 2026',
    location: 'CENTRAL LABS',
    description: 'A hands-on workshop and sprint to tackle real-world problems using computational intelligence.',
    image: '/gallery/workshop.jpg',
    photoClass: 'lg:left-[7%] lg:top-[37%] lg:w-[15.5%]',
    textClass: 'lg:left-[23.5%] lg:top-[40%] lg:max-w-[17%]',
  },
  {
    id: 'ieee-cis-2025',
    category: 'COMMUNITY EVENT',
    title: 'IEEE CIS',
    year: '2025',
    date: 'NOVEMBER 2025',
    location: 'MAIN CAMPUS AUDITORIUM',
    description: 'Celebrating knowledge, collaboration and the next generation of innovators.',
    image: '/gallery/team_awards.jpg',
    photoClass: 'lg:left-[57%] lg:top-[38%] lg:w-[17.5%]',
    textClass: 'lg:left-[75.5%] lg:top-[40%] lg:max-w-[18%]',
  },
  {
    id: 'social-outreach-2025',
    category: 'ORIENTATION',
    title: 'Social Outreach',
    year: '2025',
    date: 'OCTOBER 2025',
    location: 'AUDITORIUM',
    description: 'Connecting with communities and creating a positive impact through technology and education.',
    image: '/gallery/orientation.jpg',
    photoClass: 'lg:left-[22%] lg:top-[66%] lg:w-[16.5%]',
    textClass: 'lg:left-[39.5%] lg:top-[68%] lg:max-w-[17%]',
  },
  {
    id: 'genesis-5',
    category: 'CONFERENCE',
    title: 'Genesis 5.0',
    year: '2025',
    date: 'APRIL 2025',
    location: 'MAIN AUDITORIUM',
    description: 'Exploring innovations, ideas and the future of intelligent systems.',
    image: '/events/oneiros.jpg',
    photoClass: 'lg:left-[64%] lg:top-[66%] lg:w-[16%]',
    textClass: 'lg:left-[81%] lg:top-[68%] lg:max-w-[18%]',
  },
];

export const ScatteredMemories: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  return (
    <section className="relative w-full bg-white text-[#0F172A] py-8 sm:py-16 lg:py-24 overflow-hidden select-none border-b border-slate-100">
      
      {/* Soft ethereal ambient glow */}
      <div className="absolute top-1/4 right-0 w-[800px] h-[600px] bg-gradient-to-l from-sky-100/40 via-sky-50/20 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* ============================================================ */}
      {/* DESKTOP 2.5D CONSTELLATION CANVAS (>= 1024px)               */}
      {/* ============================================================ */}
      <div className="hidden lg:block relative w-full max-w-[1560px] mx-auto h-[820px]">
        
        {/* Continuous Flowing Winding Spline Path matching reference */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible"
          viewBox="0 0 1440 780"
          fill="none"
          preserveAspectRatio="none"
        >
          {/* Main Primary Cyan Flow Spline */}
          <path
            d="M 0,320 C 120,320 200,430 266,430 C 360,430 460,310 562,310 C 660,310 760,540 871,540 C 970,540 1060,200 1200,200 C 1310,200 1380,380 1440,380"
            stroke="#38BDF8"
            strokeWidth="1.5"
            strokeOpacity="0.85"
          />
          
          {/* Delicate Secondary Echo Trail */}
          <path
            d="M 0,340 C 130,340 210,450 280,450 C 370,450 480,330 580,330 C 680,330 780,560 890,560 C 990,560 1080,220 1220,220 C 1330,220 1400,400 1440,400"
            stroke="#0284C7"
            strokeWidth="0.8"
            strokeOpacity="0.3"
            strokeDasharray="4 4"
          />

          {/* Connected Waypoint Nodes along the Spline */}
          {/* Node near Workshop */}
          <circle cx="266" cy="430" r="3.5" fill="#0284C7" />
          <circle cx="266" cy="430" r="7" stroke="#38BDF8" strokeWidth="1" strokeOpacity="0.5" />
          
          {/* Node near Center */}
          <circle cx="562" cy="310" r="3.5" fill="#0284C7" />
          <circle cx="562" cy="310" r="7" stroke="#38BDF8" strokeWidth="1" strokeOpacity="0.5" />

          {/* Node near Social Outreach */}
          <circle cx="871" cy="540" r="3.5" fill="#0284C7" />
          <circle cx="871" cy="540" r="7" stroke="#38BDF8" strokeWidth="1" strokeOpacity="0.5" />

          {/* Node near 3D Orbital Cluster */}
          <circle cx="1200" cy="200" r="3.5" fill="#0284C7" />
          <circle cx="1200" cy="200" r="7" stroke="#38BDF8" strokeWidth="1" strokeOpacity="0.5" />

          {/* Additional decorative micro constellation dots */}
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

        {/* 2. Top-Right 3D Glossy Orbital Spheres Visual matching reference */}
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
            className="w-full h-auto object-contain select-none filter drop-shadow-[0_10px_24px_rgba(2,132,199,0.12)]"
          />
        </motion.div>


        {/* 4. The 5 Event Cards & Detail Blocks */}
        {EVENTS.map((event) => (
          <React.Fragment key={event.id}>
            {/* Photo Container */}
            <motion.div
              whileHover={{ scale: 1.03, y: -4 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedEvent(event)}
              className={`absolute ${event.photoClass} aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_8px_26px_rgba(2,132,199,0.12)] border border-slate-100 hover:border-sky-300 transition-all cursor-pointer z-10 bg-slate-100 group`}
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>

            {/* Metadata Text Block beside photo */}
            <div className={`absolute ${event.textClass} space-y-2 z-10`}>
              {/* Category as Plain Text (no pill box) */}
              <span className="font-mono text-[10px] font-bold text-[#0284C7] uppercase tracking-wider block">
                {event.category}
              </span>

              {/* Title & Year */}
              <div>
                <h3 className="font-sans font-bold text-slate-900 text-base xl:text-lg leading-tight group-hover:text-[#0284C7] transition-colors">
                  {event.title}
                </h3>
                <span className="font-sans text-xs text-slate-500 font-normal block mt-0.5">
                  {event.year}
                </span>
              </div>

              {/* Date & Location */}
              <div className="space-y-0.5 font-mono text-[10px] text-slate-500 font-semibold uppercase">
                <p className="flex items-center gap-1.5">
                  <Calendar className="w-3 h-3 text-[#0284C7] shrink-0" />
                  <span>{event.date}</span>
                </p>
                <p className="flex items-center gap-1.5 truncate">
                  <MapPin className="w-3 h-3 text-[#0284C7] shrink-0" />
                  <span className="truncate">{event.location}</span>
                </p>
              </div>

              {/* Description */}
              <p className="font-sans text-[11px] text-slate-500 leading-relaxed line-clamp-3">
                {event.description}
              </p>

              {/* Action Link */}
              <button
                onClick={() => setSelectedEvent(event)}
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
      <div className="lg:hidden px-4 sm:px-6 space-y-8 max-w-2xl mx-auto">
        {/* Header Block */}
        <div className="space-y-2 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <div className="w-6 h-px bg-[#0284C7]" />
            <span className="font-mono text-[10px] sm:text-[11px] font-bold text-[#0284C7] tracking-widest uppercase">
              OUR EVENTS
            </span>
            <div className="w-6 h-px bg-[#0284C7]" />
          </div>

          <h2 className="font-sans font-light text-3xl sm:text-5xl tracking-tight text-slate-900 leading-tight">
            Ideas become <br />
            <span className="text-[#0284C7] font-normal">experiences.</span>
          </h2>

          <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed">
            IEEE CIS brings together workshops, competitions, talks, projects and community experiences to build a stronger, smarter tomorrow.
          </p>
        </div>

        {/* Vertical Connected Events */}
        <div className="space-y-6 relative">
          <div className="absolute left-4 sm:left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-sky-400 via-sky-300 to-sky-100 -z-0" />

          {EVENTS.map((event, idx) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.06 }}
              className="relative z-10 pl-10 sm:pl-14 space-y-2.5"
            >
              {/* Waypoint Circle */}
              <div className="absolute left-4 sm:left-6 top-1.5 -translate-x-1/2 w-3.5 h-3.5 rounded-full border-2 border-[#0284C7] bg-white flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#0284C7]" />
              </div>

              {/* Compact Card with photo and details */}
              <div
                onClick={() => setSelectedEvent(event)}
                className="p-3 sm:p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#0284C7] transition-all cursor-pointer flex flex-col sm:flex-row gap-3 sm:gap-4 items-start"
              >
                <div className="relative aspect-[16/10] sm:aspect-square w-full sm:w-36 rounded-xl overflow-hidden bg-slate-100 shrink-0">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2 sm:hidden">
                    <span className="px-2 py-0.5 rounded bg-slate-900/90 text-white font-mono text-[9px] font-bold uppercase tracking-wider">
                      {event.category}
                    </span>
                  </div>
                </div>

                <div className="space-y-1.5 flex-1 min-w-0">
                  <div className="hidden sm:flex items-center justify-between">
                    <span className="font-mono text-[10px] font-bold text-[#0284C7] uppercase tracking-wider">
                      {event.category}
                    </span>
                    <span className="font-sans text-xs text-slate-400 font-normal">
                      {event.year}
                    </span>
                  </div>

                  <h3 className="font-sans font-bold text-slate-900 text-base sm:text-lg leading-snug truncate">
                    {event.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5 font-mono text-[10px] text-slate-500 font-semibold uppercase">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#0284C7]" />
                      {event.date}
                    </span>
                    <span className="flex items-center gap-1 truncate">
                      <MapPin className="w-3 h-3 text-[#0284C7]" />
                      {event.location}
                    </span>
                  </div>

                  <p className="font-sans text-xs text-slate-600 leading-relaxed line-clamp-2">
                    {event.description}
                  </p>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedEvent(event);
                    }}
                    className="font-mono text-[11px] font-bold text-[#0284C7] uppercase tracking-wider flex items-center gap-1 pt-0.5"
                  >
                    <span>VIEW EVENT</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ============================================================ */}
      {/* EVENT DETAIL LIGHTBOX MODAL                                  */}
      {/* ============================================================ */}
      <AnimatePresence>
        {selectedEvent && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs"
            onClick={() => setSelectedEvent(null)}
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
                  {selectedEvent.category} // {selectedEvent.year}
                </span>
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-sm">
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-3">
                <h3 className="font-sans text-2xl sm:text-3xl font-bold text-slate-900">
                  {selectedEvent.title}
                </h3>
                <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed">
                  {selectedEvent.description}
                </p>

                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-6 font-mono text-xs text-slate-500">
                  <span className="flex items-center gap-1.5 text-[#0284C7] font-bold">
                    <Calendar className="w-4 h-4" />
                    {selectedEvent.date}
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-700 font-semibold">
                    <MapPin className="w-4 h-4 text-[#0284C7]" />
                    {selectedEvent.location}
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
