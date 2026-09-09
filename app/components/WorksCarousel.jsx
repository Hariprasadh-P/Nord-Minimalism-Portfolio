"use client";
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import ReelsModal from './ReelsModal';

export const worksData = [
  {
    id: 1,
    title: "Cinematic Brand Film",
    client: "Nord Studio",
    category: "Commercial Reel",
    views: "42.8K",
    likes: "3.4K",
    duration: "0:28",
    video: "/assets/works/web_1788119681753-5961-165_hot_04_2.mp4",
    sound: "Nord Audio • Horizon Cinematic Theme",
    description: "Atmospheric brand narrative combining Scandinavian minimalism with rich color grading and high-retention pacing."
  },
  {
    id: 2,
    title: "Studio Commercial Shoot",
    client: "Gastronomy Collective",
    category: "Production",
    views: "67.3K",
    likes: "5.8K",
    duration: "0:34",
    video: "/Works/shoot.mp4",
    sound: "Culinary Beats • Studio Audio Master",
    description: "Full production commercial shoot capturing sensory culinary textures, dynamic lighting, and cinematic table staging."
  },
  {
    id: 3,
    title: "Brand Motion & Performance",
    client: "Directional Growth",
    category: "Motion Hook",
    views: "58.2K",
    likes: "4.9K",
    duration: "0:15",
    video: "/assets/works/web_1788119600904-8108-C0985.mp4",
    sound: "Trending Bassline • Minimalist Beat",
    description: "Rapid-fire visual hooks engineered for Instagram algorithm velocity and maximum watch-through rate."
  },
  {
    id: 4,
    title: "Behind The Scenes Production",
    client: "Nord Media House",
    category: "Production",
    views: "39.1K",
    likes: "3.2K",
    duration: "0:21",
    video: "/Works/IMG_6369.MOV",
    sound: "Studio Sessions • Ambient Tape",
    description: "Raw on-set motion and directional camera choreography from our high-fashion and commercial shoots."
  },
  {
    id: 5,
    title: "Aesthetic Commercial Film",
    client: "Luminary Concept",
    category: "Commercial Reel",
    views: "36.4K",
    likes: "2.8K",
    duration: "0:32",
    video: "/assets/works/web_1788016785248-688-C0984.mp4",
    sound: "Ambient Chill • Stockholm Waves",
    description: "Tactile product presentation spotlighting craftsmanship, natural lighting, and restrained typography."
  },
  {
    id: 6,
    title: "Visualizing Sound & Rhythm",
    client: "Acoustic Elements",
    category: "Creative Video",
    views: "64.1K",
    likes: "6.2K",
    duration: "0:24",
    video: "/assets/works/web_1788119121437-7013-C0986.mp4",
    sound: "Spatial Synthesizer • Studio Master",
    description: "Audio-reactive typography and geometric motion designed for music launches and modern creative brands."
  },
  {
    id: 7,
    title: "Pattern & Editorial Motion",
    client: "Atelier V",
    category: "Editorial",
    views: "29.7K",
    likes: "2.1K",
    duration: "0:19",
    video: "/assets/works/web_1788118482503-4229-C0986.mp4",
    sound: "Nord Studio • Ambient Tape Loop",
    description: "High-fashion editorial layout transitions designed for carousel and vertical reel storytelling."
  },
  {
    id: 8,
    title: "Selected Projects Reel",
    client: "Nord Media House",
    category: "Showreel",
    views: "89.5K",
    likes: "8.7K",
    duration: "0:45",
    video: "/assets/works/web_1788014576349-7262-C0982.mp4",
    sound: "Original Score • Directional Momentum",
    description: "Annual highlight showreel capturing top-performing short-form video campaigns and client growth milestones."
  },
  {
    id: 9,
    title: "High-Impact Short Reel",
    client: "Kinetic Pulse",
    category: "Motion Hook",
    views: "47.3K",
    likes: "3.9K",
    duration: "0:12",
    video: "/assets/works/web_1788119644325-1614-C0990.mp4",
    sound: "Velocity Beat • Fast Rhythms",
    description: "Sub-15s conversion engine tailored for Meta Ads top-of-funnel testing with 4.8x ROAS benchmark."
  },
  {
    id: 10,
    title: "Editorial Showcase",
    client: "Atelier Nord",
    category: "Editorial",
    views: "52.6K",
    likes: "4.3K",
    duration: "0:22",
    video: "/assets/works/web_1788119635110-6971-C0986.mp4",
    sound: "Minimal Techno • Stockholm Bass",
    description: "High-contrast editorial framing calibrated for digital lookbooks and magazine covers."
  },
  {
    id: 11,
    title: "Brand Campaign Direction",
    client: "Velvet Horizons",
    category: "Commercial Reel",
    views: "44.9K",
    likes: "3.6K",
    duration: "0:26",
    video: "/assets/works/web_1788118469423-3900-C0984.mp4",
    sound: "Nord Acoustics • Horizon Chords",
    description: "Full-spectrum commercial campaign reel engineered for organic viral distribution across Instagram."
  },
  {
    id: 12,
    title: "Product Reveal Reel",
    client: "Form & Function",
    category: "Creative Video",
    views: "38.2K",
    likes: "3.1K",
    duration: "0:18",
    video: "/assets/works/web_1788015687755-4511-C0982.mp4",
    sound: "Nord Studio • Synths & Grain",
    description: "Minimalist lighting sweeps and slow macro reveals spotlighting industrial product design."
  }
];

