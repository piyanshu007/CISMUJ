'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS, ProjectCaseStudy } from '@/data/projects';

interface GraphBranch {
  id: string;
  name: string;
  category?: string;
  code?: string;
  isPrimary?: boolean;
  caseStudy?: ProjectCaseStudy;
  startX: number;
  startY: number;
  midX: number;
  midY: number;
  endX: number;
  endY: number;
  textAnchor: 'start' | 'end';
  subLabel?: string;
}

export const ProjectsNeuralGraph: React.FC<{
  className?: string;
  onSelectProject?: (project: ProjectCaseStudy) => void;
}> = ({ className = '', onSelectProject }) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Center of the neural hemisphere
  const CX = 390;
  const CY = 280;

  // Primary Projects mapped to case studies
  const primaryProjectsMap: Record<string, ProjectCaseStudy> = {
    'neuro-swarm': PROJECTS[0],
    'fuzzy-grid': PROJECTS[1],
    'evo-nas': PROJECTS[2],
    'event-vision': PROJECTS[3],
  };

  // Right Radial Dendrogram Fan Nodes (from top to bottom along outer arc)
  const rightBranches: GraphBranch[] = [
    {
      id: 'neuro-swarm',
      name: 'Decentralized Neuro-Swarm',
      category: 'ROBOTICS // SLAM',
      code: 'PROJ 001',
      isPrimary: true,
      caseStudy: primaryProjectsMap['neuro-swarm'],
      startX: 450,
      startY: 230,
      midX: 580,
      midY: 100,
      endX: 680,
      endY: 70,
      textAnchor: 'start',
      subLabel: 'GPS-denied Octree Mapping',
    },
    {
      id: 'pso-solver',
      name: 'Hybrid PSO Swarm Solver',
      startX: 455,
      startY: 240,
      midX: 600,
      midY: 125,
      endX: 690,
      endY: 95,
      textAnchor: 'start',
    },
    {
      id: 'spiking-odometry',
      name: 'Spiking Neural Odometry',
      startX: 460,
      startY: 250,
      midX: 615,
      midY: 150,
      endX: 700,
      endY: 120,
      textAnchor: 'start',
    },
    {
      id: 'voxel-octree',
      name: '3D Voxel Octree Reconstruction',
      startX: 465,
      startY: 258,
      midX: 625,
      midY: 175,
      endX: 705,
      endY: 145,
      textAnchor: 'start',
    },
    {
      id: 'fuzzy-grid',
      name: 'Adaptive Type-2 Fuzzy Microgrid',
      category: 'OPTIMIZATION',
      code: 'PROJ 002',
      isPrimary: true,
      caseStudy: primaryProjectsMap['fuzzy-grid'],
      startX: 470,
      startY: 268,
      midX: 640,
      midY: 205,
      endX: 715,
      endY: 180,
      textAnchor: 'start',
      subLabel: '99.8% Frequency Regulation',
    },
    {
      id: 'tsk-inference',
      name: 'Takagi-Sugeno-Kang IT2 Engine',
      startX: 475,
      startY: 275,
      midX: 645,
      midY: 230,
      endX: 718,
      endY: 210,
      textAnchor: 'start',
    },
    {
      id: 'solar-forecasting',
      name: 'Real-Time Solar Telemetry Dispatch',
      startX: 478,
      startY: 282,
      midX: 650,
      midY: 255,
      endX: 720,
      endY: 240,
      textAnchor: 'start',
    },
    {
      id: 'battery-pwm',
      name: 'Sub-5ms Reactive Balancing',
      startX: 478,
      startY: 290,
      midX: 650,
      midY: 280,
      endX: 720,
      endY: 270,
      textAnchor: 'start',
    },
    {
      id: 'evo-nas',
      name: 'Evo-NAS Microcontroller AI',
      category: 'TINYML // GENETICS',
      code: 'PROJ 003',
      isPrimary: true,
      caseStudy: primaryProjectsMap['evo-nas'],
      startX: 475,
      startY: 298,
      midX: 645,
      midY: 310,
      endX: 718,
      endY: 305,
      textAnchor: 'start',
      subLabel: '3.2× Bare-Metal Speedup',
    },
    {
      id: 'nsga-pareto',
      name: 'NSGA-II Genetic Pareto Evolution',
      startX: 470,
      startY: 308,
      midX: 635,
      midY: 340,
      endX: 712,
      endY: 338,
      textAnchor: 'start',
    },
    {
      id: 'quantized-c99',
      name: 'Quantized ARM Cortex C99 Export',
      startX: 465,
      startY: 318,
      midX: 625,
      midY: 370,
      endX: 705,
      endY: 370,
      textAnchor: 'start',
    },
    {
      id: 'event-vision',
      name: 'Neuromorphic Event Retinal Vision',
      category: 'PERCEPTION',
      code: 'PROJ 004',
      isPrimary: true,
      caseStudy: primaryProjectsMap['event-vision'],
      startX: 460,
      startY: 328,
      midX: 610,
      midY: 405,
      endX: 695,
      endY: 410,
      textAnchor: 'start',
      subLabel: '< 1ms Obstacle Avoidance',
    },
    {
      id: 'graph-conv',
      name: 'Spatiotemporal Continuous Graph CNN',
      startX: 455,
      startY: 338,
      midX: 595,
      midY: 435,
      endX: 685,
      endY: 445,
      textAnchor: 'start',
    },
    {
      id: 'dvs-stream',
      name: 'Asynchronous Microsecond Pixel Stream',
      startX: 448,
      startY: 346,
      midX: 575,
      midY: 465,
      endX: 670,
      endY: 478,
      textAnchor: 'start',
    },
    {
      id: 'hdr-tracking',
      name: '120dB Dynamic Range Segmentation',
      startX: 438,
      startY: 355,
      midX: 550,
      midY: 492,
      endX: 650,
      endY: 510,
      textAnchor: 'start',
    },
  ];

  // Left Outer Callout Strands (anchored along the perimeter of the neural dome)
  const leftBranches: GraphBranch[] = [
    {
      id: 'jetson-rover',
      name: 'NVIDIA Jetson Orin Nano Core',
      startX: 330,
      startY: 195,
      midX: 250,
      midY: 155,
      endX: 160,
      endY: 135,
      textAnchor: 'end',
    },
    {
      id: 'ros2-humble',
      name: 'ROS2 Humble Distributed Node',
      startX: 305,
      startY: 220,
      midX: 220,
      midY: 200,
      endX: 135,
      endY: 185,
      textAnchor: 'end',
    },
    {
      id: 'rf-mesh',
      name: 'Peer-to-Peer Subterranean RF Mesh',
      startX: 290,
      startY: 255,
      midX: 200,
      midY: 250,
      endX: 110,
      endY: 245,
      textAnchor: 'end',
    },
    {
      id: 'cellular-automata',
      name: 'Cellular Automata Engine',
      startX: 295,
      startY: 295,
      midX: 210,
      midY: 300,
      endX: 120,
      endY: 305,
      textAnchor: 'end',
    },
    {
      id: 'tms-dsp',
      name: 'TI TMS320C28x Embedded DSP',
      startX: 310,
      startY: 335,
      midX: 230,
      midY: 350,
      endX: 140,
      endY: 365,
      textAnchor: 'end',
    },
    {
      id: 'modbus-bus',
      name: 'Modbus 50Hz Real-Time Bus',
      startX: 335,
      startY: 370,
      midX: 260,
      midY: 400,
      endX: 175,
      endY: 425,
      textAnchor: 'end',
    },
    {
      id: 'prophesee-fpga',
      name: 'Prophesee Event Sensor + FPGA',
      startX: 365,
      startY: 395,
      midX: 295,
      midY: 445,
      endX: 215,
      endY: 475,
      textAnchor: 'end',
    },
  ];

  const allBranches = [...rightBranches, ...leftBranches];

  return (
    <div className={`relative w-full flex items-center justify-center select-none overflow-visible ${className}`}>
      
      {/* Background Soft Atmospheric Glow behind Neural Shell */}
      <div className="absolute w-[440px] h-[360px] top-1/2 left-[44%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-sky-400/20 via-[#0284C7]/15 to-transparent blur-3xl pointer-events-none" />

      {/* Main SVG Vector Scientific Dendrogram Network */}
      <svg
        viewBox="0 0 920 570"
        className="w-full h-auto max-w-[940px] overflow-visible drop-shadow-[0_12px_36px_rgba(2,132,199,0.08)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradients */}
          <radialGradient id="neuralCoreGlow" cx="42%" cy="48%" r="55%">
            <stop offset="0%" stopColor="#BAE6FD" stopOpacity="0.9" />
            <stop offset="35%" stopColor="#38BDF8" stopOpacity="0.6" />
            <stop offset="70%" stopColor="#0284C7" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#0284C7" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="shellConeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#0284C7" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#0369A1" stopOpacity="0.05" />
          </linearGradient>

          <linearGradient id="primaryRayGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0284C7" stopOpacity="0.85" />
            <stop offset="60%" stopColor="#38BDF8" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#0284C7" stopOpacity="0.95" />
          </linearGradient>

          <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="0" stdDeviation="2.5" floodColor="#38BDF8" floodOpacity="0.9" />
          </filter>
        </defs>

        {/* ============================================================ */}
        {/* 1. CENTRAL NEURAL HEMISPHERE & SHELL ARCS (Exact 1:1 Mesh)  */}
        {/* ============================================================ */}
        <g className="transition-opacity duration-300">
          
          {/* Base Translucent Core Aura */}
          <ellipse cx={CX - 5} cy={CY} rx="115" ry="115" fill="url(#neuralCoreGlow)" />

          {/* Translucent Neural Cone / Hemisphere Shell Shapes */}
          <path
            d={`M ${CX - 110} ${CY} C ${CX - 110} ${CY - 100}, ${CX - 10} ${CY - 130}, ${CX + 85} ${CY - 70} L ${CX + 95} ${CY + 70} C ${CX - 10} ${CY + 130}, ${CX - 110} ${CY + 100}, ${CX - 110} ${CY} Z`}
            fill="url(#shellConeGrad)"
            stroke="#0284C7"
            strokeWidth="0.8"
            strokeOpacity="0.4"
          />

          {/* Concentric Gimbal Rings & Arcs */}
          <ellipse
            cx={CX}
            cy={CY}
            rx="120"
            ry="75"
            stroke="#0284C7"
            strokeWidth="1.2"
            strokeOpacity="0.4"
            strokeDasharray="4 3"
            transform={`rotate(-22 ${CX} ${CY})`}
          />
          <ellipse
            cx={CX}
            cy={CY}
            rx="95"
            ry="55"
            stroke="#38BDF8"
            strokeWidth="0.9"
            strokeOpacity="0.5"
            transform={`rotate(28 ${CX} ${CY})`}
          />
          <ellipse
            cx={CX + 20}
            cy={CY}
            rx="60"
            ry="90"
            stroke="#0284C7"
            strokeWidth="1"
            strokeOpacity="0.45"
            transform={`rotate(5 ${CX + 20} ${CY})`}
          />

          {/* Dense Internal Synapse Arcs (Intricate Neural Webbing) */}
          <path
            d={`M ${CX - 90} ${CY - 40} Q ${CX - 20} ${CY - 90} ${CX + 50} ${CY - 50} Q ${CX + 80} ${CY} ${CX + 40} ${CY + 60} Q ${CX - 30} ${CY + 80} ${CX - 80} ${CY + 30}`}
            stroke="#0284C7"
            strokeWidth="1"
            strokeOpacity="0.55"
          />
          <path
            d={`M ${CX - 80} ${CY - 60} Q ${CX} ${CY - 70} ${CX + 70} ${CY - 20} Q ${CX + 50} ${CY + 50} ${CX - 20} ${CY + 70} Q ${CX - 70} ${CY + 40} ${CX - 70} ${CY - 20}`}
            stroke="#38BDF8"
            strokeWidth="0.8"
            strokeOpacity="0.5"
          />
          <path
            d={`M ${CX - 60} ${CY - 70} Q ${CX + 10} ${CY - 40} ${CX + 85} ${CY} Q ${CX + 20} ${CY + 40} ${CX - 50} ${CY + 60}`}
            stroke="#0284C7"
            strokeWidth="1.1"
            strokeOpacity="0.4"
          />
          <path
            d={`M ${CX - 100} ${CY} Q ${CX - 10} ${CY - 20} ${CX + 75} ${CY - 35}`}
            stroke="#38BDF8"
            strokeWidth="1"
            strokeOpacity="0.6"
          />
          <path
            d={`M ${CX - 100} ${CY} Q ${CX - 10} ${CY + 20} ${CX + 75} ${CY + 35}`}
            stroke="#38BDF8"
            strokeWidth="1"
            strokeOpacity="0.6"
          />

          {/* Multi-layered Lattice Cross-Hatch Lines */}
          {[-70, -50, -30, -10, 10, 30, 50, 70].map((offset, i) => (
            <path
              key={`hatch-${i}`}
              d={`M ${CX - 85 + Math.abs(offset) * 0.4} ${CY + offset} Q ${CX} ${CY + offset * 0.5} ${CX + 75 - Math.abs(offset) * 0.3} ${CY + offset * 1.1}`}
              stroke={i % 2 === 0 ? '#0284C7' : '#38BDF8'}
              strokeWidth="0.75"
              strokeOpacity="0.4"
            />
          ))}

          {/* Internal Glowing Nodes / Core Vertices */}
          {[
            { x: CX - 75, y: CY - 35 },
            { x: CX - 60, y: CY + 45 },
            { x: CX - 40, y: CY - 55 },
            { x: CX - 30, y: CY + 20 },
            { x: CX - 10, y: CY - 30 },
            { x: CX, y: CY },
            { x: CX + 15, y: CY + 40 },
            { x: CX + 25, y: CY - 45 },
            { x: CX + 45, y: CY + 15 },
            { x: CX + 55, y: CY - 25 },
            { x: CX + 70, y: CY + 45 },
          ].map((pt, i) => (
            <circle
              key={`node-${i}`}
              cx={pt.x}
              cy={pt.y}
              r={i % 3 === 0 ? 3.5 : 2.5}
              fill={i % 2 === 0 ? '#38BDF8' : '#0284C7'}
              stroke="#FFFFFF"
              strokeWidth="0.8"
              filter="url(#nodeGlow)"
            />
          ))}

          {/* Center IEEE CIS Nucleus Sparkle */}
          <circle cx={CX} cy={CY} r="5.5" fill="#FFFFFF" stroke="#0284C7" strokeWidth="1.5" filter="url(#nodeGlow)" />
          <circle cx={CX} cy={CY} r="2.5" fill="#0284C7" />
        </g>

        {/* ============================================================ */}
        {/* 2. DENDROGRAM BRANCHES & CONNECTOR LEADER LINES               */}
        {/* ============================================================ */}
        <g>
          {allBranches.map((b) => {
            const isHovered = hoveredId === b.id;
            const isPrimary = b.isPrimary;

            // Smooth cubic/quadratic Bezier leader line path from core to outer label
            const pathD = `M ${b.startX} ${b.startY} Q ${b.midX} ${b.midY} ${b.endX} ${b.endY}`;

            return (
              <g
                key={b.id}
                onMouseEnter={() => setHoveredId(b.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => b.caseStudy && onSelectProject && onSelectProject(b.caseStudy)}
                className={`transition-all duration-200 ${b.caseStudy ? 'cursor-pointer' : 'cursor-default'}`}
              >
                {/* Ray Leader Line */}
                <path
                  d={pathD}
                  stroke={
                    isHovered
                      ? '#0284C7'
                      : isPrimary
                      ? 'url(#primaryRayGrad)'
                      : '#38BDF8'
                  }
                  strokeWidth={isHovered ? 2.2 : isPrimary ? 1.4 : 0.85}
                  strokeOpacity={isHovered ? 1.0 : isPrimary ? 0.85 : 0.45}
                  className="transition-all duration-300"
                />

                {/* Ray Start Node Dot on Core Shell */}
                <circle
                  cx={b.startX}
                  cy={b.startY}
                  r={isHovered ? 3.5 : isPrimary ? 2.5 : 1.8}
                  fill={isHovered ? '#0284C7' : '#38BDF8'}
                  stroke="#FFFFFF"
                  strokeWidth="0.6"
                />

                {/* Ray Endpoint Node Dot */}
                <circle
                  cx={b.endX}
                  cy={b.endY}
                  r={isHovered ? 4.5 : isPrimary ? 3.2 : 2.2}
                  fill={isHovered ? '#0284C7' : isPrimary ? '#0284C7' : '#38BDF8'}
                  stroke="#FFFFFF"
                  strokeWidth="0.8"
                  filter={isHovered || isPrimary ? 'url(#nodeGlow)' : undefined}
                />

                {/* Trailing Horizontal Marker Line to Text */}
                <line
                  x1={b.endX}
                  y1={b.endY}
                  x2={b.textAnchor === 'start' ? b.endX + (isHovered ? 18 : 12) : b.endX - (isHovered ? 18 : 12)}
                  y2={b.endY}
                  stroke={isHovered ? '#0284C7' : '#0284C7'}
                  strokeWidth={isHovered ? 1.5 : 0.8}
                  strokeOpacity={isHovered ? 0.9 : 0.4}
                />

                {/* Label Text Group */}
                <g
                  transform={`translate(${
                    b.textAnchor === 'start'
                      ? b.endX + (isHovered ? 24 : 16)
                      : b.endX - (isHovered ? 24 : 16)
                  }, ${b.endY})`}
                >
                  {/* Primary Project Code Badge */}
                  {isPrimary && b.code && (
                    <text
                      x={b.textAnchor === 'start' ? 0 : 0}
                      y={-6}
                      textAnchor={b.textAnchor}
                      fill="#0284C7"
                      fontSize="7.5"
                      fontFamily="monospace"
                      fontWeight="bold"
                      letterSpacing="0.08em"
                      className="transition-colors duration-200 select-none"
                    >
                      {b.code} // {b.category}
                    </text>
                  )}

                  {/* Main Project / Strand Name */}
                  <text
                    x={0}
                    y={isPrimary && b.code ? 6 : 3}
                    textAnchor={b.textAnchor}
                    fill={
                      isHovered
                        ? '#0284C7'
                        : isPrimary
                        ? '#0F172A'
                        : '#475569'
                    }
                    fontSize={isPrimary ? '10.5' : '8.5'}
                    fontFamily="sans-serif"
                    fontWeight={isPrimary ? '600' : isHovered ? '600' : '400'}
                    letterSpacing="-0.01em"
                    className="transition-colors duration-200 select-none"
                  >
                    {b.name}
                  </text>

                  {/* Subtitle / Key Metric for Primary Projects */}
                  {isPrimary && b.subLabel && isHovered && (
                    <text
                      x={0}
                      y={16}
                      textAnchor={b.textAnchor}
                      fill="#0284C7"
                      fontSize="7.5"
                      fontFamily="sans-serif"
                      fontWeight="500"
                      className="select-none animate-pulse"
                    >
                      ▸ {b.subLabel} (Click to inspect)
                    </text>
                  )}
                </g>
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
};
