import React, { useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { ArrowUpRight, MessageSquare, Zap, Shield, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import logoImg from '../assets/WhatsApp Image 2026-06-30 at 6.41.15 PM.jpeg';

export default function Hero() {
  const { t, lang } = useApp();
  const heroRef = useRef(null);
  const containerRef = useRef(null);
  const card3DRef = useRef(null);
  const textRef = useRef(null);

  // GSAP Entrance Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading entries
      gsap.fromTo(".animate-char", {
        opacity: 0,
        y: 60,
      }, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.1,
      });

      // Floating items animation
      gsap.to(".floating-accessory", {
        y: "random(-15, 15)",
        x: "random(-10, 10)",
        rotation: "random(-10, 10)",
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.2
      });

      // Shine effect on background
      gsap.fromTo(".bg-gradient-shine", {
        opacity: 0,
        scale: 0.8
      }, {
        opacity: 0.35,
        scale: 1,
        duration: 2,
        ease: "power2.out"
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // 3D Card Hover Interaction using native JS (super smooth)
  const handleMouseMove = (e) => {
    const card = card3DRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position inside elements
    const y = e.clientY - rect.top;  // y position inside elements

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Angle calculations (limited to 15 degrees max)
    const rotateX = ((centerY - y) / centerY) * 15;
    const rotateY = ((x - centerX) / centerX) * 15;

    // Smooth transform
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    const card = card3DRef.current;
    if (!card) return;

    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    card.style.transition = "transform 0.5s ease";
  };

  const handleMouseEnter = () => {
    if (card3DRef.current) {
      card3DRef.current.style.transition = "none";
    }
  };

  return (
    <section 
      id="home" 
      ref={heroRef} 
      className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden py-12 md:py-20 lg:py-28 bg-light-bg dark:bg-dark-bg transition-colors duration-300"
    >
      {/* Background Neon Glowing Orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 -translate-y-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-slate-200/50 dark:bg-zinc-800/10 blur-[130px] bg-gradient-shine"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-slate-100 dark:bg-zinc-900/10 blur-[150px] bg-gradient-shine"></div>
      </div>

      {/* Floating Design Assets (GSAP Managed) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute floating-accessory top-24 left-[10%] opacity-10 dark:opacity-30">
          <Zap className="w-12 h-12 text-slate-800 dark:text-zinc-400 rotate-12" />
        </div>
        <div className="absolute floating-accessory top-1/2 right-[8%] opacity-15 dark:opacity-25 hidden sm:block">
          <Sparkles className="w-10 h-10 text-slate-800 dark:text-zinc-500" />
        </div>
        <div className="absolute floating-accessory bottom-20 left-[15%] opacity-10 dark:opacity-20">
          <Shield className="w-14 h-14 text-slate-800 dark:text-zinc-400 -rotate-12" />
        </div>
      </div>

      <div ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        
        {/* Left Side: Animated Typography & Content */}
        <div ref={textRef} className="text-center lg:text-left rtl:lg:text-right flex flex-col justify-center">
          
          {/* Badge */}
          <div className="animate-char inline-flex items-center gap-2 self-center lg:self-start px-3.5 py-1.5 rounded-full border border-slate-200/80 bg-slate-50 dark:bg-zinc-900/60 dark:border-zinc-800/80 text-xs font-semibold text-slate-900 dark:text-zinc-200 dark:neon-border-white mb-6 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-zinc-800 dark:text-zinc-300" />
            <span>{t("premiumShopLabel")}</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] mb-6 text-slate-900 dark:text-white font-sans">
            <span className="animate-char block">{t("heroTitle")}</span>
          </h1>

          {/* Subtitle */}
          <p className="animate-char text-base sm:text-lg md:text-xl text-slate-600 dark:text-zinc-400 max-w-xl mx-auto lg:mx-0 mb-8 font-medium leading-relaxed">
            {t("heroSubtitle")}
          </p>

          {/* Call To Actions */}
          <div className="animate-char flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#storefront"
              className="group flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold tracking-wide bg-black text-white dark:bg-white dark:text-black transition-all duration-300 hover:shadow-lg dark:hover:neon-glow-white hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>{t("exploreBtn")}</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            
            <a
              href="https://wa.me/201146444105" // Placeholder phone, built to launch chat
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold tracking-wide border transition-all duration-300 border-slate-200 text-slate-950 dark:border-zinc-800 dark:text-zinc-200 hover:bg-slate-50 dark:hover:bg-zinc-800/40 hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageSquare className="w-4 h-4 text-emerald-500" />
              <span>{t("contactBtn")}</span>
            </a>
          </div>
        </div>

        {/* Right Side: Interactive 3D Mockup Container */}
        <div className="flex items-center justify-center">
          <div 
            className="relative cursor-pointer select-none group w-72 h-72 sm:w-96 sm:h-96 md:w-[420px] md:h-[420px] flex items-center justify-center p-4 bg-slate-50/50 dark:bg-zinc-950/20 rounded-full border border-slate-200/50 dark:border-zinc-900/50"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
          >
            {/* Background elements */}
            <div className="absolute inset-0 rounded-full bg-slate-100/50 dark:bg-zinc-900/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Glowing neon ring */}
            <div className="absolute inset-4 rounded-full border border-slate-200/40 dark:border-zinc-800/30 scale-95 group-hover:scale-100 transition-transform duration-700 animate-[spin_30s_linear_infinite]"></div>

            {/* 3D Card (Tilt Card) */}
            <div 
              ref={card3DRef}
              style={{ transformStyle: "preserve-3d" }}
              className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-3xl p-6 transition-all duration-100 shadow-xl border w-full flex flex-col justify-between items-center text-center bg-white dark:bg-zinc-900 border-slate-200/50 dark:border-zinc-800/80 hover:shadow-2xl hover:border-slate-800 dark:hover:border-zinc-100 dark:hover:neon-glow-white"
            >
              {/* Internal shine overlay */}
              <div 
                style={{ transform: "translateZ(80px)" }}
                className="absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-tr from-transparent via-white/5 to-white/20 dark:from-transparent dark:via-zinc-800/5 dark:to-zinc-800/20"
              ></div>

              {/* Top Details */}
              <div 
                style={{ transform: "translateZ(50px)" }} 
                className="flex items-center gap-2 self-start bg-slate-50 dark:bg-zinc-950 px-3 py-1 rounded-xl text-[9px] font-bold tracking-widest text-slate-500 dark:text-zinc-400 uppercase"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                {t("premiumShopLabel")}
              </div>

              {/* Logo (Cropped to Zain Logo from path) */}
              <div 
                style={{ transform: "translateZ(90px)" }}
                className="w-32 h-32 flex items-center justify-center relative my-4"
              >
                <div className="absolute inset-0 bg-slate-100/60 dark:bg-white/5 rounded-full filter blur-xl scale-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img 
                  src={logoImg} 
                  alt="Zain Phone Logo" 
                  className="max-h-full max-w-full object-contain filter invert-0 dark:invert rounded-2xl shadow-sm border border-slate-100/50 dark:border-zinc-800"
                />
              </div>

              {/* Device Model Label */}
              <div 
                style={{ transform: "translateZ(60px)" }}
                className="flex flex-col items-center"
              >
                <h3 className="font-outfit font-black tracking-widest text-xl text-slate-900 dark:text-white uppercase">
                  {t("brandName")}
                </h3>
                <p className="font-sans font-medium text-[8px] tracking-[0.3em] text-slate-400 dark:text-zinc-500 mt-1 uppercase">
                  {t("brandSlogan")}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
