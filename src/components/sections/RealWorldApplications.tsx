'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { APPLICATION_AREAS } from '@/data/applications';
import {
  Zap,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Layers,
  Sparkles,
  Workflow,
  Radio,
  Microchip,
} from 'lucide-react';

const DEPLOYMENT_STAGES = [
  {
    step: '01',
    phase: 'MATHEMATICAL PROOF & SIMULATION',
    subtitle: 'ALGORITHMIC FOUNDATIONS',
    description:
      'We formulate stochastic models, interval fuzzy sets, and genetic objective topologies in high-level numerical computing environments (MATLAB, Simulink, PyTorch).',
    deliverables: ['Convergence Theorems', 'Loss Landscape Analysis', 'Monte Carlo Stability Runs'],
    tools: ['PyTorch 2.4', 'Simulink', 'Julia', 'CVXPY'],
  },
  {
    step: '02',
    phase: 'NEURAL COMPRESSION & ARCHITECTURE SEARCH',
    subtitle: 'TINYML OPTIMIZATION',
    description:
      'Deep models are compressed via quantization-aware training (INT8/INT4), structured weight pruning, and automated neural architecture search for edge limits.',
    deliverables: ['Pareto-Optimal Topologies', 'SRAM Budget Verification', 'Activation Pruning Masks'],
    tools: ['TensorFlow Lite', 'ONNX Runtime', 'CMSIS-NN', 'Edge Impulse'],
  },
  {
    step: '03',
    phase: 'EMBEDDED HARDWARE PROTOTYPING',
    subtitle: 'BARE-METAL & ROS2 SYSTEMS',
    description:
      'Algorithms are compiled to deterministic C++20 and deployed onto low-power microcontrollers, ESP32 nodes, NVIDIA Jetson Orin modules, and autonomous rovers.',
    deliverables: ['Deterministic Interrupt Loops', 'Low-Latency Serial Telemetry', 'RTOS Task Schedules'],
    tools: ['ROS2 Humble', 'FreeRTOS', 'ARM Keil', 'CUDA Embedded'],
  },
  {
    step: '04',
    phase: 'CAMPUS TESTBED VALIDATION',
    subtitle: 'LIVE PRODUCTION DEPLOYMENT',
    description:
      'Prototypes undergo real-world stress testing across Manipal University Jaipur facilities, campus microgrids, robotics testing grounds, and national arenas.',
    deliverables: ['Field Telemetry Logs', '100+ Continuous Hours Uptime', 'Verified Benchmark Reports'],
    tools: ['MQTT Broker', 'Grafana Telemetry', 'Docker Containers', 'Modbus TCP'],
  },
];

export const RealWorldApplications: React.FC = () => {
  const [activeStage, setActiveStage] = useState(0);
  const stage = DEPLOYMENT_STAGES[activeStage];

  return (
    <section id="applications" className="py-24 sm:py-32 bg-white relative border-b border-slate-200 overflow-hidden">
      {/* Blueprint grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#0284C7 1px, transparent 1px), linear-gradient(90deg, #0284C7 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          number="03"
          badgeText="REAL-WORLD IMPACT"
          title="FROM PROOF TO PRODUCTION."
          subtitle="Our 4-stage engineering methodology for translating theoretical computational intelligence into verified hardware deployment."
        />

        {/* 4 Interactive Stages Navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-12 font-mono text-xs">
          {DEPLOYMENT_STAGES.map((s, idx) => {
            const isActive = activeStage === idx;
            return (
              <button
                key={s.step}
                type="button"
                onClick={() => setActiveStage(idx)}
                className={`p-6 rounded-2xl border text-left transition-all duration-300 cursor-pointer relative overflow-hidden flex flex-col justify-between space-y-4 ${
                  isActive
                    ? 'bg-sky-50/70 border-[#0284C7] shadow-sm shadow-sky-500/10'
                    : 'bg-slate-50 border-slate-200 hover:bg-white hover:border-slate-300'
                }`}
              >
                {/* Active Indicator Top Line */}
                {isActive && (
                  <motion.div
                    layoutId="activeStageIndicator"
                    className="absolute top-0 left-0 right-0 h-1 bg-[#0284C7]"
                  />
                )}

                <div className="flex items-center justify-between">
                  <span className={`text-2xl font-display font-black ${isActive ? 'text-[#0284C7]' : 'text-slate-400'}`}>
                    STAGE {s.step}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#0284C7]">
                    PHASE {s.step}
                  </span>
                </div>

                <div>
                  <h4 className="font-display font-extrabold text-sm sm:text-base text-[#0F172A] uppercase leading-snug">
                    {s.phase}
                  </h4>
                  <p className="font-mono text-[10px] text-slate-500 mt-1 uppercase tracking-wider">
                    {s.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Deep Dive Console */}
        <motion.div
          key={stage.step}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm space-y-8"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-slate-200 pb-8">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-[#0284C7] border border-sky-200 font-mono text-xs font-bold uppercase">
                <Workflow className="w-3.5 h-3.5" />
                <span>EXECUTION PIPELINE // STAGE {stage.step}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-black text-[#0F172A] uppercase leading-tight">
                {stage.phase}
              </h3>
              <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed pt-1">
                {stage.description}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 text-center shrink-0 w-full sm:w-auto">
              <span className="text-3xl sm:text-4xl font-display font-black text-[#0284C7] block">
                100%
              </span>
              <span className="font-mono text-[11px] font-bold text-slate-500 uppercase tracking-wider mt-1 block">
                STUDENT ENGINEERED
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-mono text-xs">
            {/* Deliverables */}
            <div className="space-y-4 p-6 rounded-2xl bg-white border border-slate-200">
              <span className="text-xs font-bold text-[#0284C7] uppercase tracking-wider block flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0284C7]" />
                STAGE ARTIFACTS &amp; DELIVERABLES
              </span>
              <div className="space-y-2.5 font-sans">
                {stage.deliverables.map((del) => (
                  <div key={del} className="flex items-center gap-2 text-slate-800 text-xs sm:text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]" />
                    <span className="font-semibold">{del}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Frameworks & Tooling Stack */}
            <div className="space-y-4 p-6 rounded-2xl bg-white border border-slate-200">
              <span className="text-xs font-bold text-[#0F172A] uppercase tracking-wider block flex items-center gap-2">
                <Microchip className="w-4 h-4 text-[#0284C7]" />
                CORE TOOLING &amp; RUNTIME LIBRARIES
              </span>
              <div className="flex flex-wrap gap-2">
                {stage.tools.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 rounded-xl bg-sky-50 border border-sky-200 text-[#0284C7] font-mono text-xs font-bold"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
