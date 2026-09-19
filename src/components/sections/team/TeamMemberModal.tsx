'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Linkedin, Instagram } from 'lucide-react';
import { TeamMember } from '@/data/team';

interface TeamMemberModalProps {
  member: TeamMember | null;
  onClose: () => void;
}

export const TeamMemberModal: React.FC<TeamMemberModalProps> = ({ member, onClose }) => {
  return (
    <AnimatePresence>
      {member && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-xs"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white border border-slate-200 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl space-y-6 relative text-[#0F172A]"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
              aria-label="Close Profile"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-5">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-gradient-to-b from-sky-50 to-white border border-slate-200 shrink-0 flex items-end justify-center">
                <img
                  src={member.image}
                  alt={member.name}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (!target.src.includes('avatar-placeholder.png')) {
                      target.src = '/team/avatar-placeholder.png';
                    }
                  }}
                  className="max-h-[92%] w-auto object-contain object-bottom"
                />
              </div>
              <div className="space-y-1">
                <span className="font-mono text-xs font-bold text-[#0284C7] uppercase tracking-wider block">
                  {member.category === 'HEADS' || member.category === 'COORDINATORS'
                    ? 'EXECUTIVE'
                    : member.category === 'FACULTY ADVISOR'
                    ? 'ADVISORY'
                    : member.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-sans font-bold text-[#0F172A] leading-tight">
                  {member.name}
                </h3>
                <p className="font-mono text-xs font-bold text-slate-500 uppercase">
                  {member.role}
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1 text-xs font-sans">
              <span className="font-mono text-[10px] font-bold text-slate-400 uppercase block">
                ORGANIZATION
              </span>
              <p className="font-semibold text-slate-700">
                IEEE Computational Intelligence Society • Manipal University Jaipur
              </p>
            </div>

            {/* Social Links */}
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
              <span className="font-mono text-xs text-slate-400 font-bold uppercase">
                CONNECT
              </span>

              <div className="flex items-center gap-3">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-full bg-slate-100 hover:bg-[#0284C7] text-slate-700 hover:text-white text-xs font-mono font-bold flex items-center gap-1.5 transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                  </a>
                )}
                {member.instagram && (
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-full bg-slate-100 hover:bg-[#0284C7] text-slate-700 hover:text-white text-xs font-mono font-bold flex items-center gap-1.5 transition-colors"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                    <span>Instagram</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
