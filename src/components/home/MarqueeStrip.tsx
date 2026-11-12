"use client";

import React from "react";

export default function MarqueeStrip() {
  const items = [
    "Master French Patisserie",
    "Artisan Sourdough & Breads",
    "Belgian Chocolate Craft",
    "Custom Celebration Cakes",
    "Professional Studio Bench",
  ];

  return (
    <div
      aria-hidden="true"
      className="relative bg-espresso-950/90 text-gold-400/80 py-2.5 sm:py-3 border-y border-gold-500/15 overflow-hidden select-none group"
    >
      {/* Soft edge fade masks */}
      <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-espresso-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-espresso-950 to-transparent z-10 pointer-events-none" />

      {/* Marquee track */}
      <div className="flex w-max animate-marquee-slow group-hover:[animation-play-state:paused] space-x-6 sm:space-x-8">
        {[...items, ...items, ...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center gap-6 sm:gap-8 shrink-0">
            <span className="font-serif text-[11px] sm:text-xs uppercase tracking-[0.2em] font-medium text-cream-300/70 hover:text-gold-300 transition-colors">
              {text}
            </span>
            <span className="text-gold-500/50 text-[10px]">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
