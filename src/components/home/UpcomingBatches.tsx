"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Users, Sparkles, Send, ShieldAlert } from "lucide-react";
import { siteConfig } from "@/data/site";
import { useEnquiry } from "@/context/EnquiryContext";

export default function UpcomingBatches() {
  const { openEnquiryModal } = useEnquiry();

  return (
    <section className="py-20 md:py-28 lg:py-32 bg-[#F6E7D0] text-[#3B2314]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-8 sm:p-12 border border-[#E9C9A0]/60 shadow-luxury relative overflow-hidden"
        >
          {/* Decorative Corner Gold Accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-bl-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Info (8 cols) */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/15 border border-gold-400/40 text-gold-700 text-xs uppercase tracking-wider font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-gold-600" />
                <span>Admissions Now Open</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-espresso-950">
                {siteConfig.batchStatus.headline}
              </h2>

              <p className="text-espresso-800 text-sm sm:text-base leading-relaxed font-light max-w-2xl">
                {siteConfig.batchStatus.message}
              </p>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-xs text-espresso-700">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-gold-600" />
                  <span>Limited Student Benches per Batch</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gold-600" />
                  <span>{siteConfig.business.hours.daysLong} Schedule</span>
                </div>
              </div>
            </div>

            {/* Right Action (4 cols) */}
            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center gap-3">
              <button
                onClick={() => openEnquiryModal("Upcoming Batch Inquiry")}
                className="btn-gold-shine w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 text-espresso-950 font-bold text-xs sm:text-sm uppercase tracking-wider shadow-gold-glow hover:shadow-xl transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>{siteConfig.batchStatus.ctaLabel}</span>
              </button>

              <div className="text-[11px] text-espresso-500 flex items-center gap-1.5 lg:text-right">
                <ShieldAlert className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                <span>Seats confirmed on first-come reservation</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

