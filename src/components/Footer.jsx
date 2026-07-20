import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const socialLinks = [
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: (props) => (
      <svg className={props.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
    )
  },
  {
    name: "GitHub",
    href: "https://github.com",
    icon: (props) => (
      <svg className={props.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4M9 18c-4.51 2-5-2-7-2" />
      </svg>
    )
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: (props) => (
      <svg className={props.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z" />
      </svg>
    )
  }
];

export default function Footer() {
  const links = [
    { name: "Capabilities", href: "#services" },
    { name: "The Firm", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Process", href: "#process" },
    { name: "FAQ", href: "#faq" }
  ];

  const handleScroll = (e, href) => {
    e.preventDefault();
    if (window.lenis) {
      window.lenis.scrollTo(href);
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative py-12 xs:py-16 sm:py-24 px-3 xs:px-4 sm:px-6 bg-obsidian-mesh w-full flex flex-col items-center overflow-hidden">
      {/* Top Divider */}
      <div className="w-[90%] max-w-7xl 3xl:max-w-[1600px] h-[1px] bg-white/10 absolute top-0" />

      <div className="max-w-7xl 3xl:max-w-[1600px] w-full grid grid-cols-1 md:grid-cols-12 gap-8 xs:gap-10 sm:gap-16 relative z-10 mb-8 xs:mb-12 sm:mb-20">

        {/* Left Column: Newsletter */}
        <div className="md:col-span-6 flex flex-col gap-3 xs:gap-4 sm:gap-6">
          <div>
            <h2
              className="font-display font-extrabold uppercase tracking-tighter text-white mt-1 sm:mt-2 leading-none break-words"
              style={{ fontSize: 'clamp(1.35rem, 6.5vw, 3.25rem)' }}
            >
              ARCHITECTING LANDMARKS WITH <br />
              <span className="text-gradient-orange">OrbitraOne</span>
            </h2>
            <p className="text-xs sm:text-sm text-text-muted mt-2 font-light max-w-sm leading-relaxed break-words">
              Subscribe to receive our annual architectural review, structural engineering monographs, and landmark case studies.
            </p>
          </div>

          <div className="flex flex-col xs:flex-row w-full max-w-md border-b border-white/20 focus-within:border-primary transition-colors duration-300 py-1.5 xs:py-2 gap-2 xs:gap-0">
            <input
              type="email"
              placeholder="CORPORATE_EMAIL"
              className="bg-transparent border-none outline-none text-xs sm:text-sm text-white placeholder-text-dark w-full px-2 min-h-[44px]"
              data-cursor-text="Type"
              aria-label="Corporate Email Subscription"
            />
            <button className="flex items-center justify-center gap-1.5 text-xs font-mono font-bold tracking-widest text-white hover:text-primary transition-colors duration-300 min-h-[44px] shrink-0 px-2">
              <span>SUBSCRIBE</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Column: Links & Socials */}
        <div className="md:col-span-6 grid grid-cols-1 xs:grid-cols-2 gap-6 xs:gap-8">
          {/* Site Links */}
          <div className="flex flex-col gap-2.5 xs:gap-3 sm:gap-4">
            <span className="text-[9px] xs:text-[10px] font-mono text-text-dark font-bold tracking-widest uppercase">
              FIRM DIRECTORY
            </span>
            {links.map((link, i) => (
              <a
                key={i}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-xs sm:text-sm text-text-muted hover:text-white transition-colors duration-300 self-start group flex items-center gap-1 min-h-[44px]"
                data-cursor-text="Go"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-2.5 xs:gap-3 sm:gap-4">
            <span className="text-[9px] xs:text-[10px] font-mono text-text-dark font-bold tracking-widest uppercase">
              GLOBAL PRESENCE
            </span>
            <div className="flex gap-3 sm:gap-4 flex-wrap">
              {socialLinks.map((soc, i) => {
                const Icon = soc.icon;
                return (
                  <a
                    key={i}
                    href={soc.href}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 xs:p-3 bg-white/5 rounded-full border border-white/10 hover:border-primary hover:text-white text-text-muted transition-all duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center"
                    data-cursor-text={soc.name}
                    aria-label={soc.name}
                  >
                    <Icon className="w-4 h-4 xs:w-5 xs:h-5" />
                  </a>
                );
              })}
            </div>
            <span className="text-[11px] xs:text-xs text-text-muted font-light leading-relaxed mt-1 xs:mt-2">
              MUMBAI &bull; LONDON &bull; TOKYO
            </span>
          </div>

        </div>

      </div>

      {/* Giant Typography Background */}
      <div className="relative w-full text-center select-none pointer-events-none mb-6 xs:mb-8 sm:mb-12 overflow-hidden">
        <h2 className="font-display font-extrabold text-[9vw] xs:text-[11vw] leading-none text-white/[0.02] uppercase tracking-tighter truncate">
          OrbitraOne
        </h2>
      </div>

      {/* Copyright Line */}
      <div className="w-full max-w-7xl 3xl:max-w-[1600px] flex flex-col sm:flex-row justify-between items-center text-[9px] xs:text-[10px] font-mono text-text-dark font-bold relative z-10 border-t border-white/5 pt-4 xs:pt-6 sm:pt-8 text-center sm:text-left gap-1.5 sm:gap-0">
        <span>{"\u00A9"} 2026 OrbitraOne ARCHITECTURAL GROUP. ALL RIGHTS RESERVED.</span>
        <span>GLOBAL ARCHITECTURAL & DEVELOPMENT EXCELLENCE</span>
      </div>

    </footer>
  );
}
