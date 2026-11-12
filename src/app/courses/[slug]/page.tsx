import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  Clock,
  BookOpen,
  Calendar,
  Award,
  Sparkles,
  CheckCircle2,
  Phone,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  ChevronDown,
  Layers,
  Utensils,
} from "lucide-react";
import { coursesList } from "@/data/courses";
import { siteConfig } from "@/data/site";
import Breadcrumb from "@/components/Breadcrumb";
import { generateCourseSchema } from "@/lib/json-ld";
import CourseApplyButton from "@/components/CourseApplyButton";
import CourseCurriculumGrid from "@/components/CourseCurriculumGrid";

interface CoursePageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return coursesList.map((course) => ({
    slug: course.slug,
  }));
}

export function generateMetadata({ params }: CoursePageProps): Metadata {
  const course = coursesList.find((c) => c.slug === params.slug);
  if (!course) {
    return { title: "Course Not Found | IGBCA" };
  }

  return {
    title: `${course.title} | ${course.duration} Baking Program`,
    description: course.description,
    openGraph: {
      title: `${course.title} | IGBCA Chandigarh`,
      description: course.description,
      images: [
        {
          url: course.heroImage,
          width: 1200,
          height: 630,
          alt: course.title,
        },
      ],
    },
  };
}

export default function CourseDetailPage({ params }: CoursePageProps) {
  const course = coursesList.find((c) => c.slug === params.slug);

  if (!course) {
    notFound();
  }

  const courseSchema = generateCourseSchema(course);
  const otherCourses = coursesList.filter((c) => c.slug !== course.slug);

  return (
    <div className="bg-cream-100 text-espresso-950 min-h-screen">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />

      {/* Cinematic Hero */}
      <section className="relative min-h-[460px] lg:min-h-[520px] bg-[#3B2314] text-cream-100 flex items-center overflow-hidden border-b border-[#E9C9A0]/30">
        <div className="absolute inset-0 z-0">
          <Image
            src={course.heroImage}
            alt={course.title}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#3B2314] via-[#3B2314]/70 to-[#3B2314]/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#3B2314]/90 via-[#3B2314]/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 w-full">
          <Breadcrumb
            items={[
              { name: "Courses", url: "/courses" },
              { name: course.title, url: `/courses/${course.slug}` },
            ]}
          />

          <div className="max-w-3xl mt-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/20 border border-gold-400/40 text-gold-300 text-xs font-semibold uppercase tracking-wider mb-4 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              <span>{course.badge}</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-cream-50 tracking-tight leading-tight">
              {course.title}
            </h1>

            <p className="mt-2 font-serif text-lg sm:text-xl text-gold-300 font-light italic">
              {course.subtitle}
            </p>

            <p className="mt-4 text-cream-200 text-sm sm:text-base leading-relaxed font-light max-w-2xl">
              {course.description}
            </p>

            {/* Quick Chips */}
            <div className="mt-8 flex flex-wrap gap-3 text-xs">
              <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md border border-[#E9C9A0]/40 px-3.5 py-1.5 rounded-full text-cream-100">
                <Clock className="w-4 h-4 text-gold-400" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md border border-[#E9C9A0]/40 px-3.5 py-1.5 rounded-full text-cream-100">
                <BookOpen className="w-4 h-4 text-gold-400" />
                <span>{course.modulesCount} In-Depth Modules</span>
              </div>
              <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md border border-[#E9C9A0]/40 px-3.5 py-1.5 rounded-full text-cream-100">
                <Calendar className="w-4 h-4 text-gold-400" />
                <span>{course.schedule}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout with Sticky Sidebar */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Column (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            {/* Overview */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gold-500/20 shadow-sm space-y-4">
              <h2 className="font-serif text-2xl font-bold text-espresso-950">
                Program Overview
              </h2>
              <p className="text-espresso-800 text-sm sm:text-base leading-relaxed font-light">
                {course.overview}
              </p>
            </div>

            {/* Curriculum Modules Grid with Search & Discipline Filter */}
            <CourseCurriculumGrid
              modules={course.modules}
              courseTitle={course.title}
            />

            {/* Who Is This Course Ideal For? */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gold-500/20 shadow-sm space-y-4">
              <h3 className="font-serif text-2xl font-bold text-espresso-950">
                Who Is This Course Ideal For?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {course.idealFor.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-cream-100 border border-gold-500/15 text-xs text-espresso-900"
                  >
                    <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Inclusions & Eligibility */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-3xl p-6 border border-gold-500/20 shadow-sm space-y-3">
                <h4 className="font-serif text-lg font-bold text-espresso-950 flex items-center gap-2">
                  <Utensils className="w-4 h-4 text-gold-600" />
                  Included in Fees
                </h4>
                <ul className="space-y-2 text-xs text-espresso-800">
                  {course.inclusions.map((inc) => (
                    <li key={inc} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-3xl p-6 border border-gold-500/20 shadow-sm space-y-3">
                <h4 className="font-serif text-lg font-bold text-espresso-950 flex items-center gap-2">
                  <Award className="w-4 h-4 text-gold-600" />
                  Eligibility & Qualification
                </h4>
                <p className="text-xs text-espresso-800 leading-relaxed font-light">
                  {course.eligibility}
                </p>
                <div className="pt-2 border-t border-cream-200">
                  <span className="block text-[11px] uppercase tracking-wider text-espresso-500 font-medium">
                    Certification
                  </span>
                  <span className="font-serif text-xs font-bold text-gold-700">
                    {course.certification}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Sticky Sidebar on Desktop (4 cols) */}
          <div className="lg:col-span-4 sticky top-24 space-y-6">
            <div className="bg-white text-[#3B2314] rounded-3xl p-6 sm:p-7 border border-[#E9C9A0]/60 shadow-luxury space-y-6">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#A8791F] font-semibold block">
                  Course Investment & Batch
                </span>
                <div className="font-serif text-2xl font-bold text-[#3B2314] mt-1">
                  {course.feeInfo}
                </div>
                <p className="text-[#5A3A25] text-xs mt-1">
                  All commercial ingredients, chef jacket, and recipes included.
                </p>
              </div>

              <div className="space-y-3 text-xs text-[#5A3A25] pt-4 border-t border-[#E9C9A0]/40">
                <div className="flex justify-between py-1 border-b border-[#E9C9A0]/20">
                  <span className="text-[#5A3A25]/80">Duration:</span>
                  <span className="font-semibold text-[#3B2314]">{course.duration}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#E9C9A0]/20">
                  <span className="text-[#5A3A25]/80">Timings:</span>
                  <span className="font-semibold text-[#3B2314]">{course.schedule}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#E9C9A0]/20">
                  <span className="text-[#5A3A25]/80">Class Type:</span>
                  <span className="font-semibold text-[#3B2314]">100% Practical Bench</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#5A3A25]/80">Studio Location:</span>
                  <span className="font-semibold text-[#3B2314]">Sector 36D, Chandigarh</span>
                </div>
              </div>

              {/* Apply / Enquire Button */}
              <div className="space-y-3 pt-2">
                <CourseApplyButton courseTitle={course.title} />

                <a
                  href={siteConfig.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Admissions</span>
                </a>

                <a
                  href={siteConfig.contact.phoneTel}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-[#E9C9A0] text-[#3B2314] hover:bg-[#F6E7D0]/50 text-xs font-medium transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#A8791F]" />
                  <span>Call: {siteConfig.contact.phone}</span>
                </a>
              </div>

              <div className="text-center pt-2">
                <p className="text-[11px] text-[#5A3A25]/70 flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#A8791F]" />
                  <span>Limited seats to ensure individual attention</span>
                </p>
              </div>
            </div>

            {/* Studio Hours Card */}
            <div className="bg-white rounded-2xl p-5 border border-gold-500/20 shadow-sm text-xs text-espresso-800 space-y-2">
              <h5 className="font-bold font-serif text-espresso-950">
                Need Studio Assistance?
              </h5>
              <p className="text-espresso-600 font-light">
                Our Chandigarh studio welcomes prospective students {siteConfig.business.hours.daysThrough}, {siteConfig.business.hours.time}.
              </p>
              <Link
                href="/contact"
                className="text-gold-700 hover:text-gold-900 font-semibold inline-flex items-center gap-1 underline underline-offset-4 pt-1"
              >
                <span>Find Directions on Map</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>

        {/* Related / Other Courses Section */}
        <div className="mt-20 pt-12 border-t border-gold-500/20">
          <h3 className="font-serif text-2xl font-bold text-espresso-950 mb-6">
            Explore Other Programs
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherCourses.map((other) => (
              <Link
                key={other.slug}
                href={`/courses/${other.slug}`}
                className="group bg-white rounded-2xl overflow-hidden border border-gold-500/20 shadow-sm hover:shadow-luxury transition-all flex flex-col"
              >
                <div className="relative h-44 w-full overflow-hidden">
                  <Image
                    src={other.thumbnail}
                    alt={other.title}
                    fill
                    sizes="350px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-white/95 text-[#A8791F] border border-[#E9C9A0]/60 shadow-sm px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider">
                    {other.badge}
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h4 className="font-serif text-lg font-bold text-espresso-950 group-hover:text-gold-700 transition-colors">
                    {other.title}
                  </h4>
                  <p className="text-xs text-espresso-600 mt-1 line-clamp-2 font-light">
                    {other.description}
                  </p>
                  <div className="mt-4 pt-3 border-t border-cream-200 flex items-center justify-between text-xs text-gold-700 font-semibold">
                    <span>{other.duration}</span>
                    <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      View Syllabus →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

