export interface ResearchEntry {
  id: string;
  code: string;
  title: string;
  category: 'RESEARCH' | 'EXPLAINER' | 'ARTICLE' | 'RESOURCE' | 'PROJECT_NOTE';
  paradigm: 'NEURAL_NETWORKS' | 'FUZZY_LOGIC' | 'EVOLUTIONARY_COMPUTATION' | 'HYBRID_SYSTEMS';
  abstract: string;
  author: string;
  date: string;
  readTime: string;
}

export const RESEARCH_ENTRIES: ResearchEntry[] = [
  {
    id: 'graph-manifolds',
    code: 'DOC_01',
    title: 'Topological Invariants in Deep Graph Neural Latent Spaces',
    category: 'RESEARCH',
    paradigm: 'NEURAL_NETWORKS',
    abstract:
      'We investigate persistent homology representations across deep graph convolutions, demonstrating that topological cycle preservation directly correlates with out-of-distribution graph classification accuracy.',
    author: 'IEEE CIS MUJ Research Cohort',
    date: '2026.08',
    readTime: '8 min read',
  },
  {
    id: 'type2-fuzzy-bounds',
    code: 'DOC_02',
    title: 'Interval Type-2 Footprints of Uncertainty in Extreme Weather Robotics',
    category: 'EXPLAINER',
    paradigm: 'FUZZY_LOGIC',
    abstract:
      'An analytical formulation of footprint of uncertainty (FOU) bounds for obstacle clearance vectors when lidar and ultrasonic sensors operate under heavy atmospheric noise scattering.',
    author: 'Robotics & Autonomous Systems Lab',
    date: '2026.07',
    readTime: '6 min read',
  },
  {
    id: 'differential-evolution-edges',
    code: 'DOC_03',
    title: 'Adaptive Multi-Objective Differential Evolution for Edge Compute Slicing',
    category: 'ARTICLE',
    paradigm: 'EVOLUTIONARY_COMPUTATION',
    abstract:
      'A novel mutation operator balancing thermal throttling, latency jitter, and battery drain across federated micro-clusters in polynomial time.',
    author: 'Distributed Systems & Optimization Wing',
    date: '2026.06',
    readTime: '11 min read',
  },
  {
    id: 'differentiable-logic',
    code: 'DOC_04',
    title: 'Neuro-Symbolic First-Order Logic Invariant Enforcement in Drone Flight',
    category: 'PROJECT_NOTE',
    paradigm: 'HYBRID_SYSTEMS',
    abstract:
      'Bridging continuous neural representations with discrete mathematical solver guarantees to ensure collision-free physical envelope constraints during rapid maneuvers.',
    author: 'Computational Intelligence Lab',
    date: '2026.05',
    readTime: '9 min read',
  },
];
