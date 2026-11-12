import React from "react";
import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { siteConfig } from "@/data/site";
import { AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions | IGBCA Chandigarh",
  description: "Terms and conditions of admission and studio conduct at IGBCA.",
};

export default function TermsConditionsPage() {
  return (
    <div className="bg-cream-100 text-espresso-950 min-h-screen">
      <section className="bg-espresso-950 text-cream-100 py-16 sm:py-20 border-b border-gold-500/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ name: "Terms & Conditions", url: "/terms-conditions" }]} />
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-cream-50 mt-6">
            Terms & Conditions
          </h1>
          <p className="mt-2 text-cream-300 text-xs sm:text-sm">
            Last Updated: 2026 • Institute of Global Baking & Culinary Arts
          </p>
        </div>
      </section>

      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gold-500/25 shadow-sm space-y-6 text-espresso-800 text-sm leading-relaxed">
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-800 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
            <span>
              /* TODO: Client to provide official legal counsel terms for production deployment. Template placeholder below. */
            </span>
          </div>

          <h2 className="font-serif text-xl font-bold text-espresso-950">
            1. Academy Enrolment & Bench Allocation
          </h2>
          <p>
            Enrolment in any IGBCA program (5-Month Advance Course, 3-Month
            Professional Course, 1-Month Cakes & Icing, or Short Term Workshops)
            is subject to seat availability. Benches are assigned on a
            first-confirmed basis upon payment of the required registration deposit.
          </p>

          <h2 className="font-serif text-xl font-bold text-espresso-950">
            2. Studio Code of Conduct & Safety
          </h2>
          <p>
            Students must strictly adhere to professional kitchen hygiene
            standards, wear the official IGBCA chef jacket and closed-toe
            kitchen shoes, and operate commercial ovens and equipment only under
            faculty supervision.
          </p>

          <h2 className="font-serif text-xl font-bold text-espresso-950">
            3. Inclusions & Course Materials
          </h2>
          <p>
            All standardized recipe booklets, study materials, and
            commercial-grade ingredients provided during studio hours remain the
            intellectual and operational property of IGBCA until awarded.
            Students may take home finished bakes created at their station.
          </p>

          <h2 className="font-serif text-xl font-bold text-espresso-950">
            4. Timings & Attendance
          </h2>
          <p>
            Core programs run {siteConfig.business.hours.daysThrough}, {siteConfig.business.hours.timeTo}.
            A minimum attendance percentage is required to qualify for graduation
            diplomas and certificates.
          </p>
        </div>
      </section>
    </div>
  );
}

