import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Storefront from './components/Storefront';
import CompatibilityTool from './components/CompatibilityTool';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-slate-800 dark:text-zinc-100 transition-colors duration-300 font-sans">
      {/* Global Navigation Header */}
      <Header />

      {/* Main content sections */}
      <main>
        {/* Hero Banner Grid (GSAP entrance animation + 3D Interactive Logo) */}
        <Hero />

        {/* Core items & Spec Check Cards */}
        <Categories />

        {/* Virtual visual mockup representing physical shop layout */}
        <Storefront />

        {/* Smart Device Compatibility scan list builder */}
        <CompatibilityTool />
      </main>

      {/* Contacts and brand copyrights */}
      <Footer />
    </div>
  );
}
