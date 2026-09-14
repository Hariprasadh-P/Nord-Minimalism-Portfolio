import Link from 'next/link';

export const metadata = {
  title: '404 — Coordinate Lost | Nord Media House',
  description: 'The requested page or asset does not exist on this coordinate.',
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#FAF8FF] text-[#1F1929] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#8B7CA8]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#BBA9D0]/15 rounded-full blur-[140px] pointer-events-none" />

      {/* 404 Glass Card */}
      <div className="relative z-10 max-w-lg w-full glass-card p-8 sm:p-12 rounded-[2.5rem] border border-white/80 text-center shadow-[0_25px_60px_rgba(44,36,59,0.08)]">
        
        {/* Directional Tag */}
        <div className="glass-pill px-4 py-1.5 rounded-full inline-flex items-center gap-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#8B7CA8] animate-pulse" />
          <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#1F1929]/70">
            Error 404 &bull; Direction Lost
          </span>
        </div>

        {/* Large Monogram */}
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#1F1929] text-white flex items-center justify-center font-serif text-3xl font-bold shadow-xl">
          0°
        </div>

        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#1F1929] mb-4">
          Coordinate Not Found
        </h1>

        <p className="text-sm text-[#1F1929]/70 leading-relaxed mb-8">
          The trajectory you are seeking has been relocated or never existed across our directional media plane.
        </p>

        {/* Return CTA */}
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 w-full py-4 rounded-full bg-[#1F1929] text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#8B7CA8] transition-all shadow-md active:scale-95"
        >
          <span>Return to Nord Studio</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </main>
  );
}
