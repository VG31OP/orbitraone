# Orbitra One | Luxury Creative Technology & Digital Protocol

Orbitra One is a ₹1 Crore high-end digital interface and creative technology project engineered for a luxury technology brand. Moving away from standard theme templates and flat SaaS layouts, Orbitra One fuses custom GPU-accelerated motion, organic textures, cinematic lighting spotlights, and asymmetric grid components to capture human emotional response.

---

## 1. Design System & Visual Grammar

### Core Visual Philosophy
- **Deep Space Obsidian**: Layered gradients over a deep charcoal base (`#030306`) represent infinite computational space.
- **Cinematic Spots & Nebulas**: Solar flare amber (`#ff6b35`) and cosmic violet (`#6d28d9`) glow highlights simulate high-contrast spotlight vectors.
- **Tactile Grain Overlay**: An animated noise grain filter provides physical texture to glassmorphic panels and dark backing layers.
- **Interactive Fluid Mechanics**: Spring physics-driven cursors trail and morph over click targets, delivering instant sensory feedback.

### Typography
- **Display Headings**: `Syne` — A wide, ultra-geometric, high-contrast sans-serif that anchors layout compositions.
- **Body & Telemetry**: `Space Grotesk` — A monospaced-leaning monospace hybrid that gives structure to technical data, numbers, and descriptive paragraphs.

---

## 2. Interactive Component Architectures

1. **Liquid Custom Cursor (`CustomCursor.jsx`)**
   - Implements interpolation (lerp) trailing dynamics.
   - Morphically scales and reveals cursor tooltips (e.g. `VIEW`, `CONNECT`, `EXPLORE`) when hovering interactive elements.

2. **Organic Film Grain (`NoiseOverlay.jsx`)**
   - Applies an SVG turbulence generator running a rapid micro-vibration translation.
   - Breaks down clean monitor glare into physical, textured paper/film aesthetics.

3. **Cinematic Hero (`Hero.jsx`)**
   - Fullscreen layout featuring mouse spotlight vector coordinates that illuminate surrounding details.
   - Features layered glass cards displaying staggered, scroll-triggered metrics.

4. **Bento Services Grid (`Services.jsx`)**
   - Asymmetric bento-box composition presenting design features.
   - Incorporates dynamic SVG lines that draw in real-time.

5. **Split Chronicles (`About.jsx`)**
   - Magazine-inspired layout matching sticky growth timelines (left) against descriptive story columns (right).

6. **Selected Works Scroll (`Portfolio.jsx`)**
   - Category filtering menu driving an horizontal slide track container with tilt layouts and simulated WebGL mesh backdrops.

7. **The Kinetic Cycle (`Process.jsx`)**
   - A sticky progress visual displaying interactive development stages in perfect synchronization with vertical scroll triggers.

8. **Synaptic Feedback (`Testimonials.jsx`)**
   - Dual-opposing horizontal marquee tracks holding verified review boxes that slow on mouse hover.

9. **Interaction Accordion (`FAQ.jsx`)**
   - Clean typographic Q&A blocks that morph height smoothly via Framer Motion, paired with rotating vector icons.

10. **Secure Link Form (`Contact.jsx`)**
    - High-end input form with floating label tags and interactive gradient underlines, side-by-side with an orbiting vector radar map.

---

## 3. Technology Stack

- **Core Framework**: React 19 + Vite 8
- **Smooth Inertial Scroll**: Lenis
- **Animations & Layout Transitions**: Framer Motion
- **Complex Parallax & Timelines**: GSAP (GreenSock Animation Platform)
- **Icons**: Lucide React
- **Layout & Spacing Utilities**: Tailwind CSS v3 + PostCSS

---

## 4. Setup & Local Development

### Prerequisites
Ensure you have [Node.js](https://nodejs.org) (v18+) installed on your local environment.

### 1. Install Project Dependencies
Run the package installation command to pull Vite default modules alongside GSAP, Framer Motion, Lenis, and Tailwind:
```bash
npm install
```

### 2. Launch Local Dev Server
Initialize the Vite development server on your localhost port (usually `5173`):
```bash
npm run dev
```

### 3. Compile Production Build
Audit syntax checking and compile code into highly-compressed static HTML, CSS, and JS bundles inside the `/dist` directory:
```bash
npm run build
```

---

## 5. Directory Mapping

```
e:/Project/orbitone/
├── dist/                  # Production builds
├── src/
│   ├── assets/            # Static assets
│   ├── components/        # Layout components
│   │   ├── CustomCursor.jsx
│   │   ├── NoiseOverlay.jsx
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── About.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Process.jsx
│   │   ├── Testimonials.jsx
│   │   ├── FAQ.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx            # Main app shell & Lenis initializer
│   ├── index.css          # Design system CSS & Tailwind direct layers
│   └── main.jsx           # Mount entry point
├── index.html             # Shell index page containing SEO tags
├── package.json           # Scripts & package dependency logs
├── postcss.config.js      # PostCSS processor configurations
├── tailwind.config.js     # Tailwind CSS colors & fonts configurations
└── vite.config.js         # Vite bundler parameters
```
