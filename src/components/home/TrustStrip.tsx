"use client";

import React from "react";
import { motion } from "framer-motion";
import Counter from "@/components/animations/Counter";

const statsData = [
  { value: 4, suffix: "", label: "Signature Programs" },
  { value: 17, suffix: "+", label: "Short Workshops" },
  { value: 21, suffix: "", label: "Advanced Modules" },
  { value: 100, suffix: "%", label: "Hands-on Practice" },
];

export default function TrustStrip() {
  return (
    <section
      id="trust-strip"
      className="bg-[#FFF8EF] border-b border-[#E9C9A0]/50 relative py-10 sm:py-14 px-4 sm:px-6 lg:px-8 text-[#3B2314] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* ONE clean light stats row: 4 items, large number + label only, thin dividers */}
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-[#E9C9A0]/60">
          {statsData.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="flex flex-col items-center text-center p-4 sm:p-6"
            >
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3B2314] tracking-tight flex items-baseline justify-center">
                <Counter
                  value={stat.value}
                  suffix={stat.suffix}
                  duration={1.6}
                />
              </div>

              <div className="text-xs uppercase tracking-[0.2em] text-[#A8791F] font-semibold mt-2">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
