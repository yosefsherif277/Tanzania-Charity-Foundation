import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'ar' | 'en' | 'sw' | 'it';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  dir: 'rtl' | 'ltr';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  const [dir, setDir] = useState<'rtl' | 'ltr'>('ltr');

  useEffect(() => {
    // تحقق من اللغة المحفوظة في localStorage
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage) {
      setLanguage(savedLanguage);
      setDir(savedLanguage === 'ar' ? 'rtl' : 'ltr');
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'ar' ? 'en' : 'ar';
    setLanguage(newLanguage);
    setDir(newLanguage === 'ar' ? 'rtl' : 'ltr');
    localStorage.setItem('language', newLanguage);
  };

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    setDir(lang === 'ar' ? 'rtl' : 'ltr');
    localStorage.setItem('language', lang);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage: changeLanguage, dir }}>
      <div dir={dir} className={language === 'ar' ? 'font-arabic' : 'font-english'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};