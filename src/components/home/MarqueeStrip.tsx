"use client";

import React from "react";

export default function MarqueeStrip() {
  const items = [
    "Master French Patisserie",
    "100% Hands-on Stations",
    "Artisan Sourdough & Breads",
    "Fine Belgian Chocolates",
    "Multi-Tier Cake Design",
    "Commercial Bakery Costing",
    "Sector 36D, Chandigarh",
    "Certified Pastry Diplomas",
    "Laminated Croissants & Puffs",
  ];

  return (
    <div
      aria-hidden="true"
      className="relative bg-espresso-950 text-gold-400 py-3.5 border-y border-gold-500/25 overflow-hidden select-none group"
    >
      {/* Soft left/right edge fade masks */}
      <div className="absolute top-0 bottom-0 left-0 w-20 sm:w-36 bg-gradient-to-r from-espresso-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-20 sm:w-36 bg-gradient-to-l from-espresso-950 to-transparent z-10 pointer-events-none" />

      {/* Marquee track (pauses on hover) */}
      <div className="flex w-max animate-marquee-slow group-hover:[animation-play-state:paused] space-x-8">
        {[...items, ...items, ...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center gap-8 shrink-0">
            <span className="font-serif text-xs uppercase tracking-[0.25em] font-medium text-cream-200/90 hover:text-gold-300 transition-colors">
              {text}
            </span>
            <span className="text-gold-500/70 text-xs">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
