"use client";

import React from "react";
import { Send } from "lucide-react";
import { useEnquiry } from "@/context/EnquiryContext";

interface CourseApplyButtonProps {
  courseTitle: string;
}

export default function CourseApplyButton({ courseTitle }: CourseApplyButtonProps) {
  const { openEnquiryModal } = useEnquiry();

  return (
    <button
      onClick={() => openEnquiryModal(courseTitle)}
      className="btn-gold-shine w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 text-espresso-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-gold-glow hover:shadow-xl transition-all"
    >
      <Send className="w-4 h-4" />
      <span>Apply for this Program</span>
    </button>
  );
}

