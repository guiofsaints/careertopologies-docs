import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { aeonik, stkBureauSerif, ubuntuMono } from './fonts';

export const metadata: Metadata = {
  title: 'Career Topologies',
  description: 'Transparent, equitable career development framework for technology organizations',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
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
