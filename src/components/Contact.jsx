import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [focusField, setFocusField] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Node message compiled successfully.\nName: ${form.name}\nEmail: ${form.email}`);
  };

  return (
    <section id="contact" className="relative py-32 px-6 bg-obsidian-mesh w-full flex justify-center overflow-hidden">
      {/* Top Divider */}
      <div className="w-[90%] max-w-7xl h-[1px] bg-white/10 absolute top-0" />

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-16 relative">
        
        {/* Left Column: Direct Links & Orbital Map */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-10">
          <div>
            <span className="text-xs uppercase font-mono tracking-widest text-primary font-bold">// SECURE CONNECTION</span>
            <h2
              className="font-display font-extrabold uppercase tracking-tighter text-white mt-2 leading-none"
              style={{ fontSize: 'clamp(1.8rem, 5vw, 3.25rem)' }}
            >
              ESTABLISH THE <br />
              <span className="text-gradient-purple">LINK</span>
            </h2>
            <p className="text-text-muted mt-6 font-light leading-relaxed max-w-sm">
              Ready to construct a {"\u20B9"}1 Crore digital environment? Transmit your signal to coordinate node coordinates.
            </p>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-6">
            <a href="mailto:orbitra@one.protocol" className="flex items-center gap-4 text-text-muted hover:text-white transition-colors duration-300 group" data-cursor-text="Mail">
                <div className="p-3 bg-white/5 rounded-full border border-white/10 group-hover:border-primary transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="font-mono text-sm font-bold">orbitra@one.protocol</span>
              </a>
            <div className="flex items-center gap-4 text-text-muted">
              <div className="p-3 bg-white/5 rounded-full border border-white/10">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="font-mono text-sm font-bold">GRID_NODE_122.9, TOKYO</span>
            </div>
            <a href="tel:+81312345678" className="flex items-center gap-4 text-text-muted hover:text-white transition-colors duration-300 group" data-cursor-text="Call">
              <div className="p-3 bg-white/5 rounded-full border border-white/10 group-hover:border-primary transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <span className="font-mono text-sm font-bold">+81 (0)3 1234 5678</span>
            </a>
          </div>

          {/* Orbital Mock Map Graphic */}
          <div className="relative w-full h-44 rounded-3xl overflow-hidden glass-panel border border-white/5 flex items-center justify-center bg-black/40">
            <div className="absolute inset-0 cyber-grid opacity-20" />
            <div className="relative w-36 h-36 border border-dashed border-primary-glow rounded-full flex items-center justify-center animate-[spin_30s_linear_infinite]">
              <div className="w-24 h-24 border border-dashed border-white/10 rounded-full flex items-center justify-center animate-[spin_15s_linear_infinite_reverse]">
                <div className="w-12 h-12 border border-primary/20 rounded-full flex items-center justify-center" />
              </div>
              {/* Floating dot nodes */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_#6d28d9]" />
              <div className="absolute bottom-6 left-6 w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_10px_#ff6b35]" />
            </div>
            <div className="absolute bottom-4 left-4 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-teal animate-ping" />
              <span className="text-[10px] font-mono text-text-dark font-bold">RADAR_ONLINE</span>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7 glass-panel rounded-3xl p-8 md:p-12 border border-white/5 relative bg-white/5">
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            
            {/* Input Name */}
            <div className="relative">
              <label className={`absolute left-0 transition-all duration-300 font-mono text-xs ${
                focusField === 'name' || form.name 
                  ? '-top-4 text-primary font-bold' 
                  : 'top-3.5 text-text-muted'
              }`}>
                SIGNAL_NAME
              </label>
              <input
                type="text"
                required
                value={form.name}
                onFocus={() => setFocusField('name')}
                onBlur={() => setFocusField(null)}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="custom-input"
              />
              <div className={`absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-500 ${
                focusField === 'name' ? 'w-full' : 'w-0'
              }`} />
            </div>

            {/* Input Email */}
            <div className="relative">
              <label className={`absolute left-0 transition-all duration-300 font-mono text-xs ${
                focusField === 'email' || form.email 
                  ? '-top-4 text-primary font-bold' 
                  : 'top-3.5 text-text-muted'
              }`}>
                RETURN_EMAIL
              </label>
              <input
                type="email"
                required
                value={form.email}
                onFocus={() => setFocusField('email')}
                onBlur={() => setFocusField(null)}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="custom-input"
              />
              <div className={`absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-500 ${
                focusField === 'email' ? 'w-full' : 'w-0'
              }`} />
            </div>

            {/* Input Message */}
            <div className="relative">
              <label className={`absolute left-0 transition-all duration-300 font-mono text-xs ${
                focusField === 'message' || form.message 
                  ? '-top-4 text-primary font-bold' 
                  : 'top-3.5 text-text-muted'
              }`}>
                COMPILED_TRANSMISSION
              </label>
              <textarea
                required
                rows="4"
                value={form.message}
                onFocus={() => setFocusField('message')}
                onBlur={() => setFocusField(null)}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="custom-input resize-none"
              />
              <div className={`absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-500 ${
                focusField === 'message' ? 'w-full' : 'w-0'
              }`} />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="relative inline-flex items-center justify-between px-8 py-5 overflow-hidden font-medium text-white transition duration-300 ease-out border border-white/10 rounded-full shadow-md group bg-white/5 hover:border-white/40"
              data-cursor-text="Send"
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 transform -translate-y-full bg-primary group-hover:translate-y-0 ease">
                TRANSMIT NODE SIGNAL
              </span>
              <span className="absolute flex items-center justify-between w-full h-full text-white transition-all duration-300 transform group-hover:translate-y-full ease left-0 px-8">
                <span className="font-bold tracking-widest">TRANSMIT SIGNAL</span>
                <ArrowUpRight className="w-5 h-5" />
              </span>
              <span className="relative opacity-0 pointer-events-none flex justify-between w-full">
                <span>TRANSMIT SIGNAL</span>
                <ArrowUpRight className="w-5 h-5" />
              </span>
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}
