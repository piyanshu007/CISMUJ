'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export const CyberBrainVisual: React.FC<{ className?: string }> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // 3D Parallax Tilt Handler on Hover / Movement
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full max-w-[440px] aspect-[16/12] flex items-center justify-center select-none overflow-visible group cursor-pointer ${className}`}
      style={{
        perspective: '1200px',
      }}
    >
      {/* 3D Motion Container (Completely Background-less, Clean, & Unobstructed) */}
      <motion.div
        animate={{
          rotateX: tilt.y,
          rotateY: tilt.x,
          scale: isHovered ? 1.08 : 1.0,
        }}
        transition={{ type: 'spring', stiffness: 240, damping: 22 }}
        className="relative w-full h-full flex items-center justify-center overflow-visible"
      >
        {/* Soft Ethereal Core Glow Aura */}
        <div className="absolute w-52 h-52 rounded-full bg-[#0284C7]/20 blur-3xl pointer-events-none animate-pulse" />

        {/* HERO CYBER BRAIN: Pure, Crisp, Glowing, No Overlay Dots */}
        <motion.img
          src="/cyber-brain-transparent.png"
          alt="Cybernetic Neural Network Brain"
          animate={{
            y: [-5, 5, -5],
            rotateZ: [-0.6, 0.6, -0.6],
          }}
          transition={{
            duration: 5.0,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="relative w-full h-full object-contain pointer-events-none select-none z-20 scale-115 sm:scale-125 drop-shadow-[0_10px_32px_rgba(2,132,199,0.4)] group-hover:drop-shadow-[0_16px_48px_rgba(56,189,248,0.7)] transition-all duration-500"
        />
      </motion.div>
    </div>
  );
};
