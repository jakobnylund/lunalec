"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  number?: string;
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({
  number,
  label,
  title,
  subtitle,
  centered = true,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`${centered ? "text-center" : ""} ${className}`}>
      {(number || label) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`flex items-center gap-4 mb-6 ${centered ? "justify-center" : ""}`}
        >
          {number && <span className="section-number">{number}</span>}
          {number && label && (
            <div className="h-px w-12 bg-gradient-to-r from-[#253ff6] to-transparent" />
          )}
          {label && (
            <span className="text-[#253ff6] font-medium tracking-wide uppercase text-sm">
              {label}
            </span>
          )}
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1]"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`text-[#a1a1a1] text-lg md:text-xl leading-relaxed ${centered ? "max-w-3xl mx-auto" : ""}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
