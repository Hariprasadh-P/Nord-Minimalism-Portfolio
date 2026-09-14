"use client";
import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import dynamic from "next/dynamic";

const ReelsModal = dynamic(() => import("./ReelsModal"), {
  ssr: false,
  loading: () => null,
});

export const worksData = [
  {
    id: 1,
    title: "Studio Commercial Shoot",
    client: "Gastronomy Collective",
    category: "Commercial Reel",
    aspectRatio: "9/16",
    orientation: "portrait",
    qualityBadge: "1080P • 60FPS",
    resolution: "1080×1920 Full HD Master",
    views: "67.3K",
    likes: "5.8K",
    duration: "0:34",
    video: "/Works/shoot.mp4",
    sound: "Culinary Beats • Studio Audio Master",
    metric: "4.8x Meta Ads ROAS",
    description:
      "Full production commercial shoot capturing sensory culinary textures, dynamic lighting, and cinematic table staging.",
  },
  {
    id: 2,
    title: "Behind The Scenes Production",
    client: "Nord Media House",
    category: "Production",
    aspectRatio: "16/9",
    orientation: "landscape",
    qualityBadge: "4K UHD • 60FPS",
    resolution: "3840×2160 Cinema Master",
    views: "39.1K",
    likes: "3.2K",
    duration: "0:21",
    video: "/Works/IMG_6369.MOV",
    sound: "Studio Sessions • Ambient Tape",
    metric: "4K Cinema Master",
    description:
      "Raw on-set motion, directional camera choreography, and widescreen cinematic capture from our high-fashion commercial shoots.",
  },
];

