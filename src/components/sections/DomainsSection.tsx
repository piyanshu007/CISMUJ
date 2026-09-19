'use client';

import React, { useState } from 'react';
import { TiltCard } from '../ui/TiltCard';
import {
  Brain,
  Cpu,
  Code2,
  Terminal,
  BookOpen,
  Calendar,
  Palette,
  Megaphone,
  CheckCircle2,
} from 'lucide-react';

interface DomainItem {
  id: string;
  code: string;
  category: 'TECHNICAL' | 'NON-TECHNICAL';
  title: string;
  badge: string;
  description: string;
  skills: string[];
  projects: string[];
  icon: React.ReactNode;
}

const DOMAINS: DomainItem[] = [
  {
    id: 'ai-ml',
    code: 'DOM_01',
    category: 'TECHNICAL',
    title: 'AI & DEEP LEARNING',
    badge: 'CORE TECHNICAL',
    description:
      'Focuses on neural networks, convolutional vision architectures, transformer fine-tuning, and deploying generative AI workflows.',
    skills: ['PyTorch', 'OpenCV', 'Transformers', 'HuggingFace', 'Computer Vision'],
    projects: ['Campus LLM Assistant', 'Live Object Tracking System'],
    icon: <Brain className="w-6 h-6 text-sky-600" />,
  },
  {
    id: 'robotics-hardware',
    code: 'DOM_02',
    category: 'TECHNICAL',
    title: 'ROBOTICS & EMBEDDED AI',
    badge: 'HARDWARE LAB',
    description:
      'Engineers autonomous ground rovers, microcontrollers, edge sensor fusion, and TinyML intelligence deployed on physical circuits.',
    skills: ['ROS 2', 'ESP32 / Arduino', 'Raspberry Pi', 'TinyML', 'Fuzzy Control'],
    projects: ['Autonomous Vision Rover', 'Obstacle Avoidance Drone'],
    icon: <Cpu className="w-6 h-6 text-sky-600" />,
  },
  {
    id: 'web-dev',
    code: 'DOM_03',
    category: 'TECHNICAL',
    title: 'WEB & APP DEVELOPMENT',
    badge: 'FULL STACK',
    description:
      'Builds official chapter portals, hackathon registration dashboards, live scoring leaderboards, and interactive web tools.',
    skills: ['Next.js / React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    projects: ['IEEE CIS MUJ Platform', 'WebForge Hackathon Portal'],
    icon: <Code2 className="w-6 h-6 text-sky-600" />,
  },
  {
    id: 'competitive-ds',
    code: 'DOM_04',
    category: 'TECHNICAL',
    title: 'COMPETITIVE PROGRAMMING & DATA SCIENCE',
    badge: 'ALGORITHMIC',
    description:
      'Tackles complex algorithmic problems, data analytics benchmarks, evolutionary optimization, and Kaggle datathons.',
    skills: ['Python / C++', 'Data Structures', 'Genetic Schedulers', 'Pandas & NumPy'],
    projects: ['University Exam Timetable Optimizer', 'CipherClash Engine'],
    icon: <Terminal className="w-6 h-6 text-sky-600" />,
  },
  {
    id: 'research-pubs',
    code: 'DOM_05',
    category: 'TECHNICAL',
    title: 'RESEARCH & PUBLICATIONS',
    badge: 'ACADEMIC TRACK',
    description:
      'Guides student researchers in literature surveys, mathematical formalizations, and authoring preprints for IEEE conferences.',
    skills: ['LaTeX', 'IEEE Xplore', 'Statistical Rigor', 'Paper Authoring'],
    projects: ['Type-2 Fuzzy Logic Survey', 'Neuromorphic Benchmark Paper'],
    icon: <BookOpen className="w-6 h-6 text-sky-600" />,
  },
  {
    id: 'events-management',
    code: 'DOM_06',
    category: 'NON-TECHNICAL',
    title: 'EVENTS & LOGISTICS',
    badge: 'OPERATIONS',
    description:
      'Coordinates 36-hour hackathons, university seminar rooms, speaker itineraries, anchor coordination, and overall event execution.',
    skills: ['Event Planning', 'Venue Logistics', 'Team Leadership', 'Budgeting'],
    projects: ['WebForge 2024 Execution', 'Freshers Orientation 2024'],
    icon: <Calendar className="w-6 h-6 text-slate-800" />,
  },
  {
    id: 'design-media',
    code: 'DOM_07',
    category: 'NON-TECHNICAL',
    title: 'CREATIVE DESIGN & MEDIA',
    badge: 'BRANDING & UI/UX',
    description:
      'Creates the chapter visual identity, UI/UX designs, social media graphics, event banners, stickers, and cinematic recap videos.',
    skills: ['Figma', 'Adobe Illustrator', 'Photoshop', 'Premiere Pro', 'Motion Design'],
    projects: ['Chapter Brand Guidelines', 'WebForge Swag & Visual Identity'],
    icon: <Palette className="w-6 h-6 text-slate-800" />,
  },
  {
    id: 'pr-sponsorships',
    code: 'DOM_08',
    category: 'NON-TECHNICAL',
    title: 'PUBLIC RELATIONS & OUTREACH',
    badge: 'CORPORATE PR',
    description:
      'Drives corporate sponsorships, collaborates with tech partners, invites keynote IEEE speakers, and manages external communications.',
    skills: ['Corporate Outreach', 'Sponsorship Pitching', 'Networking', 'PR Strategy'],
    projects: ['₹75K+ Hackathon Sponsorships', 'IEEE Distinguished Speaker Series'],
    icon: <Megaphone className="w-6 h-6 text-slate-800" />,
  },
];

export const DomainsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const categories = ['ALL', 'TECHNICAL', 'NON-TECHNICAL'];

  const filteredDomains = activeCategory === 'ALL'
    ? DOMAINS
    : DOMAINS.filter((d) => d.category === activeCategory);

  return (
    <section id="domains" className="py-10 sm:py-20 lg:py-24 bg-white/80 backdrop-blur-xs border-b border-slate-200 select-none relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-[#0284C7]/30 text-[#0284C7] font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">
            <span>02 // OPERATIONAL DIVISIONS</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-black text-[#0F172A] tracking-tight">
            Domains &amp; <span className="text-[#0284C7]">Wings</span>
          </h2>
          <p className="font-sans text-slate-600 text-xs sm:text-base max-w-2xl">
            Explore the specialized technical and management tracks powering IEEE CIS MUJ. Members contribute across multiple divisions.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-6 sm:mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#0284C7] text-white shadow-[0_2px_10px_rgba(2,132,199,0.25)]'
                  : 'bg-white text-[#0F172A] hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat === 'ALL' ? 'ALL DOMAINS (8)' : `${cat} WINGS`}
            </button>
          ))}
        </div>

        {/* Domains Grid with 3D TiltCards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredDomains.map((domain) => (
            <TiltCard
              key={domain.id}
              maxTilt={5}
              className="p-4 sm:p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#0284C7] hover:shadow-[0_8px_30px_rgba(2,132,199,0.15)] transition-all flex flex-col justify-between group space-y-4 sm:space-y-6"
            >
              {/* Top Header */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center group-hover:bg-[#0284C7] group-hover:text-white transition-all text-[#0284C7]">
                    {domain.icon}
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-[#0284C7] font-mono text-[10px] font-bold uppercase tracking-wider">
                    {domain.badge}
                  </span>
                </div>

                <div>
                  <span className="font-mono text-[11px] text-[#0284C7] font-bold uppercase block">
                    {domain.code} // {domain.category}
                  </span>
                  <h3 className="font-display font-extrabold text-[#0F172A] text-lg uppercase mt-1 group-hover:text-[#0284C7] transition-colors leading-tight">
                    {domain.title}
                  </h3>
                </div>

                <p className="font-sans text-slate-600 text-xs leading-relaxed">
                  {domain.description}
                </p>
              </div>

              {/* Skills & Focus */}
              <div className="space-y-3 pt-4 border-t border-slate-100 font-mono text-xs">
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mb-1.5">
                    // CORE TOOLKIT
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {domain.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded bg-slate-50 border border-slate-200 text-slate-700 text-[10px] font-bold"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mb-1">
                    // KEY INITIATIVE
                  </span>
                  <div className="text-slate-800 font-sans text-xs font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                    <span>{domain.projects[0]}</span>
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Domain Recruitment CTA Box */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-white border border-[#0284C7]/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1">
            <h4 className="font-display font-extrabold text-[#0F172A] text-lg uppercase">
              WANT TO JOIN A DOMAIN AT IEEE CIS MUJ?
            </h4>
            <p className="text-slate-600 font-sans text-xs">
              Recruitments open every semester for freshmen and sophomores. No prior experience required—we provide training &amp; mentorship.
            </p>
          </div>

          <a
            href="https://www.instagram.com/ieee.cismuj/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-[#0284C7] hover:bg-[#0369A1] text-white font-mono text-xs font-bold uppercase tracking-wider shadow-sm transition-all cursor-pointer whitespace-nowrap"
          >
            APPLY FOR DOMAIN
          </a>
        </div>
      </div>
    </section>
  );
};
