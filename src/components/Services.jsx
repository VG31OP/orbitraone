import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, Compass, Globe, LayoutGrid, Shield, ArrowUpRight, Cpu } from 'lucide-react';

export default function Services() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const services = [
    {
      id: 0,
      title: "Commercial & High-Rise Towers",
      category: "ARCHITECTURE",
      desc: "Designing high-density corporate towers, mixed-use developments, and iconic commercial headquarters integrated with kinetic solar glass facades and structural wind optimization.",
      size: "md:col-span-8 md:row-span-2",
      icon: Building2,
      glowColor: "rgba(109, 40, 217, 0.4)",
      visual: (
        <div className="relative w-full h-32 xs:h-36 sm:h-48 mt-3 sm:mt-6 overflow-hidden rounded-xl border border-white/5 bg-black/40">
          <div className="cyber-grid opacity-30" />
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 200" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              d="M 50 100 Q 150 20 250 100 T 450 100"
              fill="none"
              stroke="#6d28d9"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.path
              d="M 50 120 Q 200 180 350 70 T 550 120"
              fill="none"
              stroke="#ff6b35"
              strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
            <motion.circle
              cx="50"
              cy="100"
              r="4"
              fill="#fff"
              animate={{ cx: [50, 450, 50] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-between px-3 xs:px-4 sm:px-6 pointer-events-none">
            <span className="text-[8px] xs:text-[9px] sm:text-[10px] font-mono text-text-dark">PARAMETRIC_BIM_ACTIVE</span>
            <span className="text-[8px] xs:text-[9px] sm:text-[10px] font-mono text-text-dark">STRUCTURAL_STREAM_SYNCED</span>
          </div>
        </div>
      )
    },
    {
      id: 1,
      title: "Luxury Residential Estates",
      category: "PRIVATE RESIDENCES",
      desc: "Bespoke villas, penthouse residences, and private gated estates crafted with rare imported stone, structural glass, and climate automation.",
      size: "md:col-span-4 md:row-span-1",
      icon: Compass,
      glowColor: "rgba(255, 107, 53, 0.4)",
      visual: (
        <div className="flex gap-1 items-end h-12 xs:h-14 sm:h-16 mt-3 xs:mt-4">
          {[40, 70, 45, 90, 60, 80, 55, 95].map((val, i) => (
            <motion.div
              key={i}
              className="flex-1 bg-gradient-to-t from-secondary to-orange-400 rounded-t"
              style={{ height: `${val}%` }}
              animate={{ height: [`${val}%`, `${Math.max(15, val - (i % 2 === 0 ? 30 : -20))}%`, `${val}%`] }}
              transition={{ duration: 2 + (i * 0.2), repeat: Infinity, ease: "easeInOut" }}
            />
          ))}
        </div>
      )
    },
    {
      id: 2,
      title: "Sustainable Master Planning",
      category: "URBAN DESIGN",
      desc: "Large-scale township development, eco-resort master planning, and climate-resilient civic infrastructure.",
      size: "md:col-span-4 md:row-span-1",
      icon: Globe,
      glowColor: "rgba(20, 184, 166, 0.4)",
      visual: (
        <div className="relative h-12 xs:h-14 sm:h-16 mt-3 xs:mt-4 flex items-center justify-center">
          <motion.div
            className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 rounded-full border border-teal/40 flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            style={{ willChange: 'transform' }}
          >
            <Cpu className="w-4 h-4 sm:w-5 sm:h-5 text-teal" />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal/5 to-transparent animate-pulse" />
        </div>
      )
    },
    {
      id: 3,
      title: "Interior Architecture & FF&E",
      category: "SPATIAL INTERIORS",
      desc: "Curated interior spatial layouts, bespoke lighting installations, custom furniture engineering, and rare material sourcing for high-net-worth private and corporate clients.",
      size: "md:col-span-6 md:row-span-2",
      icon: LayoutGrid,
      glowColor: "rgba(139, 92, 246, 0.4)",
      visual: (
        <div className="relative h-32 xs:h-36 sm:h-44 mt-3 sm:mt-6 overflow-hidden rounded-xl border border-white/5 bg-black/60 p-3 sm:p-4 font-mono text-[8.5px] xs:text-[9px] sm:text-[10px] text-primary">
          <div className="flex gap-1.5 sm:gap-2 mb-2 border-b border-white/5 pb-1.5">
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-red-500/50" />
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-yellow-500/50" />
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-green-500/50" />
          </div>
          <p className="text-white">// Valence Spatial Design Engine...</p>
          <p className="text-text-muted mt-0.5">&gt; lighting simulation: 100% OPTIMAL</p>
          <p className="text-text-muted">&gt; LEED Platinum energy rating: VERIFIED</p>
          <p className="text-secondary mt-0.5">&gt; Italian marble & teak sourcing: COMPLETED</p>
          <div className="absolute bottom-2.5 right-2.5 sm:bottom-4 sm:right-4 flex items-center gap-1 bg-white/5 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-teal animate-ping" />
            <span className="text-[7.5px] xs:text-[8px] text-text-muted font-bold">READY</span>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "Project Engineering Management",
      category: "DEVELOPMENT",
      desc: "End-to-end structural auditing, 3D BIM modeling, contractor oversight, and site execution management ensuring zero-compromise quality and on-time handover.",
      size: "md:col-span-6 md:row-span-2",
      icon: Shield,
      glowColor: "rgba(255, 107, 53, 0.3)",
      visual: (
        <div className="relative h-32 xs:h-36 sm:h-44 mt-3 sm:mt-6 overflow-hidden rounded-xl border border-white/5 bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <div className="w-40 h-40 xs:w-44 xs:h-44 sm:w-56 sm:h-56 rounded-full border border-dashed border-white animate-[spin_40s_linear_infinite]" />
            <div className="absolute w-24 h-24 xs:w-28 xs:h-28 sm:w-36 sm:h-36 rounded-full border border-dashed border-white animate-[spin_20s_linear_infinite_reverse]" />
          </div>
          <motion.div
            className="text-center z-10 px-4"
            whileHover={{ scale: 1.05 }}
          >
            <p className="font-display font-bold text-sm xs:text-base sm:text-lg text-white">VALENCE ENGINEERING HUB</p>
            <p className="text-[8px] xs:text-[9px] sm:text-[10px] text-text-muted mt-0.5 uppercase font-mono tracking-widest">ISO 9001 Structural Audit Active</p>
          </motion.div>
        </div>
      )
    }
  ];

  return (
    <section id="services" className="relative py-12 xs:py-16 sm:py-32 px-3 xs:px-4 sm:px-6 bg-obsidian-mesh w-full flex flex-col items-center">
      {/* Top separator line */}
      <div className="w-[90%] max-w-7xl 3xl:max-w-[1600px] h-[1px] bg-white/10 absolute top-0" />

      <div className="max-w-7xl 3xl:max-w-[1600px] w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-24 gap-4 sm:gap-8">
          <div>
            <span className="text-xs uppercase font-mono tracking-widest text-primary font-bold">
              // CORE CAPABILITIES
            </span>
            <h2
              className="font-display font-extrabold tracking-tight text-white mt-1 sm:mt-2 uppercase break-words"
              style={{ fontSize: 'clamp(1.35rem, 6.5vw, 3.75rem)' }}
            >
              OUR ARCHITECTURAL SERVICES
            </h2>
          </div>
          <p className="text-xs xs:text-sm sm:text-base text-text-muted max-w-md font-light leading-relaxed">
            From initial master planning to structural engineering and interior refinement, we deliver landmark developments that redefine skylines.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 xs:gap-4 sm:gap-6 auto-rows-auto md:auto-rows-fr">
          {services.map((svc) => {
            const Icon = svc.icon;

            return (
              <motion.div
                key={svc.id}
                className={`relative glass-panel rounded-xl xs:rounded-2xl sm:rounded-3xl p-4 xs:p-5 sm:p-8 flex flex-col justify-between overflow-hidden border border-white/5 transition-all duration-300 ease-out group ${svc.size}`}
                onMouseEnter={() => setHoveredIdx(svc.id)}
                onMouseLeave={() => setHoveredIdx(null)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.6, delay: svc.id * 0.08 }}
                data-cursor-text="Explore"
              >
                {/* Glow Background Gradient */}
                <div
                  className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none"
                  style={{
                    backgroundImage: `radial-gradient(circle at 80% 20%, ${svc.glowColor} 0%, transparent 60%)`,
                  }}
                />

                {/* Grid Item Header */}
                <div>
                  <div className="flex justify-between items-center mb-3 sm:mb-6">
                    <span className="text-[9px] xs:text-[10px] font-mono tracking-widest text-text-dark font-bold bg-white/5 px-2 xs:px-2.5 py-0.5 xs:py-1 rounded-full border border-white/5 uppercase">
                      {svc.category}
                    </span>
                    <Icon className="w-4 h-4 xs:w-5 xs:h-5 text-text-muted group-hover:text-white transition-colors duration-300" />
                  </div>

                  <h3
                    className="font-display font-extrabold text-base xs:text-lg sm:text-2xl md:text-3xl text-white mb-1.5 xs:mb-2 sm:mb-3 uppercase tracking-tight group-hover:text-gradient-purple transition-all duration-300 break-words"
                  >
                    {svc.title}
                  </h3>
                  <p className="text-xs sm:text-base text-text-muted font-light leading-relaxed max-w-xl break-words">
                    {svc.desc}
                  </p>
                </div>

                {/* Custom Visual Component */}
                {svc.visual}

                {/* Bottom link line */}
                <div className="flex items-center gap-2 mt-4 xs:mt-6 sm:mt-8 text-xs font-mono font-bold tracking-widest text-text-muted group-hover:text-white transition-all duration-300 cursor-pointer self-start min-h-[44px]">
                  <span>VIEW SERVICE SPECS</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
