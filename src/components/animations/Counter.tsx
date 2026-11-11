"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";

interface CounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export default function Counter({
  value,
  suffix = "",
  prefix = "",
  duration = 1.8,
  className = "",
}: CounterProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15, margin: "0px 0px -10% 0px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(value);
  const [isPopped, setIsPopped] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      setDisplayValue(value);
      return;
    }

    if (!isInView) return;

    setDisplayValue(0);
    const controls = animate(count, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        setDisplayValue(Math.round(latest));
      },
      onComplete: () => {
        setIsPopped(true);
      },
    });

    return controls.stop;
  }, [isInView, value, duration, count]);

  return (
    <motion.span
      ref={ref}
      animate={isPopped ? { scale: [1, 1.08, 1] } : { scale: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={`inline-flex items-baseline ${className}`}
      aria-label={`${prefix}${value}${suffix}`}
    >
      <span>{prefix}</span>
      <span>{displayValue}</span>
      {suffix && <span className="text-gold-400 ml-0.5">{suffix}</span>}
    </motion.span>
  );
}

