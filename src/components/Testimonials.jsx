import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const row1 = [
    { name: "Rajesh Singhania", company: "Chairman, Singhania Realty", feedback: "OrbitraOne delivered a commercial tower that set a new benchmark for Mumbai's real estate market. Pre-leasing hit 95% before completion.", rating: 5 },
    { name: "Sophia Chen", company: "MD, Horizon International Tokyo", feedback: "Their attention to parametric detail, natural light management, and structural safety is world-class. Solarium Center is an architectural triumph.", rating: 5 },
    { name: "Dr. Kabir Kapoor", company: "Private Client, Alibaug", feedback: "Villa Celestial is an absolute masterpiece. They captured our family's vision with architectural perfection, balancing coastal elegance with privacy.", rating: 5 },
  ];

  const row2 = [
    { name: "Arthur Pendelton", company: "Director, Pendelton Hospitality London", feedback: "Designing high-end hospitality spaces requires a deep understanding of human movement and aesthetics. OrbitraOne exceeded all expectations.", rating: 5 },
    { name: "Hidenori Tanaka", company: "Principal, Kyoto Cultural Trust", feedback: "Their respectful integration of traditional timber joinery with modern glass engineering in Aetheria Resort won international praise.", rating: 5 },
    { name: "Ananya Birla", company: "Founder, Apex Luxury Living", feedback: "Working with Vikramaditya Mehta and his team was seamless. The precision of their BIM models ensured zero budget overruns on site.", rating: 5 },
  ];

  return (
    <section className="relative py-12 xs:py-16 sm:py-32 bg-obsidian-mesh w-full flex flex-col items-center overflow-hidden">
      {/* Separator line */}
      <div className="w-[90%] max-w-7xl 3xl:max-w-[1600px] h-[1px] bg-white/10 absolute top-0" />

      {/* CSS Marquee Animations */}
      <style>{`
        @keyframes marquee-left {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes marquee-right {
          0% { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        .marquee-track-left {
          display: flex;
          width: max-content;
          will-change: transform;
          animation: marquee-left 25s linear infinite;
        }
        .marquee-track-right {
          display: flex;
          width: max-content;
          will-change: transform;
          animation: marquee-right 25s linear infinite;
        }
        @media (hover: hover) {
          .marquee-container:hover .marquee-track-left,
          .marquee-container:hover .marquee-track-right {
            animation-play-state: paused;
          }
        }
      `}</style>

      <div className="max-w-7xl 3xl:max-w-[1600px] w-full px-3 xs:px-4 sm:px-6 mb-8 sm:mb-20 text-center md:text-left">
        <span className="text-xs uppercase font-mono tracking-widest text-teal font-bold">// EXECUTIVE ENDORSEMENTS</span>
        <h2
          className="font-display font-extrabold uppercase tracking-tighter text-white mt-1 sm:mt-2 leading-none break-words"
          style={{ fontSize: 'clamp(1.35rem, 6.5vw, 3.25rem)' }}
        >
          CLIENT & DEVELOPER <br />
          <span className="text-gradient-teal">TESTIMONIALS</span>
        </h2>
      </div>

      {/* Infinite Marquees */}
      <div className="w-full flex flex-col gap-3 sm:gap-8 marquee-container">

        {/* Row 1 (Left Scrolling) */}
        <div className="overflow-hidden w-full flex">
          <div className="marquee-track-left gap-3 xs:gap-4 sm:gap-6 px-1 xs:px-2 sm:px-4">
            {[...row1, ...row1].map((item, idx) => (
              <div
                key={idx}
                className="w-[250px] xs:w-[300px] sm:w-[380px] md:w-[420px] rounded-xl xs:rounded-2xl p-4 xs:p-5 sm:p-6 flex flex-col justify-between border border-white/5 bg-[#0a0a12]/90 hover:border-teal/40 transition-all duration-300 transform hover:scale-[1.02] flex-shrink-0 shadow-md"
                data-cursor-text="Read"
              >
                <div>
                  <div className="flex gap-1 mb-2.5 sm:mb-4">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 text-teal fill-teal/20" />
                    ))}
                  </div>
                  <p className="text-[11px] xs:text-xs sm:text-sm md:text-base text-text-muted leading-relaxed font-light italic break-words">
                    "{item.feedback}"
                  </p>
                </div>

                <div className="mt-3 xs:mt-4 sm:mt-6 flex justify-between items-center">
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white uppercase font-display">{item.name}</h4>
                    <span className="text-[8.5px] xs:text-[9px] sm:text-[10px] text-text-dark font-mono font-bold tracking-widest uppercase">{item.company}</span>
                  </div>
                  <span className="text-[7.5px] xs:text-[8px] sm:text-[9px] font-mono text-teal bg-teal/5 px-2 py-0.5 rounded-full border border-teal/10">
                    VERIFIED_ENDORSEMENT
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 (Right Scrolling) */}
        <div className="overflow-hidden w-full flex">
          <div className="marquee-track-right gap-3 xs:gap-4 sm:gap-6 px-1 xs:px-2 sm:px-4">
            {[...row2, ...row2].map((item, idx) => (
              <div
                key={idx}
                className="w-[250px] xs:w-[300px] sm:w-[380px] md:w-[420px] rounded-xl xs:rounded-2xl p-4 xs:p-5 sm:p-6 flex flex-col justify-between border border-white/5 bg-[#0a0a12]/90 hover:border-teal/40 transition-all duration-300 transform hover:scale-[1.02] flex-shrink-0 shadow-md"
                data-cursor-text="Read"
              >
                <div>
                  <div className="flex gap-1 mb-2.5 sm:mb-4">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 text-teal fill-teal/20" />
                    ))}
                  </div>
                  <p className="text-[11px] xs:text-xs sm:text-sm md:text-base text-text-muted leading-relaxed font-light italic break-words">
                    "{item.feedback}"
                  </p>
                </div>

                <div className="mt-3 xs:mt-4 sm:mt-6 flex justify-between items-center">
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white uppercase font-display">{item.name}</h4>
                    <span className="text-[8.5px] xs:text-[9px] sm:text-[10px] text-text-dark font-mono font-bold tracking-widest uppercase">{item.company}</span>
                  </div>
                  <span className="text-[7.5px] xs:text-[8px] sm:text-[9px] font-mono text-teal bg-teal/5 px-2 py-0.5 rounded-full border border-teal/10">
                    VERIFIED_ENDORSEMENT
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
