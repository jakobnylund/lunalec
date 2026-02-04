"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState, ReactNode } from "react";
import { useTheme } from "@/context/ThemeContext";

interface InViewSectionProps {
  children: ReactNode;
  className?: string;
  /** Additional classes to apply only on desktop for hover effects */
  hoverClassName?: string;
}

/**
 * InViewSection - A wrapper component that provides different lighting effects
 * based on device type:
 *
 * - Desktop (hover capable): Uses CSS group hover for lighting effects
 * - Mobile (touch devices): Uses Framer Motion's whileInView for scroll-based glow
 *
 * This creates an engaging experience on both platforms without hover states
 * that don't work on touch devices.
 */
export default function InViewSection({
  children,
  className = "",
  hoverClassName = "group",
}: InViewSectionProps) {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const { isLight } = useTheme();

  useEffect(() => {
    setHasMounted(true);
    // Detect touch device using hover media query
    const mediaQuery = window.matchMedia("(hover: none)");
    setIsTouchDevice(mediaQuery.matches);

    // Listen for changes (e.g., device rotation, external display)
    const handleChange = (e: MediaQueryListEvent) => {
      setIsTouchDevice(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Server-side or before hydration: render without animations
  if (!hasMounted) {
    return (
      <section className={`transition-colors duration-300 ${hoverClassName} ${className} relative overflow-hidden`}>
        <div className="dot-grid absolute inset-0 z-0" />
        <div className="relative z-10">
          {children}
        </div>
      </section>
    );
  }

  // Light mode: static sections without hover effects
  if (isLight) {
    return (
      <section className={className}>
        {children}
      </section>
    );
  }

  // Desktop: return section with group class for CSS hover effects
  if (!isTouchDevice) {
    return (
      <section className={`transition-colors duration-300 ${hoverClassName} ${className} relative overflow-hidden`}>
        {/* Dot grid overlay */}
        <div className="dot-grid absolute inset-0 z-0" />
        <div className="relative z-10">
          {children}
        </div>
      </section>
    );
  }

  // Respect reduced motion preferences
  if (prefersReducedMotion) {
    return (
      <section className={className}>
        {children}
      </section>
    );
  }

  // Mobile: use Framer Motion for in-view glow animation
  return (
    <motion.section
      className={`transition-colors duration-300 ${className} relative overflow-hidden`}
      initial={false}
      whileInView="visible"
      viewport={{ amount: 0.3, margin: "-50px" }}
      variants={{
        visible: {},
      }}
      onViewportEnter={(entry) => {
        // Add the in-view class when section enters viewport
        if (entry?.target) {
          entry.target.classList.add("section-in-view");
        }
      }}
      onViewportLeave={(entry) => {
        // Remove the in-view class when section leaves viewport
        if (entry?.target) {
          entry.target.classList.remove("section-in-view");
        }
      }}
    >
      {/* Dot grid overlay */}
      <div className="dot-grid absolute inset-0 z-0" />
      <div className="relative z-10">
        {children}
      </div>
    </motion.section>
  );
}
