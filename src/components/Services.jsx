import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, LineChart, Shield, Terminal, ArrowUpRight, Cpu } from 'lucide-react';

export default function Services() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const services = [
    {
      id: 0,
      title: "Neural Architectures",
      category: "INTELLIGENCE",
      desc: "Deploy customized deep learning neural pipelines that adapt, optimize, and compute at the speed of thought. Fully unified into existing operations.",
      size: "md:col-span-8 md:row-span-2",
      icon: Brain,
      color: "from-[#6d28d9]/20 to-[#a78bfa]/5",
      glowColor: "rgba(109, 40, 217, 0.4)",
      visual: (
        <div className="relative w-full h-48 mt-6 overflow-hidden rounded-xl border border-white/5 bg-black/40">
          <div className="cyber-grid opacity-30" />
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 200" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              d="M 50 100 Q 150 20 250 100 T 450 100"
              fill="none"
              stroke="#6d28d9"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.path
              d="M 50 120 Q 200 180 350 70 T 550 120"
              fill="none"
              stroke="#ff6b35"
              strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
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
          <div className="absolute inset-0 flex items-center justify-between px-6 pointer-events-none">
            <span className="text-[10px] font-mono text-text-dark">SYS_A_ACTIVE</span>
            <span className="text-[10px] font-mono text-text-dark">NEURAL_STREAM_SYNCED</span>
          </div>
        </div>
      )
    },
    {
      id: 1,
      title: "Realtime Analytics",
      category: "DATA",
      desc: "Synchronized telemetry mapping millions of concurrent pipelines with microsecond latency.",
      size: "md:col-span-4 md:row-span-1",
      icon: LineChart,
      color: "from-[#ff6b35]/20 to-[#fdba74]/5",
      glowColor: "rgba(255, 107, 53, 0.4)",
      visual: (
        <div className="flex gap-1 items-end h-16 mt-4">
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
      title: "Quantum Ledger",
      category: "CRYPTOGRAPHY",
      desc: "Immutable distributed architecture fortified by quantum cryptographic layers.",
      size: "md:col-span-4 md:row-span-1",
      icon: Shield,
      color: "from-teal-900/20 to-teal-500/5",
      glowColor: "rgba(20, 184, 166, 0.4)",
      visual: (
        <div className="relative h-16 mt-4 flex items-center justify-center">
          <motion.div
            className="w-10 h-10 rounded-full border border-teal/40 flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <Cpu className="w-5 h-5 text-teal" />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal/5 to-transparent animate-pulse" />
        </div>
      )
    },
    {
      id: 3,
      title: "Interactive Cognitive Interfaces",
      category: "DESIGN",
      desc: "Web interfaces engineered to interact intuitively with human perception. Experience digital layouts that breathe, react, and resonate through tactile cursor flows and physics-based motion dynamics.",
      size: "md:col-span-6 md:row-span-2",
      icon: Terminal,
      color: "from-purple-900/20 to-indigo-950/5",
      glowColor: "rgba(139, 92, 246, 0.4)",
      visual: (
        <div className="relative h-44 mt-6 overflow-hidden rounded-xl border border-white/5 bg-black/60 p-4 font-mono text-[10px] text-primary">
          <div className="flex gap-2 mb-2 border-b border-white/5 pb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
          </div>
          <p className="text-white">// Initiating Orbitra One Canvas Engine...</p>
          <p className="text-text-muted mt-1">&gt; loading shaders: SUCCESS</p>
          <p className="text-text-muted">&gt; linking gsap scroll triggers: ACTIVE</p>
          <p className="text-secondary mt-1">&gt; status: 1.00 Crore aesthetics compiled</p>
          <div className="absolute bottom-4 right-4 flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-teal animate-ping" />
            <span className="text-[8px] text-text-muted font-bold">READY</span>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "Creative Synthesis",
      category: "STRATEGY",
      desc: "Merging visual storytelling with deep functional code to capture human emotional response.",
      size: "md:col-span-6 md:row-span-2",
      icon: Cpu,
      color: "from-[#ff6b35]/15 to-[#6d28d9]/10",
      glowColor: "rgba(255, 107, 53, 0.3)",
      visual: (
        <div className="relative h-44 mt-6 overflow-hidden rounded-xl border border-white/5 bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <div className="w-56 h-56 rounded-full border border-dashed border-white animate-[spin_40s_linear_infinite]" />
            <div className="absolute w-36 h-36 rounded-full border border-dashed border-white animate-[spin_20s_linear_infinite_reverse]" />
          </div>
          <motion.div
            className="text-center z-10 px-4"
            whileHover={{ scale: 1.05 }}
          >
            <p className="font-display font-bold text-lg text-white">ORBITAL SYNTHESIS</p>
            <p className="text-[10px] text-text-muted mt-1 uppercase font-mono tracking-widest">Quantum Engine Online</p>
          </motion.div>
        </div>
      )
    }
  ];

  return (
    <section id="services" className="relative py-32 px-6 bg-obsidian-mesh w-full flex flex-col items-center">
      {/* Top separator line */}
      <div className="w-[90%] max-w-7xl h-[1px] bg-white/10 absolute top-0" />

      <div className="max-w-7xl w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <div>
            <span className="text-xs uppercase font-mono tracking-widest text-primary font-bold">
              // DEPLOYMENT SCOPE
            </span>
            <h2
              className="font-display font-extrabold tracking-tight text-white mt-2 uppercase"
              style={{ fontSize: 'clamp(1.8rem, 5vw, 3.75rem)' }}
            >
              BENTO SERVICES
            </h2>
          </div>
          <p className="text-text-muted max-w-md font-light leading-relaxed">
            Asymmetric digital components engineered to perform in perfect cognitive synchronization. Selecting core node parameters launches dedicated pipelines.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-fr">
          {services.map((svc) => {
            const Icon = svc.icon;
            const isHovered = hoveredIdx === svc.id;

            return (
              <motion.div
                key={svc.id}
                className={`relative glass-panel rounded-3xl p-8 flex flex-col justify-between overflow-hidden border border-white/5 transition-all duration-500 ease-out group ${svc.size}`}
                onMouseEnter={() => setHoveredIdx(svc.id)}
                onMouseLeave={() => setHoveredIdx(null)}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: svc.id * 0.1 }}
                data-cursor-text="Node"
              >
                {/* Glow Background Gradient */}
                <div
                  className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out pointer-events-none"
                  style={{
                    backgroundImage: `radial-gradient(circle at 80% 20%, ${svc.glowColor} 0%, transparent 60%)`,
                  }}
                />

                {/* Grid Item Header */}
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[10px] font-mono tracking-widest text-text-dark font-bold bg-white/5 px-3 py-1 rounded-full border border-white/5">
                      {svc.category}
                    </span>
                    <Icon className="w-5 h-5 text-text-muted group-hover:text-white transition-colors duration-300" />
                  </div>

                  <h3
                    className="font-display font-extrabold text-xl sm:text-2xl md:text-3xl text-white mb-3 uppercase tracking-tight group-hover:text-gradient-purple transition-all duration-300 break-words hyphens-auto"
                  >
                    {svc.title}
                  </h3>
                  <p className="text-sm md:text-base text-text-muted font-light leading-relaxed max-w-xl break-words">
                    {svc.desc}
                  </p>
                </div>

                {/* Custom Visual Component */}
                {svc.visual}

                {/* Bottom link line */}
                <div className="flex items-center gap-2 mt-8 text-xs font-mono font-bold tracking-widest text-text-muted group-hover:text-white transition-all duration-300 cursor-pointer self-start">
                  <span>INITIATE PARAMETER</span>
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
