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
      title: "Cognitive Scoping",
      desc: "We analyze target brand parameters, study core user demographics, and draft layout architectures. No boilerplate strategies. We build the vision from the ground up.",
      meta: "DISCOVERY_PHASE_ACTIVE"
    },
    {
      id: 1,
      num: "02",
      icon: GitMerge,
      title: "Neural Mapping",
      desc: "We construct wireframes representing intuitive user flows. Using physics-based maps, we plan the interactive layout of content before committing to visual styling.",
      meta: "FLOW_CHARTING_SYNCED"
    },
    {
      id: 2,
      num: "03",
      icon: LayoutGrid,
      title: "Synthetic Design",
      desc: "We generate custom art boards, establish color hierarchies, and select premium typography layouts. Our visual designs feel clean, futuristic, and premium.",
      meta: "STYLING_COMPILED"
    },
    {
      id: 3,
      num: "04",
      icon: Terminal,
      title: "Kinetic Development",
      desc: "Our dev team translates visual systems into high-performance React modules, integrating Lenis inertial scrolling, Framer Motion transitions, and custom GSAP triggers.",
      meta: "COMPILING_JS_ACTIVE"
    },
    {
      id: 4,
      num: "05",
      icon: Rocket,
      title: "Deployment Quantum",
      desc: "The system goes live on edge networks. We perform complete speed audits, accessibility checks, contrast validations, and responsive layout testing.",
      meta: "ORBIT_ACTIVE"
    }
  ];

  return (
    <section id="process" className="relative py-32 px-6 bg-obsidian-mesh w-full flex justify-center overflow-hidden">
      {/* Top separator line */}
      <div className="w-[90%] max-w-7xl h-[1px] bg-white/10 absolute top-0" />

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Left Column: Sticky Stage Indicator */}
        <div className="lg:col-span-5 lg:sticky lg:top-28 h-fit flex flex-col gap-8">
          <div>
            <span className="text-xs uppercase font-mono tracking-widest text-primary font-bold">
              // DESIGN PIPELINE
            </span>
            <h2
              className="font-display font-extrabold uppercase tracking-tighter text-white mt-2 leading-none"
              style={{ fontSize: 'clamp(1.8rem, 5vw, 3.25rem)' }}
            >
              THE ORBITAL <br />
              <span className="text-gradient-purple">KINETIC CYCLE</span>
            </h2>
          </div>

          {/* Sticky Visual Display panel */}
          <div className="w-full h-64 rounded-3xl glass-panel relative overflow-hidden border border-white/5 bg-gradient-to-br from-primary/10 to-transparent flex items-center justify-center p-6">
            <div className="absolute inset-0 cyber-grid opacity-25" />
            
            <div className="flex flex-col items-center text-center z-10">
              <motion.div
                key={activeStep}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4"
              >
                {React.createElement(steps[activeStep].icon, { className: "w-8 h-8 text-primary" })}
              </motion.div>
              <h3 className="font-display font-extrabold text-2xl text-white uppercase tracking-tight">
                {steps[activeStep].title}
              </h3>
              <span className="text-[10px] font-mono text-primary font-bold uppercase tracking-widest mt-2 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                {steps[activeStep].meta}
              </span>
            </div>
            
            {/* Visual dynamic connection line */}
            <div className="absolute bottom-6 left-6 right-6 h-1 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-primary"
                animate={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </div>
        </div>

        {/* Right Column: Process Steps List */}
        <div className="lg:col-span-7 flex flex-col gap-12">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              onViewportEnter={() => setActiveStep(idx)}
              viewport={{ amount: 0.6 }}
              className={`p-8 rounded-3xl border transition-all duration-500 flex gap-6 items-start ${
                activeStep === idx 
                  ? 'glass-panel border-white/15 bg-white/5 scale-[1.02]' 
                  : 'bg-transparent border-transparent opacity-40'
              }`}
            >
              <span className="font-display font-extrabold text-3xl md:text-4xl text-primary-glow">
                {step.num}
              </span>
              <div>
                <h4 className="font-display font-extrabold text-xl md:text-2xl text-white uppercase tracking-tight mb-2">
                  {step.title}
                </h4>
                <p className="text-sm md:text-base text-text-muted leading-relaxed font-light">
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
