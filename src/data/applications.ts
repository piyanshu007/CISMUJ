export interface ApplicationArea {
  id: string;
  domain: string;
  problem: string;
  approach: string;
  application: string;
  metric: string;
}

export const APPLICATION_AREAS: ApplicationArea[] = [
  {
    id: 'power-systems',
    domain: 'POWER SYSTEMS & SMART GRIDS',
    problem: 'Stochastic renewable load fluctuations & instantaneous microgrid imbalance under demand surges.',
    approach: 'Multi-objective Pareto evolutionary search coupled with adaptive fuzzy load-balancing rules.',
    application: 'Real-time autonomous microgrid power distribution, mitigating blackouts and thermal line stress.',
    metric: '32% EFFICIENCY GAIN',
  },
  {
    id: 'sensor-networks',
    domain: 'DISTRIBUTED SENSOR NETWORKS',
    problem: 'High environmental entropy, asynchronous telemetry packet loss, and severe edge power constraints.',
    approach: 'Quantized temporal convolutional encoders running localized anomaly clustering directly on edge nodes.',
    application: 'Decentralized seismic and industrial IoT anomaly detection without continuous cloud transmission.',
    metric: '99.2% TELEMETRY FIDELITY',
  },
  {
    id: 'optimization',
    domain: 'COMPLEX LOGISTICS & COMBINATORIAL OPTIMIZATION',
    problem: 'NP-hard multi-depot fleet dispatch with dynamic road topologies and narrow delivery time windows.',
    approach: 'Ant colony swarm optimization guided by deep value-policy reinforcement learning agents.',
    application: 'Continuous multi-agent route re-evaluation delivering near-optimal polynomial-time dispatch.',
    metric: '4.8M PATH EVALS / SEC',
  },
  {
    id: 'dynamic-systems',
    domain: 'AUTONOMOUS DYNAMIC ROBOTICS',
    problem: 'Non-linear aerodynamic turbulence and actuator latency during high-speed drone maneuvering.',
    approach: 'Adaptive Neuro-Fuzzy Inference Systems (ANFIS) isolating sensory noise in sub-10ms control loops.',
    application: 'High-precision trajectory stabilization for autonomous search-and-rescue quadcopters.',
    metric: '< 8ms CONTROL LATENCY',
  },
];
