'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface SynapseNode {
  x: number;
  y: number;
  radius: number;
  baseAlpha: number;
  pulseSpeed: number;
  pulsePhase: number;
  connections: number[];
}

interface SignalPulse {
  fromNode: number;
  toNode: number;
  progress: number;
  speed: number;
  color: string;
  size: number;
}

interface SparkParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  decay: number;
  life: number;
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

    // Anatomically clustered 2D normalized nodes representing brain lobes (x: 0.15 - 0.85, y: 0.15 - 0.85)
    // Left hemisphere & Right hemisphere & Core & Cerebellum
    const normalizedNodes = [
      // Frontal Lobe (Top-Left & Front)
      { x: 0.28, y: 0.30, r: 2.5 },
      { x: 0.35, y: 0.22, r: 2.0 },
      { x: 0.44, y: 0.18, r: 3.0 },
      { x: 0.25, y: 0.42, r: 2.2 },
      { x: 0.36, y: 0.36, r: 3.5 }, // Key Frontal Hub
      { x: 0.46, y: 0.30, r: 2.8 },

      // Parietal & Superior Cortex (Top Center & Right)
      { x: 0.56, y: 0.19, r: 2.8 },
      { x: 0.68, y: 0.24, r: 2.2 },
      { x: 0.76, y: 0.32, r: 2.0 },
      { x: 0.58, y: 0.32, r: 3.2 }, // Central Sulcus Hub
      { x: 0.70, y: 0.38, r: 2.6 },

      // Occipital Lobe (Back / Right)
      { x: 0.82, y: 0.45, r: 2.4 },
      { x: 0.84, y: 0.56, r: 2.0 },
      { x: 0.78, y: 0.62, r: 2.8 },
      { x: 0.70, y: 0.54, r: 3.0 },

      // Temporal Lobe & Insula (Middle Lower)
      { x: 0.32, y: 0.52, r: 2.8 },
      { x: 0.42, y: 0.48, r: 3.6 }, // Core Sylvian Hub
      { x: 0.52, y: 0.46, r: 4.0 }, // Central Thalamic Core
      { x: 0.60, y: 0.50, r: 3.2 },
      { x: 0.38, y: 0.62, r: 2.4 },
      { x: 0.48, y: 0.60, r: 3.0 },
      { x: 0.58, y: 0.62, r: 2.6 },

      // Cerebellum & Lower Brain (Bottom-Right / Base)
      { x: 0.66, y: 0.72, r: 2.5 },
      { x: 0.74, y: 0.74, r: 2.0 },
      { x: 0.60, y: 0.78, r: 2.2 },

      // Brainstem (Bottom Center)
      { x: 0.52, y: 0.76, r: 3.0 },
      { x: 0.50, y: 0.86, r: 2.2 },
      { x: 0.52, y: 0.94, r: 1.8 },
    ];

    // Build Synapse Nodes with K-nearest Connections
    const nodes: SynapseNode[] = normalizedNodes.map((n, i) => {
      const connections: number[] = [];
      normalizedNodes.forEach((target, j) => {
        if (i !== j) {
          const dx = n.x - target.x;
          const dy = n.y - target.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 0.22) {
            connections.push(j);
          }
        }
      });

      return {
        x: n.x,
        y: n.y,
        radius: n.r,
        baseAlpha: 0.65 + Math.random() * 0.35,
        pulseSpeed: 1.5 + Math.random() * 2.0,
        pulsePhase: Math.random() * Math.PI * 2,
        connections,
      };
    });

    // Active signal pulses traversing across neural connections
    const pulses: SignalPulse[] = [];
    const maxPulses = 14;

    const spawnPulse = () => {
      if (pulses.length >= maxPulses) return;
      const fromIdx = Math.floor(Math.random() * nodes.length);
      const node = nodes[fromIdx];
      if (node.connections.length === 0) return;
      const toIdx = node.connections[Math.floor(Math.random() * node.connections.length)];

      const colors = ['#38bdf8', '#0284c7', '#00f0ff', '#ffffff', '#7dd3fc'];
      pulses.push({
        fromNode: fromIdx,
        toNode: toIdx,
        progress: 0,
        speed: 0.012 + Math.random() * 0.018,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: 2.0 + Math.random() * 2.0,
      });
    };

    // Initialize initial batch of pulses
    for (let i = 0; i < 8; i++) {
      spawnPulse();
    }

    // Spark particles drifting from neural activity
    const particles: SparkParticle[] = [];
    const maxParticles = 30;

    const spawnParticle = () => {
      if (particles.length >= maxParticles) return;
      const node = nodes[Math.floor(Math.random() * nodes.length)];
      particles.push({
        x: node.x * width + (Math.random() - 0.5) * 20,
        y: node.y * height + (Math.random() - 0.5) * 20,
        vx: (Math.random() - 0.5) * 0.6,
        vy: -0.3 - Math.random() * 0.7,
        size: 1 + Math.random() * 2,
        alpha: 0.8 + Math.random() * 0.2,
        decay: 0.008 + Math.random() * 0.012,
        life: 1.0,
      });
    };

    let time = 0;

    const render = () => {
      time += 0.016;
      ctx.clearRect(0, 0, width, height);

      // 1. Draw Network Connections (Axons / Synapses)
      ctx.lineWidth = 0.85;
      nodes.forEach((node, i) => {
        const x1 = node.x * width;
        const y1 = node.y * height;

        node.connections.forEach((targetIdx) => {
          if (targetIdx > i) {
            const target = nodes[targetIdx];
            const x2 = target.x * width;
            const y2 = target.y * height;

            // Subtle pulsing opacity for network lines
            const linePulse =
              0.18 + 0.12 * Math.sin(time * 2 + node.pulsePhase + target.pulsePhase);

            const grad = ctx.createLinearGradient(x1, y1, x2, y2);
            grad.addColorStop(0, `rgba(2, 132, 199, ${linePulse * 0.9})`);
            grad.addColorStop(0.5, `rgba(56, 189, 248, ${linePulse * 1.4})`);
            grad.addColorStop(1, `rgba(2, 132, 199, ${linePulse * 0.9})`);

            ctx.strokeStyle = grad;
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
          }
        });
      });

      // 2. Draw Traveling Signal Pulses (Action Potentials)
      for (let p = pulses.length - 1; p >= 0; p--) {
        const pulse = pulses[p];
        pulse.progress += pulse.speed;

        const from = nodes[pulse.fromNode];
        const to = nodes[pulse.toNode];
        if (!from || !to) {
          pulses.splice(p, 1);
          continue;
        }

        const currX = (from.x + (to.x - from.x) * pulse.progress) * width;
        const currY = (from.y + (to.y - from.y) * pulse.progress) * height;

        // Glowing Signal Head
        const glowGrad = ctx.createRadialGradient(
          currX,
          currY,
          0,
          currX,
          currY,
          pulse.size * 3.5
        );
        glowGrad.addColorStop(0, pulse.color);
        glowGrad.addColorStop(0.4, 'rgba(56, 189, 248, 0.6)');
        glowGrad.addColorStop(1, 'rgba(56, 189, 248, 0)');

        ctx.fillStyle = glowGrad;
        ctx.beginPath();
        ctx.arc(currX, currY, pulse.size * 3.5, 0, Math.PI * 2);
        ctx.fill();

        // White hot core
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(currX, currY, pulse.size * 0.8, 0, Math.PI * 2);
        ctx.fill();

        if (pulse.progress >= 1.0) {
          // Trigger a spark burst at target node
          if (Math.random() < 0.6) {
            spawnParticle();
          }
          pulses.splice(p, 1);
          spawnPulse();
        }
      }

      // 3. Draw Synaptic Nodes
      nodes.forEach((node) => {
        const x = node.x * width;
        const y = node.y * height;
        const pulse = Math.sin(time * node.pulseSpeed + node.pulsePhase);
        const radius = node.radius * (1 + pulse * 0.25);
        const currentAlpha = Math.max(0.2, Math.min(1, node.baseAlpha + pulse * 0.3));

        // Node Glow Halo
        const nodeGlow = ctx.createRadialGradient(x, y, 0, x, y, radius * 4);
        nodeGlow.addColorStop(0, `rgba(56, 189, 248, ${currentAlpha * 0.85})`);
        nodeGlow.addColorStop(0.5, `rgba(2, 132, 199, ${currentAlpha * 0.35})`);
        nodeGlow.addColorStop(1, 'rgba(2, 132, 199, 0)');

        ctx.fillStyle = nodeGlow;
        ctx.beginPath();
        ctx.arc(x, y, radius * 4, 0, Math.PI * 2);
        ctx.fill();

        // Node Core
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(x, y, Math.max(1, radius * 0.7), 0, Math.PI * 2);
        ctx.fill();
      });

      // 4. Draw Ambient Spark Particles
      if (Math.random() < 0.25) {
        spawnParticle();
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const part = particles[i];
        part.x += part.vx;
        part.y += part.vy;
        part.life -= part.decay;

        if (part.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        const alpha = part.life * part.alpha;
        ctx.fillStyle = `rgba(125, 211, 252, ${alpha})`;
        ctx.beginPath();
        ctx.arc(part.x, part.y, part.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Ensure pulses keep flowing
      if (pulses.length < 6) {
        spawnPulse();
      }

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
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -16;
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
      className={`relative w-full aspect-[4/3] rounded-2xl flex items-center justify-center select-none overflow-hidden group cursor-pointer ${className}`}
      style={{
        perspective: '1000px',
      }}
    >
      {/* Dynamic 3D Tilt Wrapper */}
      <motion.div
        animate={{
          rotateX: tilt.y,
          rotateY: tilt.x,
          scale: isHovered ? 1.04 : 1.0,
        }}
        transition={{ type: 'spring', stiffness: 220, damping: 20 }}
        className="relative w-full h-full flex items-center justify-center"
      >
        {/* Ambient Soft Cyber Glow Aura (No Harsh Box, Pure Radiance) */}
        <div
          className="absolute inset-0 pointer-events-none rounded-2xl opacity-65 group-hover:opacity-90 transition-opacity duration-500"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.22) 0%, rgba(2, 132, 199, 0.10) 45%, transparent 75%)',
          }}
        />

        {/* Ambient Back Glow Orb behind Brain Core */}
        <div className="absolute w-36 h-36 rounded-full bg-[#0284C7]/20 blur-2xl pointer-events-none animate-pulse" />

        {/* Primary Glowing Holographic Cyber Brain Artwork (Transparent Background-less) */}
        <motion.img
          src="/cyber-brain-transparent.png"
          alt="Cybernetic Neural Network Brain"
          animate={{
            y: [-3, 3, -3],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="relative w-full h-full object-contain pointer-events-none select-none z-10 filter drop-shadow-[0_8px_24px_rgba(2,132,199,0.35)] group-hover:drop-shadow-[0_12px_32px_rgba(56,189,248,0.55)] transition-all duration-500 scale-95"
        />

        {/* Dynamic HTML5 Canvas Overlay with Realtime Traveling Synaptic Pulses & Particles */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none z-20"
        />

        {/* Futuristic Subtle Top-Right Cyber Badge Indicator */}
        <div className="absolute top-2.5 right-2.5 z-30 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/80 backdrop-blur-md border border-sky-200/60 shadow-2xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7] animate-ping" />
          <span className="font-mono text-[9px] font-bold text-[#0284C7] tracking-wider uppercase">
            NEURAL CORE
          </span>
        </div>
      </motion.div>
    </div>
  );
};
