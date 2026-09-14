"use client";
import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import Image from "next/image";

export const photoWorks = [
  {
    id: "photo-1",
    title: "Velvet Patisserie & Cake Design",
    client: "Le Botaniste Bakery",
    category: "Culinary Styling",
    image: "/Works/Cake.png",
    imageWebp: "/Works/Cake.webp",
    aspect: "4/5",
    resolution: "3840px (4K UHD)",
    year: "2025",
    desc: "Sensory macro food photography capturing artisanal confectionary textures, layered sponge crusts, and delicate dusting.",
  },
  {
    id: "photo-2",
    title: "Kunafa Dream Cake Edition",
    client: "Eastern Confections",
    category: "Menu Editorial",
    image: "/Works/Kunafa Dream Cake.jpeg",
    imageWebp: "/Works/Kunafa Dream Cake.webp",
    aspect: "1/1",
    resolution: "3840px (4K UHD)",
    year: "2025",
    desc: "High-contrast culinary catalog photography highlighting golden crispy vermicelli, infused pistachio cream, and delicate syrup sheen.",
  },
  {
    id: "photo-3",
    title: "Artisan Hand-Crafted Pasta",
    client: "Trattoria Della Spiga",
    category: "Commercial Still",
    image: "/Works/Pasta.png",
    imageWebp: "/Works/Pasta.webp",
    aspect: "4/5",
    resolution: "3840px (4K UHD)",
    year: "2024",
    desc: "Warm daylight editorial framing focusing on fresh durum flour dough ribbons, rich pomodoro reduction, and shaved parmigiano.",
  },
  {
    id: "photo-4",
    title: "Gourmet Herb-Roasted Poultry",
    client: "Nord Gastronomy",
    category: "Luxury Dining",
    image: "/Works/Chicken.png",
    imageWebp: "/Works/Chicken.webp",
    aspect: "4/5",
    resolution: "3840px (4K UHD)",
    year: "2025",
    desc: "Deep roasted golden skin with fresh rosemary and thyme aromatics, styled with dark slate table reflections.",
  },
  {
    id: "photo-5",
    title: "Flame-Seared Tiger Prawns",
    client: "Harbor Club Seafood",
    category: "Commercial Still",
    image: "/Works/Prawn.png",
    imageWebp: "/Works/Prawn.webp",
    aspect: "4/5",
    resolution: "3840px (4K UHD)",
    year: "2025",
    desc: "Vibrant coastal seafood gastronomy with citrus zest, garlic butter glaze, and sizzling cast-iron char.",
  },
  {
    id: "photo-6",
    title: "Crispy Golden Croquettes",
    client: "Bistrot Moderne",
    category: "Appetizer Series",
    image: "/Works/Cheese balls.png",
    imageWebp: "/Works/Cheese balls.webp",
    aspect: "4/5",
    resolution: "3840px (4K UHD)",
    year: "2024",
    desc: "Textured panko breadcrumb crunch with molten artisan cheese center, captured in high-shutter freeze motion.",
  },
  {
    id: "photo-7",
    title: "Glazed Sesame Spiced Drumettes",
    client: "Umami Table",
    category: "Culinary Styling",
    image: "/Works/Chicken Lollipop.png",
    imageWebp: "/Works/Chicken Lollipop.webp",
    aspect: "4/5",
    resolution: "3840px (4K UHD)",
    year: "2025",
    desc: "Caramelized soy-chili glaze, toasted white sesame seeds, and fresh scallion curls staged for luxury takeaway menus.",
  },
  {
    id: "photo-8",
    title: "Sensory Finger Food Craft",
    client: "Nord Media House",
    category: "Commercial Shoot",
    image: "/Works/Lollipop.png",
    imageWebp: "/Works/Lollipop.webp",
    aspect: "4/5",
    resolution: "3840px (4K UHD)",
    year: "2025",
    desc: "Dynamic appetizer styling engineered for high-converting delivery app banners and Instagram promotional carousels.",
  },
];

