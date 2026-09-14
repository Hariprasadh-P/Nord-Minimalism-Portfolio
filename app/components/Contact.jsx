"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Magnetic from "./Magnetic";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    package: "Growth Velocity Retainer",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const packagesList = [
    "Growth Velocity Retainer",
    "Foundation Retainer",
    "Enterprise Studio Retainer",
    "Editorial Menu Architecture",
    "Brand Marks & Vector Identity",
    "Performance Ad Architectures",
    "On-Location Commercial Stills",
    "Custom Partnership / General Inquiry",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const message =
      `*New Retainer Inquiry — Nord Media House*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Phone/WhatsApp:* ${formData.phone || "Not provided"}\n` +
      `*Selected Scope:* ${formData.package}\n` +
      `*Project Brief:* ${formData.notes || "Looking to discuss creative direction & short-form velocity."}`;

    const whatsappUrl = `https://wa.me/919363542725?text=${encodeURIComponent(message)}`;

    setSubmitted(true);
    window.open(whatsappUrl, "_blank");

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section
      id="contact"
      className="py-28 sm:py-36 relative bg-[#FAF7F2] border-t border-[#22092C]/10 select-none overflow-hidden"
    >
      {/* Background Soft Ambient Glow */}
      <div 
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-1/4 w-96 h-96 bg-[#3D1550]/8 rounded-full blur-[160px]"
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Agency Info & Studio Coordinates */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col"
          >
            <div className="nord-pill self-start px-4 py-1.5 rounded-full mb-6 inline-flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#22092C]" />
              <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#22092C]/80">
                06 &mdash; Initiate Dialogue
              </span>
            </div>

            <div className="mask-line-container">
              <h2 className="font-syne text-4xl sm:text-5xl font-extrabold text-[#22092C] tracking-tight leading-[1.05] uppercase">
                LET&apos;S CHART YOUR
              </h2>
            </div>
            <div className="mask-line-container mt-1">
              <h2 className="font-syne text-4xl sm:text-5xl font-extrabold text-[#22092C]/40 tracking-tight leading-[1.05] uppercase">
                NEXT HORIZON
              </h2>
            </div>

            <p className="text-[#22092C]/75 text-sm sm:text-base leading-relaxed mt-6 mb-10 font-normal">
              Whether you require high-velocity short-form reels, a full-service creative retainer, or bespoke brand architecture &mdash; our directors are prepared.
            </p>

            {/* Direct Contact Cards with Magnetic Pull */}
            <div className="space-y-4">
              <Magnetic strength={0.15} className="w-full">
                <a
                  href="mailto:nordmediahouse@gmail.com"
                  data-cursor-hover="true"
                  className="nord-glass p-4 rounded-2xl flex items-center gap-4 group hover:border-[#22092C]/40 transition-all bg-white/70 w-full"
                >
                  <div className="w-11 h-11 rounded-full bg-[#22092C] text-[#FAF7F2] flex items-center justify-center group-hover:bg-[#3D1550] transition-colors flex-shrink-0 shadow-sm">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#22092C]/60 block font-mono">
                      Direct Dispatch
                    </span>
                    <span className="text-sm font-bold text-[#22092C] group-hover:text-[#3D1550] transition-colors">
                      nordmediahouse@gmail.com
                    </span>
                  </div>
                </a>
              </Magnetic>

              <Magnetic strength={0.15} className="w-full">
                <a
                  href="https://wa.me/919363542725"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-hover="true"
                  className="nord-glass p-4 rounded-2xl flex items-center gap-4 group hover:border-[#22092C]/40 transition-all bg-white/70 w-full"
                >
                  <div className="w-11 h-11 rounded-full bg-[#22092C] text-[#FAF7F2] flex items-center justify-center group-hover:bg-[#3D1550] transition-colors flex-shrink-0 shadow-sm">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#22092C]/60 block font-mono">
                      WhatsApp Studio Dispatch
                    </span>
                    <span className="text-sm font-bold text-[#22092C] group-hover:text-[#3D1550] transition-colors">
                      +91 93635 42725
                    </span>
                  </div>
                </a>
              </Magnetic>
            </div>
          </motion.div>

          {/* Right Column: Interactive Inquiry Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="nord-glass p-8 sm:p-10 rounded-[2.5rem] shadow-[0_24px_60px_rgba(34,9,44,0.08)] border border-[#22092C]/10 bg-white/80">
              <h3 className="font-syne text-2xl font-bold text-[#22092C] mb-2">
                Project Commission Form
              </h3>
              <p className="text-xs sm:text-sm text-[#22092C]/70 mb-8">
                Transmits directly to our executive creative lead on WhatsApp.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-[0.2em] text-[#22092C]/70 font-semibold mb-2">
                      Your Name / Brand *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Erik Lindqvist"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#22092C]/15 text-[#22092C] text-sm focus:outline-none focus:border-[#22092C] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-[0.2em] text-[#22092C]/70 font-semibold mb-2">
                      Official Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="erik@brand.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#22092C]/15 text-[#22092C] text-sm focus:outline-none focus:border-[#22092C] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-[0.2em] text-[#22092C]/70 font-semibold mb-2">
                      WhatsApp / Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 / +1..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#22092C]/15 text-[#22092C] text-sm focus:outline-none focus:border-[#22092C] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-[0.2em] text-[#22092C]/70 font-semibold mb-2">
                      Scope / Retainer
                    </label>
                    <select
                      id="contactPackage"
                      value={formData.package}
                      onChange={(e) => setFormData({ ...formData, package: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#22092C]/15 text-[#22092C] text-sm focus:outline-none focus:border-[#22092C] transition-colors"
                    >
                      {packagesList.map((pkg) => (
                        <option key={pkg} value={pkg}>
                          {pkg}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-[0.2em] text-[#22092C]/70 font-semibold mb-2">
                    Project Brief &amp; Goals
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Briefly describe your brand, current challenges, and target milestones..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#22092C]/15 text-[#22092C] text-sm focus:outline-none focus:border-[#22092C] transition-colors resize-none"
                  />
                </div>

                <Magnetic strength={0.25} className="w-full">
                  <button
                    type="submit"
                    data-cursor-label="DISPATCH"
                    className="w-full py-4 rounded-full bg-[#22092C] text-[#FAF7F2] text-xs font-syne font-bold uppercase tracking-[0.22em] hover:bg-[#3D1550] transition-all shadow-[0_16px_36px_rgba(34,9,44,0.22)] flex items-center justify-center gap-3"
                  >
                    <span>{submitted ? "Opening WhatsApp Terminal..." : "Dispatch Project Brief"}</span>
                    <span>&rarr;</span>
                  </button>
                </Magnetic>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
