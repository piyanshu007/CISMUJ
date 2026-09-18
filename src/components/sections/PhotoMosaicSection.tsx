'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Move3d, ChevronLeft, ChevronRight, X, Sparkles } from 'lucide-react';

interface GalleryPhoto {
  id: string;
  title: string;
  category: string;
  image: string;
  caption: string;
  aspect: string;
}

const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'gallery-1',
    title: 'EXECUTIVE COMMITTEE',
    category: 'LEADERSHIP',
    image: '/gallery/team_awards.jpg',
    caption: 'The core leadership body directing student chapters, hackathons, and technical symposiums.',
    aspect: 'aspect-[4/3]',
  },
  {
    id: 'gallery-2',
    title: 'WEBFORGE HACKATHON 2024',
    category: 'COMPETITION',
    image: '/events/webforge.jpg',
    caption: '180+ developers competing in 36 continuous hours of building intelligent web applications.',
    aspect: 'aspect-[4/3]',
  },
  {
    id: 'gallery-3',
    title: 'ROVER ROBOTICS RUNS',
    category: 'HARDWARE LAB',
    image: '/events/robotics.jpg',
    caption: 'Hardware teams validating outdoor computer vision SLAM and autonomous navigation rovers.',
    aspect: 'aspect-[4/3]',
  },
  {
    id: 'gallery-4',
    title: 'FRESHERS ORIENTATION',
    category: 'COMMUNITY',
    image: '/gallery/orientation.jpg',
    caption: 'Welcoming 400+ first-year engineers into our computational intelligence tracks and projects.',
    aspect: 'aspect-[4/3]',
  },
  {
    id: 'gallery-5',
    title: 'DELEGATE COLLOQUIUM',
    category: 'RESEARCH',
    image: '/events/oneiros.jpg',
    caption: 'Technical research symposiums connecting students with global IEEE fellows and mentors.',
    aspect: 'aspect-[4/3]',
  },
  {
    id: 'gallery-6',
    title: 'AI WORKSHOP ARENA',
    category: 'WORKSHOPS',
    image: '/events/webforge-banner.png',
    caption: 'Fine-tuning transformer models and deploying on-device LLM agents across campus workflows.',
    aspect: 'aspect-[4/3]',
  },
];

