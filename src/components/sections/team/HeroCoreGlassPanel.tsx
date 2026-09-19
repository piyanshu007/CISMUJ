'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TeamMember, CIS_TEAM_2026 } from '@/data/team';

interface HeroCoreMemberConfig {
  name: string;
  role: string;
  image: string;
  left: string;
  top: string;
  width: string;
  height: string;
  zIndex: number;
  isCenter: boolean;
}

const HERO_CORE_MEMBERS: HeroCoreMemberConfig[] = [
  {
    name: 'Pranav Kheole',
    role: 'HR Director',
    image: '/team/cutouts/pranav_kheole.png',
    left: '0%',
    top: '26%',
    width: '18%',
    height: '64%',
    zIndex: 10,
    isCenter: false,
  },
  {
    name: 'Harsh Raj',
    role: 'Treasurer',
    image: '/team/cutouts/harsh_raj.png',
    left: '13.5%',
    top: '17%',
    width: '18.5%',
    height: '74%',
    zIndex: 15,
    isCenter: false,
  },
  {
    name: 'Manya Moonat',
    role: 'Vice-Chairperson',
    image: '/team/cutouts/manya_moonat.png',
    left: '27%',
    top: '8%',
    width: '19%',
    height: '84%',
    zIndex: 25,
    isCenter: false,
  },
  {
    name: 'Shubhanshu Dixit',
    role: 'Chairperson',
    image: '/team/cutouts/shubhanshu_dixit.png',
    left: '40.5%',
    top: '0%',
    width: '19.5%',
    height: '98%',
    zIndex: 35,
    isCenter: true,
  },
  {
    name: 'Rishan Mazumdar',
    role: 'General Secretary',
    image: '/team/cutouts/rishan_mazumdar.png',
    left: '54%',
    top: '8%',
    width: '19%',
    height: '84%',
    zIndex: 25,
    isCenter: false,
  },
  {
    name: 'Garv Sharma',
    role: 'Managing Director',
    image: '/team/cutouts/garv_sharma.png',
    left: '67.5%',
    top: '17%',
    width: '18.5%',
    height: '74%',
    zIndex: 15,
    isCenter: false,
  },
  {
    name: 'Yash Raj',
    role: 'Research Director',
    image: '/team/cutouts/yash_raj.png',
    left: '81%',
    top: '26%',
    width: '18%',
    height: '64%',
    zIndex: 10,
    isCenter: false,
  },
];

interface HeroCoreGlassPanelProps {
  onSelectMember: (member: TeamMember) => void;
}

