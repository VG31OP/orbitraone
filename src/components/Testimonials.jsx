import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const row1 = [
    { name: "Marcus Vance", company: "Aether Labs", feedback: "Orbitra One didn't just build our site; they reshaped our entire digital identity. It's a masterpieces that generates organic leads.", rating: 5 },
    { name: "Elena Rostova", company: "Cyberdyne", feedback: "The dynamic animations and custom cursor followings make our visitors spend triple the time on our landing portals.", rating: 5 },
    { name: "Kenji Sato", company: "Mirai Corp", feedback: "Absolute world-class design engineering. It runs beautifully on desktop and mobile platforms with 120 FPS.", rating: 5 },
  ];

  const row2 = [
    { name: "Aria Sterling", company: "Solaris Group", feedback: "Orbitra One is a ₹1 Crore high-end digital interface and creative technology project engineered for a luxury technology brand. bento layouts is unmatched.", rating: 5 },
    { name: "Devon Brooks", company: "Apex Systems", feedback: "Orbitra One | Luxury Creative Technology & Digital Protocolmpletely from typical software templates.", rating: 5 },
    { name: "Nadia Nour", company: "Zeta Neural", feedback: "40: - Magazine-inspired layout matching sticky growth timelines (left) against descriptive story columns (right).dozens of design feature write-ups.", rating: 5 },
  ];

  return (
    <section className="relative py-32 bg-obsidian-mesh w-full flex flex-col items-center overflow-hidden">
      {/* Separator line */}
      <div className="w-[90%] max-w-7xl h-[1px] bg-white/10 absolute top-0" />

      {/* CSS Marquee Animations */}
      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .marquee-track-left {
          display: flex;
          width: max-content;
          animation: marquee-left 25s linear infinite;
        }
        .marquee-track-right {
          display: flex;
          width: max-content;
          animation: marquee-right 25s linear infinite;
        }
        @media (hover: hover) {
          .marquee-container:hover .marquee-track-left,
          .marquee-container:hover .marquee-track-right {
            animation-play-state: paused;
          }
        }
      `}</style>

      <div className="max-w-7xl w-full px-6 mb-20 text-center md:text-left">
        <span className="text-xs uppercase font-mono tracking-widest text-teal font-bold">// REALTIME FEEDBACK</span>
        <h2
          className="font-display font-extrabold uppercase tracking-tighter text-white mt-2 leading-none"
          style={{ fontSize: 'clamp(1.8rem, 5vw, 3.25rem)' }}
        >
          SYNAPTIC REVIEWAL <br />
          <span className="text-gradient-teal">NETWORKS</span>
        </h2>
      </div>

      {/* Infinite Marquees */}
      <div className="w-full flex flex-col gap-8 marquee-container">
        
        {/* Row 1 (Left Scrolling) */}
        <div className="overflow-hidden w-full flex">
          <div className="marquee-track-left gap-6 px-4">
            {[...row1, ...row1].map((item, idx) => (
              <div
                key={idx}
                className="w-[350px] md:w-[420px] glass-panel rounded-2xl p-6 flex flex-col justify-between border border-white/5 bg-white/5 hover:border-teal/40 transition-all duration-300 transform hover:scale-[1.02] flex-shrink-0"
                data-cursor-text="Read"
              >
                <div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-teal fill-teal/20" />
                    ))}
                  </div>
                  <p className="text-sm md:text-base text-text-muted leading-relaxed font-light italic">
                    "{item.feedback}"
                  </p>
                </div>
                
                <div className="mt-6 flex justify-between items-center">
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase font-display">{item.name}</h4>
                    <span className="text-[10px] text-text-dark font-mono font-bold tracking-widest uppercase">{item.company}</span>
                  </div>
                  <span className="text-[9px] font-mono text-teal bg-teal/5 px-2 py-0.5 rounded-full border border-teal/10">
                    VERIFIED_NODE
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 (Right Scrolling) */}
        <div className="overflow-hidden w-full flex">
          <div className="marquee-track-right gap-6 px-4">
            {[...row2, ...row2].map((item, idx) => (
              <div
                key={idx}
                className="w-[350px] md:w-[420px] glass-panel rounded-2xl p-6 flex flex-col justify-between border border-white/5 bg-white/5 hover:border-teal/40 transition-all duration-300 transform hover:scale-[1.02] flex-shrink-0"
                data-cursor-text="Read"
              >
                <div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-teal fill-teal/20" />
                    ))}
                  </div>
                  <p className="text-sm md:text-base text-text-muted leading-relaxed font-light italic">
                    "{item.feedback}"
                  </p>
                </div>

                <div className="mt-6 flex justify-between items-center">
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase font-display">{item.name}</h4>
                    <span className="text-[10px] text-text-dark font-mono font-bold tracking-widest uppercase">{item.company}</span>
                  </div>
                  <span className="text-[9px] font-mono text-teal bg-teal/5 px-2 py-0.5 rounded-full border border-teal/10">
                    VERIFIED_NODE
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
