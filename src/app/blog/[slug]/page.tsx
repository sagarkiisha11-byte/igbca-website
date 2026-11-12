import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Sparkles, Clock, User, ArrowLeft, ArrowRight, Share2 } from "lucide-react";
import { blogPosts } from "@/data/blog";
import Breadcrumb from "@/components/Breadcrumb";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) {
    return { title: "Article Not Found | IGBCA" };
  }

  return {
    title: `${post.title} | IGBCA Pastry Journal`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | IGBCA Journal`,
      description: post.excerpt,
      images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug);

  return (
    <div className="bg-cream-100 text-espresso-950 min-h-screen">
      {/* Header */}
      <section className="bg-[#F6E7D0] text-[#3B2314] py-16 sm:py-20 relative overflow-hidden border-b border-[#E9C9A0]/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb
            items={[
              { name: "Stories", url: "/blog" },
              { name: post.title, url: `/blog/${post.slug}` },
            ]}
          />

          <div className="mt-8 space-y-4">
            <span className="inline-block px-3 py-1 rounded-full bg-[#FFF8EF] text-[#A8791F] text-xs font-semibold uppercase tracking-wider border border-[#E9C9A0]/60">
              {post.category}
            </span>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3B2314] tracking-tight leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs text-[#5A3A25] pt-2 border-t border-[#E9C9A0]/40">
              <span className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#A8791F]" />
                By {post.author}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#A8791F]" />
                {post.readTime}
              </span>
              <span>•</span>
              <span>Published {post.date}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Article Body */}
      <article className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative h-80 sm:h-[420px] w-full rounded-3xl overflow-hidden border border-gold-500/30 shadow-luxury mb-12">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 1024px) 100vw, 900px"
            className="object-cover"
            priority
          />
        </div>

        {/* Lead excerpt */}
        <p className="font-serif text-lg sm:text-xl text-espresso-900 italic leading-relaxed border-l-4 border-gold-500 pl-6 my-8">
          &ldquo;{post.excerpt}&rdquo;
        </p>

        {/* Paragraphs */}
        <div className="space-y-6 text-espresso-800 text-base sm:text-lg leading-relaxed font-light">
          {post.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* Author signature box */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-white border border-gold-500/25 shadow-sm flex flex-col sm:flex-row items-center gap-6">
          <div className="w-16 h-16 rounded-full bg-[#3B2314] text-[#C9A24A] font-serif text-2xl font-bold flex items-center justify-center shrink-0 border border-gold-400/40">
            {post.author.charAt(0)}
          </div>
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif text-lg font-bold text-espresso-950">
              {post.author}
            </h4>
            <p className="text-xs text-gold-700 font-medium">
              Faculty & Master Pastry Chef, IGBCA
            </p>
            <p className="text-xs text-espresso-600 font-light max-w-md">
              Teaching hands-on commercial pastry, French lamination, and cake
              craftsmanship at our Sector 36D Chandigarh studio.
            </p>
          </div>
        </div>

        {/* Navigation & Related Posts */}
        <div className="mt-16 pt-8 border-t border-gold-500/20 flex items-center justify-between">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-espresso-900 hover:text-gold-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>All Articles</span>
          </Link>
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-gold-700 hover:text-gold-900 transition-colors"
          >
            <span>Explore Courses</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </article>
    </div>
  );
}

