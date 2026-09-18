'use client';

import React, { useState } from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { TiltCard } from '../ui/TiltCard';
import { NodenzaButton } from '../ui/NodenzaButton';
import { Camera, Users, Calendar, MapPin, ArrowUpRight } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  date: string;
  venue: string;
  attendees: string;
  image: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 'webforge',
    title: 'WEBFORGE: 36-HOUR WEB & AI HACKATHON',
    category: 'FLAGSHIP HACKATHON',
    date: 'OCTOBER 2024',
    venue: 'TECH LAB BLOCK 2, MUJ',
    attendees: '180+ PARTICIPANTS',
    image: '/events/webforge.jpg',
    description: 'Teams raced against the clock building intelligent web apps, neural recommendation engines, and full-stack solutions with mentor support.',
  },
  {
    id: 'oneiros',
    title: 'ONEIROS: LLM & DEEP LEARNING WORKSHOP',
    category: 'AI MASTERCLASS',
    date: 'NOVEMBER 2024',
    venue: 'AUDITORIUM 1, MUJ',
    attendees: '250+ ATTENDEES',
    image: '/events/oneiros.jpg',
    description: 'Hands-on session on fine-tuning Open Source Large Language Models (LLMs) and deploying custom transformer agents.',
  },
  {
    id: 'team_awards',
    title: 'TECH EXCELLENCE & ANNUAL AWARD CEREMONY',
    category: 'CHAPTER MILESTONE',
    date: 'DECEMBER 2024',
    venue: 'MAIN AUDITORIUM, MUJ',
    attendees: 'CORE COMMITTEE & FACULTY',
    image: '/gallery/team_awards.jpg',
    description: 'Celebrating high-impact student researchers, hackathon winners, and core organizing committee contributions.',
  },
  {
    id: 'orientation',
    title: 'FRESHERS RECRUITMENT & ORIENTATION 2024',
    category: 'COMMUNITY INDUCTION',
    date: 'SEPTEMBER 2024',
    venue: 'AMPHITHEATRE & HALL 3',
    attendees: '400+ FRESHMEN',
    image: '/gallery/orientation.jpg',
    description: 'Introducing incoming engineering batches to computational intelligence, neural networks, and chapter domains.',
  },
  {
    id: 'workshop',
    title: 'HANDS-ON PYTORCH & NEURAL NETWORKS LAB',
    category: 'TECHNICAL LAB',
    date: 'AUGUST 2024',
    venue: 'COMPUTER LAB 4, MUJ',
    attendees: '120+ CODER CADETS',
    image: '/gallery/workshop.jpg',
    description: 'Zero-to-one training on backpropagation, gradient descent, and convolutional vision nets with live GPU notebooks.',
  },
  {
    id: 'robotics',
    title: 'AUTONOMOUS ROVER & EMBEDDED AI DEMO',
    category: 'PROJECT EXPO',
    date: 'JANUARY 2025',
    venue: 'INNOVATION CENTRE, MUJ',
    attendees: 'CAMPUS-WIDE EXPO',
    image: '/events/robotics.jpg',
    description: 'Live demonstration of custom ROS2 autonomous obstacle avoidance rovers built by club sophomore researchers.',
  },
];

export const ClubGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('ALL');

  const categories = ['ALL', 'FLAGSHIP HACKATHON', 'AI MASTERCLASS', 'TECHNICAL LAB', 'COMMUNITY INDUCTION'];

  const filteredItems = activeFilter === 'ALL'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="py-10 sm:py-20 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="CAPTURING OUR CHAPTER IN ACTION."
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-6 sm:mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeFilter === cat
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid with 3D TiltCards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredItems.map((item) => (
            <TiltCard
              key={item.id}
              maxTilt={4}
              className="group bg-white rounded-xl border border-slate-200 hover:border-sky-600 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col"
            >
              {/* Image Banner */}
              <div className="relative aspect-video w-full overflow-hidden bg-slate-100 border-b border-slate-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded bg-slate-900/90 text-white font-mono text-[10px] font-bold uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-slate-500 font-mono text-[11px]">
                    <span className="flex items-center gap-1.5 font-bold text-[#0284C7]">
                      <Calendar className="w-3.5 h-3.5 text-[#0284C7]" />
                      {item.date}
                    </span>
                    <span className="flex items-center gap-1.5 font-medium">
                      <Users className="w-3.5 h-3.5 text-slate-400" />
                      {item.attendees}
                    </span>
                  </div>

                  <h3 className="font-sans font-bold text-slate-900 text-base sm:text-lg leading-snug uppercase group-hover:text-[#0284C7] transition-colors">
                    {item.title}
                  </h3>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between font-mono text-[11px] text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {item.venue}
                  </span>
                  <a
                    href="https://www.instagram.com/ieee.cismuj/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0284C7] font-bold hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>VIEW POST</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Instagram Banner Link with NodenzaButton */}
        <div className="mt-12 p-6 sm:p-8 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-sky-600 text-white flex items-center justify-center font-bold">
              <Camera className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-extrabold text-slate-900 text-base uppercase">
                SEE MORE ON OUR INSTAGRAM FEED
              </h4>
              <p className="text-slate-600 font-sans text-xs">
                Follow @ieee.cismuj for live event stories, hackathon announcements, and student tech reels.
              </p>
            </div>
          </div>

          <NodenzaButton
            href="https://www.instagram.com/ieee.cismuj/"
            variant="contrast"
            target="_blank"
            rel="noopener noreferrer"
          >
            FOLLOW @IEEE.CISMUJ
          </NodenzaButton>
        </div>
      </div>
    </section>
  );
};
