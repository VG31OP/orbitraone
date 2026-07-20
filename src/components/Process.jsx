import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Compass, GitMerge, LayoutGrid, Terminal, Rocket } from 'lucide-react';

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 0,
      num: "01",
      icon: Compass,
      title: "Feasibility & Master Planning",
      desc: "We evaluate site topography, solar orientation, wind dynamics, and urban zoning regulations to establish structural master parameters.",
      meta: "STAGE_01_SCOPING"
    },
    {
      id: 1,
      num: "02",
      icon: GitMerge,
      title: "Parametric & 3D Modeling",
      desc: "We craft detailed 3D BIM spatial models, wind load stress simulations, and virtual walkthroughs to refine structural aesthetics.",
      meta: "STAGE_02_BIM_MODELING"
    },
    {
      id: 2,
      num: "03",
      icon: LayoutGrid,
      title: "Engineering & Material Sourcing",
      desc: "Our structural engineers collaborate with global artisans to select rare imported marble, structural steel, and kinetic glass facades.",
      meta: "STAGE_03_CRAFTSMANSHIP"
    },
    {
      id: 3,
      num: "04",
      icon: Terminal,
      title: "Construction Site Oversight",
      desc: "We provide full site supervision and engineering management to guarantee zero-compromise adherence to blueprints and safety standards.",
      meta: "STAGE_04_EXECUTION"
    },
    {
      id: 4,
      num: "05",
      icon: Rocket,
      title: "Handover & Executive Commissioning",
      desc: "Complete environmental validation, smart building automation integration, LEED audit sign-off, and executive key handover.",
      meta: "STAGE_05_COMMISSIONING"
    }
  ];

  return (
    <section id="process" className="relative py-12 xs:py-16 sm:py-32 px-3 xs:px-4 sm:px-6 bg-obsidian-mesh w-full flex justify-center overflow-hidden">
      {/* Top separator line */}
      <div className="w-[90%] max-w-7xl 3xl:max-w-[1600px] h-[1px] bg-white/10 absolute top-0" />

      <div className="max-w-7xl 3xl:max-w-[1600px] w-full grid grid-cols-1 lg:grid-cols-12 gap-8 xs:gap-10 lg:gap-16">
        
        {/* Left Column: Sticky Stage Indicator */}
        <div className="lg:col-span-5 lg:sticky lg:top-28 h-fit flex flex-col gap-4 xs:gap-6 sm:gap-8">
          <div>
            <span className="text-xs uppercase font-mono tracking-widest text-primary font-bold">
              // OUR METHODOLOGY
            </span>
            <h2
              className="font-display font-extrabold uppercase tracking-tighter text-white mt-1 sm:mt-2 leading-none break-words"
              style={{ fontSize: 'clamp(1.35rem, 6.5vw, 3.25rem)' }}
            >
              THE ARCHITECTURAL <br />
              <span className="text-gradient-purple">LIFECYCLE</span>
            </h2>
          </div>

          {/* Sticky Visual Display panel */}
          <div className="w-full h-44 xs:h-52 sm:h-64 rounded-xl xs:rounded-2xl sm:rounded-3xl glass-panel relative overflow-hidden border border-white/5 bg-gradient-to-br from-primary/10 to-transparent flex items-center justify-center p-3 xs:p-4 sm:p-6">
            <div className="absolute inset-0 cyber-grid opacity-25" />
            
            <div className="flex flex-col items-center text-center z-10">
              <motion.div
                key={activeStep}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-2 xs:mb-3 sm:mb-4"
              >
                {React.createElement(steps[activeStep].icon, { className: "w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 text-primary" })}
              </motion.div>
              <h3 className="font-display font-extrabold text-base xs:text-lg sm:text-2xl text-white uppercase tracking-tight">
                {steps[activeStep].title}
              </h3>
              <span className="text-[8.5px] xs:text-[9px] sm:text-[10px] font-mono text-primary font-bold uppercase tracking-widest mt-1 xs:mt-1.5 sm:mt-2 bg-white/5 px-2 xs:px-2.5 sm:px-3 py-0.5 xs:py-1 rounded-full border border-white/5">
                {steps[activeStep].meta}
              </span>
            </div>
            
            {/* Visual dynamic connection line */}
            <div className="absolute bottom-3 xs:bottom-4 sm:bottom-6 left-3 xs:left-4 sm:left-6 right-3 xs:right-4 sm:right-6 h-1 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-primary"
                animate={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </div>
        </div>

        {/* Right Column: Process Steps List */}
        <div className="lg:col-span-7 flex flex-col gap-3 xs:gap-4 sm:gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              onViewportEnter={() => setActiveStep(idx)}
              onClick={() => setActiveStep(idx)}
              viewport={{ amount: 0.4 }}
              className={`p-4 xs:p-5 sm:p-8 rounded-xl xs:rounded-2xl sm:rounded-3xl border transition-all duration-500 flex flex-col xs:flex-row gap-3 xs:gap-4 sm:gap-6 items-start cursor-pointer min-h-[44px] ${
                activeStep === idx 
                  ? 'glass-panel border-white/15 bg-white/5 scale-[1.01] sm:scale-[1.02]' 
                  : 'bg-transparent border-transparent opacity-50 sm:opacity-40 hover:opacity-80'
              }`}
            >
              <span className="font-display font-extrabold text-xl xs:text-2xl sm:text-4xl text-primary-glow shrink-0">
                {step.num}
              </span>
              <div>
                <h4 className="font-display font-extrabold text-base xs:text-lg sm:text-xl md:text-2xl text-white uppercase tracking-tight mb-1 sm:mb-2">
                  {step.title}
                </h4>
                <p className="text-xs sm:text-sm md:text-base text-text-muted leading-relaxed font-light break-words">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
