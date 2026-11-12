"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Compass, Target, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { siteConfig } from "@/data/site";
import SectionHeading from "@/components/animations/SectionHeading";
import ParallaxImage from "@/components/animations/ParallaxImage";

export default function AboutPreview() {
  const [activeTab, setActiveTab] = useState<"mission" | "vision">("mission");

  return (
    <section className="py-20 md:py-28 lg:py-32 bg-[#F6E7D0] text-[#3B2314] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Overlapping Image Composition with Parallax (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            {/* Primary Large Image with Clip-Path Reveal & Slow Parallax */}
            <div className="relative w-full h-[400px] sm:h-[480px] rounded-2xl overflow-hidden shadow-luxury border-2 border-[#E9C9A0]/60">
              <ParallaxImage
                src="https://igbca.in/wp-content/uploads/2024/07/IMG-20230216-WA0005.jpg"
                alt="IGBCA Baking Studio Practicals"
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Overlapping Secondary Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="absolute -bottom-8 -right-4 sm:-right-8 w-44 sm:w-56 h-48 sm:h-60 rounded-2xl overflow-hidden border-4 border-[#F6E7D0] shadow-2xl z-10 hidden sm:block group"
            >
              <Image
                src="https://igbca.in/wp-content/uploads/2024/05/12.jpg"
                alt="Founder Ranjana Sukhija"
                fill
                sizes="240px"
                className="object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                style={{ objectPosition: "50% 18%" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-2.5 left-2.5 right-2.5 text-cream-100 text-[11px] font-medium leading-tight">
                Ranjana Sukhija
                <span className="block text-[9px] text-gold-400">Founder & Master Patissier</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Editorial Narrative & Tabs (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6"
          >
            <SectionHeading
              label="About The Academy"
              title={
                <>
                  Where <span className="text-gold-gradient">Artisanal Heritage</span> Meets Modern Culinary Science
                </>
              }
              align="left"
              theme="cream"
              className="mb-4"
            />

            <p className="text-espresso-800/90 text-base sm:text-lg leading-relaxed font-light">
              {siteConfig.about.summary}
            </p>

            {/* Mission / Vision Tabs */}
            <div className="bg-white/95 rounded-2xl p-5 border border-[#E9C9A0]/60 shadow-sm space-y-4">
              <div className="flex items-center gap-2 border-b border-[#E9C9A0]/40 pb-2">
                <button
                  onClick={() => setActiveTab("mission")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    activeTab === "mission"
                      ? "bg-[#3B2314] text-[#C9A24A] shadow-sm"
                      : "text-[#3B2314] hover:text-[#A8791F] hover:bg-[#F6E7D0]/50"
                  }`}
                >
                  <Target className="w-4 h-4" />
                  Our Mission
                </button>
                <button
                  onClick={() => setActiveTab("vision")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    activeTab === "vision"
                      ? "bg-[#3B2314] text-[#C9A24A] shadow-sm"
                      : "text-[#3B2314] hover:text-[#A8791F] hover:bg-[#F6E7D0]/50"
                  }`}
                >
                  <Compass className="w-4 h-4" />
                  Our Vision
                </button>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="text-sm text-espresso-800 leading-relaxed min-h-[70px]"
                >
                  {activeTab === "mission"
                    ? siteConfig.about.mission
                    : siteConfig.about.vision}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Inclusions checklist */}
            <div className="pt-2">
              <h4 className="text-xs uppercase tracking-wider text-gold-700 font-semibold mb-3">
                All Long Courses Include:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {siteConfig.inclusions.map((inc) => (
                  <div
                    key={inc}
                    className="flex items-center gap-2 text-xs text-espresso-900 bg-white/60 p-2.5 rounded-xl border border-cream-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0" />
                    <span className="font-medium">{inc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2 flex items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-espresso-950 hover:text-gold-600 transition-colors group"
              >
                <span>Discover Our Instructors & Story</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-gold-500" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
