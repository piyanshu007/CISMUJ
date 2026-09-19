'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { PROJECTS, ProjectCaseStudy } from '@/data/projects';

interface ProjectDetailModalProps {
  selectedProject: ProjectCaseStudy | null;
  showAllModal: boolean;
  onCloseSelected: () => void;
  onCloseAll: () => void;
  onSelectProject: (proj: ProjectCaseStudy) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  selectedProject,
  showAllModal,
  onCloseSelected,
  onCloseAll,
  onSelectProject,
}) => {
  return (
    <>
      {/* Case Study Technical Specs Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white border border-slate-200 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl space-y-6 relative text-[#0F172A]"
            >
              <button
                onClick={onCloseSelected}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
                aria-label="Close Case Study"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2 pr-10">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-[#0284C7] uppercase tracking-wider">
                    {selectedProject.code} // {selectedProject.category}
                  </span>
                  <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-mono font-bold">
                    {selectedProject.status}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-sans font-bold text-[#0F172A] tracking-tight">
                  {selectedProject.title}
                </h2>
                <p className="text-sm font-sans text-slate-600">{selectedProject.tagline}</p>
              </div>

              <div className="relative aspect-[21/9] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                <img
                  src={selectedProject.heroImage}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4 rounded-2xl bg-sky-50/80 border border-sky-200 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-mono font-bold text-slate-500 uppercase block">
                    BENCHMARK METRIC
                  </span>
                  <span className="text-xl sm:text-2xl font-sans font-extrabold text-[#0284C7]">
                    {selectedProject.keyMetric}
                  </span>
                </div>
                <span className="text-xs font-sans text-slate-600 text-right">
                  {selectedProject.metricLabel}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="font-mono font-bold text-slate-800 uppercase block">
                    THE PROBLEM
                  </span>
                  <p className="text-slate-600 leading-relaxed">{selectedProject.problem}</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="font-mono font-bold text-[#0284C7] uppercase block">
                    RESEARCH APPROACH
                  </span>
                  <p className="text-slate-600 leading-relaxed">{selectedProject.approach}</p>
                </div>
              </div>

              <div className="space-y-2">
                <span className="font-mono text-xs font-bold text-slate-800 uppercase block">
                  DATA PIPELINE FLOW
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs text-center">
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                    <span className="text-[10px] text-slate-400 block uppercase">INPUT</span>
                    <span className="font-semibold text-slate-700">{selectedProject.pipeline.input}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-sky-50 border border-sky-200">
                    <span className="text-[10px] text-[#0284C7] block uppercase">ENGINE</span>
                    <span className="font-semibold text-[#0284C7]">{selectedProject.pipeline.engine}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                    <span className="text-[10px] text-slate-400 block uppercase">OUTPUT</span>
                    <span className="font-semibold text-slate-700">{selectedProject.pipeline.output}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
                {selectedProject.technologies.map((techName) => (
                  <span
                    key={techName}
                    className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-mono font-medium"
                  >
                    {techName}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Full Catalog Modal */}
      <AnimatePresence>
        {showAllModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white border border-slate-200 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl space-y-6 relative text-[#0F172A]"
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <h2 className="text-2xl font-sans font-bold text-[#0F172A]">
                    All Club Projects & Repositories
                  </h2>
                  <p className="text-xs font-sans text-slate-500">
                    Computational intelligence models developed by IEEE CIS MUJ student researchers
                  </p>
                </div>
                <button
                  onClick={onCloseAll}
                  className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
                  aria-label="Close All Projects"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {PROJECTS.map((catalogProject) => (
                  <div
                    key={catalogProject.id}
                    onClick={() => {
                      onCloseAll();
                      onSelectProject(catalogProject);
                    }}
                    className="p-4 rounded-2xl bg-slate-50 hover:bg-sky-50/40 border border-slate-200 hover:border-[#0284C7] transition-all cursor-pointer flex gap-4 items-center group"
                  >
                    <img
                      src={catalogProject.heroImage}
                      alt={catalogProject.title}
                      className="w-20 h-20 rounded-xl object-cover shrink-0"
                    />
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono font-bold text-[#0284C7] uppercase">
                        {catalogProject.category} // {catalogProject.code}
                      </span>
                      <h4 className="text-sm font-sans font-bold text-slate-900 group-hover:text-[#0284C7] transition-colors leading-snug">
                        {catalogProject.title}
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-1">{catalogProject.tagline}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
