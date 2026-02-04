"use client";

import { motion } from "framer-motion";

interface SectionLabelProps {
  number?: string;
  text: string;
  className?: string;
}

export default function SectionLabel({
  number,
  text,
  className = "",
}: SectionLabelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`flex items-center gap-4 mb-6 ${className}`}
    >
      {number && (
        <span className="section-number">{number}</span>
      )}
      <div className="h-px w-12 bg-gradient-to-r from-[#253ff6] to-transparent" />
      <span className="text-[#253ff6] font-medium tracking-wide uppercase text-sm">
        {text}
      </span>
    </motion.div>
  );
}
