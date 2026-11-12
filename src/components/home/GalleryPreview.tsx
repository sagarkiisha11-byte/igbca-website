"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { galleryItems } from "@/data/gallery";
import SectionHeading from "@/components/animations/SectionHeading";

export default function GalleryPreview() {
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  // Take the first 8 diverse gallery items
  const previewItems = galleryItems.slice(0, 8);

  const openLightbox = (index: number) => {
    setSelectedItemIndex(index);
  };

  const closeLightbox = () => {
    setSelectedItemIndex(null);
  };

  const nextImage = () => {
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((selectedItemIndex + 1) % previewItems.length);
    }
  };

  const prevImage = () => {
    if (selectedItemIndex !== null) {
      setSelectedItemIndex(
        (selectedItemIndex - 1 + previewItems.length) % previewItems.length
      );
    }
  };

  // Keyboard navigation (ArrowLeft, ArrowRight, Escape)
  useEffect(() => {
    if (selectedItemIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedItemIndex]);

  // Touch swipe support on mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > 45) {
      if (diff > 0) {
        nextImage(); // swipe left -> next
      } else {
        prevImage(); // swipe right -> prev
      }
    }
    setTouchStartX(null);
  };

  return (
    <section className="py-20 md:py-28 lg:py-32 bg-[#F6E7D0] text-[#3B2314] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            label="Studio Glimpses"
            title={
              <>
                Life Inside the <span className="text-gold-gradient">IGBCA Studio</span>
              </>
            }
            description="From delicate chocolate curls and sourdough scoring to joyful student graduation showcases at Sector 36D, Chandigarh."
            align="left"
            theme="cream"
            className="mb-0 max-w-xl"
          />

          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#A8791F] hover:text-[#3B2314] group shrink-0"
          >
            <span>Explore Complete Gallery</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Masonry / Responsive Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {previewItems.map((item, idx) => (
            <motion.div
              key={item.id}
              data-cursor="view"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.07 }}
              onClick={() => openLightbox(idx)}
              className="group relative h-48 sm:h-60 rounded-2xl overflow-hidden cursor-pointer border border-gold-500/20 shadow-sm hover:shadow-luxury hover:border-gold-500/60 transition-all duration-300"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/85 via-espresso-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-cream-100">
                <span className="text-[10px] uppercase tracking-wider text-gold-400 font-medium">
                  {item.category}
                </span>
                <h4 className="text-xs font-semibold font-serif line-clamp-1">
                  {item.title}
                </h4>
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white shadow-md">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal with Keyboard & Touch Support */}
      <AnimatePresence>
        {selectedItemIndex !== null && (
          <div
            role="dialog"
            aria-modal="true"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/92 backdrop-blur-xl"
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              aria-label="Close image lightbox"
              className="absolute top-5 right-5 text-cream-200 hover:text-white p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-20"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev */}
            <button
              onClick={prevImage}
              aria-label="Previous image"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-cream-200 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-20 hidden sm:flex items-center justify-center"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next */}
            <button
              onClick={nextImage}
              aria-label="Next image"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-cream-200 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-20 hidden sm:flex items-center justify-center"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image & Caption */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center"
            >
              <div className="relative w-full h-[60vh] sm:h-[70vh] rounded-2xl overflow-hidden border border-gold-500/30 shadow-2xl">
                <Image
                  src={previewItems[selectedItemIndex].src}
                  alt={previewItems[selectedItemIndex].title}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>

              <div className="mt-4 text-center text-cream-100 max-w-xl">
                <div className="text-xs uppercase tracking-widest text-gold-400 font-medium">
                  {previewItems[selectedItemIndex].category} • {selectedItemIndex + 1} / {previewItems.length}
                </div>
                <h3 className="font-serif text-lg font-bold mt-1">
                  {previewItems[selectedItemIndex].title}
                </h3>
                <p className="text-xs text-cream-300 mt-1">
                  {previewItems[selectedItemIndex].caption}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
