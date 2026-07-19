import React from 'react';

export default function NoiseOverlay() {
  return (
    <>
      <style>{`
        @keyframes noise-vibration {
          0% { transform: translate(0,0); }
          10% { transform: translate(-1%, -1%); }
          20% { transform: translate(-2%, 1%); }
          30% { transform: translate(1%, -2%); }
          40% { transform: translate(-1%, 3%); }
          50% { transform: translate(-2%, 1%); }
          60% { transform: translate(3%, -1%); }
          70% { transform: translate(2%, 1%); }
          80% { transform: translate(-1%, -2%); }
          90% { transform: translate(1%, 3%); }
          100% { transform: translate(0, 0); }
        }
        .noise-bg {
          animation: noise-vibration 0.5s steps(10) infinite;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }
      `}</style>
      <div className="pointer-events-none fixed -inset-[200%] z-[999] opacity-[0.035] noise-bg" />
    </>
  );
}
