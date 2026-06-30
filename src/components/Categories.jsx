import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Cable, Zap, Headphones, Battery, Smartphone, Shield, Layers, X, CheckCircle 
} from 'lucide-react';

export default function Categories() {
  const { t } = useApp();
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = [
    {
      id: "cables",
      title: t("cables"),
      desc: t("cablesDesc"),
      icon: Cable,
      glowColor: "rgba(59, 130, 246, 0.4)", // Blue
      specs: t("cablesSpecs")
    },
    {
      id: "chargers",
      title: t("chargers"),
      desc: t("chargersDesc"),
      icon: Zap,
      glowColor: "rgba(234, 179, 8, 0.4)", // Yellow
      specs: t("chargersSpecs")
    },
    {
      id: "earphones",
      title: t("earphones"),
      desc: t("earphonesDesc"),
      icon: Headphones,
      glowColor: "rgba(168, 85, 247, 0.4)", // Purple
      specs: t("earphonesSpecs")
    },
    {
      id: "powerbanks",
      title: t("powerbanks"),
      desc: t("powerbanksDesc"),
      icon: Battery,
      glowColor: "rgba(34, 197, 94, 0.4)", // Green
      specs: t("powerbanksSpecs")
    },
    {
      id: "cases",
      title: t("cases"),
      desc: t("casesDesc"),
      icon: Smartphone,
      glowColor: "rgba(236, 72, 153, 0.4)", // Pink
      specs: t("casesSpecs")
    },
    {
      id: "screens",
      title: t("screens"),
      desc: t("screensDesc"),
      icon: Shield,
      glowColor: "rgba(6, 182, 212, 0.4)", // Cyan
      specs: t("screensSpecs")
    },
    {
      id: "stands",
      title: t("stands"),
      desc: t("standsDesc"),
      icon: Layers,
      glowColor: "rgba(249, 115, 22, 0.4)", // Orange
      specs: t("standsSpecs")
    }
  ];

  return (
    <section id="categories" className="py-20 md:py-28 bg-slate-50 dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Group */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            {t("categoriesTitle")}
          </h2>
          <div className="w-16 h-1 bg-slate-900 dark:bg-white mx-auto my-4 rounded-full"></div>
          <p className="text-slate-500 dark:text-zinc-400 text-base sm:text-lg">
            {t("categoriesSubtitle")}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                onClick={() => setActiveCategory(category)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl border p-6 transition-all duration-300 bg-white hover:bg-slate-50/60 dark:bg-zinc-900 border-slate-200/60 dark:border-zinc-800/80 dark:hover:border-zinc-100 hover:scale-[1.03] hover:shadow-xl dark:hover:neon-glow-white flex flex-col justify-between"
              >
                {/* Glow Overlay */}
                <div 
                  className="absolute -right-16 -top-16 w-32 h-32 rounded-full filter blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ backgroundColor: category.glowColor }}
                ></div>

                <div>
                  {/* Category Icon */}
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-slate-100 text-slate-800 dark:bg-zinc-800 dark:text-zinc-200 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:translate-x-1 transition-transform duration-200">
                    {category.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-relaxed text-slate-500 dark:text-zinc-400">
                    {category.desc}
                  </p>
                </div>

                {/* Learn More Tag */}
                <div className="mt-8 flex items-center text-xs font-semibold text-slate-800 dark:text-white border-t border-slate-100 dark:border-zinc-800 pt-4 uppercase tracking-wider group-hover:opacity-80">
                  <span>{t("viewSpecs")}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Specification drawer modal */}
      {activeCategory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm transition-opacity duration-300">
          <div className="relative max-w-xl w-full rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-250 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveCategory(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full border text-slate-500 hover:text-slate-900 border-slate-200 hover:border-slate-800 dark:text-zinc-400 dark:hover:text-white dark:border-zinc-800 dark:hover:border-zinc-300 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header info */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-slate-100 dark:bg-zinc-800 text-slate-950 dark:text-white">
                {React.createElement(activeCategory.icon, { className: "w-7 h-7" })}
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                  {activeCategory.title}
                </h3>
                <p className="text-xs font-semibold tracking-widest text-slate-400 dark:text-zinc-500 uppercase mt-0.5">
                  {t("technicalSpecsHeader")}
                </p>
              </div>
            </div>

            {/* Spec lines */}
            <div className="space-y-4 mb-8">
              {(Array.isArray(activeCategory.specs) ? activeCategory.specs : []).map((spec, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <p className="text-sm font-medium leading-relaxed text-slate-700 dark:text-zinc-300">
                    {spec}
                  </p>
                </div>
              ))}
            </div>

            {/* Order/CTA */}
            <div className="flex gap-4">
              <a
                href={`https://wa.me/201146444105?text=Hi%20Zain%20Phone,%20I'm%20interested%20in%2520${encodeURIComponent(activeCategory.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-sm font-bold uppercase tracking-wider bg-black hover:bg-neutral-800 text-white dark:bg-white dark:hover:bg-zinc-100 dark:text-black transition-all shadow-md active:scale-98"
              >
                {t("orderCategoryText")}
              </a>
            </div>
            
          </div>
        </div>
      )}
    </section>
  );
}
