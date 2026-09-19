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
          className="fixed inset-0 z-[100] bg-slate-900/10 backdrop-blur-3xl backdrop-saturate-150 h-[100dvh] max-h-[100dvh] overflow-hidden flex flex-col justify-between select-none"
        >
          {/* Glassmorphism ambient refractive lighting orbs */}
          <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-sky-300/25 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute top-1/3 right-10 w-[550px] h-[550px] bg-[#38BDF8]/20 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute -bottom-20 left-1/3 w-[450px] h-[450px] bg-[#0284C7]/15 rounded-full blur-[110px] pointer-events-none" />

          {/* Frosted Glass Overlay Tint */}
          <div className="absolute inset-0 bg-white/55 backdrop-blur-2xl pointer-events-none" />

          {/* Giant watermark typography with frosted transparency */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-[0.035]">
            <span className="font-display font-black text-[22vw] tracking-tighter text-[#0F172A] uppercase leading-none select-none">
              IEEE CIS
            </span>
          </div>

          {/* Top Bar: Ultra Glass Header */}
          <div className="w-full px-4 sm:px-8 py-3.5 sm:py-4 flex items-center justify-between relative z-20 border-b border-white/60 bg-white/45 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.03)] shrink-0">
            {/* Left: MUJ Chapter Identity */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white/80 backdrop-blur-md border border-white/90 p-1 flex items-center justify-center shadow-xs">
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

            {/* Right: Glass Close Button */}
            <button
              onClick={onClose}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/70 hover:bg-[#0284C7] text-[#0F172A] hover:text-white border border-white/80 hover:border-[#0284C7] backdrop-blur-md flex items-center justify-center transition-all duration-200 cursor-pointer shadow-xs hover:shadow-[0_4px_16px_rgba(2,132,199,0.3)] group"
              aria-label="Close Menu"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-90 transition-transform duration-300" />
            </button>
          </div>

          {/* Center Main Navigation: Glass Viewport */}
          <div className="flex-1 min-h-0 w-full max-w-4xl mx-auto px-4 sm:px-8 flex items-center justify-center relative z-20 overflow-hidden">
            <div className="w-full flex flex-col justify-center gap-1.5 sm:gap-2.5 md:gap-3 py-4">
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
                      className={`group flex items-center gap-4 sm:gap-6 px-4 sm:px-6 py-2 sm:py-2.5 rounded-2xl transition-all duration-200 cursor-pointer border border-transparent ${
                        isActive
                          ? 'bg-white/70 backdrop-blur-md border-white/90 shadow-xs'
                          : 'hover:bg-white/50 hover:backdrop-blur-md hover:border-white/70 hover:shadow-xs'
                      }`}
                    >
                      <span
                        className={`font-mono text-[10px] sm:text-xs font-bold w-6 transition-colors ${
                          isActive
                            ? 'text-[#0284C7]'
                            : 'text-slate-400 group-hover:text-[#0284C7]'
                        }`}
                      >
                        0{idx + 1}
                      </span>

                      <span
                        className={`font-serif text-[clamp(1.5rem,5vh,3.25rem)] font-black tracking-tight uppercase leading-none transition-all duration-200 ${
                          isActive
                            ? 'text-[#0284C7] translate-x-1.5'
                            : 'text-[#0F172A] group-hover:text-[#0284C7] group-hover:translate-x-1.5'
                        }`}
                      >
                        {item.name}
                      </span>

                      {isActive && (
                        <span className="w-2.5 h-2.5 rounded-full bg-[#0284C7] shadow-[0_0_10px_rgba(2,132,199,0.8)] animate-pulse ml-2" />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Bottom Bar: Ultra Glass Footer */}
          <div className="w-full px-4 sm:px-8 py-3.5 sm:py-4 relative z-20 border-t border-white/60 bg-white/45 backdrop-blur-xl shadow-[0_-4px_24px_rgba(0,0,0,0.02)] flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs shrink-0">
            <div className="flex items-center gap-3 sm:gap-4 font-bold text-xs">
              <a
                href="https://www.instagram.com/ieee.cismuj/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0F172A] hover:text-[#0284C7] transition-colors py-1"
              >
                INSTAGRAM
              </a>
              <span className="text-slate-300">•</span>
              <a
                href="https://cis.ieee.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0F172A] hover:text-[#0284C7] transition-colors py-1"
              >
                IEEE CIS GLOBAL
              </a>
              <span className="text-slate-300">•</span>
              <a
                href="mailto:cis.muj@ieee.org"
                className="text-[#0F172A] hover:text-[#0284C7] transition-colors py-1"
              >
                CONTACT
              </a>
            </div>

            <a
              href="https://www.instagram.com/ieee.cismuj/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-xl bg-[#0284C7] hover:bg-[#0369A1] text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-[0_4px_14px_rgba(2,132,199,0.35)] border border-white/20 transition-all cursor-pointer hover:-translate-y-0.5"
            >
              <span>JOIN CHAPTER</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
