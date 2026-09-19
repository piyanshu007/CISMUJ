import type { Metadata, Viewport } from 'next';
import './globals.css';
import { GlobalSynapseMesh } from '@/components/computational/GlobalSynapseMesh';
import { WebsiteEntryAnimation } from '@/components/ui/WebsiteEntryAnimation';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#FFFFFF',
};

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

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'IEEE Computational Intelligence Society Student Branch Chapter - Manipal University Jaipur',
  alternateName: ['IEEE CIS MUJ', 'CIS MUJ', 'IEEE CIS Student Chapter #6248'],
  url: 'https://cis.ieeemuj.com',
  logo: 'https://cis.ieeemuj.com/logo-mark.png',
  parentOrganization: {
    '@type': 'Organization',
    name: 'IEEE Computational Intelligence Society',
    url: 'https://cis.ieee.org',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Dehmi Kalan, Jaipur-Ajmer Expressway',
    addressLocality: 'Jaipur',
    addressRegion: 'Rajasthan',
    postalCode: '303007',
    addressCountry: 'IN',
  },
  sameAs: [
    'https://www.instagram.com/ieee.cismuj/',
    'https://github.com/piyanshu007/CISMUJ',
    'https://cis.ieee.org',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-white text-slate-900 antialiased selection:bg-[#0284C7] selection:text-white relative">
        <WebsiteEntryAnimation />
        <GlobalSynapseMesh />
        {children}
      </body>
    </html>
  );
}
