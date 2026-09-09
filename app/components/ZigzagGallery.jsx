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
  const [selectedTag, setSelectedTag] = useState("All");
  const [lightboxImage, setLightboxImage] = useState(null);

  const tags = ["All", "Culinary Styling", "Commercial Still", "Luxury Dining", "Brand Campaign"];

  const filteredPhotos = selectedTag === "All"
    ? photoWorks
    : photoWorks.filter(p => p.category === selectedTag);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxImage && e.key === 'Escape') {
        setLightboxImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxImage]);

  return (
    <section id="photography" className="py-24 sm:py-32 relative bg-[#FAF8FF] overflow-hidden border-t border-[#1F1929]/5">
      {/* Background ambient glows */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#8B7CA8]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-96 h-96 bg-[#BBA9D0]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="glass-pill px-4 py-1.5 rounded-full inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#8B7CA8]" />
              <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#1F1929]/70">
                02 &mdash; Commercial Photography & Stills
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#1F1929] leading-tight">
              Sensory Stills &<br />
              <span className="text-[#8B7CA8] font-normal italic">Editorial Catalog</span>
            </h2>
            <p className="mt-3 text-sm text-[#1F1929]/70 max-w-xl">
              High-resolution commercial gastronomy, bespoke menu layouts, packaging still lives, and founder portraiture.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-1.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all whitespace-nowrap ${
                  selectedTag === tag
                    ? 'bg-[#1F1929] text-white shadow-sm'
                    : 'glass-card text-[#1F1929]/70 hover:text-[#1F1929] hover:bg-white/80'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Clean Luxury Editorial Photography Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPhotos.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              onClick={() => setLightboxImage(item)}
              className="group glass-card p-4 rounded-[2.5rem] border border-white/70 bg-white/75 hover:bg-white hover:border-[#8B7CA8]/40 shadow-[0_16px_40px_rgba(44,36,59,0.06)] hover:shadow-[0_24px_60px_rgba(44,36,59,0.14)] transition-all duration-500 cursor-pointer flex flex-col justify-between hover:-translate-y-1.5"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/5] rounded-[1.8rem] overflow-hidden bg-black/5">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                
                {/* Frosted Glass Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F1929]/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Top Badges */}
                <div className="absolute top-3 inset-x-3 flex items-center justify-between z-10">
                  <span className="glass-pill px-3 py-1 rounded-full text-[9px] uppercase tracking-[0.2em] font-bold text-white bg-black/40 border-white/20 backdrop-blur-md">
                    {item.category}
                  </span>
                  <span className="glass-pill px-2.5 py-0.5 rounded-full text-[9px] font-mono text-white/90 bg-black/40 border-white/20">
                    {item.year}
                  </span>
                </div>

                {/* Hover Inspect Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-md border border-white/60 text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                  </div>
                </div>

                {/* Bottom Overlay Title inside image */}
                <div className="absolute bottom-4 inset-x-4 z-10">
                  <span className="text-[10px] uppercase tracking-widest text-white/80 font-bold block mb-1">
                    {item.client}
                  </span>
                  <h3 className="text-lg font-serif font-bold text-white leading-tight drop-shadow-sm">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-3 px-2 flex items-center justify-between text-xs text-[#1F1929]/60">
                <span className="truncate pr-2">{item.desc}</span>
                <span className="font-bold text-[#8B7CA8] group-hover:translate-x-0.5 transition-transform flex-shrink-0">&rarr;</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Full-Screen Frosted Lightbox Modal */}
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
                      <span className="font-semibold text-[#1F1929]">Commercial Photography & Stills</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="uppercase tracking-widest text-[10px] text-[#8B7CA8]">Usage</span>
                      <span className="font-semibold text-[#1F1929]">Editorial Menus, Banners & Packaging</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#1F1929]/10 flex items-center justify-between">
                  <a
                    href="#contact"
                    onClick={() => setLightboxImage(null)}
                    className="w-full py-3.5 rounded-full bg-[#1F1929] text-white text-xs font-bold uppercase tracking-[0.2em] text-center hover:bg-[#8B7CA8] transition-colors shadow-md"
                  >
                    Inquire Photography Retainer &rarr;
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
