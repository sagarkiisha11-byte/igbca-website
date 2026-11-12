import React from "react";
import Link from "next/link";
import { ArrowLeft, Compass, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="bg-[#FFF8EF] text-[#3B2314] min-h-[75vh] flex items-center justify-center py-20 px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-16 h-16 mx-auto rounded-full bg-gold-500/15 border border-gold-400/40 flex items-center justify-center text-[#A8791F]">
          <Compass className="w-8 h-8 animate-pulse" />
        </div>

        <div className="space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#A8791F] font-semibold block">
            404 Error • Page Not Found
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#3B2314]">
            A Recipe Not Found
          </h1>
          <p className="text-[#5A3A25] text-xs sm:text-sm font-light leading-relaxed">
            The page you are looking for may have been moved, renamed, or is
            temporarily unavailable. Let us guide you back to our culinary
            kitchen.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="btn-gold-shine w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 text-[#3B2314] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-gold-glow"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Academy Home</span>
          </Link>
          <Link
            href="/courses"
            className="w-full sm:w-auto px-6 py-3 rounded-full border border-[#E9C9A0] bg-white text-[#3B2314] hover:bg-[#F6E7D0]/50 text-xs font-semibold uppercase tracking-wider shadow-sm"
          >
            Browse Courses
          </Link>
        </div>
      </div>
    </div>
  );
}

