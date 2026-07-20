import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function Portfolio() {
  const [filter, setFilter] = useState('ALL');
  
  const categories = ['ALL', 'COMMERCIAL TOWERS', 'PRIVATE ESTATES', 'CIVIC & HOSPITALITY'];

  const projects = [
    {
      id: 0,
      title: "The Horizon Tower",
      category: "COMMERCIAL TOWERS",
      subtitle: "BKC FINANCIAL DISTRICT, MUMBAI",
      image: "linear-gradient(135deg, #1e1b4b 0%, #311042 100%)",
      glowColor: "#a78bfa",
      desc: "45-story commercial corporate headquarters featuring kinetic solar glass facades, smart elevator shafts, and integrated sky gardens."
    },
    {
      id: 1,
      title: "Villa Celestial",
      category: "PRIVATE ESTATES",
      subtitle: "ALIBAUG COASTAL ESTATE",
      image: "linear-gradient(135deg, #2a085c 0%, #631207 100%)",
      glowColor: "#ff6b35",
      desc: "18,000 sq. ft. private oceanfront sanctuary fusing cantilevered concrete with natural teak, private heliport, and water channels."
    },
    {
      id: 2,
      title: "Solarium Center",
      category: "COMMERCIAL TOWERS",
      subtitle: "TOKYO TECH DISTRICT",
      image: "linear-gradient(135deg, #022c22 0%, #031526 100%)",
      glowColor: "#14b8a6",
      desc: "Zero-carbon commercial complex incorporating solar skin glass, seismic dampeners, and rainwater harvesting systems."
    },
    {
      id: 3,
      title: "Aetheria Resort & Spa",
      category: "CIVIC & HOSPITALITY",
      subtitle: "KYOTO HILLSIDE RESORT",
      image: "linear-gradient(135deg, #090514 0%, #1e1b4b 100%)",
      glowColor: "#6d28d9",
      desc: "Ultra-luxury wellness retreat nestled in bamboo forest, utilizing traditional timber framing combined with modern glass structural physics."
    }
  ];

  const filteredProjects = filter === 'ALL' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="relative py-12 xs:py-16 sm:py-32 px-3 xs:px-4 sm:px-6 bg-obsidian-mesh w-full flex flex-col items-center">
      {/* Top Divider */}
      <div className="w-[90%] max-w-7xl 3xl:max-w-[1600px] h-[1px] bg-white/10 absolute top-0" />

      <div className="max-w-7xl 3xl:max-w-[1600px] w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-16 gap-4 sm:gap-8">
          <div>
            <span className="text-xs uppercase font-mono tracking-widest text-primary font-bold">// FEATURED DEVELOPMENTS</span>
            <h2
              className="font-display font-extrabold uppercase tracking-tighter text-white mt-1 sm:mt-2 break-words"
              style={{ fontSize: 'clamp(1.35rem, 6.5vw, 3.75rem)' }}
            >
              SELECTED LANDMARK PROJECTS
            </h2>
          </div>
          
          {/* Category Filters */}
          <div className="w-full md:w-auto overflow-x-auto no-scrollbar flex flex-nowrap gap-2 sm:gap-3 pb-1 -mx-3 px-3 sm:mx-0 sm:px-0 touch-pan-x">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setFilter(cat)}
                className={`px-3.5 xs:px-6 py-2 sm:py-2.5 rounded-full text-[10px] xs:text-xs font-bold tracking-widest border transition-all duration-300 uppercase min-h-[44px] shrink-0 whitespace-nowrap ${
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

        {/* Horizontal scroll track */}
        <div className="w-full overflow-x-auto no-scrollbar py-3 sm:py-6 flex gap-3 xs:gap-4 sm:gap-8 snap-x snap-mandatory cursor-grab active:cursor-grabbing touch-pan-x">
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
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="w-[84vw] xs:w-[320px] sm:w-[420px] md:w-[500px] lg:w-[550px] 3xl:w-[620px] max-w-[calc(100vw-2rem)] xs:max-w-none snap-start relative glass-panel rounded-2xl sm:rounded-3xl p-4 xs:p-5 sm:p-6 flex flex-col justify-between overflow-hidden border border-white/5 group h-[390px] xs:h-[440px] sm:h-[520px] md:h-[550px] shrink-0"
                data-cursor-text="View"
              >
                {/* Simulated Hover Video Layer */}
                <div
                  className="absolute inset-0 opacity-15 sm:opacity-10 group-hover:opacity-40 transition-opacity duration-700 ease-out z-0"
                  style={{
                    backgroundImage: project.image,
                  }}
                />
                
                {/* Background Grid Pattern */}
                <div className="absolute inset-0 cyber-grid opacity-10 z-0" />

                {/* Corner Ambient Glow */}
                <div 
                  className="absolute top-0 right-0 w-36 sm:w-44 h-36 sm:h-44 rounded-full blur-[60px] sm:blur-[80px] opacity-20 sm:opacity-0 group-hover:opacity-50 transition-opacity duration-500 ease-out pointer-events-none"
                  style={{
                    background: project.glowColor,
                  }}
                />

                {/* Card Top */}
                <div className="relative z-10 flex justify-between items-start gap-2">
                  <div>
                    <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-primary font-bold uppercase block">
                      {project.subtitle}
                    </span>
                    <h3 className="font-display font-extrabold text-xl xs:text-2xl sm:text-3xl md:text-4xl text-white mt-0.5 uppercase leading-none tracking-tight break-words">
                      {project.title}
                    </h3>
                  </div>
                  <span className="text-[9px] xs:text-[10px] sm:text-xs font-mono font-bold text-text-dark bg-white/5 border border-white/5 px-2 xs:px-3 py-0.5 sm:py-1 rounded-full shrink-0">
                    {project.category}
                  </span>
                </div>

                {/* Interactive Center */}
                <div className="relative w-full h-28 xs:h-36 sm:h-52 md:h-56 rounded-xl sm:rounded-2xl overflow-hidden border border-white/5 flex items-center justify-center bg-black/40 z-10 my-2 xs:my-3 sm:my-4">
                  <div 
                    className="absolute inset-0 w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    style={{
                      background: project.image,
                      opacity: 0.7,
                    }}
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  
                  <motion.div
                    className="w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:border-white/50 transition-all duration-500"
                  >
                    <ArrowUpRight className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-white" />
                  </motion.div>
                </div>

                {/* Card Bottom */}
                <div className="relative z-10">
                  <p className="text-[11px] xs:text-xs sm:text-sm text-text-muted leading-relaxed font-light mb-2 xs:mb-3 sm:mb-4 max-w-md line-clamp-2 sm:line-clamp-none">
                    {project.desc}
                  </p>
                  <div className="h-[1px] w-full bg-white/10 mb-2 xs:mb-3 sm:mb-4" />
                  <div className="flex justify-between items-center text-[9px] xs:text-[10px] font-mono font-bold text-text-dark group-hover:text-white transition-colors duration-300">
                    <span>EXPLORE BLUEPRINT</span>
                    <span>LANDMARK_0{project.id + 1}</span>
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
