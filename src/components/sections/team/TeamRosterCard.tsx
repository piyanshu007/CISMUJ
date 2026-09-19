'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { TeamMember } from '@/data/team';

interface TeamRosterCardProps {
  member: TeamMember;
  cardIndex: number;
  onSelectMember: (member: TeamMember) => void;
}

export const TeamRosterCard: React.FC<TeamRosterCardProps> = ({
  member,
  cardIndex,
  onSelectMember,
}) => {
  const displayCategoryLabel =
    member.category === 'HEADS' || member.category === 'COORDINATORS'
      ? 'EXECUTIVE'
      : member.category === 'FACULTY ADVISOR'
      ? 'ADVISORY'
      : member.category;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: Math.min(cardIndex * 0.03, 0.3) }}
      whileHover={{ y: -4 }}
      onClick={() => onSelectMember(member)}
      className="p-3 sm:p-5 rounded-2xl sm:rounded-3xl bg-white border border-slate-100/90 hover:border-[#0284C7] shadow-xs hover:shadow-[0_12px_28px_rgba(2,132,199,0.12)] transition-all duration-300 flex flex-col justify-between group cursor-pointer"
    >
      <div>
        {/* Photo Container with Organic Blue Fluid Blob & Curved Bottom Wave */}
        <div className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-b from-sky-50/50 via-sky-50/20 to-white mb-2.5 sm:mb-5 flex items-end justify-center pt-1 sm:pt-2">
          
          {/* Faded IEEE CIS Logo Watermark Behind Person */}
          <div className="absolute right-1 top-1 sm:right-2 sm:top-2 w-20 h-20 sm:w-36 sm:h-36 pointer-events-none select-none flex items-center justify-center opacity-20 group-hover:opacity-30 transition-all duration-500 z-0">
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
            className="absolute bottom-0 left-0 right-0 h-4 sm:h-5 w-full text-white fill-current pointer-events-none z-20"
            viewBox="0 0 100 25"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M 0,25 C 45,25 65,4 100,4 L 100,25 Z" />
          </svg>
        </div>

        {/* Name & Role */}
        <div className="space-y-0.5 sm:space-y-1">
          <span className="font-mono text-[9px] sm:text-[11px] font-bold text-[#0284C7] uppercase tracking-wider block truncate">
            {displayCategoryLabel}
          </span>
          <h3 className="text-sm sm:text-xl lg:text-2xl font-sans font-bold text-[#1E293B] group-hover:text-[#0284C7] transition-colors leading-snug truncate">
            {member.name}
          </h3>
          <p className="font-mono text-[10px] sm:text-xs sm:text-[13px] font-bold text-slate-500 uppercase tracking-wider truncate">
            {member.role}
          </p>
          {/* Subtle Horizontal Dash */}
          <div className="w-4 sm:w-6 h-0.5 bg-slate-200 mt-0.5 sm:mt-1" />
        </div>
      </div>

      {/* Bottom Action: Circular Blue Arrow Button */}
      <div className="pt-2 sm:pt-3 mt-2 sm:mt-4 flex items-center justify-between">
        <span className="font-mono text-[8px] sm:text-[10px] text-slate-400 group-hover:text-[#0284C7] uppercase tracking-wider truncate">
          IEEE CIS
        </span>

        <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full border border-[#0284C7] text-[#0284C7] group-hover:bg-[#0284C7] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-2xs shrink-0">
          <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-0.5 transition-transform" />
        </div>
      </div>
    </motion.div>
  );
};
