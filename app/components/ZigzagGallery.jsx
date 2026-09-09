"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const photoWorks = [
  {
    id: "photo-1",
    title: "Velvet Patisserie & Cake Design",
    client: "Le Botaniste Bakery",
    category: "Culinary Styling",
    image: "/Works/Cake.png",
    aspect: "4/5",
    year: "2025",
    desc: "Sensory macro food photography capturing artisanal confectionary textures, layered sponge crusts, and delicate dusting."
  },
  {
    id: "photo-2",
    title: "Kunafa Dream Cake Edition",
    client: "Eastern Confections",
    category: "Menu Editorial",
    image: "/Works/Kunafa Dream Cake.jpeg",
    aspect: "1/1",
    year: "2025",
    desc: "High-contrast culinary catalog photography highlighting golden crispy vermicelli, infused pistachio cream, and delicate syrup sheen."
  },
  {
    id: "photo-3",
    title: "Artisan Hand-Crafted Pasta",
    client: "Trattoria Della Spiga",
    category: "Commercial Still",
    image: "/Works/Pasta.png",
    aspect: "4/5",
    year: "2024",
    desc: "Warm daylight editorial framing focusing on fresh durum flour dough ribbons, rich pomodoro reduction, and shaved parmigiano."
  },
  {
    id: "photo-4",
    title: "Gourmet Herb-Roasted Poultry",
    client: "Nord Gastronomy",
    category: "Luxury Dining",
    image: "/Works/Chicken.png",
    aspect: "4/5",
    year: "2025",
    desc: "Deep roasted golden skin with fresh rosemary and thyme aromatics, styled with dark slate table reflections."
  },
  {
    id: "photo-5",
    title: "Flame-Seared Tiger Prawns",
    client: "Harbor Club Seafood",
    category: "Commercial Still",
    image: "/Works/Prawn.png",
    aspect: "4/5",
    year: "2025",
    desc: "Vibrant coastal seafood gastronomy with citrus zest, garlic butter glaze, and sizzling cast-iron char."
  },
  {
    id: "photo-6",
    title: "Crispy Golden Croquettes",
    client: "Bistrot Moderne",
    category: "Appetizer Series",
    image: "/Works/Cheese balls.png",
    aspect: "4/5",
    year: "2024",
    desc: "Textured panko breadcrumb crunch with molten artisan cheese center, captured in high-shutter freeze motion."
  },
  {
    id: "photo-7",
    title: "Glazed Sesame Spiced Drumettes",
    client: "Umami Table",
    category: "Culinary Styling",
    image: "/Works/Chicken Lollipop.png",
    aspect: "4/5",
    year: "2025",
    desc: "Caramelized soy-chili glaze, toasted white sesame seeds, and fresh scallion curls staged for luxury takeaway menus."
  },
  {
    id: "photo-8",
    title: "Sensory Finger Food Craft",
    client: "Nord Media House",
    category: "Commercial Shoot",
    image: "/Works/Lollipop.png",
    aspect: "4/5",
    year: "2025",
    desc: "Dynamic appetizer styling engineered for high-converting delivery app banners and Instagram promotional carousels."
  },
  {
    id: "photo-9",
    title: "Artisan Gourmet Flatbread Wrap",
    client: "Roll & Gather",
    category: "Packaging & Stills",
    image: "/Works/Wrap.png",
    aspect: "4/5",
    year: "2024",
    desc: "Fresh garden greens, charred flatbread grill marks, and layered house sauces in tactile close-up."
  },
  {
    id: "photo-10",
    title: "Nord Wrapped Campaign Artwork",
    client: "Nord Creative Studio",
    category: "Brand Campaign",
    image: "/Works/WRAPPED.png",
    aspect: "16/9",
    year: "2025",
    desc: "Corporate marketing wrap still combining brand typography, clean paper texture, and Scandinavian minimalism."
  }
];

