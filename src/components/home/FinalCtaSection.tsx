"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
} from "lucide-react";
import { siteConfig } from "@/data/site";
import { useEnquiry } from "@/context/EnquiryContext";
import SectionHeading from "@/components/animations/SectionHeading";
import Magnetic from "@/components/animations/Magnetic";

export default function FinalCtaSection() {
  const { openEnquiryModal } = useEnquiry();

  return (
    <section className="py-20 md:py-28 lg:py-32 bg-[#FFF8EF] text-[#3B2314] relative overflow-hidden">
      {/* Slow gold light sweep animated gradient */}
      <motion.div
        aria-hidden="true"
        animate={{
          x: ["-20%", "20%", "-20%"],
          opacity: [0.15, 0.28, 0.15],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-32 left-1/4 w-[650px] h-[400px] bg-gradient-to-r from-gold-500/10 via-gold-400/25 to-gold-500/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Banner Card Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionHeading
            label="Visit Our Studio"
            title={
              <>
                Begin Your Culinary Journey in{" "}
                <span className="text-gold-gradient">Chandigarh</span>
              </>
            }
            description="Step into our commercial kitchen studio at SCO 218, Sector 36D. Consult directly with Chef Ranjana & Chef Siddhant."
            theme="cream"
            className="mb-8"
          />

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Magnetic strength={8}>
              <button
                onClick={() => openEnquiryModal()}
                className="btn-gold-shine w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 text-[#3B2314] font-bold text-xs uppercase tracking-widest shadow-gold-glow hover:shadow-2xl transition-all"
              >
                Enquire For Next Batch
              </button>
            </Magnetic>

            <Magnetic strength={8}>
              <a
                href={siteConfig.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us Directly</span>
              </a>
            </Magnetic>
          </div>
        </div>

        {/* Map & Location Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Studio Details Card (5 cols) */}
          <div className="lg:col-span-5 bg-white border border-[#E9C9A0]/60 rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-luxury text-[#3B2314]">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#3B2314] mb-2">
                Central Chandigarh Academy
              </h3>
              <p className="text-[#5A3A25] text-xs sm:text-sm font-light leading-relaxed">
                Centrally located in Sector 36D, accessible easily from Mohali,
                Panchkula, and the wider Tricity.
              </p>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#A8791F] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#3B2314] block">
                    Address
                  </span>
                  <span className="text-[#5A3A25]">
                    {siteConfig.address.street}, {siteConfig.address.sector},{" "}
                    {siteConfig.address.city} – {siteConfig.address.pincode}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#A8791F] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#3B2314] block">
                    Studio Operational Hours
                  </span>
                  <span className="text-[#5A3A25]">
                    {siteConfig.business.hours.daysLong} • {siteConfig.business.hours.time}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#A8791F] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#3B2314] block">
                    Phone &amp; Admissions Desk
                  </span>
                  <a
                    href={siteConfig.contact.phoneTel}
                    className="text-[#A8791F] hover:underline font-medium"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E9C9A0]/40 flex items-center justify-between">
              <span className="text-xs text-[#5A3A25]/70">
                Studio visits by prior appointment
              </span>
              <button
                onClick={() => openEnquiryModal()}
                className="text-xs font-semibold text-[#A8791F] hover:text-[#3B2314] underline underline-offset-4"
              >
                Schedule Tour
              </button>
            </div>
          </div>

          {/* Embedded Google Map (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-[#E9C9A0]/60 shadow-luxury h-[380px] sm:h-[420px] relative">
            <iframe
              src={siteConfig.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, filter: "contrast(1.05) saturate(1.1)" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="IGBCA Chandigarh Location Map"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
