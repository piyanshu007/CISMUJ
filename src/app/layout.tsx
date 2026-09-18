import type { Metadata } from 'next';
import './globals.css';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { GlobalSynapseMesh } from '@/components/computational/GlobalSynapseMesh';
import { WebsiteEntryAnimation } from '@/components/ui/WebsiteEntryAnimation';

export const metadata: Metadata = {
  title: 'IEEE CIS MUJ | Manipal University Jaipur Student Chapter',
  description:
    'IEEE Computational Intelligence Society at Manipal University Jaipur — Artificial Intelligence, Machine Learning, Robotics, Hackathons, and Student Projects.',
  keywords: [
    'IEEE CIS MUJ',
    'Computational Intelligence Society',
    'AI Club MUJ',
    'Machine Learning',
    'Neural Networks',
    'Robotics',
    'Manipal University Jaipur',
    'WebForge',
  ],
  authors: [{ name: 'IEEE CIS MUJ' }],
  openGraph: {
    title: 'IEEE CIS MUJ | Computational Intelligence Society',
    description:
      'Manipal University Jaipur student chapter for AI, Machine Learning, Robotics, and Hackathons.',
    url: 'https://cis.ieeemuj.com',
    siteName: 'IEEE CIS MUJ',
    type: 'website',
  },
  icons: {
    icon: '/logo-mark.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light scroll-smooth">
      <body className="bg-white text-slate-900 antialiased selection:bg-[#0284C7] selection:text-white relative">
        <WebsiteEntryAnimation />
        <GlobalSynapseMesh />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
