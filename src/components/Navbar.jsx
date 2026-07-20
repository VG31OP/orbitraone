import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Capabilities', href: '#services' },
    { name: 'The Firm', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Process', href: '#process' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleScroll = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    if (window.lenis) {
      window.lenis.scrollTo(href);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed top-2 xs:top-3 sm:top-6 left-1/2 transform -translate-x-1/2 w-[95%] sm:w-[90%] max-w-7xl z-50">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="w-full h-12 xs:h-14 sm:h-16 glass-panel rounded-full flex items-center justify-between px-2.5 xs:px-4 sm:px-8 border border-white/10"
      >
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setIsOpen(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-1.5 xs:gap-2 font-display font-extrabold text-xs xs:text-sm sm:text-lg lg:text-xl tracking-wider text-white shrink-0 min-h-[44px] px-1 focus:outline-none"
          data-cursor-text="Valence"
          aria-label="OrbitraOne Homepage"
        >
          <Building2 className="w-4 h-4 xs:w-4.5 xs:h-4.5 sm:w-5 sm:h-5 text-secondary animate-pulse shrink-0" />
          <span className="truncate tracking-widest">OrbitraOne</span>
        </a>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              className="text-xs lg:text-sm font-medium text-text-muted hover:text-white transition-colors duration-300 relative py-2 px-1 group min-h-[44px] flex items-center"
              data-cursor-text="Go"
            >
              {item.name}
              <span className="absolute bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Right Section: CTA & Hamburger Toggle */}
        <div className="flex items-center gap-1.5 xs:gap-3 sm:gap-4">
          {/* Action CTA Button */}
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, '#contact')}
            className="relative inline-flex items-center justify-center px-2.5 xs:px-4 sm:px-6 py-1.5 xs:py-2 sm:py-2.5 overflow-hidden text-[10px] xs:text-xs sm:text-sm font-semibold text-white transition duration-300 ease-out border border-white/20 rounded-full shadow-md group min-h-[36px] xs:min-h-[44px]"
            data-cursor-text="Inquire"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 transform -translate-x-full bg-primary group-hover:translate-x-0 ease">
              <ArrowUpRight className="w-3.5 h-3.5 xs:w-4 xs:h-4" />
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease tracking-wider">
              <span className="hidden xs:inline">INQUIRE NOW</span>
              <span className="xs:hidden">INQUIRE</span>
            </span>
            <span className="relative opacity-0 pointer-events-none tracking-wider">
              <span className="hidden xs:inline">INQUIRE NOW</span>
              <span className="xs:hidden">INQUIRE</span>
            </span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center w-9 h-9 xs:w-10 xs:h-10 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 focus:outline-none min-h-[44px] min-w-[44px] shrink-0"
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            {isOpen ? <X className="w-4 h-4 xs:w-5 xs:h-5 text-secondary" /> : <Menu className="w-4 h-4 xs:w-5 xs:h-5 text-white" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden mt-2 w-full glass-panel rounded-2xl xs:rounded-3xl p-4 xs:p-6 border border-white/10 shadow-2xl flex flex-col gap-3 xs:gap-4 bg-[#0a0a12]/95 backdrop-blur-2xl"
          >
            <div className="flex flex-col gap-1">
              <span className="text-[9px] xs:text-[10px] font-mono text-primary font-bold tracking-widest uppercase mb-1 xs:mb-2 px-2">
                FIRM DIRECTORY
              </span>
              {navItems.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className="text-sm xs:text-base font-display font-bold text-text-muted hover:text-white py-2.5 xs:py-3 px-3 rounded-xl hover:bg-white/5 transition-all flex items-center justify-between border-b border-white/5 last:border-none min-h-[48px]"
                >
                  <span className="uppercase tracking-wider">{item.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-primary opacity-60" />
                </a>
              ))}
            </div>

            <div className="pt-2 border-t border-white/10 flex justify-between items-center text-[9px] xs:text-[10px] font-mono text-text-dark">
              <span>OrbitraOne</span>
              <span className="text-teal font-bold">EST. 2012</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
