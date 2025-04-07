import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Analytics from '@/lib/analytics';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CroolStudio - Creative Digital Solutions',
  description: 'Independent creative professional specializing in web development, UI/UX design, creative direction, motion graphics, video production, and AI-powered tools.',
  keywords: 'web development, UI/UX design, creative direction, motion graphics, video production, AI tools',
  authors: [{ name: 'Filip' }],
  openGraph: {
    title: 'CroolStudio - Creative Digital Solutions',
    description: 'Independent creative professional specializing in web development and creative solutions',
    url: 'https://croolstudio.com',
    siteName: 'CroolStudio',
    images: [
      {
        url: '/og-image.jpg', 
        width: 1200,
        height: 630,
        alt: 'CroolStudio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CroolStudio - Creative Digital Solutions',
    description: 'Independent creative professional specializing in web development and creative solutions',
    images: ['/og-image.jpg'], 
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
