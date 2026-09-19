'use client';

import React, { useEffect, useRef } from 'react';

interface DitherWaveProps {
  className?: string;
  waveSpeed?: number;
  waveFrequency?: number;
  waveAmplitude?: number;
  ditherSize?: number;
  color1?: string; // Deep IEEE Blue (e.g. #0284C7)
  color2?: string; // Sky Blue (e.g. #38BDF8)
  color3?: string; // Ice Blue (e.g. #BAE6FD)
  color4?: string; // Pure White / Light Ice (e.g. #FFFFFF)
  interactive?: boolean;
}

const hexToRgb = (hex: string): [number, number, number] => {
  const sanitized = hex.replace('#', '').trim();
  const fullHex = sanitized.length === 3 ? sanitized.split('').map((c) => c + c).join('') : sanitized;
  const num = parseInt(fullHex, 16);
  return [((num >> 16) & 255) / 255, ((num >> 8) & 255) / 255, (num & 255) / 255];
};

const vertexShaderSource = `
  attribute vec2 a_position;
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;

const fragmentShaderSource = `
  precision highp float;
  uniform vec2 u_resolution;
  uniform float u_time;
  uniform vec2 u_mouse;
  uniform vec3 u_color1;
  uniform vec3 u_color2;
  uniform vec3 u_color3;
  uniform vec3 u_color4;
  uniform float u_wave_speed;
  uniform float u_wave_frequency;
  uniform float u_wave_amplitude;
  uniform float u_dither_size;

  float bayer8x8(vec2 uv) {
    int x = int(mod(uv.x, 8.0));
    int y = int(mod(uv.y, 8.0));
    
    // 8x8 Bayer Matrix values normalized [0..1]
    int index = y * 8 + x;
    
    // Compact Bayer matrix lookup
    if (index == 0) return 0.0/64.0; if (index == 1) return 32.0/64.0; if (index == 2) return 8.0/64.0; if (index == 3) return 40.0/64.0;
    if (index == 4) return 2.0/64.0; if (index == 5) return 34.0/64.0; if (index == 6) return 10.0/64.0; if (index == 7) return 42.0/64.0;
    if (index == 8) return 48.0/64.0; if (index == 9) return 16.0/64.0; if (index == 10) return 56.0/64.0; if (index == 11) return 24.0/64.0;
    if (index == 12) return 50.0/64.0; if (index == 13) return 18.0/64.0; if (index == 14) return 58.0/64.0; if (index == 15) return 26.0/64.0;
    if (index == 16) return 12.0/64.0; if (index == 17) return 44.0/64.0; if (index == 18) return 4.0/64.0; if (index == 19) return 36.0/64.0;
    if (index == 20) return 14.0/64.0; if (index == 21) return 46.0/64.0; if (index == 22) return 6.0/64.0; if (index == 23) return 38.0/64.0;
    if (index == 24) return 60.0/64.0; if (index == 25) return 28.0/64.0; if (index == 26) return 52.0/64.0; if (index == 27) return 20.0/64.0;
    if (index == 28) return 62.0/64.0; if (index == 29) return 30.0/64.0; if (index == 30) return 54.0/64.0; if (index == 31) return 22.0/64.0;
    if (index == 32) return 3.0/64.0; if (index == 33) return 35.0/64.0; if (index == 34) return 11.0/64.0; if (index == 35) return 43.0/64.0;
    if (index == 36) return 1.0/64.0; if (index == 37) return 33.0/64.0; if (index == 38) return 9.0/64.0; if (index == 39) return 41.0/64.0;
    if (index == 40) return 51.0/64.0; if (index == 41) return 19.0/64.0; if (index == 42) return 59.0/64.0; if (index == 43) return 27.0/64.0;
    if (index == 44) return 49.0/64.0; if (index == 45) return 17.0/64.0; if (index == 46) return 57.0/64.0; if (index == 47) return 25.0/64.0;
    if (index == 48) return 15.0/64.0; if (index == 49) return 47.0/64.0; if (index == 50) return 7.0/64.0; if (index == 51) return 39.0/64.0;
    if (index == 52) return 13.0/64.0; if (index == 53) return 45.0/64.0; if (index == 54) return 5.0/64.0; if (index == 55) return 37.0/64.0;
    if (index == 56) return 63.0/64.0; if (index == 57) return 31.0/64.0; if (index == 58) return 55.0/64.0; if (index == 59) return 23.0/64.0;
    return 61.0/64.0;
  }

  void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / min(u_resolution.x, u_resolution.y);
    
    float t = u_time * u_wave_speed;
    
    // Harmonic sinusoidal fluid wave interference equations
    float wave1 = sin(uv.x * u_wave_frequency * 2.2 + t * 0.9) * cos(uv.y * u_wave_frequency * 1.8 + t * 0.7);
    float wave2 = sin(length(uv - u_mouse * 0.3) * (u_wave_frequency * 3.2) - t * 1.1) * 0.45;
    float wave3 = cos((uv.x * 1.4 + uv.y * 1.2) * u_wave_frequency * 1.6 + t * 0.8) * 0.35;
    float wave4 = sin(uv.y * u_wave_frequency * 2.8 - t * 0.5) * 0.25;
    
    float waveHeight = (wave1 + wave2 + wave3 + wave4) * u_wave_amplitude;
    float elevation = clamp(waveHeight * 0.5 + 0.5, 0.0, 1.0);
    
    // Calculate ordered dither pattern threshold
    float ditherThreshold = bayer8x8(gl_FragCoord.xy / u_dither_size);
    
    // Multi-tier smooth dither quantization
    float ditherVal = elevation + (ditherThreshold - 0.5) * 0.32;
    ditherVal = clamp(ditherVal, 0.0, 1.0);
    
    // Color blending across stops
    vec3 col;
    if (ditherVal < 0.28) {
      col = mix(u_color4, u_color3, smoothstep(0.0, 0.28, ditherVal));
    } else if (ditherVal < 0.65) {
      col = mix(u_color3, u_color2, smoothstep(0.28, 0.65, ditherVal));
    } else {
      col = mix(u_color2, u_color1, smoothstep(0.65, 1.0, ditherVal));
    }
    
    gl_FragColor = vec4(col, 1.0);
  }
