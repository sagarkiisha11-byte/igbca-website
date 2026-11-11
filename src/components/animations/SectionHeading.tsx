"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface SectionHeadingProps {
  label: string;
  title: React.ReactNode;
  description?: string;
  align?: "center" | "left";
  theme?: "dark" | "cream";
  className?: string;
  withSparkle?: boolean;
}

export default function SectionHeading({
  label,
  title,
  description,
  align = "center",
  theme = "dark",
  className = "",
  withSparkle = true,
}: SectionHeadingProps) {
  const isDark = theme === "dark";
  const isCenter = align === "center";

  return (
    <div
      className={`relative mb-14 sm:mb-16 ${
        isCenter ? "text-center max-w-3xl mx-auto" : "max-w-2xl text-left"
      } ${className}`}
    >
      {/* Subtle gold ambient glow on dark themes */}
      {isDark && (
        <div
          aria-hidden="true"
          className="absolute -top-12 left-1/2 -translate-x-1/2 w-80 h-28 bg-gold-500/10 rounded-full blur-3xl pointer-events-none"
        />
      )}

      {/* 1. Label with gold line drawing left-to-right */}
      <div
        className={`flex items-center gap-2.5 mb-3 ${
          isCenter ? "justify-center" : "justify-start"
        }`}
      >
        <motion.span
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.15, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className={`h-[1.5px] w-8 origin-left ${
            isDark ? "bg-gradient-to-r from-gold-400 to-gold-600" : "bg-gradient-to-r from-gold-600 to-gold-400"
          }`}
        />

        {withSparkle && (
          <Sparkles
            className={`w-3.5 h-3.5 ${
              isDark ? "text-gold-400" : "text-gold-600"
            }`}
          />
        )}

        <span
          className={`text-xs uppercase tracking-[0.25em] font-semibold ${
            isDark ? "text-gold-400" : "text-gold-700"
          }`}
        >
          {label}
        </span>

        {isCenter && (
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.15, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={`h-[1.5px] w-8 origin-right ${
              isDark ? "bg-gradient-to-l from-gold-400 to-gold-600" : "bg-gradient-to-l from-gold-600 to-gold-400"
            }`}
          />
        )}
      </div>

      {/* 2. Headline with smooth reveal */}
      <div className="py-1">
        <motion.h2
          initial={{ y: 18, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.15, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15] ${
            isDark ? "text-cream-50" : "text-espresso-950"
          }`}
        >
          {title}
        </motion.h2>
      </div>

      {/* 3. Description fading up after */}
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className={`mt-4 text-sm sm:text-base font-light leading-relaxed ${
            isDark ? "text-cream-300" : "text-espresso-800"
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}

