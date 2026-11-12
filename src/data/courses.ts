import { siteConfig } from "./site";

export interface ModuleItem {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc?: string;
  image?: string;
  tag?: string;
}

export interface ShortWorkshop {
  id: string;
  name: string;
  price: string;
  priceValue?: number;
  duration: string;
  category: "Bakery" | "Patisserie" | "Confectionery" | "Culinary & Beverage";
  description: string;
  image?: string;
  popular?: boolean;
}

export interface Course {
  slug: string;
  title: string;
  subtitle: string;
  tagline: string;
  duration: string;
  level: "Beginner to Advanced" | "Intermediate" | "Foundation" | "All Levels";
  schedule: string;
  description: string;
  overview: string;
  heroImage: string;
  thumbnail: string;
  badge: string;
  feeInfo: string;
  modulesCount: number;
  inclusions: string[];
  eligibility: string;
  certification: string;
  idealFor: string[];
  modules: ModuleItem[];
}

export const sharedInclusions = [
  "Official IGBCA Chef's Jacket & Apron",
  "Complete Course Dossier & Standardized Recipe Book",
  "100% Commercial-Grade Premium Ingredients Provided",
  "All Baked Goods & Creations Packed for Take-Home",
  "Hands-on Station with Professional Commercial Ovens & Mixers",
  "Certificate of Completion upon Graduation",
];

export const sharedEligibility =
  "Student must be at least 10 years old with a passion for baking. Open to aspiring pastry chefs, enthusiastic home bakers, hobbyists, and entrepreneurs looking to start a bakery business.";

