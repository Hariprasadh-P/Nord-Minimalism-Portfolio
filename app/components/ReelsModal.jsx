"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ReelsModal({ isOpen, onClose, works, activeIndex, setActiveIndex }) {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [likedMap, setLikedMap] = useState({});
  const videoRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Keyboard controls
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === ' ' || e.key === 'k') {
        e.preventDefault();
        togglePlayPause();
      } else if (e.key === 'm') {
        e.preventDefault();
        setIsMuted((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, activeIndex, works.length]);

  if (!isOpen || !works || works.length === 0) return null;

  const handleNext = () => {
    if (activeIndex < works.length - 1) {
      setActiveIndex(activeIndex + 1);
      setIsPlaying(true);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
      setIsPlaying(true);
    }
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleLike = (id) => {
    setLikedMap(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const toggleFullscreen = (e) => {
    if (e) e.stopPropagation();
    if (!document.fullscreenElement) {
      if (videoRef.current) {
        if (videoRef.current.requestFullscreen) {
          videoRef.current.requestFullscreen().catch(() => {});
        } else if (videoRef.current.webkitRequestFullscreen) {
          videoRef.current.webkitRequestFullscreen();
        }
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 bg-black/92 backdrop-blur-2xl flex items-center justify-center p-3 sm:p-6 overflow-hidden"
        onClick={onClose}
      >
        {/* Top Floating Control Bar */}
        <div className="absolute top-4 sm:top-6 inset-x-4 sm:inset-x-8 flex items-center justify-between z-40 pointer-events-none">
          <div className="flex items-center gap-3 pointer-events-auto">
            <span className="glass-pill px-4 py-1.5 rounded-full text-xs font-serif font-bold text-white/90 bg-white/10 border-white/20 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#8B7CA8] animate-pulse" />
              <span>NORD REEL STREAM</span>
            </span>
            <span className="text-xs text-white/60 tracking-widest hidden sm:inline font-mono">
              {activeIndex + 1} / {works.length}
            </span>
          </div>

          <div className="flex items-center gap-3 pointer-events-auto">
            {/* Fullscreen Master Player Toggle */}
            <button
              onClick={toggleFullscreen}
              className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-all backdrop-blur-md border border-white/20"
              title="Full Screen Cinema (F)"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-5h-4m4 0v4m0-4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
            </button>

            {/* Audio Toggle */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsMuted(!isMuted);
              }}
              className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-all backdrop-blur-md border border-white/20"
              title={isMuted ? "Unmute Audio (M)" : "Mute Audio (M)"}
            >
              {isMuted ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-[#BBA9D0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
              )}
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-all backdrop-blur-md border border-white/20"
              title="Close (Esc)"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Previous Button Arrow */}
        {activeIndex > 0 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="hidden md:flex absolute left-4 lg:left-8 z-40 w-12 h-12 rounded-full bg-white/10 hover:bg-white/30 text-white items-center justify-center transition-all backdrop-blur-md border border-white/20 shadow-lg"
            aria-label="Previous Reel"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {/* Next Button Arrow */}
        {activeIndex < works.length - 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="hidden md:flex absolute right-4 lg:right-8 z-40 w-12 h-12 rounded-full bg-white/10 hover:bg-white/30 text-white items-center justify-center transition-all backdrop-blur-md border border-white/20 shadow-lg"
            aria-label="Next Reel"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}

        {/* 3D Stage with Active Center Reel and Blurred Front/Back Reels */}
        <div 
          className="relative w-full max-w-7xl h-full flex items-center justify-center"
          style={{ perspective: '1200px' }}
          onClick={(e) => e.stopPropagation()}
        >
          {works.map((work, index) => {
            const isCurrent = index === activeIndex;
            const isPrev = index === activeIndex - 1; // Back reel
            const isNext = index === activeIndex + 1; // Front reel

            // Only render current reel and immediate front & back reels
            if (!isCurrent && !isPrev && !isNext) return null;

            const isLandscape = work.aspectRatio === '16/9';

            // 3D positioning, depth, and optical blur calculations
            let xOffset = "0%";
            let zOffset = 0;
            let rotateY = 0;
            let scale = 1;
            let opacity = 1;
            let blurFilter = "blur(0px)";
            let zIndex = 30;

            if (isCurrent) {
              xOffset = "0%";
              zOffset = 40;
              rotateY = 0;
              scale = 1;
              opacity = 1;
              blurFilter = "blur(0px)";
              zIndex = 30;
            } else if (isPrev) {
              // Back Reel (Left): Blurry, tilted, depth pushed back
              xOffset = isLandscape ? "-65%" : "-56%";
              zOffset = -220;
              rotateY = 20;
              scale = 0.84;
              opacity = 0.6;
              blurFilter = "blur(8px)";
              zIndex = 20;
            } else if (isNext) {
              // Front Reel (Right): Blurry, tilted, depth pushed back
              xOffset = isLandscape ? "65%" : "56%";
              zOffset = -220;
              rotateY = -20;
              scale = 0.84;
              opacity = 0.6;
              blurFilter = "blur(8px)";
              zIndex = 20;
            }

            const cardAspectClass = isLandscape
              ? 'w-[95vw] max-w-5xl max-h-[82vh] aspect-[16/9]'
              : 'w-[300px] sm:w-[380px] max-h-[84vh] h-full aspect-[9/16]';

            return (
              <motion.div
                key={work.id}
                initial={false}
                animate={{
                  x: xOffset,
                  z: zOffset,
                  rotateY: rotateY,
                  scale: scale,
                  opacity: opacity,
                  filter: blurFilter,
                }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => {
                  if (isPrev) handlePrev();
                  if (isNext) handleNext();
                }}
                className={`absolute ${cardAspectClass} rounded-[2.5rem] overflow-hidden bg-black flex flex-col justify-between shadow-2xl transition-all duration-500 ${
                  isCurrent 
                    ? 'border border-white/40 ring-2 ring-[#8B7CA8]/40 shadow-[0_25px_80px_rgba(0,0,0,0.8)]' 
                    : 'border border-white/10 cursor-pointer hover:opacity-80'
                }`}
                style={{
                  transformStyle: 'preserve-3d',
                  zIndex: zIndex
                }}
              >
                {/* Reel Video displayed in 100% original aspect ratio with Hardware Contrast Optimization */}
                <video
                  ref={isCurrent ? videoRef : null}
                  src={work.video}
                  autoPlay={true}
                  loop={true}
                  preload="auto"
                  muted={isCurrent ? isMuted : true}
                  playsInline={true}
                  style={{ imageRendering: '-webkit-optimize-contrast', transform: 'translate3d(0, 0, 0)' }}
                  onClick={isCurrent ? togglePlayPause : undefined}
                  className={`absolute inset-0 w-full h-full object-contain ${
                    isCurrent ? 'cursor-pointer' : 'pointer-events-none'
                  }`}
                />

                {/* Localized Vignette Gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/40 pointer-events-none" />

                {/* Overlays for Non-Current (Front/Back) Reels */}
                {!isCurrent && (
                  <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-black/30 backdrop-blur-[2px] pointer-events-none">
                    <span className="glass-pill px-4 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase text-white/90 bg-black/60 border-white/20">
                      {isPrev ? "← Previous Work" : "Next Work →"}
                    </span>
                  </div>
                )}

                {/* Top Header */}
                <div className="relative z-20 p-4 sm:p-5 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#1F1929] to-[#8B7CA8] p-[1.5px]">
                      <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-white text-[10px] font-serif font-bold">
                        N
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-semibold text-white tracking-wide">@nordmediahouse</span>
                        <svg className="w-3.5 h-3.5 text-[#8B7CA8]" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                      </div>
                      <span className="text-[10px] text-white/60 uppercase tracking-widest">{work.category}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="glass-pill px-2 py-0.5 rounded-full text-[8.5px] font-mono font-bold text-[#E2D9F3] bg-black/60 border border-[#8B7CA8]/40 backdrop-blur-md">
                      {work.qualityBadge || (work.aspectRatio === '16/9' ? '4K UHD • 60FPS' : '1080P • 60FPS')}
                    </span>
                    <span className="glass-pill px-2.5 py-0.5 rounded-full text-[10px] font-bold text-white/80 bg-white/10 border-white/20">
                      {work.views}
                    </span>
                  </div>
                </div>

                {/* Right Action Rail (Only visible on active reel) */}
                {isCurrent && (
                  <div className="absolute right-3 bottom-24 z-20 flex flex-col items-center gap-4">
                    {/* Cinema Fullscreen Action */}
                    <button
                      onClick={toggleFullscreen}
                      className="flex flex-col items-center gap-1 text-white hover:scale-110 active:scale-95 transition-transform"
                      title="Cinema Fullscreen (F)"
                    >
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-5h-4m4 0v4m0-4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                        </svg>
                      </div>
                      <span className="text-[9px] font-semibold text-white/90">Cinema</span>
                    </button>

                    {/* Like Button */}
                    <button
                      onClick={() => toggleLike(work.id)}
                      className="flex flex-col items-center gap-1 text-white hover:scale-110 active:scale-95 transition-transform"
                    >
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md ${
                        likedMap[work.id] ? 'bg-rose-500 text-white' : 'bg-black/40 text-white border border-white/20'
                      }`}>
                        <svg className="w-5 h-5" fill={likedMap[work.id] ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <span className="text-[10px] font-semibold text-white/90">
                        {likedMap[work.id] ? 'Liked' : work.likes}
                      </span>
                    </button>

                    {/* Inquire Direct Action */}
                    <a
                      href="#contact"
                      onClick={onClose}
                      className="flex flex-col items-center gap-1 text-white hover:scale-110 active:scale-95 transition-transform"
                    >
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center">
                        <svg className="w-5 h-5 text-[#BBA9D0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </div>
                      <span className="text-[10px] font-semibold text-white/90">Inquire</span>
                    </a>

                    {/* Rotating Vinyl Audio Disc */}
                    <div className="w-10 h-10 rounded-full bg-[#1F1929] border-2 border-white/30 flex items-center justify-center animate-spin" style={{ animationDuration: '6s' }}>
                      <div className="w-3 h-3 rounded-full bg-[#BBA9D0]" />
                    </div>
                  </div>
                )}

                {/* Bottom Caption Information */}
                <div className={`relative z-20 p-4 sm:p-5 ${isCurrent ? 'pr-16' : ''}`}>
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-white leading-snug drop-shadow-sm">
                    {work.title}
                  </h3>
                  <p className="text-xs text-white/80 line-clamp-2 mt-1">
                    {work.description}
                  </p>

                  {/* Audio Track Ticker */}
                  {isCurrent && (
                    <div className="mt-3 flex items-center gap-2 text-[11px] text-[#BBA9D0] overflow-hidden">
                      <svg className="w-3.5 h-3.5 flex-shrink-0 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                      </svg>
                      <span className="truncate tracking-wide font-medium">{work.sound}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
