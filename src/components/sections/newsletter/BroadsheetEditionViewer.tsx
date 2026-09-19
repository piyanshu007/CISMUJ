'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ZoomIn } from 'lucide-react';
import { BroadsheetEdition } from '@/data/newsletter';

interface BroadsheetEditionViewerProps {
  activeEdition: BroadsheetEdition;
  onOpenModal: () => void;
}

export const BroadsheetEditionViewer: React.FC<BroadsheetEditionViewerProps> = ({
  activeEdition,
  onOpenModal,
}) => {
  return (
    <div className="relative w-full max-w-[840px]">
      {/* Layer 4: Deepest Ambient Drop Shadow Foundation */}
      <div className="absolute -inset-2 bg-black/[0.04] rounded-xs filter blur-xl transform translate-y-8 pointer-events-none" />

      {/* Layer 3: Aged Underneath Newsprint Sheet with Rotation */}
      <div className="absolute inset-0 bg-[#E5DDCB] rounded-[2px] shadow-[0_15px_35px_rgba(0,0,0,0.18)] border border-[#BDB19C] transform -rotate-[2deg] translate-y-4 -translate-x-3 pointer-events-none" />

      {/* Layer 2: Second Newsprint Sheet with Opposite Rotation */}
      <div className="absolute inset-0 bg-[#EFE7D7] rounded-[2px] shadow-[0_12px_28px_rgba(0,0,0,0.14)] border border-[#CBC0AB] transform rotate-[1.4deg] translate-y-2 translate-x-2 pointer-events-none" />

      {/* Layer 1.5: Immediate Under-Sheet for Physical Paper Thickness */}
      <div className="absolute inset-0 bg-[#F5EFE3] rounded-[2px] shadow-sm border border-[#DDD3BF] transform -rotate-[0.5deg] translate-y-1 -translate-x-1 pointer-events-none" />

      {/* Layer 1: Top Active Newspaper Broadsheet */}
      <motion.div
        key={activeEdition.id}
        initial={{ opacity: 0, scale: 0.98, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        onClick={onOpenModal}
        className="relative bg-[#FAF6EE] text-[#111111] rounded-[2px] p-3.5 sm:p-10 shadow-[0_30px_80px_-15px_rgba(0,0,0,0.28),0_15px_35px_-5px_rgba(0,0,0,0.14),0_0_0_1px_rgba(0,0,0,0.06)] border-2 border-[#D2C7B0] font-serif cursor-pointer hover:shadow-[0_40px_95px_-12px_rgba(2,132,199,0.3),0_20px_40px_-5px_rgba(0,0,0,0.18)] hover:-translate-y-1 transition-all duration-300 group overflow-hidden"
        style={{
          backgroundImage: `radial-gradient(rgba(0,0,0,0.035) 1px, transparent 1px)`,
          backgroundSize: '10px 10px',
        }}
      >
        {/* Horizontal centerfold crease */}
        <div className="absolute top-[50%] left-0 right-0 h-6 -translate-y-1/2 pointer-events-none z-20 overflow-hidden">
          <div className="w-full h-full bg-gradient-to-b from-transparent via-black/[0.1] to-transparent" />
          <div className="w-full h-[1.5px] bg-black/20 shadow-[0_1px_2px_rgba(255,255,255,0.7)]" />
        </div>

        {/* Left spinal fold shadow */}
        <div className="absolute top-0 bottom-0 left-0 w-5 bg-gradient-to-r from-black/12 via-black/[0.04] to-transparent pointer-events-none z-20" />

        {/* CIS Logo Emblem Stamp */}
        <div className="absolute top-10 sm:top-20 right-3 sm:right-10 pointer-events-none z-20 transform rotate-[-8deg] opacity-75 group-hover:opacity-100 transition-opacity">
          <div className="w-14 h-14 sm:w-24 sm:h-24 flex items-center justify-center p-1 filter drop-shadow-[0_4px_12px_rgba(2,132,199,0.35)]">
            <img
              src="/logo-mark.png"
              alt="IEEE CIS Logo Emblem Seal"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Header: Ear Boxes & Folio Line */}
        <div className="border-b border-black/40 pb-1.5 mb-1.5 flex items-center justify-between font-mono text-[8px] sm:text-[9px] text-[#444444] uppercase tracking-wider">
          <div className="text-left space-y-0.5">
            <span className="font-bold text-black block">MUJ CAMPUS EDITION</span>
            <span className="text-[7px] sm:text-[8px] text-slate-600 block">WEATHER: {activeEdition.weather}</span>
          </div>

          <div className="hidden md:block font-serif italic text-[11px] text-[#333333] text-center font-medium">
            &ldquo;All the Code, Architecture Proofs and Research Dispatches Fit to Print&rdquo;
          </div>

          <div className="text-right space-y-0.5">
            <span className="font-bold text-[#0284C7] block">VOL. {activeEdition.volumeNo} • NO. {activeEdition.issueNo}</span>
            <span className="text-[7px] sm:text-[8px] text-slate-600 block">PRICE: GRATIS</span>
          </div>
        </div>

        {/* Grand Masthead */}
        <div className="border-t-[2px] sm:border-t-[3px] border-b border-black py-1.5 sm:py-2 my-1 text-center">
          <h2 className="font-serif font-black text-2xl sm:text-5xl md:text-6xl tracking-[0.08em] sm:tracking-[0.16em] text-[#0A0A0A] uppercase leading-none select-none">
            THE CIS SPECTATOR
          </h2>
          <div className="font-serif italic text-[10px] sm:text-sm text-[#444444] tracking-wider sm:tracking-widest mt-1 sm:mt-2 flex items-center justify-center gap-2 sm:gap-3">
            <span className="h-px w-4 sm:w-8 bg-black/40 inline-block" />
            <span className="truncate">Journal of IEEE CIS • MUJ Chapter</span>
            <span className="h-px w-4 sm:w-8 bg-black/40 inline-block" />
          </div>
        </div>

        {/* Dateline Bar */}
        <div className="border-t border-b sm:border-b-[2px] border-black my-1 py-0.5 sm:py-1 flex flex-wrap items-center justify-between font-mono text-[8px] sm:text-[10px] font-bold text-[#222222] uppercase tracking-wider px-0.5">
          <span>JAIPUR, RAJASTHAN</span>
          <span>{activeEdition.dayDate}</span>
          <span className="text-[#0284C7] font-black hidden sm:inline">24 PAGES IN FOUR SECTIONS</span>
          <span>ISSN 2456-981X</span>
        </div>

        {/* Banner Headline */}
        <div className="pt-2 sm:pt-3 pb-1.5 sm:pb-2 text-center space-y-1 sm:space-y-2 border-b border-black/30">
          <h3 className="font-serif font-black text-lg sm:text-3xl md:text-4xl text-[#0A0A0A] tracking-tight uppercase leading-[1.1] select-none">
            {activeEdition.headline}
          </h3>
          <p className="font-serif italic text-[11px] sm:text-sm text-slate-700 max-w-2xl mx-auto leading-snug">
            {activeEdition.deck}
          </p>
        </div>

        {/* Mobile View */}
        <div className="pt-3 block md:hidden space-y-3 text-[#111111]">
          <div className="space-y-1">
            <div className="relative aspect-[16/10] w-full bg-slate-200 border border-black shadow-2xs overflow-hidden rounded-[1px]">
              <img
                src={activeEdition.heroImage}
                alt={activeEdition.headline}
                className="w-full h-full object-cover filter contrast-[1.05]"
              />
            </div>
            <div className="flex items-center justify-between text-[9px] font-serif text-slate-600">
              <span className="italic truncate max-w-[200px]">{activeEdition.imageCaption}</span>
              <span className="font-mono text-[8px] text-slate-500 shrink-0 uppercase font-bold">
                {activeEdition.photoCredit}
              </span>
            </div>
          </div>

          <div className="border-t border-b border-black/20 py-1 flex items-center justify-between font-mono text-[9px] text-[#333333]">
            <span className="font-bold text-black uppercase">{activeEdition.byline}</span>
            <span className="text-[#0284C7] uppercase font-bold text-[8px]">{activeEdition.date}</span>
          </div>

          <div className="font-serif text-xs text-[#111111] leading-relaxed text-justify">
            <p>
              <span className="float-left text-4xl font-serif font-black leading-[0.8] pr-1.5 pt-0.5 text-black select-none">
                {activeEdition.leadArticleP1.charAt(0)}
              </span>
              {activeEdition.leadArticleP1.slice(1, 240)}...
            </p>
          </div>

          <div className="p-2.5 bg-white/80 border border-black/30 rounded-xs flex items-center justify-between group-hover:border-[#0284C7] transition-colors">
            <div className="flex items-center gap-1.5 text-[#0284C7] font-mono text-[10px] font-bold uppercase">
              <ZoomIn className="w-3.5 h-3.5" />
              <span>TAP TO READ FULL ISSUE</span>
            </div>
            <span className="font-mono text-[9px] text-slate-500 font-bold">24 PAGES →</span>
          </div>
        </div>

        {/* Desktop View */}
        <div className="pt-4 hidden md:grid md:grid-cols-12 gap-5 text-[#111111]">
          {/* Left Column */}
          <div className="md:col-span-3 border-r border-black/25 pr-3 space-y-4">
            <div className="border-2 border-black p-3 bg-white/50 space-y-2">
              <span className="font-mono text-[9px] font-bold text-black uppercase tracking-widest block border-b border-black pb-1">
                {activeEdition.sidebarTitle}
              </span>
              <div className="space-y-2.5 font-serif text-[11px] leading-tight">
                {activeEdition.sidebarArticles.map((article, articleIdx) => (
                  <div key={articleIdx} className="space-y-0.5 border-b border-black/10 last:border-0 pb-1.5">
                    <div className="flex items-baseline justify-between font-bold text-black text-[10px]">
                      <span>{article.title}</span>
                      <span className="font-mono text-[8px] text-[#0284C7] shrink-0 ml-1">{article.page}</span>
                    </div>
                    <p className="text-slate-600 text-[10px] leading-snug">{article.blurb}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-1.5 pt-1">
              <span className="font-mono text-[8px] font-bold text-[#0284C7] uppercase tracking-wider block">
                CAMPUS RESEARCH // BULLETIN
              </span>
              <h4 className="font-serif font-black text-xs uppercase leading-tight text-black">
                {activeEdition.secondStoryTitle}
              </h4>
              <p className="font-serif text-[10px] text-slate-700 leading-relaxed text-justify">
                {activeEdition.secondStoryBody}
              </p>
            </div>
          </div>

          {/* Middle Column */}
          <div className="md:col-span-6 border-r border-black/25 pr-4 space-y-3">
            <div className="space-y-1.5">
              <div className="relative aspect-[16/10] w-full bg-slate-200 border-2 border-black shadow-xs overflow-hidden">
                <img
                  src={activeEdition.heroImage}
                  alt={activeEdition.headline}
                  className="w-full h-full object-cover filter contrast-[1.08] grayscale-[20%] group-hover:grayscale-0 group-hover:scale-102 transition-all duration-500"
                />
              </div>
              <div className="flex items-start justify-between gap-2 text-[10px] font-serif text-slate-700 leading-tight">
                <span className="italic">{activeEdition.imageCaption}</span>
                <span className="font-mono text-[8px] text-slate-500 shrink-0 uppercase font-bold">
                  {activeEdition.photoCredit}
                </span>
              </div>
            </div>

            <div className="border-t border-b border-black/20 py-1 flex items-center justify-between font-mono text-[9px] text-[#333333]">
              <span className="font-bold text-black uppercase">{activeEdition.byline}</span>
              <span className="text-slate-500 uppercase">{activeEdition.bylineRole}</span>
            </div>

            <div className="font-serif text-xs text-[#111111] leading-relaxed text-justify space-y-2.5">
              <p>
                <span className="float-left text-5xl font-serif font-black leading-[0.75] pr-2 pt-1 text-black select-none">
                  {activeEdition.leadArticleP1.charAt(0)}
                </span>
                {activeEdition.leadArticleP1.slice(1)}
              </p>
              <p>{activeEdition.leadArticleP2}</p>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:col-span-3 flex flex-col justify-between space-y-4">
            <div className="border-l-2 border-black pl-3 py-1 space-y-1">
              <span className="font-mono text-[8px] font-bold text-[#0284C7] uppercase tracking-wider block">
                {activeEdition.quoteTitle}
              </span>
              <p className="font-serif italic text-xs font-bold text-black leading-snug">
                &ldquo;{activeEdition.quoteBody}&rdquo;
              </p>
            </div>

            <div className="space-y-2 border-t border-black/20 pt-2 font-serif text-[10px] text-slate-800">
              <span className="font-mono text-[8px] font-bold uppercase tracking-wider text-black block">
                KEY MILESTONES:
              </span>
              <ul className="space-y-1.5 list-disc pl-3 leading-snug">
                {activeEdition.highlights.map((highlightItem, itemIdx) => (
                  <li key={itemIdx}>{highlightItem}</li>
                ))}
              </ul>
            </div>

            <div className="p-3 bg-white/70 border border-black/30 rounded-xs space-y-2 text-center group-hover:border-[#0284C7] transition-colors">
              <div className="flex items-center justify-center gap-1.5 text-[#0284C7] font-mono text-[10px] font-bold uppercase">
                <ZoomIn className="w-3.5 h-3.5" />
                <span>CLICK TO UNFOLD</span>
              </div>
              <p className="font-serif italic text-[10px] text-slate-500 leading-tight">
                Read full multi-page spread and high-resolution figures.
              </p>
            </div>

            <div className="pt-2 border-t border-black/30 flex items-center justify-between">
              <div className="flex items-center gap-[2px] h-6">
                {[3, 1, 2, 4, 1, 3, 2, 1, 4, 2, 1, 3, 1, 2, 4].map((barWidth, barIdx) => (
                  <div
                    key={barIdx}
                    className="h-full bg-black"
                    style={{ width: `${barWidth}px` }}
                  />
                ))}
              </div>
              <span className="font-mono text-[8px] text-slate-500">9 772456 981008</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-2 border-t border-black/40 flex flex-wrap items-center justify-between font-mono text-[8px] text-[#555555] uppercase tracking-wider">
          <span>REGISTERED ARCHIVE #6248 • PRINT RUN: 1,500 COPIES</span>
          <span>PAGE A1 // FRONT COVER</span>
          <span>PRESS: JAIPUR TELEGRAPH CO. • ALL RIGHTS RESERVED</span>
        </div>
      </motion.div>
    </div>
  );
};
