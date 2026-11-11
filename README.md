# IGBCA — Institute of Global Baking & Culinary Arts
### Luxury Front-End Redesign (Chandigarh, India)

A bespoke, production-grade web application engineered for **IGBCA (Institute of Global Baking & Culinary Arts)**, located at SCO 218, Sector 36D, Chandigarh. Designed to the aesthetic and functional standards of world-renowned culinary academies (such as *Le Cordon Bleu* and *École Ducasse*).

---

## 1. Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, Pure Front-End / Static Generation)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strictly Typed)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with a bespoke luxury palette (Espresso, Cream, Chocolate, Caramel Gold, Soft Blush)
- **Animation**: [Framer Motion](https://www.framer.com/motion/) (Scroll reveal, hover lift, card expansions, marquees)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Forms & Validation**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Typography**: `next/font` with *Playfair Display* (headings) & *Inter* (body)
- **SEO & Structured Data**: Built-in `EducationalOrganization`, `LocalBusiness`, and `Course` JSON-LD schemas, dynamic XML sitemap (`/sitemap.xml`), and `robots.txt`.

---

## 2. Getting Started

### Prerequisites
- Node.js 18.17+ or Node.js 20+ installed
- npm (or pnpm / yarn)

### Development Server
```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev

# 3. Open http://localhost:3000 in your browser
```

### Production Build
```bash
# Build the application
npm run build

# Start the production server
npm run start
```

---

## 3. Project Structure

```
d:\igbca websit
├── src/
│   ├── app/
│   │   ├── layout.tsx                   # Root layout, fonts, JSON-LD, global providers
│   │   ├── page.tsx                     # 18-section luxury homepage
│   │   ├── globals.css                  # Custom scrollbar, glassmorphism, gold glow
│   │   ├── sitemap.ts                   # Dynamic XML sitemap generator
│   │   ├── robots.ts                    # Search engine crawler config
│   │   ├── not-found.tsx                # Custom luxury 404 error page
│   │   ├── about/page.tsx               # Academy history, philosophy, instructor bios
│   │   ├── courses/
│   │   │   ├── page.tsx                 # 4-course hub & comparison table
│   │   │   └── [slug]/page.tsx          # Dynamic course detail pages + Course schema
│   │   ├── gallery/page.tsx             # Studio gallery with category filters & lightbox
│   │   ├── blog/
│   │   │   ├── page.tsx                 # Pastry Gazette articles listing
│   │   │   └── [slug]/page.tsx          # Editorial reading layout
│   │   ├── contact/page.tsx             # Validated enquiry form + map + studio info
│   │   ├── faq/page.tsx                 # Categorized interactive accordion
│   │   ├── privacy-policy/page.tsx      # Privacy statement template
│   │   ├── terms-conditions/page.tsx    # Enrolment terms template
│   │   └── return-cancellation-policy/  # Rescheduling & cancellation terms
│   ├── components/
│   │   ├── AnnouncementBar.tsx          # Top bar with timings, phone, address
│   │   ├── Navbar.tsx                   # Glass sticky navbar with mega-menu dropdown
│   │   ├── Footer.tsx                   # Luxury dark chocolate footer
│   │   ├── Breadcrumb.tsx               # Accessible breadcrumb trail
│   │   ├── EnquiryModal.tsx             # Popup modal (react-hook-form + zod)
│   │   ├── FloatingActions.tsx          # Floating WhatsApp, Back-to-Top, Mobile Bar
│   │   ├── CourseCurriculumGrid.tsx     # Filterable module search & grid
│   │   ├── AnimatedCounter.tsx          # Animated number counter
│   │   └── home/
│   │       ├── HeroSection.tsx          # Cinematic hero with glass stat chips
│   │       ├── MarqueeStrip.tsx         # Endless luxury gold marquee
│   │       ├── TrustStrip.tsx           # Stat counters (4 programs, 17+ workshops)
│   │       ├── AboutPreview.tsx         # Overlapping image composition + Mission tabs
│   │       ├── FeaturedCourses.tsx      # Top 3 diploma & certificate cards
│   │       ├── ShortWorkshopsSection.tsx# Horizontally scrollable 17 workshops
│   │       ├── BakeYourWaySection.tsx   # Split narrative with image collage
│   │       ├── WhyChooseSection.tsx     # 6 distinction cards
│   │       ├── InstructorsSection.tsx   # Chef Ranjana & Chef Siddhant portraits
│   │       ├── GalleryPreview.tsx       # Masonry grid with interactive lightbox
│   │       ├── AdmissionProcess.tsx     # 4-step timeline
│   │       ├── UpcomingBatches.tsx      # Data-driven batch booking block
│   │       ├── TestimonialsSection.tsx  # Alumni reviews (clearly marked placeholder)
│   │       ├── StoriesSection.tsx       # 3 kitchen journal cards
│   │       ├── NewsletterBand.tsx       # Pastry gazette subscription band
│   │       └── FinalCtaSection.tsx      # Final CTA + Google Map embed
│   ├── context/
│   │   └── EnquiryContext.tsx           # Global modal controller
│   ├── data/
│   │   ├── site.ts                      # Core business data, address, contact, stats
│   │   ├── courses.ts                   # 4 courses + 21 module specs + 17 workshops
│   │   ├── gallery.ts                   # 15 studio photographs with captions
│   │   ├── blog.ts                      # 3 technical pastry articles
│   │   ├── faq.ts                       # Categorized admissions FAQs
│   │   └── testimonials.ts              # UI-ready review placeholders
│   └── lib/
│       ├── json-ld.ts                   # Schema.org JSON-LD generators
│       └── utils.ts                     # cn() Tailwind helper
├── next.config.mjs                      # remotePatterns for igbca.in
├── tailwind.config.ts                   # Bespoke luxury palette & typography
└── tsconfig.json                        # Strict TypeScript config
```

---

## 4. How to Update Content (For Client & Admins)

All content is cleanly separated from code inside the `/src/data/` folder:

1. **Business Info & Contacts** (`/src/data/site.ts`):
   - Phone numbers, WhatsApp link, email, timings, street address
   - Instructor biographies, focal points, and credentials
   - Upcoming batch status headline and message

2. **Courses & Workshop Pricing** (`/src/data/courses.ts`):
   - Add, edit, or remove modules from the 21-module catalogue
   - Update individual workshop prices and day durations in `shortTermWorkshops`

3. **Studio Photographs** (`/src/data/gallery.ts`):
   - Add new photo URLs, titles, captions, and assign them to categories (Patisserie, Breads & Pastry, Cakes & Sugar Art, Studio Life)

4. **Journal Articles** (`/src/data/blog.ts`):
   - Add new blog posts with authors, read times, images, and content paragraphs

---

## 5. Client Pre-Deployment Checklist

Before deploying to production (Vercel, Netlify, or custom VPS), complete these action items:

- [ ] **Real Social Media URLs**: Update Facebook and Pinterest URLs in `src/data/site.ts` (currently pointing to placeholders).
- [ ] **Official Student Reviews**: Replace the placeholder reviews in `src/data/testimonials.ts` with authentic student testimonials and Google Reviews.
- [ ] **Official Legal Policy Text**: Have legal counsel review and replace the policy text in:
  - `/privacy-policy`
  - `/terms-conditions`
  - `/return-cancellation-policy`
- [ ] **Batch Dates**: When calendar dates are finalized for upcoming sessions, update `batchStatus` in `src/data/site.ts`.

---

## 6. License & Copyright

© 2026 IGBCA – Institute of Global Baking & Culinary Arts. All rights reserved.

#   i g b c a - w e b s i t e  
 