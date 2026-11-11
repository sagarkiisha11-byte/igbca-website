import React from "react";
import Link from "next/link";
import { ArrowLeft, Compass, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="bg-espresso-950 text-cream-100 min-h-[75vh] flex items-center justify-center py-20 px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-16 h-16 mx-auto rounded-full bg-gold-500/15 border border-gold-400/40 flex items-center justify-center text-gold-400">
          <Compass className="w-8 h-8 animate-pulse" />
        </div>

        <div className="space-y-2">
          <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold block">
            404 Error • Page Not Found
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-cream-50">
            A Recipe Not Found
          </h1>
          <p className="text-cream-300 text-xs sm:text-sm font-light leading-relaxed">
            The page you are looking for may have been moved, renamed, or is
            temporarily unavailable. Let us guide you back to our culinary
            kitchen.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="btn-gold-shine w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 text-espresso-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-gold-glow"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Academy Home</span>
          </Link>
          <Link
            href="/courses"
            className="w-full sm:w-auto px-6 py-3 rounded-full border border-gold-500/40 text-cream-200 hover:text-gold-300 text-xs font-semibold uppercase tracking-wider"
          >
            Browse Courses
          </Link>
        </div>
      </div>
    </div>
  );
}

