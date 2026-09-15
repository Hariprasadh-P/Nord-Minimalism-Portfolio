"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

// Animated counter hook that smoothly counts up to target value when in view
const useCounter = (target, decimals = 0, inView = false) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let startTime = null;
    const duration = 1800; // ms

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = easeProgress * target;

      setDisplayValue(decimals > 0 ? current.toFixed(decimals) : Math.round(current));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setDisplayValue(decimals > 0 ? target.toFixed(decimals) : target);
      }
    };

    const animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [inView, target, decimals]);

  return displayValue;
};

// Graphic 1: Exponential Growth Curve for 4.8x ROAS
const GrowthSparkline = ({ inView }) => (
  <div className="w-full h-12 mt-3 relative overflow-hidden flex items-end">
    <svg viewBox="0 0 160 50" className="w-full h-full overflow-visible">
      <defs>
        <linearGradient id="roasGlow" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#22092C" stopOpacity="0.2" />
          <stop offset="60%" stopColor="#3D1550" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#8B7CA8" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="roasArea" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3D1550" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#3D1550" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Filled Area beneath curve */}
      <motion.path
        d="M 0,45 Q 40,43 70,36 T 120,18 T 160,5 L 160,50 L 0,50 Z"
        fill="url(#roasArea)"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      />

      {/* Animated Glowing Stroke */}
      <motion.path
        d="M 0,45 Q 40,43 70,36 T 120,18 T 160,5"
        fill="none"
        stroke="url(#roasGlow)"
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Peak Pulse Beacon Dot */}
      {inView && (
        <g transform="translate(160, 5)">
          <circle r="4" fill="#3D1550" />
          <circle r="8" fill="#8B7CA8" opacity="0.5" className="animate-ping" />
        </g>
      )}
    </svg>
  </div>
);

// Graphic 2: Kinetic Audio / Reels Equalizer Wave for 14M+ Views
const KineticEqualizer = ({ inView }) => {
  const bars = [16, 32, 48, 28, 44, 20, 36, 50, 24];

  return (
    <div className="w-full h-12 mt-3 flex items-end justify-between gap-1.5 px-1">
      {bars.map((height, i) => (
        <motion.div
          key={i}
          initial={{ height: 4 }}
          animate={
            inView
              ? {
                  height: [8, height, 12, height * 0.85, 8],
                }
              : { height: 4 }
          }
          transition={{
            duration: 1.6 + (i % 3) * 0.4,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
            delay: i * 0.1,
          }}
          className={`flex-1 rounded-full ${
            i % 2 === 0
              ? "bg-gradient-to-t from-[#22092C] to-[#3D1550]"
              : "bg-gradient-to-t from-[#3D1550] to-[#8B7CA8]"
          } opacity-85 hover:opacity-100 transition-opacity`}
        />
      ))}
    </div>
  );
};

// Graphic 3: Circular Retention Progress Ring for 100% Retention
const RetentionRing = ({ inView }) => {
  const radius = 20;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="w-full h-12 mt-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <svg className="w-11 h-11 transform -rotate-90">
          <circle
            cx="22"
            cy="22"
            r={radius}
            stroke="#22092C"
            strokeWidth="3"
            strokeOpacity="0.12"
            fill="none"
          />
          <motion.circle
            cx="22"
            cy="22"
            r={radius}
            stroke="url(#retentionGrad)"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={inView ? { strokeDashoffset: 0 } : { strokeDashoffset: circumference }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          />
          <defs>
            <linearGradient id="retentionGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22092C" />
              <stop offset="100%" stopColor="#3D1550" />
            </linearGradient>
          </defs>
        </svg>

        <div className="flex flex-col">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] font-bold text-[#22092C]">
            Zero Churn
          </span>
          <span className="text-[9px] text-[#22092C]/60 tracking-wider">
            Compounded Value
          </span>
        </div>
      </div>

      <span className="w-2 h-2 rounded-full bg-emerald-700 animate-ping" title="Active Retainers" />
    </div>
  );
};

