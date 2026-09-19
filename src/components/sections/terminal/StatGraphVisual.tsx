'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { StatItem } from '@/data/stats';

interface StatGraphVisualProps {
  item: StatItem;
  prefix?: string;
}

export const StatGraphVisual: React.FC<StatGraphVisualProps> = ({ item, prefix = '' }) => {
  const isDark = prefix === 'phone';

  if (item.type === 'matrix') {
    return (
      <div className="mt-2 pt-1">
        <div className="w-full h-14 sm:h-18 relative">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 200 60" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <linearGradient id={`memberAreaGrad-${prefix}-${item.id}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0284C7" stopOpacity={isDark ? 0.6 : 0.35} />
                <stop offset="100%" stopColor="#0284C7" stopOpacity={0.0} />
              </linearGradient>
            </defs>
            <line x1="0" y1="15" x2="200" y2="15" stroke={isDark ? '#334155' : '#E2E8F0'} strokeWidth="0.75" strokeDasharray="3 3" />
            <line x1="0" y1="35" x2="200" y2="35" stroke={isDark ? '#334155' : '#E2E8F0'} strokeWidth="0.75" strokeDasharray="3 3" />
            <path
              d="M 0,55 C 30,50 50,38 80,32 C 110,26 135,34 160,18 C 180,8 190,10 200,4 L 200,60 L 0,60 Z"
              fill={`url(#memberAreaGrad-${prefix}-${item.id})`}
            />
            <path
              d="M 0,55 C 30,50 50,38 80,32 C 110,26 135,34 160,18 C 180,8 190,10 200,4"
              stroke="#38BDF8"
              strokeWidth="2.2"
              fill="none"
              strokeLinecap="round"
            />
            <circle cx="80" cy="32" r="2.5" fill="#38BDF8" stroke="#FFFFFF" strokeWidth="1.5" />
            <circle cx="160" cy="18" r="2.5" fill="#38BDF8" stroke="#FFFFFF" strokeWidth="1.5" />
            <circle cx="200" cy="4" r="3.5" fill="#38BDF8" stroke="#FFFFFF" strokeWidth="2" />
          </svg>
        </div>
        <div className={`flex items-center justify-between text-[9px] font-mono mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
          <span>Q1</span>
          <span>Q2</span>
          <span>Q3</span>
          <span>Q4</span>
          <span className="text-[#38BDF8] font-bold">2026</span>
        </div>
      </div>
    );
  }

  if (item.type === 'avatars') {
    return (
      <div className="mt-2 pt-1">
        <div className="h-14 sm:h-18 flex items-end justify-between gap-2 px-1">
          {[
            { label: 'AI', height: '65%' },
            { label: 'ML', height: '90%' },
            { label: 'ROV', height: '75%' },
            { label: 'GNN', height: '85%' },
            { label: 'LLM', height: '100%' },
            { label: 'BIO', height: '70%' },
          ].map((bar, bIdx) => (
            <div key={bIdx} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
              <div className={`w-full rounded-t-md h-full relative flex items-end overflow-hidden ${isDark ? 'bg-slate-800' : 'bg-slate-100'}`}>
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: bar.height }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: bIdx * 0.06 }}
                  className={`w-full rounded-t-md ${
                    bIdx === 4
                      ? 'bg-gradient-to-t from-[#0284C7] to-sky-400'
                      : 'bg-gradient-to-t from-sky-400 to-sky-300'
                  }`}
                />
              </div>
              <span className={`text-[8px] font-mono font-bold ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{bar.label}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (item.type === 'sparkline') {
    return (
      <div className="mt-2 pt-1">
        <div className="w-full h-14 sm:h-18 relative">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 200 60" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <linearGradient id={`sprintAreaGrad-${prefix}-${item.id}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#38BDF8" stopOpacity={isDark ? 0.55 : 0.35} />
                <stop offset="100%" stopColor="#38BDF8" stopOpacity={0.0} />
              </linearGradient>
            </defs>
            <line x1="0" y1="20" x2="200" y2="20" stroke={isDark ? '#334155' : '#E2E8F0'} strokeWidth="0.75" strokeDasharray="3 3" />
            <path
              d="M 0,48 Q 40,46 70,26 T 130,22 T 200,6 L 200,60 L 0,60 Z"
              fill={`url(#sprintAreaGrad-${prefix}-${item.id})`}
            />
            <path
              d="M 0,48 Q 40,46 70,26 T 130,22 T 200,6"
              stroke="#38BDF8"
              strokeWidth="2.2"
              fill="none"
              strokeLinecap="round"
            />
            <circle cx="70" cy="26" r="2.5" fill="#38BDF8" stroke="#FFFFFF" strokeWidth="1.5" />
            <circle cx="130" cy="22" r="2.5" fill="#38BDF8" stroke="#FFFFFF" strokeWidth="1.5" />
            <circle cx="200" cy="6" r="3.5" fill="#38BDF8" stroke="#FFFFFF" strokeWidth="2" />
          </svg>
        </div>
        <div className={`flex items-center justify-between text-[9px] font-mono mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
          <span>36H Spr.</span>
          <span>Hacks</span>
          <span>CTF Runs</span>
          <span className="text-[#38BDF8] font-bold">100% Rate</span>
        </div>
      </div>
    );
  }

  if (item.type === 'progress') {
    return (
      <div className="mt-2 pt-1 space-y-2">
        <div>
          <div className={`flex items-center justify-between text-[10px] font-mono mb-1 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            <span className="font-semibold">Vision &amp; LLMs</span>
            <span className="text-[#38BDF8] font-bold">88%</span>
          </div>
          <div className={`w-full h-2 rounded-full overflow-hidden ${isDark ? 'bg-slate-800' : 'bg-slate-100'}`}>
            <div className="h-full bg-gradient-to-r from-sky-400 to-[#0284C7] rounded-full w-[88%]" />
          </div>
        </div>

        <div>
          <div className={`flex items-center justify-between text-[10px] font-mono mb-1 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            <span className="font-semibold">Swarm &amp; Robotics</span>
            <span className="text-[#38BDF8] font-bold">74%</span>
          </div>
          <div className={`w-full h-2 rounded-full overflow-hidden ${isDark ? 'bg-slate-800' : 'bg-slate-100'}`}>
            <div className="h-full bg-gradient-to-r from-sky-400 to-[#0284C7] rounded-full w-[74%]" />
          </div>
        </div>

        <div className={`flex items-center justify-between text-[9px] font-mono pt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
          <span>Active Repos</span>
          <span className="text-emerald-400 font-bold">● Production Ready</span>
        </div>
      </div>
    );
  }

  return null;
};
