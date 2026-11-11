"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  BookOpen,
  ArrowRight,
  Sparkles,
  Check,
  Send,
  CheckCircle2,
  Calendar,
} from "lucide-react";
import { coursesList, shortTermWorkshops } from "@/data/courses";
import { siteConfig } from "@/data/site";
import Breadcrumb from "@/components/Breadcrumb";
import { useEnquiry } from "@/context/EnquiryContext";

export default function CoursesPage() {
  const { openEnquiryModal } = useEnquiry();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Bakery", "Patisserie", "Confectionery"];

  const filteredWorkshops =
    selectedCategory === "All"
      ? shortTermWorkshops
      : shortTermWorkshops.filter(
          (w) =>
            w.category === selectedCategory ||
            (selectedCategory === "Bakery" && w.category === "Culinary & Beverage")
        );

  return (
    <div className="bg-cream-100 text-espresso-950 min-h-screen">
      {/* Header */}
      <section className="bg-espresso-950 text-cream-100 py-16 sm:py-20 relative overflow-hidden border-b border-gold-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb items={[{ name: "All Programs", url: "/courses" }]} />

          <div className="max-w-3xl mt-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Professional Curriculum</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-cream-50 tracking-tight leading-tight">
              Baking & Patisserie Programs
            </h1>
            <p className="mt-4 text-cream-300 text-base sm:text-lg font-light leading-relaxed">
              Explore our structured diplomas, fast-track certificates, and
              hands-on masterclasses conducted in our Sector 36D Chandigarh studio.
            </p>
          </div>
        </div>
      </section>

      {/* 4 Main Programs Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-gold-600 font-semibold">
            Comprehensive Pathways
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-espresso-950 mt-1">
            Choose Your Culinary Journey
          </h2>
          <p className="mt-3 text-espresso-800 text-sm font-light">
            Each program provides 100% individual workstation training with
            commercial ingredients and chef uniforms included.
          </p>
        </div>

        <div className="space-y-12">
          {coursesList.map((course, idx) => (
            <div
              key={course.slug}
              className={`bg-white rounded-3xl overflow-hidden border border-gold-500/25 shadow-luxury flex flex-col lg:flex-row transition-all hover:shadow-2xl ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image Col (5 cols) */}
              <div className="lg:w-5/12 relative h-72 sm:h-96 lg:h-auto min-h-[300px]">
                <Image
                  src={course.heroImage}
                  alt={course.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/70 via-transparent to-transparent lg:hidden" />
                <div className="absolute top-4 left-4 bg-espresso-950/90 text-gold-300 border border-gold-400/40 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
                  {course.badge}
                </div>
              </div>

              {/* Text Col (7 cols) */}
              <div className="lg:w-7/12 p-6 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-gold-700 font-medium mb-2">
                    <span className="flex items-center gap-1.5 bg-cream-200/80 px-3 py-1 rounded-full">
                      <Clock className="w-3.5 h-3.5 text-gold-600" />
                      {course.duration}
                    </span>
                    <span className="flex items-center gap-1.5 bg-cream-200/80 px-3 py-1 rounded-full">
                      <BookOpen className="w-3.5 h-3.5 text-gold-600" />
                      {course.modulesCount} Modules
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-espresso-950">
                    {course.title}
                  </h3>

                  <p className="text-xs uppercase tracking-wider text-gold-600 font-semibold mt-1">
                    {course.subtitle}
                  </p>

                  <p className="mt-4 text-espresso-800 text-sm leading-relaxed font-light">
                    {course.overview}
                  </p>

                  {/* Modules preview */}
                  <div className="mt-6 pt-4 border-t border-cream-200">
                    <span className="text-xs font-semibold text-espresso-900 uppercase tracking-wider block mb-2">
                      Key Curriculum Highlights:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {course.modules.slice(0, 5).map((m) => (
                        <span
                          key={m.id}
                          className="px-2.5 py-1 rounded-lg bg-cream-200/60 text-espresso-900 text-xs font-medium"
                        >
                          {m.name}
                        </span>
                      ))}
                      {course.modulesCount > 5 && (
                        <span className="px-2 py-1 text-xs text-gold-700 font-semibold">
                          +{course.modulesCount - 5} more modules
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="mt-8 pt-6 border-t border-cream-200 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="block text-[11px] text-espresso-600 font-medium uppercase tracking-wider">
                      Schedule & Fee
                    </span>
                    <span className="font-serif text-sm sm:text-base font-bold text-gold-700">
                      {course.feeInfo}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Link
                      href={`/courses/${course.slug}`}
                      className="px-5 py-2.5 rounded-xl border border-gold-500/40 text-espresso-950 hover:text-gold-700 text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-1"
                    >
                      <span>Full Syllabus</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <button
                      onClick={() => openEnquiryModal(course.title)}
                      className="btn-gold-shine px-5 py-2.5 rounded-xl bg-espresso-950 hover:bg-gold-500 text-gold-400 hover:text-espresso-950 text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-sm"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Apply</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Program Comparison Table (Desktop) / Cards (Mobile) */}
      <section className="py-20 bg-cream-50 border-y border-gold-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-gold-600 font-semibold">
              Side-by-Side Evaluation
            </span>
            <h2 className="font-serif text-3xl font-bold text-espresso-950 mt-1">
              Program Comparison
            </h2>
            <p className="mt-2 text-espresso-800 text-sm font-light">
              Compare duration, curriculum scope, and credentials at a glance.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gold-500/25 shadow-luxury overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-espresso-950 text-cream-100 uppercase tracking-wider text-[11px] font-semibold border-b border-gold-500/30">
                <tr>
                  <th className="p-4 sm:p-5">Program</th>
                  <th className="p-4 sm:p-5">Duration</th>
                  <th className="p-4 sm:p-5">Modules</th>
                  <th className="p-4 sm:p-5">Credential Awarded</th>
                  <th className="p-4 sm:p-5">Workstation Stations</th>
                  <th className="p-4 sm:p-5 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-cream-200 text-espresso-900 font-light">
                {coursesList.map((c) => (
                  <tr key={c.slug} className="hover:bg-cream-100/60 transition-colors">
                    <td className="p-4 sm:p-5 font-serif font-bold text-espresso-950">
                      <Link href={`/courses/${c.slug}`} className="hover:text-gold-700">
                        {c.title}
                      </Link>
                      <span className="block text-[11px] font-sans font-normal text-gold-600 mt-0.5">
                        {c.badge}
                      </span>
                    </td>
                    <td className="p-4 sm:p-5 font-medium">{c.duration}</td>
                    <td className="p-4 sm:p-5 font-semibold text-gold-700">
                      {c.modulesCount} Modules
                    </td>
                    <td className="p-4 sm:p-5">{c.certification}</td>
                    <td className="p-4 sm:p-5">100% Individual Bench</td>
                    <td className="p-4 sm:p-5 text-right">
                      <Link
                        href={`/courses/${c.slug}`}
                        className="inline-flex items-center gap-1 text-gold-700 hover:text-gold-900 font-semibold text-xs uppercase tracking-wider underline underline-offset-4"
                      >
                        Details
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Short Term Workshops Detailed Filterable Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-xs uppercase tracking-widest text-gold-600 font-semibold">
              Standalone Masterclasses
            </span>
            <h2 className="font-serif text-3xl font-bold text-espresso-950 mt-1">
              Short Term Workshops & Pricing
            </h2>
            <p className="mt-2 text-espresso-800 text-sm font-light">
              Clear, transparent pricing and duration for individual discipline masterclasses.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? "bg-espresso-950 text-gold-300 shadow-sm"
                    : "bg-white text-espresso-800 border border-gold-500/20 hover:border-gold-500/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredWorkshops.map((w) => (
            <div
              key={w.id}
              className="bg-white rounded-2xl p-5 border border-gold-500/20 shadow-sm hover:shadow-luxury hover:border-gold-500/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-espresso-500 mb-2">
                  <span className="text-[11px] uppercase tracking-wider text-gold-700 font-semibold">
                    {w.category}
                  </span>
                  <span className="flex items-center gap-1 font-medium bg-cream-200 px-2 py-0.5 rounded-full">
                    <Calendar className="w-3 h-3 text-gold-600" />
                    {w.duration}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-espresso-950 group-hover:text-gold-700 transition-colors">
                  {w.name}
                </h3>

                <p className="mt-2 text-xs text-espresso-700 leading-relaxed font-light">
                  {w.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-cream-200 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-espresso-500 block">
                    Workshop Fee
                  </span>
                  <span className="font-serif text-base font-bold text-gold-700">
                    {w.price}
                  </span>
                </div>

                <button
                  onClick={() => openEnquiryModal(`Short Course - ${w.name}`)}
                  className="px-3.5 py-1.5 rounded-lg bg-espresso-950 hover:bg-gold-500 text-gold-400 hover:text-espresso-950 text-xs font-semibold transition-all flex items-center gap-1"
                >
                  <span>Enquire</span>
                  <Send className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Common Inclusions & Eligibility */}
      <section className="py-16 bg-cream-200 border-t border-gold-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="bg-white p-8 rounded-2xl border border-gold-500/20 shadow-sm space-y-3">
              <h3 className="font-serif text-xl font-bold text-espresso-950 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-gold-600" />
                Included with Long Courses
              </h3>
              <p className="text-xs text-espresso-700">
                You never have to purchase or source separate ingredients or uniforms.
              </p>
              <ul className="space-y-2 pt-2 text-xs text-espresso-800">
                {siteConfig.inclusions.map((inc) => (
                  <li key={inc} className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gold-500/20 shadow-sm space-y-3">
              <h3 className="font-serif text-xl font-bold text-espresso-950 flex items-center gap-2">
                <Clock className="w-5 h-5 text-gold-600" />
                Eligibility & Age Requirements
              </h3>
              <p className="text-xs text-espresso-800 leading-relaxed font-light">
                {siteConfig.eligibility}
              </p>
              <p className="text-xs text-espresso-700 font-light">
                Classes are structured from the fundamentals up, making them
                accessible for complete beginners, high school graduates, home
                bakers, and experienced professionals alike.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => openEnquiryModal()}
                  className="btn-gold-shine px-6 py-2.5 rounded-xl bg-espresso-950 text-gold-400 font-bold text-xs uppercase tracking-wider"
                >
                  Book Free Counselling
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

