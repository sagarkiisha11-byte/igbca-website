"use client";

import React, { useState } from "react";
import { Mail, CheckCircle2, Sparkles } from "lucide-react";

export default function NewsletterBand() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#F6E7D0] border-y border-[#E9C9A0]/60 text-[#3B2314]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 sm:p-10 border border-[#E9C9A0]/60 shadow-luxury flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-md text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#A8791F] font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Pastry Gazette</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#3B2314]">
              Receive Masterclass <span className="text-gold-gradient">Announcements</span>
            </h3>
            <p className="mt-2 text-[#5A3A25] text-xs sm:text-sm font-light">
              Get upcoming batch notices, new workshop additions, and pastry
              baking tips delivered to your inbox.
            </p>
          </div>

          <div className="w-full md:w-auto">
            {subscribed ? (
              <div className="flex items-center gap-2 text-emerald-800 bg-emerald-100/80 px-5 py-3 rounded-2xl border border-emerald-300 text-xs font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Thank you! You are on our private announcement list.</span>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-2.5 w-full md:w-[380px]"
              >
                <div className="relative flex-grow">
                  <Mail className="w-4 h-4 text-[#A8791F] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full pl-10 pr-4 py-3 bg-[#FFF8EF] border border-[#E9C9A0] rounded-xl text-xs sm:text-sm text-[#3B2314] placeholder-[#5A3A25]/50 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-gold-shine px-6 py-3 rounded-xl bg-[#3B2314] hover:bg-gold-500 text-gold-300 hover:text-[#3B2314] font-bold text-xs uppercase tracking-wider transition-all shrink-0"
                >
                  Join List
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