// Subcomponent for Video Card: Click to View in Full Reel Format
const ParallaxProjectCard = ({ work, index, onOpenModal }) => {
  const cardRef = useRef(null);
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Parallax translation: card moves slightly slower than scroll speed
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const rawParallax = useTransform(
    scrollYProgress,
    [0, 1],
    index % 2 === 0 ? [-35, 35] : [35, -35]
  );
  const parallaxY = useSpring(rawParallax, { damping: 25, stiffness: 120 });

  // Autoplay video on viewport entry
  React.useEffect(() => {
    const video = videoRef.current;
    const card = cardRef.current;
    if (!video || !card) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(card);
    return () => observer.disconnect();
  }, []);

  const isLandscape = work.aspectRatio === "16/9";

  return (
    <motion.div
      ref={cardRef}
      style={{ y: parallaxY }}
      className={`w-full ${
        isLandscape ? "lg:col-span-12" : "lg:col-span-6"
      } flex justify-center py-4`}
    >
      <motion.div
        onClick={onOpenModal}
        onMouseEnter={() => {
          setIsHovered(true);
          if (videoRef.current) videoRef.current.play().catch(() => {});
        }}
        onMouseLeave={() => setIsHovered(false)}
        animate={{
          skewX: isHovered ? (index % 2 === 0 ? -1.8 : 1.8) : 0,
          skewY: isHovered ? (index % 2 === 0 ? 1.2 : -1.2) : 0,
          scale: isHovered ? 1.025 : 1,
          y: isHovered ? -8 : 0,
        }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`group relative w-full ${
          isLandscape
            ? "max-w-4xl aspect-[16/10] sm:aspect-[16/9]"
            : "max-w-md aspect-[9/16]"
        } rounded-[2.5rem] overflow-hidden nord-glass cursor-pointer shadow-[0_24px_60px_rgba(34,9,44,0.12)] hover:shadow-[0_36px_85px_rgba(34,9,44,0.25)] border border-[#22092C]/15 bg-[#16041D] select-none`}
      >
        {/* Live Loop Video Layer */}
        <video
          ref={videoRef}
          src={work.video}
          preload="auto"
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover -z-10 group-hover:scale-108 transition-transform duration-700 brightness-[0.96] group-hover:brightness-100"
        />

        {/* Ambient Darkened Vignette Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#16041D]/90 via-[#22092C]/30 to-black/20 pointer-events-none group-hover:opacity-85 transition-opacity duration-300" />

        {/* Top Meta Bar */}
        <div className="relative z-10 p-6 sm:p-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="px-3.5 py-1 rounded-full bg-[#FAF7F2]/90 backdrop-blur-md text-[#22092C] font-mono text-[10px] uppercase tracking-[0.2em] font-bold shadow-sm">
              {work.qualityBadge}
            </span>
            <span className="px-3.5 py-1 rounded-full bg-[#22092C]/60 backdrop-blur-md text-[#FAF7F2] font-mono text-[10px] uppercase tracking-[0.2em] font-medium hidden sm:inline-block border border-white/10">
              {work.category}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#FAF7F2]/80 bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">
              [ 0{index + 1} ]
            </span>
          </div>
        </div>

        {/* Hover Center Indicator: "Watch in Reel Format" */}
        <motion.div
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.85,
          }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-20"
        >
          <div className="px-7 py-3.5 rounded-full bg-[#FAF7F2] text-[#22092C] shadow-[0_16px_40px_rgba(0,0,0,0.35)] flex items-center gap-3 border border-white">
            <div className="w-7 h-7 rounded-full bg-[#22092C] text-[#FAF7F2] flex items-center justify-center text-xs shadow-sm">
              <svg className="w-3.5 h-3.5 fill-current ml-0.5" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <span className="font-syne text-xs uppercase tracking-[0.2em] font-extrabold">
              Play Reel
            </span>
          </div>
        </motion.div>

        {/* Bottom Detail Drawer */}
        <div className="relative z-10 p-6 sm:p-8 mt-auto flex flex-col gap-2 transform group-hover:translate-y-[-2px] transition-transform duration-300">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-[#C7BBD0] font-semibold">
            <span>{work.client}</span>
            <span>&bull;</span>
            <span className="text-[#FAF7F2] font-mono">{work.metric}</span>
          </div>

          <h3 className="font-syne text-2xl sm:text-3xl font-extrabold text-[#FAF7F2] tracking-tight leading-tight">
            {work.title}
          </h3>

          <p className="text-xs sm:text-sm text-[#FAF7F2]/75 max-w-xl line-clamp-2 leading-relaxed font-normal mt-1">
            {work.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function WorksCarousel() {
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (index) => {
    setSelectedVideoIndex(index);
    setIsModalOpen(true);
  };

  return (
    <section
      id="works"
      className="py-28 sm:py-36 relative overflow-hidden bg-[#FAF7F2]"
    >
      {/* Ambient background soft plum accents */}
      <div 
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 -left-32 w-96 h-96 bg-[#3D1550]/10 rounded-full blur-[150px]"
      />
      <div 
        aria-hidden="true"
        className="pointer-events-none absolute bottom-1/4 -right-32 w-96 h-96 bg-[#8B7CA8]/10 rounded-full blur-[150px]"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Scroll-Triggered Masked Line Reveal Header (No separate reel button on top) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-24 gap-8">
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
                01 &mdash; Selected Video Works
              </span>
            </motion.div>

            {/* Masked Headline Lines */}
            <div className="mask-line-container">
              <motion.h2
                initial={{ y: "115%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
                className="font-syne text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#22092C] tracking-tight leading-[1.05] uppercase"
              >
                CINEMATIC REEL
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
                SHOWCASE ARCHIVE
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-6 text-sm sm:text-base text-[#22092C]/75 max-w-xl leading-relaxed font-normal"
            >
              Every frame is engineered for high retention and narrative velocity. Click any reel below to launch the vertical reel stream with full audio.
            </motion.p>
          </div>

          <div className="text-left md:text-right">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#22092C]/50 block">
              [ 02 CINEMA MASTERS ]
            </span>
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#22092C] mt-1 block">
              CLICK TO VIEW REEL FORMAT
            </span>
          </div>
        </div>

        {/* Project Cards Grid with Parallax and Hover Skewing */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          {worksData.map((work, index) => (
            <ParallaxProjectCard
              key={work.id}
              work={work}
              index={index}
              onOpenModal={() => handleOpenModal(index)}
            />
          ))}
        </div>
      </div>

      {/* Interactive Reels Modal for High-Fidelity Viewing in Vertical/Cinematic Reel Format */}
      <ReelsModal
        isOpen={isModalOpen}
        works={worksData}
        activeIndex={selectedVideoIndex}
        setActiveIndex={setSelectedVideoIndex}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