export const allModulesCatalogue: Record<string, ModuleItem> = {
  "tea-cakes": {
    id: "tea-cakes",
    name: "Tea Cakes",
    shortDesc: "Traditional & modern tea cakes with moist crumb and aromatic afternoon tea flavours.",
    fullDesc:
      "Master the art of delicate, moisture-rich tea cakes. Explore pound cakes, loaf cakes, marble sponges, citrus-glazed loaves, and spiced fruit cakes, understanding emulsion chemistry and moisture retention.",
    image: "https://igbca.in/wp-content/uploads/2024/07/IMG-20230216-WA0005.jpg",
    tag: "Baking Essentials",
  },
  cookies: {
    id: "cookies",
    name: "Cookies",
    shortDesc: "From classic American chocolate chip to delicate European shortbread with perfect crisp and chew.",
    fullDesc:
      "Explore the science of cookie spreads, crisp vs chewy textures, piped Viennese sablés, macaroons, biscotti, and filled gourmet cookies with precise fat-to-flour ratios.",
    image: "https://igbca.in/wp-content/uploads/2024/07/cookies.jpg",
    tag: "Confectionery",
  },
  "tarts-pies": {
    id: "tarts-pies",
    name: "Tarts & Pies",
    shortDesc: "Sweet & savoury, buttery flaky crusts, blind baking, fruit curds, and rich ganache fillings.",
    fullDesc:
      "Master pâte brisée, pâte sucrée, and pâte sablée. Learn precise blind baking, fluted shells, fruit tarte tatin, chocolate ganache tarts, and savoury quiches.",
    image: "https://igbca.in/wp-content/uploads/2024/07/tart.jpg",
    tag: "Patisserie",
  },
  "continental-salads": {
    id: "continental-salads",
    name: "Continental, Salads & Beverages",
    shortDesc: "Continental culinary classics, artisanal dressings, balanced savoury platters, and craft café beverages.",
    fullDesc:
      "Learn European savory balance, signature vinaigrettes, fresh compound salads, gourmet sandwiches, pasta foundations, and complementary cafe beverage pairings.",
    image: "https://igbca.in/wp-content/uploads/2024/07/conti-salad.jpg",
    tag: "Culinary Arts",
  },
  cheesecakes: {
    id: "cheesecakes",
    name: "Cheese Cakes",
    shortDesc: "Rich creamy baked New York cheesecakes & velvety set cheesecakes with smooth crack-free finishes.",
    fullDesc:
      "Uncover water bath control, temperature curves for crack-free baked cheesecakes, artisanal crumb crusts, gelatine setting mechanics, and vibrant fruit compotes.",
    image: "https://igbca.in/wp-content/uploads/2024/07/cheese-cake.jpg",
    tag: "Desserts",
  },
  entremets: {
    id: "entremets",
    name: "Entremets & Petit Gateaux",
    shortDesc: "Elegant French layered mousse cakes, mirror glazes, crisp inserts, and intricate texture pairings.",
    fullDesc:
      "Delve into world-class French patisserie architecture: dacquoise, bavarois, fruit crémeux, crunchy praline feuilletine layers, and glass-like mirror glazes.",
    image: "https://igbca.in/wp-content/uploads/2024/06/PHOTO-2023-02-15-21-19-25.jpg",
    tag: "French Patisserie",
  },
  "artisan-breads": {
    id: "artisan-breads",
    name: "Plain & Artisan Breads",
    shortDesc: "Rustic sourdough, ciabatta, focaccia, baguettes, and everyday sandwich breads through fermentation.",
    fullDesc:
      "Understand yeast fermentation, hydration levels, gluten development, preferments (poolish/biga), score marks, and steam baking for crackling crusts and open crumbs.",
    image: "https://igbca.in/wp-content/uploads/2024/07/Artisan-Plain-Breads.jpg",
    tag: "Boulangerie",
  },
  "baked-savouries": {
    id: "baked-savouries",
    name: "Baked Savouries",
    shortDesc: "Quiches, savoury pies, filled hand-turnovers, and balancing savoury fillings with crisp pastry.",
    fullDesc:
      "Create high-end bakery savory items including classic French quiche Lorraine, vegetable pies, puff pastries with spiced meats/cheeses, and artisanal turnovers.",
    image: "https://igbca.in/wp-content/uploads/2024/07/Baked-Savouries.jpg",
    tag: "Savoury Baking",
  },
  "frozen-desserts": {
    id: "frozen-desserts",
    name: "Frozen Desserts",
    shortDesc: "Artisanal ice creams, refreshing fruit sorbets, parfaits, and frozen mousse gateaux.",
    fullDesc:
      "The science of churned and still-frozen desserts: ice crystal suppression, sugar refraction, gelato vs churned creams, and seasonal fruit granitas.",
    image: "https://igbca.in/wp-content/uploads/2024/07/Frozen-Desserts.jpg",
    tag: "Gelato & Sorbets",
  },
  barista: {
    id: "barista",
    name: "Barista Skills & Beverages",
    shortDesc: "Espresso extraction, milk texturing, latte art, coffee bean origins, and café beverage creation.",
    fullDesc:
      "Dial in espresso grinds, extract golden crema, steam velvety micro-foam for latte art, and craft signature cafe mocktails and hot chocolate infusions.",
    image: "https://igbca.in/wp-content/uploads/2024/06/5.webp",
    tag: "Beverage Craft",
  },
  "nutritional-baking": {
    id: "nutritional-baking",
    name: "Nutritional & Healthy Baking",
    shortDesc: "Healthy alternative flours, natural unrefined sweeteners, vegan bakes, and gluten-conscious recipes.",
    fullDesc:
      "Bake guilt-free pastries using whole-grains (oat, almond, ragi), refined sugar substitutes (jaggery, dates), and vegan butter alternatives without compromising texture.",
    image: "https://igbca.in/wp-content/uploads/2024/07/Nutritional-Baking.jpg",
    tag: "Health & Wellness",
  },
  viennoiseries: {
    id: "viennoiseries",
    name: "Puffs & Viennoiseries",
    shortDesc: "Classic laminated dough, flaky butter croissants, pain au chocolat, Danish pastry, and brioche.",
    fullDesc:
      "The pinnacle of pastry technique: single and book turns, butter block temperature locking, lamination layer definition, proofing, and honeycomb cross-sections.",
    image: "https://igbca.in/wp-content/uploads/2024/07/Puffs-Viennoseries.jpg",
    tag: "French Lamination",
  },
  "cakes-icings": {
    id: "cakes-icings",
    name: "Cakes & Modern Icings",
    shortDesc: "Baking tender sponges, structural stacking, sharp ganache edges, and smooth buttercream finishes.",
    fullDesc:
      "Master cake sponge varieties, crumb coating, Italian and Swiss meringue buttercreams, chocolate drip control, and contemporary floral and palette-knife decorations.",
    image: "https://igbca.in/wp-content/uploads/2024/07/Cakes-Icings.jpg",
    tag: "Cake Artistry",
  },
  "chocolate-display": {
    id: "chocolate-display",
    name: "Chocolate Display & Sculptures",
    shortDesc: "Tempering techniques, structural moulding, show-stopping chocolate centerpieces and textures.",
    fullDesc:
      "Explore beta crystal chocolate tempering, spray gun velvet texturing, silicone mould casting, edible ribbons, and magnificent chocolate showpiece assembly.",
    image: "https://igbca.in/wp-content/uploads/2024/08/IMG-20240801-WA0001.jpg",
    tag: "Chocolate Art",
  },
  "plated-desserts": {
    id: "plated-desserts",
    name: "Plated Fine Dining Desserts",
    shortDesc: "Component composition, texture pairing, quenelles, edible tuiles, and Michelin-style plating.",
    fullDesc:
      "Design restaurant-calibre dessert courses: balancing crunch, tartness, sweetness, temperature contrast, sauces, crisps, and abstract modern plate architecture.",
    image: "https://igbca.in/wp-content/uploads/2024/06/PHOTO-2023-03-23-00-58-322.jpg",
    tag: "Fine Dining",
  },
  "wedding-cakes": {
    id: "wedding-cakes",
    name: "Wedding Cakes & Fondant Designs",
    shortDesc: "Multi-tier structural dowelling, flawless fondant draping, sugar florals, and celebration detailing.",
    fullDesc:
      "Learn internal dowelling physics for multi-tiered wedding cakes, wafer paper florals, sharp fondant corners, royal icing lace work, and transport logistics.",
    image: "https://igbca.in/wp-content/uploads/2024/07/rainbow-fondant-cake.png",
    tag: "Celebration Cakes",
  },
  "choux-pastry": {
    id: "choux-pastry",
    name: "Choux Pastry (Pâte à Choux)",
    shortDesc: "Crisp éclairs, craquelin cream puffs, Paris-Brest, gougères, and silky diplomat cream fillings.",
    fullDesc:
      "Double-cook choux dough on the stove, pipe uniform éclairs, crown with crunchy craquelin, and pipe smooth mousselines and praline crémeux.",
    image: "https://igbca.in/wp-content/uploads/2024/06/PHOTO-2023-07-13-17-55-354.jpg",
    tag: "Classic French",
  },
  "brownies-blondies": {
    id: "brownies-blondies",
    name: "Brownies, Blondies & Lava Cakes",
    shortDesc: "Fudgy crinkly brownies, browned-butter blondies, and molten chocolate lava cakes.",
    fullDesc:
      "Understand sugar-egg foam aeration for paper-thin shiny crinkle crusts, dense fudgy centers, golden butterscotch blondies, and molten oozing centers.",
    image: "https://igbca.in/wp-content/uploads/2024/07/Brownies-Blondies-Lava-Cakes.jpg",
    tag: "Comfort Baking",
  },
  "chocolates-pralines": {
    id: "chocolates-pralines",
    name: "Chocolates & Pralines",
    shortDesc: "The art of sculpting imagination into chocolate reality: bonbons, ganaches, and cocoa butter painting.",
    fullDesc:
      "Hand-paint polycarbonate moulds with coloured cocoa butter, shell thin chocolate bonbons, infuse fruit caramels and nutty pralines, and seal with a mirror snap.",
    image: "https://igbca.in/wp-content/uploads/2024/08/IMG-20240801-WA0001.jpg",
    tag: "Chocolaterie",
  },
  "budgeting-costing": {
    id: "budgeting-costing",
    name: "Budgeting, Costing & Bakery Business",
    shortDesc: "Yield formulas, ingredient pricing sheets, labor overheads, retail margins, and profitability.",
    fullDesc:
      "Turn your culinary talent into a profitable business. Learn how to accurately calculate food costs, account for shrinkage, price cakes, and market a bakery brand.",
    image: "https://igbca.in/wp-content/uploads/2024/06/12.webp",
    tag: "Bakery Business",
  },
  "hygiene-safety": {
    id: "hygiene-safety",
    name: "Hygiene & Food Safety Standards",
    shortDesc: "FSSAI compliance, sanitization protocols, cross-contamination prevention, and kitchen storage rules.",
    fullDesc:
      "Maintain the gold standard in food safety. Master temperature danger zones, allergen handling, pest prevention, commercial kitchen cleaning schedules, and audits.",
    image: "https://igbca.in/wp-content/uploads/2024/06/13.webp",
    tag: "Kitchen Standards",
  },

  // 1-month course specific modules
  "sponge-baking": {
    id: "sponge-baking",
    name: "Sponge Baking Mastery",
    shortDesc: "Fluffy vanilla genoise, rich chocolate mud cake, red velvet, and airy chiffon bases.",
    fullDesc:
      "Learn egg foaming techniques, gluten control, oil vs butter crumb, syrup soaks, and baking even, level sponge tiers with zero doming or sinking.",
    image: "https://igbca.in/wp-content/uploads/2024/07/sponge-cake-16.png",
    tag: "Sponge Chemistry",
  },
  "cream-cakes": {
    id: "cream-cakes",
    name: "Fresh Cream & Gateaux",
    shortDesc: "Black Forest gateaux, fresh fruit cakes, whipped cream stabilization, and layered assembling.",
    fullDesc:
      "Work with non-dairy and dairy dairy whipping creams, stabilize fillings in humid Indian climates, pipe clean borders, rosettes, and layer seasonal fruit inserts.",
    image: "https://igbca.in/wp-content/uploads/2024/07/88014.png",
    tag: "Gateaux",
  },
  "chocolate-cakes": {
    id: "chocolate-cakes",
    name: "Decadent Chocolate Cakes",
    shortDesc: "Truffle cakes, dark ganache tortes, mirror glazed tortes, and chocolate drip finishes.",
    fullDesc:
      "Create rich chocolate ganaches with varying ratios (1:1, 2:1), sharp scraper edges, chocolate curls, and glossy drip finishes on chilled cakes.",
    image: "https://igbca.in/wp-content/uploads/2024/07/84499.png",
    tag: "Chocolate Cakes",
  },
  "fondant-cakes": {
    id: "fondant-cakes",
    name: "Novelty & Fondant Cakes",
    shortDesc: "Fondant kneading, drape coating, embossed textures, figurine modeling, and celebration themes.",
    fullDesc:
      "Master rolling out sugar paste without tearing or elephant skin, creating sharp 90-degree edges over ganache undercoats, and hand-crafting 3D toppers.",
    image: "https://igbca.in/wp-content/uploads/2024/07/rainbow-fondant-cake.png",
    tag: "Fondant Art",
  },
};

