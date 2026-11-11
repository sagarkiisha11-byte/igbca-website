import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Sparkles, Clock, User, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blog";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Pastry Journal & Culinary Stories | IGBCA",
  description:
    "Expert baking tips, European patisserie techniques, kitchen chemistry, and culinary career advice from the faculty at IGBCA Chandigarh.",
};

export default function BlogListingPage() {
  return (
    <div className="bg-cream-100 text-espresso-950 min-h-screen">
      {/* Header */}
      <section className="bg-espresso-950 text-cream-100 py-16 sm:py-20 relative overflow-hidden border-b border-gold-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb items={[{ name: "Stories & Journal", url: "/blog" }]} />

          <div className="max-w-3xl mt-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Pastry Gazette</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-cream-50 tracking-tight leading-tight">
              Stories From Our Kitchen
            </h1>
            <p className="mt-4 text-cream-300 text-base sm:text-lg font-light leading-relaxed">
              Explore technical pastry guides, bakery business insights, and
              pro-tips from Master Patissiers Ranjana Sukhija and Siddhant Khosla.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-3xl overflow-hidden border border-gold-500/20 shadow-sm hover:shadow-luxury hover:border-gold-500/40 transition-all flex flex-col group"
            >
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-espresso-950/90 text-gold-300 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider backdrop-blur-md border border-gold-400/30">
                  {post.category}
                </div>
              </div>

              <div className="p-6 sm:p-7 flex flex-col flex-grow">
                <div className="flex items-center gap-3 text-xs text-espresso-500 mb-3">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-gold-600" />
                    {post.readTime}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-gold-600" />
                    {post.author}
                  </span>
                </div>

                <h2 className="font-serif text-xl font-bold text-espresso-950 group-hover:text-gold-700 transition-colors line-clamp-2">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>

                <p className="mt-3 text-xs sm:text-sm text-espresso-700 leading-relaxed font-light line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>

                <div className="mt-6 pt-4 border-t border-cream-200">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-gold-700 hover:text-gold-900 group-hover:underline underline-offset-4"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