export default function ZigzagGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMode, setViewMode] = useState('plane'); // 'plane' | 'ribbon'
  const [lightboxImage, setLightboxImage] = useState(null);

  const total = photoWorks.length;

  const nextPhoto = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prevPhoto = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxImage) {
        if (e.key === 'Escape') setLightboxImage(null);
        return;
      }
      if (viewMode === 'plane') {
        if (e.key === 'ArrowRight') nextPhoto();
        if (e.key === 'ArrowLeft') prevPhoto();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [viewMode, lightboxImage]);

  return (
    <section id="photography" className="py-24 sm:py-32 relative bg-[#FAF8FF] overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#8B7CA8]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-[#BBA9D0]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="glass-pill px-4 py-1.5 rounded-full inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#8B7CA8]" />
              <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#1F1929]/70">
                02 &mdash; Commercial Photography & Stills
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#1F1929] leading-tight">
              Sensory Stills on a<br />
              <span className="text-[#8B7CA8] font-normal italic">Zigzag Spatial Plane</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            {/* View Mode Switcher */}
            <div className="glass-card p-1 rounded-full inline-flex items-center border-white/70 bg-white/70 shadow-sm">
              <button
                onClick={() => setViewMode('plane')}
                className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  viewMode === 'plane'
                    ? 'bg-[#1F1929] text-white shadow-sm'
                    : 'text-[#1F1929]/60 hover:text-[#1F1929]'
                }`}
              >
                3D Zigzag Plane
              </button>
              <button
                onClick={() => setViewMode('ribbon')}
                className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  viewMode === 'ribbon'
                    ? 'bg-[#1F1929] text-white shadow-sm'
                    : 'text-[#1F1929]/60 hover:text-[#1F1929]'
                }`}
              >
                Zigzag Stream
              </button>
            </div>

            {/* Navigation Arrows for 3D plane mode */}
            {viewMode === 'plane' && (
              <div className="hidden sm:flex items-center gap-2">
                <button
                  onClick={prevPhoto}
                  className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-[#1F1929] hover:bg-[#1F1929] hover:text-white transition-all shadow-sm"
                  aria-label="Previous photo in zigzag"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextPhoto}
                  className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-[#1F1929] hover:bg-[#1F1929] hover:text-white transition-all shadow-sm"
                  aria-label="Next photo in zigzag"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* ========================================================
            VIEW MODE 1: INTERACTIVE 3D ZIGZAG SPATIAL PLANE
            ======================================================== */}
        {viewMode === 'plane' && (
          <div className="relative">
            {/* Zigzag Flight Trajectory Indicator */}
            <div className="flex items-center justify-center gap-2 mb-8 overflow-x-auto py-2 no-scrollbar">
              {photoWorks.map((item, idx) => {
                const isCurrent = idx === currentIndex;
                const isEven = idx % 2 === 0;
                return (
                  <button
                    key={item.id}
                    onClick={() => setCurrentIndex(idx)}
                    className="group relative flex flex-col items-center p-1 transition-all"
                  >
                    <div 
                      className={`w-3.5 h-3.5 rounded-full transition-all duration-300 flex items-center justify-center ${
                        isCurrent 
                          ? 'bg-[#1F1929] scale-125 ring-4 ring-[#8B7CA8]/30 shadow-md' 
                          : 'bg-white/80 border border-[#1F1929]/20 hover:scale-110 hover:border-[#8B7CA8]'
                      }`}
                    >
                      <div className={`w-1 h-1 rounded-full ${isCurrent ? 'bg-[#BBA9D0]' : 'bg-transparent'}`} />
                    </div>
                    {/* Directional Zigzag Pin indicator */}
                    <span className={`text-[8px] font-mono mt-1 transition-colors ${
                      isCurrent ? 'text-[#1F1929] font-bold' : 'text-[#1F1929]/40'
                    }`}>
                      {isEven ? "↗" : "↘"}0{idx + 1}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* 3D Spatial Canvas */}
            <div 
              className="relative w-full h-[560px] sm:h-[640px] flex items-center justify-center overflow-hidden rounded-[3rem] glass-card border border-white/60 bg-gradient-to-b from-white/40 via-white/20 to-white/40 shadow-[0_20px_60px_rgba(44,36,59,0.06)]"
              style={{ perspective: '1400px' }}
            >
              {/* Background ambient radar grid lines */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1F192905_1px,transparent_1px),linear-gradient(to_bottom,#1F192905_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

              {/* Photos Distributed Across the Zigzag Spatial Coordinates */}
              {photoWorks.map((item, index) => {
                const offset = index - currentIndex;
                const isCurrent = offset === 0;
                const isVisible = Math.abs(offset) <= 2; // Show active and 2 neighbors on each side
                
                if (!isVisible) return null;

                // Alternating zigzag pattern calculation
                // Even offsets swing right/top, odd offsets swing left/bottom
                const isEvenSide = (index % 2 === 0);
                const zigzagSign = isEvenSide ? 1 : -1;
                
                let xPos = 0;
                let yPos = 0;
                let zPos = 0;
                let rotateZ = 0;
                let rotateY = 0;
                let scale = 1;
                let opacity = 1;
                let blur = 'blur(0px)';
                let zIndex = 30;

                if (isCurrent) {
                  xPos = 0;
                  yPos = 0;
                  zPos = 40;
                  rotateZ = 0;
                  rotateY = 0;
                  scale = 1.05;
                  opacity = 1;
                  blur = 'blur(0px)';
                  zIndex = 30;
                } else {
                  const dist = Math.abs(offset);
                  // Dynamic zigzag trajectory: alternate sign * distance
                  const dirSign = offset > 0 ? 1 : -1;
                  xPos = dirSign * (dist * 260) * (isEvenSide ? 1.05 : 0.95);
                  // Vertical zigzag wave bounce
                  yPos = (offset % 2 === 0 ? -35 : 35);
                  zPos = -dist * 200;
                  rotateZ = zigzagSign * (dist * 6);
                  rotateY = -dirSign * (dist * 14);
                  scale = Math.max(0.72, 1 - dist * 0.15);
                  opacity = Math.max(0.4, 0.9 - dist * 0.25);
                  blur = `blur(${dist * 3.5}px)`;
                  zIndex = 30 - dist * 5;
                }

                return (
                  <motion.div
                    key={item.id}
                    animate={{
                      x: xPos,
                      y: yPos,
                      z: zPos,
                      rotateZ: rotateZ,
                      rotateY: rotateY,
                      scale: scale,
                      opacity: opacity,
                      filter: blur,
                    }}
                    transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                    onClick={() => {
                      if (isCurrent) {
                        setLightboxImage(item);
                      } else {
                        setCurrentIndex(index);
                      }
                    }}
                    className={`absolute w-[290px] sm:w-[350px] aspect-[4/5] rounded-[2.5rem] overflow-hidden glass-card p-4 flex flex-col justify-between cursor-pointer transition-shadow ${
                      isCurrent 
                        ? 'border border-white/80 shadow-[0_25px_60px_rgba(44,36,59,0.25)] ring-2 ring-[#8B7CA8]/40' 
                        : 'border border-white/40 shadow-lg hover:opacity-90'
                    }`}
                    style={{
                      transformStyle: 'preserve-3d',
                      zIndex: zIndex
                    }}
                  >
                    {/* Photo Image */}
                    <div className="relative w-full h-[78%] rounded-[1.8rem] overflow-hidden bg-black/5">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
                      
                      {/* Top Pill Tags */}
                      <div className="absolute top-3 inset-x-3 flex items-center justify-between z-10">
                        <span className="glass-pill px-3 py-1 rounded-full text-[9px] uppercase tracking-[0.2em] font-bold text-white bg-black/40 border-white/20 backdrop-blur-md">
                          {item.category}
                        </span>
                        <span className="glass-pill px-2.5 py-0.5 rounded-full text-[9px] font-mono text-white/90 bg-black/40 border-white/20">
                          {item.year}
                        </span>
                      </div>

                      {/* Click to Zoom Icon for active card */}
                      {isCurrent && (
                        <div className="absolute bottom-3 right-3 z-10 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                          </svg>
                        </div>
                      )}
                    </div>

                    {/* Bottom Metadata */}
                    <div className="pt-3 px-1 flex flex-col justify-between">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] uppercase tracking-widest text-[#8B7CA8] font-bold">
                          {item.client}
                        </span>
                        <span className="text-[10px] font-mono text-[#1F1929]/50">
                          0{index + 1} / 0{total}
                        </span>
                      </div>
                      <h3 className="text-sm sm:text-base font-serif font-bold text-[#1F1929] truncate mt-0.5">
                        {item.title}
                      </h3>
                    </div>
                  </motion.div>
                );
              })}

              {/* Mobile Prev / Next Controls inside stage */}
              <div className="sm:hidden absolute bottom-4 inset-x-6 flex items-center justify-between z-40">
                <button
                  onClick={prevPhoto}
                  className="px-4 py-2 rounded-full glass-card text-xs font-bold text-[#1F1929] flex items-center gap-1 shadow-md"
                >
                  &larr; Prev
                </button>
                <button
                  onClick={nextPhoto}
                  className="px-4 py-2 rounded-full bg-[#1F1929] text-xs font-bold text-white flex items-center gap-1 shadow-md"
                >
                  Next &rarr;
                </button>
              </div>

            </div>

            {/* Active Photo Caption & Narrative Card */}
            <div className="mt-8 max-w-2xl mx-auto text-center glass-card p-6 rounded-3xl border border-white/70 bg-white/70 shadow-sm">
              <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#8B7CA8] mb-1">
                Active Coordinate &bull; Photo 0{currentIndex + 1} of {total}
              </div>
              <h4 className="text-xl sm:text-2xl font-serif font-bold text-[#1F1929]">
                {photoWorks[currentIndex].title}
              </h4>
              <p className="mt-2 text-xs sm:text-sm text-[#1F1929]/70 leading-relaxed font-sans">
                {photoWorks[currentIndex].desc}
              </p>
              <div className="mt-4 flex items-center justify-center gap-4 text-xs font-bold uppercase tracking-wider text-[#1F1929]/60">
                <span>Client: <strong className="text-[#1F1929]">{photoWorks[currentIndex].client}</strong></span>
                <span>&bull;</span>
                <button 
                  onClick={() => setLightboxImage(photoWorks[currentIndex])}
                  className="text-[#8B7CA8] hover:underline flex items-center gap-1"
                >
                  <span>Open Full Stills</span>
                  <span>&rarr;</span>
                </button>
              </div>
            </div>

          </div>
        )}

        {/* ========================================================
            VIEW MODE 2: ZIGZAG EDITORIAL RIBBON STREAM
            ======================================================== */}
        {viewMode === 'ribbon' && (
          <div className="relative max-w-5xl mx-auto py-8">
            {/* Center Dotted Zigzag Guide Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 border-r-2 border-dashed border-[#8B7CA8]/25 hidden md:block" />

            <div className="flex flex-col gap-16 md:gap-24">
              {photoWorks.map((item, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Photo Card with Zigzag Tilt */}
                    <div 
                      className={`w-full md:w-1/2 group cursor-pointer transform transition-transform duration-500 ${
                        isEven ? 'hover:-rotate-1' : 'hover:rotate-1'
                      }`}
                      onClick={() => setLightboxImage(item)}
                    >
                      <div className="glass-card p-4 rounded-[2.5rem] border-white/80 bg-white/80 shadow-[0_16px_40px_rgba(44,36,59,0.08)] overflow-hidden">
                        <div className="relative aspect-[4/3] rounded-[1.8rem] overflow-hidden bg-black/5">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                            <span className="glass-pill px-4 py-2 rounded-full text-xs uppercase tracking-widest text-white font-bold bg-black/50 border-white/20">
                              View High-Res
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Metadata Narrative Column */}
                    <div className="w-full md:w-1/2 flex flex-col">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="font-mono text-xs text-[#8B7CA8] font-bold">
                          // 0{idx + 1}
                        </span>
                        <span className="glass-pill px-3 py-0.5 rounded-full text-[9px] uppercase tracking-[0.2em] font-bold text-[#1F1929]/70 bg-white">
                          {item.category}
                        </span>
                        <span className="text-xs text-[#1F1929]/40 font-mono">
                          {item.year}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1F1929] mb-3">
                        {item.title}
                      </h3>

                      <p className="text-sm text-[#1F1929]/70 leading-relaxed font-sans mb-6">
                        {item.desc}
                      </p>

                      <div className="pt-4 border-t border-[#1F1929]/10 flex items-center justify-between text-xs">
                        <span className="text-[#1F1929]/60 font-semibold uppercase tracking-wider">
                          Client: {item.client}
                        </span>
                        <button
                          onClick={() => setLightboxImage(item)}
                          className="font-bold text-[#1F1929] hover:text-[#8B7CA8] transition-colors flex items-center gap-1 uppercase tracking-wider"
                        >
                          <span>Expand Stills</span>
                          <span>&rarr;</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}

      </div>

      {/* ========================================================
          FULL-SCREEN FROSTED LIGHTBOX MODAL
          ======================================================== */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8"
            onClick={() => setLightboxImage(null)}
          >
            <div 
              className="relative max-w-5xl max-h-[90vh] w-full flex flex-col md:flex-row items-center glass-card bg-white/95 rounded-[2.5rem] overflow-hidden p-6 sm:p-8 shadow-2xl border border-white/80"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-[#1F1929]/10 hover:bg-[#1F1929] hover:text-white text-[#1F1929] flex items-center justify-center transition-colors"
                aria-label="Close Lightbox"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Main Image Frame */}
              <div className="w-full md:w-3/5 h-full max-h-[60vh] md:max-h-[75vh] flex items-center justify-center rounded-2xl overflow-hidden bg-black/5">
                <img
                  src={lightboxImage.image}
                  alt={lightboxImage.title}
                  className="w-full h-full object-contain max-h-[75vh]"
                />
              </div>

              {/* Details & Production Notes */}
              <div className="w-full md:w-2/5 p-4 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="glass-pill px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-[#8B7CA8] bg-white">
                      {lightboxImage.category}
                    </span>
                    <span className="text-xs font-mono text-[#1F1929]/50">
                      {lightboxImage.year}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1F1929] mb-3">
                    {lightboxImage.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#1F1929]/75 leading-relaxed font-sans mb-6">
                    {lightboxImage.desc}
                  </p>

                  <div className="space-y-2 text-xs text-[#1F1929]/70 pt-4 border-t border-[#1F1929]/10">
                    <div className="flex justify-between">
                      <span className="uppercase tracking-widest text-[10px] text-[#8B7CA8]">Client</span>
                      <span className="font-semibold text-[#1F1929]">{lightboxImage.client}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="uppercase tracking-widest text-[10px] text-[#8B7CA8]">Discipline</span>
                      <span className="font-semibold text-[#1F1929]">Commercial Photography & Food Styling</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="uppercase tracking-widest text-[10px] text-[#8B7CA8]">Licensing</span>
                      <span className="font-semibold text-[#1F1929]">Commercial Retainer Asset</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#1F1929]/10 flex items-center justify-between">
                  <a
                    href="#contact"
                    onClick={() => setLightboxImage(null)}
                    className="w-full py-3.5 rounded-full bg-[#1F1929] text-white text-xs font-bold uppercase tracking-[0.2em] text-center hover:bg-[#8B7CA8] transition-colors shadow-md"
                  >
                    Inquire Photography Project &rarr;
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
