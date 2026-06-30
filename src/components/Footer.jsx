import React from 'react';
import { useApp } from '../context/AppContext';
import { Phone, MapPin, Clock, MessageSquare, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const { t } = useApp();

  return (
    <footer id="contact" className="border-t transition-colors duration-300 bg-white dark:bg-zinc-950 border-slate-200/50 dark:border-zinc-800/80 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        
        {/* Brand Column */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left rtl:md:text-right">
          <div className="flex items-center gap-3 mb-4">
            {/* SVG Logo */}
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-black text-white dark:bg-white dark:text-black">
              <svg viewBox="0 0 100 100" className="w-7 h-7 fill-current font-serif font-black">
                <path d="M22,20 L74,20 C78,20 80,22 79,25 C75,34 50,68 34,74 L78,74 C81,74 81,78 77,80 L22,80 C18,80 18,76 21,73 C26,67 52,32 66,26 L22,26 C18,26 18,20 22,20 Z" />
              </svg>
            </div>
            <div>
              <span className="font-outfit font-black text-lg tracking-wider text-slate-900 dark:text-white uppercase block">
                {t("brandName")}
              </span>
              <span className="font-sans font-medium text-[8px] tracking-[0.25em] text-slate-500 dark:text-zinc-500 block">
                {t("brandSlogan")}
              </span>
            </div>
          </div>
          
          <p className="text-sm font-semibold text-slate-500 dark:text-zinc-400 max-w-xs leading-relaxed">
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-6">
            <a 
              href="https://www.facebook.com/share/14b73S8JYBw/?mibextid=wwXIfr" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2.5 rounded-full border border-slate-205 text-slate-600 hover:text-blue-600 hover:border-blue-600 dark:border-zinc-800 dark:text-zinc-400 dark:hover:text-white dark:hover:border-white transition-colors"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a 
              href="https://www.instagram.com/_zain_phone_2027_?igsh=MXBseWxsYnFzbW94OA%3D%3D&utm_source=qr" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2.5 rounded-full border border-slate-205 text-slate-600 hover:text-pink-650 hover:border-pink-650 dark:border-zinc-800 dark:text-zinc-400 dark:hover:text-white dark:hover:border-white transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Contacts details column */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left rtl:md:text-right">
          <h3 className="text-sm font-bold text-slate-950 dark:text-white uppercase tracking-widest mb-6">
            {t("contactTitle")}
          </h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-slate-400 dark:text-zinc-500 mt-0.5 shrink-0" />
              <div>
                <span className="block text-xs font-semibold text-slate-400 dark:text-zinc-500 uppercase">{t("hours")}</span>
                <span className="block text-sm font-bold text-slate-800 dark:text-zinc-300 mt-0.5">{t("hoursVal")}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-slate-400 dark:text-zinc-500 mt-0.5 shrink-0" />
              <div>
                <span className="block text-xs font-semibold text-slate-400 dark:text-zinc-500 uppercase">{t("contactBtn")}</span>
                <span className="block text-sm font-bold text-slate-800 dark:text-zinc-300 mt-0.5">201146444105</span>
              </div>
            </div>
          </div>
        </div>

        {/* Address Location Map Column */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left rtl:md:text-right">
          <h3 className="text-sm font-bold text-slate-950 dark:text-white uppercase tracking-widest mb-6">
            {t("address")}
          </h3>
          <div className="flex items-start gap-3 mb-6">
            <MapPin className="w-5 h-5 text-slate-400 dark:text-zinc-500 mt-0.5 shrink-0" />
            <div>
              <span className="block text-xs font-semibold text-slate-400 dark:text-zinc-500 uppercase">{t("address")}</span>
              <span className="block text-sm font-bold text-slate-800 dark:text-zinc-300 mt-0.5">{t("addressVal")}</span>
            </div>
          </div>

          <a
            href="https://maps.app.goo.gl/d6UW7MUkU5f9RvHH9" // Placeholder map link, customizable by owner
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-800 dark:border-white text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-zinc-900 transition-colors"
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>{t("mapBtn")}</span>
          </a>
        </div>

      </div>

      {/* Copyright footer bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-100 dark:border-zinc-900 pt-8 text-center">
        <p className="text-xs font-semibold text-slate-400 dark:text-zinc-500 tracking-wider">
          &copy; {new Date().getFullYear()} {t("brandName")}. {t("brandSlogan")}.
        </p>
      </div>
    </footer>
  );
}