// Single Parallax Photo Card with Skew on Hover
const ParallaxPhotoCard = ({ photo, index, onSelect }) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  // Alternating parallax direction
  const rawParallax = useTransform(
    scrollYProgress,
    [0, 1],
    index % 2 === 0 ? [-28, 28] : [28, -28]
  );
  const parallaxY = useSpring(rawParallax, { damping: 24, stiffness: 110 });

  return (
    <motion.div
      ref={cardRef}
      style={{ y: parallaxY }}
      className="w-full flex flex-col justify-center py-3"
    >
      <motion.div
        onClick={() => onSelect(photo)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={{
          skewX: isHovered ? (index % 2 === 0 ? -1.5 : 1.5) : 0,
          skewY: isHovered ? (index % 2 === 0 ? 1 : -1) : 0,
          scale: isHovered ? 1.02 : 1,
          y: isHovered ? -6 : 0,
        }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        data-cursor-label="VIEW"
        className="group relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden nord-glass cursor-pointer shadow-[0_16px_40px_rgba(34,9,44,0.08)] hover:shadow-[0_28px_60px_rgba(34,9,44,0.18)] border border-[#22092C]/10 bg-[#FAF7F2] select-none"
      >
        {/* Responsive WebP/PNG Photo Layer with Smooth Parallax Zoom */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <Image
            src={photo.imageWebp || photo.image}
            alt={photo.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-108 transition-transform duration-700 ease-[0.16,1,0.3,1]"
          />
        </div>

        {/* Cinematic Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#22092C]/85 via-transparent to-black/20 pointer-events-none opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

        {/* Top Floating Badge */}
        <div className="relative z-10 p-5 flex items-center justify-between">
          <span className="px-3 py-1 rounded-full bg-[#FAF7F2]/90 backdrop-blur-md text-[#22092C] font-mono text-[9px] uppercase tracking-[0.2em] font-bold shadow-sm">
            {photo.category}
          </span>
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#FAF7F2]/80 bg-black/40 px-2.5 py-0.5 rounded-full backdrop-blur-sm">
            {photo.year}
          </span>
        </div>

        {/* Hover Reveal: View Case Study Overlay */}
        <motion.div
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.88,
          }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-20"
        >
          <div className="px-6 py-3 rounded-full bg-[#FAF7F2] text-[#22092C] shadow-[0_12px_32px_rgba(0,0,0,0.3)] flex items-center gap-2.5 border border-white">
            <span className="font-syne text-[11px] uppercase tracking-[0.2em] font-bold">
              View Case Study
            </span>
            <span className="w-5 h-5 rounded-full bg-[#22092C] text-[#FAF7F2] flex items-center justify-center text-[10px] font-bold">
              &rarr;
            </span>
          </div>
        </motion.div>

        {/* Bottom Metadata */}
        <div className="relative z-10 p-5 mt-auto flex flex-col gap-1 transform group-hover:translate-y-[-2px] transition-transform duration-300">
          <span className="text-[10px] font-sans uppercase tracking-[0.22em] text-[#C7BBD0] font-semibold">
            {photo.client}
          </span>
          <h3 className="font-syne text-lg sm:text-xl font-bold text-[#FAF7F2] tracking-tight leading-snug">
            {photo.title}
          </h3>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function ZigzagGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <section
      id="photography"
      className="py-28 sm:py-36 relative overflow-hidden bg-[#FAF7F2]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Masked Line-by-Line Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="nord-pill px-4 py-1.5 rounded-full inline-flex items-center gap-2.5 mb-5"
            >
              <span className="w-2 h-2 rounded-full bg-[#22092C]" />
              <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#22092C]/80">
                02 &mdash; Commercial Photography & Stills
              </span>
            </motion.div>

            <div className="mask-line-container">
              <motion.h2
                initial={{ y: "115%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
                className="font-syne text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#22092C] tracking-tight leading-[1.05] uppercase"
              >
                TACTILE CULINARY
              </motion.h2>
            </div>

            <div className="mask-line-container mt-1">
              <motion.h2
                initial={{ y: "115%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.95, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-syne text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#22092C]/40 tracking-tight leading-[1.05] uppercase"
              >
                &amp; BRAND STILLS
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-6 text-sm sm:text-base text-[#22092C]/75 max-w-xl leading-relaxed font-normal"
            >
              Ultra-high-resolution commercial stills calibrated for gastronomy menus, luxury billboards, and sensory editorial storytelling.
            </motion.p>
          </div>

          <div className="hidden sm:block text-right">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#22092C]/50 block">
              [ 08 ARCHIVED STILLS ]
            </span>
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#22092C] mt-1 block">
              4K MASTER RESOLUTION
            </span>
          </div>
        </div>

        {/* Gallery Grid with Parallax and Skew Interaction */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {photoWorks.map((photo, index) => (
            <ParallaxPhotoCard
              key={photo.id}
              photo={photo}
              index={index}
              onSelect={(item) => setSelectedPhoto(item)}
            />
          ))}
        </div>
      </div>

      {/* Fullscreen Photo Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-[1050] bg-[#16041D]/90 backdrop-blur-2xl flex items-center justify-center p-6 sm:p-12 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full bg-[#FAF7F2] rounded-3xl overflow-hidden shadow-2xl border border-[#22092C]/20"
            >
              <div className="relative aspect-[4/5] sm:aspect-[16/11] w-full">
                <Image
                  src={selectedPhoto.imageWebp || selectedPhoto.image}
                  alt={selectedPhoto.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 sm:p-8 flex flex-col gap-2 bg-[#FAF7F2]">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-[#22092C]/60 font-mono">
                  <span>{selectedPhoto.client}</span>
                  <span>{selectedPhoto.resolution}</span>
                </div>
                <h3 className="font-syne text-2xl font-bold text-[#22092C]">
                  {selectedPhoto.title}
                </h3>
                <p className="text-sm text-[#22092C]/75 leading-relaxed mt-1">
                  {selectedPhoto.desc}
                </p>

                <div className="pt-4 mt-2 border-t border-[#22092C]/10 flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#22092C]/60">
                    Nord Media House Master Archive
                  </span>
                  <button
                    onClick={() => setSelectedPhoto(null)}
                    className="px-5 py-2 rounded-full bg-[#22092C] text-[#FAF7F2] text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#3D1550] transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
