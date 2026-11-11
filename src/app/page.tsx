import React from "react";
import HeroSection from "@/components/home/HeroSection";
import MarqueeStrip from "@/components/home/MarqueeStrip";
import TrustStrip from "@/components/home/TrustStrip";
import AboutPreview from "@/components/home/AboutPreview";
import FeaturedCourses from "@/components/home/FeaturedCourses";
import ShortWorkshopsSection from "@/components/home/ShortWorkshopsSection";
import BakeYourWaySection from "@/components/home/BakeYourWaySection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import InstructorsSection from "@/components/home/InstructorsSection";
import GalleryPreview from "@/components/home/GalleryPreview";
import AdmissionProcess from "@/components/home/AdmissionProcess";
import UpcomingBatches from "@/components/home/UpcomingBatches";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import StoriesSection from "@/components/home/StoriesSection";
import NewsletterBand from "@/components/home/NewsletterBand";
import FinalCtaSection from "@/components/home/FinalCtaSection";

export default function HomePage() {
  return (
    <>
      {/* 3. HERO */}
      <HeroSection />

      {/* Marquee Strip */}
      <MarqueeStrip />

      {/* 4. Trust/stats strip */}
      <TrustStrip />

      {/* 5. About preview */}
      <AboutPreview />

      {/* 6. Featured Programs (5-Month, 3-Month, 1-Month) */}
      <FeaturedCourses />

      {/* 7. Short Term Workshops */}
      <ShortWorkshopsSection />

      {/* 8. "Bake Your Way" split section */}
      <BakeYourWaySection />

      {/* 9. Why Choose IGBCA */}
      <WhyChooseSection />

      {/* 10. Meet Your Instructors */}
      <InstructorsSection />

      {/* 11. Studio Gallery */}
      <GalleryPreview />

      {/* 12. Admission Process */}
      <AdmissionProcess />

      {/* 13. Upcoming Batches */}
      <UpcomingBatches />

      {/* 14. Testimonials */}
      <TestimonialsSection />

      {/* 15. Stories/Blog */}
      <StoriesSection />

      {/* 16. Newsletter */}
      <NewsletterBand />

      {/* 17. Final CTA & Google Map */}
      <FinalCtaSection />
    </>
  );
}
