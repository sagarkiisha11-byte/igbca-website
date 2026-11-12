import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  Sparkles,
  Award,
  CheckCircle2,
  Clock,
  Compass,
  Target,
  ArrowRight,
  ShieldCheck,
  ChefHat,
} from "lucide-react";
import { siteConfig } from "@/data/site";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "About the Academy | Founders & Philosophy",
  description:
    "Learn about IGBCA, Chandigarh's premier baking institute founded by Master Patissier Ranjana Sukhija and led by Chef Siddhant Khosla in Sector 36D.",
};

export default function AboutPage() {
  return (
    <div className="bg-cream-100 text-espresso-950 min-h-screen">
      {/* Hero Header */}
      <section className="bg-[#F6E7D0] text-[#3B2314] py-16 sm:py-24 relative overflow-hidden border-b border-[#E9C9A0]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb items={[{ name: "About Us", url: "/about" }]} />

          <div className="max-w-3xl mt-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#A8791F] font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Artisanal Tradition & Precision</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#3B2314] tracking-tight leading-tight">
              Nurturing the Next Generation of Master Bakers
            </h1>
            <p className="mt-4 text-[#5A3A25] text-base sm:text-lg font-light leading-relaxed">
              At IGBCA Chandigarh, we combine classical European and Russian
              patisserie methodologies with contemporary commercial bakery
              operations.
            </p>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-widest text-gold-600 font-semibold">
              The IGBCA Story
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-espresso-950">
              Where Craftsmanship is Taught by Hands, Not Just Whiteboards
            </h2>
            <p className="text-espresso-800 text-sm sm:text-base leading-relaxed font-light">
              {siteConfig.about.summary}
            </p>
            <p className="text-espresso-800 text-sm sm:text-base leading-relaxed font-light">
              Every course at IGBCA is rooted in hands-on application. From
              understanding starch gelatinization and butter plasticity to
              mastering sourdough wild fermentation and delicate mirror glazes,
              we teach our students both the <em>why</em> and the <em>how</em> behind
              every bake.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-white p-4 rounded-xl border border-gold-500/20">
                <div className="font-serif text-2xl font-bold text-gold-600">
                  100%
                </div>
                <div className="text-xs text-espresso-800 font-medium mt-1">
                  Hands-on Station Time
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-gold-500/20">
                <div className="font-serif text-2xl font-bold text-gold-600">
                  Sector 36D
                </div>
                <div className="text-xs text-espresso-800 font-medium mt-1">
                  Central Chandigarh Studio
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative h-[420px] sm:h-[480px] rounded-3xl overflow-hidden shadow-luxury border-2 border-gold-500/30">
              <Image
                src="https://igbca.in/wp-content/uploads/2024/07/IMG-20230216-WA0005.jpg"
                alt="IGBCA Kitchen Bench"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="py-16 bg-cream-50 border-y border-gold-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-gold-500/25 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-400/30 flex items-center justify-center text-gold-600">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-espresso-950">
                Our Mission
              </h3>
              <p className="text-espresso-800 text-sm sm:text-base leading-relaxed font-light">
                {siteConfig.about.mission}
              </p>
            </div>

            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-gold-500/25 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-400/30 flex items-center justify-center text-gold-600">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-espresso-950">
                Our Vision
              </h3>
              <p className="text-espresso-800 text-sm sm:text-base leading-relaxed font-light">
                {siteConfig.about.vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Founders & Instructors In Detail */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-gold-600 font-semibold">
            Instructional Leadership
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-espresso-950 mt-1">
            Mentorship by Seasoned Pastry Chefs
          </h2>
          <p className="mt-3 text-espresso-800 text-sm sm:text-base font-light">
            Behind every student bake is the personal guidance and real-time
            feedback of our master instructors.
          </p>
        </div>

        <div className="space-y-16">
          {siteConfig.instructors.map((chef, idx) => (
            <div
              key={chef.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white rounded-3xl p-6 sm:p-10 border border-gold-500/20 shadow-luxury ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="lg:col-span-4 relative h-80 sm:h-96 rounded-2xl overflow-hidden border border-[#E9C9A0]/60 bg-[#F6E7D0]">
                <Image
                  src={chef.photo}
                  alt={chef.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 350px"
                  className="object-cover"
                  quality={85}
                  style={{ objectPosition: chef.focalPoint || "50% 18%" }}
                />
              </div>

              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-700 text-xs uppercase tracking-wider font-semibold">
                  <ChefHat className="w-3.5 h-3.5" />
                  <span>{chef.role}</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-espresso-950">
                  {chef.name}
                </h3>

                <p className="text-espresso-800 text-sm sm:text-base leading-relaxed font-light">
                  {chef.bio}
                </p>

                {chef.credentials && (
                  <div className="pt-4 border-t border-cream-200 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {chef.credentials.map((c) => (
                      <div
                        key={c}
                        className="flex items-center gap-2 text-xs text-espresso-900 font-medium"
                      >
                        <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                        <span>{c}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Facilities & Studio Standards */}
      <section className="py-16 bg-[#F6E7D0] border-t border-[#E9C9A0]/60 text-[#3B2314]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#3B2314]">
            Visit Our Sector 36D Studio
          </h3>
          <p className="mt-3 text-[#5A3A25] text-sm sm:text-base leading-relaxed font-light">
            We operate {siteConfig.business.hours.daysThrough}, {siteConfig.business.hours.timeTo}. Book a
            one-on-one counselling session to tour our commercial deck ovens,
            tempering stations, and kitchen workstations.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="btn-gold-shine px-8 py-3.5 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 text-[#3B2314] font-bold text-xs uppercase tracking-wider shadow-gold-glow"
            >
              Contact Admissions
            </Link>
            <Link
              href="/courses"
              className="px-8 py-3.5 rounded-full border border-[#E9C9A0] bg-white text-[#3B2314] hover:bg-[#F6E7D0]/50 text-xs font-semibold uppercase tracking-wider"
            >
              Browse Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

