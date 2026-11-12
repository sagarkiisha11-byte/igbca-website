"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ChevronDown, MessageCircle, Phone, ArrowRight } from "lucide-react";
import { faqsList, FAQItem } from "@/data/faq";
import { siteConfig } from "@/data/site";
import Breadcrumb from "@/components/Breadcrumb";
import { useEnquiry } from "@/context/EnquiryContext";

export default function FAQPage() {
  const { openEnquiryModal } = useEnquiry();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
    "All",
    "General",
    "Admissions & Eligibility",
    "Curriculum & Supplies",
    "Certifications",
  ];

  const filteredFaqs =
    activeCategory === "All"
      ? faqsList
      : faqsList.filter((f) => f.category === activeCategory);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-cream-100 text-espresso-950 min-h-screen">
      {/* Header */}
      <section className="bg-[#F6E7D0] text-[#3B2314] py-16 sm:py-20 relative overflow-hidden border-b border-[#E9C9A0]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb items={[{ name: "Admissions FAQ", url: "/faq" }]} />

          <div className="max-w-3xl mt-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#A8791F] font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Everything You Need to Know</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#3B2314] tracking-tight leading-tight">
              Frequently Asked Questions
            </h1>
            <p className="mt-4 text-[#5A3A25] text-base sm:text-lg font-light leading-relaxed">
              Find answers regarding admissions eligibility, course timings, chef
              uniforms, ingredients, and certification at IGBCA Chandigarh.
            </p>
          </div>
        </div>
      </section>

      {/* Main FAQ Content */}
      <section className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setOpenIndex(0);
              }}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? "bg-[#3B2314] text-[#C9A24A] shadow-sm"
                  : "bg-white text-espresso-800 border border-gold-500/20 hover:border-gold-500/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={faq.question}
                className="bg-white rounded-2xl border border-gold-500/20 shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-espresso-950">
                    {faq.question}
                  </span>
                  <div
                    className={`w-9 h-9 rounded-full border border-gold-500/30 flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "rotate-180 bg-[#3B2314] text-gold-400 border-gold-400/60 shadow-sm"
                        : "text-[#3B2314] bg-[#FFF8EF] hover:border-gold-500/50"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 transition-transform duration-300" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-espresso-800 leading-relaxed font-light border-t border-cream-200/80">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still have questions card */}
        <div className="mt-16 bg-[#F6E7D0] text-[#3B2314] rounded-3xl p-8 sm:p-10 border border-[#E9C9A0] text-center shadow-luxury">
          <h3 className="font-serif text-2xl font-bold text-[#3B2314]">
            Have a Specific Question We Didn&apos;t Answer?
          </h3>
          <p className="mt-2 text-[#5A3A25] text-xs sm:text-sm max-w-lg mx-auto font-light">
            Our admissions counsellors are available on phone or WhatsApp {siteConfig.business.hours.daysThrough} from {siteConfig.business.hours.timeTo}.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => openEnquiryModal()}
              className="btn-gold-shine px-6 py-3 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 text-[#3B2314] font-bold text-xs uppercase tracking-wider shadow-gold-glow"
            >
              Submit an Enquiry
            </button>
            <a
              href={siteConfig.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs uppercase tracking-wider flex items-center gap-2 shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

