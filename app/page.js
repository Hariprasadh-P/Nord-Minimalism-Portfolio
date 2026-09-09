import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import WorksCarousel from './components/WorksCarousel';
import ZigzagGallery from './components/ZigzagGallery';
import Methodology from './components/Methodology';
import PricingCards from './components/PricingCards';
import Contact from './components/Contact';

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <main className="min-h-screen bg-[#FAF8FF] text-[#1F1929] selection:bg-[#8B7CA8] selection:text-white relative overflow-hidden">
      {/* Top Floating Glass Navigation */}
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* Works & Horizontal Reel Showcase (All Video Works) */}
      <WorksCarousel />

      {/* Commercial Photography & Stills on a 3D Zigzag Plane */}
      <ZigzagGallery />

      {/* Strategic 4-Phase Methodology */}
      <Methodology />

      {/* Retainer Compass Rate Cards & Add-on Services */}
      <PricingCards />

      {/* Interactive Contact & WhatsApp Dispatch */}
      <Contact />

      {/* Studio Editorial Footer */}
      <footer className="border-t border-[#1F1929]/10 py-16 bg-[#FAF8FF] relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#1F1929] text-white flex items-center justify-center font-serif text-xs font-bold">
              N
            </div>
            <div>
              <span className="font-serif font-bold text-sm uppercase tracking-widest text-[#1F1929] block">
                Nord Media House
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#8B7CA8]">
                Directional Creative Studio &bull; Scandinavian Restraint
              </span>
            </div>
          </div>

          <div className="flex items-center gap-8 text-xs uppercase tracking-[0.18em] font-medium text-[#1F1929]/70">
            <a href="#works" className="hover:text-[#1F1929] transition-colors">Reels</a>
            <a href="#photography" className="hover:text-[#1F1929] transition-colors">Photography</a>
            <a href="#methodology" className="hover:text-[#1F1929] transition-colors">Methodology</a>
            <a href="#pricing" className="hover:text-[#1F1929] transition-colors">Retainers</a>
            <a href="#contact" className="hover:text-[#1F1929] transition-colors">Contact</a>
          </div>

          <div className="text-xs text-[#1F1929]/50 tracking-wider text-center md:text-right">
            &copy; {currentYear} Nord Media House. All rights reserved.
          </div>

        </div>
      </footer>
    </main>
  );
}
