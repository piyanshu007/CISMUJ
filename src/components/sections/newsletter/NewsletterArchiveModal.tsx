'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Printer } from 'lucide-react';
import { BroadsheetEdition } from '@/data/newsletter';

interface NewsletterArchiveModalProps {
  isOpen: boolean;
  edition: BroadsheetEdition;
  onClose: () => void;
}

export const NewsletterArchiveModal: React.FC<NewsletterArchiveModalProps> = ({
  isOpen,
  edition,
  onClose,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            onClick={(modalClickEvent) => modalClickEvent.stopPropagation()}
            className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-[2px] bg-[#FAF6EE] text-[#111111] p-6 sm:p-10 shadow-2xl space-y-6 font-serif border-2 border-[#D2C7B0]"
          >
            {/* Modal Top Header Bar */}
            <div className="border-t-2 border-b-2 border-black py-3 flex items-center justify-between">
              <div>
                <span className="font-mono text-[10px] font-bold text-[#0284C7] tracking-wider block uppercase">
                  THE COMPLETE UNABRIDGED BROADSHEET • VOLUME {edition.volumeNo}
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-black uppercase tracking-tight">
                  {edition.headline}
                </h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-black/5 hover:bg-black hover:text-white text-black transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* High-Resolution Hero Picture */}
            <div className="space-y-1.5">
              <div className="aspect-[21/9] w-full overflow-hidden border-2 border-black bg-slate-200 shadow-sm">
                <img
                  src={edition.heroImage}
                  alt={edition.headline}
                  className="w-full h-full object-cover filter contrast-[1.05]"
                />
              </div>
              <div className="flex items-center justify-between text-xs font-serif text-slate-600">
                <span className="italic">{edition.imageCaption}</span>
                <span className="font-mono text-[9px] text-slate-500 uppercase font-bold">
                  {edition.photoCredit}
                </span>
              </div>
            </div>

            {/* Complete Article Spread Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-justify font-serif text-xs sm:text-sm leading-relaxed text-[#111111]">
              <div className="space-y-3">
                <p>
                  <span className="float-left text-5xl font-serif font-black leading-[0.75] pr-2 pt-1 text-black select-none">
                    {edition.leadArticleP1.charAt(0)}
                  </span>
                  {edition.leadArticleP1.slice(1)}
                </p>
                <p>{edition.leadArticleP2}</p>
              </div>

              <div className="space-y-3">
                <div className="p-4 bg-white/60 border-l-4 border-black space-y-1">
                  <span className="font-mono text-[9px] font-bold text-[#0284C7] uppercase block">
                    {edition.quoteTitle}
                  </span>
                  <p className="font-serif italic text-sm font-bold text-black">
                    &ldquo;{edition.quoteBody}&rdquo;
                  </p>
                </div>

                <p>{edition.secondStoryBody}</p>

                <div className="p-4 border border-black/20 bg-white/70 space-y-2">
                  <span className="font-mono text-[10px] font-bold text-black uppercase block">
                    ARCHIVAL HIGHLIGHTS:
                  </span>
                  <ul className="space-y-1 list-disc pl-4 text-xs text-slate-700">
                    {edition.highlights.map((milestoneItem, milestoneIndex) => (
                      <li key={milestoneIndex}>{milestoneItem}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Modal Footer Controls */}
            <div className="pt-4 border-t-2 border-black flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
              <span className="text-slate-500 font-semibold">
                PUBLISHED BY IEEE CIS MUJ EDITORIAL BOARD • REPOSITORY #6248
              </span>
              
              <div className="flex items-center gap-3">
                <button
                  onClick={() => window.print()}
                  className="px-4 py-2 rounded-full border border-black/30 hover:border-black text-black font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  <Printer className="w-4 h-4" />
                  <span>PRINT PAGE</span>
                </button>

                <a
                  href="https://www.instagram.com/ieee.cismuj/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-full bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow-sm cursor-pointer"
                >
                  <span>INSTAGRAM DISPATCH</span>
                </a>
              </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
