import React from 'react';
import { Users, Calendar, Layers, Award } from 'lucide-react';

export interface StatItem {
  id: string;
  metric: string;
  label: string;
  title: string;
  subtext: string;
  growth: string;
  icon: React.ElementType;
  detail: string;
  statusText: string;
  badge: string;
  type: 'matrix' | 'avatars' | 'sparkline' | 'progress';
}

export const CHAPTER_STATS_DATA: StatItem[] = [
  {
    id: 'members',
    metric: '1,500+',
    growth: '+38% YoY',
    label: 'ACTIVE MEMBERS',
    title: 'Active users growth',
    subtext: 'Global student engineers & AI researchers collaborating across MUJ this academic year.',
    icon: Users,
    detail: 'Over 1,500 students enrolled across undergraduate & postgraduate engineering streams at MUJ.',
    statusText: 'COMMUNITY GROWING',
    badge: 'MEMBERSHIP',
    type: 'matrix',
  },
  {
    id: 'mentors',
    metric: '10+',
    growth: '100% Guidance',
    label: 'MENTORS & FACULTY',
    title: 'Most active specialists',
    subtext: 'Senior IEEE fellows, pioneering professors & alumni research advisors guiding student labs.',
    icon: Award,
    detail: 'Distinguished university faculty, IEEE Senior Members, and alumni mentors guiding projects.',
    statusText: 'RESEARCH GUIDANCE',
    badge: 'FACULTY',
    type: 'avatars',
  },
  {
    id: 'events',
    metric: '30+',
    growth: '98.4% Attendance',
    label: 'EVENTS & HACKATHONS',
    title: 'Flagship runs & CTF',
    subtext: 'Real-time overview of competitive 36-hour hackathons, AI bootcamps, and CTF challenges.',
    icon: Calendar,
    detail: '36-hour hackathons, agentic AI bootcamps, CTF cybersecurity tournaments, and hands-on ML workshops.',
    statusText: 'ANNUAL CALENDAR',
    badge: 'COMPETITIONS',
    type: 'sparkline',
  },
  {
    id: 'projects',
    metric: '25+',
    growth: '100% Open Source',
    label: 'FLAGSHIP PROJECTS',
    title: 'Core engineering labs',
    subtext: 'Autonomous ground rovers, spiking neural models, and student-engineered PyTorch architectures.',
    icon: Layers,
    detail: 'Student-led deep tech projects spanning computer vision, robotics, web engineering, and competitive research.',
    statusText: 'ACTIVE LABS',
    badge: 'PROJECTS',
    type: 'progress',
  },
];
