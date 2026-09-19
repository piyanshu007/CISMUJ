export interface BroadsheetSidebarArticle {
  title: string;
  blurb: string;
  page: string;
}

export interface BroadsheetEdition {
  id: string;
  issueNo: string;
  volumeNo: string;
  date: string;
  dayDate: string;
  headline: string;
  deck: string;
  heroImage: string;
  imageCaption: string;
  photoCredit: string;
  byline: string;
  bylineRole: string;
  leadArticleP1: string;
  leadArticleP2: string;
  sidebarTitle: string;
  sidebarArticles: BroadsheetSidebarArticle[];
  secondStoryTitle: string;
  secondStoryBody: string;
  quoteTitle: string;
  quoteBody: string;
  highlights: string[];
  weather: string;
  temperature: string;
}

export const BROADSHEET_EDITIONS: BroadsheetEdition[] = [
  {
    id: 'issue-08',
    issueNo: '08',
    volumeNo: 'VIII',
    date: 'MARCH 2026',
    dayDate: 'FRIDAY, MARCH 20, 2026',
    headline: 'AUTONOMOUS SWARMS MAP GPS-DENIED CAVERNS',
    deck: 'Student Robotics Cohort Validates Spiking Neural Odometry With 40% Lower Compute Overhead in Underground Testbeds',
    heroImage: '/events/robotics.jpg',
    imageCaption: 'Fig 1.1: Core engineering cohort validating autonomous rover ROS2 navigation and micro-transformer benchmarks in the robotics testbed.',
    photoCredit: 'STAFF PHOTO // IEEE CIS ARCHIVES',
    byline: 'By ARNAV SHARMA & DEV KULSHRESTHA',
    bylineRole: 'Autonomous Systems Research Wing',
    leadArticleP1: 'FOR OVER TWO CONTINUOUS ACADEMIC TERMS, the student research wing at IEEE Computational Intelligence Society MUJ has engineered a decentralized multi-agent subterranean mapping architecture. Utilizing bio-inspired spiking neural odometry coupled with asynchronous event-stream sensors, the autonomous micro-rovers navigate complex collapsed tunnels without access to satellite GPS or high-power LiDAR rigs.',
    leadArticleP2: 'Field tests conducted across mock obstacle tunnels demonstrated a 40 percent reduction in edge compute cycles compared to classical visual SLAM solutions. The system maintains spatial orientation with sub-two-centimeter localization drift per meter traversed, streaming live volumetric voxel maps across peer-to-peer radio frequency meshes to surface command stations in real time.',
    sidebarTitle: 'INDEX OF TODAY’S DISPATCH',
    sidebarArticles: [
      {
        title: 'NEUROMORPHIC RETINAL VISION',
        blurb: 'Microsecond latency motion tracking under high dynamic light shifts.',
        page: 'PAGE A3',
      },
      {
        title: 'TYPE-2 FUZZY MICROGRID',
        blurb: 'Takagi-Sugeno-Kang logic achieves 99.8% frequency regulation.',
        page: 'PAGE B1',
      },
      {
        title: 'WEBFORGE HACKATHON REVIEW',
        blurb: '180+ developers deploy 45 production software systems in 36 hours.',
        page: 'PAGE C2',
      },
    ],
    secondStoryTitle: 'STUDENT RESEARCHERS SECURE PEER-REVIEWED MILESTONE',
    secondStoryBody: 'The editorial board is pleased to announce four student preprints accepted for review across flagship IEEE Computational Intelligence Society colloquia. Covering neuromorphic vision, Pareto-optimal neural architecture search, and decentralized genetic swarm algorithms, these publications solidify Manipal University Jaipur as a premier center of undergraduate AI research.',
    quoteTitle: 'THE EDITORIAL CREED',
    quoteBody: 'We have built a research and hack culture that is rigorous, open-source, and permanent across our university.',
    highlights: [
      'ROS2 Humble & Spiking Neural Odometry on Low-Power Jetson Orin Nano',
      'Underground Multi-Agent Radio Frequency Mesh Telemetry Protocol',
      'Open-Source C++20 Voxel Octree Reconstruction Codebase Released',
    ],
    weather: 'CLEAR • CONVERGED',
    temperature: '24°C / 75°F',
  },
  {
    id: 'issue-07',
    issueNo: '07',
    volumeNo: 'VII',
    date: 'FEBRUARY 2026',
    dayDate: 'MONDAY, FEBRUARY 16, 2026',
    headline: 'REASONING AGENTS: TRANSFORMERS IN STUDENT HANDS',
    deck: 'Over 250 Engineers Convene For Masterclasses on Chain-of-Thought Search and Self-Correcting Code Generation',
    heroImage: '/events/oneiros.jpg',
    imageCaption: 'Fig 2.3: Student delegates constructing agentic workflows and fine-tuning open-weight foundation models during the Oneiros hack symposium.',
    photoCredit: 'PHOTO BY EDITORIAL MEDIA DESK',
    byline: 'By SANYA GUPTA & RISHAN MAZUMDAR',
    bylineRole: 'AI & Machine Learning Research Desk',
    leadArticleP1: 'THE EMERGENCE OF TEST-TIME COMPUTE and self-verifying reasoning agents has transformed student engineering at Manipal University Jaipur. In an intensive symposium hosted in the Academic Block amphitheater, student developers explored fine-tuning quantized 7B and 14B open-weight architectures directly on consumer GPU workstations using parameter-efficient QLoRA methodologies.',
    leadArticleP2: 'Working across autonomous code synthesis and multi-agent debate structures, participant teams demonstrated production pipelines capable of parsing university research documents, generating verifiable test suites, and orchestrating self-healing API services that recover from runtime exceptions without human intervention.',
    sidebarTitle: 'DISPATCH BULLETINS',
    sidebarArticles: [
      {
        title: 'LOCAL WEIGHTS VS. APIS',
        blurb: 'Why academic independence demands locally hosted inference clusters.',
        page: 'PAGE A4',
      },
      {
        title: 'AGENT REASONING BENCHMARKS',
        blurb: 'Step-by-step verification protocols tested against adversarial prompts.',
        page: 'PAGE B2',
      },
      {
        title: 'HARDWARE CORNER',
        blurb: 'Optimizing VRAM footprints with INT4 AWQ quantization scripts.',
        page: 'PAGE C1',
      },
    ],
    secondStoryTitle: 'LABORATORY REPORT: QUANTIZED INFERENCE ON EMBEDDED CHIPS',
    secondStoryBody: 'Our Edge AI cohort successfully ported a 42-kilobyte keyword-spotting neural classifier to a bare-metal ARM Cortex-M4 microcontroller. With 3.2× speedups over stock TensorFlow Lite micro-kernels, the project establishes practical foundations for zero-latency speech interfaces running on coin-cell batteries.',
    quoteTitle: 'TECHNICAL OUTLOOK',
    quoteBody: 'Theory without deployment is incomplete. Every formula we prove must ultimately compile and execute on silicon.',
    highlights: [
      'Chain-of-Thought Verification & Multi-Agent Orchestration Frameworks',
      'Local Model Execution on Campus Compute Workstations With Full Privacy',
      'Automated Test Generation and Self-Repairing Web Microservices',
    ],
    weather: 'MIST • STEADY',
    temperature: '19°C / 66°F',
  },
  {
    id: 'issue-06',
    issueNo: '06',
    volumeNo: 'VI',
    date: 'JANUARY 2026',
    dayDate: 'SATURDAY, JANUARY 24, 2026',
    headline: 'WEBFORGE CLOSES WITH 45 DEPLOYED AI SYSTEMS',
    deck: '36 Continuous Hours of Rapid Prototyping Yields Production-Ready Healthcare Triage, Vision Reticles & Mesh Networks',
    heroImage: '/events/webforge.jpg',
    imageCaption: 'Fig 3.1: Finalists demonstrating real-time computer vision gesture control and edge inference prototypes to industry judges in the main lab.',
    photoCredit: 'STAFF PHOTOGRAPHER // CIS ARCHIVE',
    byline: 'By SHUBHANSHU DIXIT & YUVRAJ SETHI',
    bylineRole: 'Hackathon Directorate & Press Corps',
    leadArticleP1: 'THE PREMIER WINTER HACKATHON OF MANIPAL UNIVERSITY JAIPUR, WebForge 2026, concluded Sunday evening following thirty-six continuous hours of intensive development. Over 180 undergraduate and graduate hackers formed 45 multidisciplinary squads to tackle challenges across medical diagnostics, autonomous rover telemetry, and distributed ledger security.',
    leadArticleP2: 'Supported by industry veterans and distinguished faculty mentors, teams pushed past minimum viable products to deliver fully containerized software with automated CI/CD pipelines, live database sync, and embedded hardware demonstrations. Cash bounties exceeding ₹60,000 were awarded to the top three innovations.',
    sidebarTitle: 'HACKATHON SPOTLIGHT',
    sidebarArticles: [
      {
        title: '1ST PRIZE: MEDISCAN',
        blurb: 'Multimodal chest radiograph segmentation with uncertainty calibration.',
        page: 'PAGE A2',
      },
      {
        title: '2ND PRIZE: ROVERNET',
        blurb: 'Low-bandwidth peer-to-peer telemetry protocol for rescue drones.',
        page: 'PAGE A5',
      },
      {
        title: 'INCUBATION PATHWAYS',
        blurb: 'Top five student teams receive university incubation grants.',
        page: 'PAGE B4',
      },
    ],
    secondStoryTitle: 'FACULTY COMMENDATION: FOSTERING CAMPUS-WIDE BUILDER CULTURE',
    secondStoryBody: 'Dr. Mahesh Jangid, Branch Counselor, commended the organizing committee for orchestrating a flawless hackathon environment. "WebForge demonstrates that when students are provided rigorous mentorship, low-latency compute resources, and challenging problem statements, world-class engineering naturally follows."',
    quoteTitle: 'THE BUILDER CREED',
    quoteBody: 'From zero to deployed cloud container in thirty-six hours—practical student engineering creates lasting industrial value.',
    highlights: [
      '180+ Developers Across 45 Teams Completed Production Deliverables',
      'Over ₹60,000 Awarded in Cash Prizes and University Incubation Grants',
      'Complete Open-Source Repository Archive Published for Public Access',
    ],
    weather: 'SUNNY • HIGH COMMUTE',
    temperature: '22°C / 72°F',
  },
];
