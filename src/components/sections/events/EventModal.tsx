'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import { EventItem } from '@/data/events';

interface EventModalProps {
  event: EventItem | null;
  onClose: () => void;
}

export const EventModal: React.FC<EventModalProps> = ({ event, onClose }) => {
  return (
    <AnimatePresence>
      {event && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-xs">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-white border border-slate-200 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl space-y-6 relative text-[#0F172A]"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2 pr-10">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-[#0284C7] uppercase tracking-wider block">
                  {event.category}
                </span>
                <span className="text-slate-400 font-mono text-xs">•</span>
                <span className="text-xs font-mono text-slate-500 uppercase">
                  {event.code}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-sans font-bold text-[#0F172A] tracking-tight">
                {event.title}
              </h2>
            </div>

            <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-200 flex items-center justify-center">
              {/* Blurred backdrop fill */}
              <img
                src={event.image}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover blur-md opacity-35 scale-110"
              />
              {/* Crisp full poster */}
              <img
                src={event.image}
                alt={event.title}
                className="relative z-10 max-h-full max-w-full object-contain drop-shadow-md"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono">
              <div>
                <span className="text-slate-400 block uppercase">DATE & YEAR</span>
                <span className="font-bold text-slate-700">
                  {event.date}, {event.year}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block uppercase">LOCATION</span>
                <span className="font-bold text-slate-700">{event.location}</span>
              </div>
            </div>

            <p className="text-sm font-sans text-slate-600 leading-relaxed">
              {event.description}
            </p>

            {/* Highlights */}
            {event.highlights && event.highlights.length > 0 && (
              <div className="space-y-2">
                <span className="text-slate-500 text-[11px] font-mono uppercase tracking-wider block font-bold">
                  Key Highlights
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {event.highlights.map((highlightPoint, highlightIdx) => (
                    <div key={highlightIdx} className="p-3 rounded-lg bg-sky-50/70 border border-sky-100 text-slate-800 flex items-center gap-2 text-xs font-sans font-medium">
                      <span className="text-[#0284C7]">✓</span>
                      <span>{highlightPoint}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={onClose}
                className="text-xs font-mono text-slate-500 hover:text-slate-800 cursor-pointer"
              >
                Close Window
              </button>
              {event.registrationUrl && (
                <a
                  href={event.registrationUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-full bg-[#0284C7] text-white font-sans text-xs font-medium hover:bg-[#0369A1] transition-colors flex items-center gap-2 shadow-xs"
                >
                  <span>{event.status === 'UPCOMING' ? 'Register Now' : 'View On Instagram'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
