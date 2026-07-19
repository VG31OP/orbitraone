import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function Portfolio() {
  const [filter, setFilter] = useState('ALL');
  
  const categories = ['ALL', 'CREATIVE DEV', 'WEBGL', 'AI'];

  const projects = [
    {
      id: 0,
      title: "Aether Node",
      category: "CREATIVE DEV",
      subtitle: "REALTIME COGNITIVE SHELL",
      image: "linear-gradient(135deg, #1e1b4b 0%, #311042 100%)",
      glowColor: "#a78bfa",
      desc: "Architecting a multi-threaded reactive dashboard displaying neural matrix sync maps in 120 FPS."
    },
    {
      id: 1,
      title: "Solar Eclipse",
      category: "WEBGL",
      subtitle: "GPU COSMIC SIMULATION",
      image: "linear-gradient(135deg, #2a085c 0%, #631207 100%)",
      glowColor: "#ff6b35",
      desc: "Simulating gravitational light bends using custom vertex shaders and dynamic vertex buffers."
    },
    {
      id: 2,
      title: "Nebula Core",
      category: "AI",
      subtitle: "NEURAL COGNITIVE CORE",
      image: "linear-gradient(135deg, #022c22 0%, #031526 100%)",
      glowColor: "#14b8a6",
      desc: "Deep neural mapping analyzing real-time visual telemetry, compiling weights in millisecond cycles."
    },
    {
      id: 3,
      title: "Hyperion Portal",
      category: "CREATIVE DEV",
      subtitle: "LIQUID VECTOR SHELL",
      image: "linear-gradient(135deg, #090514 0%, #1e1b4b 100%)",
      glowColor: "#6d28d9",
      desc: "Fusing SVG turbulence filters with spring-driven vector coordinate controllers to bend visuals."
    }
  ];

  const filteredProjects = filter === 'ALL' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="relative py-32 px-6 bg-obsidian-mesh w-full flex flex-col items-center">
      {/* Top Divider */}
      <div className="w-[90%] max-w-7xl h-[1px] bg-white/10 absolute top-0" />

      <div className="max-w-7xl w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <span className="text-xs uppercase font-mono tracking-widest text-primary font-bold">// CURATED ARTIFACTS</span>
            <h2 className="font-display font-extrabold text-4xl md:text-6xl tracking-tight text-white mt-2 uppercase">
              SELECTED WORK
            </h2>
          </div>
          
          {/* Category Filters */}
          <div className="flex flex-wrap gap-3">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-full text-xs font-bold tracking-widest border transition-all duration-300 uppercase ${
                  filter === cat
                    ? 'bg-white text-black border-white'
                    : 'bg-transparent text-text-muted border-white/10 hover:border-white/30'
                }`}
                data-cursor-text={cat}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Horizontal scroll track (Horizontal Scroll Container with touch & scroll capabilities) */}
        <div className="w-full overflow-x-auto no-scrollbar py-6 flex gap-8 snap-x snap-mandatory cursor-grab active:cursor-grabbing">
          <style>{`
            .no-scrollbar::-webkit-scrollbar {
              display: none;
            }
            .no-scrollbar {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}</style>
          
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="min-w-[85vw] sm:min-w-[450px] lg:min-w-[550px] snap-start relative glass-panel rounded-3xl p-6 flex flex-col justify-between overflow-hidden border border-white/5 group h-[420px] sm:h-[550px]"
                data-cursor-text="Launch"
              >
                {/* Simulated Hover Video Layer (dynamic colorful gradient canvas mesh that activates on hover) */}
                <div
                  className="absolute inset-0 opacity-10 group-hover:opacity-40 transition-opacity duration-700 ease-out z-0"
                  style={{
                    backgroundImage: project.image,
                  }}
                />
                
                {/* Background Grid Pattern */}
                <div className="absolute inset-0 cyber-grid opacity-10 z-0" />

                {/* Corner Ambient Glow */}
                <div 
                  className="absolute top-0 right-0 w-44 h-44 rounded-full blur-[80px] opacity-0 group-hover:opacity-50 transition-opacity duration-500 ease-out pointer-events-none"
                  style={{
                    background: project.glowColor,
                  }}
                />

                {/* Card Top */}
                <div className="relative z-10 flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-primary font-bold uppercase">
                      {project.subtitle}
                    </span>
                    <h3 className="font-display font-extrabold text-3xl md:text-4xl text-white mt-1 uppercase leading-none tracking-tight">
                      {project.title}
                    </h3>
                  </div>
                  <span className="text-xs font-mono font-bold text-text-dark bg-white/5 border border-white/5 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* Interactive Center (Visual Hover Graphic) */}
                <div className="relative w-full h-36 sm:h-56 rounded-2xl overflow-hidden border border-white/5 flex items-center justify-center bg-black/40 z-10">
                  <div 
                    className="absolute inset-0 w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    style={{
                      background: project.image,
                      opacity: 0.7,
                    }}
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  
                  {/* Glowing vector details inside card */}
                  <motion.div
                    className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:border-white/50 transition-all duration-500"
                  >
                    <ArrowUpRight className="w-6 h-6 text-white" />
                  </motion.div>
                </div>

                {/* Card Bottom */}
                <div className="relative z-10">
                  <p className="text-sm text-text-muted leading-relaxed font-light mb-4 max-w-md">
                    {project.desc}
                  </p>
                  <div className="h-[1px] w-full bg-white/10 mb-4" />
                  <div className="flex justify-between items-center text-[10px] font-mono font-bold text-text-dark group-hover:text-white transition-colors duration-300">
                    <span>LAUNCH PORTAL</span>
                    <span>ORB_N_0{project.id + 1}</span>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
