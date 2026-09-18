'use client';

import React, { useState } from 'react';

export const NeuralSimulation: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<number>(1);
  const [hoveredNeuron, setHoveredNeuron] = useState<string | null>(null);

  const layers = [
    { name: 'INPUT', nodes: 3, label: 'x₁..x₃' },
    { name: 'LATENT_01', nodes: 5, label: 'h₁..h₅' },
    { name: 'LATENT_02', nodes: 4, label: 'h₆..h₉' },
    { name: 'OUTPUT', nodes: 2, label: 'y₁, y₂' },
  ];

  return (
    <div className="w-full h-full min-h-[350px] flex flex-col justify-between p-6 bg-white/95 rounded-3xl border border-sky-200/80 shadow-glass-md font-mono text-xs">
      <div className="flex items-center justify-between border-b border-sky-100 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-sky-500 animate-pulse" />
          <span className="text-slate-900 font-bold">SYNAPSE ACTIVATION MANIFOLD</span>
        </div>
        <span className="text-sky-700 bg-sky-50 px-2.5 py-1 rounded-full border border-sky-200 font-bold">
          LOSS: 0.0024 // ACC: 99.8%
        </span>
      </div>

      {/* Layer Matrix Diagram */}
      <div className="flex items-center justify-between my-6 px-4">
        {layers.map((layer, lIdx) => (
          <div
            key={layer.name}
            className="flex flex-col items-center gap-3 cursor-pointer group"
            onMouseEnter={() => setActiveLayer(lIdx)}
          >
            <span className={`text-[11px] tracking-wider transition-colors ${activeLayer === lIdx ? 'text-sky-600 font-bold' : 'text-slate-400'}`}>
              {layer.name}
            </span>
            <div className="flex flex-col gap-2.5 py-2">
              {Array.from({ length: layer.nodes }).map((_, nIdx) => {
                const neuronId = `L${lIdx}-N${nIdx}`;
                const isHovered = hoveredNeuron === neuronId;
                const isLayerActive = activeLayer === lIdx;

                return (
                  <div
                    key={neuronId}
                    onMouseEnter={() => setHoveredNeuron(neuronId)}
                    onMouseLeave={() => setHoveredNeuron(null)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 border ${
                      isHovered
                        ? 'bg-sky-500 text-white border-sky-600 scale-125 shadow-lg shadow-sky-500/40'
                        : isLayerActive
                        ? 'bg-sky-100 text-sky-800 border-sky-300 font-bold'
                        : 'bg-slate-50 text-slate-400 border-slate-200'
                    }`}
                  >
                    <span className="text-[10px]">{nIdx + 1}</span>
                  </div>
                );
              })}
            </div>
            <span className="text-[10px] text-slate-400">{layer.label}</span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between text-[11px] text-slate-600 bg-sky-50/80 p-3 rounded-xl border border-sky-100">
        <span className="font-semibold text-slate-700">ACTIVATION: ReLU + Softmax</span>
        <span className="text-sky-700 font-bold">BACKPROP: AdamW (η=0.001)</span>
      </div>
    </div>
  );
};
