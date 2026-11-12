"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Search, Sparkles, BookOpen } from "lucide-react";
import { ModuleItem } from "@/data/courses";

interface CourseCurriculumGridProps {
  modules: ModuleItem[];
  courseTitle: string;
}

export default function CourseCurriculumGrid({
  modules,
  courseTitle,
}: CourseCurriculumGridProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string>("All");

  // Extract distinct tags
  const tags = ["All", ...Array.from(new Set(modules.map((m) => m.tag).filter(Boolean)))];

  const filteredModules = modules.filter((m) => {
    const matchesQuery =
      m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (m.shortDesc && m.shortDesc.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (m.fullDesc && m.fullDesc.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesTag = selectedTag === "All" || m.tag === selectedTag;

    return matchesQuery && matchesTag;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="text-xs uppercase tracking-widest text-gold-600 font-semibold block mb-1">
            Step-by-Step Curriculum
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-espresso-950">
            {courseTitle} ({modules.length} Modules)
          </h2>
        </div>

        {/* Search input if course has > 6 modules */}
        {modules.length > 5 && (
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-espresso-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search module / topic..."
              className="w-full pl-9 pr-3 py-2 bg-white border border-gold-500/25 rounded-xl text-xs text-espresso-900 placeholder-espresso-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors"
            />
          </div>
        )}
      </div>

      {/* Tag pills if distinct tags exist */}
      {tags.length > 2 && (
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 no-scrollbar">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag as string)}
              className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedTag === tag
                  ? "bg-[#3B2314] text-[#C9A24A] shadow-sm"
                  : "bg-white text-espresso-700 border border-gold-500/20 hover:border-gold-500/40"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      )}

      {/* Modules Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filteredModules.map((mod, idx) => (
          <div
            key={mod.id || idx}
            className="bg-white rounded-2xl overflow-hidden border border-gold-500/20 shadow-sm hover:shadow-luxury hover:border-gold-500/40 transition-all flex flex-col group"
          >
            {mod.image && (
              <div className="relative h-44 w-full overflow-hidden bg-cream-200">
                <Image
                  src={mod.image}
                  alt={mod.name}
                  fill
                  sizes="(max-width: 640px) 100vw, 350px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {mod.tag && (
                  <div className="absolute top-2.5 right-2.5 bg-white/95 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] uppercase tracking-wider text-[#A8791F] font-semibold border border-[#E9C9A0]/60 shadow-sm">
                    {mod.tag}
                  </div>
                )}
              </div>
            )}

            <div className="p-5 flex flex-col flex-grow">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-serif text-xs font-bold text-gold-700">
                  Module {String(idx + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-serif text-lg font-bold text-espresso-950 group-hover:text-gold-700 transition-colors">
                {mod.name}
              </h3>
              <p className="mt-2 text-xs text-espresso-700 leading-relaxed font-light">
                {mod.fullDesc || mod.shortDesc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {filteredModules.length === 0 && (
        <div className="text-center py-12 bg-white rounded-2xl border border-gold-500/20 p-6 text-espresso-700 text-sm">
          No modules found matching &ldquo;{searchQuery}&rdquo;.
        </div>
      )}
    </div>
  );
}

