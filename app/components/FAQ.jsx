"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is included in a monthly Reels & Brand Retainer?",
    answer:
      "Our retainers provide a completely autonomous creative and production engine. This covers directional scriptwriting, on-location 4K UHD capture, high-contrast grading, rhythm-locked sound design, multi-ratio deliverables (9:16 and 16:9), and perpetual worldwide commercial advertising rights.",
  },
  {
    question: "Do we own the raw footage, ProRes masters, and commercial rights?",
    answer:
      "Yes, 100%. Upon delivery and settlement of each sprint, your brand retains full global commercial usage across paid media, organic feeds, digital billboards, and broadcast. Raw log files and Apple ProRes 422 HQ archives are archived for you.",
  },
  {
    question: "What is the typical delivery velocity?",
    answer:
      "Following our on-location production day, initial polished master cuts are delivered within 5 to 7 business days via your private preview suite. Accelerated 48-hour sprints are supported for time-sensitive launches under our Enterprise retainer.",
  },
  {
    question: "Can we commission standalone commercial still or video projects?",
    answer:
      "Yes. Outside our core monthly retainers, we regularly execute flagship campaign launches, high-fashion culinary menus, and founder brand architectures. Submit a brief via our contact terminal to align on scope.",
  },
  {
    question: "How does Scandinavian visual restraint produce superior ROAS?",
    answer:
      "By stripping away visual clutter, your product's tactile allure becomes unmistakable. We engineer sub-second contrast hooks that stop feed skimming instantly, converting raw attention into predictable commercial return.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section
      id="faq"
      className="py-28 sm:py-36 relative bg-[#FAF7F2] overflow-hidden select-none border-t border-[#22092C]/10"
    >
      <div 
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-10 w-96 h-96 bg-[#3D1550]/8 rounded-full blur-[150px]"
      />
      <div 
        aria-hidden="true"
        className="pointer-events-none absolute bottom-1/3 right-10 w-96 h-96 bg-[#8B7CA8]/8 rounded-full blur-[150px]"
      />

      <div className="max-w-4xl mx-auto px-6 sm:px-10 relative z-10">
        {/* Masked Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="nord-pill px-4 py-1.5 rounded-full inline-flex items-center gap-2.5 mb-5"
          >
            <span className="w-2 h-2 rounded-full bg-[#22092C]" />
            <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#22092C]/80">
              05 &mdash; Inquiries &amp; Governance
            </span>
          </motion.div>

          <div className="mask-line-container">
            <motion.h2
              initial={{ y: "115%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
              className="font-syne text-4xl sm:text-5xl font-extrabold text-[#22092C] tracking-tight leading-[1.05] uppercase"
            >
              FREQUENTLY ASKED
            </motion.h2>
          </div>

          <div className="mask-line-container mt-1">
            <motion.h2
              initial={{ y: "115%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.95, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-syne text-4xl sm:text-5xl font-extrabold text-[#22092C]/40 tracking-tight leading-[1.05] uppercase"
            >
              QUESTIONS
            </motion.h2>
          </div>

          <p className="mt-4 text-sm sm:text-base text-[#22092C]/75 leading-relaxed font-normal">
            Transparent protocols regarding retainers, intellectual property ownership, production velocity, and directional strategy.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`rounded-[2rem] transition-all duration-300 overflow-hidden border ${
                  isOpen
                    ? "border-[#22092C]/30 bg-white/90 shadow-[0_16px_40px_rgba(34,9,44,0.08)]"
                    : "border-[#22092C]/10 bg-[#FAF7F2]/60 hover:bg-white/70 shadow-sm"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  data-cursor-hover="true"
                  className="w-full py-6 px-7 sm:px-8 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-syne text-base sm:text-lg font-bold text-[#22092C]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-[#22092C] text-[#FAF7F2] rotate-45"
                        : "bg-[#22092C]/5 text-[#22092C]"
                    }`}
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-7 sm:px-8 pb-7 text-xs sm:text-sm text-[#22092C]/75 leading-relaxed border-t border-[#22092C]/5 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
