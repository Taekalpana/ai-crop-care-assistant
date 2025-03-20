
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { english } from '@/translations/english';
import { hindi } from '@/translations/hindi';
import { tamil } from '@/translations/tamil';
import { telugu } from '@/translations/telugu';
import { bengali } from '@/translations/bengali';

export type Language = 'en' | 'hi' | 'ta' | 'te' | 'bn';

const translations = {
  en: english,
  hi: hindi,
  ta: tamil,
  te: telugu,
  bn: bengali,
};

type TranslationsType = typeof english;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof TranslationsType) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: keyof TranslationsType) => {
    return translations[language][key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
