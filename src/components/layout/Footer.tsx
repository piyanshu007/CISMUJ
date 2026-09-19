'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ArrowUpRight, 
  Instagram, 
  Linkedin, 
  Mail, 
  Globe, 
  User, 
  MapPin
} from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-slate-50 text-slate-600 font-sans text-xs select-none border-t border-slate-200 overflow-hidden">
      {/* Giant faint IEEE CIS background watermark typography */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none opacity-[0.03]">
        <span className="font-display font-black text-[20vw] sm:text-[22vw] tracking-tighter text-[#0F172A] uppercase leading-none whitespace-nowrap">
          IEEE CIS
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-8 mb-6 sm:mb-14">
          
          {/* Col 1 & 2: Chapter Overview & Brand Identity */}
          <div className="lg:col-span-2 space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2.5 sm:gap-3.5">
              <div className="relative w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white border border-slate-200 p-1.5 sm:p-2 flex items-center justify-center shadow-xs shrink-0">
                <img
                  src="/logo-mark.png"
                  alt="IEEE CIS Official Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black tracking-tight text-[#0F172A] text-xs sm:text-base leading-tight">
                  IEEE COMPUTATIONAL INTELLIGENCE SOCIETY
                </span>
                <span className="font-mono text-[9px] sm:text-xs text-[#0284C7] font-bold tracking-wider uppercase mt-0.5">
                  MANIPAL UNIVERSITY JAIPUR STUDENT CHAPTER
                </span>
              </div>
            </div>

            <p className="text-slate-600 max-w-md leading-relaxed text-[11px] sm:text-xs">
              Manipal University Jaipur&apos;s active student chapter driving hands-on proficiency in artificial intelligence, neural architectures, robotics, competitive hackathons, and computational intelligence research.
            </p>

            {/* Social Icons Bar */}
            <div className="flex items-center gap-2 sm:gap-3 pt-1 sm:pt-2 font-mono text-xs">
              <a
                href="https://www.instagram.com/ieee.cismuj/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-white hover:bg-[#0284C7] text-slate-700 hover:text-white border border-slate-200 flex items-center justify-center transition-all duration-200 shadow-xs group"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://www.linkedin.com/company/ieee-cis-muj/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-white hover:bg-[#0284C7] text-slate-700 hover:text-white border border-slate-200 flex items-center justify-center transition-all duration-200 shadow-xs group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://cis.ieee.org"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-white hover:bg-[#0284C7] text-slate-700 hover:text-white border border-slate-200 flex items-center justify-center transition-all duration-200 shadow-xs group"
                aria-label="IEEE CIS Global"
              >
                <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="mailto:cis.muj@jaipur.manipal.edu"
                className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-white hover:bg-[#0284C7] text-slate-700 hover:text-white border border-slate-200 flex items-center justify-center transition-all duration-200 shadow-xs group"
                aria-label="Email"
              >
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Group Quick Links & Resources side-by-side on mobile, direct columns on desktop */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:contents">
            {/* Col 3: Quick Links */}
            <div className="space-y-2 sm:space-y-3 font-sans">
              <h4 className="text-[#0F172A] font-bold text-xs sm:text-sm tracking-wide flex items-center gap-1 sm:gap-1.5">
                <span className="text-[#0284C7] font-mono font-black">&gt;</span> Quick Links
              </h4>
              <ul className="space-y-1.5 sm:space-y-2 text-slate-600 text-[11px] sm:text-xs">
                <li>
                  <Link href="/" className="hover:text-[#0284C7] hover:translate-x-1 inline-block transition-all">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-[#0284C7] hover:translate-x-1 inline-block transition-all">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="hover:text-[#0284C7] hover:translate-x-1 inline-block transition-all">
                    Events &amp; Hackathons
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="hover:text-[#0284C7] hover:translate-x-1 inline-block transition-all">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="hover:text-[#0284C7] hover:translate-x-1 inline-block transition-all">
                    Projects &amp; Innovation
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="hover:text-[#0284C7] hover:translate-x-1 inline-block transition-all">
                    Photo Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/newsletter" className="hover:text-[#0284C7] hover:translate-x-1 inline-block transition-all">
                    Newsletter
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 4: Resources */}
            <div className="space-y-2 sm:space-y-3 font-sans">
              <h4 className="text-[#0F172A] font-bold text-xs sm:text-sm tracking-wide flex items-center gap-1 sm:gap-1.5">
                <span className="text-[#0284C7] font-mono font-black">&gt;</span> Resources
              </h4>
              <ul className="space-y-1.5 sm:space-y-2 text-slate-600 text-[11px] sm:text-xs">
                <li>
                  <a
                    href="https://www.ieee.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#0284C7] transition-colors flex items-center gap-1 group"
                  >
                    IEEE Global
                    <ArrowUpRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-slate-400 group-hover:text-[#0284C7] transition-colors shrink-0" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://cis.ieee.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#0284C7] transition-colors flex items-center gap-1 group"
                  >
                    IEEE CIS Global
                    <ArrowUpRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-slate-400 group-hover:text-[#0284C7] transition-colors shrink-0" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://ieeexplore.ieee.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#0284C7] transition-colors flex items-center gap-1 group"
                  >
                    IEEE Xplore
                    <ArrowUpRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-slate-400 group-hover:text-[#0284C7] transition-colors shrink-0" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://ieeemuj.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#0284C7] transition-colors flex items-center gap-1 group"
                  >
                    IEEE MUJ Branch
                    <ArrowUpRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-slate-400 group-hover:text-[#0284C7] transition-colors shrink-0" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://jaipur.manipal.edu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#0284C7] transition-colors flex items-center gap-1 group"
                  >
                    MUJ Portal
                    <ArrowUpRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-slate-400 group-hover:text-[#0284C7] transition-colors shrink-0" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.ieee.org/membership/join/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#0284C7] transition-colors flex items-center gap-1 group"
                  >
                    Join IEEE
                    <ArrowUpRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-slate-400 group-hover:text-[#0284C7] transition-colors shrink-0" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Col 5: Contact Info */}
          <div className="space-y-2 sm:space-y-3 font-sans">
            <h4 className="text-[#0F172A] font-bold text-xs sm:text-sm tracking-wide flex items-center gap-1 sm:gap-1.5">
              <span className="text-[#0284C7] font-mono font-black">&gt;</span> Contact
            </h4>
            
            <div className="space-y-2 sm:space-y-3.5 text-[11px] sm:text-xs text-slate-600 pt-0.5 sm:pt-1">
              {/* Person / Leadership */}
              <div className="flex items-start gap-2 sm:gap-2.5">
                <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0284C7] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#0F172A] font-semibold">Shubhanshu Dixit</p>
                  <p className="text-[10px] sm:text-[11px] text-slate-500">Chairperson, IEEE CIS MUJ</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-2 sm:gap-2.5">
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0284C7] shrink-0 mt-0.5" />
                <a 
                  href="mailto:cis.muj@jaipur.manipal.edu" 
                  className="hover:text-[#0284C7] transition-colors break-all"
                >
                  cis.muj@jaipur.manipal.edu
                </a>
              </div>

              {/* Location */}
              <div className="flex items-start gap-2 sm:gap-2.5">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0284C7] shrink-0 mt-0.5" />
                <p className="text-[10px] sm:text-[11px] leading-relaxed text-slate-500">
                  Manipal University Jaipur, Dehmi Kalan, Jaipur-Ajmer Expressway, Rajasthan 303007
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar Strip */}
        <div className="pt-4 sm:pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-4 font-mono text-[10px] sm:text-[11px] text-slate-500 text-center sm:text-left">
          <div>
            <span>
              © {new Date().getFullYear()} IEEE CIS MUJ. All rights reserved.
            </span>
          </div>
          <div className="flex items-center gap-2 sm:gap-4 flex-wrap justify-center">
            <span className="text-[#0284C7] font-bold">IEEE CODE OF ETHICS COMPLIANT</span>
            <span className="text-slate-300">•</span>
            <span>CHAPTER #6248</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
