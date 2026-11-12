"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Phone, Instagram, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function AnnouncementBar() {
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

  return (
    <AnimatePresence>
      {!isScrolled && (
        <motion.div
          initial={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="bg-[#FFF8EF] text-[#3B2314] text-xs border-b border-[#E9C9A0]/50 py-2 px-4 overflow-hidden relative z-50 select-none"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between text-[11px] sm:text-xs">
            {/* Left: Phone */}
            <a
              href={siteConfig.contact.phoneTel}
              className="flex items-center gap-1.5 text-[#3B2314] hover:text-[#A8791F] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#A8791F] shrink-0" />
              <span className="font-medium tracking-wide">
                {siteConfig.contact.phone}
              </span>
            </a>

            {/* Right: Operational Timing & Social Icons */}
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="flex items-center gap-1.5 text-[#5A3A25]">
                <Clock className="w-3.5 h-3.5 text-[#A8791F] shrink-0" />
                <span>
                  Open {siteConfig.business.hours.daysShort} • {siteConfig.business.hours.time}
                </span>
              </div>

              <div className="hidden sm:flex items-center gap-2.5 pl-3 border-l border-[#E9C9A0]">
                <a
                  href={siteConfig.socials[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-[#5A3A25] hover:text-[#A8791F] transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5" />
                </a>
                <a
                  href={siteConfig.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="text-emerald-700 hover:text-emerald-600 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