export const HeroCoreGlassPanel: React.FC<HeroCoreGlassPanelProps> = ({ onSelectMember }) => {
  // NOTE: Skew angle calculated for isometric depth alignment with SVG orbit trajectory
  const isometricSkewAngle = -9.5;
  const counterSkewAngle = 9.5;

  return (
    <div className="lg:col-span-7 relative flex items-center justify-center min-h-[360px] sm:min-h-[540px] lg:min-h-[560px]">
      {/* Encircling 3D Orbital Track SVG matching Reference Image */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-25 overflow-visible"
        viewBox="0 0 700 500"
        fill="none"
        aria-hidden="true"
      >
        {/* Primary tilted orbital ellipse */}
        <ellipse
          cx="350"
          cy="270"
          rx="330"
          ry="135"
          transform="rotate(-12 350 270)"
          stroke="#0284C7"
          strokeWidth="1.4"
          strokeOpacity="0.45"
        />
        {/* Secondary dashed orbit ring */}
        <ellipse
          cx="350"
          cy="270"
          rx="310"
          ry="120"
          transform="rotate(-16 350 270)"
          stroke="#38BDF8"
          strokeWidth="0.9"
          strokeDasharray="4 4"
          strokeOpacity="0.35"
        />
        {/* Network telemetry nodes along orbit */}
        <circle cx="50" cy="305" r="3" fill="#0284C7" />
        <line x1="50" y1="305" x2="30" y2="320" stroke="#0284C7" strokeWidth="0.8" strokeOpacity="0.5" />
        
        <circle cx="210" cy="385" r="3.5" fill="#0284C7" />
        <line x1="210" y1="385" x2="230" y2="405" stroke="#38BDF8" strokeWidth="0.8" strokeOpacity="0.5" />
        
        <circle cx="450" cy="360" r="3" fill="#0284C7" />
        <circle cx="550" cy="180" r="3" fill="#38BDF8" />
        <circle cx="640" cy="210" r="3.5" fill="#0284C7" />

        {/* Connector line to the glossy 3D Sphere at bottom right */}
        <line x1="580" y1="390" x2="635" y2="435" stroke="#0284C7" strokeWidth="1" strokeOpacity="0.55" />
        <circle cx="580" cy="390" r="2.5" fill="#0284C7" />
      </svg>

      {/* Exact Overlapping 7-Panel Cluster */}
      <div className="relative w-full max-w-[700px] h-[340px] sm:h-[480px] lg:h-[520px] z-20 mx-auto">
        {HERO_CORE_MEMBERS.map((coreLeader, index) => (
          <motion.div
            key={coreLeader.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.06 }}
            whileHover={{ y: -10, scale: 1.05, zIndex: 50 }}
            style={{
              position: 'absolute',
              left: coreLeader.left,
              top: coreLeader.top,
              width: coreLeader.width,
              height: coreLeader.height,
              zIndex: coreLeader.zIndex,
            }}
            className="cursor-pointer group touch-manipulation"
            onClick={() => {
              const fullRecord = CIS_TEAM_2026.find((member) => member.name === coreLeader.name);
              if (fullRecord) onSelectMember(fullRecord);
            }}
          >
            {/* Glass Card with 2.5D Isometric Tilt */}
            <div
              className={`w-full h-full rounded-2xl overflow-hidden backdrop-blur-md bg-gradient-to-b from-white/80 via-sky-50/45 to-sky-100/30 border ${
                coreLeader.isCenter
                  ? 'border-2 border-sky-300 shadow-[0_16px_40px_rgba(2,132,199,0.22)]'
                  : 'border border-sky-200/80 shadow-[0_10px_28px_rgba(2,132,199,0.14)]'
              } relative transition-all duration-300`}
              style={{
                transform: `skewY(${isometricSkewAngle}deg)`,
                transformOrigin: 'center center',
              }}
            >
              {/* Top glass reflection highlight */}
              <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/80 via-white/30 to-transparent pointer-events-none z-10" />

              {/* Leader Transparent Cutout Portrait Centered in the Middle */}
              <div
                className="absolute inset-0 z-10 w-full h-full flex items-center justify-center pt-1 sm:pt-2 pb-8 sm:pb-12 px-0.5"
                style={{
                  transform: `skewY(${counterSkewAngle}deg)`,
                  transformOrigin: 'center center',
                }}
              >
                <img
                  src={coreLeader.image}
                  alt={coreLeader.name}
                  className="w-full h-auto max-h-[82%] sm:max-h-[86%] object-contain object-center scale-100 sm:scale-110 md:scale-115 filter contrast-[1.05] brightness-[1.05] drop-shadow-[0_10px_22px_rgba(2,132,199,0.22)] group-hover:scale-120 transition-transform duration-500"
                />
              </div>

              {/* Bottom Blue Gradient Layer */}
              <div className="absolute inset-x-0 bottom-0 h-20 sm:h-32 bg-gradient-to-t from-[#0284C7] via-[#0284C7]/80 to-transparent pointer-events-none z-15" />

              {/* Text Container with Horizontal Level Orientation */}
              <div
                className="absolute inset-x-0 bottom-0 pb-1.5 sm:pb-3.5 pt-3 sm:pt-6 px-0.5 sm:px-1 text-white text-center pointer-events-none z-20 flex flex-col justify-end items-center"
                style={{
                  transform: `skewY(${counterSkewAngle}deg)`,
                  transformOrigin: 'center center',
                }}
              >
                <span className="font-sans font-bold text-[8px] sm:text-[11px] md:text-[12.5px] leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] block max-w-full truncate px-0.5">
                  {coreLeader.name}
                </span>
                <span className="font-mono text-[6px] sm:text-[8px] md:text-[9px] uppercase tracking-wider text-sky-100 mt-0.5 block font-semibold drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)] leading-tight max-w-full truncate px-0.5">
                  {coreLeader.role}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Glossy 3D Blue Sphere on the Orbit Path */}
      <motion.div
        animate={{
          y: [-3, 3, -3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-4 right-4 sm:right-6 w-10 h-10 sm:w-13 sm:h-13 rounded-full shadow-[0_10px_30px_rgba(2,132,199,0.6)] pointer-events-none z-30"
        style={{
          background:
            'radial-gradient(circle at 35% 35%, #bae6fd 0%, #0284c7 50%, #075985 100%)',
        }}
      />
    </div>
  );
};
