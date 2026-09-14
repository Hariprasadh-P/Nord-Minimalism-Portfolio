"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if consent has already been given
    const consent = localStorage.getItem('nord_cookie_consent');
    if (!consent) {
      // Delay slightly for smooth entrance
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = (type) => {
    localStorage.setItem('nord_cookie_consent', type);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.aside
          aria-label="Cookie and Privacy Preferences"
          role="region"
          initial={{ y: 50, opacity: 0, scale: 0.96 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 40, opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-5 inset-x-5 sm:left-auto sm:right-6 sm:max-w-md z-50 glass-card bg-white/92 backdrop-blur-2xl p-6 rounded-[2rem] border border-white/80 shadow-[0_20px_60px_rgba(44,36,59,0.18)]"
        >
          <div className="flex items-start gap-3 mb-3">
            <div className="w-7 h-7 rounded-full bg-[#1F1929] text-white flex items-center justify-center font-serif text-[11px] font-bold flex-shrink-0 mt-0.5">
              N
            </div>
            <div>
              <h3 className="font-serif font-bold text-sm text-[#1F1929]">
                Privacy & Operational Discretion
              </h3>
              <p className="text-xs text-[#1F1929]/70 leading-relaxed mt-1">
                We use essential storage to optimize 4K video streams and remember your audio preferences. No invasive cross-site trackers. Read our{' '}
                <Link href="/privacy" className="underline underline-offset-2 text-[#8B7CA8] hover:text-[#1F1929]">
                  Privacy Policy
                </Link>.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 pt-2 justify-end">
            <button
              onClick={() => handleAccept('essential')}
              className="px-3.5 py-2 rounded-full text-xs font-semibold text-[#1F1929]/70 hover:text-[#1F1929] hover:bg-black/5 transition-colors"
            >
              Essential Only
            </button>
            <button
              onClick={() => handleAccept('all')}
              className="px-4 py-2 rounded-full bg-[#1F1929] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#8B7CA8] transition-colors shadow-sm"
            >
              Accept All
            </button>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
