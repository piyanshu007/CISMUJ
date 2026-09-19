'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS, ProjectCaseStudy } from '@/data/projects';
import { ArrowRight } from 'lucide-react';
import { ProjectWaveHero } from './projects/ProjectWaveHero';
import { ProjectCard, DisplayProjectItem } from './projects/ProjectCard';
import { ProjectDetailModal } from './projects/ProjectDetailModal';

export const ProjectsGrid: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);
  const [showAllModal, setShowAllModal] = useState<boolean>(false);

  // Map the 3 primary showcase projects from our real club portfolio
  const showcaseProjects: DisplayProjectItem[] = [
    {
      caseStudy: PROJECTS[0], // Neuro-Swarm
      number: '01',
      tag: 'AI / ML',
      customTitle: 'Project Alpha',
      realName: 'Decentralized Neuro-Swarm',
      description: 'A machine learning model for real-time pattern recognition in dynamic systems.',
      image: PROJECTS[0]?.heroImage || '/events/robotics.jpg',
    },
    {
      caseStudy: PROJECTS[3], // Neuromorphic Event Vision
      number: '02',
      tag: 'Computer Vision',
      customTitle: 'Project Beta',
      realName: 'Neuromorphic Event Vision',
      description: 'Vision-based system for automated object detection and classification.',
      image: PROJECTS[3]?.heroImage || '/events/webforge.jpg',
    },
    {
      caseStudy: PROJECTS[1], // Adaptive Type-2 Fuzzy Microgrid
      number: '03',
      tag: 'Optimisation',
      customTitle: 'Project Gamma',
      realName: 'Adaptive Type-2 Microgrid',
      description: 'An adaptive optimisation framework for complex, real-world problems.',
      image: PROJECTS[1]?.heroImage || '/gallery/workshop.jpg',
    },
  ];

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
      {/* PART 1: HERO SECTION                                         */}
      {/* ============================================================ */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-10 lg:px-12 pt-16 sm:pt-28 pb-3 sm:pb-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-6 lg:gap-8 items-center relative z-20">
          
          {/* Left Column: Eyebrow, Heading, Subtitle, CTA */}
          <div className="lg:col-span-5 space-y-2.5 sm:space-y-4 relative z-20">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2"
            >
              <div className="w-8 h-px bg-[#0284C7]" />
              <span className="font-mono text-[11px] font-bold text-[#0284C7] tracking-widest uppercase">
                OUR WORK
              </span>
              <div className="w-8 h-px bg-[#0284C7]" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-3xl sm:text-5xl lg:text-[4rem] font-sans font-light text-[#1E293B] tracking-tight leading-[1.05]">
                Projects
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-1 text-slate-500 font-sans text-xs sm:text-[15px] leading-relaxed max-w-md"
            >
              <p className="font-medium text-slate-700">Ideas into intelligent systems.</p>
              <p>
                Exploring, building and applying computational intelligence to solve real-world problems.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-1"
            >
              <button
                onClick={() => setShowAllModal(true)}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#0284C7] text-[#0284C7] hover:bg-[#0284C7] hover:text-white flex items-center justify-center transition-all duration-300 group cursor-pointer shadow-xs hover:shadow-md"
                aria-label="View All Projects"
              >
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </motion.div>
          </div>

          {/* Right Column: Wave Line + 3D Ribbon Artwork */}
          <ProjectWaveHero />
        </div>
      </div>

      {/* ============================================================ */}
      {/* PART 2: PROJECT CARDS ROW                                    */}
      {/* ============================================================ */}
      <div className="w-full border-t border-slate-100/90 bg-white py-3 sm:py-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6 items-stretch">
            {/* 3 Real Club Project Cards */}
            {showcaseProjects.map((projectItem, index) => (
              <ProjectCard
                key={projectItem.number}
                projectItem={projectItem}
                cardIndex={index}
                onSelect={setSelectedProject}
              />
            ))}

            {/* 4th Card: "MORE PROJECTS" Teaser Card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -4 }}
              onClick={() => setShowAllModal(true)}
              className="p-6 rounded-2xl bg-gradient-to-b from-slate-50/70 to-sky-50/20 border border-slate-200/80 hover:border-[#0284C7] shadow-xs hover:shadow-[0_12px_28px_rgba(2,132,199,0.12)] transition-all duration-300 flex flex-col justify-between relative overflow-hidden group cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <div className="w-6 h-px bg-[#0284C7]" />
                <span className="font-mono text-[10px] font-bold text-slate-500 tracking-wider uppercase group-hover:text-[#0284C7] transition-colors">
                  MORE PROJECTS
                </span>
              </div>

              <div className="my-auto py-6">
                <h3 className="text-2xl sm:text-[1.65rem] font-sans font-normal text-[#1E293B] leading-snug tracking-tight">
                  Turning
                  <br />
                  possibilities
                  <br />
                  into practical
                  <br />
                  intelligence.
                </h3>
              </div>

              <div className="pt-4 flex items-center justify-between relative z-10">
                <div className="w-10 h-10 rounded-full border border-[#0284C7] text-[#0284C7] group-hover:bg-[#0284C7] group-hover:text-white flex items-center justify-center transition-all duration-300">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
                <span className="font-mono text-[10px] font-bold text-slate-400 group-hover:text-[#0284C7]">
                  {PROJECTS.length} REPOSITORIES
                </span>
              </div>

              <svg
                className="absolute -bottom-4 -right-4 w-36 h-36 pointer-events-none opacity-40 group-hover:opacity-75 transition-opacity"
                viewBox="0 0 120 120"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M 120,20 C 80,40 40,80 10,120"
                  stroke="#0284C7"
                  strokeWidth="1.2"
                />
                <circle cx="65" cy="65" r="2.5" fill="#0284C7" />
                <circle cx="100" cy="35" r="1.5" fill="#38BDF8" />
              </svg>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Case Study Technical Specs and Catalog Modals */}
      <ProjectDetailModal
        selectedProject={selectedProject}
        showAllModal={showAllModal}
        onCloseSelected={() => setSelectedProject(null)}
        onCloseAll={() => setShowAllModal(false)}
        onSelectProject={setSelectedProject}
      />
    </section>
  );
};
