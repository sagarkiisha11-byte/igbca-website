"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Filter,
} from "lucide-react";
import { galleryItems, GalleryItem } from "@/data/gallery";
import Breadcrumb from "@/components/Breadcrumb";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const categories = [
    "All",
    "Patisserie",
    "Cakes & Sugar Art",
    "Breads & Pastry",
    "Studio Life",
  ];

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const nextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        (selectedImageIndex - 1 + filteredItems.length) % filteredItems.length
      );
    }
  };

  return (
    <div className="bg-cream-100 text-espresso-950 min-h-screen">
      {/* Header */}
      <section className="bg-espresso-950 text-cream-100 py-16 sm:py-20 relative overflow-hidden border-b border-gold-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb items={[{ name: "Studio Gallery", url: "/gallery" }]} />

          <div className="max-w-3xl mt-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Visual Journey</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-cream-50 tracking-tight leading-tight">
              Inside Our Baking Studio
            </h1>
            <p className="mt-4 text-cream-300 text-base sm:text-lg font-light leading-relaxed">
              Explore authentic glimpses of student bakes, French viennoiseries,
              artisan crusts, multi-tier wedding cakes, and master patisserie
              sessions at Sector 36D, Chandigarh.
            </p>
          </div>
        </div>
      </section>

      {/* Main Filter & Gallery Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter Pills */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-10 pb-4 border-b border-gold-500/15">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? "bg-espresso-950 text-gold-300 shadow-sm"
                    : "bg-white text-espresso-800 border border-gold-500/20 hover:border-gold-500/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="text-xs text-espresso-600 font-medium">
            Showing {filteredItems.length} Photographs
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35 }}
              onClick={() => openLightbox(idx)}
              className="group relative rounded-2xl overflow-hidden bg-white border border-gold-500/20 shadow-sm hover:shadow-luxury hover:border-gold-500/50 cursor-pointer h-72 sm:h-80"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/90 via-espresso-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-cream-100">
                <span className="text-[10px] uppercase tracking-wider text-gold-400 font-semibold mb-1">
                  {item.category}
                </span>
                <h3 className="font-serif text-sm font-bold leading-snug line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-[11px] text-cream-300 line-clamp-2 mt-1 font-light">
                  {item.caption}
                </p>

                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              aria-label="Close image lightbox"
              className="absolute top-5 right-5 text-cream-200 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-20"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Image */}
            <button
              onClick={prevImage}
              aria-label="Previous image"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-cream-200 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-20 hidden sm:flex items-center justify-center"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Image */}
            <button
              onClick={nextImage}
              aria-label="Next image"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-cream-200 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-20 hidden sm:flex items-center justify-center"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image & Caption */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center"
            >
              <div className="relative w-full h-[60vh] sm:h-[70vh] rounded-2xl overflow-hidden border border-gold-500/30">
                <Image
                  src={filteredItems[selectedImageIndex].src}
                  alt={filteredItems[selectedImageIndex].title}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>

              <div className="mt-4 text-center text-cream-100 max-w-xl">
                <div className="text-xs uppercase tracking-widest text-gold-400 font-medium">
                  {filteredItems[selectedImageIndex].category} •{" "}
                  {selectedImageIndex + 1} of {filteredItems.length}
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-bold mt-1">
                  {filteredItems[selectedImageIndex].title}
                </h3>
                <p className="text-xs sm:text-sm text-cream-300 mt-1 font-light">
                  {filteredItems[selectedImageIndex].caption}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

