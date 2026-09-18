'use client';

import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { TechMarquee } from '@/components/ui/TechMarquee';
import { ScatteredMemories } from '@/components/sections/ScatteredMemories';
import { RetroStatsTerminal } from '@/components/sections/RetroStatsTerminal';
import { JoinCTA } from '@/components/sections/JoinCTA';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#0F172A] selection:bg-[#0284C7] selection:text-white overflow-x-hidden relative">
      {/* 00. Global Navigation Header */}
      <Navbar />

      {/* 01. Hero Section: 3D Emblem & Synapse Mesh */}
      <Hero />

      {/* 02. Kinetic Frameworks & Technologies Marquee */}
      <TechMarquee />

      {/* 03. Field Log: Scattered Memories Pinboard over Gold Contour Lines */}
      <ScatteredMemories />

      {/* 04. Telemetry Terminal: Smartphone Interactive Device & Stats */}
      <RetroStatsTerminal />

      {/* 05. Recruitment & Membership CTA */}
      <JoinCTA />

      {/* 06. Footer */}
      <Footer />
    </main>
  );
}
