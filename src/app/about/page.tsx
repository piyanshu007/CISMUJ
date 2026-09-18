'use client';

import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatIsCis } from '@/components/sections/WhatIsCis';
import { CisMujChapter } from '@/components/sections/CisMujChapter';
import { WhyCis } from '@/components/sections/WhyCis';
import { JoinCTA } from '@/components/sections/JoinCTA';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-[#0F172A] selection:bg-[#0284C7] selection:text-white overflow-x-hidden relative">
      <Navbar />
      <WhatIsCis />
      <CisMujChapter />
      <WhyCis />
      <JoinCTA />
      <Footer />
    </main>
  );
}
