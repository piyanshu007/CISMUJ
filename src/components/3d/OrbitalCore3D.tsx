'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export const OrbitalCore3D: React.FC<{ className?: string }> = ({ className = '' }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let animationFrameId: number;

    const getWidth = () => container.clientWidth || 600;
    const getHeight = () => container.clientHeight || 500;

    let width = getWidth();
    let height = getHeight();

    // 1. Scene Setup
    const scene = new THREE.Scene();

    // 2. Camera Setup
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 5.8);

    // 3. Renderer with Antialiasing & Alpha
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // 4. Vibrant Illumination & Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 2.8);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x38bdf8, 3.5);
    dirLight1.position.set(4, 5, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x0284c7, 3.0);
    dirLight2.position.set(-4, -4, 3);
    scene.add(dirLight2);

    const corePointLight = new THREE.PointLight(0x38bdf8, 5.0, 10);
    corePointLight.position.set(0, 0, 1.5);
    scene.add(corePointLight);

    // 5. Main 3D Orbital Assembly Group
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // A. Soft Core Glow Texture
    const createRadialGlow = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 256;
      canvas.height = 256;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const gradient = ctx.createRadialGradient(128, 128, 10, 128, 128, 128);
        gradient.addColorStop(0, 'rgba(56, 189, 248, 0.9)');
        gradient.addColorStop(0.3, 'rgba(2, 132, 199, 0.5)');
        gradient.addColorStop(0.7, 'rgba(2, 132, 199, 0.15)');
        gradient.addColorStop(1, 'rgba(2, 132, 199, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 256, 256);
      }
      return new THREE.CanvasTexture(canvas);
    };

    const glowTex = createRadialGlow();
    const glowGeo = new THREE.PlaneGeometry(4.2, 4.2);
    const glowMat = new THREE.MeshBasicMaterial({
      map: glowTex,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide,
    });
    const coreGlowMesh = new THREE.Mesh(glowGeo, glowMat);
    coreGlowMesh.position.z = -0.1;
    rootGroup.add(coreGlowMesh);

    // B. Central 3D CIS Fluid Emblem
    const textureLoader = new THREE.TextureLoader();
    const logoMat = new THREE.MeshBasicMaterial({
      transparent: true,
      side: THREE.DoubleSide,
      depthWrite: false,
    });

    textureLoader.load('/logo-mark.png', (tex) => {
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.generateMipmaps = true;
      logoMat.map = tex;
      logoMat.needsUpdate = true;
    });

    const logoGeo = new THREE.PlaneGeometry(1.6, 1.6);
    const logoMesh = new THREE.Mesh(logoGeo, logoMat);
    logoMesh.position.z = 0.05;
    rootGroup.add(logoMesh);

    // Central Glass Sphere behind logo
    const glassCoreGeo = new THREE.SphereGeometry(0.9, 32, 32);
    const glassCoreMat = new THREE.MeshPhysicalMaterial({
      color: 0xbae6fd,
      emissive: 0x0284c7,
      emissiveIntensity: 0.4,
      roughness: 0.1,
      metalness: 0.1,
      transmission: 0.6,
      transparent: true,
      opacity: 0.85,
    });
    const glassCoreMesh = new THREE.Mesh(glassCoreGeo, glassCoreMat);
    rootGroup.add(glassCoreMesh);

    // C. 3D Glowing Orbital Rings
    // Ring 1: Primary Tilted Neon Ring
    const ring1Group = new THREE.Group();
    const torus1Geo = new THREE.TorusGeometry(2.0, 0.035, 16, 100);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x0284c7,
      emissiveIntensity: 1.2,
      roughness: 0.2,
      metalness: 0.8,
    });
    const ring1Mesh = new THREE.Mesh(torus1Geo, ring1Mat);
    ring1Group.add(ring1Mesh);
    ring1Group.rotation.x = Math.PI / 2.8;
    ring1Group.rotation.y = -Math.PI / 6;
    rootGroup.add(ring1Group);

    // Ring 2: Counter-Tilted Glowing Ring
    const ring2Group = new THREE.Group();
    const torus2Geo = new THREE.TorusGeometry(2.35, 0.028, 16, 100);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      emissive: 0x38bdf8,
      emissiveIntensity: 0.9,
      roughness: 0.2,
      metalness: 0.8,
    });
    const ring2Mesh = new THREE.Mesh(torus2Geo, ring2Mat);
    ring2Group.add(ring2Mesh);
    ring2Group.rotation.x = -Math.PI / 3.2;
    ring2Group.rotation.y = Math.PI / 4.5;
    rootGroup.add(ring2Group);

    // Ring 3: Outer Wide Delicate Orbit Track
    const ring3Group = new THREE.Group();
    const torus3Geo = new THREE.TorusGeometry(2.7, 0.018, 16, 100);
    const ring3Mat = new THREE.MeshStandardMaterial({
      color: 0x7dd3fc,
      emissive: 0x0369a1,
      emissiveIntensity: 0.7,
      roughness: 0.3,
      metalness: 0.6,
    });
    const ring3Mesh = new THREE.Mesh(torus3Geo, ring3Mat);
    ring3Group.add(ring3Mesh);
    ring3Group.rotation.x = Math.PI / 5;
    ring3Group.rotation.z = Math.PI / 7;
    rootGroup.add(ring3Group);

    // D. Orbiting 3D Glass Satellite Spheres
    const createSatelliteSphere = (radius: number, colorHex: number, emissiveHex: number) => {
      const geo = new THREE.SphereGeometry(radius, 32, 32);
      const mat = new THREE.MeshPhysicalMaterial({
        color: colorHex,
        emissive: emissiveHex,
        emissiveIntensity: 0.8,
        roughness: 0.08,
        metalness: 0.2,
        clearcoat: 1.0,
        clearcoatRoughness: 0.1,
      });
      return new THREE.Mesh(geo, mat);
    };

    const sat1 = createSatelliteSphere(0.24, 0x38bdf8, 0x0284c7);
    const sat2 = createSatelliteSphere(0.18, 0x7dd3fc, 0x0369a1);
    const sat3 = createSatelliteSphere(0.32, 0x0284c7, 0x38bdf8);
    const sat4 = createSatelliteSphere(0.14, 0xbae6fd, 0x0284c7);

    rootGroup.add(sat1);
    rootGroup.add(sat2);
    rootGroup.add(sat3);
    rootGroup.add(sat4);

    // E. 3D Floating Constellation Synapse Particle Field
    const particleCount = 140;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const particleScales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = 1.6 + Math.random() * 1.8;

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);

      particleScales[i] = Math.random() * 0.05 + 0.02;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Particle Canvas Dot Texture
    const createParticleTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const gradient = ctx.createRadialGradient(32, 32, 2, 32, 32, 32);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.3, 'rgba(56, 189, 248, 0.9)');
        gradient.addColorStop(0.7, 'rgba(2, 132, 199, 0.3)');
        gradient.addColorStop(1, 'rgba(2, 132, 199, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 64, 64);
      }
      return new THREE.CanvasTexture(canvas);
    };

    const particleMat = new THREE.PointsMaterial({
      size: 0.14,
      map: createParticleTexture(),
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particlePoints = new THREE.Points(particleGeo, particleMat);
    rootGroup.add(particlePoints);

    // 6. Interactive Drag & Mouse Tilt Physics
    const targetRotation = { x: 0, y: 0 };
    const currentRotation = { x: 0, y: 0 };
    const mouse = { x: 0, y: 0 };
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      if (isDragging) {
        const deltaX = e.clientX - previousMousePosition.x;
        const deltaY = e.clientY - previousMousePosition.y;
        targetRotation.y += deltaX * 0.008;
        targetRotation.x += deltaY * 0.008;
        previousMousePosition = { x: e.clientX, y: e.clientY };
      } else {
        targetRotation.x = mouse.y * 0.35;
        targetRotation.y = mouse.x * 0.45;
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      if ((e.target as HTMLElement)?.closest('a, button, input')) return;
      isDragging = true;
      setIsInteracting(true);
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDragging = false;
      setIsInteracting(false);
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        setIsInteracting(true);
        previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging && e.touches.length === 1) {
        const deltaX = e.touches[0].clientX - previousMousePosition.x;
        const deltaY = e.touches[0].clientY - previousMousePosition.y;
        targetRotation.y += deltaX * 0.006;
        targetRotation.x += deltaY * 0.006;
        previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const handleTouchEnd = () => {
      isDragging = false;
      setIsInteracting(false);
    };

    const handleResize = () => {
      if (!container) return;
      const w = getWidth();
      const h = getHeight();
      if (w === 0 || h === 0) return;

      const isDsk = w > 1024;
      const isTab = w >= 640 && w <= 1024;

      camera.aspect = w / h;
      camera.position.z = isDsk ? 5.6 : isTab ? 5.8 : 5.4;

      const scale = isDsk ? 1.08 : isTab ? 0.95 : 0.82;
      rootGroup.scale.set(scale, scale, scale);

      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    // 7. Intersection Observer for Performance
    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('mousedown', handleMouseDown);
    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    setTimeout(handleResize, 50);

    // 8. Dynamic Animation Loop
    const clock = new THREE.Clock();

    const animate = () => {
      if (!isVisible || document.hidden) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }

      const t = clock.getElapsedTime();

      // Continuous rotation of orbital rings
      ring1Group.rotation.z = t * 0.35;
      ring2Group.rotation.z = -t * 0.28;
      ring3Group.rotation.z = t * 0.18;

      // Orbiting Satellites along 3D orbits
      const r1 = 2.0;
      sat1.position.x = Math.cos(t * 1.2) * r1;
      sat1.position.y = Math.sin(t * 1.2) * Math.sin(Math.PI / 2.8) * r1;
      sat1.position.z = Math.sin(t * 1.2) * Math.cos(Math.PI / 2.8) * r1;

      const r2 = 2.35;
      sat2.position.x = Math.cos(-t * 0.9 + 1.5) * r2;
      sat2.position.y = Math.sin(-t * 0.9 + 1.5) * Math.sin(-Math.PI / 3.2) * r2;
      sat2.position.z = Math.sin(-t * 0.9 + 1.5) * Math.cos(-Math.PI / 3.2) * r2;

      const r3 = 2.7;
      sat3.position.x = Math.cos(t * 0.6 + 3.2) * r3;
      sat3.position.y = Math.sin(t * 0.6 + 3.2) * Math.sin(Math.PI / 5) * r3;
      sat3.position.z = Math.sin(t * 0.6 + 3.2) * Math.cos(Math.PI / 5) * r3;

      const r4 = 1.35;
      sat4.position.x = Math.sin(t * 1.8) * r4;
      sat4.position.y = Math.cos(t * 1.8) * r4 * 0.4;
      sat4.position.z = Math.cos(t * 1.8) * r4 * 0.8;

      // Gentle floating animation
      const floatY = Math.sin(t * 1.4) * 0.08;
      rootGroup.position.y = floatY;

      // Pulse core glow
      coreGlowMesh.scale.setScalar(1.0 + Math.sin(t * 2.5) * 0.08);
      glassCoreMesh.scale.setScalar(1.0 + Math.sin(t * 1.8) * 0.04);

      // Synapse particle rotation
      particlePoints.rotation.y = t * 0.08;
      particlePoints.rotation.x = Math.sin(t * 0.2) * 0.1;

      // Smooth cursor lerp
      currentRotation.x += (targetRotation.x - currentRotation.x) * 0.08;
      currentRotation.y += (targetRotation.y - currentRotation.y) * 0.08;

      if (!isDragging) {
        rootGroup.rotation.y = currentRotation.y + Math.sin(t * 0.5) * 0.08;
        rootGroup.rotation.x = currentRotation.x + Math.cos(t * 0.6) * 0.05;
      } else {
        rootGroup.rotation.y = targetRotation.y;
        rootGroup.rotation.x = targetRotation.x;
      }

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('mousedown', handleMouseDown);
      container.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);

      logoGeo.dispose();
      logoMat.dispose();
      glowGeo.dispose();
      glowMat.dispose();
      glowTex.dispose();
      glassCoreGeo.dispose();
      glassCoreMat.dispose();
      torus1Geo.dispose();
      ring1Mat.dispose();
      torus2Geo.dispose();
      ring2Mat.dispose();
      torus3Geo.dispose();
      ring3Mat.dispose();
      sat1.geometry.dispose();
      (sat1.material as THREE.Material).dispose();
      sat2.geometry.dispose();
      (sat2.material as THREE.Material).dispose();
      sat3.geometry.dispose();
      (sat3.material as THREE.Material).dispose();
      sat4.geometry.dispose();
      (sat4.material as THREE.Material).dispose();
      particleGeo.dispose();
      particleMat.dispose();

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className={`w-full h-full min-h-[340px] sm:min-h-[440px] lg:min-h-[500px] cursor-grab select-none flex items-center justify-center ${
        isInteracting ? 'cursor-grabbing' : ''
      } ${className}`}
    />
  );
};
