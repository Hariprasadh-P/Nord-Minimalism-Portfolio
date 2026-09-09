import "./globals.css";

export const metadata = {
  title: "Nord Media House | Directional Creative Studio — Reels & Branding",
  description: "Scandinavian minimalist creative studio engineering viral short-form reels, bespoke brand identity, and high-performance Meta Ads campaigns.",
  keywords: ["Nord Media House", "Reels Production", "Short-Form Video", "Creative Studio", "Meta Ads", "Brand Identity"],
  openGraph: {
    title: "Nord Media House | Directional Creative Studio",
    description: "Scandinavian visual restraint meets high-octane social strategy.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-[#FAF8FF] text-[#1F1929] selection:bg-[#8B7CA8] selection:text-white antialiased">
        {children}
      </body>
    </html>
  );
}