export default function WorksCarousel() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeReelIndex, setActiveReelIndex] = useState(0);
  const [focusedIndex, setFocusedIndex] = useState(1);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const carouselRef = useRef(null);

  const categories = ["All", "Commercial Reel", "Motion Hook", "Production", "Showreel", "Creative Video", "Editorial"];

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
    <section id="works" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background soft ambient accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#8B7CA8]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#BBA9D0]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="glass-pill px-4 py-1.5 rounded-full inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#8B7CA8]" />
              <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#1F1929]/70">
                01 &mdash; Selected Works
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#1F1929] leading-tight">
              Curated Short-Form<br />
              <span className="text-[#8B7CA8] font-normal italic">Social Velocity</span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {/* Scroll Navigation Arrows */}
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={handlePrevClick}
                className="w-11 h-11 rounded-full glass-card flex items-center justify-center text-[#1F1929] hover:bg-[#1F1929] hover:text-white transition-all shadow-sm"
                aria-label="Previous reel"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={handleNextClick}
                className="w-11 h-11 rounded-full glass-card flex items-center justify-center text-[#1F1929] hover:bg-[#1F1929] hover:text-white transition-all shadow-sm"
                aria-label="Next reel"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Launch Immersive Viewer CTA */}
            <button
              onClick={() => handleOpenModal(currentReel)}
              className="px-5 py-3 rounded-full bg-[#1F1929] text-white text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#8B7CA8] transition-all flex items-center gap-2 shadow-sm"
            >
              <svg className="w-4 h-4 text-[#BBA9D0]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
              </svg>
              <span>Watch Reel Stream</span>
            </button>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
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

      {/* Butter-Smooth Horizontal Reel Scroller with Dynamic Depth-of-Field */}
      <div 
        ref={carouselRef}
        className="flex items-center gap-6 overflow-x-auto px-6 max-w-7xl mx-auto py-8 no-scrollbar scroll-smooth cursor-grab active:cursor-grabbing"
      >
        {filteredWorks.map((work, index) => {
          const isCurrent = index === currentReel;
          const isNeighbor = Math.abs(index - currentReel) === 1; // Front or Back reel

          // Calculate dynamic optical blur, scale & depth
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
              className={`group relative flex-shrink-0 w-[280px] sm:w-[320px] aspect-[9/16] rounded-[2.5rem] overflow-hidden glass-card p-6 flex flex-col justify-between cursor-pointer transition-all duration-500 ${
                isCurrent 
                  ? 'border-[#8B7CA8]/50 ring-2 ring-[#8B7CA8]/30 shadow-[0_24px_60px_rgba(44,36,59,0.22)]' 
                  : 'border-white/50 shadow-[0_12px_30px_rgba(31,25,41,0.08)]'
              }`}
            >
              {/* Background Video (Muted hover preview) */}
              <video
                src={work.video}
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover -z-10 group-hover:scale-105 transition-transform duration-700 brightness-[0.95] group-hover:brightness-100"
              />

              {/* Frost & Vignette Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F1929]/90 via-[#1F1929]/25 to-transparent pointer-events-none transition-opacity duration-300 group-hover:opacity-85" />

              {/* Top Bar Badges */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="glass-pill px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-white bg-black/40 border-white/20 backdrop-blur-md">
                  {work.category}
                </span>
                
                <span className="glass-pill px-2.5 py-1 rounded-full text-[10px] tracking-wider font-semibold text-white/90 bg-black/40 border-white/20 backdrop-blur-md flex items-center gap-1.5">
                  <svg className="w-3 h-3 text-[#BBA9D0]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                  </svg>
                  {work.views}
                </span>
              </div>

              {/* Center Play Button Pill on Hover */}
              <div className="relative z-10 my-auto flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-14 h-14 rounded-full bg-white/25 backdrop-blur-md border border-white/50 text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>

              {/* Bottom Card Content */}
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-1.5 text-white/70 text-[11px] uppercase tracking-[0.16em]">
                  <span>{work.client}</span>
                  <span>•</span>
                  <span>{work.duration}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white leading-snug drop-shadow-md">
                  {work.title}
                </h3>
                <p className="text-xs text-white/70 line-clamp-2 mt-1 font-sans">
                  {work.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Interactive Reels Modal */}
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
