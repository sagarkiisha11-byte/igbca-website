export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  isPlaceholder?: boolean;
}

export interface Instructor {
  id: string;
  name: string;
  role: string;
  photo: string;
  bio: string;
  credentials?: string[];
  focalPoint?: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  subTagline: string;
  logo: string;
  address: {
    street: string;
    sector: string;
    city: string;
    pincode: string;
    full: string;
  };
  contact: {
    phone: string;
    phoneTel: string;
    whatsapp: string;
    whatsappLink: string;
    email: string;
    timings: string;
  };
  socials: SocialLink[];
  googleMapsEmbedUrl: string;
  copyright: string;
  about: {
    summary: string;
    mission: string;
    vision: string;
    bakeYourWay: string;
  };
  inclusions: string[];
  eligibility: string;
  instructors: Instructor[];
  stats: {
    label: string;
    value: number;
    suffix?: string;
    description: string;
  }[];
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
  admissionSteps: {
    step: string;
    title: string;
    description: string;
  }[];
  batchStatus: {
    headline: string;
    message: string;
    note: string;
    ctaLabel: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "IGBCA – Institute of Global Baking & Culinary Arts",
  shortName: "IGBCA",
  tagline: "Discover the Art of Baking",
  subTagline:
    "Your journey to becoming a baking expert starts here. Join our classes and learn from the best!",
  logo: "https://igbca.in/wp-content/uploads/2024/05/logo-small.jpg",
  address: {
    street: "SCO 218",
    sector: "Sector 36D",
    city: "Chandigarh",
    pincode: "160036",
    full: "SCO 218, Sector 36D, Chandigarh – 160036, India",
  },
  contact: {
    phone: "+91 708-708-6567",
    phoneTel: "tel:+917087086567",
    whatsapp: "+91 82643 53936",
    whatsappLink:
      "https://wa.me/918264353936?text=Hi%20IGBCA,%20I%20would%20like%20to%20know%20about%20your%20baking%20courses",
    email: "info@igbca.in",
    timings: "Monday – Thursday, 9:00 AM – 4:00 PM",
  },
  socials: [
    {
      name: "Instagram",
      url: "https://www.instagram.com/igbca",
      icon: "Instagram",
      isPlaceholder: false,
    },
    {
      name: "Facebook",
      // TODO: Client to provide official Facebook page URL
      url: "https://facebook.com/igbca",
      icon: "Facebook",
      isPlaceholder: true,
    },
    {
      name: "Pinterest",
      // TODO: Client to provide official Pinterest page URL
      url: "https://pinterest.com/igbca",
      icon: "Bookmark",
      isPlaceholder: true,
    },
  ],
  googleMapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.344849313437!2d76.75382037624173!3d30.73680978510862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed003aa3534b%3A0xe5a363db8ef22f28!2sSCO%20218%2C%20Sector%2036-D%2C%20Chandigarh%2C%20160036!5e0!3m2!1sen!2sin!4v1715000000000!5m2!1sen!2sin",
  copyright: `© ${new Date().getFullYear()} IGBCA – Institute of Global Baking & Culinary Arts. All rights reserved.`,
  about: {
    summary:
      "Welcome to the IGBCA – Institute of Global Baking & Culinary Arts, a premier institution dedicated to nurturing the next generation of baking and culinary professionals. At IGBCA, we blend tradition with innovation to provide an exceptional educational experience in the art and science of baking and culinary arts.",
    mission:
      "Our mission is to cultivate a deep passion for baking and culinary arts in our students by providing comprehensive training and hands-on experience. We aim to produce skilled professionals who are ready to excel in the ever-evolving world of gastronomy.",
    vision:
      "We envision becoming a globally recognized academy that sets the standard for excellence in baking and culinary education. Through our rigorous programs and commitment to quality, we strive to inspire creativity, innovation, and a dedication to the craft.",
    bakeYourWay:
      "Unlock your potential with IGBCA – Institute of Global Baking & Culinary Arts. Whether starting or looking to refine your baking skills, our expert-led courses offer something for everyone. Our state-of-the-art facilities and hands-on training will help you master pastries, bread, and desserts. Join a community of passionate bakers and learn from industry professionals. At IGBCA, we inspire creativity and innovation, encouraging you to explore new techniques and flavors. Whether you dream of opening your bakery, working in a top restaurant, or baking for the joy of it, we're here to support your journey.",
  },
  inclusions: [
    "Official Chef's Jacket",
    "Comprehensive Study Material & Recipes",
    "All Commercial-Grade Premium Ingredients",
  ],
  eligibility:
    "Student must be at least 10 years old with a passion for baking. No prior professional culinary background required.",
  instructors: [
    {
      id: "ranjana-sukhija",
      name: "Ranjana Sukhija",
      role: "Founder & Master Patissier",
      photo: "https://igbca.in/wp-content/uploads/2024/05/12.jpg",
      focalPoint: "50% 18%",
      bio: "My culinary journey began at the age of 15 under my mother's watchful eye, sparking a lifelong passion for the pastry craft. By 21, I was conducting my first professional baking classes. After relocating to Uzbekistan, I expanded my international repertoire, fulfilling custom artisan orders and training under masters at a prestigious Russian baking institute. For over a decade as a mentor and artisanal baker, I cultivated modern pastry techniques before founding IGBCA in Chandigarh. Here, I dedicate my experience to nurturing the next generation of culinary artists through rigorous hands-on pedagogy, innovative recipes, and a deep appreciation for the science of baking.",
      credentials: [
        "Founder & Lead Educator",
        "Russian Baking Institute Trained",
        "Over 20+ Years Mentoring Bakers",
      ],
    },
    {
      id: "siddhant-khosla",
      name: "Siddhant Khosla",
      role: "Head Chef & Pastry Instructor",
      photo: "https://igbca.in/wp-content/uploads/2024/05/13.jpg",
      focalPoint: "50% 15%",
      bio: "Chef Siddhant leads the instructional studio at IGBCA with passion, precision, and culinary discipline. With extensive expertise in commercial pastry arts, French lamination, artisan yeast fermentation, and fine chocolate craftsmanship, he bridges classic European methods with contemporary commercial bakery operations. He works closely with each student to refine their technique, knife skills, texture balancing, and luxury dessert presentation.",
      credentials: [
        "Head Chef Instructor",
        "Artisan Bread & Viennoiserie Specialist",
        "Fine Chocolate & Confectionery Expert",
      ],
    },
  ],
  stats: [
    {
      label: "Signature Programs",
      value: 4,
      suffix: "",
      description: "Structured pathways from beginner to master pastry chef",
    },
    {
      label: "Short Workshops",
      value: 17,
      suffix: "+",
      description: "Focused masterclasses in single disciplines & patisserie",
    },
    {
      label: "Advanced Modules",
      value: 21,
      suffix: "",
      description: "Comprehensive curriculum in our flagship 5-Month Diploma",
    },
    {
      label: "Hands-on Practice",
      value: 100,
      suffix: "%",
      description: "Individual baking stations with premium commercial gear",
    },
  ],
  features: [
    {
      title: "100% Hands-on Studio Training",
      description:
        "Every student receives their own commercial preparation station and hands-on guidance for every single bake.",
      icon: "UtensilsCrossed",
    },
    {
      title: "Master Chef Mentorship",
      description:
        "Learn directly from industry veterans with European and international baking institute pedagogies.",
      icon: "Award",
    },
    {
      title: "All-Inclusive Premium Ingredients",
      description:
        "Real Belgian chocolate, pure dairy butter, imported flours, and gourmet extracts — everything is supplied.",
      icon: "Sparkles",
    },
    {
      title: "Official Chef Uniform Included",
      description:
        "Step into the professional kitchen in your custom IGBCA chef jacket, apron, and toque.",
      icon: "Shirt",
    },
    {
      title: "Open to Ages 10 & Above",
      description:
        "Welcoming passionate beginners, teenagers, enthusiastic home bakers, and career switchers alike.",
      icon: "HeartHandshake",
    },
    {
      title: "Commercial Costing & Food Safety",
      description:
        "Master recipe costing, ingredient budgeting, kitchen profitability, and international hygiene standards.",
      icon: "BadgePercent",
    },
  ],
  admissionSteps: [
    {
      step: "01",
      title: "Explore & Enquire",
      description:
        "Choose your desired course and submit an enquiry online or call our Chandigarh admissions desk.",
    },
    {
      step: "02",
      title: "Studio Counselling",
      description:
        "Visit our Sector 36D studio for a 1-on-1 consultation with our chefs, inspect our equipment, and review curricula.",
    },
    {
      step: "03",
      title: "Seat Reservation",
      description:
        "Secure your batch seat with small batch limits (ensuring personalized bench attention for every student).",
    },
    {
      step: "04",
      title: "Receive Kit & Start Baking",
      description:
        "Collect your custom chef jacket, course dossier, and step into the academy kitchen to begin your journey.",
    },
  ],
  batchStatus: {
    headline: "Admissions Open — Next Batches Starting Soon",
    message:
      "We maintain intimate batch sizes to ensure each student receives dedicated hands-on guidance and individual workstation attention. Reserve your station early.",
    note: "/* Note: Exact upcoming batch dates are updated dynamically — please enquire for current seat availability */",
    ctaLabel: "Enquire for Batch Dates",
  },
};

/**
 * Toggle whether the "UI placeholder data" disclaimer banner shows on testimonials in production.
 * Set to false for client review/presentation; keep TODO comments in code for real Google review replacements.
 */
export const SHOW_PLACEHOLDER_NOTICE = false;

