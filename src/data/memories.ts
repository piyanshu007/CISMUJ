export interface MemoryEventRecord {
  id: string;
  category: string;
  title: string;
  year: string;
  date: string;
  location: string;
  description: string;
  image: string;
  photoPosition: {
    left: string;
    top: string;
    width: string;
  };
  textPosition: {
    left: string;
    top: string;
    maxWidth: string;
  };
}

export const MEMORY_EVENTS_DATA: MemoryEventRecord[] = [
  {
    id: 'hackerz-street-4',
    category: 'FLAGSHIP HACKATHON',
    title: 'HackerzStreet 4.0',
    year: '2025',
    date: 'MARCH 2025',
    location: 'TMA PAI AUDITORIUM',
    description: 'The premier 24-hour national hackathon bringing together hundreds of developers to build innovative solutions.',
    image: '/events/hackerzstreet.jpg',
    photoPosition: {
      left: '31%',
      top: '6%',
      width: '19%',
    },
    textPosition: {
      left: '51.5%',
      top: '8%',
      maxWidth: '19%',
    },
  },
  {
    id: 'webforge-webathon',
    category: 'WEBATHON',
    title: 'WebForge Webathon',
    year: '2024',
    date: 'OCTOBER 2024',
    location: 'CENTRAL LABS',
    description: 'A 36-hour sprint where student teams engineered and deployed intelligent full-stack platforms with real-world impact.',
    image: '/events/webforge.jpg',
    photoPosition: {
      left: '7%',
      top: '37%',
      width: '15.5%',
    },
    textPosition: {
      left: '23.5%',
      top: '40%',
      maxWidth: '17%',
    },
  },
  {
    id: 'genify-ai-masterclass',
    category: 'AI WORKSHOP',
    title: 'GENIFY: Generative AI',
    year: '2025',
    date: 'JANUARY 2025',
    location: 'COMPUTER SCIENCE BLOCK',
    description: 'Masterclass exploring transformer attention mechanics, prompt orchestration, and fine-tuning open-weight foundation models.',
    image: '/events/genify_ai.jpg',
    photoPosition: {
      left: '57%',
      top: '38%',
      width: '17.5%',
    },
    textPosition: {
      left: '75.5%',
      top: '40%',
      maxWidth: '18%',
    },
  },
  {
    id: 'cyber-mafia-arena',
    category: 'STRATEGY & CTF',
    title: 'Cyber Mafia',
    year: '2024',
    date: 'DECEMBER 2024',
    location: 'INNOVATION LOUNGE',
    description: 'An adversarial cybersecurity challenge combining cryptographic puzzle-solving with deceptive game-theoretic gameplay.',
    image: '/events/cybermafia.jpg',
    photoPosition: {
      left: '22%',
      top: '66%',
      width: '16.5%',
    },
    textPosition: {
      left: '39.5%',
      top: '68%',
      maxWidth: '17%',
    },
  },
  {
    id: 'oneiros-fest',
    category: 'CAMPUS FESTIVAL',
    title: 'Oneiros Night',
    year: '2024',
    date: 'NOVEMBER 2024',
    location: 'MAIN UNIVERSITY GROUNDS',
    description: 'Annual campus festival featuring illuminated drone shows, tech exhibitions, and creative student showcases.',
    image: '/events/oneiros.jpg',
    photoPosition: {
      left: '64%',
      top: '66%',
      width: '16%',
    },
    textPosition: {
      left: '81%',
      top: '68%',
      maxWidth: '18%',
    },
  },
];
