import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Network, Award } from 'lucide-react';

export default function About() {
  const timeline = [
    { year: "2023", title: "Synaptic Seed", desc: "First neural visual model conceptualized." },
    { year: "2024", title: "Orbital Dawn", desc: "Seed funding and full-scale custom engine architecture." },
    { year: "2025", title: "Neural Sphere", desc: "Integration of real-time telemetry protocols." },
    { year: "2026", title: "Quantum Epoch", desc: "Complete Awwwards-level digital canvas framework launch." },
  ];

  return (
    <section id="about" className="relative py-32 px-6 bg-obsidian-mesh w-full flex justify-center overflow-hidden">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-16 relative">
        
        {/* Left Side: Sticky Visual & Timeline (Magazine style) */}
        <div className="lg:col-span-5 lg:sticky lg:top-28 h-fit flex flex-col gap-10">
          <div>
            <span className="text-xs uppercase font-mono tracking-widest text-secondary font-bold">// OUR HISTORIC PATHWAY</span>
            <h2
              className="font-display font-extrabold uppercase tracking-tighter text-white mt-2 leading-none"
              style={{ fontSize: 'clamp(1.6rem, 4.5vw, 3.25rem)' }}
            >
              CHRONICLES OF <br />
              <span className="text-gradient-orange">ORBITRA ONE</span>
            </h2>
          </div>

          {/* Interactive Timeline */}
          <div className="relative border-l border-white/10 pl-6 flex flex-col gap-8">
            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="relative group"
              >
                {/* Connector Node */}
                <div className="absolute -left-[31px] top-1.5 w-2 h-2 rounded-full bg-white/20 group-hover:bg-secondary group-hover:scale-125 transition-all duration-300 border border-black" />
                
                <span className="text-xs font-mono font-bold text-secondary group-hover:text-white transition-colors duration-300">
                  {item.year}
                </span>
                <h4 className="font-display font-extrabold text-lg text-white uppercase group-hover:text-gradient-orange transition-all duration-300 mt-1">
                  {item.title}
                </h4>
                <p className="text-xs text-text-muted mt-1 leading-relaxed max-w-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Dynamic Ambient Graphics */}
          <div className="w-full h-44 rounded-3xl glass-panel relative overflow-hidden border border-white/5 bg-gradient-to-br from-secondary/10 to-transparent flex items-center justify-center">
            <div className="absolute inset-0 cyber-grid opacity-20" />
            <div className="flex gap-8 relative z-10">
              {[
                { icon: Layers, label: "MODULAR" },
                { icon: Network, label: "NEURAL" },
                { icon: Award, label: "AWARDS" }
              ].map((iconItem, i) => {
                const Icon = iconItem.icon;
                return (
                  <div key={i} className="flex flex-col items-center">
                    <div className="p-3 bg-white/5 rounded-full border border-white/10 mb-2">
                      <Icon className="w-5 h-5 text-white animate-pulse" />
                    </div>
                    <span className="text-[9px] font-mono text-text-muted tracking-widest">{iconItem.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Side: Narrative Copy (Magazine Composition) */}
        <div className="lg:col-span-7 flex flex-col gap-12 text-left justify-start">
          
          <div className="flex items-start gap-4">
            <span className="font-display font-extrabold text-6xl text-white/10 leading-none">01</span>
            <div>
              <h3 className="font-display font-extrabold text-xl md:text-2xl text-white uppercase tracking-tight mb-4">
                WE DO NOT BUILD WEBSITES. WE ARCHITECT DIGITAL MONUMENTS.
              </h3>
              <p className="text-text-muted leading-relaxed font-light text-base md:text-lg mb-4 break-words">
                Orbitra One was born out of complete dissatisfaction with the modern web. Every interface is beginning to look the same. The same grids, the same SaaS layouts, the same stock illustrations.
              </p>
              <p className="text-text-muted leading-relaxed font-light text-base md:text-lg break-words">
                We design digital experiences that capture attention, build stories, and inspire real emotions. Our development team implements physics-based engines, high-performance shaders, and deep motion systems to push browsers to their absolute limits.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="font-display font-extrabold text-6xl text-white/10 leading-none">02</span>
            <div>
              <h3 className="font-display font-extrabold text-xl md:text-2xl text-white uppercase tracking-tight mb-4">
                THE NEURAL SYNERGY PHILOSOPHY
              </h3>
              <p className="text-text-muted leading-relaxed font-light text-base md:text-lg mb-4">
                Technology is nothing without aesthetics. We believe in design systems that respond intuitively to human interaction. When your mouse hovers, the environment reacts. When you scroll, a story unfolds.
              </p>
              <p className="text-text-muted leading-relaxed font-light text-base md:text-lg">
                By fusing custom motion curves with GPU-accelerated rendering, we build user flows that feel incredibly tactile and organic. We write clean, optimized code that scales from heavy creative displays down to mobile devices seamlessly.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="font-display font-extrabold text-6xl text-white/10 leading-none">03</span>
            <div>
              <h3 className="font-display font-extrabold text-xl md:text-2xl text-white uppercase tracking-tight mb-4">
                AWWWARDS BENCHMARK COMPLIANCE
              </h3>
              <p className="text-text-muted leading-relaxed font-light text-base md:text-lg mb-4">
                Every single line of code and visual component we create is reviewed under strict creative parameters. We audit typography sizing, contrast levels, animation curves, load performance, and accessibility.
              </p>
              <p className="text-text-muted leading-relaxed font-light text-base md:text-lg">
                Our ultimate goal is to exceed expectations, delivering digital structures that do not simply meet modern design standards, but establish them for years to come.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
