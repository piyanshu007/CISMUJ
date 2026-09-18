'use client';

import React, { useState } from 'react';

export const FuzzyLogicField: React.FC = () => {
  const [crispValue, setCrispValue] = useState<number>(52);

  const lowDegree = Math.max(0, Math.min(1, (50 - crispValue) / 35)).toFixed(2);
  const medDegree = Math.max(0, 1 - Math.abs(crispValue - 50) / 30).toFixed(2);
  const highDegree = Math.max(0, Math.min(1, (crispValue - 50) / 35)).toFixed(2);

  return (
    <div className="w-full h-full min-h-[350px] flex flex-col justify-between p-6 bg-white/95 rounded-3xl border border-sky-200/80 shadow-glass-md font-mono text-xs">
      <div className="flex items-center justify-between border-b border-sky-100 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 animate-pulse" />
          <span className="text-slate-900 font-bold">FUZZY MEMBERSHIP DYNAMICS</span>
        </div>
        <span className="text-cyan-800 bg-cyan-50 px-2.5 py-1 rounded-full border border-cyan-200 font-bold">
          INFERENCE: MAMDANI
        </span>
      </div>

      <div className="my-4 space-y-4">
        <div>
          <div className="flex justify-between text-slate-700 font-semibold mb-2">
            <span>CRISP INPUT VARIABLE (x):</span>
            <span className="text-sky-600 font-bold text-sm">{crispValue} units</span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={crispValue}
            onChange={(e) => setCrispValue(Number(e.target.value))}
            className="w-full h-2 bg-sky-100 rounded-lg appearance-none cursor-pointer accent-sky-500"
          />
        </div>

        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-[11px] mb-1 font-semibold">
              <span className="text-blue-600">μ_LOW(x) [COLD SET]</span>
              <span className="text-slate-700">{lowDegree}</span>
            </div>
            <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden border border-slate-200">
              <div
                className="bg-gradient-to-r from-blue-400 to-blue-600 h-full transition-all duration-150 rounded-full"
                style={{ width: `${Number(lowDegree) * 100}%` }}
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-[11px] mb-1 font-semibold">
              <span className="text-emerald-600">μ_OPTIMAL(x) [NORMAL SET]</span>
              <span className="text-slate-700">{medDegree}</span>
            </div>
            <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden border border-slate-200">
              <div
                className="bg-gradient-to-r from-emerald-400 to-emerald-600 h-full transition-all duration-150 rounded-full"
                style={{ width: `${Number(medDegree) * 100}%` }}
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-[11px] mb-1 font-semibold">
              <span className="text-amber-600">μ_HIGH(x) [CRITICAL SET]</span>
              <span className="text-slate-700">{highDegree}</span>
            </div>
            <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden border border-slate-200">
              <div
                className="bg-gradient-to-r from-amber-400 to-amber-600 h-full transition-all duration-150 rounded-full"
                style={{ width: `${Number(highDegree) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-[11px] text-slate-600 bg-cyan-50/80 p-3 rounded-xl border border-cyan-100">
        <span className="font-semibold text-slate-700">DEFUZZIFICATION: Center of Gravity</span>
        <span className="text-cyan-800 font-bold">ACTUATION: {(crispValue * 1.15).toFixed(1)} PWM</span>
      </div>
    </div>
  );
};
