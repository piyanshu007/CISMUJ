'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { CIS_TEAM_2026, TeamMember } from '@/data/team';
import { ArrowRight } from 'lucide-react';
import { HeroCoreGlassPanel } from './team/HeroCoreGlassPanel';
import { TeamRosterCard } from './team/TeamRosterCard';
import { TeamMemberModal } from './team/TeamMemberModal';

const TEAM_CATEGORY_TABS = ['ALL', 'CORE TEAM', 'ADVISORY', 'EXECUTIVE'] as const;
type TeamCategoryFilter = typeof TEAM_CATEGORY_TABS[number];

/**
 * Calculates priority ordering based on formal IEEE committee hierarchy
 * Level 1: Advisory & Faculty Counselors
 * Level 2: Core Executive Committee (Chair -> Vice -> GenSec -> Treasurer -> MD -> HRD -> RD)
 * Level 3: Domain Leadership (Heads -> Joint Heads -> Senior Coordinators -> Technical Webmasters)
 */
function computeMemberHierarchyWeight(candidate: TeamMember): number {
  const roleTitle = candidate.role.toLowerCase();
  const committeeCategory = candidate.category;

  // 1. Faculty Advisors & Advisory Council
  if (committeeCategory === 'ADVISORY' || committeeCategory === 'FACULTY ADVISOR') {
    if (roleTitle.includes('counselor') || (roleTitle.includes('faculty') && roleTitle.includes('advisor'))) return 1;
    if (roleTitle.includes('co-coordinator') || (roleTitle.includes('faculty') && !roleTitle.includes('ex'))) return 2;
    if (roleTitle.includes('ex-chairperson') || roleTitle.includes('ex-')) return 3;
    return 4;
  }

  // 2. Core Committee Office Bearers
  if (committeeCategory === 'CORE TEAM') {
    if (roleTitle.includes('chairperson') && !roleTitle.includes('vice') && !roleTitle.includes('ex')) return 10;
    if (roleTitle.includes('vice-chairperson') || roleTitle.includes('vice chairperson')) return 20;
    if (roleTitle.includes('general secretary') || roleTitle.includes('gensec')) return 30;
    if (roleTitle.includes('treasurer')) return 40;
    if (roleTitle.includes('managing director')) return 50;
    if (roleTitle.includes('human resources director') || roleTitle.includes('hr director')) return 60;
    if (roleTitle.includes('research director')) return 70;
    return 80;
  }

  // 3. Domain Sorting for Executive & Operations
  let domainWeight = 500;
  if (roleTitle.includes('finance')) domainWeight = 100;
  else if (roleTitle.includes('program')) domainWeight = 200;
  else if (roleTitle.includes('research') || roleTitle.includes('development') || roleTitle.includes('r&d')) domainWeight = 300;
  else if (roleTitle.includes('editorial')) domainWeight = 400;
  else if (roleTitle.includes('graphic') || roleTitle.includes('design')) domainWeight = 500;
  else if (roleTitle.includes('webmaster') || roleTitle.includes('technical')) domainWeight = 600;
  else if (roleTitle.includes('prodops') || roleTitle.includes('operation')) domainWeight = 700;
  else if (roleTitle.includes('promotion')) domainWeight = 800;
  else if (roleTitle.includes('social media') || roleTitle.includes('social')) domainWeight = 900;
  else if (roleTitle.includes('sponsorship') || roleTitle.includes('curation')) domainWeight = 1000;

  // Sub-rank within domain
  let rankSubLevel = 4;
  if (roleTitle.startsWith('head of') || (roleTitle.includes('head') && !roleTitle.includes('joint'))) {
    rankSubLevel = 1;
  } else if (roleTitle.includes('joint head')) {
    rankSubLevel = 2;
  } else if (roleTitle.includes('senior coordinator')) {
    rankSubLevel = 3;
  } else if (roleTitle.includes('webmaster')) {
    rankSubLevel = 3.5;
  } else if (roleTitle.includes('coordinator')) {
    rankSubLevel = 4;
  }

  return domainWeight + rankSubLevel;
}

