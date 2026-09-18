'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Calendar, MapPin, Clock, X, ExternalLink } from 'lucide-react';

interface EventItem {
  id: string;
  category: string;
  title: string;
  description: string;
  location: string;
  time: string;
  date: string;
  image: string;
  fullDetails?: string;
  registrationUrl?: string;
}

export const EventsFanDeck: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  // Real events with our authentic club pictures
  const eventsList: EventItem[] = [
    {
      id: 'event-1',
      category: 'WORKSHOP',
      title: 'Introduction to Machine Learning',
      description: 'Get hands-on with the fundamentals of machine learning and build your first neural classification model.',
      location: 'Seminar Hall 2',
      time: '10:00 AM',
      date: 'OCTOBER 15, 2026',
      image: '/events/webforge.jpg',
      fullDetails: 'Comprehensive hands-on workshop guiding undergraduates through Python, PyTorch tensors, gradient descent, and training your first neural vision model on real datasets.',
      registrationUrl: 'https://unstop.com',
    },
    {
      id: 'event-2',
      category: 'COMPETITION',
      title: 'Project Showcase & Hack',
      description: 'Explore innovative projects, meet fellow student builders, and see applied AI concepts come to life in competitive arena.',
      location: 'Main Auditorium',
      time: '2:00 PM',
      date: 'NOVEMBER 2-3, 2026',
      image: '/events/robotics.jpg',
      fullDetails: 'Annual 24-hour hackathon and prototype exhibition for embedded robotics, intelligent edge systems, and computational algorithms evaluated by faculty and industry jury.',
      registrationUrl: 'https://unstop.com',
    },
    {
      id: 'event-3',
      category: 'TECH TALK',
      title: 'Tech Talk: The Future of AI',
      description: 'Distinguished speakers share key insights on how computational intelligence and transformers are shaping the next generation.',
      location: 'Seminar Hall 1',
      time: '11:00 AM',
      date: 'NOVEMBER 18, 2026',
      image: '/events/oneiros.jpg',
      fullDetails: 'Special keynote colloquium hosted with IEEE CIS distinguished researchers discussing large multimodal architectures, neuromorphic computing, and ethical AI safeguards.',
      registrationUrl: 'https://unstop.com',
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-white text-[#0F172A] overflow-hidden select-none flex flex-col justify-between">
      
      {/* Soft ethereal ambient background glow */}
      <div
        className="absolute top-0 right-0 w-[950px] h-[750px] rounded-full pointer-events-none opacity-40"
        style={{
          background:
            'radial-gradient(circle at 70% 30%, rgba(224, 242, 254, 0.7) 0%, rgba(240, 249, 255, 0.25) 50%, transparent 75%)',
        }}
      />

      {/* ============================================================ */}
      {/* PART 1: HERO SECTION (1:1 with User's Reference)             */}
      {/* ============================================================ */}
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-28 sm:pt-32 pb-10 sm:pb-14 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center min-h-[460px] lg:min-h-[500px]">
          
          {/* Left Column: Eyebrow, Heading, Subtitle, CTA */}
          <div className="lg:col-span-5 space-y-6 z-10">
            {/* Eyebrow: —— OUR EVENTS —— */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2"
            >
              <div className="w-8 h-px bg-[#0284C7]" />
              <span className="font-mono text-[11px] font-bold text-[#0284C7] tracking-widest uppercase">
                OUR EVENTS
              </span>
              <div className="w-8 h-px bg-[#0284C7]" />
            </motion.div>

            {/* Editorial Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] font-sans font-light text-[#1E293B] tracking-tight leading-[1.15]">
                Learn. Build.
                <br />
                Grow <span className="text-[#0284C7] font-normal">Together.</span>
              </h1>
            </motion.div>

            {/* Subtitle Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-slate-500 text-sm sm:text-[15px] max-w-md leading-relaxed"
            >
              From workshops to competitions, our events bring together curious minds and real-world opportunities.
            </motion.p>

            {/* Circular CTA Button with Trailing Line: ( → ) ———— */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-2 flex items-center gap-4"
            >
              <a
                href="#events-grid"
                className="w-11 h-11 rounded-full border border-[#0284C7] text-[#0284C7] hover:bg-[#0284C7] hover:text-white flex items-center justify-center transition-all duration-300 group cursor-pointer shadow-xs hover:shadow-md"
                aria-label="Explore Events"
              >
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <div className="w-16 h-px bg-[#0284C7]/40" />
            </motion.div>
          </div>

          {/* Right Column: 3D Floating Planetary Sphere & Animated Orbiting Spheres (Enlarged & Centered) */}
          <div className="lg:col-span-7 relative flex items-center justify-center min-h-[460px] sm:min-h-[520px] lg:min-h-[600px] overflow-visible">
            <motion.div
              animate={{
                y: [-7, 7, -7],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative w-full max-w-[850px] lg:scale-120 aspect-[16/9] flex items-center justify-center select-none mx-auto"
            >
              {/* Planetary Artwork (Transparent PNG with background removed and static balls cleared) */}
              <img
                src="/events-hero-sphere.png"
                alt="3D Floating Planetary Sphere with Orbital Rings"
                className="w-full h-full object-contain pointer-events-none select-none relative z-10 filter drop-shadow-[0_16px_40px_rgba(2,132,199,0.18)]"
              />

              {/* Animated Orbiting Spheres SVG Overlay */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-20 overflow-visible"
                viewBox="0 0 1376 768"
                fill="none"
              >
                <defs>
                  {/* Sphere 3D Radial Gradient */}
                  <radialGradient id="orbitBallGrad" cx="35%" cy="35%" r="65%">
                    <stop offset="0%" stopColor="#FFFFFF" />
                    <stop offset="25%" stopColor="#7DD3FC" />
                    <stop offset="70%" stopColor="#0284C7" />
                    <stop offset="100%" stopColor="#0369A1" />
                  </radialGradient>
                  
                  <radialGradient id="orbitBallCyan" cx="35%" cy="35%" r="65%">
                    <stop offset="0%" stopColor="#E0F2FE" />
                    <stop offset="35%" stopColor="#38BDF8" />
                    <stop offset="80%" stopColor="#0284C7" />
                    <stop offset="100%" stopColor="#0C4A6E" />
                  </radialGradient>

                  {/* Sphere 3D Glow & Shadow Filter */}
                  <filter id="orbitGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="0" dy="3" stdDeviation="5" floodColor="#0284C7" floodOpacity="0.6" />
                  </filter>

                  {/* Concentric Elliptical Paths matching -26deg planetary tilt on 1376x768 */}
                  <path
                    id="innerOrbitPath"
                    d="M 366 400 a 340 112 0 1 0 680 0 a 340 112 0 1 0 -680 0"
                  />
                  <path
                    id="midInnerOrbitPath"
                    d="M 266 400 a 440 145 0 1 0 880 0 a 440 145 0 1 0 -880 0"
                  />
                  <path
                    id="midOuterOrbitPath"
                    d="M 146 400 a 560 185 0 1 0 1120 0 a 560 185 0 1 0 -1120 0"
                  />
                  <path
                    id="outerOrbitPath"
                    d="M 36 400 a 670 220 0 1 0 1340 0 a 670 220 0 1 0 -1340 0"
                  />
                </defs>

                {/* Rotated Group aligning orbits to the ring tilt */}
                <g transform="rotate(-26 706 400)">
                  {/* --- OUTER RING SPHERES --- */}
                  {/* Outer Ball 1: Major Sphere with halo */}
                  <g filter="url(#orbitGlow)">
                    <animateMotion dur="18s" repeatCount="indefinite">
                      <mpath href="#outerOrbitPath" />
                    </animateMotion>
                    <circle r="18" fill="url(#orbitBallGrad)" />
                    <circle r="25" stroke="#38BDF8" strokeWidth="1.5" strokeOpacity="0.45" />
                  </g>

                  {/* Outer Ball 2: Staggered Medium Cyan Sphere */}
                  <g filter="url(#orbitGlow)">
                    <animateMotion dur="18s" begin="-9s" repeatCount="indefinite">
                      <mpath href="#outerOrbitPath" />
                    </animateMotion>
                    <circle r="13" fill="url(#orbitBallCyan)" />
                  </g>

                  {/* --- MID-OUTER RING SPHERES --- */}
                  {/* Mid-Outer Ball 1 */}
                  <g filter="url(#orbitGlow)">
                    <animateMotion dur="14s" repeatCount="indefinite">
                      <mpath href="#midOuterOrbitPath" />
                    </animateMotion>
                    <circle r="15" fill="url(#orbitBallGrad)" />
                    <circle r="21" stroke="#38BDF8" strokeWidth="1.2" strokeOpacity="0.35" />
                  </g>

                  {/* Mid-Outer Ball 2: Staggered */}
                  <g filter="url(#orbitGlow)">
                    <animateMotion dur="14s" begin="-7s" repeatCount="indefinite">
                      <mpath href="#midOuterOrbitPath" />
                    </animateMotion>
                    <circle r="11" fill="url(#orbitBallCyan)" />
                  </g>

                  {/* --- MID-INNER RING SPHERES --- */}
                  {/* Mid-Inner Ball 1 */}
                  <g filter="url(#orbitGlow)">
                    <animateMotion dur="10.5s" repeatCount="indefinite">
                      <mpath href="#midInnerOrbitPath" />
                    </animateMotion>
                    <circle r="14" fill="url(#orbitBallGrad)" />
                  </g>

                  {/* Mid-Inner Ball 2: Staggered */}
                  <g filter="url(#orbitGlow)">
                    <animateMotion dur="10.5s" begin="-5.25s" repeatCount="indefinite">
                      <mpath href="#midInnerOrbitPath" />
                    </animateMotion>
                    <circle r="10" fill="url(#orbitBallCyan)" />
                  </g>

                  {/* --- INNER RING SPHERES --- */}
                  {/* Inner Ball 1 */}
                  <g filter="url(#orbitGlow)">
                    <animateMotion dur="7.5s" repeatCount="indefinite">
                      <mpath href="#innerOrbitPath" />
                    </animateMotion>
                    <circle r="12" fill="url(#orbitBallGrad)" />
                  </g>

                  {/* Inner Ball 2 */}
                  <g filter="url(#orbitGlow)">
                    <animateMotion dur="7.5s" begin="-3.75s" repeatCount="indefinite">
                      <mpath href="#innerOrbitPath" />
                    </animateMotion>
                    <circle r="9" fill="url(#orbitBallCyan)" />
                  </g>
                </g>
              </svg>

              {/* Top-Right Decorative Diamond Sparkle */}
              <div className="absolute top-[8%] right-[16%] text-[#0284C7] text-xl select-none pointer-events-none animate-pulse z-20">
                ✦
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* PART 2: 3 EVENTS CARDS + STAY UPDATED BANNER                 */}
      {/* ============================================================ */}
      <div id="events-grid" className="w-full border-t border-slate-100/90 bg-white py-12 sm:py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-8">
          
          {/* 3 Event Cards Row (1:1 with Reference) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {eventsList.map((evt, idx) => (
              <motion.div
                key={evt.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                onClick={() => setSelectedEvent(evt)}
                className="p-5 rounded-2xl bg-white border border-slate-200/80 hover:border-[#0284C7] shadow-xs hover:shadow-[0_12px_28px_rgba(2,132,199,0.12)] transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  {/* Real Event Photo Container with Rounded Corners */}
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-5 bg-slate-100 border border-slate-100">
                    <img
                      src={evt.image}
                      alt={evt.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-[1.02]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-sans font-medium text-[#1E293B] group-hover:text-[#0284C7] transition-colors leading-snug mb-2">
                    {evt.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-[13px] font-sans text-slate-500 leading-relaxed line-clamp-2 mb-6">
                    {evt.description}
                  </p>
                </div>

                {/* Bottom Meta & Arrow Action Button */}
                <div className="pt-4 border-t border-slate-100/90 flex items-center justify-between">
                  <div className="flex items-center gap-4 text-slate-500 text-xs font-sans">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#0284C7]" />
                      <span className="text-[11px]">{evt.date.split(',')[0]}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#0284C7]" />
                      <span className="text-[11px]">{evt.location}</span>
                    </div>
                  </div>

                  {/* Circular Outline Button ( → ) */}
                  <div className="w-8 h-8 rounded-full border border-slate-200 group-hover:border-[#0284C7] text-slate-400 group-hover:text-[#0284C7] flex items-center justify-center transition-colors shrink-0">
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stay Updated Bottom Banner (1:1 with Reference) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-slate-50 via-sky-50/30 to-white border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            {/* Left Thumbnail + Text */}
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <div className="w-24 h-16 rounded-xl overflow-hidden bg-slate-200 shrink-0 border border-slate-200">
                <img
                  src="/gallery/orientation.jpg"
                  alt="Students at IEEE CIS Event"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#0284C7]" />
                  <h4 className="text-sm font-sans font-bold text-[#1E293B]">
                    Stay Updated
                  </h4>
                </div>
                <p className="text-xs font-sans text-slate-500">
                  Don&apos;t miss out on our upcoming events, workshops and more.
                </p>
              </div>
            </div>

            {/* Right Action Button: ( → ) */}
            <Link
              href="/newsletter"
              className="w-10 h-10 rounded-full border border-[#0284C7] text-[#0284C7] hover:bg-[#0284C7] hover:text-white flex items-center justify-center transition-all shrink-0 cursor-pointer shadow-xs"
              aria-label="Subscribe to Newsletter"
            >
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Bottom Telemetry Footer Strip (from Reference: EVENTS —— LEARN / CONNECT / GROW • —— • ) */}
          <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 font-mono text-xs">
            <div className="flex items-center gap-4">
              <span className="text-[#0284C7] font-bold">EVENTS</span>
              <div className="w-6 h-px bg-slate-200" />
              <span className="text-[11px] tracking-wider uppercase text-slate-500">
                LEARN &nbsp;/&nbsp; CONNECT &nbsp;/&nbsp; GROW
              </span>
            </div>

            {/* Subtle Blue Constellation Line */}
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]" />
              <div className="w-10 h-px bg-slate-300" />
              <span className="w-2 h-2 rounded-full bg-sky-300" />
            </div>
          </div>

        </div>
      </div>

      {/* ============================================================ */}
      {/* EVENT DETAILS MODAL                                          */}
      {/* ============================================================ */}
      <AnimatePresence>
        {selectedEvent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white border border-slate-200 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl space-y-6 relative text-[#0F172A]"
            >
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2 pr-10">
                <span className="text-xs font-mono font-bold text-[#0284C7] uppercase tracking-wider block">
                  {selectedEvent.category}
                </span>
                <h2 className="text-2xl sm:text-3xl font-sans font-bold text-[#0F172A] tracking-tight">
                  {selectedEvent.title}
                </h2>
              </div>

              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono">
                <div>
                  <span className="text-slate-400 block uppercase">DATE & TIME</span>
                  <span className="font-bold text-slate-700">
                    {selectedEvent.date} @ {selectedEvent.time}
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 block uppercase">LOCATION</span>
                  <span className="font-bold text-slate-700">{selectedEvent.location}</span>
                </div>
              </div>

              <p className="text-sm font-sans text-slate-600 leading-relaxed">
                {selectedEvent.fullDetails || selectedEvent.description}
              </p>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="text-xs font-mono text-slate-500 hover:text-slate-800"
                >
                  Close Window
                </button>
                {selectedEvent.registrationUrl && (
                  <a
                    href={selectedEvent.registrationUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-full bg-[#0284C7] text-white font-sans text-xs font-medium hover:bg-[#0369A1] transition-colors flex items-center gap-2 shadow-xs"
                  >
                    <span>Register Now</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
