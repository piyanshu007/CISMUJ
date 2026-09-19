'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ProjectCaseStudy } from '@/data/projects';

export interface DisplayProjectItem {
  caseStudy: ProjectCaseStudy;
  number: string;
  tag: string;
  customTitle: string;
  realName: string;
  description: string;
  image: string;
}

interface ProjectCardProps {
  projectItem: DisplayProjectItem;
  cardIndex: number;
  onSelect: (project: ProjectCaseStudy) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  projectItem,
  cardIndex,
  onSelect,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: cardIndex * 0.1 }}
      whileHover={{ y: -4 }}
      className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 hover:border-[#0284C7] shadow-xs hover:shadow-[0_12px_28px_rgba(2,132,199,0.12)] transition-all duration-300 flex flex-col justify-between group cursor-pointer"
      onClick={() => onSelect(projectItem.caseStudy)}
    >
      <div>
        {/* Top Bar: 01 —— and Category Pill */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-slate-800">
              {projectItem.number}
            </span>
            <div className="w-5 h-px bg-slate-200" />
          </div>
          <span className="text-[11px] font-sans font-medium text-slate-500 group-hover:text-[#0284C7] transition-colors">
            {projectItem.tag}
          </span>
        </div>

        {/* Real Project Photo Container */}
        <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-5 bg-slate-100 border border-slate-100 group/img">
          <img
            src={projectItem.image}
            alt={projectItem.realName}
            className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700 filter contrast-[1.02]"
          />

          {/* Viewfinder Reticle Frame */}
          <div className="absolute inset-2 border border-sky-400/30 rounded-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Title & Real Project Subhead */}
        <div className="space-y-1 mb-2">
          <h3 className="text-lg sm:text-xl font-sans font-medium text-[#1E293B] group-hover:text-[#0284C7] transition-colors leading-snug">
            {projectItem.customTitle}
          </h3>
          <p className="font-mono text-[11px] font-bold text-[#0284C7] uppercase tracking-wider">
            {projectItem.realName}
          </p>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-[13px] font-sans text-slate-500 leading-relaxed line-clamp-2 mb-4">
          {projectItem.description}
        </p>
      </div>

      {/* View Details Link */}
      <div className="pt-3 border-t border-slate-100/90 flex items-center justify-between text-xs font-medium text-[#0284C7] group-hover:underline">
        <span className="inline-flex items-center gap-1">
          View Details
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </span>
        <span className="font-mono text-[10px] text-slate-400 group-hover:text-[#0284C7]">
          {projectItem.caseStudy.status}
        </span>
      </div>
    </motion.div>
  );
};
