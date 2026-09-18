'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, BookOpen, Download, Share2, ZoomIn, Printer } from 'lucide-react';

interface BroadsheetEdition {
  id: string;
  issueNo: string;
  volumeNo: string;
  date: string;
  dayDate: string;
  headline: string;
  deck: string;
  heroImage: string;
  imageCaption: string;
  photoCredit: string;
  byline: string;
  bylineRole: string;
  leadArticleP1: string;
  leadArticleP2: string;
  sidebarTitle: string;
  sidebarArticles: { title: string; blurb: string; page: string }[];
  secondStoryTitle: string;
  secondStoryBody: string;
  quoteTitle: string;
  quoteBody: string;
  highlights: string[];
  weather: string;
  temperature: string;
}

const BROADSHEET_EDITIONS: BroadsheetEdition[] = [
  {
    id: 'issue-08',
    issueNo: '08',
    volumeNo: 'VIII',
    date: 'MARCH 2026',
    dayDate: 'FRIDAY, MARCH 20, 2026',
    headline: 'AUTONOMOUS SWARMS MAP GPS-DENIED CAVERNS',
    deck: 'Student Robotics Cohort Validates Spiking Neural Odometry With 40% Lower Compute Overhead in Underground Testbeds',
    heroImage: '/events/robotics.jpg',
    imageCaption: 'Fig 1.1: Core engineering cohort validating autonomous rover ROS2 navigation and micro-transformer benchmarks in the robotics testbed.',
    photoCredit: 'STAFF PHOTO // IEEE CIS ARCHIVES',
    byline: 'By ARNAV SHARMA & DEV KULSHRESTHA',
    bylineRole: 'Autonomous Systems Research Wing',
    leadArticleP1: 'FOR OVER TWO CONTINUOUS ACADEMIC TERMS, the student research wing at IEEE Computational Intelligence Society MUJ has engineered a decentralized multi-agent subterranean mapping architecture. Utilizing bio-inspired spiking neural odometry coupled with asynchronous event-stream sensors, the autonomous micro-rovers navigate complex collapsed tunnels without access to satellite GPS or high-power LiDAR rigs.',
    leadArticleP2: 'Field tests conducted across mock obstacle tunnels demonstrated a 40 percent reduction in edge compute cycles compared to classical visual SLAM solutions. The system maintains spatial orientation with sub-two-centimeter localization drift per meter traversed, streaming live volumetric voxel maps across peer-to-peer radio frequency meshes to surface command stations in real time.',
    sidebarTitle: 'INDEX OF TODAY’S DISPATCH',
    sidebarArticles: [
      {
        title: 'NEUROMORPHIC RETINAL VISION',
        blurb: 'Microsecond latency motion tracking under high dynamic light shifts.',
        page: 'PAGE A3',
      },
      {
        title: 'TYPE-2 FUZZY MICROGRID',
        blurb: 'Takagi-Sugeno-Kang logic achieves 99.8% frequency regulation.',
        page: 'PAGE B1',
      },
      {
        title: 'WEBFORGE HACKATHON REVIEW',
        blurb: '180+ developers deploy 45 production software systems in 36 hours.',
        page: 'PAGE C2',
      },
    ],
    secondStoryTitle: 'STUDENT RESEARCHERS SECURE PEER-REVIEWED MILESTONE',
    secondStoryBody: 'The editorial board is pleased to announce four student preprints accepted for review across flagship IEEE Computational Intelligence Society colloquia. Covering neuromorphic vision, Pareto-optimal neural architecture search, and decentralized genetic swarm algorithms, these publications solidify Manipal University Jaipur as a premier center of undergraduate AI research.',
    quoteTitle: 'THE EDITORIAL CREED',
    quoteBody: 'We have built a research and hack culture that is rigorous, open-source, and permanent across our university.',
    highlights: [
      'ROS2 Humble & Spiking Neural Odometry on Low-Power Jetson Orin Nano',
      'Underground Multi-Agent Radio Frequency Mesh Telemetry Protocol',
      'Open-Source C++20 Voxel Octree Reconstruction Codebase Released',
    ],
    weather: 'CLEAR • CONVERGED',
    temperature: '24°C / 75°F',
  },
  {
    id: 'issue-07',
    issueNo: '07',
    volumeNo: 'VII',
    date: 'FEBRUARY 2026',
    dayDate: 'MONDAY, FEBRUARY 16, 2026',
    headline: 'REASONING AGENTS: TRANSFORMERS IN STUDENT HANDS',
    deck: 'Over 250 Engineers Convene For Masterclasses on Chain-of-Thought Search and Self-Correcting Code Generation',
    heroImage: '/events/oneiros.jpg',
    imageCaption: 'Fig 2.3: Student delegates constructing agentic workflows and fine-tuning open-weight foundation models during the Oneiros hack symposium.',
    photoCredit: 'PHOTO BY EDITORIAL MEDIA DESK',
    byline: 'By SANYA GUPTA & RISHAN MAZUMDAR',
    bylineRole: 'AI & Machine Learning Research Desk',
    leadArticleP1: 'THE EMERGENCE OF TEST-TIME COMPUTE and self-verifying reasoning agents has transformed student engineering at Manipal University Jaipur. In an intensive symposium hosted in the Academic Block amphitheater, student developers explored fine-tuning quantized 7B and 14B open-weight architectures directly on consumer GPU workstations using parameter-efficient QLoRA methodologies.',
    leadArticleP2: 'Working across autonomous code synthesis and multi-agent debate structures, participant teams demonstrated production pipelines capable of parsing university research documents, generating verifiable test suites, and orchestrating self-healing API services that recover from runtime exceptions without human intervention.',
    sidebarTitle: 'DISPATCH BULLETINS',
    sidebarArticles: [
      {
        title: 'LOCAL WEIGHTS VS. APIS',
        blurb: 'Why academic independence demands locally hosted inference clusters.',
        page: 'PAGE A4',
      },
      {
        title: 'AGENT REASONING BENCHMARKS',
        blurb: 'Step-by-step verification protocols tested against adversarial prompts.',
        page: 'PAGE B2',
      },
      {
        title: 'HARDWARE CORNER',
        blurb: 'Optimizing VRAM footprints with INT4 AWQ quantization scripts.',
        page: 'PAGE C1',
      },
    ],
    secondStoryTitle: 'LABORATORY REPORT: QUANTIZED INFERENCE ON EMBEDDED CHIPS',
    secondStoryBody: 'Our Edge AI cohort successfully ported a 42-kilobyte keyword-spotting neural classifier to a bare-metal ARM Cortex-M4 microcontroller. With 3.2× speedups over stock TensorFlow Lite micro-kernels, the project establishes practical foundations for zero-latency speech interfaces running on coin-cell batteries.',
    quoteTitle: 'TECHNICAL OUTLOOK',
    quoteBody: 'Theory without deployment is incomplete. Every formula we prove must ultimately compile and execute on silicon.',
    highlights: [
      'Chain-of-Thought Verification & Multi-Agent Orchestration Frameworks',
      'Local Model Execution on Campus Compute Workstations With Full Privacy',
      'Automated Test Generation and Self-Repairing Web Microservices',
    ],
    weather: 'MIST • STEADY',
    temperature: '19°C / 66°F',
  },
  {
    id: 'issue-06',
    issueNo: '06',
    volumeNo: 'VI',
    date: 'JANUARY 2026',
    dayDate: 'SATURDAY, JANUARY 24, 2026',
    headline: 'WEBFORGE CLOSES WITH 45 DEPLOYED AI SYSTEMS',
    deck: '36 Continuous Hours of Rapid Prototyping Yields Production-Ready Healthcare Triage, Vision Reticles & Mesh Networks',
    heroImage: '/events/webforge.jpg',
    imageCaption: 'Fig 3.1: Finalists demonstrating real-time computer vision gesture control and edge inference prototypes to industry judges in the main lab.',
    photoCredit: 'STAFF PHOTOGRAPHER // CIS ARCHIVE',
    byline: 'By SHUBHANSHU DIXIT & YUVRAJ SETHI',
    bylineRole: 'Hackathon Directorate & Press Corps',
    leadArticleP1: 'THE PREMIER WINTER HACKATHON OF MANIPAL UNIVERSITY JAIPUR, WebForge 2026, concluded Sunday evening following thirty-six continuous hours of intensive development. Over 180 undergraduate and graduate hackers formed 45 multidisciplinary squads to tackle challenges across medical diagnostics, autonomous rover telemetry, and distributed ledger security.',
    leadArticleP2: 'Supported by industry veterans and distinguished faculty mentors, teams pushed past minimum viable products to deliver fully containerized software with automated CI/CD pipelines, live database sync, and embedded hardware demonstrations. Cash bounties exceeding ₹60,000 were awarded to the top three innovations.',
    sidebarTitle: 'HACKATHON SPOTLIGHT',
    sidebarArticles: [
      {
        title: '1ST PRIZE: MEDISCAN',
        blurb: 'Multimodal chest radiograph segmentation with uncertainty calibration.',
        page: 'PAGE A2',
      },
      {
        title: '2ND PRIZE: ROVERNET',
        blurb: 'Low-bandwidth peer-to-peer telemetry protocol for rescue drones.',
        page: 'PAGE A5',
      },
      {
        title: 'INCUBATION PATHWAYS',
        blurb: 'Top five student teams receive university incubation grants.',
        page: 'PAGE B4',
      },
    ],
    secondStoryTitle: 'FACULTY COMMENDATION: FOSTERING CAMPUS-WIDE BUILDER CULTURE',
    secondStoryBody: 'Dr. Mahesh Jangid, Branch Counselor, commended the organizing committee for orchestrating a flawless hackathon environment. "WebForge demonstrates that when students are provided rigorous mentorship, low-latency compute resources, and challenging problem statements, world-class engineering naturally follows."',
    quoteTitle: 'THE BUILDER CREED',
    quoteBody: 'From zero to deployed cloud container in thirty-six hours—practical student engineering creates lasting industrial value.',
    highlights: [
      '180+ Developers Across 45 Teams Completed Production Deliverables',
      'Over ₹60,000 Awarded in Cash Prizes and University Incubation Grants',
      'Complete Open-Source Repository Archive Published for Public Access',
    ],
    weather: 'SUNNY • HIGH COMMUTE',
    temperature: '22°C / 72°F',
  },
];

