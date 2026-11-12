"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock, User } from "lucide-react";
import { blogPosts } from "@/data/blog";
import SectionHeading from "@/components/animations/SectionHeading";
import TiltCard from "@/components/animations/TiltCard";

export default function StoriesSection() {
  return (
    <section className="py-20 md:py-28 lg:py-32 bg-[#F6E7D0] text-[#3B2314] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <SectionHeading
            label="Pastry Insights & Tips"
            title={
              <>
                Stories From Our <span className="text-gold-gradient">Kitchen</span>
              </>
            }
            description="Professional guidance, chemistry tips, and career perspectives written by the chef instructors of IGBCA."
            align="left"
            theme="cream"
            className="mb-0 max-w-xl"
          />

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#A8791F] hover:text-[#3B2314] group shrink-0"
          >
            <span>Read All Articles</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 3 Articles Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <motion.div
              key={post.slug}
              data-cursor="view"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="h-full"
            >
              <TiltCard
                maxTilt={5}
                className="bg-white border border-[#E9C9A0]/60 rounded-2xl overflow-hidden hover:border-gold-400/60 shadow-sm hover:shadow-luxury transition-all duration-300 flex flex-col h-full group"
              >
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/40 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 bg-white/95 text-[#A8791F] px-3 py-1 rounded-full text-[10px] uppercase font-semibold tracking-wider border border-[#E9C9A0]/60 shadow-sm">
                    {post.category}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-[11px] text-[#5A3A25]/70 mb-3">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#A8791F]" />
                      {post.readTime}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-[#A8791F]" />
                      {post.author}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[#3B2314] group-hover:text-[#A8791F] transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="mt-2 text-xs text-[#5A3A25] line-clamp-2 font-light leading-relaxed flex-1">
                    {post.excerpt}
                  </p>

                  <div className="mt-6 pt-4 border-t border-[#E9C9A0]/40 flex items-center justify-between text-xs text-[#A8791F] font-semibold">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1.5 hover:text-[#3B2314] transition-colors"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <span className="text-[11px] text-[#5A3A25]/70 font-normal">
                      {post.date}
                    </span>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
