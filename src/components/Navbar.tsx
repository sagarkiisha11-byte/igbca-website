"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Phone,
  MessageCircle,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import { siteConfig } from "@/data/site";
import { coursesList } from "@/data/courses";
import { useEnquiry } from "@/context/EnquiryContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const pathname = usePathname();
  const { openEnquiryModal } = useEnquiry();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY > 30;
          setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setCoursesDropdownOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Courses", href: "/courses", hasDropdown: true },
    { name: "Gallery", href: "/gallery" },
    { name: "Stories", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-espresso-950/95 backdrop-blur-md shadow-luxury-lg py-2.5 border-b border-gold-500/25"
          : "bg-espresso-950/90 backdrop-blur-md py-4 border-b border-gold-500/15"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-espresso-950 rounded-lg p-1"
            aria-label="IGBCA Home"
          >
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-gold-400 bg-white p-0.5 shadow-md shrink-0 group-hover:scale-105 transition-transform duration-300">
              <Image
                src={siteConfig.logo}
                alt="IGBCA Logo"
                fill
                sizes="48px"
                className="object-contain rounded-full"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-wider text-cream-50 group-hover:text-gold-300 transition-colors">
                IGBCA
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-gold-400/90 font-medium">
                Culinary Arts Academy
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links with Sliding Gold Underline */}
          <nav
            onMouseLeave={() => setHoveredIndex(null)}
            className="hidden lg:flex items-center gap-1 xl:gap-2 relative"
          >
            {navLinks.map((link, idx) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative group"
                    onMouseEnter={() => {
                      setHoveredIndex(idx);
                      setCoursesDropdownOpen(true);
                    }}
                    onMouseLeave={() => setCoursesDropdownOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={`relative inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                        isActive
                          ? "text-gold-300 font-semibold"
                          : "text-cream-200 hover:text-gold-300"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          coursesDropdownOpen ? "rotate-180" : ""
                        }`}
                      />

                      {/* Sliding gold underline */}
                      {hoveredIndex === idx && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-gold-500 via-gold-300 to-gold-500 rounded-full"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </Link>

                    {/* Mega Dropdown Menu */}
                    <AnimatePresence>
                      {coursesDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[580px] z-50"
                        >
                          <div className="bg-espresso-950 border border-gold-500/30 rounded-2xl p-5 shadow-2xl text-cream-100">
                            <div className="flex items-center justify-between pb-3 mb-3 border-b border-gold-500/20">
                              <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold flex items-center gap-1.5">
                                <GraduationCap className="w-4 h-4" />
                                Professional Curriculum
                              </span>
                              <Link
                                href="/courses"
                                className="text-xs text-cream-300 hover:text-gold-300 flex items-center gap-1 transition-colors"
                              >
                                View All Programs
                                <ArrowRight className="w-3.5 h-3.5" />
                              </Link>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                              {coursesList.map((c) => (
                                <Link
                                  key={c.slug}
                                  href={`/courses/${c.slug}`}
                                  className="group/item flex items-start gap-3 p-2.5 rounded-xl hover:bg-gold-500/10 border border-transparent hover:border-gold-500/30 transition-all duration-200"
                                >
                                  <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-gold-500/30">
                                    <Image
                                      src={c.thumbnail}
                                      alt={c.title}
                                      fill
                                      sizes="48px"
                                      className="object-cover group-hover/item:scale-110 transition-transform duration-300"
                                    />
                                  </div>
                                  <div className="min-w-0">
                                    <h4 className="text-xs font-semibold text-cream-100 group-hover/item:text-gold-300 truncate">
                                      {c.title}
                                    </h4>
                                    <p className="text-[11px] text-cream-400 line-clamp-1 mt-0.5">
                                      {c.duration} • {c.modulesCount} Modules
                                    </p>
                                    <span className="inline-block mt-1 text-[10px] text-gold-400/90 font-medium tracking-wide">
                                      {c.badge}
                                    </span>
                                  </div>
                                </Link>
                              ))}
                            </div>

                            <div className="mt-4 pt-3 border-t border-gold-500/15 flex items-center justify-between text-xs text-cream-400 bg-gold-900/20 -mx-5 -mb-5 p-3 px-5 rounded-b-2xl">
                              <span className="flex items-center gap-1.5 text-cream-300">
                                <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                                100% Practical Stations in Sector 36D
                              </span>
                              <button
                                onClick={() => {
                                  setCoursesDropdownOpen(false);
                                  openEnquiryModal();
                                }}
                                className="text-gold-400 hover:text-gold-300 font-semibold underline underline-offset-4"
                              >
                                Need Help Choosing?
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                    isActive
                      ? "text-gold-300 font-semibold"
                      : "text-cream-200 hover:text-gold-300"
                  }`}
                >
                  <span>{link.name}</span>

                  {/* Sliding gold underline */}
                  {hoveredIndex === idx && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-gold-500 via-gold-300 to-gold-500 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA (Single Enquire Button) */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={() => openEnquiryModal()}
              className="btn-gold-shine px-6 py-2.5 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 text-espresso-950 font-bold text-xs uppercase tracking-wider shadow-gold-glow hover:shadow-xl transition-all"
            >
              Enquire Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => openEnquiryModal()}
              className="btn-gold-shine text-xs bg-gold-500 text-espresso-950 font-semibold px-3 py-1.5 rounded-full"
            >
              Enquire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              className="p-2 text-cream-100 hover:text-gold-400 transition-colors outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-espresso-950 rounded-md"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer with Staggered Entrance & Gold Divider */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden bg-espresso-950 border-b border-gold-500/25 px-5 pt-5 pb-8 overflow-y-auto max-h-[85vh]"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block text-base font-serif px-3 py-2 rounded-xl transition-colors ${
                      pathname === link.href
                        ? "bg-gold-500/20 text-gold-300 font-semibold border-l-2 border-gold-400"
                        : "text-cream-200 hover:bg-gold-500/10 hover:text-gold-300"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              {/* Thin gold divider */}
              <div className="my-3 h-[1px] bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

              {/* Mobile Courses Quick Sublinks */}
              <div className="pl-3 space-y-2">
                <span className="text-[11px] uppercase tracking-widest text-gold-400 font-semibold block">
                  Diploma & Certificate Pathways
                </span>
                {coursesList.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/courses/${c.slug}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs text-cream-300 hover:text-gold-300 py-1"
                  >
                    • {c.title}
                  </Link>
                ))}
              </div>

              {/* Mobile Contact & Action Buttons */}
              <div className="pt-5 border-t border-gold-500/20 space-y-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openEnquiryModal();
                  }}
                  className="w-full btn-gold-shine bg-gradient-to-r from-gold-500 to-gold-400 text-espresso-950 font-bold py-3 rounded-xl text-center text-xs uppercase tracking-wider shadow-gold-glow"
                >
                  Book Free Studio Counselling
                </button>

                <div className="grid grid-cols-2 gap-2.5 pt-1">
                  <a
                    href={siteConfig.contact.phoneTel}
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-espresso-900 border border-gold-500/30 text-cream-200 text-xs font-medium"
                  >
                    <Phone className="w-3.5 h-3.5 text-gold-400" />
                    Call
                  </a>
                  <a
                    href={siteConfig.contact.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-900/40 border border-emerald-500/40 text-emerald-200 text-xs font-medium"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
