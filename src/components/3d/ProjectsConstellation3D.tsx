'use client';

import React, { useEffect, useRef, useState, useMemo } from 'react';
import * as THREE from 'three';
import { PROJECTS, ProjectCaseStudy } from '@/data/projects';

interface ProjectNode {
  id: string;
  name: string;
  category: string;
  code?: string;
  isPrimary?: boolean;
  caseStudy?: ProjectCaseStudy;
  // Polar coordinate anchors for branch distribution
  phi: number; // inclination angle
  theta: number; // azimuthal angle
  radius: number; // branch length
  side: 'left' | 'right';
}

export const ProjectsConstellation3D: React.FC<{
  className?: string;
  onSelectProject?: (project: ProjectCaseStudy) => void;
}> = ({ className = '', onSelectProject }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const [screenNodes, setScreenNodes] = useState<
    { id: string; name: string; category: string; x: number; y: number; isPrimary: boolean; caseStudy?: ProjectCaseStudy; side: 'left' | 'right' }[]
  >([]);

  // Construct structured network tree matching user's dendrogram reference
  const NODES: ProjectNode[] = useMemo(
    () => [
      // Right Fan (Primary Projects & Leading Modules)
      {
        id: 'neuro-swarm',
        name: 'Neuro-Swarm Voxel SLAM',
        category: 'ROBOTICS',
        code: 'PROJ 001',
        isPrimary: true,
        caseStudy: PROJECTS[0],
        phi: Math.PI * 0.38,
        theta: 0.25,
        radius: 3.2,
        side: 'right',
      },
      {
        id: 'pso-solver',
        name: 'Hybrid PSO Swarm Solver',
        category: 'OPTIMIZATION',
        phi: Math.PI * 0.42,
        theta: 0.45,
        radius: 2.85,
        side: 'right',
      },
      {
        id: 'spiking-odometry',
        name: 'Spiking Neural Odometry',
        category: 'AI / SLAM',
        phi: Math.PI * 0.46,
        theta: 0.35,
        radius: 3.4,
        side: 'right',
      },
      {
        id: 'fuzzy-grid',
        name: 'Adaptive Type-2 Fuzzy Grid',
        category: 'OPTIMIZATION',
        code: 'PROJ 002',
        isPrimary: true,
        caseStudy: PROJECTS[1],
        phi: Math.PI * 0.52,
        theta: 0.15,
        radius: 3.5,
        side: 'right',
      },
      {
        id: 'tsk-inference',
        name: 'TSK Inference Engine',
        category: 'TELEMETRY',
        phi: Math.PI * 0.56,
        theta: 0.4,
        radius: 2.9,
        side: 'right',
      },
      {
        id: 'evo-nas',
        name: 'Evo-NAS Microcontroller AI',
        category: 'TINYML',
        code: 'PROJ 003',
        isPrimary: true,
        caseStudy: PROJECTS[2],
        phi: Math.PI * 0.62,
        theta: 0.3,
        radius: 3.3,
        side: 'right',
      },
      {
        id: 'pareto-genetic',
        name: 'NSGA-II Genetic Pareto Search',
        category: 'GENETICS',
        phi: Math.PI * 0.68,
        theta: 0.5,
        radius: 3.0,
        side: 'right',
      },
      {
        id: 'event-vision',
        name: 'Neuromorphic Event Vision',
        category: 'PERCEPTION',
        code: 'PROJ 004',
        isPrimary: true,
        caseStudy: PROJECTS[3],
        phi: Math.PI * 0.74,
        theta: 0.2,
        radius: 3.45,
        side: 'right',
      },
      {
        id: 'graph-conv',
        name: 'Spatiotemporal Graph CNN',
        category: 'VISION',
        phi: Math.PI * 0.8,
        theta: 0.38,
        radius: 2.8,
        side: 'right',
      },

      // Left Fan (Underlying Core Architectures & Research Strands)
      {
        id: 'jetson-rover',
        name: 'Edge Jetson Orin Nano Mesh',
        category: 'HARDWARE',
        phi: Math.PI * 0.35,
        theta: Math.PI - 0.3,
        radius: 2.9,
        side: 'left',
      },
      {
        id: 'cellular-automata',
        name: 'Cellular Automata Engine',
        category: 'COMPUTATION',
        phi: Math.PI * 0.44,
        theta: Math.PI - 0.45,
        radius: 3.1,
        side: 'left',
      },
      {
        id: 'bare-metal-c99',
        name: 'Bare-Metal ARM CMSIS-NN',
        category: 'EMBEDDED',
        phi: Math.PI * 0.54,
        theta: Math.PI - 0.25,
        radius: 3.3,
        side: 'left',
      },
      {
        id: 'dvs-sensor',
        name: 'Prophesee DVS Microsecond Stream',
        category: 'SENSORS',
        phi: Math.PI * 0.65,
        theta: Math.PI - 0.35,
        radius: 3.0,
        side: 'left',
      },
      {
        id: 'modbus-grid',
        name: 'Modbus 50Hz Real-Time Bus',
        category: 'GRID',
        phi: Math.PI * 0.76,
        theta: Math.PI - 0.28,
        radius: 2.85,
        side: 'left',
      },
    ],
    []
  );

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let animationFrameId: number;

    const getWidth = () => container.clientWidth || 700;
    const getHeight = () => container.clientHeight || 500;

    let width = getWidth();
    let height = getHeight();

    // 1. Scene Setup
    const scene = new THREE.Scene();

    // 2. Camera Setup
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 1000);
    const updateCamera = () => {
      const isMobile = window.innerWidth < 768;
      camera.position.set(0, 0, isMobile ? 8.2 : 6.8);
    };
    updateCamera();

    // 3. Renderer with ACESFilmic Tone Mapping & High Performance
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

    // 4. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 2.5);
    scene.add(ambientLight);

    const cyanLight = new THREE.PointLight(0x38bdf8, 5.0, 15);
    cyanLight.position.set(0, 0, 2);
    scene.add(cyanLight);

    const blueLight = new THREE.DirectionalLight(0x0284c7, 3.5);
    blueLight.position.set(4, 5, 5);
    scene.add(blueLight);

    // 5. Main Root Transformation Assembly
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // --- A. Center Neural Core Sphere & Synapse Shell ---
    const coreGroup = new THREE.Group();
    rootGroup.add(coreGroup);

    // 1. Core Glowing Aura Texture
    const createRadialGlowTex = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 512;
      canvas.height = 512;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const gradient = ctx.createRadialGradient(256, 256, 10, 256, 256, 250);
        gradient.addColorStop(0, 'rgba(56, 189, 248, 0.9)');
        gradient.addColorStop(0.2, 'rgba(2, 132, 199, 0.6)');
        gradient.addColorStop(0.5, 'rgba(14, 165, 233, 0.2)');
        gradient.addColorStop(0.8, 'rgba(224, 242, 254, 0.05)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 512, 512);
      }
      return new THREE.CanvasTexture(canvas);
    };

    const glowTex = createRadialGlowTex();
    const glowGeo = new THREE.PlaneGeometry(6.0, 6.0);
    const glowMat = new THREE.MeshBasicMaterial({
      map: glowTex,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide,
    });
    const coreGlowMesh = new THREE.Mesh(glowGeo, glowMat);
    coreGlowMesh.position.z = -0.5;
    coreGroup.add(coreGlowMesh);

    // 2. Translucent Glass Core Nucleus
    const nucleusGeo = new THREE.IcosahedronGeometry(0.85, 2);
    const nucleusMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0xf0f9ff),
      emissive: new THREE.Color(0x0284c7),
      emissiveIntensity: 0.45,
      roughness: 0.1,
      metalness: 0.15,
      transmission: 0.88,
      ior: 1.48,
      transparent: true,
      opacity: 0.7,
      wireframe: false,
    });
    const nucleusMesh = new THREE.Mesh(nucleusGeo, nucleusMat);
    coreGroup.add(nucleusMesh);

    // Nucleus Wireframe Cage
    const nucleusWireGeo = new THREE.WireframeGeometry(nucleusGeo);
    const nucleusWireMat = new THREE.LineBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.65,
    });
    const nucleusWire = new THREE.LineSegments(nucleusWireGeo, nucleusWireMat);
    coreGroup.add(nucleusWire);

    // 3. Dense Inner Synapse Cluster Mesh (150+ interconnected fiber nodes)
    const clusterPointCount = 160;
    const clusterPositions: THREE.Vector3[] = [];
    const clusterGeo = new THREE.BufferGeometry();
    const clusterPosArray = new Float32Array(clusterPointCount * 3);

    for (let i = 0; i < clusterPointCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 0.8 + Math.random() * 0.65;
      const sinPhi = Math.sin(phi);
      const x = r * sinPhi * Math.cos(theta);
      const y = r * sinPhi * Math.sin(theta);
      const z = r * Math.cos(phi);

      const p = new THREE.Vector3(x, y, z);
      clusterPositions.push(p);
      clusterPosArray[i * 3] = x;
      clusterPosArray[i * 3 + 1] = y;
      clusterPosArray[i * 3 + 2] = z;
    }

    clusterGeo.setAttribute('position', new THREE.BufferAttribute(clusterPosArray, 3));
    const clusterPointsMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.045,
      transparent: true,
      opacity: 0.85,
    });
    const clusterPointsMesh = new THREE.Points(clusterGeo, clusterPointsMat);
    coreGroup.add(clusterPointsMesh);

    // Connect close cluster points with delicate fiber synapse lines
    const internalSynapseLines: number[] = [];
    for (let i = 0; i < clusterPointCount; i++) {
      for (let j = i + 1; j < clusterPointCount; j++) {
        const dist = clusterPositions[i].distanceTo(clusterPositions[j]);
        if (dist < 0.48) {
          internalSynapseLines.push(
            clusterPositions[i].x,
            clusterPositions[i].y,
            clusterPositions[i].z,
            clusterPositions[j].x,
            clusterPositions[j].y,
            clusterPositions[j].z
          );
        }
      }
    }

    const internalSynapseGeo = new THREE.BufferGeometry();
    internalSynapseGeo.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(internalSynapseLines, 3)
    );
    const internalSynapseMat = new THREE.LineBasicMaterial({
      color: 0x0284c7,
      transparent: true,
      opacity: 0.45,
    });
    const internalSynapseMesh = new THREE.LineSegments(internalSynapseGeo, internalSynapseMat);
    coreGroup.add(internalSynapseMesh);

    // --- B. Concentric Orbit Reticles & Gimbal Radar Arcs ---
    const ringGroup = new THREE.Group();
    coreGroup.add(ringGroup);

    const createArcCurve = (radius: number, color: number, opacity: number, rotX: number, rotY: number) => {
      const curve = new THREE.EllipseCurve(0, 0, radius, radius, 0, 2 * Math.PI, false, 0);
      const pts = curve.getPoints(80);
      const geo = new THREE.BufferGeometry().setFromPoints(pts);
      const mat = new THREE.LineDashedMaterial({
        color,
        dashSize: 0.12,
        gapSize: 0.06,
        transparent: true,
        opacity,
      });
      const line = new THREE.Line(geo, mat);
      line.computeLineDistances();
      line.rotation.x = rotX;
      line.rotation.y = rotY;
      return line;
    };

    const arc1 = createArcCurve(1.6, 0x0284c7, 0.6, Math.PI / 4, 0.2);
    const arc2 = createArcCurve(1.9, 0x38bdf8, 0.45, -Math.PI / 3, 0.4);
    ringGroup.add(arc1);
    ringGroup.add(arc2);

    // --- C. Radiating Dendrogram Laser Rays & 3D Target Endpoints ---
    const rayGroup = new THREE.Group();
    rootGroup.add(rayGroup);

    const targetVectorMap: { id: string; targetVec: THREE.Vector3; curve: THREE.QuadraticBezierCurve3 }[] = [];
    const photonMeshes: { mesh: THREE.Mesh; curve: THREE.QuadraticBezierCurve3; speed: number; progress: number }[] = [];

    const photonGeo = new THREE.SphereGeometry(0.045, 12, 12);
    const photonMat = new THREE.MeshBasicMaterial({ color: 0xffffff });

    const endpointGeo = new THREE.SphereGeometry(0.055, 16, 16);
    const endpointMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0x38bdf8,
      emissiveIntensity: 2.2,
      roughness: 0.1,
    });

    NODES.forEach((node) => {
      // Calculate 3D target coordinates on fan perimeter
      const sinPhi = Math.sin(node.phi);
      const targetX = node.radius * sinPhi * Math.cos(node.theta);
      const targetY = node.radius * Math.cos(node.phi);
      const targetZ = node.radius * sinPhi * Math.sin(node.theta);

      const targetVec = new THREE.Vector3(targetX, targetY, targetZ);

      // Origin vector inside core
      const originVec = targetVec.clone().normalize().multiplyScalar(0.75);

      // Midpoint control vector with organic curvature
      const midVec = originVec.clone().lerp(targetVec, 0.5);
      midVec.y += (Math.random() - 0.5) * 0.35;
      midVec.z += (Math.random() - 0.5) * 0.35;

      const curve = new THREE.QuadraticBezierCurve3(originVec, midVec, targetVec);
      const curvePts = curve.getPoints(36);
      const curveGeo = new THREE.BufferGeometry().setFromPoints(curvePts);

      const rayLineMat = new THREE.LineBasicMaterial({
        color: node.isPrimary ? 0x0284c7 : 0x38bdf8,
        transparent: true,
        opacity: node.isPrimary ? 0.75 : 0.45,
        linewidth: node.isPrimary ? 1.8 : 1.0,
      });

      const rayMesh = new THREE.Line(curveGeo, rayLineMat);
      rayGroup.add(rayMesh);

      // Vertex Node Beacon at the end of the ray
      const endpointMesh = new THREE.Mesh(endpointGeo, endpointMat);
      endpointMesh.position.copy(targetVec);
      rayGroup.add(endpointMesh);

      targetVectorMap.push({ id: node.id, targetVec, curve });

      // Pulse traveling photon on curve
      const pMesh = new THREE.Mesh(photonGeo, photonMat);
      rayGroup.add(pMesh);
      photonMeshes.push({
        mesh: pMesh,
        curve,
        speed: 0.3 + Math.random() * 0.4,
        progress: Math.random(),
      });
    });

    // --- D. Interactive Mouse Tracking & Drag Momentum Physics ---
    let targetRotX = 0.05;
    let targetRotY = 0.0;
    let currentRotX = 0.05;
    let currentRotY = 0.0;
    let isDragging = false;
    let prevPointerX = 0;
    let prevPointerY = 0;

    const handlePointerDown = (e: PointerEvent) => {
      isDragging = true;
      prevPointerX = e.clientX;
      prevPointerY = e.clientY;
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (isDragging) {
        const deltaX = e.clientX - prevPointerX;
        const deltaY = e.clientY - prevPointerY;
        targetRotY += deltaX * 0.006;
        targetRotX += deltaY * 0.006;
        prevPointerX = e.clientX;
        prevPointerY = e.clientY;
      } else {
        const rect = container.getBoundingClientRect();
        const normX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        const normY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
        targetRotY = normX * 0.4;
        targetRotX = -normY * 0.3;
      }
    };

    const handlePointerUp = () => {
      isDragging = false;
    };

    container.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);

    // --- E. Resize Handler ---
    const handleResize = () => {
      if (!container) return;
      width = getWidth();
      height = getHeight();
      camera.aspect = width / height;
      updateCamera();
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // --- F. Animation & Projection Loop ---
    let clock = new THREE.Clock();
    const tempVec = new THREE.Vector3();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth camera & group rotation with damping
      currentRotX += (targetRotX - currentRotX) * 0.05;
      currentRotY += (targetRotY - currentRotY) * 0.05;

      rootGroup.rotation.x = currentRotX + Math.sin(elapsedTime * 0.6) * 0.02;
      rootGroup.rotation.y = currentRotY + Math.sin(elapsedTime * 0.4) * 0.03;
      rootGroup.position.y = Math.sin(elapsedTime * 0.9) * 0.06;

      // Internal nucleus & mesh idle spinning
      nucleusMesh.rotation.y = elapsedTime * 0.25;
      nucleusMesh.rotation.x = elapsedTime * 0.18;
      nucleusWire.rotation.y = -elapsedTime * 0.3;
      internalSynapseMesh.rotation.y = elapsedTime * 0.15;
      clusterPointsMesh.rotation.y = elapsedTime * 0.15;
      ringGroup.rotation.z = elapsedTime * 0.2;

      // Traveling photons along curved dendrogram rays
      photonMeshes.forEach((item) => {
        item.progress += item.speed * 0.01;
        if (item.progress > 1) item.progress = 0;
        const pt = item.curve.getPoint(item.progress);
        item.mesh.position.copy(pt);
      });

      // Project 3D node world coordinates to 2D screen positions for HTML overlay badges
      const newScreenNodes = targetVectorMap.map(({ id, targetVec }) => {
        tempVec.copy(targetVec);
        tempVec.applyMatrix4(rootGroup.matrixWorld);
        tempVec.project(camera);

        const x = ((tempVec.x + 1) * width) / 2;
        const y = ((-tempVec.y + 1) * height) / 2;

        const nodeDef = NODES.find((n) => n.id === id)!;
        return {
          id,
          name: nodeDef.name,
          category: nodeDef.category,
          x,
          y,
          isPrimary: !!nodeDef.isPrimary,
          caseStudy: nodeDef.caseStudy,
          side: nodeDef.side,
        };
      });

      setScreenNodes(newScreenNodes);

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
      nucleusGeo.dispose();
      nucleusMat.dispose();
      nucleusWireGeo.dispose();
      nucleusWireMat.dispose();
      clusterGeo.dispose();
      clusterPointsMat.dispose();
      internalSynapseGeo.dispose();
      internalSynapseMat.dispose();
      photonGeo.dispose();
      photonMat.dispose();
      endpointGeo.dispose();
      endpointMat.dispose();
      container.innerHTML = '';
    };
  }, [NODES]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full min-h-[380px] sm:min-h-[460px] lg:min-h-[520px] select-none flex items-center justify-center overflow-visible ${className}`}
    >
      {/* 3D WebGL Canvas for Neural Core & Curved Synapse Rays */}
      <div
        ref={mountRef}
        className="w-full h-full cursor-grab active:cursor-grabbing absolute inset-0 z-10"
        title="3D Neural Knowledge Graph - Drag to inspect nodes"
      />

      {/* 2D Callout Labels & Badges with Project Names (Projected in 3D Space) */}
      <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
        {screenNodes.map((node) => {
          const isHovered = hoveredNodeId === node.id;
          const isLeft = node.side === 'left';

          return (
            <div
              key={node.id}
              style={{
                left: `${node.x}px`,
                top: `${node.y}px`,
                transform: `translate(${isLeft ? '-100%' : '0%'}, -50%)`,
              }}
              className="absolute pointer-events-auto transition-all duration-200"
              onMouseEnter={() => setHoveredNodeId(node.id)}
              onMouseLeave={() => setHoveredNodeId(null)}
              onClick={() => {
                if (node.caseStudy && onSelectProject) {
                  onSelectProject(node.caseStudy);
                }
              }}
            >
              {/* Dynamic Callout Connector & Label */}
              <div
                className={`flex items-center gap-1.5 cursor-pointer group px-1 py-0.5 rounded-lg transition-all ${
                  isLeft ? 'flex-row-reverse text-right pr-2' : 'flex-row text-left pl-2'
                } ${isHovered ? 'scale-105 z-30' : 'opacity-85 hover:opacity-100'}`}
              >
                {/* Connector Hairline Leader Line */}
                <div
                  className={`h-px transition-all duration-300 ${
                    isHovered ? 'w-6 bg-[#0284C7]' : 'w-3.5 bg-sky-300/80'
                  }`}
                />

                {/* Node Pill Card */}
                <div
                  className={`px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md border text-left transition-all ${
                    node.isPrimary
                      ? isHovered
                        ? 'bg-[#0284C7] text-white border-[#0284C7] shadow-[0_4px_16px_rgba(2,132,199,0.35)]'
                        : 'bg-white/95 text-slate-900 border-[#0284C7]/40 shadow-xs'
                      : isHovered
                      ? 'bg-sky-50 text-[#0284C7] border-sky-400'
                      : 'bg-white/80 text-slate-600 border-slate-200/80 backdrop-blur-xs'
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    {node.isPrimary && (
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          isHovered ? 'bg-white animate-ping' : 'bg-[#0284C7]'
                        }`}
                      />
                    )}
                    <span
                      className={`font-mono text-[9px] sm:text-[10px] font-bold tracking-tight uppercase leading-tight ${
                        node.isPrimary ? 'text-[#0284C7] group-hover:text-white' : 'text-slate-500'
                      }`}
                    >
                      {node.name}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Floating Category Legend & Drag Instruction */}
      <div className="absolute bottom-1 right-3 pointer-events-none font-mono text-[9px] sm:text-[10px] text-[#0284C7]/70 tracking-wider uppercase flex items-center gap-2 z-30">
        <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7] animate-pulse" />
        <span>NEURAL GRAPH // INTERACTIVE 3D CONSTELLATION</span>
      </div>
    </div>
  );
};