`;

export const DitherWave: React.FC<DitherWaveProps> = ({
  className = '',
  waveSpeed = 0.85,
  waveFrequency = 1.4,
  waveAmplitude = 0.55,
  ditherSize = 2.0,
  color1 = '#0284C7', // IEEE Blue
  color2 = '#38BDF8', // Light Cyan
  color3 = '#BAE6FD', // Soft Sky
  color4 = '#FFFFFF', // Clean White
  interactive = true,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl', { antialias: false, alpha: false });
    if (!gl) return;

    // Create shader program
    const createShader = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vert = createShader(gl.VERTEX_SHADER, vertexShaderSource);
    const frag = createShader(gl.FRAGMENT_SHADER, fragmentShaderSource);
    if (!vert || !frag) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vert);
    gl.attachShader(program, frag);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;

    gl.useProgram(program);

    // Quad geometry (full-screen triangle fan)
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    );

    const aPosition = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(aPosition);
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);

    // Uniform locations
    const uResolution = gl.getUniformLocation(program, 'u_resolution');
    const uTime = gl.getUniformLocation(program, 'u_time');
    const uMouse = gl.getUniformLocation(program, 'u_mouse');
    const uColor1 = gl.getUniformLocation(program, 'u_color1');
    const uColor2 = gl.getUniformLocation(program, 'u_color2');
    const uColor3 = gl.getUniformLocation(program, 'u_color3');
    const uColor4 = gl.getUniformLocation(program, 'u_color4');
    const uWaveSpeed = gl.getUniformLocation(program, 'u_wave_speed');
    const uWaveFrequency = gl.getUniformLocation(program, 'u_wave_frequency');
    const uWaveAmplitude = gl.getUniformLocation(program, 'u_wave_amplitude');
    const uDitherSize = gl.getUniformLocation(program, 'u_dither_size');

    // Set colors
    const rgb1 = hexToRgb(color1);
    const rgb2 = hexToRgb(color2);
    const rgb3 = hexToRgb(color3);
    const rgb4 = hexToRgb(color4);

    gl.uniform3f(uColor1, rgb1[0], rgb1[1], rgb1[2]);
    gl.uniform3f(uColor2, rgb2[0], rgb2[1], rgb2[2]);
    gl.uniform3f(uColor3, rgb3[0], rgb3[1], rgb3[2]);
    gl.uniform3f(uColor4, rgb4[0], rgb4[1], rgb4[2]);
    gl.uniform1f(uWaveSpeed, waveSpeed);
    gl.uniform1f(uWaveFrequency, waveFrequency);
    gl.uniform1f(uWaveAmplitude, waveAmplitude);
    gl.uniform1f(uDitherSize, ditherSize);

    let animationFrameId: number;
    let startTime = performance.now();

    const resize = () => {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const displayWidth = canvas.parentElement?.clientWidth || window.innerWidth;
      const displayHeight = canvas.parentElement?.clientHeight || window.innerHeight;

      if (canvas.width !== displayWidth * dpr || canvas.height !== displayHeight * dpr) {
        canvas.width = displayWidth * dpr;
        canvas.height = displayHeight * dpr;
        gl.viewport(0, 0, canvas.width, canvas.height);
      }
    };

    window.addEventListener('resize', resize);
    resize();

    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive || !canvas) return;
      const rect = canvas.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseRef.current = { x, y };
    };

    window.addEventListener('mousemove', handleMouseMove);

    const render = (timeNow: number) => {
      const elapsed = (timeNow - startTime) * 0.001;

      gl.uniform2f(uResolution, canvas.width, canvas.height);
      gl.uniform1f(uTime, elapsed);
      gl.uniform2f(uMouse, mouseRef.current.x, mouseRef.current.y);

      gl.drawArrays(gl.TRIANGLES, 0, 6);
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      gl.deleteProgram(program);
      gl.deleteShader(vert);
      gl.deleteShader(frag);
      gl.deleteBuffer(positionBuffer);
    };
  }, [color1, color2, color3, color4, ditherSize, interactive, waveAmplitude, waveFrequency, waveSpeed]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none select-none ${className}`}>
      {/* 60fps GPU Accelerated Dither Wave Canvas */}
      <canvas ref={canvasRef} className="w-full h-full object-cover opacity-85 transform-gpu" />

      {/* Atmospheric Soft Light Overlay for Optimal Typography Contrast */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background:
            'radial-gradient(circle at 60% 40%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.7) 65%, #FFFFFF 100%)',
        }}
      />
    </div>
  );
};
