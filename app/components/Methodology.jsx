"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Methodology() {
  const steps = [
    {
      step: "01",
      title: "Brand North Star Analysis",
      subtitle: "Positioning & Visual Restraint",
      desc: "We diagnose your brand's visual identity, audience tension, and competitor landscape — distilling a clean Scandinavian aesthetic with an unmistakable creative voice.",
      tag: "Diagnosis"
    },
    {
      step: "02",
      title: "High-Retention Production",
      subtitle: "Short-Form Velocity",
      desc: "Our creative directors script, shoot, and edit vertical reels designed specifically for initial 3-second hook retention, emotional resonance, and algorithmic momentum.",
      tag: "Production"
    },
    {
      step: "03",
      title: "Hyper-Targeted Scaling",
      subtitle: "Meta Ads & Distribution",
      desc: "We deploy top-of-funnel creative assets across Instagram Reels and Meta Ads campaigns, combining organic virality with 4.8x average return on ad spend.",
      tag: "Amplification"
    },
    {
      step: "04",
      title: "Directional Calibration",
      subtitle: "Analytics & Evolution",
      desc: "Every fortnight, we review watch curves, CTR benchmarks, and conversion data to calibrate visual hooks and guarantee compounding brand equity.",
      tag: "Optimization"
    },
  ];

  return (
    <section id="methodology" className="py-24 sm:py-32 relative bg-[#FAF8FF]/60 overflow-hidden">
      {/* Ambient background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-[#8B7CA8]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="glass-pill px-4 py-1.5 rounded-full inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#8B7CA8]" />
            <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#1F1929]/70">
              02 &mdash; Strategic Workflow
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#1F1929] leading-tight">
            The Nord<br />
            <span className="text-[#8B7CA8] font-normal italic">Methodology</span>
          </h2>
          <p className="mt-4 text-[#1F1929]/70 text-base md:text-lg max-w-xl">
            How we consistently engineer outsized social reach, authentic brand authority, and sustainable revenue for modern brands.
          </p>
        </div>

        {/* 4-Step Methodology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12, duration: 0.6 }}
              className="glass-card p-8 rounded-[2rem] flex flex-col justify-between relative group hover:-translate-y-2 transition-all duration-300 bg-white/70 border-white/60"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-serif text-3xl sm:text-4xl font-black text-[#8B7CA8]/40 group-hover:text-[#8B7CA8] transition-colors">
                    {item.step}
                  </span>
                  <span className="glass-pill px-3 py-1 rounded-full text-[9px] uppercase tracking-[0.2em] font-bold text-[#1F1929]/70 bg-white/80">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-xl font-serif font-bold text-[#1F1929] mb-1 group-hover:text-[#8B7CA8] transition-colors">
                  {item.title}
                </h3>
                <div className="text-xs uppercase tracking-[0.16em] text-[#8B7CA8] font-semibold mb-4">
                  {item.subtitle}
                </div>
                <p className="text-xs sm:text-sm text-[#1F1929]/70 leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#1F1929]/5 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-[#1F1929]/50 group-hover:text-[#1F1929] transition-colors">
                <span>Explore Phase</span>
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
