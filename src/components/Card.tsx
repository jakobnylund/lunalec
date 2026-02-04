"use client";

import { motion } from "framer-motion";

interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}

export default function Card({
  title,
  description,
  icon,
  className = "",
  children,
}: CardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className={`bg-[#111111] border border-[#222] rounded-2xl p-8 md:p-10 transition-all duration-300 hover:border-[#253ff6]/30 card-glow ${className}`}
    >
      {icon && (
        <div className="w-14 h-14 rounded-xl bg-[#253ff6]/10 flex items-center justify-center mb-6 text-[#253ff6]">
          {icon}
        </div>
      )}
      <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 leading-tight">
        {title}
      </h3>
      <p className="text-[#a1a1a1] leading-relaxed text-base md:text-lg">{description}</p>
      {children}
    </motion.div>
  );
}
