"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    package: '180° SOUTH Growth Retainer',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const packagesList = [
    "180° SOUTH Growth Retainer",
    "0° NORTH Foundation Retainer",
    "360° EAST Enterprise Retainer",
    "Menu Card Designing",
    "Logo Designing & Brand Mark",
    "Meta Ad Creative Production",
    "Commercial Photography",
    "Custom Partnership / General Inquiry"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const message = `*New Retainer Inquiry - Nord Media House*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Phone/WhatsApp:* ${formData.phone || 'Not provided'}\n` +
      `*Selected Retainer:* ${formData.package}\n` +
      `*Project Brief:* ${formData.notes || 'Looking to discuss creative direction & short-form video.'}`;

    const whatsappUrl = `https://wa.me/919363542725?text=${encodeURIComponent(message)}`;
    
    setSubmitted(true);
    window.open(whatsappUrl, '_blank');

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative bg-[#FAF8FF] border-t border-[#1F1929]/5">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-[#8B7CA8]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Agency Info & Studio Coordinates */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col"
          >
            <div className="glass-pill self-start px-4 py-1.5 rounded-full mb-6 inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#8B7CA8]" />
              <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#1F1929]/70">
                04 &mdash; Initiate Dialogue
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#1F1929] mb-6 leading-tight">
              Let's chart your brand's next<br />
              <span className="text-[#8B7CA8] font-normal italic">direction.</span>
            </h2>

            <p className="text-[#1F1929]/70 text-base leading-relaxed mb-10">
              Whether you need high-velocity short-form reels, a full-service creative retainer, or bespoke visual identity — our directors are ready.
            </p>

            {/* Direct Contact Links */}
            <div className="space-y-6">
              <a 
                href="mailto:nordmediahouse@gmail.com"
                className="glass-card p-4 rounded-2xl flex items-center gap-4 group hover:border-[#8B7CA8]/40 transition-all bg-white/70"
              >
                <div className="w-11 h-11 rounded-full bg-[#1F1929] text-white flex items-center justify-center group-hover:bg-[#8B7CA8] transition-colors flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#8B7CA8] font-bold block">Direct Email</span>
                  <span className="text-sm font-semibold text-[#1F1929] group-hover:text-[#8B7CA8] transition-colors">
                    nordmediahouse@gmail.com
                  </span>
                </div>
              </a>

              <a 
                href="https://wa.me/919363542725"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-4 rounded-2xl flex items-center gap-4 group hover:border-[#8B7CA8]/40 transition-all bg-white/70"
              >
                <div className="w-11 h-11 rounded-full bg-[#25D366] text-white flex items-center justify-center group-hover:scale-105 transition-transform flex-shrink-0 shadow-sm">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                  </svg>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#8B7CA8] font-bold block">Instant WhatsApp</span>
                  <span className="text-sm font-semibold text-[#1F1929] group-hover:text-[#8B7CA8] transition-colors">
                    +91 93635 42725
                  </span>
                </div>
              </a>
            </div>

            {/* Studio Hours */}
            <div className="mt-8 pt-6 border-t border-[#1F1929]/10 text-xs text-[#1F1929]/60 flex flex-col gap-1">
              <span className="font-semibold text-[#1F1929]/80 uppercase tracking-widest text-[10px]">Studio Hours:</span>
              <span>Monday &ndash; Saturday: 9:00 AM &ndash; 7:00 PM IST</span>
              <span>Global Client Coverage & Remote Production</span>
            </div>
          </motion.div>

          {/* Right Column: Glassmorphism Inquiry Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-7 glass-card p-8 sm:p-10 rounded-[2.5rem] bg-white/80 border-white/80 shadow-[0_20px_60px_rgba(44,36,59,0.08)]"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] uppercase tracking-[0.18em] font-bold text-[#1F1929]/70">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Erik Lindqvist"
                    className="w-full px-4 py-3 rounded-2xl bg-white/60 border border-[#1F1929]/10 focus:border-[#8B7CA8] focus:bg-white text-sm text-[#1F1929] outline-none transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[11px] uppercase tracking-[0.18em] font-bold text-[#1F1929]/70">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="brand@example.com"
                    className="w-full px-4 py-3 rounded-2xl bg-white/60 border border-[#1F1929]/10 focus:border-[#8B7CA8] focus:bg-white text-sm text-[#1F1929] outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] uppercase tracking-[0.18em] font-bold text-[#1F1929]/70">
                    WhatsApp / Phone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-3 rounded-2xl bg-white/60 border border-[#1F1929]/10 focus:border-[#8B7CA8] focus:bg-white text-sm text-[#1F1929] outline-none transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[11px] uppercase tracking-[0.18em] font-bold text-[#1F1929]/70">
                    Retainer Package / Service
                  </label>
                  <select
                    id="contactPackage"
                    value={formData.package}
                    onChange={(e) => setFormData({ ...formData, package: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-white/60 border border-[#1F1929]/10 focus:border-[#8B7CA8] focus:bg-white text-sm text-[#1F1929] outline-none transition-all cursor-pointer"
                  >
                    {packagesList.map((pkg) => (
                      <option key={pkg} value={pkg}>
                        {pkg}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[11px] uppercase tracking-[0.18em] font-bold text-[#1F1929]/70">
                  Project Brief & Brand Goals
                </label>
                <textarea
                  rows="4"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Tell us about your brand, current social channels, and goals for short-form video or branding..."
                  className="w-full px-4 py-3 rounded-2xl bg-white/60 border border-[#1F1929]/10 focus:border-[#8B7CA8] focus:bg-white text-sm text-[#1F1929] outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full bg-[#1F1929] text-white font-bold tracking-[0.2em] text-xs uppercase hover:bg-[#8B7CA8] hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-3 shadow-lg shadow-[#1F1929]/10"
              >
                {submitted ? (
                  <>
                    <span className="w-2 h-2 rounded-full bg-[#BBA9D0] animate-ping" />
                    <span>Redirecting to WhatsApp...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Inquiry via WhatsApp</span>
                    <span>&rarr;</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
