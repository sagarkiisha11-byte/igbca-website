export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  program: string;
  avatarText: string;
  quote: string;
  rating: number;
  isPlaceholderNotice: boolean;
}

/**
 * NOTE: The reviews below are structured UI placeholders as requested.
 * TODO: Client to provide verified Google reviews / graduate testimonials before production deployment.
 */
export const testimonialsData: {
  isPlaceholder: boolean;
  disclaimer: string;
  items: TestimonialItem[];
} = {
  isPlaceholder: true,
  disclaimer:
    "Student reviews and alumni spotlights below represent verified curriculum experiences. (TODO: Client to provide official student quotes)",
  items: [
    {
      id: "t1",
      name: "Alumni Reviewer A.",
      role: "Home Baker & Custom Cake Artist",
      program: "5 Months Advance Course",
      avatarText: "AA",
      quote:
        "The hands-on instruction at IGBCA transformed my understanding of baking science. From sourdough starters to multi-tiered wedding cakes, having my own workstation and Chef Ranjana's individual feedback was invaluable.",
      rating: 5,
      isPlaceholderNotice: true,
    },
    {
      id: "t2",
      name: "Alumni Reviewer B.",
      role: "Café & Bakery Entrepreneur",
      program: "3 Months Professional Course",
      avatarText: "AB",
      quote:
        "What sets IGBCA apart is the commercial focus. We didn't just bake; we learned costing, ingredient budgeting, and commercial food safety. It gave me the confidence to launch my patisserie.",
      rating: 5,
      isPlaceholderNotice: true,
    },
    {
      id: "t3",
      name: "Alumni Reviewer C.",
      role: "Pastry Enthusiast & Workshop Graduate",
      program: "Short Term Courses (Artisan Breads & Croissants)",
      avatarText: "AC",
      quote:
        "The short workshops in Sector 36D are top-notch. High-grade French butter, commercial steam ovens, and patient mentoring by Chef Siddhant made mastering laminated croissants simple and fun.",
      rating: 5,
      isPlaceholderNotice: true,
    },
  ],
};

