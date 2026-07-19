import React from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';

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
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
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
    <footer className="relative py-24 px-6 bg-obsidian-mesh w-full flex flex-col items-center overflow-hidden">
      {/* Top Divider */}
      <div className="w-[90%] max-w-7xl h-[1px] bg-white/10 absolute top-0" />

      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-12 gap-16 relative z-10 mb-20">
        
        {/* Left Column: Newsletter */}
        <div className="md:col-span-6 flex flex-col gap-6">
          <div>
            <h2
              className="font-display font-extrabold uppercase tracking-tighter text-white mt-2 leading-none"
              style={{ fontSize: 'clamp(1.8rem, 5vw, 3.25rem)' }}
            >
              CHRONICLES OF <br />
              <span className="text-gradient-orange">ORBITRA ONE</span>
            </h2>
            <p className="text-sm text-text-muted mt-2 font-light max-w-sm leading-relaxed">
              Receive notifications when new digital components, shader simulations, or visual design frameworks compile.
            </p>
          </div>

          <div className="flex w-full max-w-md border-b border-white/20 focus-within:border-primary transition-colors duration-300 py-2">
            <input
              type="email"
              placeholder="ENTER_EMAIL_SIGNAL"
              className="bg-transparent border-none outline-none text-sm text-white placeholder-text-dark w-full px-2"
              data-cursor-text="Type"
            />
            <button className="flex items-center gap-1.5 text-xs font-mono font-bold tracking-widest text-white hover:text-primary transition-colors duration-300">
              <span>SUBSCRIBE</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Column: Links & Socials */}
        <div className="md:col-span-6 grid grid-cols-2 gap-8">
          {/* Site Links */}
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-mono text-text-dark font-bold tracking-widest uppercase">
              NAVIGATION
            </span>
            <a href="mailto:orbitra@one.protocol" className="flex items-center gap-4 text-text-muted hover:text-white transition-colors duration-300 group" data-cursor-text="Mail">
              <div className="p-3 bg-white/5 rounded-full border border-white/10 group-hover:border-primary transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <span className="font-mono text-sm font-bold">orbitra@one.protocol</span>
            </a>
            {links.map((link, i) => (
              <a
                key={i}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-sm text-text-muted hover:text-white transition-colors duration-300 self-start group flex items-center gap-1"
                data-cursor-text="Go"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-mono text-text-dark font-bold tracking-widest uppercase">
              NETWORK_LINKS
            </span>
            <div className="flex gap-4">
              {socialLinks.map((soc, i) => {
                const Icon = soc.icon;
                return (
                  <a
                    key={i}
                    href={soc.href}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-white/5 rounded-full border border-white/10 hover:border-primary hover:text-white text-text-muted transition-all duration-300"
                    data-cursor-text={soc.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
            <span className="text-xs text-text-muted font-light leading-relaxed mt-2">
              GRID NODE: JP_03
            </span>
          </div>

        </div>

      </div>

      {/* Giant Typography Background */}
      <div className="relative w-full text-center select-none pointer-events-none mb-12">
        <h2 className="font-display font-extrabold text-[12vw] leading-none text-white/[0.02] uppercase tracking-tighter">
          ORBITRA ONE
        </h2>
      </div>

      {/* Copyright Line */}
      <div className="w-full max-w-7xl flex flex-col sm:flex-row justify-between items-center text-[10px] font-mono text-text-dark font-bold relative z-10 border-t border-white/5 pt-8">
        <span>{"\u00A9"} 2026 ORBITRA ONE PROTOCOL. ALL COGNITIVE INTELLECT SECURED.</span>
        <span className="mt-2 sm:mt-0">COMPILED BY ANTIGRAVITY SYSTEMS</span>
      </div>

    </footer>
  );
}
