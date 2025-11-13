import { type ComponentType, type ReactNode } from 'react';

// Navigation types
export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}

// Page configuration types
export interface PageConfig {
  title: string;
  description?: string;
  path: string;
  component?: ComponentType;
}

// Related page types
export interface RelatedPage {
  title: string;
  description: string;
  href: string;
  icon?: ComponentType;
}

// Language types
export interface LanguageConfig {
  code: string;
  name: string;
  flag: string;
}

export type LanguageCode = 'en' | 'pt' | 'es' | 'fr';

// Theme types
export type Theme = 'light' | 'dark' | 'system';

// Router types
export interface RouterContextType {
  currentPath: string;
  navigate: (path: string) => void;
}

// Component prop types
export interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

export interface LinkProps {
  to: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
}

export type ThemeMode = 'light' | 'dark' | 'system';
