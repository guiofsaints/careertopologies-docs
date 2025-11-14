import localFont from 'next/font/local';

/**
 * CloudX Design System Fonts
 * 
 * - Aeonik: Primary sans-serif (headings, body text)
 * - STK Bureau Serif: Serif for editorial content
 * - Ubuntu Mono: Monospace for code blocks
 */

export const aeonik = localFont({
  src: [
    {
      path: './aeonik-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './aeonik-medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './aeonik-semibold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-aeonik',
  display: 'swap',
});

export const stkBureauSerif = localFont({
  src: [
    {
      path: './stk-bureau-serif-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './stk-bureau-serif-medium.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-stk-bureau-serif',
  display: 'swap',
});

export const ubuntuMono = localFont({
  src: './ubuntu-mono.woff2',
  variable: '--font-ubuntu-mono',
  weight: '400',
  style: 'normal',
  display: 'swap',
});
