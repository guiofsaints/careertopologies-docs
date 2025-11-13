import { useState, useEffect } from 'react';
import type { LanguageConfig } from '../types';

export const languages: LanguageConfig[] = [
  { code: 'pt-BR', name: 'Portuguese (Brazil)', flag: '🇧🇷' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Spanish', flag: '🇪🇸' },
  { code: 'fr', name: 'French', flag: '🇫🇷' },
];

interface UseLanguageReturn {
  currentLanguage: LanguageConfig;
  changeLanguage: (language: LanguageConfig) => void;
  languages: LanguageConfig[];
}

export function useLanguage(): UseLanguageReturn {
  const [currentLanguage, setCurrentLanguage] = useState<LanguageConfig>(languages[1]); // Default to English

  useEffect(() => {
    // Check localStorage and browser language on mount
    const stored = localStorage.getItem('language');
    const browserLang = navigator.language;

    if (stored) {
      const savedLanguage = languages.find(lang => lang.code === stored);
      if (savedLanguage) {
        setCurrentLanguage(savedLanguage);
      }
    } else {
      // Check for exact match first (pt-BR)
      let browserLanguage = languages.find(lang => lang.code === browserLang);

      // If no exact match, check for language family (pt-BR -> pt, en-US -> en)
      if (!browserLanguage) {
        const langFamily = browserLang.split('-')[0];
        browserLanguage = languages.find(lang => lang.code.startsWith(langFamily));
      }

      if (browserLanguage) {
        setCurrentLanguage(browserLanguage);
      }
      // If no match found, keep default (pt-BR)
    }
  }, []);

  const changeLanguage = (language: LanguageConfig) => {
    setCurrentLanguage(language);
    localStorage.setItem('language', language.code);

    // Here you would typically trigger a re-render of content
    // or dispatch an action to update your i18n system
    console.log(`Language changed to: ${language.name} (${language.code})`);
  };

  return { currentLanguage, changeLanguage, languages };
}
