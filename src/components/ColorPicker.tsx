"use client";

import { useState, useRef, useEffect } from "react";

// Visible light spectrum colors (wavelength order: violet to red)
// These approximate the actual visible spectrum from ~380nm to ~700nm
const SPECTRUM_COLORS = [
  { pos: 0, color: "#7f00ff" },    // Violet (380nm)
  { pos: 12, color: "#4b0082" },   // Indigo
  { pos: 25, color: "#0000ff" },   // Blue (450nm)
  { pos: 38, color: "#00bfff" },   // Cyan (495nm)
  { pos: 50, color: "#00ff00" },   // Green (530nm)
  { pos: 62, color: "#adff2f" },   // Yellow-Green
  { pos: 75, color: "#ffff00" },   // Yellow (580nm)
  { pos: 87, color: "#ff7f00" },   // Orange (600nm)
  { pos: 100, color: "#ff0000" },  // Red (700nm)
];

// Default color: violet-blue (#4c2ee5 approximates position ~15%)
const DEFAULT_POSITION = 15;
const DEFAULT_COLOR = "#4c2ee5";

// Interpolate between spectrum colors based on position
const interpolateColor = (pos: number): string => {
  // Find the two colors to interpolate between
  let lower = SPECTRUM_COLORS[0];
  let upper = SPECTRUM_COLORS[SPECTRUM_COLORS.length - 1];

  for (let i = 0; i < SPECTRUM_COLORS.length - 1; i++) {
    if (pos >= SPECTRUM_COLORS[i].pos && pos <= SPECTRUM_COLORS[i + 1].pos) {
      lower = SPECTRUM_COLORS[i];
      upper = SPECTRUM_COLORS[i + 1];
      break;
    }
  }

  // Calculate interpolation factor
  const range = upper.pos - lower.pos;
  const factor = range === 0 ? 0 : (pos - lower.pos) / range;

  // Parse hex colors
  const lowerRgb = {
    r: parseInt(lower.color.slice(1, 3), 16),
    g: parseInt(lower.color.slice(3, 5), 16),
    b: parseInt(lower.color.slice(5, 7), 16),
  };
  const upperRgb = {
    r: parseInt(upper.color.slice(1, 3), 16),
    g: parseInt(upper.color.slice(3, 5), 16),
    b: parseInt(upper.color.slice(5, 7), 16),
  };

  // Interpolate
  const r = Math.round(lowerRgb.r + (upperRgb.r - lowerRgb.r) * factor);
  const g = Math.round(lowerRgb.g + (upperRgb.g - lowerRgb.g) * factor);
  const b = Math.round(lowerRgb.b + (upperRgb.b - lowerRgb.b) * factor);

  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
};

export default function ColorPicker() {
  const [position, setPosition] = useState<number | null>(null); // null until initialized
  const [isDragging, setIsDragging] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  // Convert position to color using spectrum interpolation
  const getColorFromPosition = (pos: number) => {
    return interpolateColor(pos);
  };

  // Convert position to hex color (same as getColorFromPosition for this implementation)
  const getHexFromPosition = (pos: number) => {
    return interpolateColor(pos);
  };

  // Apply color to CSS custom property (only after initialization)
  useEffect(() => {
    if (position === null || !isInitialized) return;

    const color = getHexFromPosition(position);
    document.documentElement.style.setProperty('--accent', color);

    // Store in localStorage
    localStorage.setItem('accentColor', color);
    localStorage.setItem('accentPosition', position.toString());
  }, [position, isInitialized]);

  // Load saved position on mount
  useEffect(() => {
    const saved = localStorage.getItem('accentPosition');
    if (saved) {
      const savedPosition = parseFloat(saved);
      setPosition(savedPosition);
      // Apply saved color immediately
      const color = getHexFromPosition(savedPosition);
      document.documentElement.style.setProperty('--accent', color);
    } else {
      // Use default position, CSS already has default color
      setPosition(DEFAULT_POSITION);
    }
    setIsInitialized(true);
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

  const currentColor = getColorFromPosition(position ?? DEFAULT_POSITION);

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
            #7f00ff 0%,
            #4b0082 12%,
            #0000ff 25%,
            #00bfff 38%,
            #00ff00 50%,
            #adff2f 62%,
            #ffff00 75%,
            #ff7f00 87%,
            #ff0000 100%
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
            left: `${position ?? DEFAULT_POSITION}%`,
            transform: 'translateX(-50%)',
            boxShadow: `0 0 20px ${currentColor}, 0 0 40px ${currentColor}, 0 0 60px ${currentColor}`,
          }}
        />
      </div>

      {/* Content section */}
      <div className="px-6 lg:px-16 py-12 border-t border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="tech-label mb-4">The Full Spectrum</p>
            <h3
              className="text-2xl mb-4 transition-colors duration-300"
              style={{ color: currentColor }}
            >
              Any Color You Can Imagine
            </h3>
            <p className="text-[#b0b0b0] leading-relaxed">
              LEC technology can produce light across the entire visible spectrum.
              Red, green, blue, and everything in between—our materials can be
              tuned to emit any wavelength you need.
            </p>
          </div>
          <div>
            <p className="tech-label mb-4">The Breakthrough</p>
            <h3 className="text-2xl text-white mb-4">
              White Light Changes Everything
            </h3>
            <p className="text-[#b0b0b0] leading-relaxed mb-4">
              While colored light is impressive, the real breakthrough is
              <span className="text-white font-medium"> white light</span>.
              Achieving efficient, stable white emission from a printable source
              unlocks applications that were previously impossible.
            </p>
            <p className="text-[#b0b0b0] leading-relaxed">
              General illumination. Reading lights. Display backlights.
              All from a surface thinner than a sheet of paper.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
