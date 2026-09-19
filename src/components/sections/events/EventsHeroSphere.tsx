'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const EventsHeroSphere: React.FC = () => {
  return (
    <div className="lg:col-span-6 relative flex items-center justify-center min-h-0 sm:min-h-[380px] lg:min-h-[420px] overflow-visible my-1 sm:my-0">
      {/* Luminous Glowing Backlight Aura behind Sphere */}
      <div className="absolute w-44 h-44 sm:w-[440px] sm:h-[440px] rounded-full bg-radial from-sky-400/40 via-[#0284C7]/20 to-transparent blur-2xl sm:blur-3xl pointer-events-none" />

      <motion.div
        animate={{
          y: [-6, 6, -6],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="relative w-full max-w-[280px] sm:max-w-[500px] lg:max-w-[560px] aspect-[1376/768] flex items-center justify-center select-none mx-auto"
      >
        {/* Enhanced Planetary Artwork */}
        <img
          src="/events-hero-sphere.png"
          alt="3D Floating Planetary Sphere with Orbital Rings"
          className="w-full h-full object-contain pointer-events-none select-none relative z-10 filter drop-shadow-[0_20px_45px_rgba(2,132,199,0.35)] contrast-[1.15] brightness-[1.05]"
        />

        {/* Animated Orbiting Spheres SVG Overlay */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-20 overflow-visible"
          viewBox="0 0 1376 768"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <radialGradient id="orbitBallGrad" cx="35%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="20%" stopColor="#7DD3FC" />
              <stop offset="60%" stopColor="#0284C7" />
              <stop offset="100%" stopColor="#0369A1" />
            </radialGradient>
            
            <radialGradient id="orbitBallCyan" cx="35%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="30%" stopColor="#38BDF8" />
              <stop offset="75%" stopColor="#0284C7" />
              <stop offset="100%" stopColor="#0C4A6E" />
            </radialGradient>

            <filter id="orbitGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="3" stdDeviation="6" floodColor="#0284C7" floodOpacity="0.75" />
            </filter>

            {/* Concentric Elliptical Paths matching -26deg planetary tilt on 1376x768 */}
            <path
              id="innerOrbitPath"
              d="M 366 400 a 340 112 0 1 0 680 0 a 340 112 0 1 0 -680 0"
            />
            <path
              id="midInnerOrbitPath"
              d="M 266 400 a 440 145 0 1 0 880 0 a 440 145 0 1 0 -880 0"
            />
            <path
              id="midOuterOrbitPath"
              d="M 146 400 a 560 185 0 1 0 1120 0 a 560 185 0 1 0 -1120 0"
            />
            <path
              id="outerOrbitPath"
              d="M 36 400 a 670 220 0 1 0 1340 0 a 670 220 0 1 0 -1340 0"
            />
          </defs>

          {/* Rotated Group aligning orbits to the ring tilt */}
          <g transform="rotate(-26 706 400)">
            <ellipse cx="706" cy="400" rx="670" ry="220" stroke="#0284C7" strokeWidth="1.2" strokeOpacity="0.35" fill="none" />
            <ellipse cx="706" cy="400" rx="560" ry="185" stroke="#38BDF8" strokeWidth="1.2" strokeDasharray="6 6" strokeOpacity="0.45" fill="none" />
            <ellipse cx="706" cy="400" rx="440" ry="145" stroke="#0284C7" strokeWidth="1.4" strokeOpacity="0.4" fill="none" />
            <ellipse cx="706" cy="400" rx="340" ry="112" stroke="#38BDF8" strokeWidth="1" strokeDasharray="4 4" strokeOpacity="0.5" fill="none" />

            {/* --- OUTER RING SPHERES --- */}
            <g filter="url(#orbitGlow)">
              <animateMotion dur="18s" repeatCount="indefinite">
                <mpath href="#outerOrbitPath" />
              </animateMotion>
              <circle r="19" fill="url(#orbitBallGrad)" />
              <circle r="26" stroke="#38BDF8" strokeWidth="1.5" strokeOpacity="0.6" />
            </g>

            <g filter="url(#orbitGlow)">
              <animateMotion dur="18s" begin="-9s" repeatCount="indefinite">
                <mpath href="#outerOrbitPath" />
              </animateMotion>
              <circle r="14" fill="url(#orbitBallCyan)" />
            </g>

            {/* --- MID-OUTER RING SPHERES --- */}
            <g filter="url(#orbitGlow)">
              <animateMotion dur="14s" repeatCount="indefinite">
                <mpath href="#midOuterOrbitPath" />
              </animateMotion>
              <circle r="16" fill="url(#orbitBallGrad)" />
              <circle r="22" stroke="#38BDF8" strokeWidth="1.3" strokeOpacity="0.5" />
            </g>

            <g filter="url(#orbitGlow)">
              <animateMotion dur="14s" begin="-7s" repeatCount="indefinite">
                <mpath href="#midOuterOrbitPath" />
              </animateMotion>
              <circle r="12" fill="url(#orbitBallCyan)" />
            </g>

            {/* --- MID-INNER RING SPHERES --- */}
            <g filter="url(#orbitGlow)">
              <animateMotion dur="10.5s" repeatCount="indefinite">
                <mpath href="#midInnerOrbitPath" />
              </animateMotion>
              <circle r="15" fill="url(#orbitBallGrad)" />
            </g>

            <g filter="url(#orbitGlow)">
              <animateMotion dur="10.5s" begin="-5.25s" repeatCount="indefinite">
                <mpath href="#midInnerOrbitPath" />
              </animateMotion>
              <circle r="11" fill="url(#orbitBallCyan)" />
            </g>

            {/* --- INNER RING SPHERES --- */}
            <g filter="url(#orbitGlow)">
              <animateMotion dur="7.5s" repeatCount="indefinite">
                <mpath href="#innerOrbitPath" />
              </animateMotion>
              <circle r="13" fill="url(#orbitBallGrad)" />
            </g>

            <g filter="url(#orbitGlow)">
              <animateMotion dur="7.5s" begin="-3.75s" repeatCount="indefinite">
                <mpath href="#innerOrbitPath" />
              </animateMotion>
              <circle r="10" fill="url(#orbitBallCyan)" />
            </g>
          </g>
        </svg>

        {/* Top-Right Decorative Diamond Sparkle */}
        <div className="absolute top-[8%] right-[16%] text-[#0284C7] text-xl select-none pointer-events-none animate-pulse z-20">
          ✦
        </div>
      </motion.div>
    </div>
  );
};
