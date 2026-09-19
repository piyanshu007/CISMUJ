'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface SparkParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  decay: number;
  life: number;
  color: string;
}

export const CyberBrainVisual: React.FC<{ className?: string }> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    // Floating neural spark particles drifting around the brain perimeter
    const particles: SparkParticle[] = [];
    const maxParticles = 35;
    const colors = ['#38BDF8', '#0284C7', '#7DD3FC', '#00F0FF', '#FFFFFF'];

    const spawnParticle = () => {
      if (particles.length >= maxParticles) return;
      // Spawn near brain perimeter
      const angle = Math.random() * Math.PI * 2;
      const radiusX = width * (0.28 + Math.random() * 0.18);
      const radiusY = height * (0.25 + Math.random() * 0.18);
      const centerX = width * 0.5;
      const centerY = height * 0.48;

      particles.push({
        x: centerX + Math.cos(angle) * radiusX,
        y: centerY + Math.sin(angle) * radiusY,
        vx: (Math.random() - 0.5) * 0.5,
        vy: -0.2 - Math.random() * 0.6,
        size: 1.0 + Math.random() * 2.2,
        alpha: 0.7 + Math.random() * 0.3,
        decay: 0.006 + Math.random() * 0.01,
        life: 1.0,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    };

    // Pre-populate particles
    for (let i = 0; i < 20; i++) {
      spawnParticle();
    }

    let time = 0;

    const render = () => {
      time += 0.016;
      ctx.clearRect(0, 0, width, height);

      // Spawn new particles continuously
      if (Math.random() < 0.4) {
        spawnParticle();
      }

      // Draw and update ambient spark particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const part = particles[i];
        part.x += part.vx;
        part.y += part.vy;
        part.life -= part.decay;

        if (part.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        const currentAlpha = part.life * part.alpha;

        // Particle Glow Halo
        const glow = ctx.createRadialGradient(
          part.x,
          part.y,
          0,
          part.x,
          part.y,
          part.size * 3
        );
        glow.addColorStop(0, part.color);
        glow.addColorStop(1, 'transparent');

        ctx.fillStyle = glow;
        ctx.globalAlpha = currentAlpha;
        ctx.beginPath();
        ctx.arc(part.x, part.y, part.size * 3, 0, Math.PI * 2);
        ctx.fill();

        // White/Color Core
        ctx.fillStyle = part.color;
        ctx.globalAlpha = Math.min(1, currentAlpha * 1.3);
        ctx.beginPath();
        ctx.arc(part.x, part.y, part.size * 0.7, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

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
      className={`relative w-full max-w-[420px] aspect-[16/12] flex items-center justify-center select-none overflow-visible group cursor-pointer ${className}`}
      style={{
        perspective: '1200px',
      }}
    >
      {/* 3D Motion Container (Completely Background-less & Unobstructed) */}
      <motion.div
        animate={{
          rotateX: tilt.y,
          rotateY: tilt.x,
          scale: isHovered ? 1.08 : 1.0,
        }}
        transition={{ type: 'spring', stiffness: 240, damping: 22 }}
        className="relative w-full h-full flex items-center justify-center overflow-visible"
      >
        {/* Soft Radial Ambient Glow in Background (Blends seamlessly into page) */}
        <div
          className="absolute inset-0 pointer-events-none -m-10 opacity-70 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.28) 0%, rgba(2, 132, 199, 0.12) 40%, transparent 70%)',
          }}
        />

        {/* Ambient Core Lighting Pulse */}
        <div className="absolute w-44 h-44 rounded-full bg-[#0284C7]/25 blur-3xl pointer-events-none animate-pulse" />

        {/* Floating Ambient Neural Sparks Canvas (Behind and around the brain) */}
        <canvas
          ref={canvasRef}
          className="absolute -inset-10 w-[calc(100%+80px)] h-[calc(100%+80px)] pointer-events-none z-10"
        />

        {/* HERO CYBER BRAIN: Crisp, Bold, 100% Foreground & Completely Unobstructed */}
        <motion.img
          src="/cyber-brain-transparent.png"
          alt="Cybernetic Neural Network Brain"
          animate={{
            y: [-4, 4, -4],
            rotateZ: [-0.5, 0.5, -0.5],
          }}
          transition={{
            duration: 5.0,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="relative w-full h-full object-contain pointer-events-none select-none z-20 scale-110 sm:scale-120 drop-shadow-[0_12px_36px_rgba(2,132,199,0.45)] group-hover:drop-shadow-[0_16px_48px_rgba(56,189,248,0.75)] transition-all duration-500"
        />
      </motion.div>
    </div>
  );
};
