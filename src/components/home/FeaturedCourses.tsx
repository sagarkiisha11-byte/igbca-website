"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Clock,
  BookOpen,
  ArrowRight,
  Check,
  Send,
} from "lucide-react";
import { coursesList } from "@/data/courses";
import { useEnquiry } from "@/context/EnquiryContext";
import SectionHeading from "@/components/animations/SectionHeading";
import TiltCard from "@/components/animations/TiltCard";

export default function FeaturedCourses() {
  const { openEnquiryModal } = useEnquiry();

  // Pick the top 3 core structured diploma & certificate programs
  const featured = coursesList.slice(0, 3);

  return (
    <section
      id="courses"
      className="py-20 md:py-28 lg:py-32 bg-espresso-950 text-cream-100 relative overflow-hidden"
    >
      {/* Decorative background glow */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Unified Section Heading with Line Draw & Ambient Glow */}
        <SectionHeading
          label="Structured Career Pathways"
          title={
            <>
              Our Signature{" "}
              <span className="text-gold-gradient">Diploma & Certificate</span>{" "}
              Programs
            </>
          }
          description="From comprehensive professional diplomas to specialized cake craftsmanship, each curriculum is 100% hands-on with individual stations and commercial ingredients included."
          theme="dark"
        />

        {/* 3 Featured Course Cards with 3D Tilt & Glare */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {featured.map((course, idx) => {
            const isMostPopular = course.slug === "3-months-professional";

            return (
              <motion.div
                key={course.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15, margin: "0px 0px -10% 0px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="h-full flex flex-col"
              >
                <TiltCard
                  maxTilt={6}
                  className={`h-full flex flex-col rounded-2xl overflow-hidden border ${
                    isMostPopular
                      ? "bg-espresso-900/95 border-gold-400/60 shadow-gold-glow lg:scale-[1.02] z-10"
                      : "bg-espresso-900/60 border-gold-500/20 hover:border-gold-500/40 shadow-luxury"
                  }`}
                >
                  <div data-cursor="view" className="flex flex-col h-full">
                    {/* Image & Badges */}
                    <div className="relative h-56 sm:h-60 w-full overflow-hidden shrink-0 group">
                      <Image
                        src={course.heroImage}
                        alt={course.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-espresso-900 via-espresso-900/30 to-transparent" />

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                        <span className="px-3 py-1 rounded-full bg-espresso-950/90 backdrop-blur-md border border-gold-400/40 text-[11px] font-semibold text-gold-300 uppercase tracking-wider">
                          {course.badge}
                        </span>
                        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] text-cream-200">
                          <Clock className="w-3.5 h-3.5 text-gold-400" />
                          {course.duration}
                        </span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6 sm:p-7 flex flex-col flex-1">
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-cream-50 hover:text-gold-300 transition-colors">
                        {course.title}
                      </h3>

                      <p className="text-xs uppercase tracking-wider text-gold-400 font-medium mt-1">
                        {course.subtitle}
                      </p>

                      <p className="mt-3 text-cream-300 text-xs sm:text-sm leading-relaxed line-clamp-3 min-h-[3.6rem]">
                        {course.description}
                      </p>

                      {/* Module Count & Inclusions Chip */}
                      <div className="my-5 pt-4 border-t border-gold-500/20 space-y-3">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-cream-300 flex items-center gap-1.5 font-medium">
                            <BookOpen className="w-4 h-4 text-gold-400" />
                            Curriculum
                          </span>
                          <span className="font-bold text-gold-400">
                            {course.modulesCount} Core Modules
                          </span>
                        </div>

                        {/* Preview of key modules (first 3) */}
                        <div className="flex flex-wrap gap-1.5">
                          {course.modules.slice(0, 3).map((m) => (
                            <span
                              key={m.id}
                              className="px-2.5 py-1 rounded-md bg-espresso-950 border border-gold-500/20 text-[11px] text-cream-300"
                            >
                              {m.name}
                            </span>
                          ))}
                          {course.modulesCount > 3 && (
                            <span className="px-2 py-1 text-[11px] text-gold-400 font-medium">
                              +{course.modulesCount - 3} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Inclusions summary */}
                      <div className="space-y-1.5 pb-6 text-xs text-cream-300">
                        <div className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                          <span>Chef&apos;s Jacket & Study Material</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                          <span>All Ingredients & Commercial Ovens</span>
                        </div>
                      </div>

                      {/* CTAs */}
                      <div className="grid grid-cols-2 gap-3 pt-2 mt-auto">
                        <Link
                          href={`/courses/${course.slug}`}
                          className="btn-glass-outline px-4 py-2.5 rounded-xl text-cream-100 hover:text-white text-xs font-semibold uppercase tracking-wider text-center transition-all flex items-center justify-center gap-1"
                        >
                          <span>Syllabus</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>

                        <button
                          onClick={() => openEnquiryModal(course.title)}
                          className="btn-gold-shine px-4 py-2.5 rounded-xl bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 text-espresso-950 text-xs font-bold uppercase tracking-wider text-center shadow-gold-glow transition-all flex items-center justify-center gap-1.5"
                        >
                          <Send className="w-3.5 h-3.5" />
                          <span>Apply</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>

        {/* View All Courses Banner */}
        <div className="mt-14 text-center">
          <Link
            href="/courses"
            className="btn-glass-outline inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-all"
          >
            <span>Compare All 4 Programs & Pricing</span>
            <ArrowRight className="w-4 h-4 text-gold-400" />
          </Link>
        </div>
      </div>
    </section>
  );
}
