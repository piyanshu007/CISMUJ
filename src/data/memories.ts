export interface MemoryEventRecord {
  id: string;
  category: string;
  title: string;
  year: string;
  date: string;
  location: string;
  description: string;
  image: string;
  photoClass: string;
  textClass: string;
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
    photoClass: 'lg:left-[31%] lg:top-[6%] lg:w-[19%]',
    textClass: 'lg:left-[51.5%] lg:top-[8%] lg:max-w-[19%]',
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
    photoClass: 'lg:left-[7%] lg:top-[37%] lg:w-[15.5%]',
    textClass: 'lg:left-[23.5%] lg:top-[40%] lg:max-w-[17%]',
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
    photoClass: 'lg:left-[57%] lg:top-[38%] lg:w-[17.5%]',
    textClass: 'lg:left-[75.5%] lg:top-[40%] lg:max-w-[18%]',
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
    photoClass: 'lg:left-[22%] lg:top-[66%] lg:w-[16.5%]',
    textClass: 'lg:left-[39.5%] lg:top-[68%] lg:max-w-[17%]',
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
    photoClass: 'lg:left-[64%] lg:top-[66%] lg:w-[16%]',
    textClass: 'lg:left-[81%] lg:top-[68%] lg:max-w-[18%]',
  },
];
