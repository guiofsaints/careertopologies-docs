export const APP_CONFIG = {
  name: 'Career Topologies',
  description: 'A comprehensive framework for understanding and developing career paths in technology organizations.',
  version: '1.0.0',
  author: 'Career Topologies Team',
  repository: 'https://github.com/your-org/careertopologies',
} as const;

export const NAVIGATION_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Framework', href: '/framework' },
  { label: 'Topologies', href: '/topologies' },
  { label: 'Concepts', href: '/concepts' },
  { label: 'Management', href: '/management' },
  { label: 'Manifesto', href: '/manifesto' },
  { label: 'References', href: '/references' },
  { label: 'Contributing', href: '/contributing' },
] as const;

export const THEME_CONFIG = {
  defaultTheme: 'system' as const,
  storageKey: 'careertopologies-theme',
};

export const LANGUAGE_CONFIG = {
  defaultLanguage: 'en' as const,
  storageKey: 'careertopologies-language',
  supportedLanguages: [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'pt', name: 'Português', flag: '🇧🇷' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
  ] as const,
};
