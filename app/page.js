import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Navigation from './components/Navigation';
import Hero from './components/Hero';

const SectionSkeleton = ({ height = "h-96" }) => (
  <div className={`w-full max-w-7xl mx-auto px-6 py-16 flex items-center justify-center ${height}`}>
    <div className="w-full h-full rounded-[2.5rem] glass-card bg-white/40 border border-white/60 animate-pulse flex flex-col items-center justify-center gap-4">
      <div className="w-10 h-10 rounded-full bg-[#8B7CA8]/20" />
      <div className="w-44 h-3.5 rounded-full bg-[#8B7CA8]/15" />
    </div>
  </div>
);

const WorksCarousel = dynamic(() => import('./components/WorksCarousel'), {
  loading: () => <SectionSkeleton height="h-[600px]" />,
});

const ZigzagGallery = dynamic(() => import('./components/ZigzagGallery'), {
  loading: () => <SectionSkeleton height="h-[650px]" />,
});

const Methodology = dynamic(() => import('./components/Methodology'), {
  loading: () => <SectionSkeleton height="h-[500px]" />,
});

const PricingCards = dynamic(() => import('./components/PricingCards'), {
  loading: () => <SectionSkeleton height="h-[550px]" />,
});

const FAQ = dynamic(() => import('./components/FAQ'), {
  loading: () => <SectionSkeleton height="h-[500px]" />,
});

const Contact = dynamic(() => import('./components/Contact'), {
  loading: () => <SectionSkeleton height="h-[500px]" />,
});

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <main className="min-h-screen bg-[#FAF8FF] text-[#1F1929] selection:bg-[#8B7CA8] selection:text-white relative overflow-hidden">
      {/* Top Floating Glass Navigation */}
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* Works & Horizontal Reel Showcase (All Video Works) */}
      <WorksCarousel />

      {/* Commercial Photography & Stills on a 3D Zigzag Plane */}
      <ZigzagGallery />

      {/* Strategic 4-Phase Methodology */}
      <Methodology />

      {/* Retainer Compass Rate Cards & Add-on Services */}
      <PricingCards />

      {/* Frequently Asked Questions */}
      <FAQ />

      {/* Interactive Contact & WhatsApp Dispatch */}
      <Contact />

      {/* Studio Editorial Footer */}
      <footer className="border-t border-[#1F1929]/10 pt-16 pb-12 bg-[#FAF8FF] relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-12 border-b border-[#1F1929]/5">
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#1F1929] text-white flex items-center justify-center font-serif text-sm font-bold shadow-sm">
                N
              </div>
              <div>
                <span className="font-serif font-bold text-base uppercase tracking-widest text-[#1F1929] block">
                  Nord Media House
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#8B7CA8]">
                  Directional Creative Studio &bull; Scandinavian Restraint
                </span>
              </div>
            </div>

            {/* Navigation Anchor Links */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-xs uppercase tracking-[0.18em] font-medium text-[#1F1929]/70">
              <a href="#works" className="hover:text-[#1F1929] transition-colors">Reels</a>
              <a href="#photography" className="hover:text-[#1F1929] transition-colors">Photography</a>
              <a href="#methodology" className="hover:text-[#1F1929] transition-colors">Methodology</a>
              <a href="#pricing" className="hover:text-[#1F1929] transition-colors">Retainers</a>
              <a href="#faq" className="hover:text-[#1F1929] transition-colors">FAQ</a>
              <a href="#contact" className="hover:text-[#1F1929] transition-colors">Contact</a>
            </div>

            {/* Direct Inquire CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1F1929] text-white text-xs font-bold uppercase tracking-[0.16em] hover:bg-[#8B7CA8] transition-all shadow-sm"
            >
              <span>Initiate Project</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#BBA9D0]" />
            </a>

          </div>

          {/* Bottom Legal, Social & Copyright Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#1F1929]/55">
            
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="hover:text-[#1F1929] transition-colors">
                Privacy Policy
              </Link>
              <span>&bull;</span>
              <Link href="/terms" className="hover:text-[#1F1929] transition-colors">
                Terms of Service
              </Link>
              <span>&bull;</span>
              <a href="https://nordmediahouse.com/sitemap.xml" className="hover:text-[#1F1929] transition-colors">
                Sitemap
              </a>
            </div>

            <div className="text-center sm:text-right tracking-wider">
              &copy; {currentYear} Nord Media House. All rights reserved. Built with directional precision.
            </div>

          </div>

        </div>
      </footer>
    </main>
  );
}
