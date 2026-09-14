import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service | Nord Media House',
  description: 'Terms of service, production guidelines, and retainer agreements for Nord Media House Creative Studio.',
};

export default function TermsOfService() {
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
              Commercial Governance
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#1F1929] tracking-tight">
            Terms of Service
          </h1>
          <p className="mt-3 text-sm text-[#1F1929]/60 font-mono">
            Effective Date: January 2025 &bull; Nord Media House Creative Retainers
          </p>
        </div>

        {/* Content Box */}
        <div className="glass-card bg-white/70 p-8 sm:p-12 rounded-[2.5rem] border border-white/80 shadow-[0_20px_50px_rgba(44,36,59,0.06)] space-y-10 text-sm leading-relaxed text-[#1F1929]/80">
          
          <section>
            <h2 className="text-xl font-serif font-bold text-[#1F1929] mb-3">
              1. Engagement & Agreement
            </h2>
            <p>
              By accessing this digital portfolio or commissioning production services from Nord Media House (&ldquo;the Studio&rdquo;), you agree to these Terms of Service. These terms govern all media production, short-form reel retainers, directional creative direction, and high-resolution commercial stills.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-bold text-[#1F1929] mb-3">
              2. Retainer Scope & Deliverables
            </h2>
            <p className="mb-3">
              Studio retainers (Nord Basic, Nord Growth, Nord Enterprise) encompass scheduled production deliverables outlined in your specific Service Order:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-[#1F1929]/75">
              <li>Deliverables are delivered in native 4K UHD or Full HD Master resolutions with uncompressed audio masters.</li>
              <li>Production turnaround time is typically 5 to 7 business days following shoot completion.</li>
              <li>Retainer quotas (e.g. 8 or 16 monthly reels) do not roll over beyond contractual renewal periods unless agreed in writing.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-serif font-bold text-[#1F1929] mb-3">
              3. Commercial Licensing & Intellectual Property
            </h2>
            <p>
              Upon final settlement of invoices, clients receive worldwide, non-exclusive, royalty-free commercial rights to publish and run advertising campaigns using the delivered final masters. Nord Media House retains moral rights and the right to display project materials within our directional portfolio, case studies, and studio reels.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-bold text-[#1F1929] mb-3">
              4. Revisions & Approvals
            </h2>
            <p>
              Each production asset includes up to two (2) complimentary rounds of editorial revisions within seven (7) days of initial preview release. Subsequent alterations or creative scope changes outside the approved storyboard are billed at standard studio hourly rates.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-bold text-[#1F1929] mb-3">
              5. Retainer Cancellation & Termination
            </h2>
            <p>
              Ongoing monthly retainers may be canceled by providing 14 days written notice prior to the upcoming billing cycle. In-progress shoot days scheduled within the active billing cycle remain billable in full.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-bold text-[#1F1929] mb-3">
              6. Governing Law & Inquiries
            </h2>
            <p>
              For legal inquiries, commercial contract adjustments, or enterprise master service agreements, contact our executive team at:
            </p>
            <div className="mt-4 p-4 rounded-2xl bg-[#1F1929]/5 border border-[#1F1929]/10 font-mono text-xs">
              Email: legal@nordmediahouse.com &bull; Attention: Executive Producer
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
