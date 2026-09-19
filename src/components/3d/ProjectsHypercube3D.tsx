'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export const ProjectsHypercube3D: React.FC<{ className?: string }> = ({ className = '' }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let animationFrameId: number;

    const getWidth = () => container.clientWidth || 600;
    const getHeight = () => container.clientHeight || 450;

    let width = getWidth();
    let height = getHeight();

    // 1. Scene Setup
    const scene = new THREE.Scene();

    // 2. Camera Setup
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 1000);
    const updateCameraPos = () => {
      const isMobile = window.innerWidth < 640;
      camera.position.set(0, 0, isMobile ? 6.2 : 5.2);
    };
    updateCameraPos();

    // 3. High Performance Renderer with Antialiasing & Alpha
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // 4. Vibrant Lighting for Glassmorphism & Refraction
    const ambientLight = new THREE.AmbientLight(0xffffff, 2.5);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0x38bdf8, 4.0);
    keyLight.position.set(5, 6, 6);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x0284c7, 3.2);
    fillLight.position.set(-6, -4, 4);
    scene.add(fillLight);

    const topRimLight = new THREE.DirectionalLight(0xe0f2fe, 3.0);
    topRimLight.position.set(0, 6, -3);
    scene.add(topRimLight);

    const innerCoreLight = new THREE.PointLight(0x38bdf8, 6.0, 8);
    innerCoreLight.position.set(0, 0, 0);
    scene.add(innerCoreLight);

    // 5. Main 3D Assembly Root Group
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // --- A. Soft Holographic Ambient Aura Plane ---
    const createRadialGlowTex = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 512;
      canvas.height = 512;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const gradient = ctx.createRadialGradient(256, 256, 15, 256, 256, 250);
        gradient.addColorStop(0, 'rgba(56, 189, 248, 0.85)');
        gradient.addColorStop(0.25, 'rgba(2, 132, 199, 0.45)');
        gradient.addColorStop(0.55, 'rgba(14, 165, 233, 0.15)');
        gradient.addColorStop(0.85, 'rgba(224, 242, 254, 0.04)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 512, 512);
      }
      return new THREE.CanvasTexture(canvas);
    };

    const glowTex = createRadialGlowTex();
    const glowGeo = new THREE.PlaneGeometry(5.8, 5.8);
    const glowMat = new THREE.MeshBasicMaterial({
      map: glowTex,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide,
    });
    const ambientAuraMesh = new THREE.Mesh(glowGeo, glowMat);
    ambientAuraMesh.position.z = -1.2;
    rootGroup.add(ambientAuraMesh);

    // --- B. Layered Glassmorphic Translucent Panels (Floating Prisms) ---
    const glassPanelsGroup = new THREE.Group();
    rootGroup.add(glassPanelsGroup);

    const glassMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0xf0f9ff),
      emissive: new THREE.Color(0x0284c7),
      emissiveIntensity: 0.12,
      roughness: 0.06,
      metalness: 0.08,
      transmission: 0.88,
      ior: 1.5,
      thickness: 1.2,
      specularIntensity: 1.0,
      specularColor: new THREE.Color(0xffffff),
      transparent: true,
      opacity: 0.6,
      side: THREE.DoubleSide,
      depthWrite: false,
    });

    const edgeLineMat = new THREE.LineBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.85,
      linewidth: 1.5,
    });

    const panelConfigs = [
      { w: 2.2, h: 2.6, x: -0.7, y: 0.2, z: -0.4, rotX: 0.15, rotY: -0.35, rotZ: 0.08 },
      { w: 2.4, h: 2.8, x: 0.6, y: -0.1, z: 0.3, rotX: -0.12, rotY: 0.38, rotZ: -0.06 },
      { w: 1.8, h: 2.2, x: 0.1, y: 0.5, z: 0.8, rotX: 0.22, rotY: 0.18, rotZ: 0.12 },
    ];

    const glassPanels: THREE.Mesh[] = [];

    panelConfigs.forEach((cfg) => {
      const pGeo = new THREE.PlaneGeometry(cfg.w, cfg.h);
      const pMesh = new THREE.Mesh(pGeo, glassMat);
      pMesh.position.set(cfg.x, cfg.y, cfg.z);
      pMesh.rotation.set(cfg.rotX, cfg.rotY, cfg.rotZ);

      // Glowing crisp cyan border on each panel
      const edges = new THREE.EdgesGeometry(pGeo);
      const line = new THREE.LineSegments(edges, edgeLineMat);
      pMesh.add(line);

      glassPanelsGroup.add(pMesh);
      glassPanels.push(pMesh);
    });

    // --- C. 3D Neural Tesseract / Hypercube Assembly ---
    const hypercubeGroup = new THREE.Group();
    rootGroup.add(hypercubeGroup);

    // 1. Outer Wireframe Cube
    const outerCubeGeo = new THREE.BoxGeometry(1.6, 1.6, 1.6);
    const outerCubeEdges = new THREE.EdgesGeometry(outerCubeGeo);
    const outerCubeMat = new THREE.LineBasicMaterial({
      color: 0x0284c7,
      transparent: true,
      opacity: 0.9,
    });
    const outerCubeWire = new THREE.LineSegments(outerCubeEdges, outerCubeMat);
    hypercubeGroup.add(outerCubeWire);

    // Outer Cube Semi-translucent glass faces
    const outerGlassMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0x38bdf8),
      roughness: 0.1,
      metalness: 0.1,
      transmission: 0.92,
      ior: 1.4,
      transparent: true,
      opacity: 0.22,
      depthWrite: false,
    });
    const outerCubeMesh = new THREE.Mesh(outerCubeGeo, outerGlassMat);
    hypercubeGroup.add(outerCubeMesh);

    // 2. Inner Rotating Hypercube Core
    const innerCubeGeo = new THREE.BoxGeometry(0.9, 0.9, 0.9);
    const innerCubeEdges = new THREE.EdgesGeometry(innerCubeGeo);
    const innerCubeLineMat = new THREE.LineBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 1.0,
    });
    const innerCubeWire = new THREE.LineSegments(innerCubeEdges, innerCubeLineMat);
    hypercubeGroup.add(innerCubeWire);

    // 3. Central Faceted Crystalline Octahedron Core
    const crystalGeo = new THREE.OctahedronGeometry(0.48, 0);
    const crystalMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0xffffff),
      emissive: new THREE.Color(0x0284c7),
      emissiveIntensity: 0.6,
      roughness: 0.05,
      metalness: 0.2,
      transmission: 0.85,
      ior: 2.1,
      thickness: 1.5,
      transparent: true,
      opacity: 0.85,
    });
    const crystalCore = new THREE.Mesh(crystalGeo, crystalMat);
    hypercubeGroup.add(crystalCore);

    // 4. Glowing Vertex Nodes (Corner Spheres with Light Beacons)
    const vertexPositions = [
      [-0.8, -0.8, -0.8],
      [0.8, -0.8, -0.8],
      [-0.8, 0.8, -0.8],
      [0.8, 0.8, -0.8],
      [-0.8, -0.8, 0.8],
      [0.8, -0.8, 0.8],
      [-0.8, 0.8, 0.8],
      [0.8, 0.8, 0.8],
    ];

    const nodeGeo = new THREE.SphereGeometry(0.065, 16, 16);
    const nodeMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0x38bdf8,
      emissiveIntensity: 2.2,
      roughness: 0.1,
    });

    const beaconPulseMeshes: THREE.Mesh[] = [];
    const beaconPulseMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.7,
      wireframe: true,
    });

    vertexPositions.forEach(([x, y, z]) => {
      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
      nodeMesh.position.set(x, y, z);
      hypercubeGroup.add(nodeMesh);

      // Micro pulsing aura beacon sphere around each node
      const pulseGeo = new THREE.SphereGeometry(0.12, 12, 12);
      const pulseMesh = new THREE.Mesh(pulseGeo, beaconPulseMat);
      pulseMesh.position.set(x, y, z);
      hypercubeGroup.add(pulseMesh);
      beaconPulseMeshes.push(pulseMesh);
    });

    // 5. Connecting 4D Tesseract Projection Lines (Corners to Inner Core)
    const tesseractLineGeo = new THREE.BufferGeometry();
    const lineVertices: number[] = [];
    vertexPositions.forEach(([x, y, z]) => {
      // Connect outer vertex to corresponding inner vertex (scaled by 0.56)
      lineVertices.push(x, y, z);
      lineVertices.push(x * 0.56, y * 0.56, z * 0.56);
    });
    tesseractLineGeo.setAttribute('position', new THREE.Float32BufferAttribute(lineVertices, 3));
    const tesseractLineMat = new THREE.LineSegments(
      tesseractLineGeo,
      new THREE.LineBasicMaterial({
        color: 0x38bdf8,
        transparent: true,
        opacity: 0.75,
      })
    );
    hypercubeGroup.add(tesseractLineMat);

    // --- D. Holographic Concentric Orbital Rings & Reticles ---
    const orbitalRingGroup = new THREE.Group();
    rootGroup.add(orbitalRingGroup);

    const createDashedRing = (radius: number, color: number, opacity: number) => {
      const curve = new THREE.EllipseCurve(0, 0, radius, radius, 0, 2 * Math.PI, false, 0);
      const points = curve.getPoints(80);
      const geo = new THREE.BufferGeometry().setFromPoints(points);
      const mat = new THREE.LineDashedMaterial({
        color: color,
        dashSize: 0.15,
        gapSize: 0.08,
        transparent: true,
        opacity: opacity,
      });
      const line = new THREE.Line(geo, mat);
      line.computeLineDistances();
      return line;
    };

    const ring1 = createDashedRing(1.9, 0x0284c7, 0.65);
    ring1.rotation.x = Math.PI / 3;
    orbitalRingGroup.add(ring1);

    const ring2 = createDashedRing(2.3, 0x38bdf8, 0.5);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.x = -Math.PI / 5;
    orbitalRingGroup.add(ring2);

    const ring3 = createDashedRing(1.5, 0x0369a1, 0.45);
    ring3.rotation.z = Math.PI / 6;
    ring3.rotation.x = Math.PI / 2.5;
    orbitalRingGroup.add(ring3);

    // Orbiting Photons / Data Nodes on Rings
    const orbitPhotonGeo = new THREE.SphereGeometry(0.05, 12, 12);
    const orbitPhotonMat1 = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
    const orbitPhotonMat2 = new THREE.MeshBasicMaterial({ color: 0x0284c7 });

    const photon1 = new THREE.Mesh(orbitPhotonGeo, orbitPhotonMat1);
    const photon2 = new THREE.Mesh(orbitPhotonGeo, orbitPhotonMat2);
    const photon3 = new THREE.Mesh(orbitPhotonGeo, orbitPhotonMat1);
    orbitalRingGroup.add(photon1);
    orbitalRingGroup.add(photon2);
    orbitalRingGroup.add(photon3);

    // --- E. Floating Synapse Particle Sparkle Cloud ---
    const particleCount = 110;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleScales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const radius = 1.2 + Math.random() * 2.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      particlePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = radius * Math.cos(phi);
      particleScales[i] = Math.random() * 0.05 + 0.02;
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.045,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });
    const particlePoints = new THREE.Points(particleGeo, particleMat);
    rootGroup.add(particlePoints);

    // --- 6. Interactive Mouse & Touch Physics with Smooth Damping ---
    let targetRotX = 0.2;
    let targetRotY = -0.4;
    let currentRotX = 0.2;
    let currentRotY = -0.4;
    let isDragging = false;
    let prevPointerX = 0;
    let prevPointerY = 0;

    const handlePointerDown = (e: PointerEvent) => {
      isDragging = true;
      setIsInteracting(true);
      prevPointerX = e.clientX;
      prevPointerY = e.clientY;
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (isDragging) {
        const deltaX = e.clientX - prevPointerX;
        const deltaY = e.clientY - prevPointerY;
        targetRotY += deltaX * 0.008;
        targetRotX += deltaY * 0.008;
        prevPointerX = e.clientX;
        prevPointerY = e.clientY;
      } else {
        const rect = container.getBoundingClientRect();
        const normX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        const normY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
        targetRotY = normX * 0.6;
        targetRotX = -normY * 0.45;
      }
    };

    const handlePointerUp = () => {
      isDragging = false;
      setIsInteracting(false);
    };

    container.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);

    // --- 7. Resize Handler ---
    const handleResize = () => {
      if (!container) return;
      width = getWidth();
      height = getHeight();
      camera.aspect = width / height;
      updateCameraPos();
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // --- 8. Render & Animation Loop ---
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth inertia interpolation
      currentRotX += (targetRotX - currentRotX) * 0.06;
      currentRotY += (targetRotY - currentRotY) * 0.06;

      rootGroup.rotation.x = currentRotX + Math.sin(elapsedTime * 0.8) * 0.04;
      rootGroup.rotation.y = currentRotY + elapsedTime * 0.15;
      rootGroup.position.y = Math.sin(elapsedTime * 1.2) * 0.08;

      // Inner Tesseract Counter-Rotation
      hypercubeGroup.rotation.x = elapsedTime * 0.35;
      hypercubeGroup.rotation.y = elapsedTime * 0.45;
      innerCubeWire.rotation.x = -elapsedTime * 0.6;
      innerCubeWire.rotation.y = -elapsedTime * 0.5;

      // Crystal Core Pulse & Rotation
      crystalCore.rotation.x = elapsedTime * 0.8;
      crystalCore.rotation.z = elapsedTime * 0.6;
      const crystalScale = 1.0 + Math.sin(elapsedTime * 3) * 0.08;
      crystalCore.scale.set(crystalScale, crystalScale, crystalScale);

      // Vertex Beacon Pulses
      beaconPulseMeshes.forEach((mesh, idx) => {
        const pulse = 1.0 + Math.sin(elapsedTime * 4 + idx * 0.8) * 0.45;
        mesh.scale.set(pulse, pulse, pulse);
      });

      // Glass panels gentle independent breathing
      glassPanels.forEach((panel, idx) => {
        panel.rotation.z = panelConfigs[idx].rotZ + Math.sin(elapsedTime * 0.9 + idx) * 0.05;
      });

      // Holographic Orbital Rings Rotation
      orbitalRingGroup.rotation.z = elapsedTime * 0.18;
      orbitalRingGroup.rotation.x = Math.sin(elapsedTime * 0.5) * 0.2;

      // Orbiting Photons on Elliptical Paths
      const angle1 = elapsedTime * 1.4;
      photon1.position.set(Math.cos(angle1) * 1.9, Math.sin(angle1) * 1.9, 0);

      const angle2 = -elapsedTime * 1.1;
      photon2.position.set(Math.cos(angle2) * 2.3, 0, Math.sin(angle2) * 2.3);

      const angle3 = elapsedTime * 0.9;
      photon3.position.set(0, Math.cos(angle3) * 1.5, Math.sin(angle3) * 1.5);

      // Floating Particle Cloud Oscillation
      particlePoints.rotation.y = -elapsedTime * 0.08;
      particlePoints.rotation.x = Math.sin(elapsedTime * 0.4) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('resize', handleResize);

      // Cleanup GPU resources
      renderer.dispose();
      glowTex.dispose();
      glowGeo.dispose();
      glowMat.dispose();
      glassMat.dispose();
      edgeLineMat.dispose();
      outerCubeGeo.dispose();
      outerCubeMat.dispose();
      outerGlassMat.dispose();
      innerCubeGeo.dispose();
      innerCubeLineMat.dispose();
      crystalGeo.dispose();
      crystalMat.dispose();
      nodeGeo.dispose();
      nodeMat.dispose();
      tesseractLineGeo.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      orbitPhotonGeo.dispose();
      orbitPhotonMat1.dispose();
      orbitPhotonMat2.dispose();
      container.innerHTML = '';
    };
  }, []);

  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      {/* 3D WebGL Canvas Container */}
      <div
        ref={mountRef}
        className="w-full h-full min-h-[320px] sm:min-h-[420px] lg:min-h-[480px] cursor-grab active:cursor-grabbing flex items-center justify-center relative z-10"
        title="Interactive 3D Glassmorphic Neural Hypercube - Drag to rotate"
      />

      {/* Subtle Interaction Hint */}
      <div
        className={`absolute bottom-2 right-4 pointer-events-none transition-opacity duration-500 font-mono text-[10px] tracking-wider uppercase flex items-center gap-1.5 z-20 ${
          isInteracting ? 'opacity-0' : 'opacity-40 hover:opacity-80 text-[#0284C7]'
        }`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7] animate-pulse" />
        <span>3D HYPERCUBE // DRAG TO ROTATE</span>
      </div>
    </div>
  );
};
