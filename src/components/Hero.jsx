import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Cpu, ShieldCheck, Zap } from 'lucide-react';

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const titleWords = ["COSMIC", "INTELLIGENCE."];

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
      className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-obsidian-mesh pt-20 px-6"
    >
      {/* Background Grid */}
      <div className="cyber-grid" />

      <div
        className="hidden md:block absolute pointer-events-none w-[600px] h-[600px] rounded-full blur-[140px] opacity-35 z-0 transition-transform duration-300 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(109, 40, 217, 0.4) 0%, rgba(255, 107, 53, 0.1) 50%, transparent 100%)',
          left: `${mousePos.x - 300}px`,
          top: `${mousePos.y - 300}px`,
          willChange: 'transform',
        }}
      />

      {/* Top ambient glow */}
      <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] rounded-full bg-secondary/15 blur-[150px] pointer-events-none z-0" />

      {/* Main Content Wrapper */}
      <div className="relative z-10 max-w-7xl w-full flex flex-col items-center justify-center text-center mt-12">
        
        {/* Floating Tag */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="glass-panel px-5 py-2 rounded-full mb-8 flex items-center gap-2 border-white/10"
        >
          <span className="w-2 h-2 rounded-full bg-teal animate-ping" />
          <span className="text-xs uppercase font-medium tracking-widest text-text-muted">
            ORBITRA ONE PROTOCOL v2.0
          </span>
        </motion.div>

        {/* Breathtaking Typography */}
        <h1
          className="font-display font-extrabold leading-[1.0] tracking-tighter mb-8 uppercase w-full px-2"
          style={{ fontSize: 'clamp(2.2rem, 9vw, 6.5rem)' }}
        >
          {titleWords.map((word, index) => (
            <span key={index} className="block overflow-hidden py-1">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, delay: 0.3 + index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block text-gradient-purple"
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-base md:text-xl text-text-muted max-w-2xl mb-12 font-light leading-relaxed px-4"
        >
          We architect luxury digital interfaces and neural systems for the next epoch of computational intelligence. No templates. Pure innovation.
        </motion.p>

        {/* Premium CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-6 mb-20 z-20"
        >
          <a
            href="#portfolio"
            onClick={(e) => {
              e.preventDefault();
              handleScroll('#portfolio');
            }}
            className="px-8 py-4 rounded-full bg-white text-black font-semibold tracking-wider hover:bg-transparent hover:text-white border border-white transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-none"
            data-cursor-text="View"
          >
            DISCOVER SYSTEM
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleScroll('#contact');
            }}
            className="px-8 py-4 rounded-full bg-transparent text-white font-semibold tracking-wider border border-white/20 hover:border-white transition-all duration-300"
            data-cursor-text="Reach"
          >
            ESTABLISH LINK
          </a>
        </motion.div>

        {/* Floating Layered Statistics cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl px-4 z-20">
          {[
            { icon: Cpu, label: "Neural Engine", val: "2.4 PFLOPS", desc: "Supercharged processing core", color: "glow-card-purple" },
            { icon: ShieldCheck, label: "Core Security", val: "Zero-Trust", desc: "Quantum encrypted pipeline", color: "glow-card-orange" },
            { icon: Zap, label: "Synchronicity", val: "<0.4ms Latency", desc: "Realtime global deployment", color: "glow-card-purple" }
          ].map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.8 + idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className={`relative glass-panel rounded-2xl p-6 text-left overflow-hidden group border border-white/5 ${stat.color}`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:border-primary transition-all duration-300">
                    <Icon className="w-6 h-6 text-white group-hover:text-secondary transition-colors duration-300" />
                  </div>
                  <span className="text-[10px] text-text-dark font-mono font-bold tracking-wider">
                    SYS_CH_{idx + 1}
                  </span>
                </div>
                <h3 className="text-xs uppercase tracking-widest text-text-muted mb-1 font-semibold">{stat.label}</h3>
                <p className="text-2xl font-bold font-display text-white mb-1">{stat.val}</p>
                <p className="text-xs text-text-dark">{stat.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="flex flex-col items-center gap-2 cursor-pointer group"
          onClick={() => handleScroll('#services')}
          data-cursor-text="Down"
        >
          <span className="text-[10px] font-mono tracking-widest text-text-muted group-hover:text-white transition-colors duration-300 uppercase">
            Scroll to orbit
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
