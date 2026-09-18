'use client';

import React, { useState } from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { PARADIGMS } from '@/data/paradigms';
import { NeuralSimulation } from '../computational/NeuralSimulation';
import { FuzzyLogicField } from '../computational/FuzzyLogicField';
import { GeneticAlgorithmVisual } from '../computational/GeneticAlgorithmVisual';
import { HybridSystemVisual } from '../computational/HybridSystemVisual';
import { Brain, Layers, Dna, GitMerge, ChevronRight } from 'lucide-react';

export const FourParadigms: React.FC = () => {
  const [selectedParadigmId, setSelectedParadigmId] = useState<string>('neural-networks');

  const selectedParadigm = PARADIGMS.find((p) => p.id === selectedParadigmId) || PARADIGMS[0];

  const renderVisual = () => {
    switch (selectedParadigmId) {
      case 'neural-networks':
        return <NeuralSimulation />;
      case 'fuzzy-systems':
        return <FuzzyLogicField />;
      case 'evolutionary-computation':
        return <GeneticAlgorithmVisual />;
      case 'hybrid-intelligence':
        return <HybridSystemVisual />;
      default:
        return <NeuralSimulation />;
    }
  };

  const getIcon = (id: string) => {
    switch (id) {
      case 'neural-networks':
        return <Brain className="w-5 h-5 text-sky-600" />;
      case 'fuzzy-systems':
        return <Layers className="w-5 h-5 text-cyan-600" />;
      case 'evolutionary-computation':
        return <Dna className="w-5 h-5 text-emerald-600" />;
      case 'hybrid-intelligence':
        return <GitMerge className="w-5 h-5 text-indigo-600" />;
      default:
        return <Brain className="w-5 h-5 text-sky-600" />;
    }
  };

  return (
    <section id="paradigms" className="py-24 sm:py-32 bg-white relative border-b border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="02"
          badgeText="FOUNDATIONAL PILLARS"
          title="THE FOUR COMPUTATIONAL PARADIGMS"
          subtitle="Explore the four bio-inspired pillars that define modern computational intelligence. Select an entry to activate its live mathematical simulation."
        />

        {/* Interactive Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-12">
          {/* Left: 4 Interactive Paradigm Selectors */}
          <div className="lg:col-span-6 space-y-4">
            {PARADIGMS.map((paradigm) => {
              const isSelected = paradigm.id === selectedParadigmId;

              return (
                <div
                  key={paradigm.id}
                  onClick={() => setSelectedParadigmId(paradigm.id)}
                  onMouseEnter={() => setSelectedParadigmId(paradigm.id)}
                  className={`p-6 rounded-3xl border transition-all cursor-pointer group ${
                    isSelected
                      ? 'bg-sky-50/70 border-sky-400 shadow-glass-md ring-2 ring-sky-300/40'
                      : 'bg-white hover:bg-sky-50/30 border-sky-100 shadow-xs'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <span
                        className={`font-mono text-base font-bold transition-colors ${
                          isSelected ? 'text-sky-600' : 'text-slate-400 group-hover:text-slate-600'
                        }`}
                      >
                        {paradigm.number}
                      </span>
                      <div className="p-3 rounded-2xl bg-white border border-sky-200 shadow-sm">
                        {getIcon(paradigm.id)}
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 tracking-wide uppercase">
                          {paradigm.name}
                        </h3>
                        <p className="font-sans text-xs text-slate-500 font-normal">
                          {paradigm.tagline}
                        </p>
                      </div>
                    </div>

                    <ChevronRight
                      className={`w-5 h-5 transition-transform ${
                        isSelected ? 'text-sky-600 translate-x-1' : 'text-slate-400 group-hover:text-slate-600'
                      }`}
                    />
                  </div>

                  {isSelected && (
                    <div className="mt-4 pt-4 border-t border-sky-200/60 space-y-3 font-sans">
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {paradigm.description}
                      </p>

                      <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-[10px]">
                        <span className="px-2.5 py-1 rounded-full bg-white border border-sky-200 text-sky-700 font-bold shadow-xs">
                          {paradigm.formula}
                        </span>
                        {paradigm.keyConcepts.map((concept) => (
                          <span
                            key={concept}
                            className="px-2.5 py-1 rounded-full bg-sky-100/70 text-slate-700 border border-sky-200/50"
                          >
                            {concept}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right: Simulation Canvas */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {renderVisual()}
          </div>
        </div>
      </div>
    </section>
  );
};
