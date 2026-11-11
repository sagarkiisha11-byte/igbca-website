"use client";

import React from "react";
import { motion } from "framer-motion";

interface SplitTextProps {
  text: string;
  className?: string;
  highlightWord?: string;
  delay?: number;
  trigger?: boolean;
}

export default function SplitText({
  text,
  className = "",
  highlightWord,
  delay = 0.1,
  trigger,
}: SplitTextProps) {
  const words = text.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: {
      y: 16,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      animate={trigger !== undefined ? (trigger ? "visible" : "hidden") : undefined}
      whileInView={trigger === undefined ? "visible" : undefined}
      viewport={trigger === undefined ? { once: true, amount: 0.15, margin: "0px 0px -10% 0px" } : undefined}
      className={`inline-block ${className}`}
    >
      {words.map((word, i) => {
        const cleanWord = word.replace(/[^a-zA-Z]/g, "");
        const isHighlight =
          highlightWord &&
          cleanWord.toLowerCase() === highlightWord.toLowerCase();

        return (
          <span
            key={`${word}-${i}`}
            className="inline-block mr-[0.25em] align-top"
          >
            <motion.span
              variants={wordVariants}
              className={`inline-block ${
                isHighlight
                  ? "text-gold-gradient italic font-serif font-bold relative animate-shimmer"
                  : ""
              }`}
            >
              {word}
            </motion.span>
          </span>
        );
      })}
    </motion.span>
  );
}

