"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, AlertCircle } from "lucide-react";
import { testimonialsData } from "@/data/testimonials";
import { SHOW_PLACEHOLDER_NOTICE } from "@/data/site";
import SectionHeading from "@/components/animations/SectionHeading";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const items = testimonialsData.items;

  // Auto-play every 6s, pausing on hover/touch
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [isPaused, items.length]);

  const prev = () => {
    setCurrentIndex((currentIndex - 1 + items.length) % items.length);
  };

  const next = () => {
    setCurrentIndex((currentIndex + 1) % items.length);
  };

  const currentItem = items[currentIndex];

  return (
    <section
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
      className="py-20 md:py-28 lg:py-32 bg-cream-50 text-espresso-950 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <SectionHeading
          label="Student Experiences"
          title={
            <>
              Words From Our <span className="text-gold-gradient">Alumni</span>
            </>
          }
          description="Read about the practical bench learning, instructor feedback, and culinary confidence gained at IGBCA Chandigarh."
          theme="cream"
        />

        {/* TODO: Client to provide official student testimonials & verified Google Reviews */}
        {SHOW_PLACEHOLDER_NOTICE && (
          <div className="mb-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-800 text-xs">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
              <span>
                UI placeholder data — Client to provide official student testimonials & Google Reviews
              </span>
            </div>
          </div>
        )}

        {/* Carousel Card Container */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentItem.id}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-3xl p-8 sm:p-12 md:p-14 border border-gold-500/25 shadow-luxury relative overflow-hidden"
            >
              {/* Giant decorative watermark quote */}
              <Quote className="w-24 h-24 text-gold-500/10 absolute -bottom-4 right-6 pointer-events-none" />

              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
                {/* Stars filling in one by one */}
                <div className="flex items-center gap-1.5">
                  {[...Array(currentItem.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: [0, 1.3, 1], opacity: 1 }}
                      transition={{ delay: i * 0.1, duration: 0.35, ease: "easeOut" }}
                    >
                      <Star className="w-5 h-5 fill-gold-500 text-gold-500 drop-shadow-sm" />
                    </motion.div>
                  ))}
                </div>

                <div className="text-xs uppercase tracking-widest text-gold-700 font-semibold bg-gold-500/10 border border-gold-400/30 px-3 py-1 rounded-full">
                  Verified Graduate Review
                </div>
              </div>

              {/* Quote text */}
              <blockquote className="font-serif text-lg sm:text-2xl text-espresso-950 leading-relaxed italic mb-8">
                &ldquo;{currentItem.quote}&rdquo;
              </blockquote>

              {/* Author & Credential */}
              <div className="flex items-center justify-between pt-6 border-t border-cream-200">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-full bg-espresso-950 text-gold-400 font-bold text-sm flex items-center justify-center shrink-0 border border-gold-400/40 shadow-sm">
                    {currentItem.avatarText}
                  </div>
                  <div>
                    <h4 className="font-serif text-base sm:text-lg font-bold text-espresso-950">
                      {currentItem.name}
                    </h4>
                    <p className="text-xs font-semibold text-gold-700">
                      {currentItem.program}
                    </p>
                    <p className="text-[11px] text-espresso-500 font-light">
                      {currentItem.role}
                    </p>
                  </div>
                </div>

                {/* Desktop Carousel Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={prev}
                    aria-label="Previous testimonial"
                    className="w-10 h-10 rounded-full border border-gold-500/30 hover:border-gold-500 bg-cream-50 hover:bg-gold-500 hover:text-white flex items-center justify-center text-espresso-900 transition-colors shadow-sm"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={next}
                    aria-label="Next testimonial"
                    className="w-10 h-10 rounded-full border border-gold-500/30 hover:border-gold-500 bg-cream-50 hover:bg-gold-500 hover:text-white flex items-center justify-center text-espresso-900 transition-colors shadow-sm"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Animated Carousel Pagination Dots */}
          <div className="flex items-center justify-center gap-2.5 mt-8">
            {items.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setCurrentIndex(dotIdx)}
                aria-label={`Go to testimonial ${dotIdx + 1}`}
                className="p-1 focus:outline-none"
              >
                <motion.div
                  animate={{
                    width: dotIdx === currentIndex ? 32 : 10,
                    backgroundColor:
                      dotIdx === currentIndex ? "#C8963E" : "rgba(200, 150, 62, 0.25)",
                  }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="h-2.5 rounded-full"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
