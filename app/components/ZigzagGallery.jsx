"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
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
        onClick={() => onSelect(index)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={{
          skewX: isHovered ? (index % 2 === 0 ? -1.5 : 1.5) : 0,
          skewY: isHovered ? (index % 2 === 0 ? 1 : -1) : 0,
          scale: isHovered ? 1.02 : 1,
          y: isHovered ? -6 : 0,
        }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="group relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden nord-glass cursor-pointer shadow-[0_16px_40px_rgba(34,9,44,0.08)] hover:shadow-[0_28px_60px_rgba(34,9,44,0.18)] border border-[#22092C]/10 bg-[#FAF7F2] select-none"
      >
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <Image
            src={photo.imageWebp || photo.image}
            alt={photo.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-108 transition-transform duration-700 ease-[0.16,1,0.3,1]"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-[#22092C]/85 via-transparent to-black/20 pointer-events-none opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

        <div className="relative z-10 p-5 flex items-center justify-between">
          <span className="px-3 py-1 rounded-full bg-[#FAF7F2]/90 backdrop-blur-md text-[#22092C] font-mono text-[9px] uppercase tracking-[0.2em] font-bold shadow-sm">
            {photo.category}
          </span>
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#FAF7F2]/80 bg-black/40 px-2.5 py-0.5 rounded-full backdrop-blur-sm">
            {photo.year}
          </span>
        </div>

        {/* Hover Center Indicator */}
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
              Inspect Still
            </span>
            <span className="w-5 h-5 rounded-full bg-[#22092C] text-[#FAF7F2] flex items-center justify-center text-[10px] font-bold">
              &rarr;
            </span>
          </div>
        </motion.div>

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
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);
  const [swipeDirection, setSwipeDirection] = useState(0);

  const activePhoto =
    selectedPhotoIndex !== null ? photoWorks[selectedPhotoIndex] : null;

  const handleNext = useCallback(() => {
    setSwipeDirection(1);
    setSelectedPhotoIndex((prev) =>
      prev === null ? 0 : (prev + 1) % photoWorks.length
    );
  }, []);

  const handlePrev = useCallback(() => {
    setSwipeDirection(-1);
    setSelectedPhotoIndex((prev) =>
      prev === null
        ? 0
        : (prev - 1 + photoWorks.length) % photoWorks.length
    );
  }, []);

  // Keyboard navigation: ArrowLeft, ArrowRight, Escape
  useEffect(() => {
    if (selectedPhotoIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedPhotoIndex(null);
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPhotoIndex, handleNext, handlePrev]);

  return (
    <section
      id="photography"
      className="py-28 sm:py-36 relative overflow-hidden bg-[#FAF7F2]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
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
              Ultra-high-resolution commercial stills calibrated for gastronomy menus, luxury billboards, and sensory editorial storytelling. Click any still to inspect with arrow or swipe navigation.
            </motion.p>
          </div>

          <div className="text-left md:text-right">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#22092C]/50 block">
              [ 08 ARCHIVED STILLS ]
            </span>
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#22092C] mt-1 block">
              SWIPE / ARROW NAV ENABLED
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {photoWorks.map((photo, index) => (
            <ParallaxPhotoCard
              key={photo.id}
              photo={photo}
              index={index}
              onSelect={(idx) => setSelectedPhotoIndex(idx)}
            />
          ))}
        </div>
      </div>

      {/* ========================================================
          SWIPEABLE FULLSCREEN PHOTO MODAL WITH ARROWS & DRAG
          ======================================================== */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhotoIndex(null)}
            className="fixed inset-0 z-[1050] bg-[#16041D]/92 backdrop-blur-2xl flex items-center justify-center p-3 sm:p-8 select-none"
          >
            {/* Top Navigation & Status Bar */}
            <div className="absolute top-4 sm:top-6 inset-x-4 sm:inset-x-8 flex items-center justify-between z-40 pointer-events-none">
              <div className="flex items-center gap-3 pointer-events-auto">
                <span className="nord-pill px-4 py-1.5 rounded-full text-xs font-mono font-bold text-[#FAF7F2] bg-white/10 border-white/20 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C7BBD0] animate-pulse" />
                  <span>STILL ARCHIVE</span>
                </span>
                <span className="text-xs text-white/70 tracking-widest font-mono">
                  0{selectedPhotoIndex + 1} / 0{photoWorks.length}
                </span>
              </div>

              <div className="flex items-center gap-3 pointer-events-auto">
                <span className="text-[11px] font-mono uppercase tracking-widest text-white/50 hidden md:inline">
                  Swipe or use &larr; &rarr; keys
                </span>
                <button
                  onClick={() => setSelectedPhotoIndex(null)}
                  className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-all backdrop-blur-md border border-white/20 cursor-pointer"
                  title="Close (Esc)"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Previous Arrow Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-3 sm:left-6 z-40 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-all backdrop-blur-md border border-white/20 shadow-2xl cursor-pointer hover:scale-105 active:scale-95"
              aria-label="Previous Still"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Next Arrow Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-3 sm:right-6 z-40 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-all backdrop-blur-md border border-white/20 shadow-2xl cursor-pointer hover:scale-105 active:scale-95"
              aria-label="Next Still"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Swipeable Photo Container with Drag Physics */}
            <motion.div
              key={activePhoto.id}
              initial={{
                opacity: 0,
                x: swipeDirection > 0 ? 80 : -80,
                scale: 0.96,
              }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{
                opacity: 0,
                x: swipeDirection > 0 ? -80 : 80,
                scale: 0.96,
              }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.3}
              onDragEnd={(e, { offset, velocity }) => {
                if (offset.x > 60 || velocity.x > 400) {
                  handlePrev();
                } else if (offset.x < -60 || velocity.x < -400) {
                  handleNext();
                }
              }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full bg-[#FAF7F2] rounded-[2.5rem] overflow-hidden shadow-2xl border border-[#22092C]/20 flex flex-col cursor-grab active:cursor-grabbing"
            >
              {/* Photo Viewport */}
              <div className="relative aspect-[4/5] sm:aspect-[16/11] max-h-[60vh] w-full bg-[#16041D]">
                <Image
                  src={activePhoto.imageWebp || activePhoto.image}
                  alt={activePhoto.title}
                  fill
                  priority
                  draggable={false}
                  className="object-cover"
                />
              </div>

              {/* Detail Drawer */}
              <div className="p-6 sm:p-8 flex flex-col gap-2 bg-[#FAF7F2]">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-[#22092C]/60 font-mono">
                  <span>{activePhoto.client}</span>
                  <span>{activePhoto.resolution}</span>
                </div>
                <h3 className="font-syne text-2xl font-bold text-[#22092C]">
                  {activePhoto.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#22092C]/75 leading-relaxed mt-1">
                  {activePhoto.desc}
                </p>

                {/* Footer Bar with Mini Thumbnails or Quick Buttons */}
                <div className="pt-4 mt-2 border-t border-[#22092C]/10 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    {photoWorks.map((_, dotIdx) => (
                      <button
                        key={dotIdx}
                        onClick={() => {
                          setSwipeDirection(dotIdx > selectedPhotoIndex ? 1 : -1);
                          setSelectedPhotoIndex(dotIdx);
                        }}
                        className={`h-1.5 rounded-full transition-all cursor-pointer ${
                          dotIdx === selectedPhotoIndex
                            ? "w-6 bg-[#22092C]"
                            : "w-1.5 bg-[#22092C]/25 hover:bg-[#22092C]/50"
                        }`}
                        aria-label={`Go to still ${dotIdx + 1}`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={handlePrev}
                      className="px-4 py-2 rounded-full border border-[#22092C]/20 text-[#22092C] text-xs font-mono font-bold hover:bg-[#22092C]/5 transition-colors cursor-pointer"
                    >
                      &larr; Prev
                    </button>
                    <button
                      onClick={handleNext}
                      className="px-4 py-2 rounded-full bg-[#22092C] text-[#FAF7F2] text-xs font-mono font-bold hover:bg-[#3D1550] transition-colors cursor-pointer"
                    >
                      Next &rarr;
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
