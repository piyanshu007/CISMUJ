'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  originX: number;
  originY: number;
  targetX: number;
  targetY: number;
  radius: number;
  alpha: number;
  active: boolean;
}

export const WebsiteEntryAnimation: React.FC = () => {
  const [isFinished, setIsFinished] = useState(false);
  const [phase, setPhase] = useState<'dot' | 'flow' | 'morph' | 'lock'>('dot');
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Stage 1: Single dot appears immediately (0s - 0.7s)
    const t1 = setTimeout(() => {
      setPhase('flow'); // Stage 2: Dot flows into network (0.7s)
    }, 700);

    // Stage 3: Logo morphs & takes shape (1.5s)
    const t2 = setTimeout(() => {
      setPhase('morph');
    }, 1500);

    // Stage 4: Final lock & network expansion (2.4s)
    const t3 = setTimeout(() => {
      setPhase('lock');
    }, 2400);

    // Stage 5: Transition & dissolve to website (3.4s)
    const t4 = setTimeout(() => {
      setIsFinished(true);
    }, 3400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  // Canvas particle and network flow simulation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const cx = width / 2;
    const cy = height / 2;

    const particleCount = window.innerWidth < 768 ? 55 : 100;
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const dist = Math.random() * (Math.min(width, height) * 0.45) + 40;
      const speed = Math.random() * 1.5 + 0.8;

      particles.push({
        x: cx,
        y: cy,
        originX: cx,
        originY: cy,
        targetX: cx + Math.cos(angle) * dist,
        targetY: cy + Math.sin(angle) * dist,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        radius: Math.random() * 2.2 + 1.2,
        alpha: Math.random() * 0.5 + 0.3,
        active: false,
      });
    }

    let startTime = performance.now();

    const render = (now: number) => {
      const elapsed = (now - startTime) / 1000;
      ctx.clearRect(0, 0, width, height);

      // Phase 1 (0 to 0.7s): Center dot pulses
      if (elapsed < 0.7) {
        const pulse = 1 + Math.sin(elapsed * 8) * 0.15;
        ctx.beginPath();
        ctx.arc(cx, cy, 5 * pulse, 0, Math.PI * 2);
        ctx.fillStyle = '#0284C7';
        ctx.shadowColor = 'rgba(2, 132, 199, 0.6)';
        ctx.shadowBlur = 16;
        ctx.fill();
        ctx.shadowBlur = 0;
      } else {
        // Phase 2 onwards: Particles expand outward from center
        const flowProgress = Math.min((elapsed - 0.7) / 1.4, 1);
        const easeFlow = 1 - Math.pow(1 - flowProgress, 3);

        // Update particle positions
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          p.x = cx + (p.targetX - cx) * easeFlow + Math.sin(elapsed * 1.5 + i) * 12;
          p.y = cy + (p.targetY - cy) * easeFlow + Math.cos(elapsed * 1.5 + i) * 12;
        }

        // Draw connecting constellation lines
        ctx.lineWidth = 0.75;
        const maxDist = window.innerWidth < 768 ? 90 : 130;

        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < maxDist) {
              const lineAlpha = (1 - dist / maxDist) * 0.35 * easeFlow;
              ctx.strokeStyle = `rgba(2, 132, 199, ${lineAlpha})`;
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
        }

        // Draw nodal dots
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(2, 132, 199, ${p.alpha * easeFlow})`;
          ctx.fill();
        }
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleDismiss = () => {
    setIsFinished(true);
  };

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.06,
            filter: 'blur(10px)',
            transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
          }}
          onClick={handleDismiss}
          className="fixed inset-0 z-[99999] bg-white flex items-center justify-center select-none overflow-hidden cursor-pointer"
        >
          {/* Subtle luminous blue ambient glow in center */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(circle at 50% 50%, rgba(224, 242, 254, 0.75) 0%, rgba(240, 249, 255, 0.4) 40%, rgba(255, 255, 255, 1) 75%)',
            }}
          />

          {/* Organic Flowing Curves (Storyboard Frames 04, 05, 11) */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
            viewBox="0 0 1440 900"
            fill="none"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M-100 450 C 300 200, 600 700, 1540 450"
              stroke="url(#blueGradient)"
              strokeWidth="1.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.35 }}
              transition={{ duration: 1.8, delay: 0.5, ease: 'easeInOut' }}
            />
            <motion.path
              d="M-100 500 C 450 650, 950 250, 1540 500"
              stroke="url(#blueGradient)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.25 }}
              transition={{ duration: 2, delay: 0.7, ease: 'easeInOut' }}
            />
            <defs>
              <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0284C7" stopOpacity="0" />
                <stop offset="50%" stopColor="#0284C7" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#0284C7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          {/* Canvas Synaptic Data Flows */}
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-10" />

          {/* Center Logo Emblem Reveal (Zero Text - Strictly Just the Logo) */}
          <div className="relative z-20 flex items-center justify-center pointer-events-none">
            {phase !== 'dot' && (
              <motion.div
                initial={{ scale: 0.4, opacity: 0, filter: 'blur(12px)' }}
                animate={{
                  scale: phase === 'lock' ? 1 : 1.04,
                  opacity: 1,
                  filter: 'blur(0px)',
                }}
                transition={{
                  duration: 0.9,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative flex items-center justify-center"
              >
                {/* Soft blue backlight aura */}
                <motion.div
                  className="absolute w-40 h-40 sm:w-52 sm:h-52 rounded-full bg-[#0284C7]/20 blur-3xl pointer-events-none"
                  animate={{
                    scale: [1, 1.25, 1],
                    opacity: [0.4, 0.8, 0.4],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2.2,
                    ease: 'easeInOut',
                  }}
                />

                {/* Pure Emblem Frame - No text, just the iconic mark */}
                <div className="relative w-28 h-28 sm:w-36 sm:h-36 flex items-center justify-center">
                  <motion.img
                    src="/logo-mark.png"
                    alt="IEEE CIS Emblem"
                    className="w-full h-full object-contain filter drop-shadow-[0_8px_24px_rgba(2,132,199,0.4)]"
                    animate={{
                      filter: [
                        'drop-shadow(0 4px 16px rgba(2,132,199,0.35))',
                        'drop-shadow(0 8px 30px rgba(2,132,199,0.65))',
                        'drop-shadow(0 4px 16px rgba(2,132,199,0.35))',
                      ],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      ease: 'easeInOut',
                    }}
                  />
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
