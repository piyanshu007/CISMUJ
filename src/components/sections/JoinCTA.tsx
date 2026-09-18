'use client';

import React from 'react';
import { KineticText } from '../ui/KineticText';
import { Instagram, Globe, Mail } from 'lucide-react';

export const JoinCTA: React.FC = () => {
  return (
    <section id="join" className="py-10 sm:py-20 lg:py-24 bg-white/90 backdrop-blur-xs border-b border-slate-200 relative overflow-hidden select-none z-10">
      {/* Subtle blue accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#0284C7]/8 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-8">

          {/* Heading */}
          <h2 className="text-3xl sm:text-6xl lg:text-7xl font-display font-black text-[#0F172A] tracking-tight uppercase leading-[0.95]">
            <KineticText text="JOIN THE IEEE CIS" delay={40} />
            <br />
            <span className="text-[#0284C7]">
              <KineticText text="COMMUNITY AT MUJ." delay={120} />
            </span>
          </h2>

          {/* Subtext */}
          <p className="text-sm sm:text-lg text-slate-700 font-sans leading-relaxed max-w-2xl mx-auto px-2">
            Whether you are exploring AI, neural architectures, rover robotics, or competitive hackathons—become a part of Manipal University Jaipur&apos;s most active tech chapter.
          </p>

          {/* Pure Icon Action Buttons (No Text) */}
          <div className="pt-4 flex items-center justify-center gap-3 sm:gap-4">
            {/* Action 1: Instagram */}
            <a
              href="https://www.instagram.com/ieee.cismuj/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram @ieee.cismuj"
              className="w-13 h-13 sm:w-16 sm:h-16 rounded-2xl bg-[#0284C7] hover:bg-[#0369A1] text-white flex items-center justify-center shadow-[0_4px_16px_rgba(2,132,199,0.3)] hover:shadow-[0_8px_24px_rgba(2,132,199,0.4)] transition-all duration-300 cursor-pointer hover:-translate-y-1"
            >
              <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </a>

            {/* Action 2: IEEE Global Portal */}
            <a
              href="https://cis.ieee.org/membership"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="IEEE Global Portal"
              className="w-13 h-13 sm:w-16 sm:h-16 rounded-2xl bg-white hover:bg-slate-50 text-[#0F172A] hover:text-[#0284C7] border border-slate-200 hover:border-[#0284C7] flex items-center justify-center shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer hover:-translate-y-1"
            >
              <Globe className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>

            {/* Action 3: Email Directors */}
            <a
              href="mailto:cis.muj@ieee.org"
              aria-label="Email Directors"
              className="w-13 h-13 sm:w-16 sm:h-16 rounded-2xl bg-white hover:bg-slate-50 text-[#0F172A] hover:text-[#0284C7] border border-slate-200 hover:border-[#0284C7] flex items-center justify-center shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer hover:-translate-y-1"
            >
              <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </div>

          {/* Footer Note */}
          <div className="pt-4 flex items-center justify-center gap-1.5 sm:gap-2 text-slate-500 font-mono text-[9px] sm:text-[11px] font-semibold px-2 text-center">
            <span>OFFICIAL AFFILIATION: IEEE CIS CHAPTER #6248 • MANIPAL UNIVERSITY JAIPUR</span>
          </div>
        </div>
      </div>
    </section>
  );
};

