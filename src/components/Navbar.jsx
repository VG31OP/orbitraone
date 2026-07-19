import React from 'react';
import { motion } from 'framer-motion';
import { Radio } from 'lucide-react';

export default function Navbar() {
  const navItems = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Process', href: '#process' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleScroll = (e, href) => {
    e.preventDefault();
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
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 w-[90%] max-w-7xl z-50">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-full h-16 glass-panel rounded-full flex items-center justify-between px-4 sm:px-8"
      >
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 font-display font-extrabold text-xl tracking-wider text-white"
          data-cursor-text="Orbit"
        >
          <Radio className="w-5 h-5 text-secondary animate-pulse" />
          ORBITRA ONE
        </a>

        {/* Nav Items (Hidden on mobile) */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              className="text-sm font-medium text-text-muted hover:text-white transition-colors duration-300 relative py-1 group"
              data-cursor-text="Go"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Action CTA Button */}
        <div>
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, '#contact')}
            className="relative inline-flex items-center justify-center px-4 sm:px-6 py-1.5 sm:py-2.5 overflow-hidden text-xs sm:text-sm font-medium text-white transition duration-300 ease-out border border-white/20 rounded-full shadow-md group"
            data-cursor-text="Connect"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 transform -translate-x-full bg-primary group-hover:translate-x-0 ease">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
              START PROJECT
            </span>
            <span className="relative opacity-0 pointer-events-none">START PROJECT</span>
          </a>
        </div>
      </motion.nav>
    </div>
  );
}
