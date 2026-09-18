'use client';

import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { EventsFanDeck } from '@/components/sections/EventsFanDeck';

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-white text-[#0F172A] selection:bg-[#0284C7] selection:text-white overflow-x-hidden relative">
      <Navbar />
      <EventsFanDeck />
      <Footer />
    </main>
  );
}
