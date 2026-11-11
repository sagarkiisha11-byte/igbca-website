"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { siteConfig } from "@/data/site";
import { useEnquiry } from "@/context/EnquiryContext";
import SectionHeading from "@/components/animations/SectionHeading";
import TiltCard from "@/components/animations/TiltCard";
import Magnetic from "@/components/animations/Magnetic";

export default function AdmissionProcess() {
  const { openEnquiryModal } = useEnquiry();

  return (
    <section className="py-20 md:py-28 lg:py-32 bg-espresso-950 text-cream-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <SectionHeading
          label="Seamless Onboarding"
          title={
            <>
              Your 4-Step Journey to <span className="text-gold-gradient">Mastery</span>
            </>
          }
          description="Joining IGBCA is straightforward. We walk you through every step to help you choose the right program for your culinary aspirations."
          theme="dark"
        />

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {siteConfig.admissionSteps.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="h-full"
            >
              <TiltCard
                maxTilt={5}
                className="bg-espresso-900/60 border border-gold-500/20 rounded-2xl p-6 relative flex flex-col h-full group hover:border-gold-400/50 hover:bg-espresso-900 transition-all duration-300"
              >
                {/* Step Number */}
                <div className="font-serif text-4xl font-bold text-gold-500/30 group-hover:text-gold-400/80 transition-colors mb-4">
                  {step.step}
                </div>

                <h3 className="font-serif text-lg font-bold text-cream-100 mb-2 group-hover:text-gold-300 transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs text-cream-300 leading-relaxed font-light">
                  {step.description}
                </p>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-espresso-900 via-chocolate-800 to-espresso-900 border border-gold-500/30 text-center max-w-3xl mx-auto shadow-2xl">
          <h3 className="font-serif text-2xl font-bold text-cream-50">
            Ready to Experience the Academy Firsthand?
          </h3>
          <p className="mt-2 text-cream-300 text-xs sm:text-sm max-w-lg mx-auto font-light">
            Book a complimentary studio tour and curriculum review with our chef
            instructors at Sector 36D, Chandigarh.
          </p>
          <div className="mt-6 flex justify-center">
            <Magnetic strength={8}>
              <button
                onClick={() => openEnquiryModal()}
                className="btn-gold-shine px-8 py-3.5 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 text-espresso-950 font-bold text-xs uppercase tracking-widest shadow-gold-glow hover:shadow-xl transition-all"
              >
                Schedule Studio Visit & Counselling
              </button>
            </Magnetic>
          </div>
        </div>
      </div>
    </section>
  );
}
