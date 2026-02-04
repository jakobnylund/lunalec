"use client";

import { useTheme } from "@/context/ThemeContext";

export default function LightSwitch() {
  const { isLight, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      className={`p-2 transition-all duration-300 ${
        isLight
          ? "text-[#253ff6]"
          : "text-[#555] hover:text-white"
      }`}
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
    >
      <svg
        className="w-5 h-5"
        fill={isLight ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
        />
      </svg>
    </button>
  );
}
