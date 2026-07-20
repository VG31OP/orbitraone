import React, { useEffect } from 'react';
import Lenis from 'lenis';

import CustomCursor from './components/CustomCursor';
import NoiseOverlay from './components/NoiseOverlay';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  // Initialize Lenis smooth scroll with mobile touch optimizations
  useEffect(() => {
    const isMobile = window.innerWidth <= 768 || ('ontouchstart' in window);

    const lenis = new Lenis({
      duration: isMobile ? 0.8 : 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 1.5,
      smoothTouch: false, // Let mobile touch viewports use native momentum scrolling for 60-120 FPS
      infinite: false,
    });

    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      window.lenis = null;
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#030306] overflow-x-hidden selection:bg-purple-900 selection:text-white">
      {/* Global Interactive Overlays */}
      <CustomCursor />
      <NoiseOverlay />
      
      {/* Shell Nav */}
      <Navbar />

      {/* Structured Sections */}
      <main>
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Process />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
