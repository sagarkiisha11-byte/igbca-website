import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/site";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import EnquiryModal from "@/components/EnquiryModal";
import { EnquiryProvider } from "@/context/EnquiryContext";
import { generateOrganizationSchema } from "@/lib/json-ld";
import Preloader from "@/components/animations/Preloader";
import SmoothScroll from "@/components/animations/SmoothScroll";
import ScrollProgress from "@/components/animations/ScrollProgress";
import CustomCursor from "@/components/animations/CustomCursor";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://igbca.in"),
  title: {
    default: "IGBCA – Institute of Global Baking & Culinary Arts | Chandigarh",
    template: "%s | IGBCA Chandigarh",
  },
  description:
    "Chandigarh's premier baking and culinary academy in Sector 36D. Hands-on diploma and certificate courses in French patisserie, artisan breads, cake craft, and chocolates.",
  keywords: [
    "IGBCA",
    "Institute of Global Baking and Culinary Arts",
    "Baking Academy Chandigarh",
    "Pastry courses Chandigarh",
    "Baking classes Sector 36 Chandigarh",
    "Chef Ranjana Sukhija",
    "Sourdough bread workshop Chandigarh",
    "French Patisserie diploma India",
    "Cake decoration classes Chandigarh",
  ],
  authors: [{ name: "IGBCA Faculty" }],
  creator: "IGBCA",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://igbca.in",
    title: "IGBCA – Institute of Global Baking & Culinary Arts | Chandigarh",
    description:
      "Transform your passion into culinary mastery. Professional hands-on baking, artisan breads, cakes, and patisserie courses.",
    siteName: "IGBCA Chandigarh",
    images: [
      {
        url: "https://igbca.in/wp-content/uploads/2024/08/hero-2.jpg",
        width: 1200,
        height: 630,
        alt: "IGBCA Institute of Global Baking & Culinary Arts Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IGBCA – Institute of Global Baking & Culinary Arts",
    description:
      "Premier hands-on pastry and culinary academy in Sector 36D, Chandigarh.",
    images: ["https://igbca.in/wp-content/uploads/2024/08/hero-2.jpg"],
  },
  icons: {
    icon: siteConfig.logo,
    apple: siteConfig.logo,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#2B1810",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = generateOrganizationSchema();

  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="bg-cream-100 text-espresso-900 font-sans min-h-screen flex flex-col selection:bg-gold-500 selection:text-white">
        <EnquiryProvider>
          <Preloader />
          <ScrollProgress />
          <SmoothScroll>
            <AnnouncementBar />
            <Navbar />
            <main className="flex-grow pb-16 sm:pb-0">{children}</main>
            <Footer />
            <FloatingActions />
            <EnquiryModal />
          </SmoothScroll>
        </EnquiryProvider>
      </body>
    </html>
  );
}

