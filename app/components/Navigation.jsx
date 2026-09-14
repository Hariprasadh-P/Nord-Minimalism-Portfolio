"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Magnetic from "./Magnetic";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Works", href: "#works" },
    { name: "Still Gallery", href: "#photography" },
    { name: "Methodology", href: "#methodology" },
    { name: "Retainers", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="nord-glass px-6 py-3 rounded-full flex items-center justify-between border border-[#22092C]/10 bg-[#FAF7F2]/80 backdrop-blur-2xl shadow-[0_12px_32px_rgba(34,9,44,0.06)]">
            {/* Brand Logo with 8-Point Compass Star */}
            <Magnetic strength={0.2}>
              <a
                href="#"
                data-cursor-hover="true"
                className="flex items-center gap-3 group"
              >
                <div className="w-8 h-8 rounded-full bg-[#22092C] text-[#FAF7F2] flex items-center justify-center font-serif text-sm font-bold shadow-sm group-hover:scale-105 transition-transform">
                  <svg
                    viewBox="0 0 40 40"
                    className="w-4 h-4 fill-current group-hover:rotate-90 transition-transform duration-500"
                  >
                    <polygon points="20,2 22,16 20,20 18,16" />
                    <polygon points="20,38 22,24 20,20 18,24" />
                    <polygon points="38,20 24,22 20,20 24,18" />
                    <polygon points="2,20 16,22 20,20 16,18" />
                    <polygon points="32,8 24,17 20,20 23,16" opacity="0.8" />
                    <polygon points="32,32 24,23 20,20 23,24" opacity="0.8" />
                    <polygon points="8,32 16,23 20,20 17,24" opacity="0.8" />
                    <polygon points="8,8 16,17 20,20 17,16" opacity="0.8" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="font-serif font-bold tracking-[0.24em] text-xs uppercase text-[#22092C]">
                    NORD
                  </span>
                  <span className="text-[8px] uppercase tracking-[0.38em] text-[#22092C]/60 -mt-0.5 font-sans font-medium">
                    MEDIA HOUSE
                  </span>
                </div>
              </a>
            </Magnetic>

            {/* Desktop Navigation Links with Magnetic Follow & Elastic Snap */}
            <nav className="hidden md:flex items-center gap-2 lg:gap-3 text-xs uppercase tracking-[0.18em] font-semibold text-[#22092C]/75">
              {navLinks.map((link) => (
                <Magnetic key={link.name} strength={0.32}>
                  <a
                    href={link.href}
                    data-cursor-hover="true"
                    className="px-3 py-1.5 rounded-full hover:text-[#22092C] hover:bg-[#22092C]/5 transition-colors relative block"
                  >
                    {link.name}
                  </a>
                </Magnetic>
              ))}
            </nav>

            {/* Action CTA & Mobile Hamburger */}
            <div className="flex items-center gap-3">
              <Magnetic strength={0.25}>
                <a
                  href="#contact"
                  data-cursor-hover="true"
                  className="hidden sm:inline-flex items-center gap-2 px-5 py-2 text-[11px] uppercase tracking-[0.2em] font-bold rounded-full bg-[#22092C] text-[#FAF7F2] hover:bg-[#3D1550] transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <span>Initiate Brief</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C7BBD0] animate-pulse" />
                </a>
              </Magnetic>

              {/* Mobile Menu Trigger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden w-9 h-9 rounded-full flex flex-col items-center justify-center gap-1.5 bg-[#22092C]/5 text-[#22092C] hover:bg-[#22092C]/10 transition-colors"
                aria-label="Toggle menu"
              >
                <span
                  className={`w-4 h-[1.5px] bg-[#22092C] transition-transform duration-300 ${
                    mobileMenuOpen ? "rotate-45 translate-y-[4.5px]" : ""
                  }`}
                />
                <span
                  className={`w-4 h-[1.5px] bg-[#22092C] transition-transform duration-300 ${
                    mobileMenuOpen ? "-rotate-45 -translate-y-[4.5px]" : ""
                  }`}
                />
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
            className="fixed inset-x-4 top-20 z-40 md:hidden nord-glass rounded-3xl p-6 shadow-2xl border border-[#22092C]/10 bg-[#FAF7F2]/95 backdrop-blur-2xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 text-sm uppercase tracking-[0.2em] font-medium text-[#22092C] border-b border-[#22092C]/5 hover:text-[#3D1550] transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 w-full py-3 text-center text-xs uppercase tracking-[0.2em] font-bold rounded-full bg-[#22092C] text-[#FAF7F2] shadow-md hover:bg-[#3D1550] transition-colors"
              >
                Initiate Project
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
