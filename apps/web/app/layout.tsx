import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { JsonLd, organizationSchema, websiteSchema } from '@/components/seo/json-ld';
import { aeonik, stkBureauSerif, ubuntuMono } from './fonts';

export const metadata: Metadata = {
  metadataBase: new URL('https://careertopologies.com'),
  title: {
    default: 'Career Topologies',
    template: '%s | Career Topologies',
  },
  description: 'Transparent, equitable career development framework for technology organizations',
  keywords: [
    'career development',
    'career framework',
    'engineering careers',
    'career progression',
    'career ladders',
    'tech careers',
    'organizational design',
    'career topologies',
    'IC track',
    'management track',
  ],
  authors: [{ name: 'Career Topologies' }],
  creator: 'Career Topologies',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://careertopologies.com',
    title: 'Career Topologies',
    description: 'Transparent, equitable career development framework for technology organizations',
    siteName: 'Career Topologies',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Career Topologies',
    description: 'Transparent, equitable career development framework for technology organizations',
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
      <head>
        <JsonLd data={organizationSchema()} />
        <JsonLd data={websiteSchema()} />
      </head>
      <body 
        className={`${aeonik.variable} ${stkBureauSerif.variable} ${ubuntuMono.variable} min-h-screen flex flex-col font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          storageKey="career-topologies-theme"
        >
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
