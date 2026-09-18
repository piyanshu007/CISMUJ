'use client';

import React, { useEffect, useState } from 'react';

export const GeneticAlgorithmVisual: React.FC = () => {
  const [generation, setGeneration] = useState<number>(348);
  const [bestFitness, setBestFitness] = useState<number>(98.9);
  const [candidates, setCandidates] = useState<
    { id: number; genome: string; fitness: number; mutated: boolean }[]
  >([
    { id: 1, genome: '11010010110', fitness: 98.9, mutated: false },
    { id: 2, genome: '11010010101', fitness: 96.8, mutated: true },
    { id: 3, genome: '10010010110', fitness: 94.5, mutated: false },
    { id: 4, genome: '11011110010', fitness: 90.2, mutated: true },
    { id: 5, genome: '01010010110', fitness: 86.4, mutated: false },
  ]);

  const stepEvolution = () => {
    setGeneration((prev) => prev + 1);
    setBestFitness((prev) => Math.min(99.9, +(prev + (Math.random() * 0.15 - 0.04)).toFixed(1)));
    setCandidates((prev) =>
      prev.map((c) => ({
        ...c,
        fitness: Math.min(99.9, +(c.fitness + (Math.random() * 1.8 - 0.7)).toFixed(1)),
        mutated: Math.random() > 0.65,
      }))
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      stepEvolution();
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-full min-h-[350px] flex flex-col justify-between p-6 bg-white/95 rounded-3xl border border-sky-200/80 shadow-glass-md font-mono text-xs">
      <div className="flex items-center justify-between border-b border-sky-100 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-slate-900 font-bold">CHROMOSOME EVOLUTION POOL</span>
        </div>
        <span className="text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 font-bold">
          GEN: {generation} // FIT: {bestFitness}%
        </span>
      </div>

      <div className="my-4 space-y-2.5">
        {candidates.map((c, idx) => (
          <div
            key={c.id}
            className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50/90 border border-sky-100 hover:border-emerald-400 hover:bg-emerald-50/40 transition-all"
          >
            <div className="flex items-center gap-3">
              <span className="text-slate-400 font-bold text-[11px]">#0{idx + 1}</span>
              <span className="text-slate-800 font-bold tracking-widest">{c.genome}</span>
              {c.mutated && (
                <span className="text-[9px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold border border-emerald-300">
                  MUTATED
                </span>
              )}
            </div>
            <div className="flex items-center gap-2">
              <div className="w-20 bg-slate-200 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-emerald-500 h-full transition-all duration-300 rounded-full"
                  style={{ width: `${c.fitness}%` }}
                />
              </div>
              <span className="text-slate-800 font-bold text-[11px] w-12 text-right">{c.fitness}%</span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between text-[11px] text-slate-600 bg-emerald-50/80 p-3 rounded-xl border border-emerald-100">
        <span className="font-semibold text-slate-700">SELECTION: Tournament (k=4)</span>
        <button
          onClick={stepEvolution}
          className="text-emerald-700 hover:text-emerald-900 font-bold underline underline-offset-2 transition-colors cursor-pointer"
        >
          FORCE_GENERATION_EVOLVE →
        </button>
      </div>
    </div>
  );
};
