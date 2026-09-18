'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight } from 'lucide-react';

interface SidebarMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SidebarMenu: React.FC<SidebarMenuProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();

  const menuItems = [
    { name: 'HOME', href: '/', subtitle: '00 // LANDING EMBLEM' },
    { name: 'ABOUT', href: '/about', subtitle: '01 // CHAPTER IDENTITY' },
    { name: 'EVENTS', href: '/events', subtitle: '02 // HACKATHONS & LABS' },
    { name: 'GALLERY', href: '/gallery', subtitle: '03 // 3D PHOTO ARCHIVE' },
    { name: 'PROJECTS', href: '/projects', subtitle: '04 // MEMBER INNOVATION' },
    { name: 'TEAM', href: '/team', subtitle: '05 // EXECUTIVE DIRECTORS' },
    { name: 'NEWSLETTER', href: '/newsletter', subtitle: '06 // BROADSHEET PUBLICATION' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] bg-white/98 backdrop-blur-2xl h-[100dvh] max-h-[100dvh] overflow-hidden flex flex-col justify-between select-none"
        >
          {/* Subtle background giant watermark typography */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-[0.03]">
            <span className="font-display font-black text-[24vw] tracking-tighter text-[#0F172A] uppercase leading-none select-none">
              IEEE CIS
            </span>
          </div>

          {/* Top Bar: Compact Header (No Scroll) */}
          <div className="w-full px-4 sm:px-8 py-3 sm:py-4 flex items-center justify-between relative z-20 border-b border-slate-100/80 shrink-0">
            {/* Left: MUJ Chapter Identity */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 p-1 flex items-center justify-center shadow-xs">
                <img
                  src="/logo-mark.png"
                  alt="IEEE CIS Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-xs sm:text-sm tracking-wider uppercase text-[#0F172A]">
                  MANIPAL UNIVERSITY JAIPUR
                </span>
                <span className="font-mono text-[9px] sm:text-[10px] text-[#0284C7] font-bold tracking-widest uppercase">
                  IEEE CIS STUDENT CHAPTER #6248
                </span>
              </div>
            </div>

            {/* Right: Close button */}
            <button
              onClick={onClose}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-100 hover:bg-[#0284C7] text-[#0F172A] hover:text-white border border-slate-200 hover:border-[#0284C7] flex items-center justify-center transition-all duration-200 cursor-pointer shadow-xs group"
              aria-label="Close Menu"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-90 transition-transform duration-300" />
            </button>
          </div>

          {/* Center Main Navigation: Dynamically sized to never overflow */}
          <div className="flex-1 min-h-0 w-full max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-center relative z-20 overflow-hidden">
            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
              {/* Left Column: Responsive Links with Fluid Clamp Typography */}
              <div className="lg:col-span-7 flex flex-col justify-center gap-1 sm:gap-1.5 md:gap-2">
                {menuItems.map((item, idx) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -25 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.03, duration: 0.25 }}
                    >
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="group flex items-center gap-3 sm:gap-4 py-0.5 sm:py-1 transition-all cursor-pointer"
                      >
                        <span className="font-mono text-[9px] sm:text-[11px] text-slate-400 group-hover:text-[#0284C7] transition-colors font-bold w-5">
                          0{idx + 1}
                        </span>

                        <span
                          className={`font-serif text-[clamp(1.35rem,4vh,3rem)] font-black tracking-tight uppercase leading-none transition-all duration-200 ${
                            isActive
                              ? 'text-[#0284C7] translate-x-1.5'
                              : 'text-[#0F172A] group-hover:text-[#0284C7] group-hover:translate-x-1.5'
                          }`}
                        >
                          {item.name}
                        </span>

                        {isActive && (
                          <span className="w-2 h-2 rounded-full bg-[#0284C7] animate-pulse ml-1" />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Right Column: Compact Spotlight Feature Box (Desktop/Tablet) */}
              <div className="hidden lg:flex lg:col-span-5 flex-col gap-3">
                {/* Highlight Card 1: Newsletter */}
                <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/80 border border-slate-200 shadow-xs space-y-2 hover:border-[#0284C7] transition-all">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="px-2 py-0.5 rounded-full bg-sky-50 text-[#0284C7] font-bold border border-[#0284C7]/30 text-[9px]">
                      LATEST PUBLICATION
                    </span>
                    <span className="text-slate-400 font-semibold text-[10px]">ISSUE 08</span>
                  </div>

                  <div className="space-y-0.5">
                    <h4 className="font-display font-extrabold text-sm sm:text-base text-[#0F172A] uppercase">
                      THE CIS CHRONICLE • 2026
                    </h4>
                    <p className="font-sans text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      Features on autonomous rovers, TinyML optimization, and foundation model fine-tuning.
                    </p>
                  </div>

                  <Link
                    href="/newsletter"
                    onClick={onClose}
                    className="inline-flex items-center gap-1 font-mono text-[11px] font-bold text-[#0284C7] hover:underline pt-1"
                  >
                    <span>READ BROADSHEET</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>

                {/* Highlight Card 2: Events */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2 hover:border-[#0284C7] transition-all">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="px-2 py-0.5 rounded-full bg-[#0F172A] text-white font-bold text-[9px]">
                      FLAGSHIP HACKATHON
                    </span>
                    <span className="text-slate-400 font-semibold text-[10px]">MUJ CAMPUS</span>
                  </div>

                  <div className="space-y-0.5">
                    <h4 className="font-display font-extrabold text-sm sm:text-base text-[#0F172A] uppercase">
                      WEBFORGE 36H HACKATHON
                    </h4>
                    <p className="font-sans text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      36-hour competitive engineering hackathon with cash prizes, keynote speakers, and mentors.
                    </p>
                  </div>

                  <Link
                    href="/events"
                    onClick={onClose}
                    className="inline-flex items-center gap-1 font-mono text-[11px] font-bold text-[#0284C7] hover:underline pt-1"
                  >
                    <span>EXPLORE CALENDAR</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Compact Footer (No Scroll) */}
          <div className="w-full px-4 sm:px-8 py-2.5 sm:py-3.5 relative z-20 border-t border-slate-100/80 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs shrink-0">
            <div className="flex items-center gap-3 text-slate-500 font-semibold text-[10px] sm:text-[11px]">
              <a
                href="https://www.instagram.com/ieee.cismuj/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0284C7] transition-colors"
              >
                INSTAGRAM
              </a>
              <span>•</span>
              <a
                href="https://cis.ieee.org"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0284C7] transition-colors"
              >
                IEEE CIS GLOBAL
              </a>
              <span>•</span>
              <a
                href="mailto:cis.muj@ieee.org"
                className="hover:text-[#0284C7] transition-colors"
              >
                CONTACT
              </a>
            </div>

            <a
              href="https://www.instagram.com/ieee.cismuj/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded-xl bg-[#0284C7] hover:bg-[#0369A1] text-white font-mono text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-xs transition-all cursor-pointer"
            >
              <span>JOIN CHAPTER</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
