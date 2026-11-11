import { siteConfig } from "@/data/site";
import { Course } from "@/data/courses";

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["EducationalOrganization", "LocalBusiness"],
        "@id": "https://igbca.in/#organization",
        name: siteConfig.name,
        alternateName: siteConfig.shortName,
        url: "https://igbca.in",
        logo: siteConfig.logo,
        image: "https://igbca.in/wp-content/uploads/2024/08/hero-2.jpg",
        description: siteConfig.about.summary,
        telephone: siteConfig.contact.phone,
        email: siteConfig.contact.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.address.street,
          addressLocality: siteConfig.address.sector,
          addressRegion: "Chandigarh",
          postalCode: siteConfig.address.pincode,
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 30.7368097,
          longitude: 76.7538203,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
            opens: "09:00",
            closes: "16:00",
          },
        ],
        sameAs: siteConfig.socials
          .filter((s) => !s.isPlaceholder)
          .map((s) => s.url),
      },
    ],
  };
}

export function generateCourseSchema(course: Course) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.description,
    provider: {
      "@type": "EducationalOrganization",
      name: siteConfig.name,
      sameAs: "https://igbca.in",
    },
    educationalCredentialAwarded: course.certification,
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "Onsite",
      courseWorkload: course.duration,
      location: {
        "@type": "Place",
        name: `${siteConfig.shortName} Studio`,
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.address.street,
          addressLocality: siteConfig.address.sector,
          addressRegion: "Chandigarh",
          postalCode: siteConfig.address.pincode,
          addressCountry: "IN",
        },
      },
    },
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

