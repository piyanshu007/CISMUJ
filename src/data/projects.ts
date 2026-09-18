export interface ProjectCaseStudy {
  id: string;
  code: string;
  title: string;
  tagline: string;
  category: 'AI' | 'ML' | 'OPTIMIZATION' | 'ROBOTICS' | 'RESEARCH';
  status: 'ACTIVE' | 'PUBLISHED' | 'PROTOTYPE';
  heroImage: string;
  keyMetric: string;
  metricLabel: string;
  problem: string;
  approach: string;
  result: string;
  pipeline: {
    input: string;
    engine: string;
    output: string;
  };
  benchmarks: {
    label: string;
    value: string;
    percentage: number;
  }[];
  specifications: {
    hardwareTarget: string;
    framework: string;
    latency: string;
    footprint: string;
  };
  technologies: string[];
  team: string;
  cohortLead: string;
}

export const PROJECTS: ProjectCaseStudy[] = [
  {
    id: 'project-neuroswarm',
    code: 'PROJECT 001',
    title: 'DECENTRALIZED NEURO-SWARM SUBTERRANEAN MAPPING',
    tagline: 'Multi-agent autonomous swarm mapping in GPS-denied environments',
    category: 'ROBOTICS',
    status: 'ACTIVE',
    heroImage: '/events/robotics.jpg',
    keyMetric: '40% LOWER COMPUTE',
    metricLabel: 'vs Classical LiDAR SLAM',
    problem: 'GPS-denied 3D volumetric mapping in collapsed underground tunnels suffers from extreme dust occlusions and severe edge compute limits.',
    approach: 'Hybrid Particle Swarm Optimization (PSO) combined with asynchronous spiking neural network visual odometry executed on micro-rover nodes.',
    result: 'Autonomous swarm multi-agent map reconstruction with 40% lower compute overhead and real-time mesh sharing over peer-to-peer RF mesh.',
    pipeline: {
      input: 'Asynchronous Event Stream & Stereo Depth',
      engine: 'Spiking Neural Odometry + PSO Solver',
      output: 'Decentralized 3D Voxel Octree Map',
    },
    benchmarks: [
      { label: 'Compute Reduction', value: '40%', percentage: 40 },
      { label: 'Localization Drift', value: '< 1.8cm/m', percentage: 92 },
      { label: 'Bandwidth Efficiency', value: '84%', percentage: 84 },
      { label: 'Mesh Sync Latency', value: '14ms', percentage: 88 },
    ],
    specifications: {
      hardwareTarget: 'NVIDIA Jetson Orin Nano + Custom ESP32 Rover',
      framework: 'ROS2 Humble, PyTorch Spiking, C++20',
      latency: '14.2 ms / frame',
      footprint: '128 MB VRAM runtime',
    },
    technologies: ['ROS2', 'PyTorch Spiking', 'C++', 'Particle Swarm Optimization', 'CUDA'],
    team: 'Autonomous Systems Research Cohort',
    cohortLead: 'Arnav Sharma, Core Lead (Robotics)',
  },
  {
    id: 'project-fuzzy-grid',
    code: 'PROJECT 002',
    title: 'ADAPTIVE TYPE-2 FUZZY CAMPUS MICROGRID DISPATCH',
    tagline: 'Predictive solar balancing and battery telemetry under extreme weather shifts',
    category: 'OPTIMIZATION',
    status: 'PUBLISHED',
    heroImage: '/events/oneiros.jpg',
    keyMetric: '99.8% FREQUENCY STABILITY',
    metricLabel: 'Under 50kW Sudden Load Drops',
    problem: 'Dynamic voltage instability and abrupt solar generation drops in campus microgrid nodes during rapid monsoon cloud cover transitions.',
    approach: 'Takagi-Sugeno-Kang (TSK) Interval Type-2 fuzzy inference engine executing real-time solar irradiance forecasting and battery dispatch rules.',
    result: 'Achieved 99.8% nominal frequency regulation with sub-5ms reactive balancing across university solar array blocks.',
    pipeline: {
      input: 'Multi-bus Phase Telemetry (50Hz Sampling)',
      engine: 'Takagi-Sugeno-Kang Type-2 Fuzzy Rules',
      output: 'Inverter PWM Gate Dispatch Directives',
    },
    benchmarks: [
      { label: 'Nominal Stability', value: '99.8%', percentage: 99 },
      { label: 'Response Time', value: '4.8ms', percentage: 95 },
      { label: 'Peak Load Shaving', value: '31.4%', percentage: 78 },
      { label: 'Battery Lifespan Gain', value: '+22%', percentage: 82 },
    ],
    specifications: {
      hardwareTarget: 'TI TMS320C28x DSP + Campus Sensor Grid',
      framework: 'Simulink, Python C-API, Modbus TCP',
      latency: '4.8 ms decision loop',
      footprint: '38 KB Embedded RAM',
    },
    technologies: ['Simulink', 'Python', 'Inference Engines', 'Grid Telemetry', 'DSP'],
    team: 'Smart Energy & Intelligent Systems Group',
    cohortLead: 'Priya Mehra, Research Associate',
  },
  {
    id: 'project-evo-nas',
    code: 'PROJECT 003',
    title: 'EVO-NAS: MICROCONTROLLER ARCHITECTURE SEARCH',
    tagline: 'Automated Pareto-optimal neural network generation for sub-100KB SRAM chips',
    category: 'AI',
    status: 'ACTIVE',
    heroImage: '/gallery/workshop.jpg',
    keyMetric: '3.2× BARE-METAL SPEEDUP',
    metricLabel: '42KB SRAM Keyword-Spotting Network',
    problem: 'Manual neural architecture design for sub-100KB SRAM microcontrollers produces sluggish inferences and unacceptable battery drain.',
    approach: 'Multi-objective genetic algorithm searching quantization topologies, layer pruning masks, and non-linear activation shapes.',
    result: 'Generated 42KB keyword-spotting neural network reaching 89.4% Top-1 accuracy with 3.2× speedup on bare-metal Cortex-M4.',
    pipeline: {
      input: 'Candidate Topologies & Layer Search Space',
      engine: 'NSGA-II Genetic Pareto Evolution',
      output: 'Quantized C99 Header for ARM Cortex',
    },
    benchmarks: [
      { label: 'Inference Speedup', value: '3.2×', percentage: 86 },
      { label: 'Top-1 Accuracy', value: '89.4%', percentage: 89 },
      { label: 'SRAM Footprint', value: '42 KB', percentage: 94 },
      { label: 'Power Draw Drop', value: '-65%', percentage: 85 },
    ],
    specifications: {
      hardwareTarget: 'ARM Cortex-M4 (STM32F401, 84MHz)',
      framework: 'TensorFlow Lite for Micro, CMSIS-NN, C99',
      latency: '28 ms inference',
      footprint: '42 KB SRAM / 112 KB Flash',
    },
    technologies: ['C', 'TinyML', 'Genetic Algorithms', 'TensorFlow Lite', 'ARM CMSIS'],
    team: 'Edge AI & Embedded Intelligence Lab',
    cohortLead: 'Devansh Verma, Systems Lead',
  },
  {
    id: 'project-event-vision',
    code: 'PROJECT 004',
    title: 'NEUROMORPHIC EVENT-BASED RETINAL MOTION SEGMENTATION',
    tagline: 'Bio-inspired microsecond visual tracking for autonomous drone obstacle avoidance',
    category: 'RESEARCH',
    status: 'PROTOTYPE',
    heroImage: '/events/webforge.jpg',
    keyMetric: '< 1MS LATENCY',
    metricLabel: 'Under 120dB High Dynamic Range',
    problem: 'Conventional 60FPS frame-based cameras suffer motion blur and high latency during high-speed autonomous aerial obstacle avoidance.',
    approach: 'Bio-inspired asynchronous event camera stream processing utilizing cellular automata and spatiotemporal graph convolutions.',
    result: 'Sub-millisecond latency object segmentation under extreme dynamic range swings from total darkness to direct sunlight.',
    pipeline: {
      input: 'Asynchronous DVS Pixel Firing Stream',
      engine: 'Spatiotemporal Continuous Graph Conv',
      output: 'Dense Bounding Trajectory Vectors',
    },
    benchmarks: [
      { label: 'Tracking Latency', value: '0.8ms', percentage: 96 },
      { label: 'Dynamic Range', value: '120 dB', percentage: 92 },
      { label: 'Temporal Resolution', value: '1 µs', percentage: 98 },
      { label: 'Motion Blur Immunity', value: '100%', percentage: 100 },
    ],
    specifications: {
      hardwareTarget: 'Prophesee Metavision Sensor + FPGA Co-processor',
      framework: 'Neuromorphic SDK, PyTorch Geometric, C++',
      latency: '0.8 ms pipeline',
      footprint: '240 MB DRAM',
    },
    technologies: ['Neuromorphic SDK', 'Event-based Vision', 'PyTorch', 'Graph CNNs'],
    team: 'Vision & Perception Research Wing',
    cohortLead: 'Sanya Gupta, Computer Vision Cohort',
  },
];
