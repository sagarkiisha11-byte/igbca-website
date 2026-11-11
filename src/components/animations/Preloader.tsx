"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/site";
import { useIntro } from "@/context/IntroContext";

/**
 * Consolidated Intro & Preloader Timings (Total: ~1.6s)
 * - 0.00 – 0.40s: Logo fades in and scales from 0.94 -> 1.0 (easeOut)
 * - 0.15 – 0.60s: Title & Subtitle fade up together (8px rise)
 * - 0.25 – 0.80s: Gold hairline draws left to right
 * - 1.00s: Hold finishes, curtain exit begins (signals heroReady)
 * - 1.00 – 1.60s: Curtain slides up in 0.6s with ease [0.76, 0, 0.24, 1]
 */
export const INTRO = {
  // Logo
  logoIn: 0.4,
  logoScaleFrom: 0.94,

  // Text (Title & Subtitle)
  textDelay: 0.15,
  textIn: 0.45,
  textY: 8,

  // Gold Line
  lineDelay: 0.25,
  lineDraw: 0.55,

  // Hold & Exit
  holdDuration: 1000, // ms before exit starts (~1.0s)
  exitDuration: 0.6, // s
  exitEase: [0.76, 0, 0.24, 1] as const,

  // Prefers Reduced Motion
  reducedHold: 300, // ms
  reducedDuration: 0.3, // s

  // Safety Timeout
  safetyTimeout: 2000, // ms absolute upper bound (2.0s)
};

export default function Preloader() {
  const { showIntro, introExiting, setIntroExiting, setIntroDone, setShowIntro } = useIntro();
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const exitCalledRef = useRef(false);

  // Lock scroll immediately on mount while intro is active
  useEffect(() => {
    if (showIntro) {
      document.documentElement.classList.add("intro-locked");
      document.body.classList.add("intro-locked");
    }

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mq.matches);

    // Sequence timer: hold until ~1.0s, then begin exit curtain
    const holdDuration = mq.matches ? INTRO.reducedHold : INTRO.holdDuration;
    const timer = setTimeout(() => {
      setIntroExiting(true);
    }, holdDuration);

    // Hard emergency timeout: 2.0s absolute upper bound
    const emergencyTimer = setTimeout(() => {
      if (!exitCalledRef.current) {
        exitCalledRef.current = true;
        setIntroExiting(true);
        setIntroDone(true);
        setShowIntro(false);
        document.documentElement.classList.remove("intro-locked");
        document.body.classList.remove("intro-locked");
      }
    }, INTRO.safetyTimeout);

    return () => {
      clearTimeout(timer);
      clearTimeout(emergencyTimer);
      document.documentElement.classList.remove("intro-locked");
      document.body.classList.remove("intro-locked");
    };
  }, [showIntro, setIntroExiting, setIntroDone, setShowIntro]);

  const handleExitComplete = () => {
    if (!exitCalledRef.current) {
      exitCalledRef.current = true;
      setIntroDone(true);
      setShowIntro(false);
      document.documentElement.classList.remove("intro-locked");
      document.body.classList.remove("intro-locked");
    }
  };

  return (
    <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
      {showIntro && (
        <motion.div
          key="igbca-intro-curtain"
          aria-hidden={introExiting}
          initial={{ y: "0%" }}
          animate={{ y: "0%" }}
          exit={
            isReducedMotion
              ? { opacity: 0, transition: { duration: INTRO.reducedDuration, ease: "easeOut" } }
              : {
                  y: "-100%",
                  transition: {
                    duration: INTRO.exitDuration,
                    ease: INTRO.exitEase,
                  },
                }
          }
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-espresso-950 text-cream-50 select-none overflow-hidden will-change-transform"
          style={{ backgroundColor: "#1A0F0A" }}
        >
          {/* Subtle amber radial glow */}
          <div className="absolute w-[450px] h-[450px] bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col items-center text-center relative z-10 px-6 max-w-lg">
            {/* Logo: 0.0 - 0.40s */}
            <motion.div
              initial={{ opacity: 0, scale: INTRO.logoScaleFrom }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: INTRO.logoIn, ease: "easeOut" }}
              className="relative w-20 h-20 sm:w-24 sm:h-24 mb-5 rounded-2xl overflow-hidden border border-gold-400/40 shadow-gold-glow bg-espresso-900/90 p-2"
            >
              <Image
                src={siteConfig.logo}
                alt="IGBCA Crest"
                fill
                priority
                sizes="96px"
                className="object-contain p-1"
              />
            </motion.div>

            {/* Title: 0.15 - 0.60s */}
            <motion.h1
              initial={{ opacity: 0, y: INTRO.textY }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: INTRO.textIn, delay: INTRO.textDelay, ease: "easeOut" }}
              className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-cream-50"
            >
              Institute of Global Baking & Culinary Arts
            </motion.h1>

            {/* Subtitle: 0.15 - 0.60s */}
            <motion.p
              initial={{ opacity: 0, y: INTRO.textY }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: INTRO.textIn, delay: INTRO.textDelay, ease: "easeOut" }}
              className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-gold-400 font-medium mt-1.5"
            >
              BAKING & CULINARY ARTS ACADEMY • CHANDIGARH
            </motion.p>

            {/* Animated drawing gold hairline: 0.25 - 0.80s */}
            <div className="relative w-40 sm:w-56 h-[1.5px] bg-gold-500/20 mt-5 overflow-hidden rounded-full">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: INTRO.lineDraw, delay: INTRO.lineDelay, ease: "easeInOut" }}
                className="w-full h-full bg-gradient-to-r from-transparent via-gold-400 to-transparent origin-left"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
