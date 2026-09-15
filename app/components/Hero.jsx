"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Magnetic from "./Magnetic";
import DustAssembleHeadline from "./DustAssembleText";
import MetricCounterCard from "./MetricCounterCard";

// Custom animation variants for Awwwards-style masked line reveals
const lineMaskContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.15,
    },
  },
};

const maskLineChild = {
  hidden: { y: "115%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 1.15,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Hero() {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isStarHovered, setIsStarHovered] = useState(false);

  // Parallax on scroll using Framer Motion
  const { scrollY } = useScroll();
  const rawYParallax = useTransform(scrollY, [0, 800], [0, 160]);
  const yParallax = useSpring(rawYParallax, { damping: 20, stiffness: 100 });

  // Mouse tilt tracking for the central compass star
  useEffect(() => {
    const handlePointerMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  const metrics = [
    { value: "4.8x", targetNum: 4.8, suffix: "x", decimals: 1, label: "Average ROAS", detail: "Meta Ads & Paid Growth" },
    { value: "14M+", targetNum: 14, suffix: "M+", decimals: 0, label: "Organic Views", detail: "High-Retention Reels" },
    { value: "100%", targetNum: 100, suffix: "%", decimals: 0, label: "Partner Retention", detail: "Active Retainers" },
    { value: "0° N", isCompass: true, label: "True Bearing", detail: "Directional Strategy" },
  ];

  return (
    <section
      ref={containerRef}
      className="relative w-full flex flex-col pt-24 sm:pt-28 pb-16 px-6 sm:px-10 lg:px-16 overflow-hidden bg-[#FAF7F2] select-none"
    >
      {/* Ambient background lighting with the logo's deep plum hue */}
      <div 
        aria-hidden="true"
        className="pointer-events-none absolute top-[-10%] left-1/2 -translate-x-1/2 w-[720px] h-[520px] bg-gradient-to-b from-[#3D1550]/10 via-[#22092C]/5 to-transparent rounded-full blur-[140px]"
      />
      <div 
        aria-hidden="true"
        className="pointer-events-none absolute bottom-1/4 -right-24 w-[480px] h-[480px] bg-[#8B7CA8]/10 rounded-full blur-[160px]"
      />

      {/* Top Editorial Status & Coordinate Bar */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#22092C]/10 pb-4 text-[11px] uppercase tracking-[0.22em] text-[#22092C]/70"
      >
        <div className="flex items-center gap-3">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3D1550] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22092C]" />
          </span>
          <span className="font-semibold text-[#22092C]">Available For Commissions</span>
          <span className="text-[#22092C]/30">&bull;</span>
          <span className="text-[#22092C]/60">Q2 2026</span>
        </div>

        <div className="flex items-center gap-6 hidden md:flex font-mono text-[10px] tracking-[0.25em] text-[#22092C]/60">
          <span>64°08&apos; N &bull; REYKJAVIK</span>
          <span>&mdash;</span>
          <span>11°00&apos; N &bull; COIMBATORE</span>
        </div>

        <div className="tracking-[0.24em] font-medium text-[10px]">
          DIRECTIONAL CREATIVE STUDIO
        </div>
      </motion.div>

      {/* Main Hero Typography & Brand Anchor */}
      <div className="w-full max-w-7xl mx-auto py-8 sm:py-12 mb-8 sm:mb-12 flex flex-col items-center justify-center text-center relative z-10">
        {/* Category Pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="nord-pill px-5 py-1.5 rounded-full mb-8 inline-flex items-center gap-3.5"
        >
          <span className="text-[10px] sm:text-[11px] font-sans font-bold uppercase tracking-[0.28em] text-[#22092C]">
            Cinematic Reels &bull; Brand Architecture &bull; Paid Media
          </span>
        </motion.div>

        {/* Central Brand Headline: Masked Line Reveal */}
        <motion.div
          variants={lineMaskContainer}
          initial="hidden"
          animate="visible"
          className="w-full flex flex-col items-center justify-center"
        >
          {/* Masked Line 1: NORD Master Wordmark with 8-Point Compass Star */}
          <div className="mask-line-container overflow-hidden py-1">
            <motion.div
              variants={maskLineChild}
              className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6"
            >
              {/* N */}
              <span className="font-serif text-7xl sm:text-9xl md:text-[12rem] lg:text-[15rem] font-bold tracking-tight text-[#22092C] leading-none select-none">
                N
              </span>

              {/* The Iconic 8-Point Compass Star ("O") with Mouse Tilt & Magnetic Interaction */}
              <motion.div
                onMouseEnter={() => setIsStarHovered(true)}
                onMouseLeave={() => setIsStarHovered(false)}
                animate={{
                  rotate: isStarHovered ? 180 : mousePosition.x * 24,
                  scale: isStarHovered ? 1.08 : 1,
                }}
                transition={{
                  rotate: { duration: isStarHovered ? 0.8 : 0.4, ease: [0.16, 1, 0.3, 1] },
                  scale: { duration: 0.3 },
                }}
                className="relative w-16 h-16 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 flex items-center justify-center cursor-pointer my-auto"
                data-cursor-label="0° N"
              >
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full drop-shadow-md overflow-visible"
                >
                  {/* Outer circle rings */}
                  <circle
                    cx="50"
                    cy="50"
                    r="46"
                    stroke="#22092C"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.85"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="38"
                    stroke="#22092C"
                    strokeWidth="1"
                    strokeDasharray="3 4"
                    fill="none"
                    opacity="0.5"
                  />

                  {/* 8-Point Compass Star Geometry (Exact Logo DNA) */}
                  {/* Primary North Spike */}
                  <polygon
                    points="50,-8 55,34 50,44 45,34"
                    fill="#22092C"
                  />
                  {/* Primary South Spike */}
                  <polygon
                    points="50,108 55,66 50,56 45,66"
                    fill="#22092C"
                  />
                  {/* Primary East Spike */}
                  <polygon
                    points="108,50 66,55 56,50 66,45"
                    fill="#22092C"
                  />
                  {/* Primary West Spike */}
                  <polygon
                    points="-8,50 34,55 44,50 34,45"
                    fill="#22092C"
                  />

                  {/* Diagonal Points */}
                  <polygon
                    points="82,18 60,42 50,50 56,38"
                    fill="#22092C"
                    opacity="0.85"
                  />
                  <polygon
                    points="82,82 60,58 50,50 56,62"
                    fill="#22092C"
                    opacity="0.85"
                  />
                  <polygon
                    points="18,82 40,58 50,50 44,62"
                    fill="#22092C"
                    opacity="0.85"
                  />
                  <polygon
                    points="18,18 40,42 50,50 44,38"
                    fill="#22092C"
                    opacity="0.85"
                  />

                  {/* Center precision aperture */}
                  <circle cx="50" cy="50" r="3.5" fill="#FAF7F2" />
                </svg>
              </motion.div>

              {/* R */}
              <span className="font-serif text-7xl sm:text-9xl md:text-[12rem] lg:text-[15rem] font-bold tracking-tight text-[#22092C] leading-none select-none">
                R
              </span>

              {/* D */}
              <span className="font-serif text-7xl sm:text-9xl md:text-[12rem] lg:text-[15rem] font-bold tracking-tight text-[#22092C] leading-none select-none">
                D
              </span>
            </motion.div>
          </div>

          {/* Sub-Mark: MEDIA HOUSE (Extreme tracking from logo) */}
          <div className="mask-line-container overflow-hidden pt-1 pb-4">
            <motion.p
              variants={maskLineChild}
              className="text-xs sm:text-base md:text-xl font-sans font-semibold uppercase tracking-[0.55em] sm:tracking-[0.72em] text-[#22092C] pl-2 sm:pl-3"
            >
              MEDIA HOUSE
            </motion.p>
          </div>

          {/* Scroll-Driven Dust Particle Headline Assembly */}
          <DustAssembleHeadline />
        </motion.div>

        {/* Narrative Manifesto Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 text-[#22092C]/75 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed font-normal"
        >
          Nord Media House is a directional creative studio. We unite high-craft cinematography with algorithmic precision &mdash; crafting viral short-form reels, bespoke brand identities, and high-performance Meta Ad architectures.
        </motion.p>

        {/* Physics-driven Magnetic Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 mb-4 flex flex-wrap items-center justify-center gap-5 relative z-20"
        >
          <Magnetic strength={0.25}>
            <a
              href="#works"
              data-cursor-label="VIEW"
              style={{ backgroundColor: "#22092C", color: "#FAF7F2" }}
              className="group relative inline-flex items-center gap-3.5 px-8 py-4 rounded-full text-xs uppercase tracking-[0.22em] font-bold shadow-[0_16px_36px_rgba(34,9,44,0.25)] hover:shadow-[0_22px_48px_rgba(34,9,44,0.4)] transition-all duration-300 cursor-pointer"
            >
              <span className="relative z-10">Explore Selected Works</span>
              <span className="relative z-10 w-2 h-2 rounded-full bg-[#FAF7F2] group-hover:scale-150 transition-transform duration-300" />
            </a>
          </Magnetic>

          <Magnetic strength={0.25}>
            <a
              href="#contact"
              data-cursor-hover="true"
              style={{ backgroundColor: "rgba(250, 247, 242, 0.9)", color: "#22092C" }}
              className="nord-glass inline-flex items-center gap-3 px-8 py-4 rounded-full text-xs uppercase tracking-[0.22em] font-bold border border-[#22092C]/20 hover:border-[#22092C]/50 transition-all duration-300 cursor-pointer shadow-sm"
            >
              <span>Initiate Commission</span>
              <span className="text-[#3D1550] text-sm">&rarr;</span>
            </a>
          </Magnetic>
        </motion.div>
      </div>

      {/* Editorial Credibility Deck / Metric Pillars */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-7xl mx-auto pt-10 sm:pt-14 mt-8 border-t border-[#22092C]/10 relative z-10"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((item, index) => (
            <MetricCounterCard key={index} item={item} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
