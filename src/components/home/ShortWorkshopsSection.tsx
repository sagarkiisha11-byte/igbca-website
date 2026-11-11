"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  Calendar,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Send,
} from "lucide-react";
import { shortTermWorkshops } from "@/data/courses";
import { useEnquiry } from "@/context/EnquiryContext";
import SectionHeading from "@/components/animations/SectionHeading";
import TiltCard from "@/components/animations/TiltCard";

export default function ShortWorkshopsSection() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const { openEnquiryModal } = useEnquiry();

  const categories = ["All", "Bakery", "Patisserie", "Confectionery"];

  const filteredWorkshops =
    activeFilter === "All"
      ? shortTermWorkshops
      : shortTermWorkshops.filter(
          (w) =>
            w.category === activeFilter ||
            (activeFilter === "Bakery" && w.category === "Culinary & Beverage")
        );

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(scrollContainerRef, { once: true, margin: "-100px" });
  const [scrollProgress, setScrollProgress] = useState(0);

  // Auto-nudge animation hinting it is scrollable the first time it enters viewport
  useEffect(() => {
    if (isInView && scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const timeout1 = setTimeout(() => {
        container.scrollTo({ left: 60, behavior: "smooth" });
      }, 600);
      const timeout2 = setTimeout(() => {
        container.scrollTo({ left: 0, behavior: "smooth" });
      }, 1400);

      return () => {
        clearTimeout(timeout1);
        clearTimeout(timeout2);
      };
    }
  }, [isInView]);

  // Track scroll progress for custom indicator
  const handleScrollProgress = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll > 0) {
      setScrollProgress((scrollLeft / maxScroll) * 100);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const offset = direction === "left" ? -340 : 340;
      scrollContainerRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 md:py-28 lg:py-32 bg-cream-50 text-espresso-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <SectionHeading
            label="Skill Enhancement & Masterclasses"
            title={
              <>
                Short Term <span className="text-gold-gradient">Baking Workshops</span>
              </>
            }
            description="Specialized masterclasses designed for focused skill mastery. From artisan sourdough to crack-free cheesecakes and chocolate pralines."
            align="left"
            theme="cream"
            className="mb-0 max-w-xl"
          />

          {/* Controls: Filter & Nav Arrows */}
          <div className="flex items-center gap-3 self-start md:self-auto shrink-0">
            {/* Scroll buttons for desktop carousel */}
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={() => scroll("left")}
                aria-label="Scroll workshops left"
                className="w-10 h-10 rounded-full border border-gold-500/40 bg-white hover:bg-gold-500 hover:text-white flex items-center justify-center transition-colors shadow-sm"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll("right")}
                aria-label="Scroll workshops right"
                className="w-10 h-10 rounded-full border border-gold-500/40 bg-white hover:bg-gold-500 hover:text-white flex items-center justify-center transition-colors shadow-sm"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <Link
              href="/courses/short-term-courses"
              className="text-xs uppercase tracking-wider font-semibold text-gold-700 hover:text-gold-900 inline-flex items-center gap-1.5 underline underline-offset-4"
            >
              <span>View All 17 Modules</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                activeFilter === cat
                  ? "bg-espresso-950 text-gold-300 shadow-sm"
                  : "bg-white text-espresso-800 border border-gold-500/20 hover:border-gold-500/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Horizontally Scrollable Workshops Carousel with Inertia & Snap Points */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScrollProgress}
          className="flex gap-6 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scroll-smooth -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {filteredWorkshops.map((workshop) => (
            <div
              key={workshop.id}
              data-cursor="view"
              className="snap-start shrink-0 w-[280px] sm:w-[320px] flex flex-col"
            >
              <TiltCard
                maxTilt={5}
                className="bg-white rounded-2xl overflow-hidden border border-gold-500/20 shadow-sm hover:shadow-luxury hover:border-gold-500/40 transition-all duration-300 flex flex-col h-full group"
              >
                {/* Workshop Image */}
                <div className="relative h-44 w-full overflow-hidden bg-cream-200">
                  {workshop.image ? (
                    <Image
                      src={workshop.image}
                      alt={workshop.name}
                      fill
                      sizes="320px"
                      className="object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-cream-200 text-espresso-700 text-xs font-serif">
                      IGBCA Studio Module
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/60 via-transparent to-transparent" />

                  {/* Duration Tag */}
                  <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-white text-[11px] font-medium">
                    <Calendar className="w-3 h-3 text-gold-400" />
                    <span>{workshop.duration}</span>
                  </div>

                  {workshop.popular && (
                    <div className="absolute top-2.5 right-2.5 bg-gold-500 text-espresso-950 font-bold px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wider shadow-sm">
                      Popular
                    </div>
                  )}
                </div>

                {/* Workshop Content */}
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-serif text-lg font-bold text-espresso-950 group-hover:text-gold-700 transition-colors">
                      {workshop.name}
                    </h3>
                  </div>

                  <p className="mt-2 text-xs text-espresso-700 leading-relaxed line-clamp-2 flex-grow">
                    {workshop.description}
                  </p>

                  {/* Price & CTA strip */}
                  <div className="mt-5 pt-3 border-t border-cream-200 flex items-center justify-between">
                    <div>
                      <span className="block text-[10px] uppercase tracking-wider text-espresso-500 font-medium">
                        Course Fee
                      </span>
                      <span className="font-serif text-lg font-bold text-gold-600">
                        {workshop.price}
                      </span>
                    </div>

                    <button
                      onClick={() =>
                        openEnquiryModal(`Short Course - ${workshop.name}`)
                      }
                      className="btn-gold-shine px-3 py-1.5 rounded-lg bg-espresso-950 hover:bg-gold-500 text-gold-400 hover:text-espresso-950 text-xs font-semibold flex items-center gap-1 transition-all"
                    >
                      <span>Enquire</span>
                      <Send className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </TiltCard>
            </div>
          ))}
        </div>

        {/* Custom Animated Progress Bar */}
        <div className="mt-4 flex items-center justify-center gap-3">
          <div className="w-36 sm:w-48 h-1 bg-gold-500/20 rounded-full overflow-hidden">
            <motion.div
              style={{ width: `${Math.max(15, scrollProgress)}%` }}
              className="h-full bg-gradient-to-r from-gold-600 to-gold-400 rounded-full transition-all duration-150"
            />
          </div>
          <span className="text-[10px] uppercase tracking-widest text-gold-700 font-medium">
            Swipe to explore
          </span>
        </div>
      </div>
    </section>
  );
}
