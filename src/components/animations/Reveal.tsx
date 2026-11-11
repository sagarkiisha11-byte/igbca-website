"use client";

import React from "react";
import { motion } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  variant?: "fade-up" | "blur-in" | "mask-up" | "scale-in";
  delay?: number;
  duration?: number;
  className?: string;
  viewportMargin?: string;
}

export default function Reveal({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 0.5,
  className = "",
  viewportMargin = "0px 0px -10% 0px",
}: RevealProps) {
  if (variant === "scale-in") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.15, margin: viewportMargin }}
        transition={{
          duration,
          delay,
          ease: "easeOut",
        }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  // Default clean fade-up (transform & opacity only, 24px, 0.5s)
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15, margin: viewportMargin }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
