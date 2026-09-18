import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { Eye, Dna, Activity, Users, ArrowRight } from 'lucide-react';

export const InspiredByNature: React.FC = () => {
  const biomimeticMappings = [
    {
      icon: <Eye className="w-5 h-5 text-sky-600" />,
      biological: 'Synaptic Plasticity',
      bioDesc: 'Neurons strengthen and prune connections based on continuous stimulus reinforcement.',
      computational: 'Gradient Descent & Weight Tensors',
      compDesc: 'Backpropagation adjusts floating-point weight matrices to minimize loss manifolds.',
    },
    {
      icon: <Dna className="w-5 h-5 text-emerald-600" />,
      biological: 'Natural Selection',
      bioDesc: 'Crossover, environmental pressure, and mutations guide continuous species survival.',
      computational: 'Genetic & Evolutionary Algorithms',
      compDesc: 'Stochastic candidate population vectors breed across multi-modal fitness surfaces.',
    },
    {
      icon: <Activity className="w-5 h-5 text-cyan-600" />,
      biological: 'Sensory Imprecision',
      bioDesc: 'Living organisms make decisive survival actions under noisy, imperfect sensory observation.',
      computational: 'Type-2 Fuzzy Inference',
      compDesc: 'Continuous membership functions formulate degrees of truth over rigid binary thresholds.',
    },
    {
      icon: <Users className="w-5 h-5 text-indigo-600" />,
      biological: 'Swarm & Flocking',
      bioDesc: 'Bird flocks and ant colonies coordinate global goals using purely local peer signals.',
      computational: 'Particle Swarm Consensus',
      compDesc: 'Decentralized velocity-position updates solve complex distributed combinatorial routing.',
    },
  ];

  return (
    <section id="nature" className="py-24 sm:py-32 bg-gradient-to-b from-white via-sky-50/40 to-white relative border-b border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="03"
          badgeText="BIOMIMETIC FOUNDATIONS"
          title="INSPIRED BY SYSTEMS THAT LEARN."
          subtitle="Nature solves intractable optimization problems not through brute-force computation, but through adaptation, fuzziness, and evolution."
        />

        {/* Big Graphic Quote Box */}
        <div className="my-12 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 text-white shadow-glass-md relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight uppercase leading-[1.05] max-w-3xl">
              NATURE DOESN&apos;T
              <br />
              <span className="text-sky-200">
                COMPUTE LIKE US.
              </span>
              <br />
              IT ADAPTS.
            </h3>

            <p className="mt-6 text-sky-100 font-sans text-sm sm:text-base max-w-2xl leading-relaxed">
              By abstracting biological survival, sensory fuzziness, and synaptic memory into mathematical equations, computational intelligence creates algorithms capable of thriving in noisy real-world environments.
            </p>
          </div>
        </div>

        {/* Biomimetic to Computational Transition Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {biomimeticMappings.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-3xl bg-white border border-sky-200/80 shadow-glass-sm hover:shadow-glass-md hover:border-sky-400 transition-all font-mono text-xs space-y-4 group"
            >
              <div className="flex items-center justify-between border-b border-sky-100 pb-3">
                <div className="flex items-center gap-2.5 text-slate-900 font-bold">
                  <div className="p-2 rounded-xl bg-sky-50 border border-sky-200 shadow-xs">
                    {item.icon}
                  </div>
                  <span>BIOMIMETIC VECTOR // 0{idx + 1}</span>
                </div>
                <span className="text-[10px] text-sky-700 bg-sky-50 px-2.5 py-1 rounded-full border border-sky-200 font-bold">
                  IEEE_BIO_MAP
                </span>
              </div>

              <div className="space-y-3 font-sans">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-1">
                  <div className="text-[11px] font-mono text-emerald-700 uppercase tracking-wider flex items-center gap-1.5 font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Biological Origin
                  </div>
                  <div className="text-slate-900 font-bold text-sm">{item.biological}</div>
                  <p className="text-slate-600 text-xs leading-relaxed">{item.bioDesc}</p>
                </div>

                <div className="flex justify-center text-sky-600 font-mono text-xs py-0.5">
                  <ArrowRight className="w-4 h-4 rotate-90 sm:rotate-0" />
                </div>

                <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-200/80 space-y-1">
                  <div className="text-[11px] font-mono text-sky-700 uppercase tracking-wider flex items-center gap-1.5 font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                    Computational Formulation
                  </div>
                  <div className="text-slate-900 font-bold text-sm">{item.computational}</div>
                  <p className="text-slate-600 text-xs leading-relaxed">{item.compDesc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
