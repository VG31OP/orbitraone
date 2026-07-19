import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  const faqs = [
    {
      q: "What is Orbitra One's design process?",
      a: "Our process is completely custom. We do not use ready-made SaaS templates. We start with discovery and layout scoping, map out interaction diagrams, build premium UI with WebGL/Framer Motion, and run multiple performance reviews before launch."
    },
    {
      q: "How long does a typical project development cycle take?",
      a: "Depending on layout complexity and interaction features, a luxury custom site takes between 6 to 12 weeks. High-end motion timelines and vector shader configurations require meticulous compilation cycles to meet our quality standards."
    },
    {
      q: "Will the animations run smoothly on mobile devices?",
      a: "Yes. All custom motion states are configured using hardware-accelerated transforms and physics-driven spring utilities. We systematically throttle visual effects on mobile devices to preserve frames and reduce battery strain."
    },
    {
      q: "How is the SEO performance structured?",
      a: "We implement absolute clean-code structures. Title headers, semantic HTML5 blocks, custom metadata, fast loading scripts, and optimized vector layouts are built-in automatically to secure optimal indexing."
    },
    {
      q: "Do you offer post-launch maintenance modules?",
      a: "Absolutely. We supply comprehensive support packs covering speed tune-ups, platform updates, security logs, and visual upgrades to keep your digital platform operating at peak efficiency."
    }
  ];

  return (
    <section id="faq" className="relative py-32 px-6 bg-obsidian-mesh w-full flex flex-col items-center">
      {/* Top separator line */}
      <div className="w-[90%] max-w-7xl h-[1px] bg-white/10 absolute top-0" />

      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-24">
          <span className="text-xs uppercase font-mono tracking-widest text-primary font-bold">// SYSTEM QUERY</span>
          <h2
            className="font-display font-extrabold uppercase tracking-tighter text-white mt-2 leading-none"
            style={{ fontSize: 'clamp(1.8rem, 5vw, 3.25rem)' }}
          >
            FREQUENT INTERACTION <br />
            <span className="text-gradient-purple">ANSWERS</span>
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="flex flex-col gap-6">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div
                key={idx}
                className={`glass-panel rounded-2xl overflow-hidden border transition-colors duration-300 ${
                  isOpen ? 'border-primary/30 bg-primary/5' : 'border-white/5 bg-white/5'
                }`}
              >
                {/* Header (Question) */}
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left outline-none"
                  data-cursor-text={isOpen ? "Close" : "Open"}
                >
                  <h3 className="font-display font-bold text-lg md:text-xl text-white tracking-tight uppercase">
                    {faq.q}
                  </h3>
                  <motion.div
                    animate={{ rotate: isOpen ? 135 : 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`w-10 h-10 rounded-full flex items-center justify-center border transition-colors duration-300 ${
                      isOpen ? 'bg-primary border-primary text-white' : 'bg-white/5 border-white/10 text-text-muted hover:border-white/30'
                    }`}
                  >
                    <Plus className="w-5 h-5" />
                  </motion.div>
                </button>

                {/* Content (Answer) */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 pb-8 md:px-8 md:pb-8 border-t border-white/5 pt-6">
                        <p className="text-sm md:text-base text-text-muted leading-relaxed font-light italic break-words">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
