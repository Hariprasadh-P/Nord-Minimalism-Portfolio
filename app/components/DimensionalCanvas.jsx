"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import { worksData } from "./WorksCarousel";
import { photoWorks } from "./ZigzagGallery";
import { retainersData } from "./PricingCards";

const ReelsModal = dynamic(() => import("./ReelsModal"), {
  ssr: false,
  loading: () => null,
});

export default function DimensionalCanvas() {
  const containerRef = useRef(null);
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);
  const [photoSwipeDir, setPhotoSwipeDir] = useState(0);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    package: "Growth Velocity Retainer",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  // Drive 3D Z-axis camera movement from virtual scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Camera Z travel: from 0px into deep space (6000px)
  const rawCameraZ = useTransform(scrollYProgress, [0, 1], [0, 5600]);
  const cameraZ = useSpring(rawCameraZ, { damping: 28, stiffness: 120 });

  // Camera slight tilt based on scroll and mouse
  const rawCameraRotX = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0, 2, -2, 1, 0]);
  const cameraRotX = useSpring(rawCameraRotX, { damping: 30, stiffness: 100 });

  // Interactive mouse gyro tilt for true 3D tactile depth
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;
      setMouseOffset({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const mouseTiltX = mouseOffset.y * -4;
  const mouseTiltY = mouseOffset.x * 6;

  // Jump to specific 3D Stage
  const scrollToStage = (stageRatio) => {
    if (!containerRef.current) return;
    const totalScroll = containerRef.current.scrollHeight - window.innerHeight;
    window.scrollTo({
      top: totalScroll * stageRatio,
      behavior: "smooth",
    });
  };

  const stages = [
    { label: "Origin", ratio: 0 },
    { label: "Reels", ratio: 0.22 },
    { label: "Stills", ratio: 0.44 },
    { label: "Method", ratio: 0.64 },
    { label: "Retainers", ratio: 0.82 },
    { label: "Brief", ratio: 1.0 },
  ];

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const message =
      `*New 3D Dimension Inquiry — Nord Media House*\n\n` +
      `*Name:* ${contactData.name}\n` +
      `*Email:* ${contactData.email}\n` +
      `*Retainer:* ${contactData.package}\n` +
      `*Brief:* ${contactData.notes || "Looking to discuss creative direction."}`;
    const whatsappUrl = `https://wa.me/919363542725?text=${encodeURIComponent(message)}`;
    setSubmitted(true);
    window.open(whatsappUrl, "_blank");
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div ref={containerRef} className="relative w-full h-[620vh] bg-[#FAF7F2] select-none">
      {/* ========================================================
          STICKY 3D VIEWPORT WITH PERSPECTIVE PROJECTION
          ======================================================== */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center justify-center pointer-events-auto">
        
        {/* 3D Horizon Grid Background Planes (Vanishing Depth) */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
          {/* Ceiling Grid */}
          <div
            className="absolute top-[-30%] w-[180vw] h-[120vh] opacity-[0.035] bg-[linear-gradient(to_right,#22092C_1px,transparent_1px),linear-gradient(to_bottom,#22092C_1px,transparent_1px)] bg-[size:80px_80px]"
            style={{ transform: "rotateX(78deg) translateZ(300px)" }}
          />
          {/* Floor Grid */}
          <div
            className="absolute bottom-[-30%] w-[180vw] h-[120vh] opacity-[0.045] bg-[linear-gradient(to_right,#22092C_1px,transparent_1px),linear-gradient(to_bottom,#22092C_1px,transparent_1px)] bg-[size:80px_80px]"
            style={{ transform: "rotateX(-78deg) translateZ(300px)" }}
          />
          {/* Ambient Deep Atmospheric Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-radial from-[#3D1550]/10 via-[#22092C]/5 to-transparent blur-[160px]" />
        </div>

        {/* ========================================================
            SPATIAL CAMERA RIG (Translates on Z axis through 3D space)
            ======================================================== */}
        <div
          className="relative w-full h-full flex items-center justify-center"
          style={{
            perspective: "1100px",
            perspectiveOrigin: "50% 50%",
          }}
        >
          <motion.div
            style={{
              z: cameraZ,
              rotateX: cameraRotX,
              rotateY: mouseTiltY,
              transformStyle: "preserve-3d",
            }}
            animate={{
              rotateX: mouseTiltX,
            }}
            transition={{ type: "spring", damping: 30, stiffness: 150 }}
            className="relative w-full h-full flex items-center justify-center"
          >

            {/* ----------------------------------------------------
                STAGE 0: THE COMPASS SANCTUM (Z = 0)
                ---------------------------------------------------- */}
            <motion.div
              style={{
                transform: "translate3d(0px, 0px, 0px)",
                transformStyle: "preserve-3d",
              }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center p-6"
            >
              {/* Floating Spatial Pill */}
              <div className="nord-pill px-5 py-1.5 rounded-full mb-8 inline-flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#22092C] animate-ping" />
                <span className="text-[10px] sm:text-[11px] font-sans font-bold uppercase tracking-[0.28em] text-[#22092C]">
                  3D Directional Dimension &bull; 0° N
                </span>
              </div>

              {/* Colossal 3D Brand Mark with Interactive Rotating 8-Point Compass */}
              <div 
                className="flex items-center justify-center gap-3 sm:gap-6 my-2"
                style={{ transform: "translateZ(80px)", transformStyle: "preserve-3d" }}
              >
                <span className="font-serif text-7xl sm:text-9xl md:text-[13rem] font-bold text-[#22092C] leading-none">
                  N
                </span>

                {/* 3D Floating Compass Star */}
                <motion.div
                  animate={{
                    rotateZ: [0, 360],
                    rotateY: [0, 180, 360],
                  }}
                  transition={{
                    rotateZ: { duration: 32, ease: "linear", repeat: Infinity },
                    rotateY: { duration: 16, ease: "easeInOut", repeat: Infinity },
                  }}
                  className="relative w-20 h-20 sm:w-32 sm:h-32 md:w-44 md:h-44 flex items-center justify-center drop-shadow-2xl"
                  style={{ transform: "translateZ(120px)" }}
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                    <circle cx="50" cy="50" r="46" stroke="#22092C" strokeWidth="2" fill="none" opacity="0.8" />
                    <circle cx="50" cy="50" r="36" stroke="#22092C" strokeWidth="1" strokeDasharray="3 4" fill="none" opacity="0.4" />
                    <polygon points="50,-8 55,34 50,44 45,34" fill="#22092C" />
                    <polygon points="50,108 55,66 50,56 45,66" fill="#22092C" />
                    <polygon points="108,50 66,55 56,50 66,45" fill="#22092C" />
                    <polygon points="-8,50 34,55 44,50 34,45" fill="#22092C" />
                    <polygon points="82,18 60,42 50,50 56,38" fill="#22092C" opacity="0.85" />
                    <polygon points="82,82 60,58 50,50 56,62" fill="#22092C" opacity="0.85" />
                    <polygon points="18,82 40,58 50,50 44,62" fill="#22092C" opacity="0.85" />
                    <polygon points="18,18 40,42 50,50 44,38" fill="#22092C" opacity="0.85" />
                    <circle cx="50" cy="50" r="3.5" fill="#FAF7F2" />
                  </svg>
                </motion.div>

                <span className="font-serif text-7xl sm:text-9xl md:text-[13rem] font-bold text-[#22092C] leading-none">
                  R
                </span>
                <span className="font-serif text-7xl sm:text-9xl md:text-[13rem] font-bold text-[#22092C] leading-none">
                  D
                </span>
              </div>

              <p 
                className="text-xs sm:text-base font-sans font-semibold uppercase tracking-[0.6em] text-[#22092C] mt-2 mb-6"
                style={{ transform: "translateZ(60px)" }}
              >
                MEDIA HOUSE
              </p>

              <h2
                className="font-syne text-2xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-[#22092C] max-w-3xl"
                style={{ transform: "translateZ(40px)" }}
              >
                SCANDINAVIAN RESTRAINT &bull; SHORT-FORM VELOCITY
              </h2>

              <p 
                className="mt-4 text-[#22092C]/75 text-sm sm:text-base max-w-xl leading-relaxed"
                style={{ transform: "translateZ(20px)" }}
              >
                Scroll to travel forward into our digital universe &mdash; exploring cinematic reel chambers, 4K stills, and strategic retainers.
              </p>

              {/* Down Arrow / Travel Cue */}
              <div 
                className="mt-8 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-[#22092C]/60"
                style={{ transform: "translateZ(30px)" }}
              >
                <span>SCROLL DOWN TO ENTER THE SPACE</span>
                <span className="animate-bounce text-sm">&darr;</span>
              </div>
            </motion.div>

            {/* ----------------------------------------------------
                STAGE 1: CINEMATIC REELS VAULT (Z = -1200px)
                ---------------------------------------------------- */}
            <div
              style={{
                transform: "translate3d(0px, 0px, -1200px)",
                transformStyle: "preserve-3d",
              }}
              className="absolute inset-0 flex flex-col items-center justify-center p-6 sm:p-10 pointer-events-auto"
            >
              <div className="text-center mb-8" style={{ transform: "translateZ(60px)" }}>
                <span className="nord-pill px-4 py-1 rounded-full text-[9px] font-mono uppercase tracking-[0.2em] font-bold text-[#22092C] inline-block mb-3">
                  01 / 05 &bull; Cinematic Reels Chamber
                </span>
                <h2 className="font-syne text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-[#22092C]">
                  VERTICAL CINEMA MASTERS
                </h2>
                <p className="text-xs sm:text-sm text-[#22092C]/70 mt-1">
                  Click any reel portal to experience full 9:16 vertical stream with sound.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
                {worksData.map((work, idx) => (
                  <motion.div
                    key={work.id}
                    whileHover={{ scale: 1.05, z: 80, rotateY: idx === 0 ? 6 : -6 }}
                    transition={{ duration: 0.4 }}
                    onClick={() => {
                      setSelectedVideoIndex(idx);
                      setIsModalOpen(true);
                    }}
                    style={{
                      transform: `translate3d(0, 0, ${idx * 40}px)`,
                      transformStyle: "preserve-3d",
                    }}
                    className="group relative aspect-[9/16] sm:aspect-[16/10] max-h-[50vh] rounded-3xl overflow-hidden nord-glass cursor-pointer shadow-[0_24px_60px_rgba(34,9,44,0.18)] border border-[#22092C]/15 bg-black"
                  >
                    <video
                      src={work.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#16041D]/90 via-transparent to-black/30 pointer-events-none" />

                    <div className="relative z-10 p-5 flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-[#FAF7F2]/90 text-[#22092C] font-mono text-[9px] uppercase tracking-wider font-bold">
                        {work.qualityBadge}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-black/50 text-[#FAF7F2] font-mono text-[9px] uppercase tracking-wider">
                        {work.category}
                      </span>
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:scale-110 transition-transform">
                      <div className="px-6 py-3 rounded-full bg-[#FAF7F2] text-[#22092C] font-syne text-xs uppercase tracking-widest font-extrabold flex items-center gap-2 shadow-2xl">
                        <span>Play Reel</span>
                        <span>&rarr;</span>
                      </div>
                    </div>

                    <div className="relative z-10 p-5 mt-auto">
                      <div className="text-[10px] font-mono uppercase tracking-widest text-[#C7BBD0]">
                        {work.client} &bull; {work.metric}
                      </div>
                      <h3 className="font-syne text-lg font-bold text-white mt-0.5">
                        {work.title}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ----------------------------------------------------
                STAGE 2: COMMERCIAL STILLS GALLERY (Z = -2300px)
                ---------------------------------------------------- */}
            <div
              style={{
                transform: "translate3d(0px, 0px, -2300px)",
                transformStyle: "preserve-3d",
              }}
              className="absolute inset-0 flex flex-col items-center justify-center p-6 sm:p-10 pointer-events-auto"
            >
              <div className="text-center mb-8" style={{ transform: "translateZ(60px)" }}>
                <span className="nord-pill px-4 py-1 rounded-full text-[9px] font-mono uppercase tracking-[0.2em] font-bold text-[#22092C] inline-block mb-3">
                  02 / 05 &bull; 4K Still Gallery Chamber
                </span>
                <h2 className="font-syne text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-[#22092C]">
                  TACTILE CULINARY STILLS
                </h2>
                <p className="text-xs sm:text-sm text-[#22092C]/70 mt-1">
                  Floating spatial editorial planes. Click any still for 4K master inspection.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl w-full">
                {photoWorks.slice(0, 4).map((photo, idx) => (
                  <motion.div
                    key={photo.id}
                    whileHover={{ scale: 1.06, z: 70 }}
                    transition={{ duration: 0.35 }}
                    onClick={() => setSelectedPhotoIndex(idx)}
                    style={{
                      transform: `translate3d(0, 0, ${(idx % 2 === 0 ? 30 : -30)}px)`,
                      transformStyle: "preserve-3d",
                    }}
                    className="group relative aspect-[4/5] rounded-2xl overflow-hidden nord-glass cursor-pointer shadow-lg border border-[#22092C]/10 bg-[#FAF7F2]"
                  >
                    <Image
                      src={photo.imageWebp || photo.image}
                      alt={photo.title}
                      fill
                      className="object-cover group-hover:scale-108 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#22092C]/85 via-transparent to-transparent opacity-80 group-hover:opacity-95" />
                    <div className="relative z-10 p-4 mt-auto">
                      <span className="text-[9px] font-mono text-[#C7BBD0] uppercase tracking-wider block">
                        {photo.client}
                      </span>
                      <h4 className="font-syne text-sm font-bold text-white leading-tight mt-0.5">
                        {photo.title}
                      </h4>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ----------------------------------------------------
                STAGE 3: METHODOLOGY MONOLITHS (Z = -3400px)
                ---------------------------------------------------- */}
            <div
              style={{
                transform: "translate3d(0px, 0px, -3400px)",
                transformStyle: "preserve-3d",
              }}
              className="absolute inset-0 flex flex-col items-center justify-center p-6 sm:p-10 pointer-events-auto"
            >
              <div className="text-center mb-8" style={{ transform: "translateZ(60px)" }}>
                <span className="nord-pill px-4 py-1 rounded-full text-[9px] font-mono uppercase tracking-[0.2em] font-bold text-[#22092C] inline-block mb-3">
                  03 / 05 &bull; Strategic Architecture
                </span>
                <h2 className="font-syne text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-[#22092C]">
                  DIRECTIONAL METHODOLOGY
                </h2>
                <p className="text-xs sm:text-sm text-[#22092C]/70 mt-1">
                  Four standing monolith pillars engineered for category velocity.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl w-full">
                {[
                  { step: "01", title: "North Star Diagnosis", subtitle: "Visual Restraint", desc: "Dissecting audience tension and distilling pure Scandinavian aesthetic." },
                  { step: "02", title: "Kinetic Production", subtitle: "Short-Form Velocity", desc: "Sub-3-second hooks and emotional algorithmic momentum." },
                  { step: "03", title: "Algorithmic Scale", subtitle: "4.8x Average ROAS", desc: "Targeted Meta Ads deploying top-of-funnel creative assets." },
                  { step: "04", title: "Directional Tuning", subtitle: "Fortnightly Sprints", desc: "Analytics calibration to compound lifetime brand equity." },
                ].map((item, idx) => (
                  <motion.div
                    key={item.step}
                    whileHover={{ scale: 1.05, z: 60 }}
                    style={{
                      transform: `translate3d(0, 0, ${idx * 30}px)`,
                      transformStyle: "preserve-3d",
                    }}
                    className="nord-glass p-6 rounded-3xl flex flex-col justify-between border border-[#22092C]/10 bg-white/80 shadow-xl"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-syne text-3xl font-extrabold text-[#22092C]/30">
                          {item.step}
                        </span>
                        <span className="w-2 h-2 rounded-full bg-[#22092C]" />
                      </div>
                      <h3 className="font-syne text-base font-bold text-[#22092C]">
                        {item.title}
                      </h3>
                      <p className="text-[10px] uppercase tracking-wider font-semibold text-[#3D1550] mb-2">
                        {item.subtitle}
                      </p>
                      <p className="text-xs text-[#22092C]/75 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ----------------------------------------------------
                STAGE 4: COMPASS RETAINERS (Z = -4500px)
                ---------------------------------------------------- */}
            <div
              style={{
                transform: "translate3d(0px, 0px, -4500px)",
                transformStyle: "preserve-3d",
              }}
              className="absolute inset-0 flex flex-col items-center justify-center p-6 sm:p-10 pointer-events-auto"
            >
              <div className="text-center mb-8" style={{ transform: "translateZ(60px)" }}>
                <span className="nord-pill px-4 py-1 rounded-full text-[9px] font-mono uppercase tracking-[0.2em] font-bold text-[#22092C] inline-block mb-3">
                  04 / 05 &bull; Compass Retainers
                </span>
                <h2 className="font-syne text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-[#22092C]">
                  TRANSPARENT TIER ARCHITECTURE
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full items-center">
                {retainersData.map((tier, idx) => {
                  const isHero = tier.isPopular;
                  return (
                    <motion.div
                      key={tier.id}
                      whileHover={{ scale: 1.05, z: 70 }}
                      style={{
                        transform: `translate3d(0, 0, ${isHero ? 50 : 0}px)`,
                        transformStyle: "preserve-3d",
                      }}
                      className={`p-7 rounded-[2rem] flex flex-col justify-between transition-all ${
                        isHero
                          ? "bg-[#22092C] text-[#FAF7F2] shadow-2xl border border-[#22092C]"
                          : "nord-glass text-[#22092C] shadow-lg border border-[#22092C]/10"
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-[9px] font-mono uppercase tracking-widest font-bold opacity-80">
                            {tier.badge}
                          </span>
                          <span className="font-mono text-[9px] opacity-60">
                            {tier.degree}
                          </span>
                        </div>
                        <h3 className="font-syne text-2xl font-extrabold tracking-tight">
                          {tier.name}
                        </h3>
                        <p className="text-[11px] opacity-75 font-semibold mt-0.5">
                          {tier.subtitle}
                        </p>

                        <ul className="mt-6 space-y-2 text-xs opacity-90 border-t border-current/10 pt-4">
                          {tier.features.slice(0, 4).map((f, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-current flex-shrink-0" />
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button
                        onClick={() => scrollToStage(1.0)}
                        className={`mt-6 w-full py-3 rounded-full text-xs font-syne font-bold uppercase tracking-wider ${
                          isHero
                            ? "bg-[#FAF7F2] text-[#22092C] hover:bg-white"
                            : "bg-[#22092C] text-[#FAF7F2] hover:bg-[#3D1550]"
                        }`}
                      >
                        Select Tier &rarr;
                      </button>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* ----------------------------------------------------
                STAGE 5: FINAL TERMINAL & BRIEF DISPATCH (Z = -5500px)
                ---------------------------------------------------- */}
            <div
              style={{
                transform: "translate3d(0px, 0px, -5500px)",
                transformStyle: "preserve-3d",
              }}
              className="absolute inset-0 flex flex-col items-center justify-center p-6 sm:p-10 pointer-events-auto"
            >
              <div className="max-w-xl w-full nord-glass p-8 sm:p-10 rounded-[2.5rem] shadow-2xl border border-[#22092C]/15 bg-white/90">
                <div className="text-center mb-6">
                  <span className="nord-pill px-4 py-1 rounded-full text-[9px] font-mono uppercase tracking-[0.2em] font-bold text-[#22092C] inline-block mb-2">
                    05 / 05 &bull; Dispatch Horizon
                  </span>
                  <h3 className="font-syne text-3xl font-extrabold uppercase text-[#22092C]">
                    INITIATE COMMISSION
                  </h3>
                  <p className="text-xs text-[#22092C]/70 mt-1">
                    Transmits directly to our executive director on WhatsApp.
                  </p>
                </div>

                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Brand or Founder Name"
                      value={contactData.name}
                      onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#22092C]/15 text-[#22092C] text-xs focus:outline-none focus:border-[#22092C]"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Official Email Address"
                      value={contactData.email}
                      onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#22092C]/15 text-[#22092C] text-xs focus:outline-none focus:border-[#22092C]"
                    />
                  </div>
                  <div>
                    <textarea
                      rows={3}
                      placeholder="Project brief, goals, or required timeline..."
                      value={contactData.notes}
                      onChange={(e) => setContactData({ ...contactData, notes: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#22092C]/15 text-[#22092C] text-xs focus:outline-none focus:border-[#22092C] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-[#22092C] text-[#FAF7F2] font-syne text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#3D1550] transition-colors shadow-lg"
                  >
                    {submitted ? "Launching WhatsApp Terminal..." : "Dispatch Project Brief &rarr;"}
                  </button>
                </form>

                <div className="mt-6 pt-4 border-t border-[#22092C]/10 text-center">
                  <button
                    onClick={() => scrollToStage(0)}
                    className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#22092C]/60 hover:text-[#22092C]"
                  >
                    &uarr; Return to Origin (0° N)
                  </button>
                </div>
              </div>
            </div>

          </motion.div>
        </div>

        {/* ========================================================
            HUD COCKPIT CONTROLS (Fixed Spatial Navigation Rail)
            ======================================================== */}
        <div className="absolute bottom-6 inset-x-6 sm:inset-x-12 flex items-center justify-between pointer-events-none z-40">
          {/* Spatial Coordinates Pill */}
          <div className="nord-glass px-4 py-2 rounded-full hidden sm:flex items-center gap-3 pointer-events-auto shadow-md">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#22092C]/70">
              64°08&apos;N / 11°00&apos;N
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#22092C]" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#22092C]">
              3D VOYAGE ACTIVE
            </span>
          </div>

          {/* Quick Jump Stage Scrubber */}
          <div className="nord-glass p-1.5 rounded-full flex items-center gap-1 pointer-events-auto shadow-md mx-auto sm:mx-0">
            {stages.map((stage) => (
              <button
                key={stage.label}
                onClick={() => scrollToStage(stage.ratio)}
                className="px-3 py-1 rounded-full text-[10px] font-syne font-bold uppercase tracking-wider text-[#22092C]/70 hover:text-[#22092C] hover:bg-[#22092C]/10 transition-colors"
              >
                {stage.label}
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* Fullscreen Video Reels Modal in Reel Format */}
      <ReelsModal
        isOpen={isModalOpen}
        works={worksData}
        activeIndex={selectedVideoIndex}
        setActiveIndex={setSelectedVideoIndex}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Fullscreen Swipeable Photo Modal */}
      <AnimatePresence>
        {selectedPhotoIndex !== null && photoWorks[selectedPhotoIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhotoIndex(null)}
            className="fixed inset-0 z-[1050] bg-[#16041D]/92 backdrop-blur-2xl flex items-center justify-center p-3 sm:p-8 select-none"
          >
            {/* Top Bar */}
            <div className="absolute top-4 sm:top-6 inset-x-4 sm:inset-x-8 flex items-center justify-between z-40 pointer-events-none">
              <div className="flex items-center gap-3 pointer-events-auto">
                <span className="nord-pill px-4 py-1.5 rounded-full text-xs font-mono font-bold text-[#FAF7F2] bg-white/10 border-white/20 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C7BBD0] animate-pulse" />
                  <span>3D STILL ARCHIVE</span>
                </span>
                <span className="text-xs text-white/70 tracking-widest font-mono">
                  0{selectedPhotoIndex + 1} / 0{photoWorks.length}
                </span>
              </div>

              <div className="flex items-center gap-3 pointer-events-auto">
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
                setPhotoSwipeDir(-1);
                setSelectedPhotoIndex((prev) => (prev - 1 + photoWorks.length) % photoWorks.length);
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
                setPhotoSwipeDir(1);
                setSelectedPhotoIndex((prev) => (prev + 1) % photoWorks.length);
              }}
              className="absolute right-3 sm:right-6 z-40 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-all backdrop-blur-md border border-white/20 shadow-2xl cursor-pointer hover:scale-105 active:scale-95"
              aria-label="Next Still"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Swipeable / Draggable Photo Container */}
            <motion.div
              key={photoWorks[selectedPhotoIndex].id}
              initial={{
                opacity: 0,
                x: photoSwipeDir > 0 ? 80 : -80,
                scale: 0.96,
              }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{
                opacity: 0,
                x: photoSwipeDir > 0 ? -80 : 80,
                scale: 0.96,
              }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.3}
              onDragEnd={(e, { offset, velocity }) => {
                if (offset.x > 60 || velocity.x > 400) {
                  setPhotoSwipeDir(-1);
                  setSelectedPhotoIndex((prev) => (prev - 1 + photoWorks.length) % photoWorks.length);
                } else if (offset.x < -60 || velocity.x < -400) {
                  setPhotoSwipeDir(1);
                  setSelectedPhotoIndex((prev) => (prev + 1) % photoWorks.length);
                }
              }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full bg-[#FAF7F2] rounded-[2.5rem] overflow-hidden shadow-2xl border border-[#22092C]/20 p-6 flex flex-col cursor-grab active:cursor-grabbing"
            >
              <div className="relative aspect-[4/5] sm:aspect-[16/11] max-h-[55vh] w-full rounded-2xl overflow-hidden mb-4 bg-[#16041D]">
                <Image
                  src={photoWorks[selectedPhotoIndex].imageWebp || photoWorks[selectedPhotoIndex].image}
                  alt={photoWorks[selectedPhotoIndex].title}
                  fill
                  priority
                  draggable={false}
                  className="object-cover"
                />
              </div>

              <div className="flex items-center justify-between text-xs uppercase tracking-widest text-[#22092C]/60 font-mono mb-1">
                <span>{photoWorks[selectedPhotoIndex].client}</span>
                <span>{photoWorks[selectedPhotoIndex].resolution}</span>
              </div>

              <h3 className="font-syne text-xl font-bold text-[#22092C]">
                {photoWorks[selectedPhotoIndex].title}
              </h3>
              <p className="text-xs text-[#22092C]/70 mt-1">
                {photoWorks[selectedPhotoIndex].desc}
              </p>

              <div className="mt-4 pt-3 border-t border-[#22092C]/10 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  {photoWorks.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={() => {
                        setPhotoSwipeDir(dotIdx > selectedPhotoIndex ? 1 : -1);
                        setSelectedPhotoIndex(dotIdx);
                      }}
                      className={`h-1.5 rounded-full transition-all cursor-pointer ${
                        dotIdx === selectedPhotoIndex
                          ? "w-5 bg-[#22092C]"
                          : "w-1.5 bg-[#22092C]/25 hover:bg-[#22092C]/50"
                      }`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      setPhotoSwipeDir(-1);
                      setSelectedPhotoIndex((prev) => (prev - 1 + photoWorks.length) % photoWorks.length);
                    }}
                    className="px-3.5 py-1.5 rounded-full border border-[#22092C]/20 text-[#22092C] text-xs font-mono font-bold hover:bg-[#22092C]/5 transition-colors cursor-pointer"
                  >
                    &larr; Prev
                  </button>
                  <button
                    onClick={() => {
                      setPhotoSwipeDir(1);
                      setSelectedPhotoIndex((prev) => (prev + 1) % photoWorks.length);
                    }}
                    className="px-3.5 py-1.5 rounded-full bg-[#22092C] text-[#FAF7F2] text-xs font-mono font-bold hover:bg-[#3D1550] transition-colors cursor-pointer"
                  >
                    Next &rarr;
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
