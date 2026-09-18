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

    // 2. Camera setup - calibrated for full-height hero background
    const isDesktop = width > 1024;
    const isMobile = width < 768;
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, isDesktop ? 4.9 : (isMobile ? 6.2 : 5.8));

    // 3. Renderer with antialiasing and alpha
    const renderer = new THREE.WebGLRenderer({
      antialias: !isMobile,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.25 : 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // 4. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 2.4);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 2.8);
    dirLight1.position.set(5, 5, 5);
    scene.add(dirLight1);

    const blueRimLight = new THREE.DirectionalLight(0x0284c7, 4.0);
    blueRimLight.position.set(-5, -3, -3);
    scene.add(blueRimLight);

    // 5. Create 3D Emblem Object Group (Offset to right on desktop for typography balance)
    const mainGroup = new THREE.Group();
    const defaultOffsetX = isDesktop ? 1.45 : 0;
    mainGroup.position.set(defaultOffsetX, 0, 0);
    scene.add(mainGroup);

    // Logo Texture Loader with explicit onLoad trigger
    const textureLoader = new THREE.TextureLoader();
    const logoMat = new THREE.MeshBasicMaterial({
      transparent: true,
      side: THREE.DoubleSide,
      depthWrite: false,
    });

    textureLoader.load(
      '/logo-mark.png',
      (texture) => {
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.generateMipmaps = true;
        texture.minFilter = THREE.LinearMipmapLinearFilter;
        logoMat.map = texture;
        logoMat.needsUpdate = true;
      },
      undefined,
      (err) => {
        console.error('Error loading CIS logo texture:', err);
      }
    );

    // Central Floating Logo Decal Plane
    const logoGeo = new THREE.PlaneGeometry(2.5, 2.5);
    const logoMesh = new THREE.Mesh(logoGeo, logoMat);
    mainGroup.add(logoMesh);

    // Outer Glowing Blue Torus Bevel Ring
    const ringGeo = new THREE.TorusGeometry(1.65, 0.045, 32, 100);
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      metalness: 0.8,
      roughness: 0.2,
      emissive: 0x0284c7,
      emissiveIntensity: 0.4,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    mainGroup.add(ringMesh);

    // Orbital Kinetic Ring 1 (IEEE Blue)
    const orbitRing1Geo = new THREE.TorusGeometry(2.7, 0.025, 16, 120);
    const orbitRing1Mat = new THREE.MeshBasicMaterial({
      color: 0x0284c7,
      transparent: true,
      opacity: 0.85,
    });
    const orbitRing1 = new THREE.Mesh(orbitRing1Geo, orbitRing1Mat);
    orbitRing1.rotation.x = Math.PI / 3;
    mainGroup.add(orbitRing1);

    // Orbital Kinetic Ring 2 (Deep Slate)
    const orbitRing2Geo = new THREE.TorusGeometry(3.2, 0.02, 16, 120);
    const orbitRing2Mat = new THREE.MeshBasicMaterial({
      color: 0x0f172a,
      transparent: true,
      opacity: 0.65,
    });
    const orbitRing2 = new THREE.Mesh(orbitRing2Geo, orbitRing2Mat);
    orbitRing2.rotation.y = Math.PI / 4;
    mainGroup.add(orbitRing2);

    // Orbital Quantum Nodes / Beads
    const beadCount = isMobile ? 8 : 14;
    const beadGeo = new THREE.SphereGeometry(0.06, 16, 16);
    const beadMat = new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      roughness: 0.1,
      metalness: 0.9,
      emissive: 0x0284c7,
      emissiveIntensity: 0.3,
    });
    const beads: THREE.Mesh[] = [];

    for (let i = 0; i < beadCount; i++) {
      const bead = new THREE.Mesh(beadGeo, beadMat);
      mainGroup.add(bead);
      beads.push(bead);
    }

    // Floating Quantum Background Particles
    const particleCount = isMobile ? 30 : 70;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 14;
      particlePositions[i + 1] = (Math.random() - 0.5) * 11;
      particlePositions[i + 2] = (Math.random() - 0.5) * 8;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0x0284c7,
      size: isMobile ? 0.08 : 0.065,
      transparent: true,
      opacity: 0.55,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Interactive Drag Physics
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
        targetRotation.x = mouse.y * 0.4;
        targetRotation.y = mouse.x * 0.6;
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
      const desktop = w > 1024;
      const mobile = w < 768;
      camera.aspect = w / h;
      camera.position.z = desktop ? 4.9 : (mobile ? 6.2 : 5.8);
      mainGroup.position.x = desktop ? 1.45 : 0;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    // Intersection Observer to stop rendering when scrolled out of view
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

    // Initial resize trigger to guarantee proper dimensions
    setTimeout(handleResize, 50);

    // Render loop
    const clock = new THREE.Clock();

    const animate = () => {
      if (!isVisible || document.hidden) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }

      const elapsedTime = clock.getElapsedTime();

      // Floating wave animation
      const floatY = Math.sin(elapsedTime * 1.3) * 0.12;
      const floatX = Math.cos(elapsedTime * 0.9) * 0.08;
      const currentWidth = getWidth();
      const isDsk = currentWidth > 1024;
      mainGroup.position.y = floatY;
      mainGroup.position.x = (isDsk ? 1.45 : 0) + floatX;

      // Continuous gentle spin when not dragging
      if (!isDragging) {
        mainGroup.rotation.y += 0.006;
      }

      // Smooth cursor lerp
      currentRotation.x += (targetRotation.x - currentRotation.x) * 0.08;
      currentRotation.y += (targetRotation.y - currentRotation.y) * 0.08;

      mainGroup.rotation.x = currentRotation.x + Math.sin(elapsedTime * 0.6) * 0.03;
      mainGroup.rotation.z = -currentRotation.y * 0.12;

      // Rotate kinetic orbital rings
      orbitRing1.rotation.z = elapsedTime * 0.3;
      orbitRing2.rotation.x = elapsedTime * -0.22;

      // Update beads
      beads.forEach((bead, i) => {
        const angle = (i / beadCount) * Math.PI * 2 + elapsedTime * 0.5;
        const radius = 2.7;
        bead.position.x = Math.cos(angle) * radius;
        bead.position.y = Math.sin(angle) * Math.sin(Math.PI / 3) * radius;
        bead.position.z = Math.sin(angle) * Math.cos(Math.PI / 3) * radius;
      });

      // Background particle drift
      particles.rotation.y = elapsedTime * 0.012;
      particles.rotation.x = elapsedTime * 0.006;

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
