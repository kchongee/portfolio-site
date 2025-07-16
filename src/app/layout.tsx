import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { portfolioConfig } from '@/config/portfolio';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: `${portfolioConfig.personal.name} - ${portfolioConfig.personal.title}`,
  description: portfolioConfig.personal.bio,
  keywords: [
    'Ryan Khoo Chong Ee',
    'frontend developer',
    'react developer',
    'angular developer',
    'typescript developer',
    'next.js developer',
    'web developer Malaysia',
    'software engineer Selangor',
    'frontend developer Klang',
    'TEDxPetalingStreet developer',
    'React portfolio Malaysia',
    'Angular developer Malaysia',
    'JavaScript developer',
    'HTML CSS developer',
    'Tailwind CSS developer',
    'portfolio website',
    'web development services',
    portfolioConfig.personal.name,
  ],
  authors: [{ name: portfolioConfig.personal.name }],
  creator: portfolioConfig.personal.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: `${portfolioConfig.personal.name} - ${portfolioConfig.personal.title}`,
    description: portfolioConfig.personal.bio,
    siteName: `${portfolioConfig.personal.name} Portfolio`,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${portfolioConfig.personal.name} - ${portfolioConfig.personal.title}`,
    description: portfolioConfig.personal.bio,
    creator: '@' + portfolioConfig.social.find(s => s.name === 'Twitter')?.url.split('/').pop(),
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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}