'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Activity, Sparkles } from 'lucide-react';

interface CircuitTrace {
  id: string;
  path: string;
  pulseDelay: number;
  pulseDuration: number;
  endX: number;
  endY: number;
}

export const CircuitBoardVisual: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [isHovered, setIsHovered] = useState(false);
  const [activeCoreMode, setActiveCoreMode] = useState<'neural' | 'quantum' | 'swarm'>('neural');

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePos({ x, y });
  };

  // Circuit trace definitions (radiating outward from center 500, 350 in a 1000x700 viewBox)
  const traces: CircuitTrace[] = [
    // Top Left traces
    { id: 'tl1', path: 'M 430 310 L 390 310 L 390 200 L 290 200 L 290 120 L 210 120', pulseDelay: 0.2, pulseDuration: 2.5, endX: 210, endY: 120 },
    { id: 'tl2', path: 'M 430 280 L 360 280 L 360 170 L 230 170', pulseDelay: 0.8, pulseDuration: 2.8, endX: 230, endY: 170 },
    { id: 'tl3', path: 'M 470 270 L 470 180 L 380 180 L 380 90 L 320 90', pulseDelay: 1.4, pulseDuration: 2.4, endX: 320, endY: 90 },
    
    // Top Right traces
    { id: 'tr1', path: 'M 530 270 L 530 180 L 620 180 L 620 90 L 680 90', pulseDelay: 0.4, pulseDuration: 2.6, endX: 680, endY: 90 },
    { id: 'tr2', path: 'M 570 280 L 640 280 L 640 170 L 770 170', pulseDelay: 1.1, pulseDuration: 2.7, endX: 770, endY: 170 },
    { id: 'tr3', path: 'M 570 310 L 610 310 L 610 200 L 710 200 L 710 120 L 790 120', pulseDelay: 1.7, pulseDuration: 2.3, endX: 790, endY: 120 },

    // Left traces
    { id: 'l1', path: 'M 430 350 L 300 350 L 300 320 L 140 320 L 140 260 L 60 260', pulseDelay: 0.1, pulseDuration: 3.0, endX: 60, endY: 260 },
    { id: 'l2', path: 'M 430 370 L 330 370 L 330 430 L 200 430 L 200 470 L 90 470', pulseDelay: 0.9, pulseDuration: 2.5, endX: 90, endY: 470 },
    { id: 'l3', path: 'M 430 390 L 360 390 L 360 490 L 240 490 L 240 560 L 120 560', pulseDelay: 1.6, pulseDuration: 2.9, endX: 120, endY: 560 },

    // Right traces
    { id: 'r1', path: 'M 570 350 L 700 350 L 700 320 L 860 320 L 860 260 L 940 260', pulseDelay: 0.3, pulseDuration: 3.1, endX: 940, endY: 260 },
    { id: 'r2', path: 'M 570 370 L 670 370 L 670 430 L 800 430 L 800 470 L 910 470', pulseDelay: 1.2, pulseDuration: 2.6, endX: 910, endY: 470 },
    { id: 'r3', path: 'M 570 390 L 640 390 L 640 490 L 760 490 L 760 560 L 880 560', pulseDelay: 1.8, pulseDuration: 2.8, endX: 880, endY: 560 },

    // Bottom Left traces
    { id: 'bl1', path: 'M 470 430 L 470 520 L 380 520 L 380 610 L 320 610', pulseDelay: 0.6, pulseDuration: 2.5, endX: 320, endY: 610 },
    { id: 'bl2', path: 'M 430 420 L 360 420 L 360 530 L 230 530 L 230 630 L 160 630', pulseDelay: 1.3, pulseDuration: 2.7, endX: 160, endY: 630 },

    // Bottom Right traces
    { id: 'br1', path: 'M 530 430 L 530 520 L 620 520 L 620 610 L 680 610', pulseDelay: 0.7, pulseDuration: 2.4, endX: 680, endY: 610 },
    { id: 'br2', path: 'M 570 420 L 640 420 L 640 530 L 770 530 L 770 630 L 840 630', pulseDelay: 1.5, pulseDuration: 2.9, endX: 840, endY: 630 },

    // Top vertical feeder
    { id: 'top_bus1', path: 'M 490 270 L 490 60', pulseDelay: 0.5, pulseDuration: 2.0, endX: 490, endY: 60 },
    { id: 'top_bus2', path: 'M 510 270 L 510 60', pulseDelay: 1.0, pulseDuration: 2.2, endX: 510, endY: 60 },

    // Bottom vertical feeder
    { id: 'bot_bus1', path: 'M 490 430 L 490 640', pulseDelay: 0.4, pulseDuration: 2.1, endX: 490, endY: 640 },
    { id: 'bot_bus2', path: 'M 510 430 L 510 640', pulseDelay: 1.1, pulseDuration: 2.3, endX: 510, endY: 640 },
  ];

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full min-h-[640px] lg:min-h-[720px] bg-white/85 backdrop-blur-xs py-16 flex flex-col items-center justify-center overflow-hidden border-b border-slate-200 select-none"
    >
      {/* Dynamic Background Glow centered on cursor */}
      <div 
        className="absolute w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none opacity-20 transition-all duration-300"
        style={{
          background: 'radial-gradient(circle, rgba(2,132,199,0.35) 0%, rgba(2,132,199,0.1) 50%, transparent 70%)',
          left: `${mousePos.x * 100}%`,
          top: `${mousePos.y * 100}%`,
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Top Banner Tag */}
      <div className="relative z-10 mb-4 flex items-center gap-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#0284C7]/30 shadow-[0_2px_12px_rgba(2,132,199,0.15)]">
          <span className="w-2 h-2 rounded-full bg-[#0284C7] animate-ping" />
          <span className="font-mono text-xs font-bold text-[#0F172A] uppercase tracking-widest">
            IEEE CIS MUJ // NEURAL PROCESSING UNIT
          </span>
        </div>
      </div>

      {/* Interactive SVG Circuit Canvas */}
      <div className="relative w-full max-w-5xl aspect-[10/7] flex items-center justify-center">
        <svg 
          viewBox="0 0 1000 700" 
          className="w-full h-full filter drop-shadow-[0_0_12px_rgba(2,132,199,0.2)]"
        >
          <defs>
            {/* Radiant IEEE Blue Glow Filter */}
            <filter id="blueGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur1" />
              <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur2" />
              <feMerge>
                <feMergeNode in="blur2" />
                <feMergeNode in="blur1" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Linear Gradients for Traces */}
            <linearGradient id="ieeeBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0284C7" />
              <stop offset="100%" stopColor="#0369A1" />
            </linearGradient>
          </defs>

          {/* Background Grid Pattern */}
          <g opacity="0.08">
            {Array.from({ length: 20 }).map((_, i) => (
              <line key={`vg-${i}`} x1={i * 50} y1="0" x2={i * 50} y2="700" stroke="#0284C7" strokeWidth="1" strokeDasharray="3 6" />
            ))}
            {Array.from({ length: 14 }).map((_, i) => (
              <line key={`hg-${i}`} x1="0" y1={i * 50} x2="1000" y2={i * 50} stroke="#0284C7" strokeWidth="1" strokeDasharray="3 6" />
            ))}
          </g>

          {/* Circuit Traces Static Backing (IEEE Blue) */}
          {traces.map((trace) => (
            <path
              key={`bg-${trace.id}`}
              d={trace.path}
              fill="none"
              stroke="#0284C7"
              strokeWidth="2.5"
              strokeOpacity="0.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ))}

          {/* Animated Flowing Neon Pulses along Circuit Traces */}
          {traces.map((trace) => (
            <g key={`flow-${trace.id}`}>
              <path
                d={trace.path}
                fill="none"
                stroke="url(#ieeeBlueGrad)"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#blueGlow)"
                strokeDasharray="45 180"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="400"
                  to="-400"
                  dur={`${isHovered ? trace.pulseDuration * 0.5 : trace.pulseDuration}s`}
                  begin={`${trace.pulseDelay}s`}
                  repeatCount="indefinite"
                />
              </path>

              {/* Glowing Terminal Node Pads at trace ends */}
              <circle
                cx={trace.endX}
                cy={trace.endY}
                r="4.5"
                fill="#0284C7"
                filter="url(#blueGlow)"
              >
                <animate
                  attributeName="r"
                  values="3.5;6;3.5"
                  dur="2s"
                  begin={`${trace.pulseDelay}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.6;1;0.6"
                  dur="2s"
                  begin={`${trace.pulseDelay}s`}
                  repeatCount="indefinite"
                />
              </circle>
              {/* Inner white core */}
              <circle cx={trace.endX} cy={trace.endY} r="2" fill="#FFFFFF" />
            </g>
          ))}
        </svg>

        {/* Central Microchip Housing Real IEEE CIS Logo */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-2xl bg-white border-2 border-[#0284C7] p-4 shadow-[0_8px_30px_rgba(2,132,199,0.25)] flex flex-col items-center justify-center cursor-pointer group"
          >
            {/* Outer Chip Frame */}
            <div className="absolute -inset-2 border border-[#0284C7]/30 rounded-3xl pointer-events-none" />
            
            {/* Corner Alignment Markers */}
            <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t-2 border-l-2 border-[#0284C7]" />
            <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t-2 border-r-2 border-[#0284C7]" />
            <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b-2 border-l-2 border-[#0284C7]" />
            <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b-2 border-r-2 border-[#0284C7]" />

            {/* Official IEEE CIS Emblem Logo (Clean & Transparent) */}
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
              <img
                src="/logo-mark.png"
                alt="IEEE CIS Logo"
                className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(2,132,199,0.3)]"
              />
            </div>

            {/* Sub-label */}
            <div className="mt-1 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#0284C7] animate-pulse" />
              <span className="font-mono text-[10px] text-[#0F172A] font-bold tracking-wider">
                CORE ONLINE
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Interactive Mode Selectors */}
      <div className="relative z-10 mt-6 flex flex-wrap items-center justify-center gap-2">
        <button
          onClick={() => setActiveCoreMode('neural')}
          className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full font-mono text-xs font-bold transition-all cursor-pointer ${
            activeCoreMode === 'neural'
              ? 'bg-[#0284C7] text-white shadow-[0_2px_12px_rgba(2,132,199,0.3)]'
              : 'bg-white text-[#0F172A] hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <Cpu className="w-3.5 h-3.5" />
          <span>NEURAL ARCHITECTURE</span>
        </button>

        <button
          onClick={() => setActiveCoreMode('quantum')}
          className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full font-mono text-xs font-bold transition-all cursor-pointer ${
            activeCoreMode === 'quantum'
              ? 'bg-[#0284C7] text-white shadow-[0_2px_12px_rgba(2,132,199,0.3)]'
              : 'bg-white text-[#0F172A] hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <Activity className="w-3.5 h-3.5" />
          <span>SYNAPSE TOPOLOGY</span>
        </button>

        <button
          onClick={() => setActiveCoreMode('swarm')}
          className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full font-mono text-xs font-bold transition-all cursor-pointer ${
            activeCoreMode === 'swarm'
              ? 'bg-[#0284C7] text-white shadow-[0_2px_12px_rgba(2,132,199,0.3)]'
              : 'bg-white text-[#0F172A] hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>EVOLUTIONARY DYNAMICS</span>
        </button>
      </div>
    </section>
  );
};
