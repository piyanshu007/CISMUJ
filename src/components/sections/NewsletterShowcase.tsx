'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { BROADSHEET_EDITIONS } from '@/data/newsletter';
import { BroadsheetEditionViewer } from './newsletter/BroadsheetEditionViewer';
import { NewsletterArchiveModal } from './newsletter/NewsletterArchiveModal';

export const NewsletterShowcase: React.FC = () => {
  const [activeEditionIndex, setActiveEditionIndex] = useState<number>(0);
  const [isReadingModalOpen, setIsReadingModalOpen] = useState<boolean>(false);

  const currentActiveEdition = BROADSHEET_EDITIONS[activeEditionIndex];

  const handleNextEdition = () => {
    setActiveEditionIndex((previousIndex) => (previousIndex + 1) % BROADSHEET_EDITIONS.length);
  };

  const handlePreviousEdition = () => {
    setActiveEditionIndex((previousIndex) => 
      previousIndex > 0 ? previousIndex - 1 : BROADSHEET_EDITIONS.length - 1
    );
  };

  return (
    <section className="relative w-full bg-white text-[#1A1A1A] pt-16 sm:pt-28 pb-8 sm:pb-16 px-3 sm:px-6 lg:px-8 overflow-hidden select-none">
      {/* Soft Ethereal Ambient Glow on Pure White Canvas */}
      <div
        className="absolute top-0 right-0 w-[750px] h-[600px] rounded-full pointer-events-none opacity-40"
        style={{
          background:
            'radial-gradient(circle at 70% 30%, rgba(224, 242, 254, 0.7) 0%, rgba(240, 249, 255, 0.25) 50%, transparent 75%)',
        }}
      />

      {/* Editorial Title & Issue Switcher Banner */}
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-1.5 sm:space-y-3 mb-4 sm:mb-10">
        <h1 className="font-serif font-black text-2xl sm:text-5xl lg:text-6xl text-[#111111] tracking-tight uppercase">
          The CIS Broadsheet
        </h1>

        <p className="font-serif italic text-slate-600 text-xs sm:text-base max-w-xl mx-auto">
          &ldquo;All the Code, Architecture Proofs and Research Dispatches Fit to Print.&rdquo;
        </p>
      </div>

      {/* Physical Newspaper Broadsheet Container */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <BroadsheetEditionViewer
          activeEdition={currentActiveEdition}
          onOpenModal={() => setIsReadingModalOpen(true)}
        />

        {/* Physical Carousel Controls */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={handlePreviousEdition}
            className="p-3 rounded-full bg-white hover:bg-[#0284C7] text-[#111111] hover:text-white border border-black/20 transition-all shadow-xs cursor-pointer"
            aria-label="Previous Broadsheet Edition"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <span className="font-mono text-xs font-bold text-slate-600 bg-white/80 px-4 py-2 rounded-full border border-black/10 shadow-2xs">
            EDITION {activeEditionIndex + 1} OF {BROADSHEET_EDITIONS.length}
          </span>

          <button
            onClick={handleNextEdition}
            className="p-3 rounded-full bg-white hover:bg-[#0284C7] text-[#111111] hover:text-white border border-black/20 transition-all shadow-xs cursor-pointer"
            aria-label="Next Broadsheet Edition"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Full Broadsheet Unfold Modal */}
      <NewsletterArchiveModal
        isOpen={isReadingModalOpen}
        edition={currentActiveEdition}
        onClose={() => setIsReadingModalOpen(false)}
      />
    </section>
  );
};
