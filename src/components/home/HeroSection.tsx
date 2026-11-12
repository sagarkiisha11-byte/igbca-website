"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, Calendar } from "lucide-react";
import { siteConfig } from "@/data/site";
import { useEnquiry } from "@/context/EnquiryContext";
import { useIntro } from "@/context/IntroContext";
import SplitText from "@/components/animations/SplitText";
import Magnetic from "@/components/animations/Magnetic";

const heroSlides = [
  {
    url: "https://igbca.in/wp-content/uploads/2024/08/hero-2.jpg",
    alt: "IGBCA Masterclass and Dessert Craftsmanship in Studio",
  },
  {
    url: "https://igbca.in/wp-content/uploads/2024/07/Puffs-Viennoseries.jpg",
    alt: "Flaky Golden French Butter Croissants and Viennoiserie",
  },
  {
    url: "https://igbca.in/wp-content/uploads/2024/07/Artisan-Plain-Breads.jpg",
    alt: "Artisan Sourdough and Handcrafted Rustic Breads",
  },
];

export default function HeroSection() {
  const { openEnquiryModal } = useEnquiry();
  const { introExiting, introDone } = useIntro();
  const heroReady = introExiting || introDone;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFinePointer, setIsFinePointer] = useState(false);

  // Detect fine pointer for subtle zoom
  useEffect(() => {
    const isFine = window.matchMedia("(pointer: fine) and (hover: hover)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setIsFinePointer(isFine && !reduced);
  }, []);

  // Crossfade slideshow every 6s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Subtle scroll fade (stops at 0.5 opacity for smooth transition)
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0.5]);
  const heroY = useTransform(scrollY, [0, 400], [0, -25]);

  return (
    <section className="relative h-[100svh] min-h-[580px] sm:min-h-[640px] flex items-center justify-center overflow-hidden bg-espresso-950 text-cream-50 pt-16 sm:pt-20 pb-8 sm:pb-12">
      {/* Background Slideshow with Soft Warm Appetizing Overlays */}
      <div className="absolute inset-0 z-0">
        {heroSlides.map((slide, idx) => (
          <div
            key={slide.url}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <motion.div
              animate={
                isFinePointer && idx === currentSlide
                  ? { scale: [1.02, 1.05, 1.02] }
                  : { scale: 1.02 }
              }
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-full h-full will-change-transform"
            >
              <Image
                src={slide.url}
                alt={slide.alt}
                fill
                priority={idx === 0}
                sizes="100vw"
                className="object-cover object-center brightness-110 saturate-110 filter"
              />
            </motion.div>
          </div>
        ))}

        {/* Soft, warm, appetizing gradient overlays (25-35% opacity, bright and appetizing) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2B1810]/70 via-[#2B1810]/25 to-[#2B1810]/40 pointer-events-none" />
        <div className="absolute inset-0 bg-[#2B1810]/15 pointer-events-none" />
        <div className="absolute inset-0 bg-amber-900/10 mix-blend-multiply pointer-events-none" />
      </div>

      {/* Main Hero Content: Clean, Uncluttered, Minimal */}
      <motion.div
        style={{ opacity: heroOpacity, y: heroY }}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center w-full"
      >
        {/* Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={heroReady ? { opacity: 1, y: 0 } : { opacity: 0, y: -12 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/20 border border-gold-400/40 text-gold-300 text-xs uppercase tracking-[0.22em] font-semibold backdrop-blur-md mb-4 sm:mb-6 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-gold-400" />
          <span>Chandigarh&apos;s Premier Culinary &amp; Pastry Academy</span>
        </motion.div>

        {/* Large Elegant Serif Headline with Masked Word Reveal */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-cream-50 max-w-4xl leading-[1.08] drop-shadow-md">
          <SplitText
            text="Discover the Art of Baking"
            highlightWord="Art"
            delay={0.15}
            trigger={heroReady}
          />
        </h1>

        {/* ONE Supporting Sentence */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={heroReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-cream-100 max-w-2xl font-light leading-relaxed drop-shadow"
        >
          {siteConfig.subTagline}
        </motion.p>

        {/* TWO Buttons Only */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={heroReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <Magnetic strength={8}>
            <Link
              href="/courses"
              className="btn-gold-shine w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 text-espresso-950 font-bold text-xs sm:text-sm uppercase tracking-widest shadow-gold-glow hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <span>Explore All Programs</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Magnetic>

          <Magnetic strength={8}>
            <button
              onClick={() => openEnquiryModal()}
              className="btn-glass-outline w-full sm:w-auto px-8 py-4 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-sm text-cream-100 border-gold-400/40 hover:bg-gold-500/20"
            >
              <Calendar className="w-4 h-4 text-gold-400" />
              <span>Book Free Studio Counselling</span>
            </button>
          </Magnetic>
        </motion.div>
      </motion.div>
    </section>
  );
}
