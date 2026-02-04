"use client";

import { useState, useEffect } from "react";

export default function LightSwitch() {
  const [isLight, setIsLight] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme");
    if (stored === "light") {
      setIsLight(true);
      document.documentElement.classList.add("light-mode");
    }
  }, []);

  const toggle = () => {
    setIsLight(!isLight);
    if (!isLight) {
      document.documentElement.classList.add("light-mode");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.remove("light-mode");
      localStorage.setItem("theme", "dark");
    }
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggle}
      className="relative group flex items-center gap-3"
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
    >
      <span className="tech-label hidden sm:block opacity-60 group-hover:opacity-100 transition-opacity">
        {isLight ? "Light: On" : "Light: Off"}
      </span>

      {/* The switch housing */}
      <div className={`relative w-14 h-8 border overflow-hidden transition-all duration-300 ${
        isLight
          ? "bg-[#e4eaf8] border-[#b8c7e0]"
          : "bg-[#0a0a0a] border-[#1a1a1a]"
      }`}>
        {/* Glow effect when on */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            isLight
              ? "opacity-100"
              : "opacity-0"
          }`}
          style={{
            background: isLight
              ? "radial-gradient(circle at center, rgba(37, 63, 246, 0.25) 0%, transparent 70%)"
              : "none"
          }}
        />

        {/* The toggle knob */}
        <div
          className={`absolute top-1 w-6 h-6 transition-all duration-300 ease-out flex items-center justify-center ${
            isLight
              ? "left-7 bg-[#253ff6] shadow-[0_0_20px_rgba(37,63,246,0.8)]"
              : "left-1 bg-[#333]"
          }`}
        >
          {/* Light rays when on */}
          {isLight && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            </div>
          )}
        </div>
      </div>
    </button>
  );
}
