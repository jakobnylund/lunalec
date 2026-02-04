"use client";

import { useState, useRef, useEffect } from "react";

export default function ColorPicker() {
  const [position, setPosition] = useState(0); // 0-100 percentage
  const [isDragging, setIsDragging] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  // Convert position to HSL color (full spectrum)
  const getColorFromPosition = (pos: number) => {
    const hue = (pos / 100) * 360;
    return `hsl(${hue}, 85%, 55%)`;
  };

  // Convert position to hex color
  const getHexFromPosition = (pos: number) => {
    const hue = (pos / 100) * 360;
    const s = 0.85;
    const l = 0.55;

    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs((hue / 60) % 2 - 1));
    const m = l - c / 2;

    let r = 0, g = 0, b = 0;

    if (hue < 60) { r = c; g = x; b = 0; }
    else if (hue < 120) { r = x; g = c; b = 0; }
    else if (hue < 180) { r = 0; g = c; b = x; }
    else if (hue < 240) { r = 0; g = x; b = c; }
    else if (hue < 300) { r = x; g = 0; b = c; }
    else { r = c; g = 0; b = x; }

    const toHex = (n: number) => {
      const hex = Math.round((n + m) * 255).toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    };

    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  };

  // Apply color to CSS custom property
  useEffect(() => {
    const color = getHexFromPosition(position);
    document.documentElement.style.setProperty('--accent', color);

    // Store in localStorage
    localStorage.setItem('accentColor', color);
    localStorage.setItem('accentPosition', position.toString());
  }, [position]);

  // Load saved position on mount
  useEffect(() => {
    const saved = localStorage.getItem('accentPosition');
    if (saved) {
      setPosition(parseFloat(saved));
    } else {
      // Default to blue position (~230 degrees = 64%)
      setPosition(64);
    }
  }, []);

  const updatePosition = (clientX: number) => {
    if (!barRef.current) return;

    const rect = barRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(percentage);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    updatePosition(e.clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      updatePosition(e.clientX);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    updatePosition(e.touches[0].clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (isDragging) {
      updatePosition(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  const currentColor = getColorFromPosition(position);

  return (
    <div className="bg-[#050505]">
      {/* Spectrum bar - full width */}
      <div
        ref={barRef}
        className="relative h-16 cursor-crosshair select-none"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        style={{
          background: `linear-gradient(to right,
            hsl(0, 85%, 55%),
            hsl(60, 85%, 55%),
            hsl(120, 85%, 55%),
            hsl(180, 85%, 55%),
            hsl(240, 85%, 55%),
            hsl(300, 85%, 55%),
            hsl(360, 85%, 55%)
          )`,
        }}
      >
        {/* Label centered */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <p className="text-white/80 text-base font-medium tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            Choose your light
          </p>
        </div>

        {/* Slider handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white pointer-events-none"
          style={{
            left: `${position}%`,
            transform: 'translateX(-50%)',
            boxShadow: `0 0 20px ${currentColor}, 0 0 40px ${currentColor}, 0 0 60px ${currentColor}`,
          }}
        />
      </div>
    </div>
  );
}