export const NewsletterShowcase: React.FC = () => {
  const [activeEditionIndex, setActiveEditionIndex] = useState<number>(0);
  const [isReadingModalOpen, setIsReadingModalOpen] = useState<boolean>(false);

  const activeEdition = BROADSHEET_EDITIONS[activeEditionIndex];

  const handleNext = () => {
    setActiveEditionIndex((prev) => (prev + 1) % BROADSHEET_EDITIONS.length);
  };

  const handlePrev = () => {
    setActiveEditionIndex((prev) => (prev > 0 ? prev - 1 : BROADSHEET_EDITIONS.length - 1));
  };

  return (
    <section className="relative w-full bg-white text-[#1A1A1A] pt-20 sm:pt-32 pb-10 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden select-none">
      
      {/* Soft Ethereal Ambient Glow on Pure White Canvas */}
      <div
        className="absolute top-0 right-0 w-[750px] h-[600px] rounded-full pointer-events-none opacity-40"
        style={{
          background:
            'radial-gradient(circle at 70% 30%, rgba(224, 242, 254, 0.7) 0%, rgba(240, 249, 255, 0.25) 50%, transparent 75%)',
        }}
      />

      {/* Editorial Title & Issue Switcher Banner */}
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-2 sm:space-y-3 mb-6 sm:mb-14">
        <h1 className="font-serif font-black text-3xl sm:text-5xl lg:text-6xl text-[#111111] tracking-tight uppercase">
          The CIS Broadsheet
        </h1>

        <p className="font-serif italic text-slate-600 text-xs sm:text-base max-w-xl mx-auto">
          &ldquo;All the Code, Architecture Proofs and Research Dispatches Fit to Print.&rdquo;
        </p>
      </div>

      {/* ============================================================ */}
      {/* THE PHYSICAL NEWSPAPER BROADSHEET CONTAINER (ENHANCED DEPTH) */}
      {/* ============================================================ */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        
        <div className="relative w-full max-w-[840px]">
          
          {/* Layer 4: Deepest Ambient Drop Shadow Foundation */}
          <div
            className="absolute -inset-2 bg-black/[0.04] rounded-xs filter blur-xl transform translate-y-8 pointer-events-none"
          />

          {/* Layer 3: Aged Underneath Newsprint Sheet with Rotation */}
          <div
            className="absolute inset-0 bg-[#E5DDCB] rounded-[2px] shadow-[0_15px_35px_rgba(0,0,0,0.18)] border border-[#BDB19C] transform -rotate-[2deg] translate-y-4 -translate-x-3 pointer-events-none"
          />

          {/* Layer 2: Second Newsprint Sheet with Opposite Rotation */}
          <div
            className="absolute inset-0 bg-[#EFE7D7] rounded-[2px] shadow-[0_12px_28px_rgba(0,0,0,0.14)] border border-[#CBC0AB] transform rotate-[1.4deg] translate-y-2 translate-x-2 pointer-events-none"
          />

          {/* Layer 1.5: Immediate Under-Sheet for Physical Paper Thickness */}
          <div
            className="absolute inset-0 bg-[#F5EFE3] rounded-[2px] shadow-sm border border-[#DDD3BF] transform -rotate-[0.5deg] translate-y-1 -translate-x-1 pointer-events-none"
          />

          {/* Layer 1: Top Active Newspaper Broadsheet with Realistic 3D Pop */}
          <motion.div
            key={activeEdition.id}
            initial={{ opacity: 0, scale: 0.98, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            onClick={() => setIsReadingModalOpen(true)}
            className="relative bg-[#FAF6EE] text-[#111111] rounded-[2px] p-4 sm:p-10 shadow-[0_30px_80px_-15px_rgba(0,0,0,0.28),0_15px_35px_-5px_rgba(0,0,0,0.14),0_0_0_1px_rgba(0,0,0,0.06)] border-2 border-[#D2C7B0] font-serif cursor-pointer hover:shadow-[0_40px_95px_-12px_rgba(2,132,199,0.3),0_20px_40px_-5px_rgba(0,0,0,0.18)] hover:-translate-y-1 transition-all duration-300 group overflow-hidden"
            style={{
              backgroundImage: `radial-gradient(rgba(0,0,0,0.035) 1px, transparent 1px)`,
              backgroundSize: '10px 10px',
            }}
          >
            {/* REALISTIC 3D HORIZONTAL CENTERFOLD CREASE */}
            <div className="absolute top-[50%] left-0 right-0 h-6 -translate-y-1/2 pointer-events-none z-20 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-b from-transparent via-black/[0.1] to-transparent" />
              <div className="w-full h-[1.5px] bg-black/20 shadow-[0_1px_2px_rgba(255,255,255,0.7)]" />
            </div>

            {/* REALISTIC LEFT SPINAL FOLD SHADOW */}
            <div className="absolute top-0 bottom-0 left-0 w-5 bg-gradient-to-r from-black/12 via-black/[0.04] to-transparent pointer-events-none z-20" />

            {/* AUTHENTIC CIS LOGO EMBLEM STAMP IN THE CORNER (Replaces Dotted Circle) */}
            <div className="absolute top-16 sm:top-20 right-6 sm:right-10 pointer-events-none z-20 transform rotate-[-8deg] opacity-85 group-hover:opacity-100 transition-opacity">
              <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center p-1.5 filter drop-shadow-[0_4px_12px_rgba(2,132,199,0.35)]">
                <img
                  src="/logo-mark.png"
                  alt="IEEE CIS Logo Emblem Seal"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* -------------------------------------------------------- */}
            {/* TOP HEADER: EAR BOXES & FOLIO LINE                       */}
            {/* -------------------------------------------------------- */}
            <div className="border-b border-black/40 pb-2 mb-2 flex items-center justify-between font-mono text-[9px] text-[#444444] uppercase tracking-wider">
              {/* Left Ear Box */}
              <div className="text-left space-y-0.5">
                <span className="font-bold text-black block">MUJ CAMPUS EDITION</span>
                <span className="text-[8px] text-slate-600 block">WEATHER: {activeEdition.weather} • {activeEdition.temperature}</span>
              </div>

              {/* Center Motto */}
              <div className="hidden md:block font-serif italic text-[11px] text-[#333333] text-center font-medium">
                &ldquo;All the Code, Architecture Proofs and Research Dispatches Fit to Print&rdquo;
              </div>

              {/* Right Ear Box */}
              <div className="text-right space-y-0.5">
                <span className="font-bold text-[#0284C7] block">VOL. {activeEdition.volumeNo} • NO. {activeEdition.issueNo}</span>
                <span className="text-[8px] text-slate-600 block">PRICE: GRATIS / OPEN ACCESS</span>
              </div>
            </div>

            {/* -------------------------------------------------------- */}
            {/* GRAND OXFORD RULES & BROADSHEET MASTHEAD                 */}
            {/* -------------------------------------------------------- */}
            <div className="border-t-[3px] border-b border-black py-2 my-1 text-center">
              <h2 className="font-serif font-black text-3xl sm:text-5xl md:text-6xl tracking-[0.12em] sm:tracking-[0.16em] text-[#0A0A0A] uppercase leading-none select-none">
                THE CIS SPECTATOR
              </h2>
              <div className="font-serif italic text-xs sm:text-sm text-[#444444] tracking-widest mt-2 flex items-center justify-center gap-3">
                <span className="h-px w-8 bg-black/40 inline-block" />
                <span>The Journal of the IEEE Computational Intelligence Society • Manipal University Jaipur</span>
                <span className="h-px w-8 bg-black/40 inline-block" />
              </div>
            </div>

            {/* DATELINE BAR (Between double hairline rules) */}
            <div className="border-t border-b-[2px] border-black my-1 py-1 flex flex-wrap items-center justify-between font-mono text-[10px] font-bold text-[#222222] uppercase tracking-wider px-1">
              <span>JAIPUR, RAJASTHAN</span>
              <span>{activeEdition.dayDate}</span>
              <span className="text-[#0284C7] font-black">24 PAGES IN FOUR SECTIONS</span>
              <span>ISSN 2456-981X</span>
            </div>

            {/* -------------------------------------------------------- */}
            {/* MASSIVE 8-COLUMN BANNER HEADLINE                         */}
            {/* -------------------------------------------------------- */}
            <div className="pt-3 pb-2 text-center space-y-2 border-b border-black/30">
              <h3 className="font-serif font-black text-2xl sm:text-3xl md:text-4xl text-[#0A0A0A] tracking-tight uppercase leading-[1.08] select-none">
                {activeEdition.headline}
              </h3>
              <p className="font-serif italic text-xs sm:text-sm text-slate-700 max-w-2xl mx-auto leading-snug">
                {activeEdition.deck}
              </p>
            </div>

            {/* -------------------------------------------------------- */}
            {/* 3-COLUMN NEWSPAPER FRONT-PAGE BODY                       */}
            {/* -------------------------------------------------------- */}
            <div className="pt-4 grid grid-cols-1 md:grid-cols-12 gap-5 text-[#111111]">
              
              {/* Left Column: Sidebar Index & Secondary Story */}
              <div className="md:col-span-3 border-b md:border-b-0 md:border-r border-black/25 pb-4 md:pb-0 pr-3 space-y-4">
                
                {/* Index Box */}
                <div className="border-2 border-black p-3 bg-white/50 space-y-2">
                  <span className="font-mono text-[9px] font-bold text-black uppercase tracking-widest block border-b border-black pb-1">
                    {activeEdition.sidebarTitle}
                  </span>
                  <div className="space-y-2.5 font-serif text-[11px] leading-tight">
                    {activeEdition.sidebarArticles.map((art, i) => (
                      <div key={i} className="space-y-0.5 border-b border-black/10 last:border-0 pb-1.5">
                        <div className="flex items-baseline justify-between font-bold text-black text-[10px]">
                          <span>{art.title}</span>
                          <span className="font-mono text-[8px] text-[#0284C7] shrink-0 ml-1">{art.page}</span>
                        </div>
                        <p className="text-slate-600 text-[10px] leading-snug">{art.blurb}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Secondary Story Block */}
                <div className="space-y-1.5 pt-1">
                  <span className="font-mono text-[8px] font-bold text-[#0284C7] uppercase tracking-wider block">
                    CAMPUS RESEARCH // BULLETIN
                  </span>
                  <h4 className="font-serif font-black text-xs uppercase leading-tight text-black">
                    {activeEdition.secondStoryTitle}
                  </h4>
                  <p className="font-serif text-[10px] text-slate-700 leading-relaxed text-justify">
                    {activeEdition.secondStoryBody}
                  </p>
                </div>
              </div>

              {/* Middle Column: Center Photo & Lead Story Continuation */}
              <div className="md:col-span-6 border-b md:border-b-0 md:border-r border-black/25 pb-4 md:pb-0 pr-4 space-y-3">
                
                {/* Main Newsprint Photograph with Solid Black Border & Halftone Feel */}
                <div className="space-y-1.5">
                  <div className="relative aspect-[16/10] w-full bg-slate-200 border-2 border-black shadow-xs overflow-hidden">
                    <img
                      src={activeEdition.heroImage}
                      alt={activeEdition.headline}
                      className="w-full h-full object-cover filter contrast-[1.08] grayscale-[20%] group-hover:grayscale-0 group-hover:scale-102 transition-all duration-500"
                    />
                  </div>
                  <div className="flex items-start justify-between gap-2 text-[10px] font-serif text-slate-700 leading-tight">
                    <span className="italic">{activeEdition.imageCaption}</span>
                    <span className="font-mono text-[8px] text-slate-500 shrink-0 uppercase font-bold">
                      {activeEdition.photoCredit}
                    </span>
                  </div>
                </div>

                {/* Byline */}
                <div className="border-t border-b border-black/20 py-1 flex items-center justify-between font-mono text-[9px] text-[#333333]">
                  <span className="font-bold text-black uppercase">{activeEdition.byline}</span>
                  <span className="text-slate-500 uppercase">{activeEdition.bylineRole}</span>
                </div>

                {/* Lead Story Paragraph with Dramatic Newspaper Drop Cap */}
                <div className="font-serif text-xs text-[#111111] leading-relaxed text-justify space-y-2.5">
                  <p>
                    <span className="float-left text-5xl font-serif font-black leading-[0.75] pr-2 pt-1 text-black select-none">
                      {activeEdition.leadArticleP1.charAt(0)}
                    </span>
                    {activeEdition.leadArticleP1.slice(1)}
                  </p>
                  <p>{activeEdition.leadArticleP2}</p>
                </div>
              </div>

              {/* Right Column: Editorial Quote, Highlights & Quick Read CTA */}
              <div className="md:col-span-3 flex flex-col justify-between space-y-4">
                
                {/* Pull Quote Box */}
                <div className="border-l-2 border-black pl-3 py-1 space-y-1">
                  <span className="font-mono text-[8px] font-bold text-[#0284C7] uppercase tracking-wider block">
                    {activeEdition.quoteTitle}
                  </span>
                  <p className="font-serif italic text-xs font-bold text-black leading-snug">
                    &ldquo;{activeEdition.quoteBody}&rdquo;
                  </p>
                </div>

                {/* Bullet Highlights */}
                <div className="space-y-2 border-t border-black/20 pt-2 font-serif text-[10px] text-slate-800">
                  <span className="font-mono text-[8px] font-bold uppercase tracking-wider text-black block">
                    KEY MILESTONES:
                  </span>
                  <ul className="space-y-1.5 list-disc pl-3 leading-snug">
                    {activeEdition.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Unfold Action Box */}
                <div className="p-3 bg-white/70 border border-black/30 rounded-xs space-y-2 text-center group-hover:border-[#0284C7] transition-colors">
                  <div className="flex items-center justify-center gap-1.5 text-[#0284C7] font-mono text-[10px] font-bold uppercase">
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span>CLICK TO UNFOLD</span>
                  </div>
                  <p className="font-serif italic text-[10px] text-slate-500 leading-tight">
                    Read full multi-page spread and high-resolution figures.
                  </p>
                </div>

                {/* Barcode & Postal Notice (Classic Newspaper Footprint) */}
                <div className="pt-2 border-t border-black/30 flex items-center justify-between">
                  {/* Simulated Barcode */}
                  <div className="flex items-center gap-[2px] h-6">
                    {[3, 1, 2, 4, 1, 3, 2, 1, 4, 2, 1, 3, 1, 2, 4].map((w, idx) => (
                      <div
                        key={idx}
                        className="h-full bg-black"
                        style={{ width: `${w}px` }}
                      />
                    ))}
                  </div>
                  <span className="font-mono text-[8px] text-slate-500">9 772456 981008</span>
                </div>

              </div>
            </div>

            {/* -------------------------------------------------------- */}
            {/* BOTTOM POSTAL / PRINT PRESS FOOTNOTE LINE               */}
            {/* -------------------------------------------------------- */}
            <div className="mt-6 pt-2 border-t border-black/40 flex flex-wrap items-center justify-between font-mono text-[8px] text-[#555555] uppercase tracking-wider">
              <span>REGISTERED ARCHIVE #6248 • PRINT RUN: 1,500 COPIES</span>
              <span>PAGE A1 // FRONT COVER</span>
              <span>PRESS: JAIPUR TELEGRAPH CO. • ALL RIGHTS RESERVED</span>
            </div>

          </motion.div>
        </div>

        {/* ---------------------------------------------------------- */}
        {/* PHYSICAL CONTROLS (PREV / NEXT / ISSUE CAROUSEL)           */}
        {/* ---------------------------------------------------------- */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full bg-white hover:bg-[#0284C7] text-[#111111] hover:text-white border border-black/20 transition-all shadow-xs cursor-pointer"
            aria-label="Previous Broadsheet Edition"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <span className="font-mono text-xs font-bold text-slate-600 bg-white/80 px-4 py-2 rounded-full border border-black/10 shadow-2xs">
            EDITION {activeEditionIndex + 1} OF {BROADSHEET_EDITIONS.length}
          </span>

          <button
            onClick={handleNext}
            className="p-3 rounded-full bg-white hover:bg-[#0284C7] text-[#111111] hover:text-white border border-black/20 transition-all shadow-xs cursor-pointer"
            aria-label="Next Broadsheet Edition"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>

      {/* ============================================================ */}
      {/* FULL BROADSHEET UNFOLD MODAL (2-PAGE SPREAD VIEW)            */}
      {/* ============================================================ */}
      <AnimatePresence>
        {isReadingModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsReadingModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-[2px] bg-[#FAF6EE] text-[#111111] p-6 sm:p-10 shadow-2xl space-y-6 font-serif border-2 border-[#D2C7B0]"
            >
              {/* Modal Top Header Bar */}
              <div className="border-t-2 border-b-2 border-black py-3 flex items-center justify-between">
                <div>
                  <span className="font-mono text-[10px] font-bold text-[#0284C7] tracking-wider block uppercase">
                    THE COMPLETE UNABRIDGED BROADSHEET • VOLUME {activeEdition.volumeNo}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-black uppercase tracking-tight">
                    {activeEdition.headline}
                  </h2>
                </div>
                <button
                  onClick={() => setIsReadingModalOpen(false)}
                  className="p-2 rounded-full bg-black/5 hover:bg-black hover:text-white text-black transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* High-Resolution Hero Picture */}
              <div className="space-y-1.5">
                <div className="aspect-[21/9] w-full overflow-hidden border-2 border-black bg-slate-200 shadow-sm">
                  <img
                    src={activeEdition.heroImage}
                    alt={activeEdition.headline}
                    className="w-full h-full object-cover filter contrast-[1.05]"
                  />
                </div>
                <div className="flex items-center justify-between text-xs font-serif text-slate-600">
                  <span className="italic">{activeEdition.imageCaption}</span>
                  <span className="font-mono text-[9px] text-slate-500 uppercase font-bold">
                    {activeEdition.photoCredit}
                  </span>
                </div>
              </div>

              {/* Complete Article Spread Content */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-justify font-serif text-xs sm:text-sm leading-relaxed text-[#111111]">
                <div className="space-y-3">
                  <p>
                    <span className="float-left text-5xl font-serif font-black leading-[0.75] pr-2 pt-1 text-black select-none">
                      {activeEdition.leadArticleP1.charAt(0)}
                    </span>
                    {activeEdition.leadArticleP1.slice(1)}
                  </p>
                  <p>{activeEdition.leadArticleP2}</p>
                </div>

                <div className="space-y-3">
                  <div className="p-4 bg-white/60 border-l-4 border-black space-y-1">
                    <span className="font-mono text-[9px] font-bold text-[#0284C7] uppercase block">
                      {activeEdition.quoteTitle}
                    </span>
                    <p className="font-serif italic text-sm font-bold text-black">
                      &ldquo;{activeEdition.quoteBody}&rdquo;
                    </p>
                  </div>

                  <p>{activeEdition.secondStoryBody}</p>

                  <div className="p-4 border border-black/20 bg-white/70 space-y-2">
                    <span className="font-mono text-[10px] font-bold text-black uppercase block">
                      ARCHIVAL HIGHLIGHTS:
                    </span>
                    <ul className="space-y-1 list-disc pl-4 text-xs text-slate-700">
                      {activeEdition.highlights.map((h, idx) => (
                        <li key={idx}>{h}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Modal Footer Controls */}
              <div className="pt-4 border-t-2 border-black flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
                <span className="text-slate-500 font-semibold">
                  PUBLISHED BY IEEE CIS MUJ EDITORIAL BOARD • REPOSITORY #6248
                </span>
                
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => window.print()}
                    className="px-4 py-2 rounded-full border border-black/30 hover:border-black text-black font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer"
                  >
                    <Printer className="w-4 h-4" />
                    <span>PRINT PAGE</span>
                  </button>

                  <a
                    href="https://www.instagram.com/ieee.cismuj/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 rounded-full bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow-sm cursor-pointer"
                  >
                    <span>INSTAGRAM DISPATCH</span>
                  </a>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
