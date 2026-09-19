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
    category: 'TECHNICAL EVENT',
    title: 'Hackerz Street 4.0',
    year: '2026',
    date: 'MARCH 2026',
    location: 'TMA PAI AUDITORIUM',
    description: 'A high-energy hackathon where ideas meet execution. Build. Compete. Create.',
    image: '/events/webforge.jpg',
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
    id: 'ragh-perm-sprint',
    category: 'WORKSHOP',
    title: 'Ragh PerM & Sprint',
    year: '2026',
    date: 'FEBRUARY 2026',
    location: 'CENTRAL LABS',
    description: 'A hands-on workshop and sprint to tackle real-world problems using computational intelligence.',
    image: '/gallery/workshop.jpg',
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
    id: 'ieee-cis-2025',
    category: 'COMMUNITY EVENT',
    title: 'IEEE CIS',
    year: '2025',
    date: 'NOVEMBER 2025',
    location: 'MAIN CAMPUS AUDITORIUM',
    description: 'Celebrating knowledge, collaboration and the next generation of innovators.',
    image: '/gallery/team_awards.jpg',
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
    id: 'social-outreach-2025',
    category: 'ORIENTATION',
    title: 'Social Outreach',
    year: '2025',
    date: 'OCTOBER 2025',
    location: 'AUDITORIUM',
    description: 'Connecting with communities and creating a positive impact through technology and education.',
    image: '/gallery/orientation.jpg',
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
    id: 'genesis-5',
    category: 'CONFERENCE',
    title: 'Genesis 5.0',
    year: '2025',
    date: 'APRIL 2025',
    location: 'MAIN AUDITORIUM',
    description: 'Annual research symposium showcasing embedded neural hardware, robotics testbeds, and decentralized agent workflows.',
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
