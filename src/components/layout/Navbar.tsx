'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { SidebarMenu } from './SidebarMenu';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Events', href: '/events' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Projects', href: '/projects' },
    { name: 'Team', href: '/team' },
    { name: 'Newsletter', href: '/newsletter' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/10 backdrop-blur-md border-b border-white/20 py-3.5 shadow-none'
            : 'bg-transparent py-4 sm:py-5 border-b border-transparent shadow-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
          {/* Left Group: Logo Emblem + Hairline Divider + Nav Links */}
          <div className="flex items-center">
            {/* Logo Emblem */}
            <Link href="/" className="flex items-center group shrink-0" aria-label="IEEE CIS Home">
              <div className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <img
                  src="/logo-mark.png"
                  alt="IEEE CIS Logo"
                  className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(2,132,199,0.3)]"
                />
              </div>
            </Link>

            {/* Vertical Hairline Divider from Reference */}
            <div className="hidden sm:block w-px h-5 bg-slate-200 mx-6" />

            {/* Clean Nav Links */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-sans text-sm font-medium text-slate-600">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative py-1 transition-colors ${
                      isActive ? 'text-[#0284C7] font-semibold' : 'hover:text-[#0284C7]'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#0284C7] rounded-full mx-auto" />
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Right Group: Sidebar Menu Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMenuOpen(true)}
              className="p-2 sm:px-3 sm:py-1.5 rounded-xl text-slate-700 hover:text-[#0284C7] hover:bg-sky-50/80 transition-all cursor-pointer flex items-center gap-2 border border-slate-200/80 group"
              aria-label="Open Navigation Menu"
            >
              <span className="hidden sm:inline font-mono text-xs font-bold text-slate-600 group-hover:text-[#0284C7] tracking-wider uppercase">
                MENU
              </span>
              <Menu className="w-4 h-4 text-slate-700 group-hover:text-[#0284C7] transition-transform group-hover:scale-110" />
            </button>
          </div>
        </div>
      </header>

      {/* Sidebar Menu Modal */}
      <SidebarMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};
