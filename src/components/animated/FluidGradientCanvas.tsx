'use client';

import React, { useEffect, useRef } from 'react';

export const FluidGradientCanvas: React.FC<{ className?: string }> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Fluid gradient control nodes (Light cyan, IEEE blue, Sky blue, Ice blue, Soft white)
    const blobs = [
      {
        x: width * 0.75,
        y: height * 0.35,
        radius: Math.min(width, height) * 0.55,
        vx: 0.0012,
        vy: 0.0016,
        color0: 'rgba(56, 189, 248, 0.65)', // Bright Sky Blue #38BDF8
        color1: 'rgba(2, 132, 199, 0.35)',  // Deep IEEE Blue #0284C7
        color2: 'rgba(224, 242, 254, 0)',
        angle: 0,
        speed: 0.0008,
      },
      {
        x: width * 0.3,
        y: height * 0.45,
        radius: Math.min(width, height) * 0.6,
        vx: -0.001,
        vy: 0.0014,
        color0: 'rgba(125, 211, 252, 0.6)', // Light Cyan #7DD3FC
        color1: 'rgba(56, 189, 248, 0.3)',
        color2: 'rgba(240, 249, 255, 0)',
        angle: Math.PI * 0.5,
        speed: 0.0007,
      },
      {
        x: width * 0.6,
        y: height * 0.65,
        radius: Math.min(width, height) * 0.5,
        vx: 0.0015,
        vy: -0.0011,
        color0: 'rgba(2, 132, 199, 0.45)',  // IEEE Blue #0284C7
        color1: 'rgba(14, 165, 233, 0.25)',
        color2: 'rgba(224, 242, 254, 0)',
        angle: Math.PI,
        speed: 0.0009,
      },
      {
        x: width * 0.85,
        y: height * 0.25,
        radius: Math.min(width, height) * 0.45,
        vx: -0.0013,
        vy: -0.0012,
        color0: 'rgba(186, 230, 253, 0.7)', // Ice Blue #BAE6FD
        color1: 'rgba(56, 189, 248, 0.25)',
        color2: 'rgba(255, 255, 255, 0)',
        angle: Math.PI * 1.5,
        speed: 0.0006,
      },
      {
        x: width * 0.5,
        y: height * 0.3,
        radius: Math.min(width, height) * 0.4,
        vx: 0.0008,
        vy: 0.001,
        color0: 'rgba(240, 249, 255, 0.8)', // Specular White Highlight
        color1: 'rgba(125, 211, 252, 0.2)',
        color2: 'rgba(255, 255, 255, 0)',
        angle: Math.PI * 0.25,
        speed: 0.0011,
      },
    ];

    let time = 0;

    const render = () => {
      time += 1;
      ctx.clearRect(0, 0, width, height);

      // Base pure clean white foundation
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(0, 0, width, height);

      // Render flowing harmonic fluid gradient loops
      blobs.forEach((blob, i) => {
        blob.angle += blob.speed;

        // Smooth orbital Lissajous liquid motion
        const offsetX = Math.sin(time * blob.vx + i) * width * 0.18 + Math.cos(time * 0.0005 + i * 2) * width * 0.08;
        const offsetY = Math.cos(time * blob.vy + i) * height * 0.18 + Math.sin(time * 0.0006 + i) * height * 0.08;

        const curX = blob.x + offsetX;
        const curY = blob.y + offsetY;
        const curRadius = blob.radius * (1 + Math.sin(time * 0.001 + i) * 0.12);

        const grad = ctx.createRadialGradient(curX, curY, 0, curX, curY, curRadius);
        grad.addColorStop(0, blob.color0);
        grad.addColorStop(0.45, blob.color1);
        grad.addColorStop(1, blob.color2);

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(curX, curY, curRadius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none select-none ${className}`}>
      {/* High-Performance Canvas for Liquid Motion */}
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover filter blur-[65px] opacity-75 transform-gpu scale-110"
      />
      {/* Soft Ethereal Atmospheric Veil */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background:
            'radial-gradient(circle at 65% 40%, rgba(224, 242, 254, 0.4) 0%, rgba(255, 255, 255, 0.8) 65%, #FFFFFF 100%)',
        }}
      />
    </div>
  );
};
