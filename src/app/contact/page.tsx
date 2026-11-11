"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  Clock,
  Sparkles,
  Send,
  CheckCircle2,
  Calendar,
} from "lucide-react";
import { siteConfig } from "@/data/site";
import Breadcrumb from "@/components/Breadcrumb";

const contactFormSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().optional(),
  email: z.string().email("Please provide a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  subject: z.string().optional(),
  course: z.enum([
    "5 Month Advance Course",
    "3 Month Professional Course",
    "1 Month Cakes & Icing",
    "Short Term Course",
  ]),
  message: z.string().min(10, "Please enter your message (at least 10 characters)"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      course: "5 Month Advance Course",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate API call (front-end only placeholder; backend integration ready)
    await new Promise((resolve) => setTimeout(resolve, 800));
    console.log("Contact form submitted (Front-end only placeholder):", data);
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div className="bg-cream-100 text-espresso-950 min-h-screen">
      {/* Header with Cinematic Background Video */}
      <section className="bg-espresso-950 text-cream-100 py-18 sm:py-24 relative overflow-hidden border-b border-gold-500/20">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://igbca.in/wp-content/uploads/2024/08/hero-2.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        >
          <source
            src="https://igbca.in/wp-content/uploads/2023/07/pexels_videos_2795731-540p.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-espresso-950 via-espresso-950/80 to-espresso-950/60" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb items={[{ name: "Contact & Visit", url: "/contact" }]} />

          <div className="max-w-3xl mt-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Chandigarh Studio</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-cream-50 tracking-tight leading-tight">
              Get in Touch with IGBCA
            </h1>
            <p className="mt-4 text-cream-300 text-base sm:text-lg font-light leading-relaxed">
              Have questions regarding curricula, seat availability, fees, or
              want to tour our studio? Submit your enquiry below or message us on
              WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* Split Layout: Contact Form & Studio Info */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Premium Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-gold-500/25 shadow-luxury">
            <div className="mb-8">
              <span className="text-xs uppercase tracking-widest text-gold-600 font-semibold">
                Direct Admissions Desk
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-espresso-950 mt-1">
                Send Us an Enquiry
              </h2>
              <p className="text-xs sm:text-sm text-espresso-700 mt-2 font-light">
                Fill in the details below and our admissions team will respond
                within 24 hours with syllabus dossiers and next batch dates.
              </p>
            </div>

            {isSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-espresso-950">
                  Enquiry Received
                </h3>
                <p className="text-sm text-espresso-700 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out! A representative from IGBCA will
                  contact you shortly via email/phone with course details.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={siteConfig.contact.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Chat on WhatsApp Now
                  </a>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      reset();
                    }}
                    className="px-6 py-3 rounded-xl border border-gold-500/30 text-espresso-800 text-xs font-medium uppercase tracking-wider"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-espresso-900 mb-1">
                      First Name <span className="text-gold-600">*</span>
                    </label>
                    <input
                      type="text"
                      {...register("firstName")}
                      placeholder="e.g. Jaspreet"
                      className="w-full px-4 py-3 bg-cream-50 border border-gold-500/30 rounded-xl text-espresso-950 text-sm focus:outline-none focus:border-gold-600 focus:ring-1 focus:ring-gold-600 transition-colors"
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-espresso-900 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      {...register("lastName")}
                      placeholder="e.g. Kaur"
                      className="w-full px-4 py-3 bg-cream-50 border border-gold-500/30 rounded-xl text-espresso-950 text-sm focus:outline-none focus:border-gold-600 focus:ring-1 focus:ring-gold-600 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-espresso-900 mb-1">
                      Email Address <span className="text-gold-600">*</span>
                    </label>
                    <input
                      type="email"
                      {...register("email")}
                      placeholder="name@example.com"
                      className="w-full px-4 py-3 bg-cream-50 border border-gold-500/30 rounded-xl text-espresso-950 text-sm focus:outline-none focus:border-gold-600 focus:ring-1 focus:ring-gold-600 transition-colors"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-espresso-900 mb-1">
                      Phone Number <span className="text-gold-600">*</span>
                    </label>
                    <input
                      type="tel"
                      {...register("phone")}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 bg-cream-50 border border-gold-500/30 rounded-xl text-espresso-950 text-sm focus:outline-none focus:border-gold-600 focus:ring-1 focus:ring-gold-600 transition-colors"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-espresso-900 mb-1">
                      Which class do you wish to try?{" "}
                      <span className="text-gold-600">*</span>
                    </label>
                    <select
                      {...register("course")}
                      className="w-full px-4 py-3 bg-cream-50 border border-gold-500/30 rounded-xl text-espresso-950 text-sm focus:outline-none focus:border-gold-600 focus:ring-1 focus:ring-gold-600 transition-colors"
                    >
                      <option value="5 Month Advance Course">
                        5 Month Advance Course
                      </option>
                      <option value="3 Month Professional Course">
                        3 Month Professional Course
                      </option>
                      <option value="1 Month Cakes & Icing">
                        1 Month Cakes & Icing
                      </option>
                      <option value="Short Term Course">
                        Short Term Course
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-espresso-900 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      {...register("subject")}
                      placeholder="e.g. Batch dates, fee installment inquiry"
                      className="w-full px-4 py-3 bg-cream-50 border border-gold-500/30 rounded-xl text-espresso-950 text-sm focus:outline-none focus:border-gold-600 focus:ring-1 focus:ring-gold-600 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-espresso-900 mb-1">
                    Your Message <span className="text-gold-600">*</span>
                  </label>
                  <textarea
                    rows={4}
                    {...register("message")}
                    placeholder="Tell us about your baking background, goals, or preferred batch start time..."
                    className="w-full px-4 py-3 bg-cream-50 border border-gold-500/30 rounded-xl text-espresso-950 text-sm focus:outline-none focus:border-gold-600 focus:ring-1 focus:ring-gold-600 transition-colors resize-none"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-gold-shine w-full py-4 px-8 rounded-xl bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 text-espresso-950 font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-gold-glow hover:shadow-xl transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending Enquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Admission Enquiry</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Contact Cards & Studio Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-espresso-950 text-cream-100 rounded-3xl p-6 sm:p-8 border border-gold-500/30 shadow-luxury space-y-6">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-gold-400 font-semibold block">
                  Studio Headquarters
                </span>
                <h3 className="font-serif text-2xl font-bold text-cream-50 mt-1">
                  Visit Us in Chandigarh
                </h3>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-cream-200">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-cream-100">Address</div>
                    <div className="text-cream-300">{siteConfig.address.full}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-cream-100">Call Academy</div>
                    <a
                      href={siteConfig.contact.phoneTel}
                      className="text-gold-400 hover:text-gold-300 font-medium"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-cream-100">WhatsApp Desk</div>
                    <a
                      href={siteConfig.contact.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-300 hover:text-emerald-200 font-medium"
                    >
                      {siteConfig.contact.whatsapp}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-cream-100">Email Inquiries</div>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-cream-300 hover:text-gold-300"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-cream-100">Academy Hours</div>
                    <div className="text-cream-300">{siteConfig.contact.timings}</div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gold-500/20">
                <a
                  href={siteConfig.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-xs uppercase tracking-wider transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Instant WhatsApp Counselling</span>
                </a>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-3xl overflow-hidden border border-gold-500/30 shadow-luxury h-72 relative bg-espresso-950">
              <iframe
                src={siteConfig.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="IGBCA Chandigarh Studio Location"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

