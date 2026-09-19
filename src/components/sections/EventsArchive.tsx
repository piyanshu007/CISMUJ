'use client';

import React, { useState } from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { TiltCard } from '../ui/TiltCard';
import { NodenzaButton } from '../ui/NodenzaButton';
import { EVENTS, EventItem } from '@/data/events';
import { ChevronRight, X, Calendar, Users } from 'lucide-react';
import { Badge } from '../ui/Badge';

export const EventsArchive: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [activeModalEvent, setActiveModalEvent] = useState<EventItem | null>(null);

  const categories = ['ALL', 'HACKATHON', 'WORKSHOP', 'FLAGSHIP', 'COMPETITION'];

  const filteredEvents =
    selectedCategory === 'ALL'
      ? EVENTS
      : EVENTS.filter((e) => e.category === selectedCategory);

  return (
    <section id="events" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="03"
          badgeText="FLAGSHIPS &amp; WORKSHOPS"
          title="IEEE CIS EVENTS &amp; HACKATHONS."
          subtitle="Explore the technical events, 36-hour hackathons, AI bootcamps, and coding challenges hosted by IEEE CIS MUJ."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10 font-mono text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full transition-all cursor-pointer font-bold uppercase tracking-wider ${
                selectedCategory === cat
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Event Cards Grid with 3D TiltCards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((evt) => (
            <TiltCard
              key={evt.id}
              maxTilt={5}
              className="group bg-white rounded-xl border border-slate-200 hover:border-sky-600 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col cursor-pointer"
            >
              <div onClick={() => setActiveModalEvent(evt)} className="flex-1 flex flex-col justify-between">
                {/* Event Image Banner */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-100 border-b border-slate-200">
                  <img
                    src={evt.image}
                    alt={evt.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded bg-slate-900 text-white font-mono text-[10px] font-bold uppercase tracking-wider">
                      {evt.category}
                    </span>
                    {evt.status === 'UPCOMING' && (
                      <span className="px-2.5 py-1 rounded bg-sky-600 text-white font-mono text-[10px] font-bold uppercase tracking-wider animate-pulse">
                        UPCOMING
                      </span>
                    )}
                  </div>
                </div>

                {/* Event Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-slate-500 font-mono text-[11px]">
                      <span className="font-bold text-sky-700 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-sky-600" />
                        {evt.date}, {evt.year}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-slate-400" />
                        {evt.attendees}
                      </span>
                    </div>

                    <h3 className="font-display font-extrabold text-slate-900 text-base sm:text-lg leading-tight uppercase group-hover:text-sky-600 transition-colors">
                      {evt.title}
                    </h3>

                    <p className="font-sans text-slate-600 text-xs leading-relaxed line-clamp-3">
                      {evt.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between font-mono text-[11px]">
                    <span className="text-slate-500 truncate max-w-[180px]">
                      {evt.location}
                    </span>
                    <span className="text-sky-600 font-bold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      DETAILS <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Event Detail Modal */}
        {activeModalEvent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <div className="relative w-full max-w-2xl bg-white rounded-2xl border border-slate-300 p-6 sm:p-8 shadow-2xl space-y-6 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div className="flex items-center gap-2">
                  <Badge variant="blue" dot>
                    {activeModalEvent.category}
                  </Badge>
                  <span className="text-slate-500 font-bold">{activeModalEvent.code}</span>
                </div>
                <button
                  onClick={() => setActiveModalEvent(null)}
                  className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-black transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Modal Image */}
              <div className="aspect-video w-full rounded-xl overflow-hidden border border-slate-200">
                <img
                  src={activeModalEvent.image}
                  alt={activeModalEvent.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-2 font-sans">
                <div className="font-mono text-xs text-sky-600 font-bold">
                  {activeModalEvent.date}, {activeModalEvent.year} • {activeModalEvent.attendees}
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-extrabold text-slate-900 uppercase leading-tight">
                  {activeModalEvent.title}
                </h3>
              </div>

              <p className="font-sans text-slate-700 text-xs sm:text-sm leading-relaxed">
                {activeModalEvent.description}
              </p>

              {/* Highlights */}
              <div className="space-y-2">
                <span className="text-slate-500 text-[11px] uppercase tracking-wider block font-bold">
                  // EVENT HIGHLIGHTS
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeModalEvent.highlights.map((h, i) => (
                    <div key={i} className="p-3 rounded-lg bg-sky-50 border border-sky-200 text-slate-800 flex items-center gap-2 font-bold text-xs">
                      <span className="text-sky-600">✓</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <span className="text-slate-600 font-semibold">{activeModalEvent.location}</span>
                <NodenzaButton
                  href={activeModalEvent.registrationUrl}
                  variant="primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {activeModalEvent.status === 'UPCOMING' ? 'REGISTER NOW' : 'VIEW ON INSTAGRAM'}
                </NodenzaButton>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
