import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";

const SectionSkeleton = ({ height = "h-96" }) => (
  <div
    className={`w-full max-w-7xl mx-auto px-6 py-16 flex items-center justify-center ${height}`}
  >
    <div className="w-full h-full rounded-[2.5rem] nord-glass bg-white/40 border border-[#22092C]/10 animate-pulse flex flex-col items-center justify-center gap-4">
      <div className="w-10 h-10 rounded-full bg-[#22092C]/10" />
      <div className="w-44 h-3.5 rounded-full bg-[#22092C]/10" />
    </div>
  </div>
);

const WorksCarousel = dynamic(() => import("./components/WorksCarousel"), {
  loading: () => <SectionSkeleton height="h-[600px]" />,
});

const ZigzagGallery = dynamic(() => import("./components/ZigzagGallery"), {
  loading: () => <SectionSkeleton height="h-[650px]" />,
});

const Methodology = dynamic(() => import("./components/Methodology"), {
  loading: () => <SectionSkeleton height="h-[500px]" />,
});

const PricingCards = dynamic(() => import("./components/PricingCards"), {
  loading: () => <SectionSkeleton height="h-[550px]" />,
});

const FAQ = dynamic(() => import("./components/FAQ"), {
  loading: () => <SectionSkeleton height="h-[500px]" />,
});

const Contact = dynamic(() => import("./components/Contact"), {
  loading: () => <SectionSkeleton height="h-[500px]" />,
});

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#22092C] selection:bg-[#22092C] selection:text-[#FAF7F2] relative overflow-x-hidden">
      {/* Floating Navigation Header */}
      <Navigation />

      {/* Hero Section with Spinning Compass Star & Masked Line Reveal */}
      <Hero />

      {/* Cinematic Video Reels Showcase (Click card to launch Reel Format) */}
      <WorksCarousel />

      {/* Commercial Photography & Stills Archive (Click to inspect with swipe & arrows) */}
      <ZigzagGallery />

      {/* 4-Phase Directional Methodology */}
      <Methodology />

      {/* Compass Retainer Rate Cards */}
      <PricingCards />

      {/* Frequently Asked Questions */}
      <FAQ />

      {/* Project Brief & Contact Dispatch Terminal */}
      <Contact />

      {/* Studio Editorial Footer */}
      <footer className="border-t border-[#22092C]/10 pt-20 pb-12 bg-[#FAF7F2] relative z-10 select-none">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 pb-14 border-b border-[#22092C]/10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#22092C] text-[#FAF7F2] flex items-center justify-center font-serif text-base font-bold shadow-md">
                <svg viewBox="0 0 40 40" className="w-6 h-6 fill-current">
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
              <div>
                <span className="font-serif font-bold text-lg uppercase tracking-[0.22em] text-[#22092C] block">
                  NORD MEDIA HOUSE
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#22092C]/60 font-mono">
                  Directional Creative Studio &bull; 0° N
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-xs uppercase tracking-[0.18em] font-semibold text-[#22092C]/75">
              <a href="#works" className="hover:text-[#22092C] transition-colors">
                Works
              </a>
              <a href="#photography" className="hover:text-[#22092C] transition-colors">
                Still Gallery
              </a>
              <a href="#methodology" className="hover:text-[#22092C] transition-colors">
                Methodology
              </a>
              <a href="#pricing" className="hover:text-[#22092C] transition-colors">
                Retainers
              </a>
              <a href="#faq" className="hover:text-[#22092C] transition-colors">
                FAQ
              </a>
              <a href="#contact" className="hover:text-[#22092C] transition-colors">
                Contact
              </a>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#22092C] text-[#FAF7F2] text-xs font-syne font-bold uppercase tracking-[0.2em] hover:bg-[#3D1550] transition-all shadow-[0_12px_28px_rgba(34,9,44,0.18)]"
            >
              <span>Initiate Project</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C7BBD0]" />
            </a>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#22092C]/60 font-mono">
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="hover:text-[#22092C] transition-colors">
                Privacy Policy
              </Link>
              <span>&bull;</span>
              <Link href="/terms" className="hover:text-[#22092C] transition-colors">
                Terms of Service
              </Link>
              <span>&bull;</span>
              <a
                href="https://nordmediahouse.com/sitemap.xml"
                className="hover:text-[#22092C] transition-colors"
              >
                Sitemap
              </a>
            </div>

            <div className="text-center sm:text-right tracking-wider">
              &copy; {currentYear} Nord Media House. All rights reserved. Directional precision.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
