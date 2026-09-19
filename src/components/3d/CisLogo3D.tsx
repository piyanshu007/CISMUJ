'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export const CisLogo3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let animationFrameId: number;

    const getWidth = () => container.clientWidth || window.innerWidth || 800;
    const getHeight = () => container.clientHeight || window.innerHeight || 600;

    let width = getWidth();
    let height = getHeight();

    // 1. Scene setup
    const scene = new THREE.Scene();

    // 2. Camera setup
    const isDesktop = width > 1024;
    const isTablet = width >= 640 && width <= 1024;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, isDesktop ? 5.2 : isTablet ? 5.4 : 5.2);

    // 3. Renderer with antialiasing and alpha
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // 4. Vibrant Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 3.0);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.5);
    keyLight.position.set(5, 6, 6);
    scene.add(keyLight);

    // 5. Create 3D Logo Object Group
    const mainGroup = new THREE.Group();
    const initialScale = isDesktop ? 1.15 : isTablet ? 0.98 : 0.85;
    mainGroup.scale.set(initialScale, initialScale, initialScale);
    const defaultOffsetX = isDesktop ? 1.35 : isTablet ? 0.75 : 0.0;
    const defaultOffsetY = 0.0;
    mainGroup.position.set(defaultOffsetX, defaultOffsetY, 0);
    scene.add(mainGroup);

    // Soft Radial Glow Aura Canvas Texture
    const createGlowTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 512;
      canvas.height = 512;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const gradient = ctx.createRadialGradient(256, 256, 20, 256, 256, 240);
        gradient.addColorStop(0, 'rgba(56, 189, 248, 0.45)');
        gradient.addColorStop(0.4, 'rgba(2, 132, 199, 0.20)');
        gradient.addColorStop(0.8, 'rgba(2, 132, 199, 0.04)');
        gradient.addColorStop(1, 'rgba(2, 132, 199, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 512, 512);
      }
      const tex = new THREE.CanvasTexture(canvas);
      return tex;
    };

    const glowTex = createGlowTexture();
    const glowGeo = new THREE.PlaneGeometry(3.8, 3.8);
    const glowMat = new THREE.MeshBasicMaterial({
      map: glowTex,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide,
    });
    const glowMesh = new THREE.Mesh(glowGeo, glowMat);
    glowMesh.position.z = -0.05;
    mainGroup.add(glowMesh);

    // Clean Official Logo Texture Loader
    const textureLoader = new THREE.TextureLoader();
    const logoMat = new THREE.MeshBasicMaterial({
      transparent: true,
      side: THREE.DoubleSide,
      depthWrite: false,
    });

    textureLoader.load(
      '/cis-emblem-clean.png',
      (texture) => {
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.generateMipmaps = true;
        texture.minFilter = THREE.LinearMipmapLinearFilter;
        texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
        logoMat.map = texture;
        logoMat.needsUpdate = true;
      },
      undefined,
      (err) => {
        console.error('Error loading clean official CIS logo texture:', err);
      }
    );

    // Precise Aspect-Ratio Matching Plane (187 / 214 = ~0.874)
    // 2.8 height * 0.874 = ~2.45 width
    const logoGeo = new THREE.PlaneGeometry(2.45, 2.8);
    const logoMesh = new THREE.Mesh(logoGeo, logoMat);
    mainGroup.add(logoMesh);

    // Interactive Physics (Tilt & Lerp instead of 360 spin)
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
        targetRotation.y += deltaX * 0.005;
        targetRotation.x += deltaY * 0.005;
        // Clamp drag angles so it stays facing forward
        targetRotation.x = Math.max(-0.4, Math.min(0.4, targetRotation.x));
        targetRotation.y = Math.max(-0.5, Math.min(0.5, targetRotation.y));
        previousMousePosition = { x: e.clientX, y: e.clientY };
      } else {
        targetRotation.x = mouse.y * 0.25;
        targetRotation.y = mouse.x * 0.35;
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
        targetRotation.y += deltaX * 0.004;
        targetRotation.x += deltaY * 0.004;
        targetRotation.x = Math.max(-0.4, Math.min(0.4, targetRotation.x));
        targetRotation.y = Math.max(-0.5, Math.min(0.5, targetRotation.y));
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
      const desktop = w > 1024;
      const tablet = w >= 640 && w <= 1024;

      camera.aspect = w / h;
      camera.position.z = desktop ? 5.2 : tablet ? 5.4 : 5.2;

      const scale = desktop ? 1.15 : tablet ? 0.98 : 0.85;
      mainGroup.scale.set(scale, scale, scale);

      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

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

    const clock = new THREE.Clock();

    const animate = () => {
      if (!isVisible || document.hidden) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }

      const elapsedTime = clock.getElapsedTime();

      // Gentle floating levitation
      const floatY = Math.sin(elapsedTime * 1.5) * 0.08;
      const floatX = Math.cos(elapsedTime * 1.0) * 0.04;
      const currentWidth = getWidth();
      const isDsk = currentWidth > 1024;
      const isTab = currentWidth >= 640 && currentWidth <= 1024;
      const baseOffsetX = isDsk ? 1.35 : isTab ? 0.85 : 0.0;
      const baseOffsetY = isDsk ? 0.08 : isTab ? 0.08 : 0.05;

      mainGroup.position.y = baseOffsetY + floatY;
      mainGroup.position.x = baseOffsetX + floatX;

      // Soft breathing aura
      glowMat.opacity = 0.4 + Math.sin(elapsedTime * 2.0) * 0.1;

      // Smooth cursor lerp with subtle natural swaying
      currentRotation.x += (targetRotation.x - currentRotation.x) * 0.08;
      currentRotation.y += (targetRotation.y - currentRotation.y) * 0.08;

      mainGroup.rotation.x = currentRotation.x + Math.sin(elapsedTime * 0.8) * 0.02;
      mainGroup.rotation.y = currentRotation.y + Math.cos(elapsedTime * 0.6) * 0.03;
      mainGroup.rotation.z = -currentRotation.y * 0.08;

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

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className={`w-full h-full cursor-grab select-none ${
        isInteracting ? 'cursor-grabbing' : ''
      }`}
    />
  );
};
