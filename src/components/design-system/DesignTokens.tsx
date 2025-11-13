// Design System Tokens for Career Topologies
// Based on 8-point grid system with consistent spacing and typography

export interface DesignTokens {
  // Spacing Scale (8pt grid)
  spacing: {
    xs: string;    // 4px  - 0.5 * 8
    sm: string;    // 8px  - 1 * 8  
    md: string;    // 16px - 2 * 8
    lg: string;    // 24px - 3 * 8
    xl: string;    // 32px - 4 * 8
    '2xl': string; // 48px - 6 * 8
    '3xl': string; // 64px - 8 * 8
    '4xl': string; // 96px - 12 * 8
    '5xl': string; // 128px - 16 * 8
  };

  // Typography Scale
  fontSize: {
    xs: string;   // 12px
    sm: string;   // 14px (base)
    base: string; // 16px 
    lg: string;   // 18px
    xl: string;   // 20px
    '2xl': string; // 24px
    '3xl': string; // 30px
    '4xl': string; // 36px
    '5xl': string; // 48px
    '6xl': string; // 60px
  };

  // Container Widths
  container: {
    sm: string;   // 640px
    md: string;   // 768px
    lg: string;   // 1024px
    xl: string;   // 1280px
    '2xl': string; // 1536px
    content: string; // 1152px (max-w-6xl equivalent)
  };

  // Grid Breakpoints
  breakpoints: {
    sm: string;   // 640px
    md: string;   // 768px
    lg: string;   // 1024px
    xl: string;   // 1280px
    '2xl': string; // 1536px
  };

  // Border Radius
  radius: {
    none: string;
    sm: string;
    base: string;
    md: string;
    lg: string;
    xl: string;
    full: string;
  };
}

export const designTokens: DesignTokens = {
  spacing: {
    xs: '0.25rem',    // 4px
    sm: '0.5rem',     // 8px
    md: '1rem',       // 16px
    lg: '1.5rem',     // 24px
    xl: '2rem',       // 32px
    '2xl': '3rem',    // 48px
    '3xl': '4rem',    // 64px
    '4xl': '6rem',    // 96px
    '5xl': '8rem',    // 128px
  },

  fontSize: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px (matches CSS base)
    base: '1rem',     // 16px 
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem',    // 48px
    '6xl': '3.75rem', // 60px
  },

  container: {
    sm: '40rem',      // 640px
    md: '48rem',      // 768px
    lg: '64rem',      // 1024px
    xl: '80rem',      // 1280px
    '2xl': '96rem',   // 1536px
    content: '72rem', // 1152px (max-w-6xl)
  },

  breakpoints: {
    sm: '640px',
    md: '768px', 
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  radius: {
    none: '0',
    sm: '0.125rem',   // 2px
    base: '0.25rem',  // 4px
    md: '0.375rem',   // 6px
    lg: '0.5rem',     // 8px
    xl: '0.75rem',    // 12px
    full: '9999px',
  },
};