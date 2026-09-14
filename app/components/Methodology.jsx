"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Magnetic from "./Magnetic";

export default function Methodology() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rawBgParallax = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const bgParallax = useSpring(rawBgParallax, { damping: 20, stiffness: 100 });

  const steps = [
    {
      step: "01",
      title: "North Star Diagnosis",
      subtitle: "Positioning & Visual Restraint",
      desc: "We dissect your core visual anatomy and cultural tension — distilling an austere Scandinavian aesthetic paired with a singular creative voice.",
      tag: "Diagnosis",
    },
    {
      step: "02",
      title: "Kinetic Production",
      subtitle: "Short-Form Velocity",
      desc: "Our directors script, shoot, and choreograph vertical reels optimized for sub-3-second retention, emotional hook tension, and algorithmic momentum.",
      tag: "Production",
    },
    {
      step: "03",
      title: "Algorithmic Amplification",
      subtitle: "Meta Ads & Paid Distribution",
      desc: "We deploy top-of-funnel creative assets across targeted Meta Ads architectures, converting organic engagement into predictable 4.8x ROAS returns.",
      tag: "Amplification",
    },
    {
      step: "04",
      title: "Directional Calibration",
      subtitle: "Analytics & Evolution",
      desc: "Bi-weekly review of retention drop-offs, hook heatmaps, and conversion indices to continually calibrate visual scripts and compound brand authority.",
      tag: "Optimization",
    },
  ];

  return (
    <section
      ref={containerRef}
      id="methodology"
      className="py-28 sm:py-36 relative bg-[#FAF7F2] overflow-hidden select-none"
    >
      {/* Parallax ambient glow orb */}
      <motion.div
        style={{ y: bgParallax }}
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] bg-gradient-to-r from-[#3D1550]/8 via-[#22092C]/5 to-[#8B7CA8]/8 rounded-full blur-[160px]"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Masked Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="nord-pill px-4 py-1.5 rounded-full inline-flex items-center gap-2.5 mb-5"
          >
            <span className="w-2 h-2 rounded-full bg-[#22092C]" />
            <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#22092C]/80">
              03 &mdash; Strategic Methodology
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
              DIRECTIONAL PRECISION
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
              IN FOUR PHASES
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 text-sm sm:text-base text-[#22092C]/75 max-w-xl leading-relaxed font-normal"
          >
            How we eliminate vanity metrics and transform cultural attention into compounded commercial performance for category leaders.
          </motion.p>
        </div>

        {/* 4-Step Monolithic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                delay: idx * 0.12,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -6 }}
              className="nord-glass p-8 sm:p-9 rounded-[2.2rem] flex flex-col justify-between relative group border border-[#22092C]/10 bg-[#FAF7F2]/80 hover:border-[#22092C]/30 shadow-[0_16px_40px_rgba(34,9,44,0.06)] hover:shadow-[0_24px_50px_rgba(34,9,44,0.12)]"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-syne text-4xl font-extrabold text-[#22092C]/25 group-hover:text-[#22092C] transition-colors">
                    {item.step}
                  </span>
                  <span className="nord-pill px-3 py-1 rounded-full text-[9px] uppercase tracking-[0.2em] font-mono font-bold text-[#22092C] bg-white/80">
                    {item.tag}
                  </span>
                </div>

                <h3 className="font-syne text-xl font-bold text-[#22092C] mb-1 group-hover:translate-x-1 transition-transform">
                  {item.title}
                </h3>
                <div className="text-[11px] uppercase tracking-[0.18em] text-[#3D1550] font-semibold mb-4">
                  {item.subtitle}
                </div>
                <p className="text-xs sm:text-sm text-[#22092C]/75 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#22092C]/10 flex items-center justify-between text-[10px] font-mono font-bold uppercase tracking-[0.22em] text-[#22092C]/60 group-hover:text-[#22092C] transition-colors">
                <span>Phase Architecture</span>
                <span className="group-hover:translate-x-1.5 transition-transform">&rarr;</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
