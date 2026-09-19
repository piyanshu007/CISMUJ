'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { EVENTS, EventItem } from '@/data/events';
import { EventsHeroSphere } from './events/EventsHeroSphere';
import { EventCard } from './events/EventCard';
import { EventModal } from './events/EventModal';

const EVENTS_PER_PAGE = 6;
const EVENT_CATEGORIES = ['ALL', 'UPCOMING', 'HACKATHON', 'WORKSHOP', 'FLAGSHIP', 'COMPETITION'] as const;

export const EventsFanDeck: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [activeModalEvent, setActiveModalEvent] = useState<EventItem | null>(null);
  const [currentPageNumber, setCurrentPageNumber] = useState<number>(1);

  const filteredEventsList = useMemo(() => {
    return EVENTS.filter((eventItem) => {
      if (selectedCategory === 'ALL') return true;
      if (selectedCategory === 'UPCOMING') return eventItem.status === 'UPCOMING';
      return eventItem.category === selectedCategory;
    });
  }, [selectedCategory]);

  const totalPages = Math.ceil(filteredEventsList.length / EVENTS_PER_PAGE);
  const startIndex = (currentPageNumber - 1) * EVENTS_PER_PAGE;
  const paginatedEvents = filteredEventsList.slice(startIndex, startIndex + EVENTS_PER_PAGE);

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
    setCurrentPageNumber(1);
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPageNumber(newPage);
    const targetElement = document.getElementById('events-grid');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full bg-white text-[#0F172A] overflow-hidden select-none">
      {/* Soft ethereal ambient background glow */}
      <div
        className="absolute top-0 right-0 w-[700px] h-[550px] rounded-full pointer-events-none opacity-40"
        style={{
          background:
            'radial-gradient(circle at 70% 30%, rgba(224, 242, 254, 0.7) 0%, rgba(240, 249, 255, 0.25) 50%, transparent 75%)',
        }}
      />

      {/* ============================================================ */}
      {/* PART 1: HERO SECTION                                         */}
      {/* ============================================================ */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-10 lg:px-12 pt-16 sm:pt-32 pb-3 sm:pb-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 items-center">
          
          {/* Left Column: Eyebrow, Heading, Subtitle, CTA */}
          <div className="lg:col-span-6 space-y-3 sm:space-y-5 z-10">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2"
            >
              <div className="w-6 sm:w-8 h-px bg-[#0284C7]" />
              <span className="font-mono text-[10px] sm:text-[11px] font-bold text-[#0284C7] tracking-widest uppercase">
                OUR EVENTS
              </span>
              <div className="w-6 sm:w-8 h-px bg-[#0284C7]" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-sans font-light text-[#1E293B] tracking-tight leading-[1.12]">
                Learn. Build.
                <br />
                Grow <span className="text-[#0284C7] font-normal">Together.</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-slate-500 text-xs sm:text-[15px] max-w-md leading-relaxed"
            >
              From workshops to competitions, our events bring together curious minds and real-world opportunities across AI, Robotics, and Computational Intelligence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-1 flex items-center gap-4"
            >
              <a
                href="#events-grid"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#0284C7] text-[#0284C7] hover:bg-[#0284C7] hover:text-white flex items-center justify-center transition-all duration-300 group cursor-pointer shadow-xs hover:shadow-md"
                aria-label="Explore Events"
              >
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <div className="w-12 sm:w-16 h-px bg-[#0284C7]/40" />
              <span className="font-mono text-xs text-slate-400">Explore {EVENTS.length} Events</span>
            </motion.div>
          </div>

          {/* Right Column: 3D Floating Planetary Sphere & Animated Orbiting Spheres */}
          <EventsHeroSphere />
        </div>
      </div>

      {/* ============================================================ */}
      {/* PART 2: CATEGORY FILTERS & EVENTS GRID                       */}
      {/* ============================================================ */}
      <div id="events-grid" className="w-full border-t border-slate-100/90 bg-white py-6 sm:py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-12 space-y-6 sm:space-y-8">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-3 sm:pb-5">
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              {EVENT_CATEGORIES.map((categoryKey) => (
                <button
                  key={categoryKey}
                  onClick={() => handleCategoryFilter(categoryKey)}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-mono text-[11px] sm:text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                    selectedCategory === categoryKey
                      ? 'bg-[#0284C7] text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200/60'
                  }`}
                >
                  {categoryKey === 'ALL' ? 'ALL EVENTS' : categoryKey}
                </button>
              ))}
            </div>

            <div className="font-mono text-[11px] sm:text-xs text-slate-400">
              Showing <span className="text-[#0284C7] font-bold">{filteredEventsList.length === 0 ? 0 : `${startIndex + 1} - ${Math.min(startIndex + EVENTS_PER_PAGE, filteredEventsList.length)}`}</span> of <span className="text-[#0284C7] font-bold">{filteredEventsList.length}</span> items
            </div>
          </div>

          {/* Event Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 items-stretch">
            {paginatedEvents.map((singleEvent, eventIndex) => (
              <EventCard
                key={singleEvent.id}
                event={singleEvent}
                cardIndex={eventIndex}
                onSelectEvent={setActiveModalEvent}
              />
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 sm:pt-6 border-t border-slate-100">
              <div className="font-mono text-xs text-slate-500">
                Showing page <span className="font-bold text-[#0284C7]">{currentPageNumber}</span> of{' '}
                <span className="font-bold text-[#0F172A]">{totalPages}</span>
              </div>

              <div className="flex items-center gap-2 font-mono text-xs">
                <button
                  onClick={() => handlePageChange(currentPageNumber - 1)}
                  disabled={currentPageNumber === 1}
                  className="px-3.5 py-2 rounded-xl border border-slate-200 bg-white text-slate-700 hover:border-[#0284C7] hover:text-[#0284C7] disabled:opacity-40 disabled:hover:border-slate-200 disabled:hover:text-slate-700 disabled:cursor-not-allowed transition-all shadow-2xs flex items-center gap-1.5 font-bold cursor-pointer active:scale-95"
                  aria-label="Previous Page"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>PREV</span>
                </button>

                <div className="flex items-center gap-1.5">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageIdx) => (
                    <button
                      key={pageIdx}
                      onClick={() => handlePageChange(pageIdx)}
                      className={`w-9 h-9 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer ${
                        currentPageNumber === pageIdx
                          ? 'bg-[#0284C7] text-white shadow-xs shadow-sky-500/20 scale-105'
                          : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-[#0284C7]'
                      }`}
                    >
                      {pageIdx}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => handlePageChange(currentPageNumber + 1)}
                  disabled={currentPageNumber === totalPages}
                  className="px-3.5 py-2 rounded-xl border border-slate-200 bg-white text-slate-700 hover:border-[#0284C7] hover:text-[#0284C7] disabled:opacity-40 disabled:hover:border-slate-200 disabled:hover:text-slate-700 disabled:cursor-not-allowed transition-all shadow-2xs flex items-center gap-1.5 font-bold cursor-pointer active:scale-95"
                  aria-label="Next Page"
                >
                  <span>NEXT</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Stay Updated Bottom Banner */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-slate-50 via-sky-50/30 to-white border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <div className="w-20 sm:w-24 h-14 sm:h-16 rounded-xl overflow-hidden bg-slate-200 shrink-0 border border-slate-200">
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

            <Link
              href="/newsletter"
              className="w-10 h-10 rounded-full border border-[#0284C7] text-[#0284C7] hover:bg-[#0284C7] hover:text-white flex items-center justify-center transition-all shrink-0 cursor-pointer shadow-xs"
              aria-label="Subscribe to Newsletter"
            >
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Bottom Telemetry Footer Strip */}
          <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 font-mono text-xs">
            <div className="flex items-center gap-4">
              <span className="text-[#0284C7] font-bold">EVENTS</span>
              <div className="w-6 h-px bg-slate-200" />
              <span className="text-[11px] tracking-wider uppercase text-slate-500">
                LEARN &nbsp;/&nbsp; CONNECT &nbsp;/&nbsp; GROW
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]" />
              <div className="w-10 h-px bg-slate-300" />
              <span className="w-2 h-2 rounded-full bg-sky-300" />
            </div>
          </div>

        </div>
      </div>

      {/* Event Details Modal */}
      <EventModal
        event={activeModalEvent}
        onClose={() => setActiveModalEvent(null)}
      />

    </section>
  );
};
