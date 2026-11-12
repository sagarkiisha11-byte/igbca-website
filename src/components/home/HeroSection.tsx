"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  MapPin,
  Calendar,
  Award,
} from "lucide-react";
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

  // Detect fine pointer for particles & magnetic
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

  // Subtle scroll fade (never fading below 0.4 opacity to eliminate empty dark gaps)
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 450], [1, 0.4]);
  const heroY = useTransform(scrollY, [0, 450], [0, -35]);

  return (
    <section className="relative h-[100svh] min-h-[640px] flex items-center justify-center overflow-hidden bg-espresso-950 text-cream-50 pt-16 sm:pt-20 pb-4">
      {/* Background Slideshow with Slow Ken Burns Zoom & Appetizing Saturation */}
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
                  ? { scale: [1.02, 1.06, 1.02] }
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

        {/* Cinematic gradient overlays: bright enough to see food, dark enough for AA text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/85 via-espresso-900/45 to-espresso-950/80 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso-950/75 via-transparent to-espresso-950/75 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,rgba(26,15,10,0.55)_100%)] pointer-events-none" />
        
        {/* Subtle decorative grain vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(#C8963E_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />
      </div>

      {/* Main Hero Content (Gentle scroll fade that stops at 0.4) */}
      <motion.div
        style={{ opacity: heroOpacity, y: heroY }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center w-full"
      >
        {/* Luxury Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={heroReady ? { opacity: 1, y: 0 } : { opacity: 0, y: -15 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/20 border border-gold-400/40 text-gold-300 text-xs uppercase tracking-[0.25em] font-semibold backdrop-blur-md mb-4 sm:mb-6 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-gold-400 animate-pulse" />
          <span>Chandigarh&apos;s Premier Culinary & Pastry Academy</span>
        </motion.div>

        {/* Large Elegant Serif Headline with Masked Word Reveal */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-cream-50 max-w-5xl leading-[1.08] drop-shadow-md">
          <SplitText
            text="Discover the Art of Baking"
            highlightWord="Art"
            delay={0.15}
            trigger={heroReady}
          />
        </h1>

        {/* Sub-tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={heroReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-cream-200 max-w-2xl font-light leading-relaxed drop-shadow"
        >
          {siteConfig.subTagline}
        </motion.p>

        {/* CTAs with Magnetic Effect */}
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
              className="btn-glass-outline w-full sm:w-auto px-8 py-4 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
            >
              <Calendar className="w-4 h-4 text-gold-400" />
              <span>Book Free Studio Counselling</span>
            </button>
          </Magnetic>
        </motion.div>

        {/* Stat Chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={heroReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 sm:mt-12 grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 w-full max-w-4xl"
        >
          <div className="glass-card-dark rounded-2xl p-3.5 sm:p-4 text-left border border-gold-500/30 flex items-center gap-3 shadow-lg">
            <div className="w-10 h-10 rounded-xl bg-gold-500/20 border border-gold-400/40 flex items-center justify-center text-gold-400 shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-semibold text-cream-100">
                100% Practical Stations
              </div>
              <div className="text-[11px] text-cream-300">
                Individual bench & commercial deck ovens
              </div>
            </div>
          </div>

          <div className="glass-card-dark rounded-2xl p-3.5 sm:p-4 text-left border border-gold-500/30 flex items-center gap-3 shadow-lg">
            <div className="w-10 h-10 rounded-xl bg-gold-500/20 border border-gold-400/40 flex items-center justify-center text-gold-400 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-semibold text-cream-100">
                Open to Age 10+
              </div>
              <div className="text-[11px] text-cream-300">
                Beginners & enthusiasts welcome
              </div>
            </div>
          </div>

          <div className="col-span-2 md:col-span-1 glass-card-dark rounded-2xl p-3.5 sm:p-4 text-left border border-gold-500/30 flex items-center gap-3 shadow-lg">
            <div className="w-10 h-10 rounded-xl bg-gold-500/20 border border-gold-400/40 flex items-center justify-center text-gold-400 shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-semibold text-cream-100">
                Sector 36D, Chandigarh
              </div>
              <div className="text-[11px] text-cream-300">
                {siteConfig.business.hours.daysShort} • {siteConfig.business.hours.time}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Animated Scroll Indicator with Mouse Line */}
        <motion.a
          href="#trust-strip"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-6 mb-1 text-cream-300 hover:text-gold-300 transition-colors flex flex-col items-center gap-1.5 text-[10px] uppercase tracking-[0.25em]"
        >
          <span>Scroll To Explore</span>
          <div className="w-4 h-7 rounded-full border border-gold-400/50 flex justify-center pt-1.5">
            <motion.div
              animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-1.5 rounded-full bg-gold-400"
            />
          </div>
        </motion.a>
      </motion.div>
    </section>
  );
}
