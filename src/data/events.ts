export interface EventItem {
  id: string;
  code: string;
  year: string;
  date: string;
  title: string;
  category: 'HACKATHON' | 'WORKSHOP' | 'FLAGSHIP' | 'COMPETITION';
  description: string;
  location: string;
  status: 'UPCOMING' | 'ARCHIVED';
  attendees: string;
  image: string;
  highlights: string[];
  registrationUrl: string;
}

export const EVENTS: EventItem[] = [
  {
    id: 'webforge-hackathon',
    code: 'FLAGSHIP_01',
    year: '2024',
    date: 'OCT 18-20',
    title: 'WEBFORGE: CODE • BUILD • DEPLOY HACKATHON',
    category: 'HACKATHON',
    description:
      'The premier full-stack project development competition at MUJ where teams designed, coded, and deployed functional web and AI-driven platforms with "Code. Design. Solve. Impact."',
    location: 'Central Computer Center, MUJ',
    status: 'ARCHIVED',
    attendees: '180+ Hackers',
    image: '/events/webforge-banner.png',
    highlights: ['36h Rapid Prototyping', 'AI Model Integrations', '₹40,000+ Prize Pool'],
    registrationUrl: 'https://www.instagram.com/ieee.cismuj/',
  },
  {
    id: 'oneiros-llm-workshop',
    code: 'WORKSHOP_02',
    year: '2024',
    date: 'NOV 12',
    title: 'ONEIROS: LLM FINE-TUNING & TRANSFORMER ARCHITECTURES',
    category: 'WORKSHOP',
    description:
      'Hands-on workshop breaking down transformer attention mechanisms, QLoRA fine-tuning workflows, and deploying on-device LLM agents for campus utilities.',
    location: 'TJA Auditorium, Manipal University Jaipur',
    status: 'ARCHIVED',
    attendees: '250+ Attendees',
    image: '/events/oneiros.jpg',
    highlights: ['Transformer Attention Math', 'QLoRA Training on Colab', 'Campus LLM Deployment'],
    registrationUrl: 'https://www.instagram.com/ieee.cismuj/',
  },
  {
    id: 'cyber-mafia-arena',
    code: 'FLAGSHIP_03',
    year: '2024',
    date: 'DEC 05',
    title: 'CYBER MAFIA: STRATEGY, CTF & SOCIAL DEDUCTION',
    category: 'COMPETITION',
    description:
      'An immersive strategy challenge and cybersecurity gaming arena where teams navigated adversarial deception, CTF logic, and game-theoretic gameplay.',
    location: 'Innovation Lounge, MUJ',
    status: 'ARCHIVED',
    attendees: '160+ Competitors',
    image: '/events/cybermafia-banner.png',
    highlights: ['Game Theory Strategy', 'Cybersecurity Logic', 'Elimination Gameplay'],
    registrationUrl: 'https://www.instagram.com/ieee.cismuj/',
  },
  {
    id: 'pytorch-neural-lab',
    code: 'WORKSHOP_04',
    year: '2025',
    date: 'JAN 22',
    title: 'ZERO-TO-ONE: PYTORCH & COMPUTER VISION ACCELERATOR',
    category: 'WORKSHOP',
    description:
      'Weekend accelerator teaching backpropagation, PyTorch tensors, CNN feature extractors, and live webcam object detection with OpenCV.',
    location: 'Lab 4, Computer Science Block, MUJ',
    status: 'ARCHIVED',
    attendees: '120+ Students',
    image: '/gallery/workshop.jpg',
    highlights: ['PyTorch Foundations', 'CNN Vision Models', 'OpenCV Real-time Tracking'],
    registrationUrl: 'https://www.instagram.com/ieee.cismuj/',
  },
  {
    id: 'robotics-edge-ai-expo',
    code: 'FLAGSHIP_05',
    year: '2025',
    date: 'FEB 14',
    title: 'AUTONOMOUS ROVER & EMBEDDED EDGE AI SHOWCASE',
    category: 'FLAGSHIP',
    description:
      'Live exhibition and testing of ROS2 autonomous ground vehicles, fuzzy obstacle avoidance logic, and TinyML vision deployed on microcontrollers.',
    location: 'Campus Quadrangle & Lab B1, MUJ',
    status: 'ARCHIVED',
    attendees: '300+ Visitors',
    image: '/events/robotics.jpg',
    highlights: ['ROS 2 Navigation', 'Fuzzy Logic Braking', 'Edge Camera Hardware'],
    registrationUrl: 'https://www.instagram.com/ieee.cismuj/',
  },
  {
    id: 'bio-hack-2025',
    code: 'UPCOMING_06',
    year: '2025',
    date: 'APR 08-10',
    title: 'GENESIS: NATIONAL COMPUTATIONAL INTELLIGENCE SPRINT',
    category: 'HACKATHON',
    description:
      'The upcoming national-level hackathon track exploring bio-inspired algorithms, swarm robotics, generative agents, and healthcare AI solutions.',
    location: 'Main Auditorium & Online Hybrid',
    status: 'UPCOMING',
    attendees: 'REGISTRATIONS OPEN',
    image: '/gallery/team_awards.jpg',
    highlights: ['₹75,000+ Prize Pool', 'National IEEE Recognition', 'Industry Mentorship'],
    registrationUrl: 'https://www.instagram.com/ieee.cismuj/',
  },
];
