"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Phone, MapPin, X } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function AnnouncementBar() {
  const [isDismissed, setIsDismissed] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY > 30;
          setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {!isScrolled && (
        <motion.div
          initial={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="bg-espresso-950 text-cream-100 text-xs border-b border-gold-500/20 py-2 px-4 overflow-hidden relative z-50 select-none"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            {/* Left / Center announcement details */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-1 w-full md:w-auto text-[11px] sm:text-xs">
              <div className="flex items-center gap-1.5 text-cream-300">
                <Clock className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span>Open Mon–Thu • 9:00 AM – 4:00 PM</span>
              </div>

              <div className="hidden sm:inline-block w-1 h-1 rounded-full bg-gold-500/50" />

              <a
                href={siteConfig.contact.phoneTel}
                className="flex items-center gap-1.5 text-cream-200 hover:text-gold-300 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span className="font-medium tracking-wide">
                  {siteConfig.contact.phone}
                </span>
              </a>

              <div className="hidden lg:inline-block w-1 h-1 rounded-full bg-gold-500/50" />

              <div className="hidden lg:flex items-center gap-1.5 text-cream-300">
                <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span>SCO 218, Sector 36D, Chandigarh</span>
              </div>
            </div>

            {/* Right CTA / dismiss */}
            <div className="hidden md:flex items-center gap-3 shrink-0">
              <Link
                href="/contact"
                className="text-gold-400 hover:text-gold-300 font-medium text-[11px] uppercase tracking-wider underline underline-offset-4 decoration-gold-500/40 hover:decoration-gold-400 transition-colors"
              >
                Visit Studio
              </Link>
              <button
                onClick={() => setIsDismissed(true)}
                aria-label="Dismiss banner"
                className="text-cream-400 hover:text-gold-300 p-0.5 rounded transition-colors"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
