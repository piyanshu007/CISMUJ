'use client';

import React, { useState } from 'react';

export const HybridSystemVisual: React.FC = () => {
  const [activePipeline, setActivePipeline] = useState<'NEURO_FUZZY' | 'EVO_RL'>('NEURO_FUZZY');

  return (
    <div className="w-full h-full min-h-[350px] flex flex-col justify-between p-6 bg-white/95 rounded-3xl border border-sky-200/80 shadow-glass-md font-mono text-xs">
      <div className="flex items-center justify-between border-b border-sky-100 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse" />
          <span className="text-slate-900 font-bold">HYBRID CONVERGENCE MANIFOLD</span>
        </div>
        <div className="flex gap-1.5">
          <button
            onClick={() => setActivePipeline('NEURO_FUZZY')}
            className={`px-3 py-1 rounded-full text-[11px] font-bold transition-all cursor-pointer ${
              activePipeline === 'NEURO_FUZZY'
                ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-300'
                : 'bg-slate-100 text-slate-600 hover:text-slate-900'
            }`}
          >
            ANFIS
          </button>
          <button
            onClick={() => setActivePipeline('EVO_RL')}
            className={`px-3 py-1 rounded-full text-[11px] font-bold transition-all cursor-pointer ${
              activePipeline === 'EVO_RL'
                ? 'bg-sky-600 text-white shadow-sm shadow-sky-300'
                : 'bg-slate-100 text-slate-600 hover:text-slate-900'
            }`}
          >
            EVO-RL
          </button>
        </div>
      </div>

      <div className="my-6 flex flex-col items-center justify-center gap-4">
        {activePipeline === 'NEURO_FUZZY' ? (
          <div className="w-full flex items-center justify-between text-center gap-2">
            <div className="p-3.5 bg-blue-50 rounded-2xl border border-blue-200 flex-1 shadow-sm">
              <span className="text-blue-700 block font-bold mb-1">FUZZIFICATION</span>
              <span className="text-[10px] text-slate-500">Layer 1: Premise</span>
            </div>
            <span className="text-indigo-600 font-extrabold text-base">→</span>
            <div className="p-3.5 bg-indigo-50 rounded-2xl border border-indigo-200 flex-1 shadow-sm">
              <span className="text-indigo-700 block font-bold mb-1">NEURAL T-NORM</span>
              <span className="text-[10px] text-slate-500">Layer 2-4: Weights</span>
            </div>
            <span className="text-indigo-600 font-extrabold text-base">→</span>
            <div className="p-3.5 bg-cyan-50 rounded-2xl border border-cyan-200 flex-1 shadow-sm">
              <span className="text-cyan-700 block font-bold mb-1">DEFUZZIFIED</span>
              <span className="text-[10px] text-slate-500">Layer 5: Output</span>
            </div>
          </div>
        ) : (
          <div className="w-full flex items-center justify-between text-center gap-2">
            <div className="p-3.5 bg-emerald-50 rounded-2xl border border-emerald-200 flex-1 shadow-sm">
              <span className="text-emerald-700 block font-bold mb-1">GENETIC AGENTS</span>
              <span className="text-[10px] text-slate-500">Global Search</span>
            </div>
            <span className="text-sky-600 font-extrabold text-base">→</span>
            <div className="p-3.5 bg-sky-50 rounded-2xl border border-sky-200 flex-1 shadow-sm">
              <span className="text-sky-700 block font-bold mb-1">GRADIENT POLICY</span>
              <span className="text-[10px] text-slate-500">Local Optim</span>
            </div>
            <span className="text-sky-600 font-extrabold text-base">→</span>
            <div className="p-3.5 bg-indigo-50 rounded-2xl border border-indigo-200 flex-1 shadow-sm">
              <span className="text-indigo-700 block font-bold mb-1">PARETO POLICY</span>
              <span className="text-[10px] text-slate-500">Robust State</span>
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between text-[11px] text-slate-600 bg-indigo-50/80 p-3 rounded-xl border border-indigo-100">
        <span className="font-semibold text-slate-700">TOPOLOGY: Multi-Paradigm Synthesis</span>
        <span className="text-indigo-700 font-bold">CROSS-INFERENCE: ACTIVE (0.998)</span>
      </div>
    </div>
  );
};
