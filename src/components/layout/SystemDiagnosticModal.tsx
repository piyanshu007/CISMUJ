'use client';

import React, { useEffect } from 'react';
import { Badge } from '../ui/Badge';
import { X, Activity, Cpu, Database, Network, ShieldCheck, Terminal } from 'lucide-react';

interface SystemDiagnosticModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SystemDiagnosticModal: React.FC<SystemDiagnosticModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl border border-slate-300 p-6 sm:p-8 shadow-2xl font-mono text-xs">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6">
          <div className="flex items-center gap-2.5">
            <Terminal className="w-5 h-5 text-sky-600" />
            <span className="text-slate-900 font-bold tracking-wider text-sm">
              CIS_MUJ // SYSTEM TELEMETRY HUD
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-black transition-colors cursor-pointer"
            aria-label="Close diagnostic HUD"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* System Diagnostics Grid */}
        <div className="space-y-4 text-slate-800">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <div className="flex items-center justify-between font-bold">
                <span className="flex items-center gap-1.5 text-sky-700">
                  <Network className="w-4 h-4" /> NEURAL ENGINE
                </span>
                <Badge variant="blue" dot>ONLINE</Badge>
              </div>
              <div className="text-[11px] text-slate-600 mt-1">Topology: 74 Nodes // Latency: 0.6ms</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <div className="flex items-center justify-between font-bold">
                <span className="flex items-center gap-1.5 text-slate-900">
                  <Activity className="w-4 h-4 text-sky-600" /> FUZZY LOGIC CONTROLLER
                </span>
                <Badge variant="blue" dot>ONLINE</Badge>
              </div>
              <div className="text-[11px] text-slate-600 mt-1">Inference Engine // Rule Base Active</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <div className="flex items-center justify-between font-bold">
                <span className="flex items-center gap-1.5 text-sky-700">
                  <Cpu className="w-4 h-4" /> EVOLUTION ENGINE
                </span>
                <Badge variant="blue" dot>ONLINE</Badge>
              </div>
              <div className="text-[11px] text-slate-600 mt-1">Chromosome Population: 64 // Gen 348</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <div className="flex items-center justify-between font-bold">
                <span className="flex items-center gap-1.5 text-slate-900">
                  <Database className="w-4 h-4 text-sky-600" /> CHAPTER REPOSITORY
                </span>
                <Badge variant="blue" dot>ONLINE</Badge>
              </div>
              <div className="text-[11px] text-slate-600 mt-1">12 Repositories // Open Source Hub</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-sky-50 border border-sky-200 text-[11px] leading-relaxed text-sky-900 font-sans">
            <div className="flex items-center gap-2 font-bold mb-1 font-mono text-sky-800">
              <ShieldCheck className="w-4 h-4 text-sky-600" />
              IEEE CIS CHAPTER STATUS: OPERATIONAL &amp; LIVE
            </div>
            Manipal University Jaipur Student Chapter • IEEE Computational Intelligence Society.
          </div>
        </div>

        {/* Footer controls */}
        <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
          <span>PRESS [ ESC ] OR CLICK CLOSE TO RETURN</span>
          <span className="text-sky-600 font-bold">STATUS: 200 OK</span>
        </div>
      </div>
    </div>
  );
};
