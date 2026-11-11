export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  image: string;
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "advanced-baking-techniques-elevate-your-skills",
    title: "Advanced Baking Techniques: Elevate Your Skills with IGBCA",
    excerpt:
      "From mastering beta-crystal chocolate tempering to the science of lamination layers, explore the technical disciplines that bridge home baking and master pastry arts.",
    category: "Culinary Techniques",
    readTime: "5 min read",
    date: "August 2024",
    author: "Ranjana Sukhija",
    image: "https://igbca.in/wp-content/uploads/2024/05/5month.jpg",
    content: [
      "Baking is both an artisanal craft and an exact chemical science. While hobbyists rely on intuition, professional pastry chefs rely on temperature curves, moisture control, and structural emulsification.",
      "In our advanced diploma curriculum at IGBCA, students learn why room temperature butter matters down to 18°C, how moisture migration affects puff pastry lamination, and the role of hydration in sourdough crumb structures.",
      "By understanding the underlying chemistry rather than just following steps, you gain the creative freedom to formulate your own signature pastry collections, optimize bakery production yields, and deliver restaurant-standard consistency.",
    ],
  },
  {
    slug: "culinary-arts-7-facts-every-aspiring-chef-should-know",
    title: "Culinary Arts: 7 Facts Every Aspiring Chef Should Know",
    excerpt:
      "Considering a career in the baking and culinary industry? Here are 7 fundamental truths regarding kitchen discipline, commercial costing, and creative evolution.",
    category: "Career Insights",
    readTime: "6 min read",
    date: "July 2024",
    author: "Siddhant Khosla",
    image: "https://igbca.in/wp-content/uploads/2024/05/4592.jpg",
    content: [
      "Stepping into a commercial pastry kitchen is an exhilarating journey, but it requires preparation, stamina, and mental clarity. Here are the 7 pillars every aspiring chef should internalize:",
      "1. Technique trumps tools: Expensive equipment cannot salvage flawed dough fermentation or improperly folded meringue.",
      "2. Temperature is your primary ingredient: From room-temperature eggs to chilled marble benches, pastry is temperature-governed.",
      "3. Costing dictates longevity: You must know the exact food cost of a single chocolate truffle down to the gram.",
      "4. Hygiene is non-negotiable: Professional kitchens run on disciplined sanitization and rigorous food safety protocols.",
      "5. Muscle memory takes deliberate repetition: Piping fifty identical macarons trains your hands in ways theory never can.",
      "6. Plating is visual storytelling: Texture contrast, negative space, and colour palette define modern dining aesthetics.",
      "7. Never stop learning: The culinary world evolves continuously with vegan alternatives, modern hydrocolloids, and global fusion.",
    ],
  },
  {
    slug: "top-5-baking-tricks-for-perfect-pastries-every-time",
    title: "Top 5 Baking Tricks for Perfect Pastries Every Time",
    excerpt:
      "Simple, professional adjustments you can make in your daily baking to eliminate sunken cakes, soggy bottoms, and uneven rises.",
    category: "Tips & Tutorials",
    readTime: "4 min read",
    date: "June 2024",
    author: "IGBCA Faculty",
    image: "https://igbca.in/wp-content/uploads/2024/07/tart.jpg",
    content: [
      "Whether you are baking a rustic weekend quiche or a delicate entremet, small professional habits yield transformative results:",
      "1. Weigh, don't scoop: Measuring flour by volume (cups) can introduce up to 25% error due to compaction. Always use a digital gram scale.",
      "2. Oven thermometers are mandatory: Most domestic and commercial dials fluctuate by 10°C to 20°C. An in-oven gauge ensures truth.",
      "3. Chill your pastry dough twice: Chill once after making the dough, and again after rolling into the tart ring before baking to prevent shrinkage.",
      "4. The emulsion test for sponges: When creaming butter and sugar, incorporate room-temperature eggs gradually to avoid splitting.",
      "5. Rest your breads: Never slice into a hot loaf of artisan bread. The crumb is still setting as internal moisture redistributes.",
    ],
  },
];

