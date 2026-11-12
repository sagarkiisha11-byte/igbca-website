"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/site";
import { useIntro } from "@/context/IntroContext";

/**
 * Refined Intro & Preloader Timings (Total: ~2.1s)
 * - Warm, light, welcoming cream-to-caramel background matching classic IGBCA branding
 * - Perfectly circular crest with 2px gold ring and warm glow
 * - Fluid typography with zero text overlap
 * - Smooth 0.6s fade-out exit
 */
export const INTRO = {
  // Logo
  logoIn: 0.5,
  logoScaleFrom: 0.92,

  // Text (Title & Subtitle)
  textDelay: 0.2,
  textIn: 0.55,
  textY: 10,

  // Gold Line
  lineDelay: 0.35,
  lineDraw: 0.6,

  // Hold & Exit
  hold: 1500, // ms on screen before fade-out begins (~1.5s)
  exit: 0.6, // s smooth fade-out
  exitEase: [0.22, 1, 0.36, 1] as const,

  // Prefers Reduced Motion
  reducedHold: 300,
  reducedDuration: 0.3,

  // Safety Timeout
  safetyTimeout: 2500,
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

    // Sequence timer: hold until ~1.5s, then begin smooth fade-out
    const holdDuration = mq.matches ? INTRO.reducedHold : INTRO.hold;
    const timer = setTimeout(() => {
      setIntroExiting(true);
    }, holdDuration);

    // Hard emergency timeout: 2.5s absolute upper bound
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
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: isReducedMotion ? INTRO.reducedDuration : INTRO.exit,
              ease: INTRO.exitEase,
            },
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center select-none overflow-hidden will-change-transform"
          style={{
            background:
              "radial-gradient(circle at center, #FFFDF8 0%, #FFF6E8 45%, #F4DCBA 100%)",
          }}
        >
          {/* Subtle warm amber ambient glow in the center */}
          <div className="absolute w-[500px] h-[500px] bg-[#C8963E]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col items-center text-center relative z-10 px-6 max-w-md mx-auto w-full">
            {/* Circular Logo: uncropped crest inside perfect circle with thin gold ring & warm glow */}
            <motion.div
              initial={{ opacity: 0, scale: INTRO.logoScaleFrom }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: INTRO.logoIn, ease: "easeOut" }}
              className="relative w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[160px] md:h-[160px] mb-6 rounded-full overflow-hidden border-2 border-gold-400 bg-white shadow-[0_0_35px_rgba(200,150,62,0.28)] p-3 shrink-0 flex items-center justify-center"
            >
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                  src={siteConfig.logo}
                  alt="IGBCA Crest"
                  fill
                  priority
                  sizes="(max-width: 640px) 120px, 160px"
                  className="object-contain p-1 rounded-full"
                />
              </div>
            </motion.div>

            {/* Title: Dark espresso brown (#3B2314) with fluid sizing & clean line-height */}
            <motion.h1
              initial={{ opacity: 0, y: INTRO.textY }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: INTRO.textIn, delay: INTRO.textDelay, ease: "easeOut" }}
              className="font-serif text-xl sm:text-2xl md:text-[26px] font-bold tracking-tight text-[#3B2314] leading-snug max-w-sm sm:max-w-md mx-auto"
            >
              Institute of Global Baking &amp; Culinary Arts
            </motion.h1>

            {/* Subtitle: High-contrast gold-brown (#A8791F), properly spaced below title */}
            <motion.p
              initial={{ opacity: 0, y: INTRO.textY }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: INTRO.textIn, delay: INTRO.textDelay, ease: "easeOut" }}
              className="text-[10px] sm:text-[11px] md:text-xs uppercase tracking-[0.22em] text-[#A8791F] font-semibold mt-2.5 max-w-sm mx-auto"
            >
              BAKING &amp; CULINARY ARTS ACADEMY • CHANDIGARH
            </motion.p>

            {/* Animated drawing gold hairline */}
            <div className="relative w-36 sm:w-48 h-[1.5px] bg-[#C8963E]/25 mt-4 overflow-hidden rounded-full">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: INTRO.lineDraw, delay: INTRO.lineDelay, ease: "easeInOut" }}
                className="w-full h-full bg-gradient-to-r from-transparent via-[#C8963E] to-transparent origin-left"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
