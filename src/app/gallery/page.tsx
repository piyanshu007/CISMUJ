'use client';

import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PhotoMosaicSection } from '@/components/sections/PhotoMosaicSection';
import { ClubGallery } from '@/components/sections/ClubGallery';
import { JoinCTA } from '@/components/sections/JoinCTA';

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white text-[#0F172A] selection:bg-[#0284C7] selection:text-white overflow-x-hidden relative">
      <Navbar />
      <PhotoMosaicSection />
      <ClubGallery />
      <JoinCTA />
      <Footer />
    </main>
  );
}
