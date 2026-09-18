'use client';

import React, { useEffect, useRef } from 'react';

interface MeshNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  color: string;
}

interface SynapsePulse {
  fromX: number;
  fromY: number;
  toX: number;
  toY: number;
  progress: number;
  speed: number;
}

export const GlobalSynapseMesh: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const mouse = {
      x: -1000,
      y: -1000,
      radius: 180,
    };

    const isMobile = window.innerWidth < 768;
    const nodeCount = isMobile ? 45 : 90;
    const maxDistance = isMobile ? 110 : 160;

    const colors = ['#0284C7', '#0369A1', '#0F172A', '#38BDF8'];

    const nodes: MeshNode[] = [];
    for (let i = 0; i < nodeCount; i++) {
      const baseRadius = Math.random() * 2.2 + 1.2;
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: baseRadius,
        baseRadius,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const pulses: SynapsePulse[] = [];

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < nodes.length; i++) {
        const nA = nodes[i];
        nA.x += nA.vx;
        nA.y += nA.vy;

        if (nA.x < 0 || nA.x > width) nA.vx *= -1;
        if (nA.y < 0 || nA.y > height) nA.vy *= -1;

        // Mouse attraction/repulsion
        const dxM = mouse.x - nA.x;
        const dyM = mouse.y - nA.y;
        const distM = Math.sqrt(dxM * dxM + dyM * dyM);

        if (distM < mouse.radius) {
          const force = (1 - distM / mouse.radius) * 1.5;
          nA.x -= (dxM / distM) * force;
          nA.y -= (dyM / distM) * force;
          nA.radius = nA.baseRadius + force * 2.5;
        } else {
          nA.radius = nA.baseRadius;
        }

        // Draw connections
        for (let j = i + 1; j < nodes.length; j++) {
          const nB = nodes[j];
          const dx = nB.x - nA.x;
          const dy = nB.y - nA.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.22;
            ctx.beginPath();
            ctx.moveTo(nA.x, nA.y);
            ctx.lineTo(nB.x, nB.y);
            ctx.strokeStyle = `rgba(2, 132, 199, ${alpha})`;
            ctx.lineWidth = 1.0;
            ctx.stroke();

            // Occasional pulse
            if (Math.random() < 0.0008 && pulses.length < 20) {
              pulses.push({
                fromX: nA.x,
                fromY: nA.y,
                toX: nB.x,
                toY: nB.y,
                progress: 0,
                speed: 0.02 + Math.random() * 0.02,
              });
            }
          }
        }

        // Draw node
        ctx.beginPath();
        ctx.arc(nA.x, nA.y, nA.radius, 0, Math.PI * 2);
        ctx.fillStyle = nA.color;
        ctx.globalAlpha = 0.65;
        ctx.fill();
        ctx.globalAlpha = 1.0;
      }

      // Draw signal pulses
      for (let p = pulses.length - 1; p >= 0; p--) {
        const pulse = pulses[p];
        pulse.progress += pulse.speed;

        if (pulse.progress >= 1) {
          pulses.splice(p, 1);
          continue;
        }

        const currX = pulse.fromX + (pulse.toX - pulse.fromX) * pulse.progress;
        const currY = pulse.fromY + (pulse.toY - pulse.fromY) * pulse.progress;

        ctx.beginPath();
        ctx.arc(currX, currY, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = '#0284C7';
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
};