export const coursesList: Course[] = [
  {
    slug: "5-months-advance",
    title: "5 Months Advance Course",
    subtitle: "Diploma in Professional Baking & Patisserie Arts",
    tagline:
      "Comprehensive baking and pastry arts program covering advanced techniques and industry standards.",
    duration: "5 Months",
    level: "Beginner to Advanced",
    schedule: `${siteConfig.business.hours.daysLong} • ${siteConfig.business.hours.time}`,
    description:
      "Comprehensive baking and pastry arts program covering advanced techniques and industry standards.",
    overview:
      "Our premier 5-Month Advance Course is an exhaustive, career-transforming culinary program crafted for those who want to master French and international patisserie, artisan bread making, chocolate work, and commercial bakery operations. Spanning 21 in-depth modules, this course takes you from fundamental mixing science to high-concept plated desserts, wedding cake architectures, commercial costing, and kitchen hygiene.",
    heroImage: "https://igbca.in/wp-content/uploads/2024/05/5month.jpg",
    thumbnail: "https://igbca.in/wp-content/uploads/2024/05/5month.jpg",
    badge: "Flagship Diploma",
    feeInfo: "Enquire for Fee Structure & Flexible Installments",
    modulesCount: 21,
    inclusions: sharedInclusions,
    eligibility: sharedEligibility,
    certification: "IGBCA Master Diploma in Baking & Culinary Arts",
    idealFor: [
      "Aspiring bakery owners & café entrepreneurs",
      "Career switchers entering professional patisserie",
      "Home bakers wanting to upscale into commercial production",
      "Culinary students seeking specialized European pastry training",
    ],
    modules: [
      allModulesCatalogue["tea-cakes"],
      allModulesCatalogue["cookies"],
      allModulesCatalogue["tarts-pies"],
      allModulesCatalogue["continental-salads"],
      allModulesCatalogue["cheesecakes"],
      allModulesCatalogue["entremets"],
      allModulesCatalogue["artisan-breads"],
      allModulesCatalogue["baked-savouries"],
      allModulesCatalogue["frozen-desserts"],
      allModulesCatalogue["barista"],
      allModulesCatalogue["nutritional-baking"],
      allModulesCatalogue["viennoiseries"],
      allModulesCatalogue["cakes-icings"],
      allModulesCatalogue["chocolate-display"],
      allModulesCatalogue["plated-desserts"],
      allModulesCatalogue["wedding-cakes"],
      allModulesCatalogue["choux-pastry"],
      allModulesCatalogue["brownies-blondies"],
      allModulesCatalogue["chocolates-pralines"],
      allModulesCatalogue["budgeting-costing"],
      allModulesCatalogue["hygiene-safety"],
    ],
  },
  {
    slug: "3-months-professional",
    title: "3 Months Professional Course",
    subtitle: "Certificate in Foundation & Commercial Baking",
    tagline:
      "Intensive baking course focusing on foundational skills and essential recipes.",
    duration: "3 Months",
    level: "Foundation",
    schedule: `${siteConfig.business.hours.daysLong} • ${siteConfig.business.hours.time}`,
    description:
      "Intensive baking course focusing on foundational skills and essential recipes.",
    overview:
      "Designed for students seeking a robust, accelerated immersion into professional baking. Over 3 rigorous months and 11 focused modules, you will develop confident muscle memory for artisan yeast breads, flaky laminated puff pastries, classic cakes, cookies, and chocolate confections, backed by crucial bakery costing and food safety know-how.",
    heroImage: "https://igbca.in/wp-content/uploads/2024/07/Puffs-Viennoseries.jpg",
    thumbnail: "https://igbca.in/wp-content/uploads/2024/07/Puffs-Viennoseries.jpg",
    badge: "Most Popular",
    feeInfo: "Enquire for Batch Fees & Schedule",
    modulesCount: 11,
    inclusions: sharedInclusions,
    eligibility: sharedEligibility,
    certification: "IGBCA Professional Baking Certificate",
    idealFor: [
      "Home bakers stepping into custom orders",
      "Anyone seeking a solid 3-month foundation without a 5-month commitment",
      "Young enthusiasts exploring culinary as a career path",
    ],
    modules: [
      allModulesCatalogue["tea-cakes"],
      allModulesCatalogue["cookies"],
      allModulesCatalogue["tarts-pies"],
      allModulesCatalogue["cheesecakes"],
      allModulesCatalogue["artisan-breads"],
      allModulesCatalogue["baked-savouries"],
      allModulesCatalogue["viennoiseries"],
      allModulesCatalogue["cakes-icings"],
      allModulesCatalogue["budgeting-costing"],
      allModulesCatalogue["hygiene-safety"],
      allModulesCatalogue["chocolates-pralines"],
    ],
  },
  {
    slug: "1-month-cakes-icings",
    title: "1 Month Cakes & Icings",
    subtitle: "Specialized Cake Decorating & Sponge Mastery",
    tagline:
      "Fast-track baking course for mastering core techniques and popular baked goods.",
    duration: "1 Month (4 Weeks)",
    level: "All Levels",
    schedule: `${siteConfig.business.hours.daysLong} • ${siteConfig.business.hours.time}`,
    description:
      "Fast-track baking course for mastering core techniques and popular baked goods.",
    overview:
      "A laser-focused 4-week certificate specifically dedicated to the art of sponges, gateaux, modern frosting styles, chocolate truffle cakes, sharp ganache edges, and multi-tier wedding cake architectures. Ideal for those who want to start their own custom cake studio.",
    heroImage: "https://igbca.in/wp-content/uploads/2024/05/small.jpg",
    thumbnail: "https://igbca.in/wp-content/uploads/2024/05/small.jpg",
    badge: "Specialized Bootcamp",
    feeInfo: "₹30,000 Total (All Materials Included)",
    modulesCount: 5,
    inclusions: sharedInclusions,
    eligibility: sharedEligibility,
    certification: "IGBCA Certificate in Cake Baking & Sugarcraft",
    idealFor: [
      "Bakers focusing exclusively on celebration & wedding cakes",
      "Beginners wanting to produce bakery-quality cakes in 4 weeks",
      "Students looking to build an online cake business on Instagram",
    ],
    modules: [
      allModulesCatalogue["sponge-baking"],
      allModulesCatalogue["cream-cakes"],
      allModulesCatalogue["chocolate-cakes"],
      allModulesCatalogue["fondant-cakes"],
      allModulesCatalogue["wedding-cakes"],
    ],
  },
  {
    slug: "short-term-courses",
    title: "Short Term Courses & Workshops",
    subtitle: "Focused Hands-on Modules for Skill Enhancement",
    tagline:
      "Specialized workshops for skill enhancement and culinary creativity.",
    duration: "2 Days to 4 Weeks",
    level: "All Levels",
    schedule: "Flexible weekday timings • Batch-based",
    description:
      "Specialized workshops for skill enhancement and culinary creativity.",
    overview:
      "Choose from 17 handcrafted culinary masterclasses. Whether you want to master authentic French sourdoughs in 7 days, crack-free cheesecakes in 2 days, or delicate chocolate pralines in 3 days, our modular workshops allow you to tailor your culinary learning around your schedule.",
    heroImage: "https://igbca.in/wp-content/uploads/2024/07/Brownies-Blondies-Lava-Cakes.jpg",
    thumbnail: "https://igbca.in/wp-content/uploads/2024/07/Brownies-Blondies-Lava-Cakes.jpg",
    badge: "17+ Workshops",
    feeInfo: "Starting from ₹7,000 (Individual Module Pricing)",
    modulesCount: 17,
    inclusions: [
      "All ingredients & materials for the selected workshop",
      "Recipe dossier with precise baker's percentages",
      "Take-home packaging for all creations",
      "Certificate of Workshop Completion",
    ],
    eligibility: sharedEligibility,
    certification: "IGBCA Workshop Completion Certificate",
    idealFor: [
      "Hobbyists wanting to perfect a specific dessert or bread",
      "Busy professionals looking for short weekend/weekday intensives",
      "Bakery owners upskilling in a single specialized discipline",
    ],
    modules: [
      allModulesCatalogue["tea-cakes"],
      allModulesCatalogue["cookies"],
      allModulesCatalogue["tarts-pies"],
      allModulesCatalogue["continental-salads"],
      allModulesCatalogue["cheesecakes"],
      allModulesCatalogue["entremets"],
      allModulesCatalogue["artisan-breads"],
      allModulesCatalogue["baked-savouries"],
      allModulesCatalogue["frozen-desserts"],
      allModulesCatalogue["barista"],
      allModulesCatalogue["nutritional-baking"],
      allModulesCatalogue["viennoiseries"],
      allModulesCatalogue["cakes-icings"],
      allModulesCatalogue["plated-desserts"],
      allModulesCatalogue["wedding-cakes"],
      allModulesCatalogue["brownies-blondies"],
      allModulesCatalogue["chocolates-pralines"],
    ],
  },
];

