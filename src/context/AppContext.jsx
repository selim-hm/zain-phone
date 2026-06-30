import React, { createContext, useContext, useState, useEffect } from 'react';
import enJson from '../locales/en.json';
import arJson from '../locales/ar.json';

const AppContext = createContext();

const translations = {
  en: enJson,
  ar: arJson
};

export const AppProvider = ({ children }) => {
  const [lang, setLang] = useState(() => localStorage.getItem('zain_phone_lang') || 'ar');
  const [theme, setTheme] = useState(() => localStorage.getItem('zain_phone_theme') || 'dark');

  useEffect(() => {
    localStorage.setItem('zain_phone_lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  useEffect(() => {
    localStorage.setItem('zain_phone_theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleLang = () => {
    setLang((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const t = (key) => {
    return translations[lang][key] || key;
  };

  return (
    <AppContext.Provider value={{ lang, theme, toggleLang, toggleTheme, t }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
