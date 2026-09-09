# Nord Media House — Minimalist Digital Marketing Agency Portfolio

A luxury, minimalist portfolio website crafted for **Nord Media House**. Rendered in the **"Directional Editorial"** design language: warm paper-cream (`#F7F3EA`), deep ink noir (`#16121C`), and a single champagne-gold accent (`#C8A25B`). Massive editorial serif type, hairline rules, coordinate labels, a live scroll-driven compass, an integrated Reels Player, a Creative Rate Card, and a Nordic Night mode.

---

## 📁 Project Structure

```
Nord-Minimalism Portfolio/
├── index.html              # Main landing page (SEO-optimized, semantic HTML5)
├── css/
│   ├── style.css           # ✦ Directional Editorial design system (tokens, components, responsive, night mode)
│   └── animations.css      # ✦ Motion layer — preloader, cursor physics, reveals & keyframes
├── js/
│   ├── app.js              # Application logic, video player, image carousel, filter, WhatsApp lead capture
│   ├── nord-v2.js          # ✦ NEW interaction layer — preloader, scroll compass, magnetic buttons,
│   │                       #   tilt cards, count-up stats, Nordic Night toggle, process accordion
│   └── works-data.js       # ✦ Central data file for all projects, rate card packages & agency info
├── assets/
│   ├── logo/
│   │   └── nord-logo.svg   # Official Nord Media House compass logo vector
│   └── works/              # ✦ DROP YOUR VIDEOS / REELS / IMAGES HERE
│       ├── project-1.svg
│       ├── project-2.svg
│       ├── project-3.svg
│       ├── project-4.svg
│       ├── project-5.svg
│       └── project-6.svg
└── README.md               # User guide & instructions
```

---

## ✦ Design System & Interactions (v6)

- **Preloader** — "NORD" wordmark with a sweeping compass needle, then a cream curtain lift.
- **Live compass** — the hero compass dial and a `000°–360°` readout rotate as you scroll; the right-edge progress rail mirrors the same degree travel.
- **Magnetic buttons** — pills physically lean toward the cursor within a radius.
- **Tilt cards** — work frames respond to the pointer with 3D perspective while videos play on hover.
- **Infinite marquees** — `REELS • BRANDING • META ADS • …` ribbons scroll between sections.
- **Compass-dial rate cards** — each package carries a gold dial needle rotated to its degree (0° / 180° / 360°).
- **Count-up stats** — hero metrics animate on first view.
- **NORDIC NIGHT mode** — click the `☾` toggle in the header for a full dark theme (saved in `localStorage`).
- **Process accordion** — tap any methodology card to reveal its workflow.
- **Fullscreen mobile menu** — oversized serif links with coordinate footers.
- Respects `prefers-reduced-motion` and touch devices (cursor layers & tilt are disabled).

---

## 🎬 How to Add Reels & Videos (Video Player)

1. Drop your video file (e.g. `my-reel.mp4`) into `assets/works/`.
2. In `js/works-data.js`, create a project with `mediaType: "video"`:

```javascript
{
  id: "fashion-reel-campaign",
  title: "Aura Haute Couture Reel",
  client: "Aura Atelier",
  category: "reels", // 'reels', 'social', 'ads', 'branding'
  categoryLabel: "Short-Form Reel & Video",
  mediaType: "video",
  aspectRatio: "9:16", // '9:16' for vertical reels, '16:9' for widescreen
  videoUrl: "assets/works/my-reel.mp4",
  thumbnail: "assets/works/my-reel-poster.jpg",
  year: "2024",
  packageType: "180° South Growth",
  highlight: "+340% Organic Reel Reach & 1.2M Views",
  summary: "Cinematic short-form storytelling designed for high lifestyle retention.",
  metrics: [
    { label: "Total Views", value: "1.2M" },
    { label: "Engagement", value: "24.2%" }
  ],
  deliverables: [
    "16 Short-Form Reels",
    "Sound Design & Audio Trends"
  ]
}
```

When clicked, the site automatically opens a sleek **Video Reel Player** with play/pause, sound, and full controls!

---

## 📸 How to Add Multiple Pictures (Image Carousel)

1. Drop your pictures (e.g. `photo-1.jpg`, `photo-2.jpg`, `photo-3.jpg`) into `assets/works/`.
2. In `js/works-data.js`, create a project with `mediaType: "gallery"`:

```javascript
{
  id: "cafe-branding-gallery",
  title: "Velvet Cafe & Menu Design",
  client: "Velvet Roastery",
  category: "branding",
  categoryLabel: "Branding & Menu Carousel",
  mediaType: "gallery",
  thumbnail: "assets/works/photo-1.jpg",
  gallery: [
    "assets/works/photo-1.jpg",
    "assets/works/photo-2.jpg",
    "assets/works/photo-3.jpg"
  ],
  year: "2024",
  packageType: "360° East Premium + Menu Add-on",
  highlight: "Tactile Menu Card & Multi-Slide Photo Spread",
  summary: "End-to-end cafe branding and sensory menu card typography.",
  metrics: [
    { label: "New Followers", value: "+18.5K" },
    { label: "Table Bookings", value: "+95%" }
  ],
  deliverables: [
    "Bespoke Minimalist Menu Card System",
    "Food Styling & Photography"
  ]
}
```

When clicked, it loads an interactive **Image Carousel** with previous/next buttons, swipe gestures, and dot indicators!

---

## 💳 Creative Rate Card & Packages

- **0° NORTH Basic**: Foundation Tier — 8 Posts, 12 Reels, Content Strategy
- **180° SOUTH Growth**: High-Growth Tier *(Most Popular)* — 10 Posts, 16 Reels, Meta Ads Management
- **360° EAST Premium**: Full-Service Enterprise Tier — 12 Posts, 20 Reels, Advanced Meta Ads Campaign
- **Add-ons**: Menu Card Designing, Logo Designing, Performance Meta Ad Creatives, Commercial Photography.

Clicking any package or submitting the form instantly pre-formats a direct message to WhatsApp (`+91 93635 42725`).
