import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Instagram,
  Facebook,
  Bookmark,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";
import { siteConfig } from "@/data/site";
import { coursesList } from "@/data/courses";

export default function Footer() {
  return (
    <footer className="bg-[#4A2E1B] text-cream-200 border-t border-[#E9C9A0]/25 relative overflow-hidden">
      {/* Decorative top gold glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-gold-400/60 to-transparent" />

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-gold-400 bg-white p-0.5 shrink-0 group-hover:scale-105 transition-transform">
                <Image
                  src={siteConfig.logo}
                  alt="IGBCA Logo"
                  fill
                  sizes="48px"
                  className="object-contain rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold tracking-wider text-cream-50 group-hover:text-gold-300 transition-colors">
                  IGBCA
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-gold-400 font-medium">
                  Institute of Global Baking & Culinary Arts
                </span>
              </div>
            </Link>

            <p className="text-cream-300 text-sm leading-relaxed max-w-sm font-light">
              Chandigarh&apos;s premier culinary academy. Nurturing the next
              generation of professional bakers and pastry chefs through
              hands-on mastery, European techniques, and commercial kitchen
              standards.
            </p>

            <div className="pt-2">
              <div className="text-xs uppercase tracking-widest text-gold-400 font-semibold mb-3">
                Connect With Us
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={siteConfig.socials[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow IGBCA on Instagram"
                  className="w-10 h-10 rounded-full bg-[#3B2314] border border-[#E9C9A0]/30 flex items-center justify-center text-cream-200 hover:bg-gold-500 hover:text-espresso-950 hover:border-gold-400 hover:-translate-y-1 transition-all duration-300 shadow-sm"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Direct WhatsApp Support"
                  className="w-10 h-10 rounded-full bg-emerald-950/60 border border-emerald-500/40 flex items-center justify-center text-emerald-300 hover:bg-emerald-500 hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Programs (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-serif text-base font-semibold text-cream-100 tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold-400" />
              Signature Programs
            </h3>
            <ul className="space-y-2.5 text-sm">
              {coursesList.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/courses/${c.slug}`}
                    className="text-cream-300 hover:text-gold-300 flex items-center justify-between group transition-colors py-0.5"
                  >
                    <span className="relative">
                      {c.title}
                      <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[1px] bg-gold-400 transition-all duration-300" />
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 text-gold-400 transition-all" />
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/courses"
                  className="text-xs text-gold-400 hover:text-gold-300 font-medium uppercase tracking-wider inline-flex items-center gap-1 underline underline-offset-4"
                >
                  Explore All 17+ Workshops →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Academy Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-serif text-base font-semibold text-cream-100 tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold-400" />
              The Academy
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: "About Founders & Chefs", href: "/about" },
                { name: "Studio Gallery", href: "/gallery" },
                { name: "Stories & Pastry Journal", href: "/blog" },
                { name: "Admissions FAQ", href: "/faq" },
                { name: "Visit / Contact Us", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group relative inline-block text-cream-300 hover:text-gold-300 transition-colors py-0.5"
                  >
                    <span>{item.name}</span>
                    <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[1px] bg-gold-400 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Studio Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-serif text-base font-semibold text-cream-100 tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold-400" />
              Chandigarh Studio
            </h3>

            <div className="space-y-3 text-xs sm:text-sm text-cream-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>
                  {siteConfig.address.street}, {siteConfig.address.sector},{" "}
                  {siteConfig.address.city} – {siteConfig.address.pincode}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <a
                  href={siteConfig.contact.phoneTel}
                  className="hover:text-gold-300 transition-colors font-medium text-cream-100"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={siteConfig.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 transition-colors font-medium text-cream-100"
                >
                  {siteConfig.contact.whatsapp} (WhatsApp)
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-gold-300 transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5 text-cream-400 text-xs pt-1">
                <Clock className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>
                  {siteConfig.business.hours.daysDash} • {siteConfig.business.hours.time}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="mt-14 pt-8 border-t border-gold-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-400">
          <p>© {new Date().getFullYear()} IGBCA – Institute of Global Baking & Culinary Arts. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-6 text-cream-400">
            <Link
              href="/privacy-policy"
              className="hover:text-gold-300 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-conditions"
              className="hover:text-gold-300 transition-colors"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/return-cancellation-policy"
              className="hover:text-gold-300 transition-colors"
            >
              Return & Cancellation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