// Graphic 4: Rotating 8-Point Compass Star Mini-Dial for 0° True Bearing
const CompassDial = ({ inView }) => (
  <div className="w-full h-12 mt-3 flex items-center justify-between px-1">
    <div className="flex items-center gap-2.5">
      <motion.div
        animate={inView ? { rotate: [0, 8, -8, 0] } : { rotate: 0 }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="w-10 h-10 rounded-full border border-[#22092C]/20 flex items-center justify-center bg-white/40 shadow-inner relative"
      >
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#22092C]">
          <polygon points="12,2 14,10 12,12 10,10" fill="#22092C" />
          <polygon points="12,22 14,14 12,12 10,14" fill="#8B7CA8" opacity="0.6" />
          <polygon points="22,12 14,14 12,12 14,10" fill="#22092C" opacity="0.75" />
          <polygon points="2,12 10,14 12,12 10,10" fill="#22092C" opacity="0.75" />
          <circle cx="12" cy="12" r="2" fill="#FAF7F2" />
        </svg>
      </motion.div>

      <div className="flex flex-col">
        <span className="text-[10px] font-mono uppercase tracking-[0.2em] font-bold text-[#22092C]">
          True Bearing
        </span>
        <span className="text-[9px] font-mono text-[#22092C]/60 tracking-wider">
          64°08&apos; N &bull; 0° E
        </span>
      </div>
    </div>

    <span className="px-2 py-0.5 rounded-full bg-[#22092C]/10 text-[9px] font-mono font-bold text-[#22092C]">
      NORTH
    </span>
  </div>
);

export default function MetricCounterCard({ item, index }) {
  const cardRef = useRef(null);
  const inView = useInView(cardRef, { once: false, amount: 0.35 });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Dynamic counter
  const targetNum = item.targetNum || 0;
  const count = useCounter(targetNum, item.decimals || 0, inView);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, scale: 1.015 }}
      className="nord-glass p-6 rounded-3xl flex flex-col justify-between group relative overflow-hidden border border-[#22092C]/12 hover:border-[#22092C]/35 hover:shadow-[0_24px_50px_rgba(34,9,44,0.14)] transition-all duration-400 select-none cursor-default bg-[#FAF7F2]/80 backdrop-blur-xl"
    >
      {/* Interactive Cursor Spotlight Glow Effect */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
        style={{
          background: `radial-gradient(320px circle at ${mousePos.x}px ${mousePos.y}px, rgba(61, 21, 80, 0.09), transparent 70%)`,
        }}
      />

      {/* Top Meta Bar */}
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#22092C]/50 font-semibold">
          [ 0{index + 1} &mdash; {item.label} ]
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#22092C] group-hover:scale-125 transition-transform" />
        </span>
      </div>

      {/* Middle Animated Metric Number */}
      <div className="mt-5">
        <div className="font-syne text-4xl sm:text-5xl font-extrabold text-[#22092C] tracking-tight flex items-baseline gap-0.5">
          {item.isCompass ? (
            <span>{item.value}</span>
          ) : (
            <>
              <span>{count}</span>
              <span className="text-2xl sm:text-3xl text-[#3D1550]">{item.suffix}</span>
            </>
          )}
        </div>

        <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#22092C] mt-1.5">
          {item.label}
        </div>
        <div className="text-[10px] text-[#22092C]/65 tracking-wider mt-0.5 font-normal">
          {item.detail}
        </div>
      </div>

      {/* Bottom Interactive Graphic Effect */}
      <div className="mt-4 pt-3 border-t border-[#22092C]/8">
        {index === 0 && <GrowthSparkline inView={inView} />}
        {index === 1 && <KineticEqualizer inView={inView} />}
        {index === 2 && <RetentionRing inView={inView} />}
        {index === 3 && <CompassDial inView={inView} />}
      </div>
    </motion.div>
  );
}