export const PhotoMosaicSection: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<GalleryPhoto | null>(null);
  const [rotationY, setRotationY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);
  const lastRotationRef = useRef(0);

  const numPhotos = GALLERY_PHOTOS.length;
  const [radius, setRadius] = useState(340);

  useEffect(() => {
    const updateRadius = () => {
      if (window.innerWidth < 640) {
        setRadius(210);
      } else if (window.innerWidth < 1024) {
        setRadius(280);
      } else {
        setRadius(340);
      }
    };
    updateRadius();
    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
  }, []);

  // Gentle auto-rotation when idle
  useEffect(() => {
    if (isDragging || activePhoto) return;
    const interval = setInterval(() => {
      setRotationY((prev) => prev - 0.22);
    }, 30);
    return () => clearInterval(interval);
  }, [isDragging, activePhoto]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    startXRef.current = e.clientX;
    lastRotationRef.current = rotationY;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startXRef.current;
    setRotationY(lastRotationRef.current + deltaX * 0.4);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    startXRef.current = e.touches[0].clientX;
    lastRotationRef.current = rotationY;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const deltaX = e.touches[0].clientX - startXRef.current;
    setRotationY(lastRotationRef.current + deltaX * 0.4);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const rotateLeft = () => setRotationY((prev) => prev + 360 / numPhotos);
  const rotateRight = () => setRotationY((prev) => prev - 360 / numPhotos);

  return (
    <section className="relative w-full bg-white/95 backdrop-blur-xs pt-8 sm:pt-10 pb-12 sm:pb-16 overflow-hidden border-b border-slate-200 select-none">
      {/* Background radial highlight & subtle coordinate lines */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#0284C7]/8 rounded-full blur-[140px] pointer-events-none" />

      {/* Top Section Header with Interactive 3D Controls */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8 relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-px bg-[#0284C7]" />
            <span className="font-mono text-[11px] font-bold text-[#0284C7] tracking-widest uppercase">
              3D INTERACTIVE ARCHIVE
            </span>
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] tracking-tight">
            Moments in Motion
          </h2>
        </div>

        {/* Interactive 3D Controls & Drag Hint */}
        <div className="flex items-center gap-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 font-mono text-[11px] text-slate-600 font-semibold shadow-2xs">
            <Move3d className="w-3.5 h-3.5 text-[#0284C7] animate-pulse" />
            <span>DRAG 360° TO ROTATE</span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={rotateLeft}
              className="p-2.5 rounded-full bg-white hover:bg-slate-50 border border-slate-200 hover:border-[#0284C7] text-slate-700 hover:text-[#0284C7] transition-all shadow-xs cursor-pointer active:scale-95"
              aria-label="Rotate Left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={rotateRight}
              className="p-2.5 rounded-full bg-white hover:bg-slate-50 border border-slate-200 hover:border-[#0284C7] text-slate-700 hover:text-[#0284C7] transition-all shadow-xs cursor-pointer active:scale-95"
              aria-label="Rotate Right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 3D Perspective Cylindrical Ring Stage - Compact & Balanced */}
      <div
        className="relative w-full max-w-6xl mx-auto h-[400px] sm:h-[460px] lg:h-[480px] flex items-center justify-center cursor-grab active:cursor-grabbing my-2"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ perspective: '1100px' }}
      >
        {/* Soft ground depth shadow to make cards look completely free & floating */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px] lg:w-[620px] h-[32px] bg-slate-800/[0.08] blur-2xl rounded-full pointer-events-none" />

        {/* 3D Carousel Cylinder */}
        <div
          className="relative w-[210px] sm:w-[280px] lg:w-[300px] h-[270px] sm:h-[340px] lg:h-[360px]"
          style={{
            transformStyle: 'preserve-3d',
            transform: `rotateX(-1.5deg) rotateY(${rotationY}deg)`,
            transition: isDragging ? 'none' : 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          {GALLERY_PHOTOS.map((photo, index) => {
            const angle = (index / numPhotos) * 360;

            return (
              <div
                key={photo.id}
                onClick={(e) => {
                  e.stopPropagation();
                  setActivePhoto(photo);
                }}
                className="absolute inset-0 rounded-2xl bg-white p-3 border border-slate-200 hover:border-[#0284C7] shadow-[0_10px_28px_rgba(15,23,42,0.08)] hover:shadow-[0_16px_36px_rgba(2,132,199,0.22)] transition-all duration-300 flex flex-col justify-between cursor-pointer group"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                  backfaceVisibility: 'hidden',
                }}
              >
                {/* Photo Card Frame */}
                <div className="relative w-full h-[72%] rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle top chip */}
                  <div className="absolute top-2 left-2">
                    <span className="px-2 py-0.5 rounded-md bg-slate-900/90 backdrop-blur-md text-white font-mono text-[9px] font-bold uppercase tracking-wider border border-white/20">
                      {photo.category}
                    </span>
                  </div>
                </div>

                {/* Photo Metadata Footer */}
                <div className="pt-2 px-1 pb-0.5 space-y-0.5">
                  <h4 className="font-sans font-bold text-xs sm:text-sm text-[#0F172A] uppercase leading-tight group-hover:text-[#0284C7] transition-colors line-clamp-1">
                    {photo.title}
                  </h4>
                  <p className="font-mono text-[10px] text-[#0284C7] font-bold tracking-wider flex items-center gap-1">
                    <span>CLICK TO EXPAND</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activePhoto && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setActivePhoto(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-2xl space-y-5"
            >
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <span className="font-mono text-xs font-bold text-[#0284C7] uppercase tracking-wider block">
                  {activePhoto.category}
                </span>
                <button
                  onClick={() => setActivePhoto(null)}
                  className="p-2 rounded-xl bg-slate-100 text-slate-700 hover:text-black hover:bg-slate-200 transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                <img
                  src={activePhoto.image}
                  alt={activePhoto.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-2">
                <h3 className="font-display font-black text-2xl text-[#0F172A] uppercase">
                  {activePhoto.title}
                </h3>
                <p className="font-sans text-slate-700 text-base leading-relaxed">
                  {activePhoto.caption}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
