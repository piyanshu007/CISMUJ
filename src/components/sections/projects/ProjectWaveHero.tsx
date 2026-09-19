'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const ProjectWaveHero: React.FC = () => {
  return (
    <>
      {/* Sweeping Blue Wave Line with Travelling Spheres (Desktop Only) */}
      <svg
        className="hidden md:block absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible"
        viewBox="0 0 1440 460"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="waveBallGrad" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="30%" stopColor="#7DD3FC" />
            <stop offset="75%" stopColor="#0284C7" />
            <stop offset="100%" stopColor="#0369A1" />
          </radialGradient>
          <radialGradient id="waveBallCyan" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#E0F2FE" />
            <stop offset="35%" stopColor="#38BDF8" />
            <stop offset="80%" stopColor="#0284C7" />
            <stop offset="100%" stopColor="#075985" />
          </radialGradient>
          <filter id="waveBallGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#0284C7" floodOpacity="0.75" />
          </filter>
          <path
            id="mainWaveTravelPath"
            d="M -40,300 C 220,310 380,260 600,280 C 820,300 960,200 1160,220 C 1280,240 1380,260 1480,270"
          />
        </defs>

        <path
          d="M 40,300 C 220,310 380,260 600,280 C 820,300 960,200 1160,220 C 1280,240 1380,260 1460,270"
          stroke="#0284C7"
          strokeWidth="1.4"
          strokeOpacity="0.45"
        />

        <g filter="url(#waveBallGlow)">
          <animateMotion dur="9s" repeatCount="indefinite">
            <mpath href="#mainWaveTravelPath" />
          </animateMotion>
          <circle r="7" fill="url(#waveBallGrad)" />
        </g>

        <g filter="url(#waveBallGlow)">
          <animateMotion dur="9s" begin="-3s" repeatCount="indefinite">
            <mpath href="#mainWaveTravelPath" />
          </animateMotion>
          <circle r="5.5" fill="url(#waveBallCyan)" />
        </g>

        <g filter="url(#waveBallGlow)">
          <animateMotion dur="9s" begin="-6s" repeatCount="indefinite">
            <mpath href="#mainWaveTravelPath" />
          </animateMotion>
          <circle r="5" fill="url(#waveBallGrad)" />
        </g>
      </svg>

      {/* Ribbon Artwork with Centered CIS Emblem */}
      <div className="lg:col-span-7 relative z-20 flex items-center justify-center min-h-[300px] sm:min-h-[400px] lg:min-h-[480px]">
        <motion.div
          animate={{
            y: [-6, 6, -6],
            rotateZ: [-0.4, 0.4, -0.4],
          }}
          transition={{
            duration: 6.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="relative w-full max-w-[560px] sm:max-w-[700px] lg:max-w-[820px] aspect-[16/10] flex items-center justify-center select-none"
        >
          <div
            className="absolute w-[82%] h-[78%] rounded-full pointer-events-none blur-xl"
            style={{
              background:
                'radial-gradient(circle at center, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.7) 45%, rgba(255,255,255,0) 75%)',
            }}
          />

          <div className="absolute w-52 h-52 sm:w-88 sm:h-88 rounded-full bg-gradient-to-tr from-sky-400/25 via-[#0284C7]/20 to-transparent blur-3xl pointer-events-none" />

          <img
            src="/projects-hero-ribbon-orig.png"
            alt="IEEE CIS Swirling Ribbon & Orbital Constellation"
            className="w-full h-full object-contain pointer-events-none select-none relative z-10 filter drop-shadow-[0_16px_40px_rgba(2,132,199,0.18)]"
          />

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative flex items-center justify-center -translate-x-[4%] -translate-y-[2%]"
            >
              <div className="absolute w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full bg-white/85 blur-md pointer-events-none" />
              <div className="absolute w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full bg-[#0284C7]/25 blur-xl pointer-events-none" />

              <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 flex items-center justify-center">
                <img
                  src="/logo-mark.png"
                  alt="IEEE CIS Emblem"
                  className="w-full h-full object-contain filter drop-shadow-[0_8px_26px_rgba(2,132,199,0.55)]"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
};
