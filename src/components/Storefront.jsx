import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Info, Cable, Shield, HelpCircle, Sparkles } from 'lucide-react';
import storeImg from '../assets/WhatsApp Image 2026-06-30 at 6.40.32 PM.jpeg';

export default function Storefront() {
  const { t } = useApp();
  const [selectedSpot, setSelectedSpot] = useState(null);

  // Define hot spots matching positions on the user-provided storefront picture
  const hotSpots = [
    {
      id: "cables-wall",
      name: t("cablesWall"),
      desc: t("cablesWallDesc"),
      icon: Cable,
      top: "40%",
      left: "22%",
      details: t("cablesWallSpecs")
    },
    {
      id: "cases-shelves",
      name: t("casesDisplay"),
      desc: t("casesDisplayDesc"),
      icon: Shield,
      top: "42%",
      left: "78%",
      details: t("casesDisplaySpecs")
    },
    {
      id: "help-counter",
      name: t("counterArea"),
      desc: t("counterAreaDesc"),
      icon: HelpCircle,
      top: "52%",
      left: "50%",
      details: t("counterAreaSpecs")
    },
    {
      id: "innovations-table",
      name: t("centerDisplay"),
      desc: t("centerDisplayDesc"),
      icon: Sparkles,
      top: "76%",
      left: "50%",
      details: t("centerDisplaySpecs")
    }
  ];

  return (
    <section id="storefront" className="py-20 md:py-28 bg-light-surface dark:bg-dark-bg transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            {t("storefrontTitle")}
          </h2>
          <div className="w-16 h-1 bg-slate-900 dark:bg-white mx-auto my-4 rounded-full"></div>
          <p className="text-slate-500 dark:text-zinc-400 text-base sm:text-lg">
            {t("storefrontSubtitle")}
          </p>
        </div>

        {/* Core Store Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Interactive Image Viewer (Col span 7) */}
          <div className="lg:col-span-7 flex flex-col items-center">
            
            {/* Visual Instruction Badge */}
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-slate-100 dark:bg-zinc-900 text-slate-600 dark:text-zinc-400 rounded-full text-xs font-semibold select-none border border-slate-200/50 dark:border-zinc-800">
              <Info className="w-3.5 h-3.5 text-zinc-500" />
              <span>{t("storefrontAlert")}</span>
            </div>

            {/* Storefront Image Container */}
            <div className="relative w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl border bg-white dark:bg-zinc-900 border-slate-200/60 dark:border-zinc-800/80 group">
              
              {/* Actual Storefront Image */}
              <img 
                src={storeImg} 
                alt="Zain Phone Storefront Layout" 
                className="w-full h-auto object-cover object-center filter saturate-105"
              />

              {/* Glowing Hotspots Overlays */}
              {hotSpots.map((spot) => (
                <button
                  key={spot.id}
                  onClick={() => setSelectedSpot(spot)}
                  className={`absolute w-7 h-7 sm:w-9 sm:h-9 rounded-full flex items-center justify-center -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 border focus:outline-none z-20 ${
                    selectedSpot?.id === spot.id 
                    ? "bg-white text-black scale-110 border-black animate-none shadow-lg dark:bg-neutral-900 dark:text-white dark:border-white" 
                    : "bg-black/60 text-white hover:bg-black/90 hover:scale-105 border-white/80 dark:bg-white/40 dark:text-black dark:border-black/50 animate-pulse active:scale-95"
                  }`}
                  style={{ top: spot.top, left: spot.left }}
                  title={spot.name}
                >
                  <spot.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-current" />
                </button>
              ))}

              {/* Storefront Ambient Glow Frame overlay */}
              <div className="absolute inset-0 border-2 pointer-events-none rounded-3xl border-transparent group-hover:border-slate-800/20 dark:group-hover:border-white/10 transition-colors duration-500"></div>
            </div>
          </div>

          {/* Right Column: Dynamic Informational Display (Col span 5) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {selectedSpot ? (
              <div className="scale-up animate-in fade-in slide-in-from-bottom-4 duration-300 p-6 sm:p-8 rounded-3xl border bg-white dark:bg-zinc-900 border-slate-250/70 dark:border-zinc-800/80 dark:neon-glow-white shadow-lg">
                
                {/* Spot Heading */}
                <div className="flex items-center gap-3.5 border-b border-slate-100 dark:border-zinc-800 pb-5 mb-5">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-black text-white dark:bg-white dark:text-black">
                    {React.createElement(selectedSpot.icon, { className: "w-5.5 h-5.5" })}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {selectedSpot.name}
                    </h3>
                  </div>
                </div>

                {/* Spot Description */}
                <p className="text-sm font-medium leading-relaxed text-slate-600 dark:text-zinc-400 mb-6">
                  {selectedSpot.desc}
                </p>

                {/* Featured Products */}
                <h4 className="text-xs font-bold tracking-widest text-slate-400 dark:text-zinc-500 uppercase mb-3">
                  {t("cablesWallHighlightsTitle")}
                </h4>
                <ul className="space-y-2">
                  {(Array.isArray(selectedSpot.details) ? selectedSpot.details : []).map((detail, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-zinc-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-900 dark:bg-white"></div>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* Return button */}
                <button
                  onClick={() => setSelectedSpot(null)}
                  className="mt-8 text-xs font-semibold px-4 py-2 border rounded-lg text-slate-500 hover:text-slate-900 border-slate-200 hover:border-slate-800 dark:text-zinc-400 dark:hover:text-white dark:border-zinc-800 dark:hover:border-zinc-300 transition-colors uppercase tracking-wider"
                >
                  {t("cablesWallClearBtn")}
                </button>
              </div>
            ) : (
              <div className="text-center lg:text-left rtl:lg:text-right p-8 rounded-3xl border border-dashed bg-slate-50/50 border-slate-300 dark:bg-zinc-950/20 dark:border-zinc-800 flex flex-col items-center lg:items-start justify-center">
                <div className="w-16 h-16 rounded-3xl flex items-center justify-center bg-slate-100 text-slate-500 dark:bg-zinc-900 dark:text-zinc-500 mb-6">
                  <Info className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-zinc-300 mb-2">
                  {t("exploreVirtualSpotTitle")}
                </h3>
                <p className="text-sm text-slate-500 dark:text-zinc-500 max-w-sm">
                  {t("exploreVirtualSpotDesc")}
                </p>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
