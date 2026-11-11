"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/site";

export default function Preloader() {
  const [showPreloader, setShowPreloader] = useState(false);

  useEffect(() => {
    try {
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReduced) {
        setShowPreloader(false);
        return;
      }

      const hasPreloaded = window.sessionStorage.getItem("igbca_intro_seen");
      if (!hasPreloaded) {
        setShowPreloader(true);
      }
    } catch {
      // In case sessionStorage is blocked by security policies
      setShowPreloader(false);
    }
  }, []);

  useEffect(() => {
    if (!showPreloader) return;

    const timer = setTimeout(() => {
      setShowPreloader(false);
      try {
        window.sessionStorage.setItem("igbca_intro_seen", "true");
      } catch {
        // Ignore storage errors
      }
    }, 1000);

    // Hard safety timeout: guaranteed to never block screen past 1.4s
    const emergencyTimer = setTimeout(() => {
      setShowPreloader(false);
    }, 1400);

    // Immediate dismissal on first user scroll
    const onScroll = () => setShowPreloader(false);
    window.addEventListener("scroll", onScroll, { once: true, passive: true });

    return () => {
      clearTimeout(timer);
      clearTimeout(emergencyTimer);
      window.removeEventListener("scroll", onScroll);
    };
  }, [showPreloader]);

  return (
    <AnimatePresence mode="wait">
      {showPreloader && (
        <motion.div
          key="luxury-preloader"
          onClick={() => setShowPreloader(false)}
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-espresso-950 text-cream-50 select-none overflow-hidden cursor-pointer"
        >
          {/* Subtle amber radial glow */}
          <div className="absolute w-[450px] h-[450px] bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col items-center text-center relative z-10 px-6"
          >
            {/* Logo */}
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 mb-5 rounded-2xl overflow-hidden border border-gold-400/40 shadow-gold-glow bg-espresso-900/90 p-2">
              <Image
                src={siteConfig.logo}
                alt="IGBCA Crest"
                fill
                priority
                className="object-contain p-1"
              />
            </div>

            {/* Typography */}
            <h1 className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-cream-50">
              Institute of Global Baking & Culinary Arts
            </h1>
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold-400 font-medium mt-1">
              Chandigarh • Est. Excellence
            </p>

            {/* Animated drawing gold hairline */}
            <div className="relative w-40 sm:w-56 h-[1.5px] bg-gold-500/20 mt-5 overflow-hidden rounded-full">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.1, ease: "easeInOut" }}
                className="w-full h-full bg-gradient-to-r from-transparent via-gold-400 to-transparent"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

