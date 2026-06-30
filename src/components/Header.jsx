import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Sun, Moon, Globe, Menu, X, Smartphone } from 'lucide-react';

export default function Header() {
  const { lang, theme, toggleLang, toggleTheme, t } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: t("navHome"), href: "#home" },
    { label: t("navCategories"), href: "#categories" },
    { label: t("navStorefront"), href: "#storefront" },
    { label: t("navCompatibility"), href: "#compatibility" },
    { label: t("navContact"), href: "#contact" }
  ];

  return (
    <header className="sticky top-0 z-50 transition-all duration-300 backdrop-blur-md border-b bg-light-surface/80 dark:bg-dark-bg/80 border-slate-200/50 dark:border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo and Brand */}
        <a href="#home" className="flex items-center gap-3 group focus:outline-none">
          {/* Custom SVG logo representing the letter 'Z' from the logo design */}
          <div className="relative w-11 h-11 flex items-center justify-center rounded-lg bg-black text-white dark:bg-white dark:text-black shadow-md transition-all duration-300 group-hover:scale-105 select-none font-bold text-2xl tracking-tighter">
            <svg viewBox="0 0 100 100" className="w-8 h-8 fill-current font-serif font-black">
              {/* Specialized Z logo based on Zain Phone logo design */}
              <path d="M22,20 L74,20 C78,20 80,22 79,25 C75,34 50,68 34,74 L78,74 C81,74 81,78 77,80 L22,80 C18,80 18,76 21,73 C26,67 52,32 66,26 L22,26 C18,26 18,20 22,20 Z" />
            </svg>
            <div className="absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-white/10 dark:bg-black/10"></div>
          </div>
          
          <div className="flex flex-col">
            <span className="font-outfit font-black text-xl tracking-wider text-slate-900 dark:text-white transition-opacity duration-300 group-hover:opacity-80">
              {t("brandName")}
            </span>
            <span className="font-sans font-medium text-[9px] tracking-[0.25em] text-slate-500 dark:text-zinc-400">
              {t("brandSlogan")}
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-black dark:text-zinc-300 dark:hover:text-white text-slate-600 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-black dark:after:bg-white after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Global Controls (Theme, Language, Mobile Menu) */}
        <div className="flex items-center gap-3">
          
          {/* Language Switcher */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold uppercase border transition-all duration-200 border-slate-200 hover:border-slate-800 text-slate-800 dark:border-zinc-800 dark:text-zinc-300 dark:hover:border-zinc-100 hover:bg-slate-50 dark:hover:bg-zinc-800/50"
            title="Switch Language"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? 'EN' : 'العربية'}</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border transition-all duration-200 border-slate-200 hover:border-slate-800 text-slate-700 hover:bg-slate-50 dark:border-zinc-800 dark:text-zinc-300 dark:hover:border-zinc-100 dark:hover:bg-zinc-800/50"
            title={theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden p-2 rounded-full text-slate-700 dark:text-zinc-300 border border-slate-200 dark:border-zinc-800"
          >
            <Menu className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-black/60 backdrop-blur-sm transition-opacity duration-300">
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-light-surface dark:bg-dark-surface shadow-2xl p-6 flex flex-col justify-between transition-transform duration-300 ease-out border-l border-slate-200/50 dark:border-zinc-800/80">
            <div>
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-zinc-800 pb-5">
                <span className="font-bold text-lg text-slate-900 dark:text-white">{t("menuLabel")}</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full border border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-300"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <nav className="flex flex-col gap-5 mt-8">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-semibold text-slate-700 hover:text-slate-950 dark:text-zinc-300 dark:hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="border-t border-slate-100 dark:border-zinc-800 pt-5 mt-auto">
              <p className="text-[10px] text-slate-400 dark:text-zinc-500 font-sans tracking-widest text-center uppercase">
                {t("brandName")} @ 2026
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
