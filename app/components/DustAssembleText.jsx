"use client";
import React, { useRef, useId, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

// Individual Word with converging dust particles and scroll-driven coalescence
const DustWord = ({ word, wordIndex, totalWords, scrollProgress, isMuted = false }) => {
  // Staggered threshold for each word across the scroll range
  const startProgress = (wordIndex / totalWords) * 0.55;
  const endProgress = Math.min(startProgress + 0.35, 1);

  // Scroll transforms for the word glyphs
  const rawOpacity = useTransform(scrollProgress, [0, startProgress, endProgress], [0.12, 0.25, 1]);
  const rawBlur = useTransform(scrollProgress, [0, startProgress, endProgress], [16, 12, 0]);
  const rawY = useTransform(scrollProgress, [0, startProgress, endProgress], [30, 20, 0]);
  const rawScale = useTransform(scrollProgress, [0, startProgress, endProgress], [1.25, 1.15, 1]);
  const rawLetterSpacing = useTransform(
    scrollProgress,
    [0, startProgress, endProgress],
    ["0.16em", "0.08em", "0.01em"]
  );

  const opacity = useSpring(rawOpacity, { damping: 24, stiffness: 120 });
  const blur = useSpring(rawBlur, { damping: 24, stiffness: 120 });
  const y = useSpring(rawY, { damping: 24, stiffness: 120 });
  const scale = useSpring(rawScale, { damping: 24, stiffness: 120 });

  // Generate deterministic dust particles around this word
  const particles = React.useMemo(() => {
    return Array.from({ length: 6 }).map((_, i) => {
      const angle = (i / 6) * Math.PI * 2 + wordIndex;
      const distance = 28 + (i % 3) * 16;
      return {
        id: i,
        startX: Math.cos(angle) * distance,
        startY: Math.sin(angle) * distance,
        size: 2 + (i % 3),
        color: i % 2 === 0 ? "#3D1550" : "#8B7CA8",
        delay: (i % 4) * 0.05,
      };
    });
  }, [wordIndex]);

  return (
    <span className="relative inline-block mx-2.5 sm:mx-4.5 my-1">
      {/* Micro Dust Particles converging into the word as you scroll */}
      {particles.map((p) => {
        // Particles move from scattered start positions toward center (0, 0) and fade out as the word solidifies
        const particleOpacity = useTransform(
          scrollProgress,
          [0, startProgress, endProgress - 0.05, endProgress],
          [0.85, 0.95, 0.35, 0]
        );
        const particleX = useTransform(
          scrollProgress,
          [0, startProgress, endProgress],
          [p.startX, p.startX * 0.5, 0]
        );
        const particleY = useTransform(
          scrollProgress,
          [0, startProgress, endProgress],
          [p.startY, p.startY * 0.5, 0]
        );
        const particleScale = useTransform(
          scrollProgress,
          [0, startProgress, endProgress],
          [1.5, 1.2, 0.4]
        );

        return (
          <motion.span
            key={p.id}
            aria-hidden="true"
            style={{
              x: particleX,
              y: particleY,
              opacity: particleOpacity,
              scale: particleScale,
              width: p.size,
              height: p.size,
              backgroundColor: p.color,
            }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none blur-[0.4px]"
          />
        );
      })}

      {/* The Word itself: morphs from hazy, dispersed dust into solid typography */}
      <motion.span
        style={{
          opacity,
          y,
          scale,
          letterSpacing: rawLetterSpacing,
          filter: useTransform(blur, (v) => `blur(${v}px)`),
        }}
        className={`inline-block font-syne font-extrabold uppercase transition-colors duration-300 ${
          isMuted ? "text-[#22092C]/40" : "text-[#22092C]"
        }`}
      >
        {word}
      </motion.span>
    </span>
  );
};

export default function DustAssembleHeadline() {
  const containerRef = useRef(null);

  // Track scroll position through the hero section to assemble words from dust
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  const line1Words = ["WE", "ENGINEER", "SHORT-FORM", "VIDEO"];
  const line2Words = ["WITH", "SCANDINAVIAN", "RESTRAINT"];

  return (
    <div
      ref={containerRef}
      className="w-full max-w-5xl mx-auto my-6 px-2 flex flex-col items-center justify-center text-center select-none"
    >
      {/* Ambient Floating Dust Mote Cloud in Background */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 overflow-hidden -z-10 flex items-center justify-center"
      >
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="w-96 h-48 bg-gradient-to-r from-[#3D1550]/10 via-[#8B7CA8]/15 to-transparent rounded-full blur-[70px]"
        />
      </div>

      {/* Line 1: WE ENGINEER SHORT-FORM VIDEO (Dust assembling into bold grotesque) */}
      <h2 className="font-syne text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] flex flex-wrap justify-center items-center">
        {line1Words.map((word, idx) => (
          <DustWord
            key={`l1-${word}-${idx}`}
            word={word}
            wordIndex={idx}
            totalWords={line1Words.length + line2Words.length}
            scrollProgress={scrollYProgress}
            isMuted={false}
          />
        ))}
      </h2>

      {/* Line 2: WITH SCANDINAVIAN RESTRAINT (Dust assembling with soft plum tone) */}
      <h2 className="font-syne text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] mt-1 sm:mt-2 flex flex-wrap justify-center items-center">
        {line2Words.map((word, idx) => (
          <DustWord
            key={`l2-${word}-${idx}`}
            word={word}
            wordIndex={line1Words.length + idx}
            totalWords={line1Words.length + line2Words.length}
            scrollProgress={scrollYProgress}
            isMuted={true}
          />
        ))}
      </h2>

      {/* Micro Status Pill: Directional Craft */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-4 flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.25em] text-[#22092C]/50"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#3D1550] animate-pulse" />
        <span>SCROLL TO CONDENSE COGNITIVE DUST</span>
      </motion.div>
    </div>
  );
}