export const ExecutiveTeamGrid: React.FC = () => {
  const [selectedCategoryTab, setSelectedCategoryTab] = useState<TeamCategoryFilter>('ALL');
  const [activeModalMember, setActiveModalMember] = useState<TeamMember | null>(null);

  // Filter & memoize team roster by category tab
  const activeFilteredMembers = useMemo(() => {
    return CIS_TEAM_2026.filter((member) => {
      if (selectedCategoryTab === 'ALL') return true;
      if (selectedCategoryTab === 'CORE TEAM') return member.category === 'CORE TEAM';
      if (selectedCategoryTab === 'ADVISORY') return member.category === 'ADVISORY' || member.category === 'FACULTY ADVISOR';
      if (selectedCategoryTab === 'EXECUTIVE') return member.category === 'HEADS' || member.category === 'COORDINATORS';
      return true;
    }).sort((firstCandidate, secondCandidate) => {
      return computeMemberHierarchyWeight(firstCandidate) - computeMemberHierarchyWeight(secondCandidate);
    });
  }, [selectedCategoryTab]);

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
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-10 lg:px-12 pt-20 sm:pt-32 pb-6 sm:pb-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center min-h-[380px] sm:min-h-[500px] lg:min-h-[520px]">
          
          {/* Left Column: Eyebrow, Heading, Subtitle, CTA */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6 z-10">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2"
            >
              <div className="w-6 sm:w-8 h-px bg-[#0284C7]" />
              <span className="font-mono text-[10px] sm:text-[11px] font-bold text-[#0284C7] tracking-widest uppercase">
                OUR TEAM
              </span>
              <div className="w-6 sm:w-8 h-px bg-[#0284C7]" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-3xl sm:text-5xl lg:text-[3.75rem] font-sans font-light text-[#1E293B] tracking-tight leading-[1.12]">
                Different Minds.
                <br />
                One <span className="text-[#0284C7] font-normal">Intelligence.</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-slate-500 text-xs sm:text-[15px] max-w-md leading-relaxed"
            >
              A passionate team of learners, creators and problem solvers, working towards a smarter, more intelligent tomorrow.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-1 sm:pt-2 flex items-center gap-4"
            >
              <a
                href="#team-roster"
                className="flex items-center gap-2.5 sm:gap-3 group cursor-pointer"
              >
                <span className="font-mono text-[11px] sm:text-xs font-bold text-slate-600 group-hover:text-[#0284C7] transition-colors uppercase tracking-wider">
                  EXPLORE OUR TEAM
                </span>
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-[#0284C7] text-[#0284C7] group-hover:bg-[#0284C7] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-xs group-hover:shadow-md">
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Hero 3D Translucent Glass Panels Cluster */}
          <HeroCoreGlassPanel onSelectMember={setActiveModalMember} />
        </div>
      </div>

      {/* ============================================================ */}
      {/* PART 2: TEAM CARDS GRID                                      */}
      {/* ============================================================ */}
      <div id="team-roster" className="w-full border-t border-slate-100/90 bg-white py-6 sm:py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-12">
          
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-8 border-b border-slate-200/80 pb-2.5 mb-6 sm:mb-10">
            {TEAM_CATEGORY_TABS.map((categoryName) => {
              const isSelected = selectedCategoryTab === categoryName;
              return (
                <button
                  key={categoryName}
                  onClick={() => setSelectedCategoryTab(categoryName)}
                  className={`font-mono text-[11px] sm:text-xs font-bold tracking-wider uppercase relative pb-2 sm:pb-3 transition-colors cursor-pointer ${
                    isSelected ? 'text-[#0284C7]' : 'text-slate-400 hover:text-slate-700'
                  }`}
                >
                  <span>{categoryName}</span>
                  {isSelected && (
                    <motion.div
                      layoutId="activeTeamTab"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0284C7] rounded-full"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Member Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
            {activeFilteredMembers.map((memberProfile, rosterIndex) => (
              <TeamRosterCard
                key={memberProfile.id}
                member={memberProfile}
                cardIndex={rosterIndex}
                onSelectMember={setActiveModalMember}
              />
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

      {/* Member Profile Modal */}
      <TeamMemberModal
        member={activeModalMember}
        onClose={() => setActiveModalMember(null)}
      />

    </section>
  );
};
