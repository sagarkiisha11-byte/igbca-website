"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, HeartHandshake, ChefHat, Store } from "lucide-react";
import { siteConfig } from "@/data/site";
import { useEnquiry } from "@/context/EnquiryContext";
import SectionHeading from "@/components/animations/SectionHeading";

export default function BakeYourWaySection() {
  const { openEnquiryModal } = useEnquiry();

  return (
    <section className="py-20 md:py-28 lg:py-32 bg-espresso-950 text-cream-100 relative overflow-hidden">
      {/* Decorative background lines */}
      <div className="absolute inset-0 bg-[radial-gradient(#C8963E_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text & Ambitions (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <SectionHeading
              label="Tailored To Your Ambition"
              title={
                <>
                  Bake Your Way With <span className="text-gold-gradient">IGBCA</span>
                </>
              }
              description={siteConfig.about.bakeYourWay}
              align="left"
              theme="dark"
              className="mb-6"
            />

            {/* 3 Pillars / Aspirations */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15, margin: "0px 0px -10% 0px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-espresso-900/80 border border-gold-500/20 p-5 rounded-2xl hover:border-gold-400/50 transition-colors"
              >
                <Store className="w-5 h-5 text-gold-400 mb-2" />
                <h4 className="font-serif text-sm font-semibold text-cream-100">
                  Launch Your Bakery
                </h4>
                <p className="text-[11px] text-cream-400 mt-1 leading-normal">
                  Master commercial costing, equipment layout, and high-volume production.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15, margin: "0px 0px -10% 0px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-espresso-900/80 border border-gold-500/20 p-5 rounded-2xl hover:border-gold-400/50 transition-colors"
              >
                <ChefHat className="w-5 h-5 text-gold-400 mb-2" />
                <h4 className="font-serif text-sm font-semibold text-cream-100">
                  Hotel & Fine Dining
                </h4>
                <p className="text-[11px] text-cream-400 mt-1 leading-normal">
                  Develop fine-dining plated desserts, entremets, and showpiece displays.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15, margin: "0px 0px -10% 0px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-espresso-900/80 border border-gold-500/20 p-5 rounded-2xl hover:border-gold-400/50 transition-colors"
              >
                <HeartHandshake className="w-5 h-5 text-gold-400 mb-2" />
                <h4 className="font-serif text-sm font-semibold text-cream-100">
                  Pure Baking Joy
                </h4>
                <p className="text-[11px] text-cream-400 mt-1 leading-normal">
                  Perfect artisanal sourdoughs, croissants, and celebration cakes for passion.
                </p>
              </motion.div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => openEnquiryModal()}
                className="btn-gold-shine px-6 sm:px-8 py-3.5 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 text-espresso-950 font-bold text-xs uppercase tracking-widest shadow-gold-glow"
              >
                Start Your Journey Today
              </button>
              <Link
                href="/gallery"
                className="btn-glass-outline inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs uppercase tracking-widest font-semibold"
              >
                <span>View Student Work</span>
                <ArrowRight className="w-4 h-4 text-gold-400" />
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Collage with Subtle Hover Lift (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="grid grid-cols-2 gap-3.5">
              <div className="space-y-3.5">
                {/* Image 1: Cookies */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5 }}
                  className="relative h-44 sm:h-52 rounded-2xl overflow-hidden border border-gold-500/30 shadow-luxury hover:-translate-y-1 hover:border-gold-400/60 transition-all duration-300 group"
                >
                  <Image
                    src="https://igbca.in/wp-content/uploads/2024/07/cookies.jpg"
                    alt="Artisan Cookies"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/60 via-transparent to-transparent" />
                </motion.div>

                {/* Image 2: Artisan Breads */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="relative h-56 sm:h-64 rounded-2xl overflow-hidden border border-gold-500/30 shadow-luxury hover:-translate-y-1 hover:border-gold-400/60 transition-all duration-300 group"
                >
                  <Image
                    src="https://igbca.in/wp-content/uploads/2024/07/Artisan-Plain-Breads.jpg"
                    alt="Artisan Sourdough and Breads"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/60 via-transparent to-transparent" />
                </motion.div>
              </div>

              <div className="space-y-3.5 pt-6">
                {/* Image 3: Croissants */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="relative h-56 sm:h-64 rounded-2xl overflow-hidden border border-gold-500/30 shadow-luxury hover:-translate-y-1 hover:border-gold-400/60 transition-all duration-300 group"
                >
                  <Image
                    src="https://igbca.in/wp-content/uploads/2024/07/Puffs-Viennoseries.jpg"
                    alt="Laminated French Viennoiseries"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/60 via-transparent to-transparent" />
                </motion.div>

                {/* Image 4: Cheesecake */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative h-44 sm:h-52 rounded-2xl overflow-hidden border border-gold-500/30 shadow-luxury hover:-translate-y-1 hover:border-gold-400/60 transition-all duration-300 group"
                >
                  <Image
                    src="https://igbca.in/wp-content/uploads/2024/07/cheese-cake.jpg"
                    alt="Cheesecake perfection"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/60 via-transparent to-transparent" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
