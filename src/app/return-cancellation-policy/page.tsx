import React from "react";
import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { siteConfig } from "@/data/site";
import { AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Return & Cancellation Policy | IGBCA Chandigarh",
  description: "Course fee reservation, refund, and batch cancellation guidelines.",
};

export default function ReturnCancellationPage() {
  return (
    <div className="bg-cream-100 text-espresso-950 min-h-screen">
      <section className="bg-[#F6E7D0] text-[#3B2314] py-16 sm:py-20 border-b border-[#E9C9A0]/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              {
                name: "Return & Cancellation",
                url: "/return-cancellation-policy",
              },
            ]}
          />
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#3B2314] mt-6">
            Return & Cancellation Policy
          </h1>
          <p className="mt-2 text-[#5A3A25] text-xs sm:text-sm">
            Last Updated: 2026 • Institute of Global Baking & Culinary Arts
          </p>
        </div>
      </section>

      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gold-500/25 shadow-sm space-y-6 text-espresso-800 text-sm leading-relaxed">
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-800 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
            <span>
              /* TODO: Client to provide official refund & batch rescheduling rules for production deployment. Template placeholder below. */
            </span>
          </div>

          <h2 className="font-serif text-xl font-bold text-espresso-950">
            1. Workshop & Course Seat Reservation
          </h2>
          <p>
            Due to our strictly capped bench size and upfront procurement of
            premium commercial ingredients (such as Belgian chocolates, pure
            dairy butters, and imported essences), course seat deposits confirm
            your dedicated bench for the enrolled dates.
          </p>

          <h2 className="font-serif text-xl font-bold text-espresso-950">
            2. Batch Rescheduling Requests
          </h2>
          <p>
            If a registered student experiences unforeseen circumstances,
            requests to transfer enrolment to a subsequent batch must be
            submitted in writing to {siteConfig.contact.email} at least 7 days
            prior to the batch commencement date.
          </p>

          <h2 className="font-serif text-xl font-bold text-espresso-950">
            3. Cancellations & Refunds
          </h2>
          <p>
            Once a course or short-term workshop has commenced, fees paid are
            non-refundable as workstation benches and ingredient rations are
            committed in advance.
          </p>

          <h2 className="font-serif text-xl font-bold text-espresso-950">
            4. Academy Rescheduling
          </h2>
          <p>
            In the rare event that IGBCA must reschedule a workshop due to
            unforeseen studio maintenance or public advisories, students will be
            offered an immediate seat in the next scheduled batch or a full
            credit note.
          </p>
        </div>
      </section>
    </div>
  );
}

