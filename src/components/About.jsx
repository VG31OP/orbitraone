import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Globe, ShieldCheck } from 'lucide-react';

export default function About() {
  const timeline = [
    { year: "2014", title: "Foundation", desc: "Established principal architectural design studio in Bandra Kurla Complex (BKC), Mumbai." },
    { year: "2018", title: "Global Expansion", desc: "Opened international design laboratories in London & Tokyo." },
    { year: "2022", title: "LEED Excellence", desc: "Achieved 100% LEED Gold & Platinum sustainability rating across all commercial builds." },
    { year: "2026", title: "Landmark Milestone", desc: "Surpassed ₹4,500 Cr in active architecture & high-rise development projects." },
  ];

  return (
    <section id="about" className="relative py-12 xs:py-16 sm:py-32 px-3 xs:px-4 sm:px-6 bg-obsidian-mesh w-full flex justify-center overflow-hidden">
      <div className="max-w-7xl 3xl:max-w-[1600px] w-full grid grid-cols-1 lg:grid-cols-12 gap-8 xs:gap-10 lg:gap-16 relative">

        {/* Left Side: Sticky Visual & Timeline */}
        <div className="lg:col-span-5 lg:sticky lg:top-28 h-fit flex flex-col gap-6 xs:gap-8 sm:gap-10">
          <div>
            <span className="text-xs uppercase font-mono tracking-widest text-secondary font-bold">// THE FIRM</span>
            <h2
              className="font-display font-extrabold uppercase tracking-tighter text-white mt-1 sm:mt-2 leading-none break-words"
              style={{ fontSize: 'clamp(1.35rem, 6.5vw, 3.25rem)' }}
            >
              OUR PHILOSOPHY & <br />
              <span className="text-gradient-orange">PRINCIPAL LEADERSHIP</span>
            </h2>
          </div>

          {/* Interactive Timeline */}
          <div className="relative border-l border-white/10 pl-5 xs:pl-6 sm:pl-8 flex flex-col gap-5 xs:gap-6 sm:gap-8 ml-1 xs:ml-2 sm:ml-4">
            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="relative group"
              >
                {/* Connector Node */}
                <div className="absolute -left-[25px] xs:-left-[29px] sm:-left-[37px] top-1.5 w-2 xs:w-2.5 h-2 xs:h-2.5 rounded-full bg-white/20 group-hover:bg-secondary group-hover:scale-125 transition-all duration-300 border border-black" />

                <span className="text-[10px] xs:text-xs font-mono font-bold text-secondary group-hover:text-white transition-colors duration-300">
                  {item.year}
                </span>
                <h4 className="font-display font-extrabold text-sm xs:text-base sm:text-lg text-white uppercase group-hover:text-gradient-orange transition-all duration-300 mt-0.5">
                  {item.title}
                </h4>
                <p className="text-[11px] xs:text-xs text-text-muted mt-0.5 sm:mt-1 leading-relaxed max-w-sm break-words">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Dynamic Ambient Graphics */}
          <div className="w-full h-32 xs:h-36 sm:h-44 rounded-xl xs:rounded-2xl sm:rounded-3xl glass-panel relative overflow-hidden border border-white/5 bg-gradient-to-br from-secondary/10 to-transparent flex items-center justify-center p-3 xs:p-4">
            <div className="absolute inset-0 cyber-grid opacity-20" />
            <div className="flex gap-3 xs:gap-4 sm:gap-8 relative z-10 justify-around w-full max-w-xs">
              {[
                { icon: Building2, label: "MUMBAI" },
                { icon: Globe, label: "LONDON" },
                { icon: ShieldCheck, label: "TOKYO" }
              ].map((iconItem, i) => {
                const Icon = iconItem.icon;
                return (
                  <div key={i} className="flex flex-col items-center">
                    <div className="p-2 xs:p-2.5 sm:p-3 bg-white/5 rounded-full border border-white/10 mb-1.5 xs:mb-2">
                      <Icon className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-white animate-pulse" />
                    </div>
                    <span className="text-[7.5px] xs:text-[8px] sm:text-[9px] font-mono text-text-muted tracking-widest">{iconItem.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Side: Narrative Copy */}
        <div className="lg:col-span-7 flex flex-col gap-6 xs:gap-8 sm:gap-12 text-left justify-start">

          <div className="flex flex-col xs:flex-row items-start gap-2 xs:gap-3 sm:gap-6">
            <span className="font-display font-extrabold text-3xl xs:text-4xl sm:text-6xl text-white/10 leading-none shrink-0">01</span>
            <div>
              <h3 className="font-display font-extrabold text-base xs:text-lg sm:text-xl md:text-2xl text-white uppercase tracking-tight mb-2 sm:mb-4 leading-tight">
                WE DO NOT MERELY BUILD TOWERS. WE CRAFT PERMANENT LEGACIES.
              </h3>
              <p className="text-text-muted leading-relaxed font-light text-xs xs:text-sm sm:text-base md:text-lg mb-2 sm:mb-4 break-words">
                At OrbitraOne, every structure is conceived as a work of timeless architectural art. We merge structural physics, eco-efficient materials, and parametric spatial geometry to design developments that inspire generations.
              </p>
              <p className="text-text-muted leading-relaxed font-light text-xs xs:text-sm sm:text-base md:text-lg break-words">
                From landmark corporate towers in financial districts to private coastal sanctuaries, our practice stands at the pinnacle of international architectural engineering.
              </p>
            </div>
          </div>

          <div className="flex flex-col xs:flex-row items-start gap-2 xs:gap-3 sm:gap-6">
            <span className="font-display font-extrabold text-3xl xs:text-4xl sm:text-6xl text-white/10 leading-none shrink-0">02</span>
            <div>
              <h3 className="font-display font-extrabold text-base xs:text-lg sm:text-xl md:text-2xl text-white uppercase tracking-tight mb-2 sm:mb-4 leading-tight">
                PRINCIPAL LEADERSHIP & INTERNATIONAL ARCHITECTS.
              </h3>
              <p className="text-text-muted leading-relaxed font-light text-xs xs:text-sm sm:text-base md:text-lg mb-2 sm:mb-4 break-words">
                Our design direction is guided by **Vikramaditya Mehta** (Principal Architect & Founder), **Elena Rostova** (Director of International Spatial Interiors), and **Kavya Nair** (Head of Structural Engineering & Sustainability).
              </p>
              <p className="text-text-muted leading-relaxed font-light text-xs xs:text-sm sm:text-base md:text-lg break-words">
                Together with a global team of 80+ architects and structural engineers, we bring multi-disciplinary mastery to every development blueprint.
              </p>
            </div>
          </div>

          <div className="flex flex-col xs:flex-row items-start gap-2 xs:gap-3 sm:gap-6">
            <span className="font-display font-extrabold text-3xl xs:text-4xl sm:text-6xl text-white/10 leading-none shrink-0">03</span>
            <div>
              <h3 className="font-display font-extrabold text-base xs:text-lg sm:text-xl md:text-2xl text-white uppercase tracking-tight mb-2 sm:mb-4 leading-tight">
                UNCOMPROMISING SEISMIC PRECISION & GLOBAL COMPLIANCE.
              </h3>
              <p className="text-text-muted leading-relaxed font-light text-xs xs:text-sm sm:text-base md:text-lg mb-2 sm:mb-4 break-words">
                Every project blueprint undergoes wind tunnel simulation, seismic stress modeling, and 3D Building Information Modeling (BIM) before ground breaking.
              </p>
              <p className="text-text-muted leading-relaxed font-light text-xs xs:text-sm sm:text-base md:text-lg break-words">
                We ensure full compliance with international building codes, LEED Platinum standards, and zero-compromise site execution safety protocols.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
