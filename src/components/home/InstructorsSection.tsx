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
    <section className="py-20 md:py-28 lg:py-32 bg-[#FFF8EF] text-[#3B2314] relative overflow-hidden">
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
          theme="cream"
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
                className="bg-white border border-[#E9C9A0]/60 rounded-2xl overflow-hidden shadow-luxury flex flex-col h-full group hover:-translate-y-1 hover:border-gold-400/60 transition-all duration-300 max-w-[520px] mx-auto w-full"
              >
                {/* Image Wrapper - Fixed portrait-friendly aspect ratio */}
                <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#F6E7D0]">
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
                  {/* Soft bottom gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3B2314]/70 via-[#3B2314]/20 to-transparent" />

                  {/* Role pill overlaid over the bottom of photo / gradient */}
                  <div className="absolute bottom-4 left-6 sm:left-8 z-10">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#3B2314]/90 backdrop-blur-md border border-gold-400/40 text-[11px] uppercase tracking-wider text-gold-300 font-semibold shadow-md">
                      <Award className="w-3.5 h-3.5 text-gold-400" />
                      <span>{instructor.role}</span>
                    </div>
                  </div>
                </div>

                {/* Card Content Area */}
                <div className="flex flex-col flex-1 p-6 lg:p-8">
                  <h3 className="font-serif text-2xl lg:text-3xl font-bold text-[#3B2314] group-hover:text-[#A8791F] transition-colors">
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
                        className={`text-sm lg:text-base leading-relaxed text-[#5A3A25] font-light ${
                          isExpanded ? "" : "line-clamp-6"
                        }`}
                      >
                        {instructor.bio}
                      </motion.p>
                    </AnimatePresence>

                    {instructor.bio.length > 280 && (
                      <button
                        onClick={() => toggleBio(instructor.id)}
                        className="mt-2 text-xs text-[#A8791F] hover:text-[#3B2314] font-semibold inline-flex items-center gap-1 transition-colors"
                      >
                        {isExpanded ? (
                          <>
                            <span>Show Less</span>
                            <ChevronUp className="w-3.5 h-3.5" />
                          </>
                        ) : (
                          <>
                            <span>Read Full Bio</span>
                            <ChevronDown className="w-3.5 h-3.5" />
                          </>
                        )}
                      </button>
                    )}
                  </div>

                  {/* Credentials / Key Highlights Checklist */}
                  {instructor.credentials && instructor.credentials.length > 0 && (
                    <div className="mt-6 pt-5 border-t border-[#E9C9A0]/50 space-y-2.5">
                      <div className="text-xs uppercase tracking-wider text-[#A8791F] font-semibold mb-3">
                        Core Expertise &amp; Credentials
                      </div>
                      {instructor.credentials.map((cred) => (
                        <div
                          key={cred}
                          className="flex items-start gap-2.5 text-xs text-[#3B2314]"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#A8791F] shrink-0 mt-0.5" />
                          <span className="font-medium">{cred}</span>
                        </div>
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
