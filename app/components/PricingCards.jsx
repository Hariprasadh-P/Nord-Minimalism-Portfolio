"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const retainersData = [
  {
    id: "basic",
    degree: "0° NORTH",
    name: "Foundation",
    subtitle: "Essential Foundation Retainer",
    badge: "Foundation Tier",
    isPopular: false,
    highlight: false,
    features: [
      "8 High-Quality Editorial Posts",
      "12 Short-Form Engaging Reels",
      "Brand Content Strategy & Direction",
      "Caption Writing & Curated Hashtags",
      "Monthly Performance Overview",
      "Basic Community Engagement"
    ]
  },
  {
    id: "growth",
    degree: "180° SOUTH",
    name: "Growth Retainer",
    subtitle: "Accelerated Scaling Retainer",
    badge: "MOST POPULAR",
    isPopular: true,
    highlight: true,
    features: [
      "10 Creative Showcase Posts",
      "16 High-Retention Engaging Reels",
      "Meta Ads Management & Creative A/B",
      "Audience Engagement & Growth Strategy",
      "Bi-Weekly Analytics & Strategy Sprints",
      "Dedicated Creative Lead"
    ]
  },
  {
    id: "premium",
    degree: "360° EAST",
    name: "Enterprise",
    subtitle: "Full-Service Studio Retainer",
    badge: "Enterprise Tier",
    isPopular: false,
    highlight: false,
    features: [
      "12 Premium Editorial Posts",
      "20 Trending High-Production Reels",
      "Advanced Meta Ads Scaling Funnel",
      "Full Social Media & Community Handling",
      "Weekly Strategic Performance Sprints",
      "On-Demand Creative Director Support"
    ]
  }
];

export const addonServices = [
  {
    title: "Menu Card Designing",
    desc: "Sensory, luxury editorial layouts for restaurants, specialty cafes, and boutique lounges.",
    tag: "Print & Digital"
  },
  {
    title: "Logo Designing & Brand Mark",
    desc: "Timeless vector marks, complete typographic rules, and corporate identity design systems.",
    tag: "Identity"
  },
  {
    title: "Meta Ad Creative Production",
    desc: "High-intent UGC video edits, motion typography hooks, and rapid A/B testing ad sets.",
    tag: "Performance Ads"
  },
  {
    title: "Commercial Photography",
    desc: "On-location food styling, architectural shoots, fashion lookbooks, and executive founder portraits.",
    tag: "Production"
  }
];

export default function PricingCards() {
  const [activeTab, setActiveTab] = useState('retainers'); // 'retainers' | 'services'

  const handleSelectPlan = (planName) => {
    const selectEl = document.getElementById('contactPackage');
    if (selectEl) {
      selectEl.value = planName;
    }
    const contactSec = document.getElementById('contact');
    if (contactSec) {
      contactSec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-24 sm:py-32 relative bg-[#FAF8FF] overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[500px] bg-[#BBA9D0]/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="glass-pill px-4 py-1.5 rounded-full inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#8B7CA8]" />
            <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#1F1929]/70">
              03 &mdash; Compass Milestones
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#1F1929] leading-tight max-w-2xl">
            Creative Rate Card &<br />
            <span className="text-[#8B7CA8] font-normal italic">Bespoke Retainers</span>
          </h2>
          
          <p className="mt-4 text-[#1F1929]/70 text-sm sm:text-base max-w-xl">
            Structured around directional milestones. Tailored monthly partnerships designed to match your brand's growth phase.
          </p>

          {/* Toggle Switcher: Retainers vs Add-on Services */}
          <div className="mt-8 glass-card p-1.5 rounded-full inline-flex items-center gap-1 border-white/80 bg-white/70 shadow-sm">
            <button
              onClick={() => setActiveTab('retainers')}
              className={`px-6 py-2 rounded-full text-xs uppercase tracking-[0.16em] font-bold transition-all ${
                activeTab === 'retainers'
                  ? 'bg-[#1F1929] text-white shadow-md'
                  : 'text-[#1F1929]/70 hover:text-[#1F1929]'
              }`}
            >
              Retainer Compass
            </button>
            <button
              onClick={() => setActiveTab('services')}
              className={`px-6 py-2 rounded-full text-xs uppercase tracking-[0.16em] font-bold transition-all ${
                activeTab === 'services'
                  ? 'bg-[#1F1929] text-white shadow-md'
                  : 'text-[#1F1929]/70 hover:text-[#1F1929]'
              }`}
            >
              Add-On Services
            </button>
          </div>
        </div>

        {/* Retainers Grid */}
        {activeTab === 'retainers' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {retainersData.map((plan, i) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className={`p-8 rounded-[2.5rem] flex flex-col justify-between relative overflow-hidden glass-card transition-all duration-300 hover:-translate-y-2 ${
                  plan.highlight
                    ? 'border-[#8B7CA8]/40 bg-white/85 shadow-[0_20px_50px_rgba(139,124,168,0.18)] ring-1 ring-[#8B7CA8]/30'
                    : 'border-white/70 bg-white/60'
                }`}
              >
                {/* Popular Pill Tag */}
                {plan.isPopular && (
                  <div className="absolute top-0 right-8 transform -translate-y-0">
                    <span className="inline-block px-4 py-1 text-[9px] uppercase tracking-[0.25em] font-bold bg-[#1F1929] text-white rounded-b-xl shadow-md">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  <div className="text-[11px] font-mono tracking-widest text-[#8B7CA8] font-bold mb-2">
                    {plan.degree}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1F1929] mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-[#1F1929]/60 uppercase tracking-widest mb-6 font-semibold">
                    {plan.subtitle}
                  </p>

                  <div className="w-full h-[1px] bg-[#1F1929]/10 mb-6" />

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3 text-xs sm:text-sm text-[#1F1929]/80 leading-relaxed font-sans">
                        <div className="mt-0.5 w-4 h-4 rounded-full bg-[#8B7CA8]/20 flex items-center justify-center flex-shrink-0">
                          <svg className="w-2.5 h-2.5 text-[#1F1929]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => handleSelectPlan(`${plan.degree} ${plan.name}`)}
                  className={`w-full py-4 rounded-full text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 shadow-sm ${
                    plan.highlight
                      ? 'bg-[#1F1929] text-white hover:bg-[#8B7CA8] hover:shadow-lg hover:scale-[1.02] active:scale-95'
                      : 'glass-card text-[#1F1929] hover:bg-[#1F1929] hover:text-white active:scale-95'
                  }`}
                >
                  Inquire Retainer &rarr;
                </button>
              </motion.div>
            ))}
          </div>
        )}

        {/* Add-on Services Grid */}
        {activeTab === 'services' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {addonServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="glass-card p-8 rounded-[2rem] flex flex-col justify-between hover:-translate-y-1.5 transition-all bg-white/70 border-white/70"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="glass-pill px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-[#8B7CA8] bg-white">
                      {service.tag}
                    </span>
                    <span className="text-xs font-mono text-[#1F1929]/40">0{index + 1}</span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-[#1F1929] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#1F1929]/70 leading-relaxed font-sans">
                    {service.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#1F1929]/5 flex items-center justify-between">
                  <span className="text-xs text-[#1F1929]/60 uppercase tracking-widest font-semibold">
                    Available as Add-on
                  </span>
                  <button
                    onClick={() => handleSelectPlan(service.title)}
                    className="text-xs font-bold uppercase tracking-wider text-[#1F1929] hover:text-[#8B7CA8] transition-colors flex items-center gap-1"
                  >
                    <span>Inquire</span>
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
