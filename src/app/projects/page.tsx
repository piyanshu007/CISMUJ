'use client';

import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ProjectsGrid } from '@/components/sections/ProjectsGrid';

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white text-[#0F172A] selection:bg-[#0284C7] selection:text-white overflow-x-hidden relative">
      <Navbar />
      <ProjectsGrid />
      <Footer />
    </main>
  );
}
