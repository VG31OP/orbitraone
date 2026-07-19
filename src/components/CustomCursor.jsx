import React, { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [hidden, setHidden] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(
        window.innerWidth <= 768 ||
        ('ontouchstart' in window) ||
        navigator.maxTouchPoints > 0
      );
    };
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);
  
  const ringRef = useRef(null);
  const dotRef = useRef(null);
  const requestRef = useRef(null);
  
  const mousePos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const onMouseLeave = () => {
      setHidden(true);
    };

    const onMouseEnter = () => {
      setHidden(false);
    };

    // Track cursor style morphs on interactive elements
    const handleMouseOver = (e) => {
      const target = e.target.closest('a, button, [data-cursor-magnetic], .interactive-card');
      if (target) {
        setIsHovered(true);
        const text = target.getAttribute('data-cursor-text') || '';
        setCursorText(text);
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target.closest('a, button, [data-cursor-magnetic], .interactive-card');
      if (target) {
        setIsHovered(false);
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  // Lag effect animation loop for the outer ring
  useEffect(() => {
    const updateRingPosition = () => {
      // Linear interpolation (Lerp) for smooth lagging follow
      const ease = 0.15;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * ease;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * ease;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0) translate(-50%, -50%)`;
      }

      requestRef.current = requestAnimationFrame(updateRingPosition);
    };

    requestRef.current = requestAnimationFrame(updateRingPosition);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  if (isMobile || hidden) return null;

  return (
    <div className="custom-cursor pointer-events-none fixed inset-0 z-[9999]">
      {/* Outer lag ring */}
      <div
        ref={ringRef}
        className={`fixed left-0 top-0 rounded-full border border-white transition-all duration-300 ease-out flex items-center justify-center text-[10px] font-bold uppercase tracking-wider text-black ${
          isHovered
            ? 'w-16 h-16 bg-white border-transparent scale-110'
            : 'w-8 h-8 bg-transparent border-white/40 scale-100'
        }`}
        style={{
          willChange: 'transform',
        }}
      >
        {isHovered && cursorText && (
          <span className="animate-fade-in">{cursorText}</span>
        )}
      </div>

      {/* Inner precise dot */}
      <div
        ref={dotRef}
        className={`fixed left-0 top-0 w-2 h-2 rounded-full bg-white transition-transform duration-100 ease-out ${
          isHovered ? 'scale-0' : 'scale-100'
        }`}
        style={{
          willChange: 'transform',
        }}
      />
    </div>
  );
}
