"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Magnetic from "./Magnetic";

export const retainersData = [
  {
    id: "basic",
    degree: "0° NORTH",
    name: "Foundation",
    subtitle: "Essential Brand System",
    badge: "Tier 01",
    isPopular: false,
    features: [
      "8 High-Quality Editorial Stills",
      "12 Short-Form Cinematic Reels",
      "Directional Scripting & Storyboards",
      "Typography & Color Grading Systems",
      "Monthly Algorithmic Performance Audit",
      "Dedicated Project Manager",
    ],
  },
  {
    id: "growth",
    degree: "180° SOUTH",
    name: "Growth Velocity",
    subtitle: "Full Strategic Scale",
    badge: "MOST REQUESTED",
    isPopular: true,
    features: [
      "10 Curated Editorial Stills",
      "16 High-Retention Cinematic Reels",
      "Meta Ads Management & Creative A/B",
      "Dedicated Creative Director Lead",
      "Bi-Weekly Pacing & Analytics Reviews",
      "Priority Production Dispatch",
    ],
  },
  {
    id: "premium",
    degree: "360° EAST",
    name: "Enterprise",
    subtitle: "Bespoke Creative Ecosystem",
    badge: "Tier 03",
    isPopular: false,
    features: [
      "14 Commercial 4K Stills",
      "22 Trending High-Production Reels",
      "Full-Funnel Meta & Omnichannel Ads",
      "Complete Brand Identity Governance",
      "Weekly Strategic War-Room Sprints",
      "Executive Creative Director Oversight",
    ],
  },
];

export const addonServices = [
  {
    title: "Editorial Menu Architecture",
    desc: "Tactile, luxury typography layouts for restaurants, culinary houses, and boutique lounges.",
    tag: "Print & Digital",
  },
  {
    title: "Brand Marks & Vector Identity",
    desc: "Timeless insignia, complete typographic rules, and scalable corporate design systems.",
    tag: "Identity",
  },
  {
    title: "Performance Ad Architectures",
    desc: "High-intent motion graphic hooks and rapid multi-variant testing for conversion scale.",
    tag: "Performance Media",
  },
  {
    title: "On-Location Commercial Stills",
    desc: "Culinary table styling, architectural photography, and executive editorial captures.",
    tag: "Production",
  },
];

