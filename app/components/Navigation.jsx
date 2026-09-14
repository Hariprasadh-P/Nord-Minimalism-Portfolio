"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Reels", href: "#works" },
    { name: "Photography", href: "#photography" },
    { name: "Methodology", href: "#methodology" },
    { name: "Retainers", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.header 
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="glass-card px-5 py-3 rounded-full flex items-center justify-between shadow-[0_8px_30px_rgba(44,36,59,0.06)] border border-white/60 bg-white/75 backdrop-blur-2xl">
            
            {/* Brand Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#1F1929] to-[#8B7CA8] flex items-center justify-center text-white text-xs font-serif font-bold tracking-wider shadow-sm group-hover:scale-105 transition-transform">
                N
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold tracking-widest text-xs uppercase text-[#1F1929]">
                  Nord
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#8B7CA8] -mt-0.5">
                  Media House
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-7 text-xs uppercase tracking-[0.18em] font-medium text-[#1F1929]/70">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-[#1F1929] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[1.5px] after:bg-[#8B7CA8] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Action CTA & Mobile Toggle */}
            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2 text-[11px] uppercase tracking-[0.16em] font-bold rounded-full bg-[#1F1929] text-white hover:bg-[#8B7CA8] transition-all duration-300 shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Book Call</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#BBA9D0] animate-pulse" />
              </a>

              {/* Mobile Hamburger Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden w-9 h-9 rounded-full flex flex-col items-center justify-center gap-1.5 bg-[#1F1929]/5 text-[#1F1929] hover:bg-[#1F1929]/10 transition-colors"
                aria-label="Toggle menu"
              >
                <span className={`w-4 h-[1.5px] bg-[#1F1929] transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-[4.5px]' : ''}`} />
                <span className={`w-4 h-[1.5px] bg-[#1F1929] transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-[4.5px]' : ''}`} />
              </button>
            </div>

          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-4 top-20 z-40 md:hidden glass-card rounded-3xl p-6 shadow-2xl border border-white/80 bg-white/90 backdrop-blur-2xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 text-sm uppercase tracking-[0.2em] font-medium text-[#1F1929] border-b border-[#1F1929]/5 hover:text-[#8B7CA8] transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 w-full py-3 text-center text-xs uppercase tracking-[0.2em] font-bold rounded-full bg-[#1F1929] text-white shadow-md hover:bg-[#8B7CA8] transition-colors"
              >
                Start Inquiring
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
