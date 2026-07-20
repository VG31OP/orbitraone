import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Building2, Globe, Award } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    // Only attach mouse listener on desktop non-touch pointers
    if (window.innerWidth <= 768 || ('ontouchstart' in window)) return;

    const handleMouseMove = (e) => {
      if (!containerRef.current || !glowRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - 300;
      const y = e.clientY - rect.top - 300;
      glowRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const titleWords = ["ARCHITECTING LANDMARKS", "THAT ENDURE."];

  const handleScroll = (targetId) => {
    if (window.lenis) {
      window.lenis.scrollTo(targetId);
    } else {
      document.querySelector(targetId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-hero w-full flex flex-col justify-between items-center overflow-hidden bg-obsidian-mesh pt-hero-safe pb-hero-safe px-3 xs:px-4 sm:px-6"
    >
      {/* Background Grid */}
      <div className="cyber-grid" />

      {/* Interactive Mouse Glow for desktop */}
      <div
        ref={glowRef}
        className="hidden md:block absolute pointer-events-none w-[600px] h-[600px] rounded-full blur-[140px] opacity-35 z-0 left-0 top-0"
        style={{
          background: 'radial-gradient(circle, rgba(109, 40, 217, 0.4) 0%, rgba(255, 107, 53, 0.1) 50%, transparent 100%)',
          willChange: 'transform',
        }}
      />

      {/* Ambient glows */}
      <div className="absolute top-[-10%] left-[20%] w-[250px] xs:w-[300px] sm:w-[500px] h-[250px] xs:h-[300px] sm:h-[500px] rounded-full bg-primary/20 blur-[80px] sm:blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] right-[10%] w-[300px] xs:w-[350px] sm:w-[600px] h-[300px] xs:h-[350px] sm:h-[600px] rounded-full bg-secondary/15 blur-[100px] sm:blur-[150px] pointer-events-none z-0" />

      {/* Main Content Wrapper */}
      <div className="relative z-10 max-w-7xl 3xl:max-w-[1600px] w-full flex flex-col items-center justify-center text-center my-auto py-2 sm:py-6">

        {/* Floating Tag */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="glass-panel px-3 xs:px-5 py-1 sm:py-2 rounded-full mb-3 xs:mb-5 sm:mb-8 flex items-center gap-1.5 xs:gap-2 border-white/10 max-w-full hero-glass"
        >
          <span className="w-1.5 h-1.5 xs:w-2 xs:h-2 rounded-full bg-teal animate-ping shrink-0" />
          <span className="text-[9px] xs:text-xs uppercase font-medium tracking-wider sm:tracking-widest text-text-muted truncate">
            GLOBAL ARCHITECTURAL & DEVELOPMENT FIRM
          </span>
        </motion.div>

        {/* High-Impact Business Headline */}
        <h1
          className="font-display font-extrabold leading-[1.08] sm:leading-[1.05] tracking-tight sm:tracking-tighter mb-3 xs:mb-5 sm:mb-8 uppercase w-full px-0.5 break-words"
          style={{ fontSize: 'clamp(1.2rem, 6vw, 5.5rem)' }}
        >
          {titleWords.map((word, index) => (
            <span key={index} className="block overflow-hidden py-0.5 sm:py-1">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block text-gradient-purple max-w-full"
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Clear Business Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs xs:text-sm sm:text-base md:text-xl text-text-muted max-w-2xl mb-5 xs:mb-7 sm:mb-10 font-light leading-relaxed px-1 xs:px-2 sm:px-4"
        >
          OrbitraOne designs ultra-luxury residential towers, high-impact commercial hubs, and sustainable civic infrastructure across India, Asia, and Europe.
        </motion.p>

        {/* Direct Action CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col xs:flex-row gap-2.5 xs:gap-4 sm:gap-6 mb-6 xs:mb-8 sm:mb-16 z-20 w-full xs:w-auto px-2 xs:px-4"
        >
          <a
            href="#portfolio"
            onClick={(e) => {
              e.preventDefault();
              handleScroll('#portfolio');
            }}
            className="w-full xs:w-auto min-h-[44px] sm:min-h-[48px] px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-white text-black font-semibold text-xs sm:text-sm tracking-wider hover:bg-transparent hover:text-white border border-white transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-none flex items-center justify-center text-center uppercase"
            data-cursor-text="Portfolio"
          >
            EXPLORE PORTFOLIO
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleScroll('#contact');
            }}
            className="w-full xs:w-auto min-h-[44px] sm:min-h-[48px] px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-transparent text-white font-semibold text-xs sm:text-sm tracking-wider border border-white/20 hover:border-white transition-all duration-300 flex items-center justify-center text-center uppercase"
            data-cursor-text="Inquire"
          >
            SCHEDULE CONSULTATION
          </a>
        </motion.div>

        {/* Real Business Value Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 xs:gap-3 sm:gap-6 w-full max-w-5xl 3xl:max-w-[1400px] px-1 xs:px-2 sm:px-4 z-20">
          {[
            { icon: Building2, label: "Portfolio Value", val: "₹4,500+ Cr", desc: "Assets designed & engineered worldwide", color: "glow-card-purple" },
            { icon: Globe, label: "Global Footprint", val: "140+ Landmarks", desc: "Completed across 12 international capitals", color: "glow-card-orange" },
            { icon: Award, label: "Sustainability", val: "100% LEED Gold", desc: "Certified eco-efficient structural design", color: "glow-card-purple" }
          ].map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 + idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`relative glass-panel rounded-xl xs:rounded-2xl p-3 xs:p-4 sm:p-6 text-left overflow-hidden group border border-white/5 ${stat.color}`}
              >
                <div className="flex justify-between items-start mb-2 sm:mb-4">
                  <div className="p-1.5 xs:p-2 sm:p-3 bg-white/5 rounded-xl border border-white/10 group-hover:border-primary transition-all duration-300">
                    <Icon className="w-4 h-4 sm:w-6 sm:h-6 text-white group-hover:text-secondary transition-colors duration-300" />
                  </div>
                  <span className="text-[9px] xs:text-[10px] text-text-dark font-mono font-bold tracking-wider uppercase">
                    METRIC_0{idx + 1}
                  </span>
                </div>
                <h3 className="text-[9.5px] xs:text-xs uppercase tracking-widest text-text-muted mb-0.5 sm:mb-1 font-semibold">{stat.label}</h3>
                <p className="text-base xs:text-xl sm:text-2xl font-bold font-display text-white mb-0.5 sm:mb-1">{stat.val}</p>
                <p className="text-[9.5px] xs:text-[11px] sm:text-xs text-text-dark">{stat.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="hidden sm:flex my-2 z-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-col items-center gap-2 cursor-pointer group"
          onClick={() => handleScroll('#services')}
          data-cursor-text="Down"
        >
          <span className="text-[10px] font-mono tracking-widest text-text-muted group-hover:text-white transition-colors duration-300 uppercase">
            Scroll to discover
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="p-2 border border-white/10 rounded-full group-hover:border-white/30 transition-all duration-300 bg-white/5"
          >
            <ArrowDown className="w-4 h-4 text-text-muted group-hover:text-white transition-colors duration-300" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
