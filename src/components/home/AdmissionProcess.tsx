"use client";

import React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";
import { useEnquiry } from "@/context/EnquiryContext";
import SectionHeading from "@/components/animations/SectionHeading";
import TiltCard from "@/components/animations/TiltCard";
import Magnetic from "@/components/animations/Magnetic";

export default function AdmissionProcess() {
  const { openEnquiryModal } = useEnquiry();

  return (
    <section className="py-20 md:py-28 lg:py-32 bg-[#FFF8EF] text-[#3B2314] relative overflow-hidden">
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
          theme="cream"
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
                className="bg-white border border-[#E9C9A0]/60 rounded-2xl p-6 relative flex flex-col h-full group hover:border-gold-400/60 shadow-luxury transition-all duration-300"
              >
                {/* Step Number */}
                <div className="font-serif text-4xl font-bold text-gold-400/40 group-hover:text-gold-500 transition-colors mb-4">
                  {step.step}
                </div>

                <h3 className="font-serif text-lg font-bold text-[#3B2314] mb-2 group-hover:text-[#A8791F] transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs text-[#5A3A25] leading-relaxed font-light">
                  {step.description}
                </p>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-14 p-8 rounded-2xl bg-[#F6E7D0] border border-[#E9C9A0] text-center max-w-3xl mx-auto shadow-luxury">
          <h3 className="font-serif text-2xl font-bold text-[#3B2314]">
            Ready to Experience the Academy Firsthand?
          </h3>
          <p className="mt-2 text-[#5A3A25] text-xs sm:text-sm max-w-lg mx-auto font-light">
            Book a complimentary studio tour and curriculum review with our chef
            instructors at Sector 36D, Chandigarh.
          </p>
          <div className="mt-6 flex justify-center">
            <Magnetic strength={8}>
              <button
                onClick={() => openEnquiryModal()}
                className="btn-gold-shine px-8 py-3.5 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 text-[#3B2314] font-bold text-xs uppercase tracking-widest shadow-gold-glow hover:shadow-xl transition-all"
              >
                Schedule Studio Visit &amp; Counselling
              </button>
            </Magnetic>
          </div>
        </div>
      </div>
    </section>
  );
}
