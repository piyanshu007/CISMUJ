export interface Paradigm {
  id: string;
  number: string;
  name: string;
  tagline: string;
  description: string;
  formula: string;
  keyConcepts: string[];
}

export const PARADIGMS: Paradigm[] = [
  {
    id: 'neural-networks',
    number: '01',
    name: 'NEURAL NETWORKS',
    tagline: 'Learning from patterns.',
    description:
      'Biologically inspired architectures consisting of interconnected nodes that adapt synaptic weights through experience to approximate non-linear mathematical mappings.',
    formula: 'y = σ(∑ w_i · x_i + b)',
    keyConcepts: ['Manifold Learning', 'Gradient Backprop', 'Latent Embeddings', 'Deep Representations'],
  },
  {
    id: 'fuzzy-systems',
    number: '02',
    name: 'FUZZY SYSTEMS',
    tagline: 'Reasoning with uncertainty.',
    description:
      'Mathematical formalisms that model approximate rather than exact reasoning, translating human linguistic nuance into continuous truth membership curves.',
    formula: 'μ_A(x) ∈ [0, 1]',
    keyConcepts: ['Membership Functions', 'Linguistic Variables', 'Defuzzification', 'Type-2 Inference'],
  },
  {
    id: 'evolutionary-computation',
    number: '03',
    name: 'EVOLUTIONARY COMPUTATION',
    tagline: 'Searching, adapting and evolving.',
    description:
      'Population-based metaheuristic algorithms inspired by Darwinian natural selection—using selection pressure, crossover, and mutation to explore complex search spaces.',
    formula: 'P(t+1) = select(mutate(cross(P(t))))',
    keyConcepts: ['Genetic Algorithms', 'Fitness Landscapes', 'Differential Evolution', 'Pareto Optimality'],
  },
  {
    id: 'hybrid-intelligence',
    number: '04',
    name: 'HYBRID INTELLIGENT SYSTEMS',
    tagline: 'Combining approaches to solve complex problems.',
    description:
      'Synergistic integration of multiple computational paradigms—such as neuro-fuzzy systems and evolutionary neural search—to solve intractable real-world complexity.',
    formula: 'Ψ_hybrid = Φ_neural ⊗ Ω_fuzzy ⊗ Γ_evo',
    keyConcepts: ['ANFIS Architectures', 'Evolutionary RL', 'Neuro-Symbolic Logic', 'Multi-Agent Consensus'],
  },
];
