'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { PROJECTS, ProjectCaseStudy } from '@/data/projects';
import { ArrowRight, X, Layers, Cpu, Activity, Zap, CheckCircle2 } from 'lucide-react';

export const ProjectsGrid: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);
  const [showAllModal, setShowAllModal] = useState<boolean>(false);

  // 3D Parallax Mouse Tracking for Hero Visual
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 120, damping: 20 });
  const rotateX = useTransform(smoothY, [-0.5, 0.5], ['7deg', '-7deg']);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], ['-8deg', '8deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Map the 3 primary showcase projects from our real club portfolio
  const displayProjects = [
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
    <section className="relative w-full min-h-screen bg-white text-[#0F172A] overflow-hidden select-none flex flex-col justify-between">
      
      {/* Soft ethereal ambient background glow */}
      <div
        className="absolute top-0 right-0 w-[950px] h-[750px] rounded-full pointer-events-none opacity-40"
        style={{
          background:
            'radial-gradient(circle at 70% 30%, rgba(224, 242, 254, 0.7) 0%, rgba(240, 249, 255, 0.25) 50%, transparent 75%)',
        }}
      />

      {/* ============================================================ */}
      {/* PART 1: HERO SECTION (1:1 Match with User Reference)        */}
      {/* ============================================================ */}
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-28 sm:pt-32 pb-10 sm:pb-14 relative z-10">
        
        {/* Sweeping Blue Wave Line with Cyan Constellation Marker Dots & Travelling Glossy Spheres (Passing OVER image) */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-30 overflow-visible"
          viewBox="0 0 1400 500"
          fill="none"
          preserveAspectRatio="none"
        >
          <defs>
            <radialGradient id="waveBallGrad" cx="35%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="30%" stopColor="#7DD3FC" />
              <stop offset="75%" stopColor="#0284C7" />
              <stop offset="100%" stopColor="#0369A1" />
            </radialGradient>
            <radialGradient id="waveBallCyan" cx="35%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#E0F2FE" />
              <stop offset="35%" stopColor="#38BDF8" />
              <stop offset="80%" stopColor="#0284C7" />
              <stop offset="100%" stopColor="#075985" />
            </radialGradient>
            <filter id="waveBallGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="2" stdDeviation="3.5" floodColor="#0284C7" floodOpacity="0.6" />
            </filter>
            {/* Extended continuous wave path for motion */}
            <path
              id="mainWaveTravelPath"
              d="M -50,380 C 260,380 400,290 620,350 C 840,410 960,220 1160,260 C 1280,290 1360,340 1480,360"
            />
            <path
              id="secondaryWaveTravelPath"
              d="M -50,420 C 300,440 500,330 740,390 C 980,450 1100,280 1380,340 C 1420,350 1460,360 1480,360"
            />
          </defs>

          {/* Visible Wave Paths */}
          <path
            d="M 60,380 C 260,380 400,290 620,350 C 840,410 960,220 1160,260 C 1280,290 1360,340 1460,360"
            stroke="#0284C7"
            strokeWidth="1.2"
            strokeOpacity="0.4"
          />
          <path
            d="M 80,420 C 300,440 500,330 740,390 C 980,450 1100,280 1380,340"
            stroke="#38BDF8"
            strokeWidth="0.8"
            strokeDasharray="4 4"
            strokeOpacity="0.3"
          />

          {/* Cyan Marker Dots along the wave paths */}
          <circle cx="620" cy="350" r="3" fill="#0284C7" />
          <circle cx="1160" cy="260" r="3" fill="#0284C7" />
          <circle cx="380" cy="330" r="2.5" fill="#38BDF8" />
          <circle cx="880" cy="300" r="2.5" fill="#38BDF8" />
          <circle cx="1280" cy="290" r="2.5" fill="#0284C7" />

          {/* --- TRAVELLING SPHERES (BALLS) ALONG THE WAVE --- */}
          {/* Ball 1: Primary Large Glossy Blue Sphere */}
          <g filter="url(#waveBallGlow)">
            <animateMotion dur="8.5s" repeatCount="indefinite">
              <mpath href="#mainWaveTravelPath" />
            </animateMotion>
            <circle r="7" fill="url(#waveBallGrad)" />
            <circle r="11" stroke="#38BDF8" strokeWidth="0.8" strokeOpacity="0.45" />
          </g>

          {/* Ball 2: Staggered Secondary Cyan Sphere */}
          <g filter="url(#waveBallGlow)">
            <animateMotion dur="8.5s" begin="-4.25s" repeatCount="indefinite">
              <mpath href="#mainWaveTravelPath" />
            </animateMotion>
            <circle r="5.5" fill="url(#waveBallCyan)" />
          </g>

          {/* Ball 3: Tertiary Sphere on Secondary Path */}
          <g filter="url(#waveBallGlow)">
            <animateMotion dur="10.5s" begin="-2.5s" repeatCount="indefinite">
              <mpath href="#secondaryWaveTravelPath" />
            </animateMotion>
            <circle r="5" fill="url(#waveBallGrad)" />
          </g>

          {/* Ball 4: Small Quick Photon */}
          <g filter="url(#waveBallGlow)">
            <animateMotion dur="6.5s" begin="-5s" repeatCount="indefinite">
              <mpath href="#mainWaveTravelPath" />
            </animateMotion>
            <circle r="4" fill="url(#waveBallCyan)" />
          </g>
        </svg>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center min-h-[460px] lg:min-h-[500px]">
          
          {/* Left Column: Eyebrow, Large "Projects" Title, Subtitle, CTA */}
          <div className="lg:col-span-5 space-y-6 z-10">
            
            {/* Eyebrow: —— OUR WORK —— */}
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

            {/* Massive Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-sans font-light text-[#1E293B] tracking-tight leading-[1.05]">
                Projects
              </h1>
            </motion.div>

            {/* Subtitle Lines */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-1 text-slate-500 font-sans text-sm sm:text-[15px] leading-relaxed max-w-md"
            >
              <p className="font-medium text-slate-700">Ideas into intelligent systems.</p>
              <p>
                Exploring, building and applying computational intelligence to solve real-world problems.
              </p>
            </motion.div>

            {/* Circular Arrow Button: ( → ) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-2"
            >
              <button
                onClick={() => setShowAllModal(true)}
                className="w-11 h-11 rounded-full border border-[#0284C7] text-[#0284C7] hover:bg-[#0284C7] hover:text-white flex items-center justify-center transition-all duration-300 group cursor-pointer shadow-xs hover:shadow-md"
                aria-label="View All Projects"
              >
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </motion.div>
          </div>

          {/* Right Column: 3D Translucent Glass Panes & Hypercube Visual with Interactive Parallax & Animation */}
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: 1200 }}
            className="lg:col-span-7 relative flex items-center justify-center min-h-[340px] sm:min-h-[400px] lg:min-h-[460px] cursor-pointer"
          >
            {/* 3D Floating Motion Container with Interactive Tilt */}
            <motion.div
              style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
              animate={{
                y: [-7, 7, -7],
                rotateZ: [-0.6, 0.6, -0.6],
              }}
              transition={{
                duration: 6.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative w-full max-w-[740px] flex items-center justify-center select-none"
            >
              {/* Breathing Ambient Holographic Aura Behind Artwork */}
              <motion.div
                animate={{
                  scale: [0.92, 1.1, 0.92],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-88 sm:h-88 bg-gradient-to-tr from-[#0284C7]/25 via-sky-400/20 to-transparent rounded-full blur-3xl pointer-events-none"
              />

              {/* Exact 3D Glass Artwork */}
              <img
                src="/projects-hero-cube.png"
                alt="3D Translucent Glass Panes with Neural Hypercube"
                className="w-full h-auto object-contain pointer-events-none select-none relative z-10 filter drop-shadow-[0_14px_34px_rgba(2,132,199,0.12)]"
              />

              {/* Glowing Neural Vertex Sparkle Beacons */}
              {/* Center Node Beacon */}
              <div className="absolute left-[50.2%] top-[41.5%] -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
                <motion.div
                  animate={{
                    scale: [1, 2.2, 1],
                    opacity: [0.8, 0, 0.8],
                  }}
                  transition={{
                    duration: 2.6,
                    repeat: Infinity,
                    ease: 'easeOut',
                  }}
                  className="w-4 h-4 rounded-full border border-sky-400 bg-sky-300/30"
                />
                <div className="absolute inset-0 m-auto w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_#38bdf8]" />
              </div>

              {/* Top Node Beacon */}
              <div className="absolute left-[46.3%] top-[25.2%] -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
                <motion.div
                  animate={{
                    scale: [1, 2],
                    opacity: [0.7, 0, 0.7],
                  }}
                  transition={{
                    duration: 2.3,
                    repeat: Infinity,
                    delay: 0.7,
                    ease: 'easeOut',
                  }}
                  className="w-3.5 h-3.5 rounded-full border border-cyan-400 bg-cyan-300/30"
                />
              </div>

              {/* Right Node Beacon */}
              <div className="absolute left-[55.5%] top-[30.2%] -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
                <motion.div
                  animate={{
                    scale: [1, 2],
                    opacity: [0.7, 0, 0.7],
                  }}
                  transition={{
                    duration: 2.8,
                    repeat: Infinity,
                    delay: 1.3,
                    ease: 'easeOut',
                  }}
                  className="w-3.5 h-3.5 rounded-full border border-sky-400 bg-sky-300/30"
                />
              </div>

              {/* Bottom Node Beacon */}
              <div className="absolute left-[55.5%] top-[52.4%] -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
                <motion.div
                  animate={{
                    scale: [1, 2],
                    opacity: [0.7, 0, 0.7],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: 1.9,
                    ease: 'easeOut',
                  }}
                  className="w-3.5 h-3.5 rounded-full border border-cyan-400 bg-cyan-300/30"
                />
              </div>

              {/* Holographic Glass Specular Light Shimmer Sweep */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none z-15 rounded-3xl">
                <motion.div
                  animate={{
                    x: ['-120%', '220%'],
                  }}
                  transition={{
                    duration: 5.5,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: 'easeInOut',
                  }}
                  className="w-1/3 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-25 filter blur-xs"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* PART 2: PROJECT CARDS ROW (1:1 Match with User Reference)    */}
      {/* ============================================================ */}
      <div className="w-full border-t border-slate-100/90 bg-white py-12 sm:py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            
            {/* 3 Real Club Project Cards */}
            {displayProjects.map((p, idx) => (
              <motion.div
                key={p.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-5 rounded-2xl bg-white border border-slate-200/80 hover:border-[#0284C7] shadow-xs hover:shadow-[0_12px_28px_rgba(2,132,199,0.12)] transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                onClick={() => setSelectedProject(p.caseStudy)}
              >
                <div>
                  {/* Top Bar: 01 ——  and Category Pill */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-slate-800">
                        {p.number}
                      </span>
                      <div className="w-5 h-px bg-slate-200" />
                    </div>
                    <span className="text-[11px] font-sans font-medium px-3 py-0.5 rounded-full bg-slate-100 text-slate-600 group-hover:bg-sky-50 group-hover:text-[#0284C7] transition-colors">
                      {p.tag}
                    </span>
                  </div>

                  {/* Real Project Photo Container */}
                  <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-5 bg-slate-100 border border-slate-100 group/img">
                    <img
                      src={p.image}
                      alt={p.realName}
                      className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700 filter contrast-[1.02]"
                    />
                    
                    {/* Subtle Futuristic Viewfinder / Reticle Frame */}
                    <div className="absolute inset-2 border border-sky-400/30 rounded-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Title & Real Project Subhead */}
                  <div className="space-y-1 mb-2">
                    <h3 className="text-lg sm:text-xl font-sans font-medium text-[#1E293B] group-hover:text-[#0284C7] transition-colors leading-snug">
                      {p.customTitle}
                    </h3>
                    <p className="font-mono text-[11px] font-bold text-[#0284C7] uppercase tracking-wider">
                      {p.realName}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-[13px] font-sans text-slate-500 leading-relaxed line-clamp-2 mb-4">
                    {p.description}
                  </p>
                </div>

                {/* View Details Link */}
                <div className="pt-3 border-t border-slate-100/90 flex items-center justify-between text-xs font-medium text-[#0284C7] group-hover:underline">
                  <span className="inline-flex items-center gap-1">
                    View Details
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="font-mono text-[10px] text-slate-400 group-hover:text-[#0284C7]">
                    {p.caseStudy.status}
                  </span>
                </div>
              </motion.div>
            ))}

            {/* 4th Card: "MORE PROJECTS" Teaser Card (1:1 with Reference) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -4 }}
              onClick={() => setShowAllModal(true)}
              className="p-6 rounded-2xl bg-gradient-to-b from-slate-50/70 to-sky-50/20 border border-slate-200/80 hover:border-[#0284C7] shadow-xs hover:shadow-[0_12px_28px_rgba(2,132,199,0.12)] transition-all duration-300 flex flex-col justify-between relative overflow-hidden group cursor-pointer"
            >
              {/* Top Eyebrow: —— MORE PROJECTS */}
              <div className="flex items-center gap-2">
                <div className="w-6 h-px bg-[#0284C7]" />
                <span className="font-mono text-[10px] font-bold text-slate-500 tracking-wider uppercase group-hover:text-[#0284C7] transition-colors">
                  MORE PROJECTS
                </span>
              </div>

              {/* Bold Editorial Message */}
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

              {/* Bottom Action: ( → ) Circular Button */}
              <div className="pt-4 flex items-center justify-between relative z-10">
                <div className="w-10 h-10 rounded-full border border-[#0284C7] text-[#0284C7] group-hover:bg-[#0284C7] group-hover:text-white flex items-center justify-center transition-all duration-300">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
                <span className="font-mono text-[10px] font-bold text-slate-400 group-hover:text-[#0284C7]">
                  {PROJECTS.length} REPOSITORIES
                </span>
              </div>

              {/* Bottom-Right Corner Decorative Arc Curve */}
              <svg
                className="absolute -bottom-4 -right-4 w-36 h-36 pointer-events-none opacity-40 group-hover:opacity-75 transition-opacity"
                viewBox="0 0 120 120"
                fill="none"
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

      {/* ============================================================ */}
      {/* INTERACTIVE CASE STUDY MODAL (Full Technical Specs)          */}
      {/* ============================================================ */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white border border-slate-200 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl space-y-6 relative text-[#0F172A]"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
                aria-label="Close Case Study"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="space-y-2 pr-10">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-[#0284C7] uppercase tracking-wider">
                    {selectedProject.code} // {selectedProject.category}
                  </span>
                  <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-mono font-bold">
                    {selectedProject.status}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-sans font-bold text-[#0F172A] tracking-tight">
                  {selectedProject.title}
                </h2>
                <p className="text-sm font-sans text-slate-600">{selectedProject.tagline}</p>
              </div>

              {/* Hero Image */}
              <div className="relative aspect-[21/9] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                <img
                  src={selectedProject.heroImage}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Key Metric Banner */}
              <div className="p-4 rounded-2xl bg-sky-50/80 border border-sky-200 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-mono font-bold text-slate-500 uppercase block">
                    BENCHMARK METRIC
                  </span>
                  <span className="text-xl sm:text-2xl font-sans font-extrabold text-[#0284C7]">
                    {selectedProject.keyMetric}
                  </span>
                </div>
                <span className="text-xs font-sans text-slate-600 text-right">
                  {selectedProject.metricLabel}
                </span>
              </div>

              {/* Problem vs Approach */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="font-mono font-bold text-slate-800 uppercase block">
                    THE PROBLEM
                  </span>
                  <p className="text-slate-600 leading-relaxed">{selectedProject.problem}</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="font-mono font-bold text-[#0284C7] uppercase block">
                    RESEARCH APPROACH
                  </span>
                  <p className="text-slate-600 leading-relaxed">{selectedProject.approach}</p>
                </div>
              </div>

              {/* Engineering Pipeline */}
              <div className="space-y-2">
                <span className="font-mono text-xs font-bold text-slate-800 uppercase block">
                  DATA PIPELINE FLOW
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs text-center">
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                    <span className="text-[10px] text-slate-400 block uppercase">INPUT</span>
                    <span className="font-semibold text-slate-700">{selectedProject.pipeline.input}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-sky-50 border border-sky-200">
                    <span className="text-[10px] text-[#0284C7] block uppercase">ENGINE</span>
                    <span className="font-semibold text-[#0284C7]">{selectedProject.pipeline.engine}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                    <span className="text-[10px] text-slate-400 block uppercase">OUTPUT</span>
                    <span className="font-semibold text-slate-700">{selectedProject.pipeline.output}</span>
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
                {selectedProject.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-mono font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ============================================================ */}
      {/* ALL PROJECTS CATALOG MODAL                                   */}
      {/* ============================================================ */}
      <AnimatePresence>
        {showAllModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white border border-slate-200 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl space-y-6 relative text-[#0F172A]"
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <h2 className="text-2xl font-sans font-bold text-[#0F172A]">
                    All Club Projects & Repositories
                  </h2>
                  <p className="text-xs font-sans text-slate-500">
                    Computational intelligence models developed by IEEE CIS MUJ student researchers
                  </p>
                </div>
                <button
                  onClick={() => setShowAllModal(false)}
                  className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
                  aria-label="Close All Projects"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {PROJECTS.map((proj) => (
                  <div
                    key={proj.id}
                    onClick={() => {
                      setShowAllModal(false);
                      setSelectedProject(proj);
                    }}
                    className="p-4 rounded-2xl bg-slate-50 hover:bg-sky-50/40 border border-slate-200 hover:border-[#0284C7] transition-all cursor-pointer flex gap-4 items-center group"
                  >
                    <img
                      src={proj.heroImage}
                      alt={proj.title}
                      className="w-20 h-20 rounded-xl object-cover shrink-0"
                    />
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono font-bold text-[#0284C7] uppercase">
                        {proj.category} // {proj.code}
                      </span>
                      <h4 className="text-sm font-sans font-bold text-slate-900 group-hover:text-[#0284C7] transition-colors leading-snug">
                        {proj.title}
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-1">{proj.tagline}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
