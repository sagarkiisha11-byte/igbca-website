"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Award, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";
import { siteConfig } from "@/data/site";
import SectionHeading from "@/components/animations/SectionHeading";

export default function InstructorsSection() {
  const [expandedBios, setExpandedBios] = useState<Record<string, boolean>>({});

  const toggleBio = (id: string) => {
    setExpandedBios((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="py-20 md:py-28 lg:py-32 bg-espresso-950 text-cream-100 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <SectionHeading
          label="Master Patissiers"
          title={
            <>
              Meet Your <span className="text-gold-gradient">Instructors</span>
            </>
          }
          description="Learn directly from seasoned mentors who bring international pedagogies, European baking institute disciplines, and decades of practical bench artistry to Chandigarh."
          theme="dark"
        />

        {/* 2 Vertical Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 items-stretch">
          {siteConfig.instructors.map((instructor, idx) => {
            const isExpanded = !!expandedBios[instructor.id];

            return (
              <motion.div
                key={instructor.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15, margin: "0px 0px -10% 0px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-espresso-900/80 border border-gold-500/30 rounded-2xl overflow-hidden shadow-luxury flex flex-col h-full group hover:-translate-y-1 hover:border-gold-400/60 transition-all duration-300 max-w-[520px] mx-auto w-full"
              >
                {/* Image Wrapper - Fixed portrait-friendly aspect ratio */}
                <div className="relative w-full aspect-[4/5] overflow-hidden bg-espresso-950">
                  <Image
                    src={instructor.photo}
                    alt={instructor.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 45vw, 520px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                    priority={idx === 0}
                    quality={85}
                    style={{ objectPosition: instructor.focalPoint || "50% 20%" }}
                  />
                  {/* Soft bottom gradient overlay blending into card */}
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso-900 via-espresso-900/40 to-transparent" />

                  {/* Role pill overlaid over the bottom of photo / gradient */}
                  <div className="absolute bottom-4 left-6 sm:left-8 z-10">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-espresso-950/90 backdrop-blur-md border border-gold-400/40 text-[11px] uppercase tracking-wider text-gold-300 font-semibold shadow-md">
                      <Award className="w-3.5 h-3.5 text-gold-400" />
                      <span>{instructor.role}</span>
                    </div>
                  </div>
                </div>

                {/* Card Content Area - flex-1 with mt-auto on checklist for equal height */}
                <div className="flex flex-col flex-1 p-6 lg:p-8">
                  <h3 className="font-serif text-2xl lg:text-3xl font-bold text-cream-50 group-hover:text-gold-300 transition-colors">
                    {instructor.name}
                  </h3>

                  {/* Bio with smooth height animation via AnimatePresence */}
                  <div className="mt-4">
                    <AnimatePresence initial={false} mode="wait">
                      <motion.p
                        key={isExpanded ? "expanded" : "collapsed"}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className={`text-sm lg:text-base leading-relaxed text-cream-300 font-light ${
                          isExpanded ? "" : "line-clamp-6"
                        }`}
                      >
                        {instructor.bio}
                      </motion.p>
                    </AnimatePresence>

                    {instructor.bio.length > 280 && (
                      <button
                        onClick={() => toggleBio(instructor.id)}
                        className="mt-2 text-xs text-gold-400 hover:text-gold-300 font-semibold inline-flex items-center gap-1 transition-colors"
                      >
                        <span>{isExpanded ? "Show Less" : "Read Full Story"}</span>
                        {isExpanded ? (
                          <ChevronUp className="w-3.5 h-3.5" />
                        ) : (
                          <ChevronDown className="w-3.5 h-3.5" />
                        )}
                      </button>
                    )}
                  </div>

                  {/* Highlights / Credentials - with animated tick-in */}
                  {instructor.credentials && (
                    <div className="mt-auto pt-6 border-t border-gold-500/20 space-y-2.5">
                      {instructor.credentials.map((cred, cIdx) => (
                        <motion.div
                          key={cred}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + cIdx * 0.1, duration: 0.4 }}
                          className="flex items-center gap-2.5 text-xs sm:text-sm text-gold-300"
                        >
                          <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: [0, 1.25, 1] }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.35 + cIdx * 0.1, duration: 0.35 }}
                          >
                            <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                          </motion.div>
                          <span>{cred}</span>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
