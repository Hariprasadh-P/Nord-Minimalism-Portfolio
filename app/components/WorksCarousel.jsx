"use client";
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const ReelsModal = dynamic(() => import('./ReelsModal'), {
  ssr: false,
  loading: () => null
});

export const worksData = [
  {
    id: 1,
    title: "Studio Commercial Shoot",
    client: "Gastronomy Collective",
    category: "Commercial Reel",
    aspectRatio: "9/16",
    orientation: "portrait",
    views: "67.3K",
    likes: "5.8K",
    duration: "0:34",
    video: "/Works/shoot.mp4",
    sound: "Culinary Beats • Studio Audio Master",
    metric: "4.8x Meta Ads ROAS",
    description: "Full production commercial shoot capturing sensory culinary textures, dynamic lighting, and cinematic table staging."
  },
  {
    id: 2,
    title: "Behind The Scenes Production",
    client: "Nord Media House",
    category: "Production",
    aspectRatio: "16/9",
    orientation: "landscape",
    views: "39.1K",
    likes: "3.2K",
    duration: "0:21",
    video: "/Works/IMG_6369.MOV",
    sound: "Studio Sessions • Ambient Tape",
    metric: "4K Cinema Master",
    description: "Raw on-set motion, directional camera choreography, and widescreen cinematic capture from our high-fashion commercial shoots."
  }
];

