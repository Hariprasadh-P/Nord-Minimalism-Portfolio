import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | Nord Media House',
  description: 'Privacy policy and data governance practices at Nord Media House Creative Studio.',
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#FAF8FF] text-[#1F1929] selection:bg-[#8B7CA8] selection:text-white py-20 px-6 relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#8B7CA8]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#BBA9D0]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Back navigation */}
        <div className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#8B7CA8] hover:text-[#1F1929] transition-colors glass-pill px-4 py-2 rounded-full"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Back to Studio</span>
          </Link>
        </div>

        {/* Header */}
        <div className="mb-14">
          <div className="glass-pill px-4 py-1.5 rounded-full inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#8B7CA8]" />
            <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#1F1929]/70">
              Legal & Data Transparency
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#1F1929] tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-[#1F1929]/60 font-mono">
            Last Updated: January 2025 &bull; Nord Media House Directional Studio
          </p>
        </div>

        {/* Content Box */}
        <div className="glass-card bg-white/70 p-8 sm:p-12 rounded-[2.5rem] border border-white/80 shadow-[0_20px_50px_rgba(44,36,59,0.06)] space-y-10 text-sm leading-relaxed text-[#1F1929]/80">
          
          <section>
            <h2 className="text-xl font-serif font-bold text-[#1F1929] mb-3">
              1. Studio Overview & Commitment
            </h2>
            <p>
              Nord Media House (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;the Studio&rdquo;) operates as a directional creative and digital media production house. We hold privacy, restraint, and transparency as core tenets of our operational philosophy. This policy details how we handle client contact inquiries, project information, and browsing data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-bold text-[#1F1929] mb-3">
              2. Information We Collect
            </h2>
            <p className="mb-3">
              We collect information solely to provide creative production, short-form reels execution, and commercial photography retainers:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-[#1F1929]/75">
              <li><strong>Inquiry Data:</strong> Name, brand/company identity, email address, WhatsApp contact number, and creative project briefs submitted via our contact forms.</li>
              <li><strong>Direct Communications:</strong> Message logs exchanged via WhatsApp dispatch or email for production planning.</li>
              <li><strong>Technical & Performance Metrics:</strong> Anonymized browser information, device specifications, and page interaction events to optimize 4K media streaming.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-serif font-bold text-[#1F1929] mb-3">
              3. Commercial Retainer Media & Intellectual Property
            </h2>
            <p>
              All client footage, 4K stills, behind-the-scenes assets, and brand collateral shared with Nord Media House are governed by our master service agreement. We never share unreleased brand media, raw log footages, or embargoed campaign materials with third parties without explicit contractual authorization.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-bold text-[#1F1929] mb-3">
              4. Cookies & Storage
            </h2>
            <p>
              We utilize essential local storage keys to retain user preferences (such as audio mute status, light/dark styling, and cookie consent choices). We do not deploy intrusive third-party cross-site behavioral tracking cookies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-bold text-[#1F1929] mb-3">
              5. Your Rights & Data Requests
            </h2>
            <p>
              You have the right to request access to any personal data submitted to the Studio, update your contact details, or request full deletion of your inquiry records. To exercise these rights, contact our privacy officer directly at:
            </p>
            <div className="mt-4 p-4 rounded-2xl bg-[#1F1929]/5 border border-[#1F1929]/10 font-mono text-xs">
              Email: legal@nordmediahouse.com &bull; Subject: Data Privacy Request
            </div>
          </section>

        </div>

        {/* Footer link back */}
        <div className="mt-10 text-center">
          <Link
            href="/"
            className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8B7CA8] hover:text-[#1F1929] transition-colors"
          >
            &larr; Return to Studio Portfolio
          </Link>
        </div>

      </div>
    </main>
  );
}
