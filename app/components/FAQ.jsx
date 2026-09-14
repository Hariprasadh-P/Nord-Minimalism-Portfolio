"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "What is included in a monthly Reels & Media Retainer?",
    answer: "Our retainers (Basic, Growth, and Enterprise) provide a complete hands-off production engine. This includes directional creative strategy, on-location cinematic shooting (4K UHD 60fps), high-end color grading, sound design, hook testing, platform-native aspect ratio masters (9:16 and 16:9), and full commercial advertising licensing rights."
  },
  {
    question: "Do we own the raw 4K footage and commercial rights?",
    answer: "Yes. Upon completion of each production cycle and invoice settlement, you receive 100% worldwide commercial usage rights for social ads, organic feeds, website hero media, and retail digital displays. Raw log files and ProRes 4K archives are also available upon request."
  },
  {
    question: "What is the typical turnaround time for deliverables?",
    answer: "Following our on-set shoot day, initial master cuts are delivered within 5 to 7 business days via a private frosted preview portal. Rapid 48-hour turnarounds are also supported for urgent campaign launches under our Enterprise retainer."
  },
  {
    question: "Can we book one-off commercial photography or video projects?",
    answer: "Absolutely. In addition to our monthly brand retainers, we frequently execute one-off flagship commercial launches, product catalogue shoots, and editorial restaurant menu styling. Reach out via our inquiry form or WhatsApp dispatch to discuss custom project scopes."
  },
  {
    question: "How does directional creative strategy drive higher ROAS?",
    answer: "Rather than producing generic content, we engineer videos specifically for audience retention: high-contrast lighting to halt thumb-scrolls within the first 0.8 seconds, rhythm-matched audio mastering, and clear call-to-actions tailored directly for Meta Ads and organic viral algorithms."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 relative bg-[#FAF8FF] overflow-hidden border-t border-[#1F1929]/5">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#8B7CA8]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-[#BBA9D0]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="glass-pill px-4 py-1.5 rounded-full inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#8B7CA8]" />
            <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#1F1929]/70">
              05 &mdash; Common Inquiries & Clarity
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#1F1929] leading-tight">
            Frequently Asked<br />
            <span className="text-[#8B7CA8] font-normal italic">Questions</span>
          </h2>
          <p className="mt-3 text-sm text-[#1F1929]/70">
            Clear answers on retainers, commercial licensing, turnaround timelines, and our directional methodology.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-[2rem] glass-card transition-all duration-300 overflow-hidden border ${
                  isOpen 
                    ? 'border-[#8B7CA8]/40 bg-white/80 shadow-[0_15px_40px_rgba(44,36,59,0.08)]' 
                    : 'border-white/70 bg-white/40 hover:bg-white/60 shadow-sm'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-6 px-7 sm:px-8 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-[#1F1929]">
                    {faq.question}
                  </span>
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? 'bg-[#1F1929] text-white rotate-180' : 'bg-[#1F1929]/5 text-[#1F1929]'
                  }`}>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-7 sm:px-8 pb-6 text-sm text-[#1F1929]/75 leading-relaxed border-t border-[#1F1929]/5 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom Direct Query Callout */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#1F1929]/60 mb-3">
            Have a specialized requirement or enterprise brief?
          </p>
          <a
            href="https://wa.me/919944686411?text=Hi%20Nord%20Media%20House,%20I%20have%20a%20question%20regarding%20commercial%20production"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 glass-pill px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-[0.15em] text-[#1F1929] hover:bg-[#1F1929] hover:text-white transition-all shadow-sm"
          >
            <span>Ask Us Directly on WhatsApp</span>
            <svg className="w-3.5 h-3.5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z"/>
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