export const shortTermWorkshops: ShortWorkshop[] = [
  {
    id: "tea-cakes-ws",
    name: "Tea Cakes",
    price: "₹8,000",
    priceValue: 8000,
    duration: "3 Days",
    category: "Bakery",
    description: "Traditional & modern tea cakes, moist crumb textures, and fragrant flavours for afternoon tea.",
    image: "https://igbca.in/wp-content/uploads/2024/07/IMG-20230216-WA0005.jpg",
  },
  {
    id: "cookies-ws",
    name: "Cookies",
    price: "₹12,500",
    priceValue: 12500,
    duration: "6 Days",
    category: "Confectionery",
    description: "From classic American chocolate chip to delicate European shortbread, achieving perfect crispness.",
    image: "https://igbca.in/wp-content/uploads/2024/07/cookies.jpg",
  },
  {
    id: "tarts-pies-ws",
    name: "Tarts & Pies",
    price: "₹7,500",
    priceValue: 7500,
    duration: "3 Days",
    category: "Patisserie",
    description: "Sweet and savoury tart crusts, blind baking techniques, fruit curd fillings, and blind-baked pies.",
    image: "https://igbca.in/wp-content/uploads/2024/07/tart.jpg",
  },
  {
    id: "continental-salads-ws",
    name: "Continental & Salads",
    price: "₹15,500",
    priceValue: 15500,
    duration: "9 Days",
    category: "Culinary & Beverage",
    description: "Continental dishes, fresh gourmet salads, balanced dressings, and elegant bistro presentation.",
    image: "https://igbca.in/wp-content/uploads/2024/07/conti-salad.jpg",
  },
  {
    id: "cheese-cakes-ws",
    name: "Cheese Cakes",
    price: "₹7,000",
    priceValue: 7000,
    duration: "2 Days",
    category: "Desserts" as any,
    description: "Rich creamy baked New York cheesecakes, chilled fruit cheesecakes, and smooth crack-free tops.",
    image: "https://igbca.in/wp-content/uploads/2024/07/cheese-cake.jpg",
    popular: true,
  },
  {
    id: "entremets-ws",
    name: "Entremets & Petit Gateaux",
    price: "Price on request",
    priceValue: 0,
    duration: "Inquire for Dates",
    category: "Patisserie",
    description: "Elegant layered French mousse cakes, glossy mirror glazes, velvet sprays, and intricate flavours.",
    image: "https://igbca.in/wp-content/uploads/2024/06/PHOTO-2023-02-15-21-19-25.jpg",
  },
  {
    id: "artisan-breads-ws",
    name: "Plain & Artisan Breads",
    price: "₹12,000",
    priceValue: 12000,
    duration: "7 Days",
    category: "Bakery",
    description: "Rustic European sourdoughs, ciabatta, focaccia, baguettes, and everyday sandwich breads.",
    image: "https://igbca.in/wp-content/uploads/2024/07/Artisan-Plain-Breads.jpg",
    popular: true,
  },
  {
    id: "baked-savouries-ws",
    name: "Baked Savouries",
    price: "₹8,500",
    priceValue: 8500,
    duration: "3 Days",
    category: "Bakery",
    description: "Savory quiches, meat/vegetable pies, hand-tarts, seasoned fillings, and golden flaky pastries.",
    image: "https://igbca.in/wp-content/uploads/2024/07/Baked-Savouries.jpg",
  },
  {
    id: "frozen-desserts-ws",
    name: "Frozen Desserts",
    price: "₹12,500",
    priceValue: 12500,
    duration: "3 Days",
    category: "Desserts" as any,
    description: "Artisanal ice creams, sorbets, parfaits, and frozen mousse desserts with natural fruits.",
    image: "https://igbca.in/wp-content/uploads/2024/07/Frozen-Desserts.jpg",
  },
  {
    id: "barista-ws",
    name: "Barista Skills",
    price: "₹11,500",
    priceValue: 11500,
    duration: "6 Days",
    category: "Culinary & Beverage",
    description: "Master espresso extraction, milk frothing & texturing, latte art, coffee bean profiles, and cafe beverages.",
    image: "https://igbca.in/wp-content/uploads/2024/06/5.webp",
  },
  {
    id: "nutritional-baking-ws",
    name: "Nutritional Baking",
    price: "₹9,500",
    priceValue: 9500,
    duration: "3 Days",
    category: "Bakery",
    description: "Healthy flour alternatives, low-GI natural sweeteners, vegan bakes, and guilt-free desserts.",
    image: "https://igbca.in/wp-content/uploads/2024/07/Nutritional-Baking.jpg",
  },
  {
    id: "puffs-viennoiseries-ws",
    name: "Puffs & Viennoiseries",
    price: "₹12,000",
    priceValue: 12000,
    duration: "5 Days",
    category: "Patisserie",
    description: "Flaky puff pastry, French butter croissants, pains au chocolat, and laminated Danish pastries.",
    image: "https://igbca.in/wp-content/uploads/2024/07/Puffs-Viennoseries.jpg",
    popular: true,
  },
  {
    id: "cakes-icings-ws",
    name: "Cakes & Icings",
    price: "₹30,000",
    priceValue: 30000,
    duration: "4 Weeks",
    category: "Patisserie",
    description: "Complete cake sponge baking, stacking, sharp ganache edges, and piping techniques.",
    image: "https://igbca.in/wp-content/uploads/2024/07/Cakes-Icings.jpg",
    popular: true,
  },
  {
    id: "plated-desserts-ws",
    name: "Plated Desserts",
    price: "₹15,000",
    priceValue: 15000,
    duration: "6 Days",
    category: "Patisserie",
    description: "Fine dining restaurant presentation, multi-component flavor design, quenelles, and crisps.",
    image: "https://igbca.in/wp-content/uploads/2024/06/PHOTO-2023-03-23-00-58-322.jpg",
  },
  {
    id: "wedding-cakes-ws",
    name: "Wedding Cakes & Fondant",
    price: "₹25,000",
    priceValue: 25000,
    duration: "10 Days",
    category: "Patisserie",
    description: "Tiered cake structure, sharp fondant draping, sugar flowers, and luxury celebratory detailing.",
    image: "https://igbca.in/wp-content/uploads/2024/07/rainbow-fondant-cake.png",
  },
  {
    id: "brownies-blondies-ws",
    name: "Brownies, Blondies & Lava Cakes",
    price: "₹7,500",
    priceValue: 7500,
    duration: "2 Days",
    category: "Bakery",
    description: "Fudgy crinkly-top brownies, rich butterscotch blondies, and warm molten chocolate lava cakes.",
    image: "https://igbca.in/wp-content/uploads/2024/07/Brownies-Blondies-Lava-Cakes.jpg",
    popular: true,
  },
  {
    id: "chocolates-pralines-ws",
    name: "Chocolates & Pralines",
    price: "₹12,000",
    priceValue: 12000,
    duration: "3 Days",
    category: "Confectionery",
    description: "The art of sculpting imagination into chocolate reality: tempering, molded bonbons, and artisan pralines.",
    image: "https://igbca.in/wp-content/uploads/2024/08/IMG-20240801-WA0001.jpg",
  },
];

