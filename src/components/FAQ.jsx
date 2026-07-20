import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  const faqs = [
    {
      q: "What types of developments does OrbitraOne undertake?",
      a: "We specialize in commercial high-rise corporate towers, luxury private residential estates, high-end hospitality resorts, and sustainable civic master planning."
    },
    {
      q: "In which geographic regions do you operate?",
      a: "Our primary design laboratories are located in Mumbai (BKC), London, and Tokyo. We manage landmark architectural projects across India, South East Asia, the Middle East, and Europe."
    },
    {
      q: "How do you ensure structural sustainability and environmental compliance?",
      a: "100% of our developments are engineered for LEED Gold or Platinum certification, incorporating kinetic solar glass, rainwater harvesting, passive thermal ventilation, and local eco-efficient stone."
    },
    {
      q: "What is the typical timeline for an architectural project?",
      a: "Conceptual design and parametric master planning take 6 to 12 weeks. Detailed structural engineering and site execution timelines vary based on development scale (12 to 36 months)."
    },
    {
      q: "How do we schedule an executive consultation for a new development?",
      a: "You can submit a formal inquiry through our digital portal or contact our principal design studio at Bandra Kurla Complex (BKC), Mumbai. Our leadership team responds within 24 hours."
    }
  ];

  return (
    <section id="faq" className="relative py-12 xs:py-16 sm:py-32 px-3 xs:px-4 sm:px-6 bg-obsidian-mesh w-full flex flex-col items-center">
      {/* Top separator line */}
      <div className="w-[90%] max-w-7xl 3xl:max-w-[1600px] h-[1px] bg-white/10 absolute top-0" />

      <div className="max-w-4xl 3xl:max-w-5xl w-full">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-24">
          <span className="text-xs uppercase font-mono tracking-widest text-primary font-bold">// INQUIRIES & DETAILS</span>
          <h2
            className="font-display font-extrabold uppercase tracking-tighter text-white mt-1 sm:mt-2 leading-none break-words"
            style={{ fontSize: 'clamp(1.35rem, 6.5vw, 3.25rem)' }}
          >
            EXECUTIVE INQUIRIES & <br />
            <span className="text-gradient-purple">FREQUENT ANSWERS</span>
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="flex flex-col gap-3 sm:gap-6">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div
                key={idx}
                className={`glass-panel rounded-xl xs:rounded-2xl overflow-hidden border transition-colors duration-300 ${isOpen ? 'border-primary/30 bg-primary/5' : 'border-white/5 bg-white/5'
                  }`}
              >
                {/* Header (Question) */}
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-3.5 xs:p-5 md:p-8 text-left outline-none gap-3 min-h-[48px]"
                  data-cursor-text={isOpen ? "Close" : "Open"}
                  aria-expanded={isOpen}
                >
                  <h3 className="font-display font-bold text-xs xs:text-base sm:text-lg md:text-xl text-white tracking-tight uppercase break-words">
                    {faq.q}
                  </h3>
                  <motion.div
                    animate={{ rotate: isOpen ? 135 : 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border transition-colors duration-300 shrink-0 ${isOpen ? 'bg-primary border-primary text-white' : 'bg-white/5 border-white/10 text-text-muted hover:border-white/30'
                      }`}
                  >
                    <Plus className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
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
                      <div className="px-3.5 pb-5 xs:px-6 xs:pb-6 md:px-8 md:pb-8 border-t border-white/5 pt-3 xs:pt-4 sm:pt-6">
                        <p className="text-[11px] xs:text-xs sm:text-sm md:text-base text-text-muted leading-relaxed font-light italic break-words">
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
