import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  variant?: "light" | "dark";
}

export default function Breadcrumb({ items, variant = "dark" }: BreadcrumbProps) {
  const isDark = variant === "dark";

  return (
    <nav
      aria-label="Breadcrumb"
      className="inline-flex items-center gap-1.5 text-xs font-medium"
    >
      <Link
        href="/"
        className={`flex items-center gap-1 transition-colors ${
          isDark
            ? "text-cream-400 hover:text-gold-300"
            : "text-espresso-600 hover:text-gold-700"
        }`}
      >
        <Home className="w-3.5 h-3.5" />
        <span>Home</span>
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <React.Fragment key={item.url}>
            <ChevronRight
              className={`w-3.5 h-3.5 ${
                isDark ? "text-cream-500" : "text-espresso-400"
              }`}
            />
            {isLast ? (
              <span
                className={`font-semibold ${
                  isDark ? "text-gold-400" : "text-gold-700"
                }`}
                aria-current="page"
              >
                {item.name}
              </span>
            ) : (
              <Link
                href={item.url}
                className={`transition-colors ${
                  isDark
                    ? "text-cream-300 hover:text-gold-300"
                    : "text-espresso-700 hover:text-gold-800"
                }`}
              >
                {item.name}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}

