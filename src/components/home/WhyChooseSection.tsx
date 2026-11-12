"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  UtensilsCrossed,
  Award,
  Sparkles,
  Shirt,
  HeartHandshake,
  BadgePercent,
} from "lucide-react";
import { siteConfig } from "@/data/site";
import SectionHeading from "@/components/animations/SectionHeading";
import TiltCard from "@/components/animations/TiltCard";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  UtensilsCrossed,
  Award,
  Sparkles,
  Shirt,
  HeartHandshake,
  BadgePercent,
};

export default function WhyChooseSection() {
  return (
    <section className="py-20 md:py-28 lg:py-32 bg-[#F6E7D0] text-[#3B2314]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionHeading
          label="The IGBCA Distinction"
          title={
            <>
              Why Choose <span className="text-gold-gradient">IGBCA</span>
            </>
          }
          description="We don't just teach recipes from a whiteboard. We provide an authentic commercial pastry laboratory where every single session is executed with hands-on bench discipline."
          theme="cream"
        />

        {/* 6 Cards Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {siteConfig.features.map((feature, idx) => {
            const Icon = iconMap[feature.icon] || Sparkles;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15, margin: "0px 0px -10% 0px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="h-full"
              >
                <TiltCard
                  maxTilt={5}
                  className="bg-white rounded-2xl p-7 border border-[#E9C9A0]/60 shadow-sm hover:shadow-luxury hover:border-gold-400/60 transition-all duration-300 flex flex-col h-full group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-400/30 flex items-center justify-center text-[#A8791F] mb-5 group-hover:bg-gold-500 group-hover:text-[#3B2314] transition-colors shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#3B2314] mb-2.5 group-hover:text-[#A8791F] transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5A3A25] leading-relaxed font-light">
                    {feature.description}
                  </p>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
