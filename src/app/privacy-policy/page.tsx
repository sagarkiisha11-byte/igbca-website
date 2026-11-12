import React from "react";
import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { siteConfig } from "@/data/site";
import { ShieldCheck, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | IGBCA Chandigarh",
  description: "Privacy policy and student data guidelines for IGBCA.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-cream-100 text-espresso-950 min-h-screen">
      <section className="bg-[#F6E7D0] text-[#3B2314] py-16 sm:py-20 border-b border-[#E9C9A0]/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ name: "Privacy Policy", url: "/privacy-policy" }]} />
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#3B2314] mt-6">
            Privacy Policy
          </h1>
          <p className="mt-2 text-[#5A3A25] text-xs sm:text-sm">
            Last Updated: 2026 • Institute of Global Baking & Culinary Arts
          </p>
        </div>
      </section>

      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gold-500/25 shadow-sm space-y-6 text-espresso-800 text-sm leading-relaxed">
          {/* Client TODO notice */}
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-800 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
            <span>
              /* TODO: Client to provide official legal counsel text for production deployment. Template placeholder below. */
            </span>
          </div>

          <h2 className="font-serif text-xl font-bold text-espresso-950">
            1. Information We Collect
          </h2>
          <p>
            When you register for courses, submit an enquiry, or schedule studio
            counselling with IGBCA (Institute of Global Baking & Culinary Arts),
            we collect contact information including your name, email address,
            phone number, and course preferences.
          </p>

          <h2 className="font-serif text-xl font-bold text-espresso-950">
            2. How We Use Your Information
          </h2>
          <p>
            Your details are used solely to communicate regarding course
            syllabi, admission batches, fee structures, and studio scheduling. We
            do not sell, rent, or trade student contact details with third-party
            marketers.
          </p>

          <h2 className="font-serif text-xl font-bold text-espresso-950">
            3. Communications & WhatsApp Support
          </h2>
          <p>
            By submitting an enquiry with your telephone number, you consent to
            receiving official admissions communications and course dossiers
            from our admissions desk at {siteConfig.contact.phone} or via
            WhatsApp.
          </p>

          <h2 className="font-serif text-xl font-bold text-espresso-950">
            4. Contact Our Data Desk
          </h2>
          <p>
            For any queries regarding your personal data, contact us at{" "}
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="text-gold-700 underline"
            >
              {siteConfig.contact.email}
            </a>{" "}
            or visit our studio at {siteConfig.address.full}.
          </p>
        </div>
      </section>
    </div>
  );
}

