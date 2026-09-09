"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const metrics = [
    { value: "4.8x", label: "Average ROAS", detail: "Meta Ads Performance" },
    { value: "12M+", label: "Reel Views", detail: "Organic Social Reach" },
    { value: "100%", label: "Client Retention", detail: "Active Retainers" },
    { value: "0° N", label: "Directional Compass", detail: "Strategic Alignment" },
  ];

  const [isWordHovered, setIsWordHovered] = React.useState(false);

  return (
    <section className="relative min-h-[92vh] md:min-h-screen flex flex-col justify-between pt-28 pb-12 px-6 overflow-hidden">
      {/* Ambient background soft glow orbs */}
      <div className="absolute top-1/4 left-1/5 w-72 md:w-[480px] h-72 md:h-[480px] bg-[#BBA9D0]/20 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/5 w-80 md:w-[500px] h-80 md:h-[500px] bg-[#8B7CA8]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full flex-1 flex flex-col items-center justify-center text-center relative z-10 my-auto">
        
        {/* Editorial Sub-badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-pill px-5 py-1.5 rounded-full mb-6 inline-flex items-center gap-3 bg-white/60 border-white/60 shadow-[0_4px_20px_rgba(139,124,168,0.12)]"
        >
          <span className="w-2 h-2 rounded-full bg-[#8B7CA8] animate-ping" />
          <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#1F1929]/80">
            Directional Creative Studio
          </span>
          <span className="w-[1px] h-3 bg-[#1F1929]/15" />
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#8B7CA8] font-medium">
            2026 Collection
          </span>
        </motion.div>

        {/* Hero Title with Dynamic Blur-to-Clear & Expansion on Hover */}
        <div 
          className="relative my-2 select-none cursor-pointer group py-2"
          onMouseEnter={() => setIsWordHovered(true)}
          onMouseLeave={() => setIsWordHovered(false)}
          onTouchStart={() => setIsWordHovered(prev => !prev)}
        >
          {/* Ambient Glow behind NORD on hover */}
          <motion.div 
            animate={{
              opacity: isWordHovered ? 0.6 : 0.2,
              scale: isWordHovered ? 1.2 : 0.9,
            }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 bg-gradient-to-r from-[#8B7CA8]/30 via-[#BBA9D0]/30 to-[#8B7CA8]/30 rounded-full blur-2xl -z-10 pointer-events-none"
          />

          <motion.h1 
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ 
              opacity: isWordHovered ? 1 : 0.78, 
              scale: isWordHovered ? 1.12 : 0.96,
              filter: isWordHovered ? "blur(0px)" : "blur(10px)",
              y: 0
            }}
            transition={{ 
              duration: 0.55, 
              ease: [0.16, 1, 0.3, 1] 
            }}
            className="text-7xl sm:text-9xl md:text-[13rem] font-serif font-black tracking-tight leading-none uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#1F1929] via-[#352B46] to-[#8B7CA8] transition-all duration-300 drop-shadow-sm"
          >
            NORD
          </motion.h1>
          
          {/* Frosted Glass Overlay Bar */}
          <motion.div 
            initial={{ width: 0, opacity: 0 }}
            animate={{ 
              width: isWordHovered ? "122%" : "115%", 
              opacity: isWordHovered ? 0.95 : 0.65,
              scale: isWordHovered ? 1.05 : 1
            }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-14 sm:h-20 md:h-28 bg-white/40 backdrop-blur-xl rounded-full border border-white/80 shadow-[0_16px_36px_rgba(139,124,168,0.25)] pointer-events-none flex items-center justify-between px-6 sm:px-10 transition-all duration-300"
          >
            <span className="text-[9px] sm:text-[11px] tracking-[0.3em] uppercase text-[#1F1929]/70 font-semibold hidden sm:inline">
              Nordic Aesthetic
            </span>
            
            {/* Interactive Hover Pill Hint */}
            <span className="text-[9px] sm:text-[10px] tracking-[0.25em] uppercase px-3 py-1 rounded-full bg-white/70 border border-white text-[#8B7CA8] font-bold shadow-sm">
              {isWordHovered ? "Direction Clear" : "Hover To Focus"}
            </span>

            <span className="text-[9px] sm:text-[11px] tracking-[0.3em] uppercase text-[#1F1929]/70 font-semibold hidden sm:inline">
              Short-Form Velocity
            </span>
          </motion.div>
        </div>

        {/* Narrative Description */}
        <motion.p 
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-6 text-[#1F1929]/75 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed font-normal"
        >
          We merge Scandinavian visual restraint with high-octane social strategy — crafting viral short-form reels, high-converting Meta Ads campaigns, and unforgettable brand identities.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#works"
            className="px-7 py-3.5 rounded-full bg-[#1F1929] text-white text-xs uppercase tracking-[0.2em] font-bold shadow-lg shadow-[#1F1929]/15 hover:bg-[#8B7CA8] hover:shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-3"
          >
            <span>Explore Works</span>
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>

          <a
            href="#pricing"
            className="glass-card px-7 py-3.5 rounded-full text-[#1F1929] text-xs uppercase tracking-[0.2em] font-bold hover:bg-white transition-all flex items-center gap-2"
          >
            <span>Rate Card & Retainers</span>
            <span className="text-xs text-[#8B7CA8]">&rarr;</span>
          </a>
        </motion.div>

      </div>

      {/* Studio Proof Metrics Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.85, duration: 0.8 }}
        className="max-w-4xl mx-auto w-full relative z-10 pt-8"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {metrics.map((item, idx) => (
            <div 
              key={idx}
              className="glass-card p-4 rounded-2xl flex flex-col items-center justify-center text-center bg-white/60 border-white/60 group hover:border-[#8B7CA8]/40"
            >
              <div className="font-serif text-2xl sm:text-3xl font-bold text-[#1F1929] group-hover:text-[#8B7CA8] transition-colors">
                {item.value}
              </div>
              <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.16em] text-[#1F1929]/80 mt-1">
                {item.label}
              </div>
              <div className="text-[9px] text-[#1F1929]/50 tracking-wider hidden sm:block mt-0.5">
                {item.detail}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