export default function PricingCards() {
  const [activeTab, setActiveTab] = useState("retainers");

  const handleSelectPlan = (planName) => {
    const selectEl = document.getElementById("contactPackage");
    if (selectEl) {
      selectEl.value = planName;
    }
    const contactSec = document.getElementById("contact");
    if (contactSec) {
      contactSec.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="pricing"
      className="py-28 sm:py-36 relative bg-[#FAF7F2] overflow-hidden select-none"
    >
      {/* Background Soft Glow */}
      <div 
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[500px] bg-[#3D1550]/8 rounded-full blur-[160px]"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Masked Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="nord-pill px-4 py-1.5 rounded-full inline-flex items-center gap-2.5 mb-5"
            >
              <span className="w-2 h-2 rounded-full bg-[#22092C]" />
              <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#22092C]/80">
                04 &mdash; Retainers &amp; Rate Card
              </span>
            </motion.div>

            <div className="mask-line-container">
              <motion.h2
                initial={{ y: "115%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
                className="font-syne text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#22092C] tracking-tight leading-[1.05] uppercase"
              >
                COMPASS RETAINER
              </motion.h2>
            </div>

            <div className="mask-line-container mt-1">
              <motion.h2
                initial={{ y: "115%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.95, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-syne text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#22092C]/40 tracking-tight leading-[1.05] uppercase"
              >
                STRUCTURES
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-6 text-sm sm:text-base text-[#22092C]/75 max-w-xl leading-relaxed font-normal"
            >
              Transparent studio retainers engineered for consistent algorithmic presence, creative continuity, and compounded brand authority.
            </motion.p>
          </div>

          {/* Toggle Switcher */}
          <div className="nord-glass p-1.5 rounded-full inline-flex items-center">
            <button
              onClick={() => setActiveTab("retainers")}
              className={`px-5 py-2 rounded-full text-xs font-syne font-bold uppercase tracking-[0.16em] transition-all ${
                activeTab === "retainers"
                  ? "bg-[#22092C] text-[#FAF7F2] shadow-sm"
                  : "text-[#22092C]/60 hover:text-[#22092C]"
              }`}
            >
              Monthly Retainers
            </button>
            <button
              onClick={() => setActiveTab("services")}
              className={`px-5 py-2 rounded-full text-xs font-syne font-bold uppercase tracking-[0.16em] transition-all ${
                activeTab === "services"
                  ? "bg-[#22092C] text-[#FAF7F2] shadow-sm"
                  : "text-[#22092C]/60 hover:text-[#22092C]"
              }`}
            >
              Bespoke Add-Ons
            </button>
          </div>
        </div>

        {/* Tab 1: Monthly Retainers */}
        {activeTab === "retainers" ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {retainersData.map((tier, index) => {
              const isHero = tier.isPopular;
              return (
                <motion.div
                  key={tier.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    delay: index * 0.12,
                    duration: 0.75,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{ y: -8 }}
                  className={`rounded-[2.5rem] p-8 sm:p-10 flex flex-col justify-between relative transition-all duration-300 ${
                    isHero
                      ? "bg-[#22092C] text-[#FAF7F2] shadow-[0_24px_60px_rgba(34,9,44,0.3)] border border-[#22092C]"
                      : "nord-glass text-[#22092C] shadow-[0_16px_40px_rgba(34,9,44,0.06)] border border-[#22092C]/10"
                  }`}
                >
                  <div>
                    {/* Badge & Degree */}
                    <div className="flex items-center justify-between mb-6">
                      <span
                        className={`px-3.5 py-1 rounded-full text-[9px] font-mono font-bold uppercase tracking-[0.22em] ${
                          isHero
                            ? "bg-[#FAF7F2]/15 text-[#FAF7F2] border border-white/20"
                            : "bg-[#22092C]/5 text-[#22092C] border border-[#22092C]/10"
                        }`}
                      >
                        {tier.badge}
                      </span>
                      <span
                        className={`font-mono text-[10px] tracking-[0.2em] uppercase ${
                          isHero ? "text-[#C7BBD0]" : "text-[#22092C]/50"
                        }`}
                      >
                        {tier.degree}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      className={`font-syne text-3xl font-extrabold tracking-tight ${
                        isHero ? "text-[#FAF7F2]" : "text-[#22092C]"
                      }`}
                    >
                      {tier.name}
                    </h3>
                    <p
                      className={`text-xs uppercase tracking-[0.16em] mt-1 font-semibold ${
                        isHero ? "text-[#C7BBD0]" : "text-[#3D1550]"
                      }`}
                    >
                      {tier.subtitle}
                    </p>

                    {/* Feature List */}
                    <ul className="mt-8 space-y-3.5 pt-6 border-t border-current/10">
                      {tier.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-3 text-xs sm:text-sm">
                          <span
                            className={`mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                              isHero ? "bg-[#FAF7F2]" : "bg-[#22092C]"
                            }`}
                          />
                          <span className={isHero ? "text-[#FAF7F2]/85" : "text-[#22092C]/80"}>
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button with Magnetic Physics */}
                  <div className="mt-10 pt-6 border-t border-current/10">
                    <Magnetic strength={0.3} className="w-full">
                      <button
                        onClick={() => handleSelectPlan(tier.name)}
                        data-cursor-hover="true"
                        className={`w-full py-4 rounded-full text-xs font-syne font-bold uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 ${
                          isHero
                            ? "bg-[#FAF7F2] text-[#22092C] hover:bg-white shadow-lg"
                            : "bg-[#22092C] text-[#FAF7F2] hover:bg-[#3D1550]"
                        }`}
                      >
                        <span>Select Retainer</span>
                        <span>&rarr;</span>
                      </button>
                    </Magnetic>
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          /* Tab 2: Bespoke Add-Ons */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {addonServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -6 }}
                className="nord-glass p-8 rounded-[2rem] flex flex-col justify-between border border-[#22092C]/10 bg-[#FAF7F2]/80"
              >
                <div>
                  <span className="nord-pill px-3 py-1 rounded-full text-[9px] font-mono uppercase tracking-[0.2em] font-bold text-[#22092C] inline-block mb-4">
                    {service.tag}
                  </span>
                  <h3 className="font-syne text-xl font-bold text-[#22092C] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#22092C]/75 leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#22092C]/10">
                  <button
                    onClick={() => handleSelectPlan(service.title)}
                    className="text-[11px] font-syne font-bold uppercase tracking-[0.18em] text-[#22092C] hover:text-[#3D1550] flex items-center gap-2"
                  >
                    <span>Commission Service</span>
                    <span>&rarr;</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
