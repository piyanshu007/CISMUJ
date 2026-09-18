'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CIS_TEAM_2026, TeamMember } from '@/data/team';
import { ArrowRight, X, Linkedin, Instagram } from 'lucide-react';

const CATEGORIES = ['ALL', 'CORE TEAM', 'ADVISORY', 'EXECUTIVE'];

export const ExecutiveTeamGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  // 7 Core Committee Members for Hero Glass Panels (Chairperson, Vice-Chair, Gen Sec, Treasurer, MD, HRD, RD)
  const heroCoreMembers = [
    {
      name: 'Pranav Kheole',
      role: 'HR Director',
      image: '/team/cutouts/pranav_kheole.png',
      left: '0%',
      top: '26%',
      width: '18%',
      height: '64%',
      zIndex: 10,
      isCenter: false,
    },
    {
      name: 'Harsh Raj',
      role: 'Treasurer',
      image: '/team/cutouts/harsh_raj.png',
      left: '13.5%',
      top: '17%',
      width: '18.5%',
      height: '74%',
      zIndex: 15,
      isCenter: false,
    },
    {
      name: 'Manya Moonat',
      role: 'Vice-Chairperson',
      image: '/team/cutouts/manya_moonat.png',
      left: '27%',
      top: '8%',
      width: '19%',
      height: '84%',
      zIndex: 25,
      isCenter: false,
    },
    {
      name: 'Shubhanshu Dixit',
      role: 'Chairperson',
      image: '/team/cutouts/shubhanshu_dixit.png',
      left: '40.5%',
      top: '0%',
      width: '19.5%',
      height: '98%',
      zIndex: 35,
      isCenter: true,
    },
    {
      name: 'Rishan Mazumdar',
      role: 'General Secretary',
      image: '/team/cutouts/rishan_mazumdar.png',
      left: '54%',
      top: '8%',
      width: '19%',
      height: '84%',
      zIndex: 25,
      isCenter: false,
    },
    {
      name: 'Garv Sharma',
      role: 'Managing Director',
      image: '/team/cutouts/garv_sharma.png',
      left: '67.5%',
      top: '17%',
      width: '18.5%',
      height: '74%',
      zIndex: 15,
      isCenter: false,
    },
    {
      name: 'Yash Raj',
      role: 'Research Director',
      image: '/team/cutouts/yash_raj.png',
      left: '81%',
      top: '26%',
      width: '18%',
      height: '64%',
      zIndex: 10,
      isCenter: false,
    },
  ];

  // Filter and sort members according to domain grouping (Head -> Joint Head -> Senior Coordinator -> Coordinator)
  const filteredMembers = CIS_TEAM_2026.filter((m) => {
    if (activeCategory === 'ALL') return true;
    if (activeCategory === 'CORE TEAM') return m.category === 'CORE TEAM';
    if (activeCategory === 'ADVISORY') return m.category === 'ADVISORY' || m.category === 'FACULTY ADVISOR';
    if (activeCategory === 'EXECUTIVE') return m.category === 'HEADS' || m.category === 'COORDINATORS';
    return true;
  }).sort((a, b) => {
    const getMemberRank = (m: TeamMember): number => {
      const r = m.role.toLowerCase();
      const cat = m.category;

      // 1. Faculty Advisors & Advisory (Top of ALL)
      if (cat === 'ADVISORY' || cat === 'FACULTY ADVISOR') {
        if (r.includes('counselor') || (r.includes('faculty') && r.includes('advisor'))) return 1;
        if (r.includes('co-coordinator') || (r.includes('faculty') && !r.includes('ex'))) return 2;
        if (r.includes('ex-chairperson') || r.includes('ex-')) return 3;
        return 4;
      }

      // 2. Core Committee (Exact handwritten hierarchy: Chair -> Vice -> GenSec -> Treasurer -> MD -> HRD -> RD)
      if (cat === 'CORE TEAM') {
        if (r.includes('chairperson') && !r.includes('vice') && !r.includes('ex')) return 10;
        if (r.includes('vice-chairperson') || r.includes('vice chairperson')) return 20;
        if (r.includes('general secretary') || r.includes('gensec')) return 30;
        if (r.includes('treasurer')) return 40;
        if (r.includes('managing director')) return 50;
        if (r.includes('human resources director') || r.includes('hr director')) return 60;
        if (r.includes('research director')) return 70;
        return 80;
      }

      // 3. Domain Sorting for Executive & Management (Group by Domain, then Head -> Joint Head -> Senior Coord -> Coord)
      let domainRank = 500;
      if (r.includes('finance')) domainRank = 100;
      else if (r.includes('program')) domainRank = 200;
      else if (r.includes('research') || r.includes('development') || r.includes('r&d')) domainRank = 300;
      else if (r.includes('editorial')) domainRank = 400;
      else if (r.includes('graphic') || r.includes('design')) domainRank = 500;
      else if (r.includes('webmaster') || r.includes('technical')) domainRank = 600;
      else if (r.includes('prodops') || r.includes('operation')) domainRank = 700;
      else if (r.includes('promotion')) domainRank = 800;
      else if (r.includes('social media') || r.includes('social')) domainRank = 900;
      else if (r.includes('sponsorship') || r.includes('curation')) domainRank = 1000;

      // Hierarchy within the domain:
      // Level 1: Head of [Domain]
      // Level 2: Joint Head of [Domain]
      // Level 3: Senior Coordinator of [Domain]
      // Level 4: Technical Webmaster / Coordinator of [Domain]
      let levelRank = 4;
      if (r.startsWith('head of') || (r.includes('head') && !r.includes('joint'))) {
        levelRank = 1;
      } else if (r.includes('joint head')) {
        levelRank = 2;
      } else if (r.includes('senior coordinator')) {
        levelRank = 3;
      } else if (r.includes('webmaster')) {
        levelRank = 3.5;
      } else if (r.includes('coordinator')) {
        levelRank = 4;
      }

      return domainRank + levelRank;
    };

    return getMemberRank(a) - getMemberRank(b);
  });

  return (
    <section className="relative w-full bg-white text-[#0F172A] overflow-hidden select-none">
      {/* Soft ethereal ambient background glow */}
      <div
        className="absolute top-0 right-0 w-[750px] h-[600px] rounded-full pointer-events-none opacity-40"
        style={{
          background:
            'radial-gradient(circle at 70% 30%, rgba(224, 242, 254, 0.7) 0%, rgba(240, 249, 255, 0.25) 50%, transparent 75%)',
        }}
      />

      {/* ============================================================ */}
      {/* PART 1: HERO SECTION (5 Core Members in Vertical 3D Panels)  */}
      {/* ============================================================ */}
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-28 sm:pt-32 pb-8 sm:pb-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center min-h-[460px] lg:min-h-[520px]">
          
          {/* Left Column: Eyebrow, Heading, Subtitle, CTA */}
          <div className="lg:col-span-5 space-y-6 z-10">
            {/* Eyebrow: —— OUR TEAM —— */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2"
            >
              <div className="w-8 h-px bg-[#0284C7]" />
              <span className="font-mono text-[11px] font-bold text-[#0284C7] tracking-widest uppercase">
                OUR TEAM
              </span>
              <div className="w-8 h-px bg-[#0284C7]" />
            </motion.div>

            {/* Main Editorial Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] font-sans font-light text-[#1E293B] tracking-tight leading-[1.15]">
                Different Minds.
                <br />
                One <span className="text-[#0284C7] font-normal">Intelligence.</span>
              </h1>
            </motion.div>

            {/* Subtitle Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-slate-500 text-sm sm:text-[15px] max-w-md leading-relaxed"
            >
              A passionate team of learners, creators and problem solvers, working towards a smarter, more intelligent tomorrow.
            </motion.p>

            {/* Circular CTA Button with Text: EXPLORE OUR TEAM ( → ) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-2 flex items-center gap-4"
            >
              <a
                href="#team-roster"
                className="flex items-center gap-3 group cursor-pointer"
              >
                <span className="font-mono text-xs font-bold text-slate-600 group-hover:text-[#0284C7] transition-colors uppercase tracking-wider">
                  EXPLORE OUR TEAM
                </span>
                <div className="w-11 h-11 rounded-full border border-[#0284C7] text-[#0284C7] group-hover:bg-[#0284C7] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-xs group-hover:shadow-md">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </a>
            </motion.div>
          </div>

          {/* Right Column: 7 Core Committee Members in Vertical 3D Translucent Glass Panels */}
          <div className="lg:col-span-7 relative flex items-center justify-center min-h-[480px] sm:min-h-[540px] lg:min-h-[560px]">
            
            {/* Encircling 3D Orbital Track SVG matching Reference Image */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-25 overflow-visible"
              viewBox="0 0 700 500"
              fill="none"
            >
              {/* Primary tilted orbital ellipse */}
              <ellipse
                cx="350"
                cy="270"
                rx="330"
                ry="135"
                transform="rotate(-12 350 270)"
                stroke="#0284C7"
                strokeWidth="1.4"
                strokeOpacity="0.45"
              />
              {/* Secondary dashed orbit ring */}
              <ellipse
                cx="350"
                cy="270"
                rx="310"
                ry="120"
                transform="rotate(-16 350 270)"
                stroke="#38BDF8"
                strokeWidth="0.9"
                strokeDasharray="4 4"
                strokeOpacity="0.35"
              />
              {/* Network nodes along orbit */}
              <circle cx="50" cy="305" r="3" fill="#0284C7" />
              <line x1="50" y1="305" x2="30" y2="320" stroke="#0284C7" strokeWidth="0.8" strokeOpacity="0.5" />
              
              <circle cx="210" cy="385" r="3.5" fill="#0284C7" />
              <line x1="210" y1="385" x2="230" y2="405" stroke="#38BDF8" strokeWidth="0.8" strokeOpacity="0.5" />
              
              <circle cx="450" cy="360" r="3" fill="#0284C7" />
              <circle cx="550" cy="180" r="3" fill="#38BDF8" />
              <circle cx="640" cy="210" r="3.5" fill="#0284C7" />

              {/* Connector line to the glossy 3D Sphere at bottom right */}
              <line x1="580" y1="390" x2="635" y2="435" stroke="#0284C7" strokeWidth="1" strokeOpacity="0.55" />
              <circle cx="580" cy="390" r="2.5" fill="#0284C7" />
            </svg>

            {/* Exact Overlapping 7-Panel Cluster */}
            <div className="relative w-full max-w-[700px] h-[380px] sm:h-[480px] lg:h-[520px] z-20 mx-auto">
              {heroCoreMembers.map((member, idx) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.06 }}
                  whileHover={{ y: -10, scale: 1.05, zIndex: 50 }}
                  style={{
                    position: 'absolute',
                    left: member.left,
                    top: member.top,
                    width: member.width,
                    height: member.height,
                    zIndex: member.zIndex,
                  }}
                  className="cursor-pointer group touch-manipulation"
                  onClick={() => {
                    const full = CIS_TEAM_2026.find((m) => m.name === member.name);
                    if (full) setSelectedMember(full);
                  }}
                >
                  {/* Glass Card with 2.5D Isometric Tilt matching Reference Image */}
                  <div
                    className={`w-full h-full rounded-2xl overflow-hidden backdrop-blur-md bg-gradient-to-b from-white/80 via-sky-50/45 to-sky-100/30 border ${
                      member.isCenter
                        ? 'border-2 border-sky-300 shadow-[0_16px_40px_rgba(2,132,199,0.22)]'
                        : 'border border-sky-200/80 shadow-[0_10px_28px_rgba(2,132,199,0.14)]'
                    } relative transition-all duration-300`}
                    style={{
                      transform: 'skewY(-9.5deg)',
                      transformOrigin: 'center center',
                    }}
                  >
                    {/* Top glass reflection highlight */}
                    <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/80 via-white/30 to-transparent pointer-events-none z-10" />

                    {/* Leader Transparent Cutout Portrait Centered in the Middle */}
                    <div
                      className="absolute inset-0 z-10 w-full h-full flex items-center justify-center pt-1 sm:pt-2 pb-8 sm:pb-12 px-0.5"
                      style={{
                        transform: 'skewY(9.5deg)',
                        transformOrigin: 'center center',
                      }}
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-auto max-h-[82%] sm:max-h-[86%] object-contain object-center scale-100 sm:scale-110 md:scale-115 filter contrast-[1.05] brightness-[1.05] drop-shadow-[0_10px_22px_rgba(2,132,199,0.22)] group-hover:scale-120 transition-transform duration-500"
                      />
                    </div>

                    {/* Bottom Blue Gradient Layer - Conforms 100% to card corners with NO uncoloured gaps */}
                    <div className="absolute inset-x-0 bottom-0 h-24 sm:h-32 bg-gradient-to-t from-[#0284C7] via-[#0284C7]/80 to-transparent pointer-events-none z-15" />

                    {/* Text Container with Horizontal Level Orientation */}
                    <div
                      className="absolute inset-x-0 bottom-0 pb-2 sm:pb-3.5 pt-4 sm:pt-6 px-0.5 sm:px-1 text-white text-center pointer-events-none z-20 flex flex-col justify-end items-center"
                      style={{
                        transform: 'skewY(9.5deg)',
                        transformOrigin: 'center center',
                      }}
                    >
                      <span className="font-sans font-bold text-[8.5px] sm:text-[11px] md:text-[12.5px] leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] block max-w-full truncate px-0.5">
                        {member.name}
                      </span>
                      <span className="font-mono text-[6.5px] sm:text-[8px] md:text-[9px] uppercase tracking-wider text-sky-100 mt-0.5 block font-semibold drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)] leading-tight max-w-full truncate px-0.5">
                        {member.role}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Glossy 3D Blue Sphere on the Orbit Path matching Reference Image */}
            <motion.div
              animate={{
                y: [-3, 3, -3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute bottom-4 right-4 sm:right-6 w-11 h-11 sm:w-13 sm:h-13 rounded-full shadow-[0_10px_30px_rgba(2,132,199,0.6)] pointer-events-none z-30"
              style={{
                background:
                  'radial-gradient(circle at 35% 35%, #bae6fd 0%, #0284c7 50%, #075985 100%)',
              }}
            />
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* PART 2: TEAM CARDS GRID (1:1 with Reference Image 2)         */}
      {/* ============================================================ */}
      <div id="team-roster" className="w-full border-t border-slate-100/90 bg-white py-8 sm:py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          
          {/* Category Filter Tabs (1:1 with Image 2: ALL, CORE TEAM, FACULTY ADVISOR, EXECUTIVE, MANAGEMENT) */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 border-b border-slate-200/80 pb-3 mb-10">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`font-mono text-xs font-bold tracking-wider uppercase relative pb-3 transition-colors cursor-pointer ${
                    isActive ? 'text-[#0284C7]' : 'text-slate-400 hover:text-slate-700'
                  }`}
                >
                  <span>{cat}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeTeamTab"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0284C7] rounded-full"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Member Cards Grid (Exact Layout with Transparent Cutouts and IEEE CIS Watermark Badge) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredMembers.map((member, idx) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: Math.min(idx * 0.04, 0.4) }}
                whileHover={{ y: -4 }}
                onClick={() => setSelectedMember(member)}
                className="p-5 rounded-3xl bg-white border border-slate-100/90 hover:border-[#0284C7] shadow-xs hover:shadow-[0_12px_28px_rgba(2,132,199,0.12)] transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  {/* Photo Container with Organic Blue Fluid Blob & Curved Bottom Wave */}
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-b from-sky-50/50 via-sky-50/20 to-white mb-5 flex items-end justify-center pt-2">
                    
                    {/* Faded IEEE CIS Logo Watermark Behind Person */}
                    <div className="absolute right-2 top-2 w-32 h-32 sm:w-36 sm:h-36 pointer-events-none select-none flex items-center justify-center opacity-20 group-hover:opacity-30 transition-all duration-500 z-0">
                      <img
                        src="/logo-mark.png"
                        alt="IEEE CIS Logo"
                        className="w-full h-full object-contain filter contrast-125 group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Transparent Cutout Headshot */}
                    <img
                      src={member.image}
                      alt={member.name}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        if (!target.src.includes('avatar-placeholder.png')) {
                          target.src = '/team/avatar-placeholder.png';
                        }
                      }}
                      className="relative z-10 max-h-[92%] w-auto object-contain object-bottom filter drop-shadow-[0_6px_14px_rgba(2,132,199,0.15)] group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Elegant Smooth Bottom Wave Cutout */}
                    <svg
                      className="absolute bottom-0 left-0 right-0 h-5 w-full text-white fill-current pointer-events-none z-20"
                      viewBox="0 0 100 25"
                      preserveAspectRatio="none"
                    >
                      <path d="M 0,25 C 45,25 65,4 100,4 L 100,25 Z" />
                    </svg>
                  </div>

                  {/* Name & Role */}
                  <div className="space-y-1">
                    {/* Category as JUST TEXT (no background round box) */}
                    <span className="font-mono text-[11px] font-bold text-[#0284C7] uppercase tracking-wider block">
                      {member.category === 'HEADS' || member.category === 'COORDINATORS'
                        ? 'EXECUTIVE'
                        : member.category === 'FACULTY ADVISOR'
                        ? 'ADVISORY'
                        : member.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-sans font-bold text-[#1E293B] group-hover:text-[#0284C7] transition-colors leading-snug">
                      {member.name}
                    </h3>
                    <p className="font-mono text-xs sm:text-[13px] font-bold text-slate-500 uppercase tracking-wider">
                      {member.role}
                    </p>
                    {/* Subtle Horizontal Dash */}
                    <div className="w-6 h-0.5 bg-slate-200 mt-1" />
                  </div>
                </div>

                {/* Bottom Action: Circular Blue Arrow Button (from Image 2) */}
                <div className="pt-3 mt-4 flex items-center justify-between">
                  <span className="font-mono text-[10px] text-slate-400 group-hover:text-[#0284C7] uppercase tracking-wider">
                    IEEE CIS MUJ
                  </span>

                  <div className="w-9 h-9 rounded-full border border-[#0284C7] text-[#0284C7] group-hover:bg-[#0284C7] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-2xs">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Telemetry Footer Strip */}
          <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 font-mono text-xs">
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-[#0284C7]" />
              <span className="tracking-widest uppercase text-[11px] text-slate-500">
                TEAMWORK BUILDS INTELLIGENCE
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]" />
              <div className="w-8 h-px bg-slate-300" />
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
            </div>
          </div>

        </div>
      </div>

      {/* ============================================================ */}
      {/* MEMBER PROFILE MODAL                                         */}
      {/* ============================================================ */}
      <AnimatePresence>
        {selectedMember && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-xs"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white border border-slate-200 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl space-y-6 relative text-[#0F172A]"
            >
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
                aria-label="Close Profile"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-5">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-gradient-to-b from-sky-50 to-white border border-slate-200 shrink-0 flex items-end justify-center">
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (!target.src.includes('avatar-placeholder.png')) {
                        target.src = '/team/avatar-placeholder.png';
                      }
                    }}
                    className="max-h-[92%] w-auto object-contain object-bottom"
                  />
                </div>
                <div className="space-y-1">
                  <span className="font-mono text-xs font-bold text-[#0284C7] uppercase tracking-wider block">
                    {selectedMember.category === 'HEADS' || selectedMember.category === 'COORDINATORS'
                      ? 'EXECUTIVE'
                      : selectedMember.category === 'FACULTY ADVISOR'
                      ? 'ADVISORY'
                      : selectedMember.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-sans font-bold text-[#0F172A] leading-tight">
                    {selectedMember.name}
                  </h3>
                  <p className="font-mono text-xs font-bold text-slate-500 uppercase">
                    {selectedMember.role}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1 text-xs font-sans">
                <span className="font-mono text-[10px] font-bold text-slate-400 uppercase block">
                  ORGANIZATION
                </span>
                <p className="font-semibold text-slate-700">
                  IEEE Computational Intelligence Society • Manipal University Jaipur
                </p>
              </div>

              {/* Social Links */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <span className="font-mono text-xs text-slate-400 font-bold uppercase">
                  CONNECT
                </span>

                <div className="flex items-center gap-3">
                  {selectedMember.linkedin && (
                    <a
                      href={selectedMember.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 rounded-full bg-slate-100 hover:bg-[#0284C7] text-slate-700 hover:text-white text-xs font-mono font-bold flex items-center gap-1.5 transition-colors"
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                      <span>LinkedIn</span>
                    </a>
                  )}
                  {selectedMember.instagram && (
                    <a
                      href={selectedMember.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 rounded-full bg-slate-100 hover:bg-[#0284C7] text-slate-700 hover:text-white text-xs font-mono font-bold flex items-center gap-1.5 transition-colors"
                    >
                      <Instagram className="w-3.5 h-3.5" />
                      <span>Instagram</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
