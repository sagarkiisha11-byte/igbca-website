"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Send, Sparkles, Phone, MessageCircle } from "lucide-react";
import { useEnquiry } from "@/context/EnquiryContext";
import { siteConfig } from "@/data/site";

const enquirySchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().optional(),
  email: z.string().email("Please provide a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  course: z.enum([
    "5 Month Advance Course",
    "3 Month Professional Course",
    "1 Month Cakes & Icing",
    "Short Term Course",
    "General Enquiry / Studio Visit",
  ]),
  subject: z.string().optional(),
  message: z.string().min(8, "Please enter your message (at least 8 characters)"),
});

type EnquiryFormData = z.infer<typeof enquirySchema>;

export default function EnquiryModal() {
  const { isOpen, preselectedCourse, closeEnquiryModal } = useEnquiry();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<EnquiryFormData>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      course: "5 Month Advance Course",
      message: "",
    },
  });

  // If a preselected course is passed into modal, set it
  useEffect(() => {
    if (preselectedCourse) {
      if (preselectedCourse.includes("5 Month")) {
        setValue("course", "5 Month Advance Course");
      } else if (preselectedCourse.includes("3 Month")) {
        setValue("course", "3 Month Professional Course");
      } else if (preselectedCourse.includes("1 Month")) {
        setValue("course", "1 Month Cakes & Icing");
      } else if (preselectedCourse.includes("Short")) {
        setValue("course", "Short Term Course");
      }
    }
  }, [preselectedCourse, setValue]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeEnquiryModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeEnquiryModal]);

  const onSubmit = async (data: EnquiryFormData) => {
    setIsSubmitting(true);
    // Simulate brief client-side submission (Front-end only; backend integration ready)
    await new Promise((resolve) => setTimeout(resolve, 800));
    console.log("Enquiry submission (Front-end only placeholder):", data);
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleModalClose = () => {
    setIsSubmitted(false);
    reset();
    closeEnquiryModal();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="enquiry-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleModalClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-xl bg-espresso-950 border border-gold-500/30 rounded-2xl shadow-2xl p-6 sm:p-8 text-cream-100 z-10 my-8"
          >
            {/* Close Button */}
            <button
              onClick={handleModalClose}
              aria-label="Close enquiry modal"
              className="absolute top-5 right-5 text-cream-400 hover:text-gold-300 p-1.5 rounded-full hover:bg-white/5 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {isSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-gold-500/20 border border-gold-400 flex items-center justify-center text-gold-400">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3
                  id="enquiry-modal-title"
                  className="font-serif text-2xl font-bold text-cream-50"
                >
                  Thank You for Reaching Out
                </h3>
                <p className="text-cream-300 text-sm max-w-md mx-auto leading-relaxed">
                  Your enquiry has been received by our Chandigarh admissions desk.
                  Our team will review your details and contact you via phone or
                  WhatsApp with curriculum dossiers and upcoming batch schedules.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={siteConfig.contact.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Instant WhatsApp Chat
                  </a>
                  <button
                    onClick={handleModalClose}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-gold-500/40 text-cream-200 hover:text-gold-300 text-xs font-medium uppercase tracking-wider transition-colors"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <div className="flex items-center gap-2 text-gold-400 text-xs uppercase tracking-widest font-semibold mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    Admissions Desk
                  </div>
                  <h3
                    id="enquiry-modal-title"
                    className="font-serif text-2xl font-bold text-cream-50"
                  >
                    Enquire About Courses
                  </h3>
                  <p className="text-cream-300 text-xs mt-1">
                    {siteConfig.address.street}, {siteConfig.address.sector}, {siteConfig.address.city} • {siteConfig.business.hours.daysShort} {siteConfig.business.hours.time}
                  </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-cream-200 mb-1">
                        First Name <span className="text-gold-400">*</span>
                      </label>
                      <input
                        type="text"
                        {...register("firstName")}
                        placeholder="e.g. Ananya"
                        className="w-full px-3.5 py-2.5 bg-espresso-900 border border-gold-500/30 rounded-xl text-cream-100 placeholder-cream-500/50 text-sm focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-colors"
                      />
                      {errors.firstName && (
                        <p className="text-red-400 text-[11px] mt-1">
                          {errors.firstName.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-cream-200 mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        {...register("lastName")}
                        placeholder="e.g. Sharma"
                        className="w-full px-3.5 py-2.5 bg-espresso-900 border border-gold-500/30 rounded-xl text-cream-100 placeholder-cream-500/50 text-sm focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-cream-200 mb-1">
                        Email Address <span className="text-gold-400">*</span>
                      </label>
                      <input
                        type="email"
                        {...register("email")}
                        placeholder="name@example.com"
                        className="w-full px-3.5 py-2.5 bg-espresso-900 border border-gold-500/30 rounded-xl text-cream-100 placeholder-cream-500/50 text-sm focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-colors"
                      />
                      {errors.email && (
                        <p className="text-red-400 text-[11px] mt-1">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-cream-200 mb-1">
                        Phone Number <span className="text-gold-400">*</span>
                      </label>
                      <input
                        type="tel"
                        {...register("phone")}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 bg-espresso-900 border border-gold-500/30 rounded-xl text-cream-100 placeholder-cream-500/50 text-sm focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-colors"
                      />
                      {errors.phone && (
                        <p className="text-red-400 text-[11px] mt-1">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-cream-200 mb-1">
                      Which course are you interested in?{" "}
                      <span className="text-gold-400">*</span>
                    </label>
                    <select
                      {...register("course")}
                      className="w-full px-3.5 py-2.5 bg-espresso-900 border border-gold-500/30 rounded-xl text-cream-100 text-sm focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-colors"
                    >
                      <option value="5 Month Advance Course">
                        5 Month Advance Course (Flagship Diploma)
                      </option>
                      <option value="3 Month Professional Course">
                        3 Month Professional Course (Foundation)
                      </option>
                      <option value="1 Month Cakes & Icing">
                        1 Month Cakes & Icing (Fast-track)
                      </option>
                      <option value="Short Term Course">
                        Short Term Courses / Masterclasses
                      </option>
                      <option value="General Enquiry / Studio Visit">
                        General Enquiry / Visit Chandigarh Studio
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-cream-200 mb-1">
                      Your Message / Questions <span className="text-gold-400">*</span>
                    </label>
                    <textarea
                      rows={3}
                      {...register("message")}
                      placeholder="Tell us about your baking goals, batch preferences, or any questions..."
                      className="w-full px-3.5 py-2.5 bg-espresso-900 border border-gold-500/30 rounded-xl text-cream-100 placeholder-cream-500/50 text-sm focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-colors resize-none"
                    />
                    {errors.message && (
                      <p className="text-red-400 text-[11px] mt-1">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-gold-shine w-full py-3 px-6 rounded-xl bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 text-espresso-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-gold-glow hover:shadow-lg transition-all disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Submitting Request...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Course Enquiry</span>
                        </>
                      )}
                    </button>
                    <p className="text-center text-[10px] text-cream-400 mt-2">
                      Zero spam. Your details remain confidential with our admissions team.
                    </p>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