// Subcomponent for Video Card with In-View Scroll Autoplay, Creative Subtle Tilt, and Zero Fog
const VideoCard = React.memo(function VideoCard({ work, index, isEven, onOpenModal }) {
  const cardRef = useRef(null);
  const videoRef = useRef(null);

  // Autoplay video when in view while scrolling
  React.useEffect(() => {
    const video = videoRef.current;
    const card = cardRef.current;
    if (!video || !card) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const playPromise = video.play();
            if (playPromise !== undefined) {
              playPromise.catch(() => {});
            }
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(card);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Slight creative tilt: -2.2deg for even, +2.2deg for odd; straightens smoothly on hover
  const tiltClass = isEven ? '-rotate-[2.2deg]' : 'rotate-[2.2deg]';

  // Dynamic aspect ratio according to original video dimensions (no sides cut off!)
  const isLandscape = work.aspectRatio === '16/9';
  const aspectClass = isLandscape
    ? 'w-full max-w-[540px] sm:max-w-[620px] aspect-[16/9]'
    : 'w-[280px] sm:w-[325px] aspect-[9/16]';

  return (
    <div className={`w-full ${isLandscape ? 'lg:w-3/5' : 'lg:w-1/2'} flex justify-center py-2`}>
      <div
        ref={cardRef}
        onClick={onOpenModal}
        onMouseEnter={() => {
          if (videoRef.current) {
            videoRef.current.play().catch(() => {});
          }
        }}
        className={`group relative ${aspectClass} rounded-[2.5rem] overflow-hidden glass-card p-6 flex flex-col justify-between cursor-pointer shadow-[0_20px_50px_rgba(44,36,59,0.14)] hover:shadow-[0_32px_75px_rgba(139,124,168,0.3)] transition-all duration-500 hover:-translate-y-2 hover:rotate-0 hover:scale-[1.025] transform-gpu border border-white/80 bg-stone-900/10 ${tiltClass}`}
      >
        {/* Crystal-Clear Live Video Preview matching original aspect ratio without side cutting */}
        <video
          ref={videoRef}
          src={work.video}
          preload="metadata"
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-contain sm:object-cover -z-10 group-hover:scale-105 transition-transform duration-700 brightness-100 contrast-[1.02]"
        />

        {/* Localized Bottom Gradient Only (Protects Text Legibility Without Dulling the Video) */}
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />

        {/* Top Header Pills */}
        <div className="relative z-10 flex items-center justify-between">
          <span className="glass-pill px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-white bg-black/45 border-white/20 backdrop-blur-md">
            {work.category}
          </span>
          
          <div className="flex items-center gap-2">
            <span className="glass-pill px-2 py-0.5 rounded-full text-[9px] font-mono tracking-wider font-semibold text-white/90 bg-white/15 border-white/25">
              {work.aspectRatio}
            </span>
            <span className="glass-pill px-2.5 py-1 rounded-full text-[10px] tracking-wider font-semibold text-white/95 bg-black/45 border-white/20 backdrop-blur-md flex items-center gap-1.5 font-mono">
              <svg className="w-3 h-3 text-[#D6C7EB]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
              </svg>
              {work.views}
            </span>
          </div>
        </div>

        {/* Center Interactive Reel Indicator on Hover */}
        <div className="relative z-10 my-auto flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-md border border-white/70 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
            <svg className="w-7 h-7 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>

        {/* Bottom Info inside Card */}
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-1 text-white/80 text-[10px] uppercase tracking-[0.2em] font-semibold">
            <span>{work.client}</span>
            <span>•</span>
            <span>{work.duration}</span>
            <span>•</span>
            <span className="text-[#D6C7EB]">{work.orientation.toUpperCase()}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-white leading-snug drop-shadow-md">
            {work.title}
          </h3>
        </div>
      </div>
    </div>
  );
});

export default function WorksCarousel() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [displayLayout, setDisplayLayout] = useState('zigzag'); // 'zigzag' | 'horizontal'
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeReelIndex, setActiveReelIndex] = useState(0);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const carouselRef = useRef(null);

  const categories = ["All", ...Array.from(new Set(worksData.map(item => item.category)))];

  const filteredWorks = selectedCategory === "All" 
    ? worksData 
    : worksData.filter(item => item.category === selectedCategory);

  const currentReel = hoveredIndex !== null ? hoveredIndex : focusedIndex;

  const handleOpenModal = (index) => {
    setActiveReelIndex(index);
    setIsModalOpen(true);
  };

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handlePrevClick = () => {
    setFocusedIndex((prev) => Math.max(0, prev - 1));
    scroll('left');
  };

  const handleNextClick = () => {
    setFocusedIndex((prev) => Math.min(filteredWorks.length - 1, prev + 1));
    scroll('right');
  };

  return (
    <section id="works" className="py-24 sm:py-32 relative overflow-hidden bg-[#FAF8FF]">
      {/* Background soft ambient accents */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#8B7CA8]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-2/3 right-0 w-96 h-96 bg-[#BBA9D0]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="glass-pill px-4 py-1.5 rounded-full inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#8B7CA8]" />
              <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#1F1929]/70">
                01 &mdash; Selected Video Works
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#1F1929] leading-tight">
              Curated Short-Form<br />
              <span className="text-[#8B7CA8] font-normal italic">Zigzag Video Stream</span>
            </h2>
            <p className="mt-3 text-sm text-[#1F1929]/70 max-w-xl">
              Explore our video campaigns along an articulated zigzag path &mdash; designed to let you discover visual direction, hook pacing, and short-form velocity.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Display Layout Switcher */}
            <div className="glass-card p-1 rounded-full inline-flex items-center border-white/70 bg-white/70 shadow-sm">
              <button
                onClick={() => setDisplayLayout('zigzag')}
                className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  displayLayout === 'zigzag'
                    ? 'bg-[#1F1929] text-white shadow-sm'
                    : 'text-[#1F1929]/60 hover:text-[#1F1929]'
                }`}
              >
                Zigzag Stream
              </button>
              <button
                onClick={() => setDisplayLayout('horizontal')}
                className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  displayLayout === 'horizontal'
                    ? 'bg-[#1F1929] text-white shadow-sm'
                    : 'text-[#1F1929]/60 hover:text-[#1F1929]'
                }`}
              >
                3D Reel Scroller
              </button>
            </div>

            {/* Launch Immersive 3D Stream CTA */}
            <button
              onClick={() => handleOpenModal(0)}
              className="px-5 py-2.5 rounded-full bg-[#1F1929] text-white text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#8B7CA8] transition-all flex items-center gap-2 shadow-sm"
            >
              <svg className="w-4 h-4 text-[#BBA9D0]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
              </svg>
              <span>Watch 3D Stream</span>
            </button>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setFocusedIndex(0);
              }}
              className={`px-4 py-2 rounded-full text-xs uppercase tracking-[0.16em] font-semibold transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-[#1F1929] text-white shadow-md'
                  : 'glass-card text-[#1F1929]/70 hover:text-[#1F1929] hover:bg-white/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

      </div>

      {/* ========================================================
          MODE 1: EXPLORATORY ZIGZAG STREAM (VIDEOS)
          ======================================================== */}
{displayLayout === 'zigzag' && (
  <div className="relative max-w-6xl mx-auto px-6 py-4">
    {/* Center Dotted Zigzag Directional Track Line */}
    <div className="absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 border-r-2 border-dashed border-[#8B7CA8]/25 hidden lg:block pointer-events-none" />

    <div className="flex flex-col gap-16 md:gap-24 relative z-10">
      {filteredWorks.map((work, index) => {
        const isEven = index % 2 === 0;

        return (
          <motion.div
            key={work.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, delay: 0.05 }}
            className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
              isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
            }`}
          >
            {/* 9:16 In-View Autoplay Video Card with Slight Creative Tilt */}
            <VideoCard
              work={work}
              index={index}
              isEven={isEven}
              onOpenModal={() => handleOpenModal(index)}
            />

            {/* Narrative Details Column */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center px-4">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-sm font-mono text-[#8B7CA8] font-bold">
                  // 0{index + 1}
                </span>
                <span className="glass-pill px-3 py-0.5 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-[#1F1929]/80 bg-white">
                  {work.category}
                </span>
                <span className="text-xs font-mono text-[#1F1929]/50">
                  {work.duration}
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#1F1929] mb-3 leading-tight">
                {work.title}
              </h3>

              <p className="text-sm sm:text-base text-[#1F1929]/75 leading-relaxed font-sans mb-6">
                {work.description}
              </p>

              {/* Meta Highlights & Sound */}
              <div className="space-y-3 pt-4 border-t border-[#1F1929]/10 mb-6 text-xs text-[#1F1929]/70">
                <div className="flex items-center gap-2 text-[#8B7CA8] font-semibold">
                  <svg className="w-4 h-4 text-[#8B7CA8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span>Performance Benchmark: <strong className="text-[#1F1929]">{work.metric}</strong></span>
                </div>

                <div className="flex items-center gap-2 text-[#1F1929]/70">
                  <svg className="w-4 h-4 text-[#8B7CA8] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                  </svg>
                  <span className="truncate">{work.sound}</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="flex items-center gap-4">
                <button
                  onClick={() => handleOpenModal(index)}
                  className="px-6 py-3 rounded-full bg-[#1F1929] text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#8B7CA8] transition-all flex items-center gap-2 shadow-md hover:scale-105 active:scale-95"
                >
                  <span>Watch in 3D Reel Viewer</span>
                  <span>&rarr;</span>
                </button>

                <span className="text-xs text-[#1F1929]/50 font-mono">
                  {work.views} views
                </span>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  </div>
)}

      {/* ========================================================
          MODE 2: 3D HORIZONTAL RAIL SCROLLER
          ======================================================== */}
      {displayLayout === 'horizontal' && (
        <div className="relative">
          <div className="flex justify-end max-w-7xl mx-auto px-6 mb-4">
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrevClick}
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-[#1F1929] hover:bg-[#1F1929] hover:text-white transition-all shadow-sm"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={handleNextClick}
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-[#1F1929] hover:bg-[#1F1929] hover:text-white transition-all shadow-sm"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          <div 
            ref={carouselRef}
            className="flex items-center gap-6 overflow-x-auto px-6 max-w-7xl mx-auto py-8 no-scrollbar scroll-smooth cursor-grab active:cursor-grabbing"
          >
            {filteredWorks.map((work, index) => {
              const isCurrent = index === currentReel;
              const isNeighbor = Math.abs(index - currentReel) === 1;

              let blurStyle = "blur(0px)";
              let scaleStyle = 1.06;
              let opacityStyle = 1;
              let zIndexStyle = 30;

              if (isCurrent) {
                blurStyle = "blur(0px)";
                scaleStyle = 1.06;
                opacityStyle = 1;
                zIndexStyle = 30;
              } else if (isNeighbor) {
                blurStyle = "blur(4px)";
                scaleStyle = 0.95;
                opacityStyle = 0.8;
                zIndexStyle = 20;
              } else {
                blurStyle = "blur(7px)";
                scaleStyle = 0.90;
                opacityStyle = 0.55;
                zIndexStyle = 10;
              }

              const isLandscape = work.aspectRatio === '16/9';

              return (
                <motion.div
                  key={work.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: opacityStyle, y: 0 }}
                  viewport={{ once: true }}
                  animate={{ 
                    filter: blurStyle,
                    scale: scaleStyle,
                    opacity: opacityStyle,
                    zIndex: zIndexStyle
                  }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => {
                    setFocusedIndex(index);
                    handleOpenModal(index);
                  }}
                  onMouseEnter={(e) => {
                    setHoveredIndex(index);
                    const video = e.currentTarget.querySelector('video');
                    if (video) {
                      video.currentTime = 0;
                      video.play().catch(() => {});
                    }
                  }}
                  onMouseLeave={(e) => {
                    setHoveredIndex(null);
                    const video = e.currentTarget.querySelector('video');
                    if (video) video.pause();
                  }}
                  className={`group relative flex-shrink-0 ${
                    isLandscape ? 'w-[360px] sm:w-[480px] aspect-[16/9]' : 'w-[280px] sm:w-[320px] aspect-[9/16]'
                  } rounded-[2.5rem] overflow-hidden glass-card p-6 flex flex-col justify-between cursor-pointer transition-all duration-500 ${
                    isCurrent 
                      ? 'border-[#8B7CA8]/50 ring-2 ring-[#8B7CA8]/30 shadow-[0_24px_60px_rgba(44,36,59,0.22)]' 
                      : 'border-white/50 shadow-[0_12px_30px_rgba(31,25,41,0.08)]'
                  }`}
                >
                  <video
                    src={work.video}
                    preload="metadata"
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-contain sm:object-cover -z-10 group-hover:scale-105 transition-transform duration-700 brightness-100 contrast-[1.02]"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />
                  
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="glass-pill px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-white bg-black/40 border-white/20 backdrop-blur-md">
                      {work.category}
                    </span>
                    <span className="glass-pill px-2.5 py-1 rounded-full text-[10px] tracking-wider font-semibold text-white/90 bg-black/40 border-white/20 backdrop-blur-md font-mono">
                      {work.views}
                    </span>
                  </div>

                  <div className="relative z-10 my-auto flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-14 h-14 rounded-full bg-white/25 backdrop-blur-md border border-white/50 text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-1.5 text-white/70 text-[11px] uppercase tracking-[0.16em]">
                      <span>{work.client}</span>
                      <span>•</span>
                      <span>{work.duration}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-white leading-snug drop-shadow-md">
                      {work.title}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      )}

      {/* Interactive 3D Reels Modal */}
      <ReelsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        works={filteredWorks}
        activeIndex={activeReelIndex}
        setActiveIndex={setActiveReelIndex}
      />
    </section>
  );
}
