import React, { useState } from 'react';
import { Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [focusField, setFocusField] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${form.name}. Your architectural inquiry has been transmitted to our Bandra Kurla Complex design team. We will respond within 24 hours.`);
  };

  return (
    <section id="contact" className="relative py-12 xs:py-16 sm:py-32 px-3 xs:px-4 sm:px-6 bg-obsidian-mesh w-full flex justify-center overflow-hidden">
      {/* Top Divider */}
      <div className="w-[90%] max-w-7xl 3xl:max-w-[1600px] h-[1px] bg-white/10 absolute top-0" />

      <div className="max-w-7xl 3xl:max-w-[1600px] w-full grid grid-cols-1 lg:grid-cols-12 gap-8 xs:gap-10 lg:gap-16 relative">
        
        {/* Left Column: Direct Links */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-6 xs:gap-8 sm:gap-10">
          <div>
            <span className="text-xs uppercase font-mono tracking-widest text-primary font-bold">// PROJECT INQUIRY</span>
            <h2
              className="font-display font-extrabold uppercase tracking-tighter text-white mt-1 sm:mt-2 leading-none break-words"
              style={{ fontSize: 'clamp(1.35rem, 6.5vw, 3.25rem)' }}
            >
              SCHEDULE AN EXECUTIVE <br />
              <span className="text-gradient-purple">CONSULTATION</span>
            </h2>
            <p className="text-text-muted mt-3 sm:mt-6 font-light leading-relaxed max-w-sm text-xs xs:text-sm sm:text-base break-words">
              To discuss new commercial tower developments, luxury private residential estates, or institutional master planning, contact our principal design studio.
            </p>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-3 xs:gap-4 sm:gap-6">
            <a href="mailto:inquiries@valencearchitecture.com" className="flex items-center gap-3 sm:gap-4 text-text-muted hover:text-white transition-colors duration-300 group min-h-[44px]" data-cursor-text="Mail">
              <div className="p-2 xs:p-2.5 sm:p-3 bg-white/5 rounded-full border border-white/10 group-hover:border-primary transition-colors shrink-0">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <span className="font-mono text-xs sm:text-sm font-bold truncate">inquiries@valencearchitecture.com</span>
            </a>
            <div className="flex items-center gap-3 sm:gap-4 text-text-muted min-h-[44px]">
              <div className="p-2 xs:p-2.5 sm:p-3 bg-white/5 rounded-full border border-white/10 shrink-0">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <span className="font-mono text-xs sm:text-sm font-bold truncate">SUITE 1204, TOWER 1, BKC, MUMBAI</span>
            </div>
            <a href="tel:+912268904400" className="flex items-center gap-3 sm:gap-4 text-text-muted hover:text-white transition-colors duration-300 group min-h-[44px]" data-cursor-text="Call">
              <div className="p-2 xs:p-2.5 sm:p-3 bg-white/5 rounded-full border border-white/10 group-hover:border-primary transition-colors shrink-0">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <span className="font-mono text-xs sm:text-sm font-bold truncate">+91 (0) 22 6890 4400</span>
            </a>
          </div>

          {/* Orbital Mock Map Graphic */}
          <div className="relative w-full h-32 xs:h-36 sm:h-44 rounded-xl xs:rounded-2xl sm:rounded-3xl overflow-hidden glass-panel border border-white/5 flex items-center justify-center bg-black/40">
            <div className="absolute inset-0 cyber-grid opacity-20" />
            <div className="relative w-24 h-24 xs:w-28 xs:h-28 sm:w-36 sm:h-36 border border-dashed border-primary-glow rounded-full flex items-center justify-center animate-[spin_30s_linear_infinite]" style={{ willChange: 'transform' }}>
              <div className="w-14 h-14 xs:w-18 xs:h-18 sm:w-24 sm:h-24 border border-dashed border-white/10 rounded-full flex items-center justify-center animate-[spin_15s_linear_infinite_reverse]" style={{ willChange: 'transform' }}>
                <div className="w-6 h-6 xs:w-8 xs:h-8 sm:w-12 sm:h-12 border border-primary/20 rounded-full flex items-center justify-center" />
              </div>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_#6d28d9]" />
              <div className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6 w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_10px_#ff6b35]" />
            </div>
            <div className="absolute bottom-2.5 left-2.5 sm:bottom-4 sm:left-4 flex items-center gap-2">
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-teal animate-ping" />
              <span className="text-[8.5px] xs:text-[9px] sm:text-[10px] font-mono text-text-dark font-bold">MUMBAI_STUDIO_ONLINE</span>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7 glass-panel rounded-xl xs:rounded-2xl sm:rounded-3xl p-4 xs:p-6 md:p-12 border border-white/5 relative bg-white/5">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 xs:gap-6 sm:gap-8">
            
            {/* Input Name */}
            <div className="relative pt-2">
              <label className={`absolute left-0 transition-all duration-300 font-mono text-[11px] xs:text-xs ${
                focusField === 'name' || form.name 
                  ? '-top-2 text-primary font-bold' 
                  : 'top-3.5 text-text-muted'
              }`}>
                YOUR_FULL_NAME
              </label>
              <input
                type="text"
                required
                value={form.name}
                onFocus={() => setFocusField('name')}
                onBlur={() => setFocusField(null)}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="custom-input min-h-[48px]"
              />
              <div className={`absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-500 ${
                focusField === 'name' ? 'w-full' : 'w-0'
              }`} />
            </div>

            {/* Input Email */}
            <div className="relative pt-2">
              <label className={`absolute left-0 transition-all duration-300 font-mono text-[11px] xs:text-xs ${
                focusField === 'email' || form.email 
                  ? '-top-2 text-primary font-bold' 
                  : 'top-3.5 text-text-muted'
              }`}>
                CORPORATE_OR_PRIVATE_EMAIL
              </label>
              <input
                type="email"
                required
                value={form.email}
                onFocus={() => setFocusField('email')}
                onBlur={() => setFocusField(null)}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="custom-input min-h-[48px]"
              />
              <div className={`absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-500 ${
                focusField === 'email' ? 'w-full' : 'w-0'
              }`} />
            </div>

            {/* Input Message */}
            <div className="relative pt-2">
              <label className={`absolute left-0 transition-all duration-300 font-mono text-[11px] xs:text-xs ${
                focusField === 'message' || form.message 
                  ? '-top-2 text-primary font-bold' 
                  : 'top-3.5 text-text-muted'
              }`}>
                PROJECT_SCOPE_&_LOCATION
              </label>
              <textarea
                required
                rows="4"
                value={form.message}
                onFocus={() => setFocusField('message')}
                onBlur={() => setFocusField(null)}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="custom-input resize-none pt-4"
              />
              <div className={`absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-500 ${
                focusField === 'message' ? 'w-full' : 'w-0'
              }`} />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="relative inline-flex items-center justify-between px-5 xs:px-6 sm:px-8 py-3.5 sm:py-5 overflow-hidden font-medium text-white transition duration-300 ease-out border border-white/10 rounded-full shadow-md group bg-white/5 hover:border-white/40 min-h-[48px] w-full xs:w-auto self-start uppercase"
              data-cursor-text="Send"
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 transform -translate-y-full bg-primary group-hover:translate-y-0 ease">
                TRANSMIT INQUIRY
              </span>
              <span className="absolute flex items-center justify-between w-full h-full text-white transition-all duration-300 transform group-hover:translate-y-full ease left-0 px-5 xs:px-6 sm:px-8">
                <span className="font-bold tracking-widest text-xs sm:text-sm">TRANSMIT INQUIRY</span>
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </span>
              <span className="relative opacity-0 pointer-events-none flex items-center justify-between w-full">
                <span className="font-bold tracking-widest text-xs sm:text-sm">TRANSMIT INQUIRY</span>
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </span>
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}
