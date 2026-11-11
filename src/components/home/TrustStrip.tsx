"use client";

import React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";
import { BookOpen, Sparkles, ChefHat, Layers } from "lucide-react";
import Counter from "@/components/animations/Counter";

const statIcons = [BookOpen, Sparkles, Layers, ChefHat];

export default function TrustStrip() {
  return (
    <section
      id="trust-strip"
      className="bg-espresso-900 border-t border-gold-500/25 relative py-14 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 text-cream-100 overflow-hidden"
    >
      {/* Decorative ambient subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-32 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
          {siteConfig.stats.map((stat, idx) => {
            const Icon = statIcons[idx % statIcons.length];
            return (
              <div key={stat.label} className="relative flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15, margin: "0px 0px -10% 0px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex flex-col items-center text-center p-3 sm:p-4 w-full"
                >
                  <div className="w-12 h-12 rounded-2xl bg-gold-500/10 border border-gold-400/30 flex items-center justify-center text-gold-400 mb-3 shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cream-50 tracking-tight flex items-baseline justify-center">
                    <Counter
                      value={stat.value}
                      suffix={stat.suffix}
                      duration={1.8}
                    />
                  </div>

                  <div className="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mt-2.5">
                    {stat.label}
                  </div>

                  <p className="text-cream-400 text-xs mt-1 max-w-[200px] leading-relaxed font-light">
                    {stat.description}
                  </p>
                </motion.div>

                {/* Vertical gold divider drawing between items on desktop */}
                {idx < siteConfig.stats.length - 1 && (
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true, amount: 0.15, margin: "0px 0px -10% 0px" }}
                    transition={{ duration: 0.8, delay: 0.2 + idx * 0.1 }}
                    className="hidden lg:block absolute right-0 top-6 bottom-6 w-[1px] bg-gradient-to-b from-transparent via-gold-500/30 to-transparent origin-top"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
