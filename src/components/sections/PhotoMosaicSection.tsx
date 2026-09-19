'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import DarkVeil from '@/components/animated/DarkVeil';

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
  const [radius, setRadius] = useState(340);

  const cylinderRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const rotationRef = useRef<number>(0);
  const isDraggingRef = useRef<boolean>(false);
  const activePhotoRef = useRef<GalleryPhoto | null>(null);
  const isVisibleRef = useRef<boolean>(true);

  // Touch intent tracking to prevent scroll fighting on mobile
  const touchStartPos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const touchDragState = useRef<'undecided' | 'horizontal' | 'vertical'>('undecided');
  const lastTouchRotation = useRef<number>(0);

  // Mouse drag tracking
  const mouseStartX = useRef<number>(0);
  const mouseStartRotation = useRef<number>(0);

  const numPhotos = GALLERY_PHOTOS.length;

  // Sync activePhoto ref
  useEffect(() => {
    activePhotoRef.current = activePhoto;
  }, [activePhoto]);

  // Update 3D radius on resize
  useEffect(() => {
    const updateRadius = () => {
      if (window.innerWidth < 640) {
        setRadius(Math.min(window.innerWidth * 0.42, 190));
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

  // Update cylinder transform directly for 60fps GPU smoothness without React re-renders
  const applyTransform = useCallback((isSmoothTransition = false) => {
    if (!cylinderRef.current) return;
    if (isSmoothTransition) {
      cylinderRef.current.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
    } else {
      cylinderRef.current.style.transition = 'none';
    }
    cylinderRef.current.style.transform = `rotateX(-1.5deg) rotateY(${rotationRef.current}deg)`;
  }, []);

  // IntersectionObserver to pause RAF loop when offscreen (saves mobile CPU/battery)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // Butter-smooth RAF animation loop (Zero React state updates!)
  useEffect(() => {
    let animId: number;

    const tick = () => {
      if (!isDraggingRef.current && !activePhotoRef.current && isVisibleRef.current) {
        rotationRef.current -= 0.16;
        if (cylinderRef.current) {
          cylinderRef.current.style.transition = 'none';
          cylinderRef.current.style.transform = `rotateX(-1.5deg) rotateY(${rotationRef.current}deg)`;
        }
      }
      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, []);

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    isDraggingRef.current = true;
    mouseStartX.current = e.clientX;
    mouseStartRotation.current = rotationRef.current;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current) return;
    const deltaX = e.clientX - mouseStartX.current;
    rotationRef.current = mouseStartRotation.current + deltaX * 0.35;
    applyTransform(false);
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  // Touch handlers with intelligent intent detection (Fixes touch/scroll fighting!)
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartPos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    touchDragState.current = 'undecided';
    lastTouchRotation.current = rotationRef.current;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;
    const deltaX = currentX - touchStartPos.current.x;
    const deltaY = currentY - touchStartPos.current.y;

    // Detect gesture direction intent
    if (touchDragState.current === 'undecided') {
      if (Math.abs(deltaY) > 8 && Math.abs(deltaY) >= Math.abs(deltaX)) {
        // User is scrolling vertically -> Do not interfere! Native scroll proceeds smoothly.
        touchDragState.current = 'vertical';
        isDraggingRef.current = false;
        return;
      } else if (Math.abs(deltaX) > 8 && Math.abs(deltaX) > Math.abs(deltaY)) {
        // User is intentionally dragging horizontally -> Lock to 3D carousel rotate
        touchDragState.current = 'horizontal';
        isDraggingRef.current = true;
      }
    }

    if (touchDragState.current === 'horizontal') {
      rotationRef.current = lastTouchRotation.current + deltaX * 0.35;
      applyTransform(false);
    }
  };

  const handleTouchEnd = () => {
    isDraggingRef.current = false;
    touchDragState.current = 'undecided';
  };

  const rotateLeft = () => {
    rotationRef.current += 360 / numPhotos;
    applyTransform(true);
  };

  const rotateRight = () => {
    rotationRef.current -= 360 / numPhotos;
    applyTransform(true);
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white text-[#0F172A] pt-24 sm:pt-28 pb-14 sm:pb-20 overflow-hidden border-b border-slate-200 select-none"
    >
      {/* React Bits DarkVeil Background (CPPN fluid ribbons in white + gradient shades of blue) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <DarkVeil
          hueShift={215}
          warpAmount={0.4}
          speed={0.4}
          noiseIntensity={0.02}
          scanlineIntensity={0.02}
          scanlineFrequency={0.05}
          lightMode={true}
        />
        {/* Soft bottom edge fade for seamless transition */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </div>

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

        {/* Interactive 3D Controls */}
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

      {/* 3D Perspective Cylindrical Ring Stage - Optimized Touch & GPU Acceleration */}
      <div
        className="relative w-full max-w-6xl mx-auto h-[340px] sm:h-[440px] lg:h-[480px] flex items-center justify-center cursor-grab active:cursor-grabbing my-2 touch-pan-y z-10"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ perspective: '1100px' }}
      >
        {/* Soft ground depth shadow to make cards look completely free & floating */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[280px] sm:w-[500px] lg:w-[620px] h-[32px] bg-slate-800/[0.08] blur-2xl rounded-full pointer-events-none" />

        {/* 3D Carousel Cylinder */}
        <div
          ref={cylinderRef}
          className="relative w-[180px] sm:w-[280px] lg:w-[300px] h-[240px] sm:h-[340px] lg:h-[360px] will-change-transform"
          style={{
            transformStyle: 'preserve-3d',
            transform: 'rotateX(-1.5deg) rotateY(0deg)',
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
                className="absolute inset-0 rounded-2xl bg-white p-3 border border-slate-200 hover:border-[#0284C7] shadow-[0_10px_28px_rgba(15,23,42,0.08)] hover:shadow-[0_16px_36px_rgba(2,132,199,0.22)] transition-all duration-300 flex flex-col justify-between cursor-pointer group will-change-transform"
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
                    loading="lazy"
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
              className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 relative"
            >
              <button
                onClick={() => setActivePhoto(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-video w-full bg-slate-100">
                <img
                  src={activePhoto.image}
                  alt={activePhoto.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-4">
                  <span className="px-3 py-1 rounded-full bg-[#0284C7] text-white font-mono text-[10px] font-bold tracking-wider uppercase shadow-md">
                    {activePhoto.category}
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-2">
                <h3 className="font-sans text-xl sm:text-2xl font-bold text-[#0F172A]">
                  {activePhoto.title}
                </h3>
                <p className="font-sans text-slate-600 text-sm leading-relaxed">
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
