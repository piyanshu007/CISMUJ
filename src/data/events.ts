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
    title: 'WEBFORGE: A SMART CAMPUS WEBATHON',
    category: 'HACKATHON',
    description:
      'The premier full-stack and web innovation competition at MUJ where teams designed, coded, and deployed functional web and AI-driven platforms with "Code. Design. Solve. Impact."',
    location: 'Central Computer Center, MUJ',
    status: 'ARCHIVED',
    attendees: '180+ Hackers',
    image: '/events/webforge.jpg',
    highlights: ['36h Rapid Prototyping', 'AI Model Integrations', '₹40,000+ Prize Pool'],
    registrationUrl: 'https://www.instagram.com/ieeemuj/',
  },
  {
    id: 'hackerzstreet-hackathon',
    code: 'FLAGSHIP_02',
    year: '2025',
    date: 'MAR 14-15',
    title: 'HACKERZSTREET 4.0: 24-HOUR FLAGSHIP HACKATHON',
    category: 'HACKATHON',
    description:
      'The premier 24-hour national hackathon bringing together hundreds of developers, designers, and innovators to solve high-impact technological challenges.',
    location: 'TMA Pai Auditorium, Manipal University Jaipur',
    status: 'ARCHIVED',
    attendees: '500+ Participants',
    image: '/events/hackerzstreet.jpg',
    highlights: ['24-Hour Code Marathon', 'National Level Teams', '₹1,00,000+ Prize Pool'],
    registrationUrl: 'https://www.instagram.com/ieeemuj/',
  },
  {
    id: 'oneiros-fest-experience',
    code: 'FLAGSHIP_03',
    year: '2024',
    date: 'NOV 12',
    title: 'ONEIROS: ANNUAL CULTURAL & TECH FESTIVAL',
    category: 'FLAGSHIP',
    description:
      'The grand annual festival showcasing vibrant student talent, drone displays, stage performances, tech exhibitions, and nationwide student participation.',
    location: 'Main University Grounds, Manipal University Jaipur',
    status: 'ARCHIVED',
    attendees: '5000+ Attendees',
    image: '/events/oneiros.jpg',
    highlights: ['Drone Light Show', 'Tech Arena Exhibitions', 'Live Concerts'],
    registrationUrl: 'https://www.instagram.com/ieeemuj/',
  },
  {
    id: 'cyber-mafia-arena',
    code: 'COMPETITION_04',
    year: '2024',
    date: 'DEC 05',
    title: 'CYBER MAFIA: STRATEGY, CTF & SOCIAL DEDUCTION',
    category: 'COMPETITION',
    description:
      'An immersive strategy challenge and cybersecurity gaming arena where teams navigated adversarial deception, CTF logic, and game-theoretic gameplay.',
    location: 'Innovation Lounge, MUJ',
    status: 'ARCHIVED',
    attendees: '160+ Competitors',
    image: '/events/cybermafia.jpg',
    highlights: ['Game Theory Strategy', 'Cybersecurity Logic', 'Elimination Gameplay'],
    registrationUrl: 'https://www.instagram.com/ieeemuj/',
  },
  {
    id: 'genify-ai-workshop',
    code: 'WORKSHOP_05',
    year: '2025',
    date: 'JAN 22',
    title: 'GENIFY: GENERATIVE AI & FOUNDATION MODELS MASTERCLASS',
    category: 'WORKSHOP',
    description:
      'Hands-on workshop breaking down transformer attention mechanisms, diffusion models, prompt orchestration, and deploying on-device LLM agents.',
    location: 'Lab 4, Computer Science Block, MUJ',
    status: 'ARCHIVED',
    attendees: '140+ Students',
    image: '/events/genify_ai.jpg',
    highlights: ['Transformer Attention Math', 'Diffusion Pipeline Coding', 'Campus LLM Deployment'],
    registrationUrl: 'https://www.instagram.com/ieeemuj/',
  },
  {
    id: 'fostering-the-future',
    code: 'FLAGSHIP_06',
    year: '2025',
    date: 'APR 08-10',
    title: 'FOSTERING THE FUTURE 8.0: ANNUAL ALUMNI TECH SUMMIT',
    category: 'FLAGSHIP',
    description:
      'Annual flagship technical speaker symposium and networking forum connecting student engineers with pioneering industry leaders and distinguished alumni.',
    location: 'Main Auditorium, MUJ',
    status: 'UPCOMING',
    attendees: 'REGISTRATIONS OPEN',
    image: '/events/fostering_future.jpg',
    highlights: ['Industry Keynotes', 'Alumni Mentorship', 'Career Guidance'],
    registrationUrl: 'https://www.instagram.com/ieeemuj/',
  },
];
