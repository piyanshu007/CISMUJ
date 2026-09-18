'use client';

import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { NewsletterShowcase } from '@/components/sections/NewsletterShowcase';

export default function NewsletterPage() {
  return (
    <main className="min-h-screen bg-white text-[#1A1A1A] selection:bg-[#0284C7] selection:text-white overflow-x-hidden relative">
      <Navbar />
      <NewsletterShowcase />
      <Footer />
    </main>
  );
}
