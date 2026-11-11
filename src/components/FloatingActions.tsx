"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, ArrowUp, Phone, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/site";
import { useEnquiry } from "@/context/EnquiryContext";

export default function FloatingActions() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { openEnquiryModal } = useEnquiry();

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      if (currentScroll > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }

      if (totalScroll > 0) {
        setScrollProgress((currentScroll / totalScroll) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Circular progress calculations (radius = 18px, circumference ~ 113px)
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (scrollProgress / 100) * circumference;

  return (
    <>
      {/* Desktop & Tablet Floating WhatsApp & Back-To-Top */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 hidden sm:flex">
        {/* Back to top button with circular progress ring */}
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              key="back-to-top"
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              transition={{ duration: 0.3 }}
              onClick={scrollToTop}
              aria-label="Back to top of page"
              className="relative w-12 h-12 rounded-full bg-espresso-950/95 text-gold-300 border border-gold-500/30 flex items-center justify-center shadow-luxury hover:bg-gold-500 hover:text-espresso-950 transition-all duration-300 group"
            >
              {/* SVG Circular Progress Track */}
              <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-1">
                <circle
                  cx="20"
                  cy="20"
                  r={radius}
                  fill="transparent"
                  stroke="rgba(200, 150, 62, 0.2)"
                  strokeWidth="2.5"
                />
                <circle
                  cx="20"
                  cy="20"
                  r={radius}
                  fill="transparent"
                  stroke="#DFB15B"
                  strokeWidth="2.5"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  className="transition-all duration-100"
                />
              </svg>

              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* WhatsApp Pill Button with 6s Pulsing Ring */}
        <div className="relative">
          {/* Pulsing ring wave every ~6s */}
          <motion.span
            animate={{
              scale: [1, 1.35, 1.45],
              opacity: [0.7, 0.2, 0],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              repeatDelay: 3.8,
              ease: "easeOut",
            }}
            className="absolute -inset-1 rounded-full bg-emerald-500/40 pointer-events-none"
          />

          <a
            href={siteConfig.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp with IGBCA Admissions"
            className="group relative flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white pl-3.5 pr-4 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.03]"
          >
            <div className="relative">
              <MessageCircle className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-300 rounded-full animate-ping" />
            </div>
            <span className="text-xs font-semibold tracking-wide hidden md:inline-block">
              Chat on WhatsApp
            </span>
          </a>
        </div>
      </div>

      {/* Mobile Sticky Bottom Action Bar (360px - 640px) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-espresso-950/98 backdrop-blur-lg border-t border-gold-500/30 px-3 py-2.5 shadow-2xl safe-area-bottom">
        <div className="grid grid-cols-3 gap-2">
          {/* 1: Call */}
          <a
            href={siteConfig.contact.phoneTel}
            className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-espresso-900 border border-gold-500/20 text-cream-200 active:bg-gold-500/20 transition-colors"
          >
            <Phone className="w-4 h-4 text-gold-400 mb-0.5" />
            <span className="text-[11px] font-medium">Call Us</span>
          </a>

          {/* 2: WhatsApp */}
          <a
            href={siteConfig.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-emerald-950/70 border border-emerald-500/30 text-emerald-200 active:bg-emerald-600/30 transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400 mb-0.5" />
            <span className="text-[11px] font-medium">WhatsApp</span>
          </a>

          {/* 3: Enquire */}
          <button
            onClick={() => openEnquiryModal()}
            className="btn-gold-shine flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-gradient-to-r from-gold-500 to-gold-400 text-espresso-950 font-bold active:scale-95 transition-transform shadow-gold-glow"
          >
            <Send className="w-4 h-4 mb-0.5" />
            <span className="text-[11px] font-bold uppercase tracking-wider">
              Enquire
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
