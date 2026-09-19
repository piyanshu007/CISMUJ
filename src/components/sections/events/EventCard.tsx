'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, ArrowRight } from 'lucide-react';
import { EventItem } from '@/data/events';

interface EventCardProps {
  event: EventItem;
  cardIndex: number;
  onSelectEvent: (event: EventItem) => void;
}

export const EventCard: React.FC<EventCardProps> = ({
  event,
  cardIndex,
  onSelectEvent,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: cardIndex * 0.08 }}
      whileHover={{ y: -4 }}
      onClick={() => onSelectEvent(event)}
      className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 hover:border-[#0284C7] shadow-xs hover:shadow-[0_12px_28px_rgba(2,132,199,0.12)] transition-all duration-300 flex flex-col justify-between group cursor-pointer"
    >
      <div>
        {/* Event Photo Container */}
        <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-3 sm:mb-5 bg-slate-100 border border-slate-100">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-[1.02]"
          />
          <div className="absolute top-3 left-3 flex items-center gap-2">
            <span className="px-2.5 py-1 rounded bg-slate-900/90 backdrop-blur-xs text-white font-mono text-[10px] font-bold uppercase tracking-wider">
              {event.category}
            </span>
            {event.status === 'UPCOMING' && (
              <span className="px-2.5 py-1 rounded bg-[#0284C7] text-white font-mono text-[10px] font-bold uppercase tracking-wider animate-pulse">
                UPCOMING
              </span>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-sans font-medium text-[#1E293B] group-hover:text-[#0284C7] transition-colors leading-snug mb-2 line-clamp-2">
          {event.title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-[13px] font-sans text-slate-500 leading-relaxed line-clamp-2 mb-4">
          {event.description}
        </p>
      </div>

      {/* Bottom Meta & Arrow Action Button */}
      <div className="pt-4 border-t border-slate-100/90 flex items-center justify-between">
        <div className="flex items-center gap-3 text-slate-500 text-xs font-sans">
          <div className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-[#0284C7]" />
            <span className="text-[11px] font-mono">{event.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-3.5 h-3.5 text-[#0284C7]" />
            <span className="text-[11px] font-mono">{event.attendees}</span>
          </div>
        </div>

        {/* Circular Outline Button */}
        <div className="w-8 h-8 rounded-full border border-slate-200 group-hover:border-[#0284C7] text-slate-400 group-hover:text-[#0284C7] flex items-center justify-center transition-colors shrink-0">
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </div>
      </div>
    </motion.div>
  );
};
