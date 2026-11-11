export interface GalleryItem {
  id: string;
  src: string;
  title: string;
  category: "All" | "Patisserie" | "Cakes & Sugar Art" | "Breads & Pastry" | "Studio Life";
  aspect: "square" | "portrait" | "landscape";
  caption: string;
}

const BASE_URL = "https://igbca.in/wp-content/uploads/";

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    src: `${BASE_URL}2024/07/IMG-20230216-WA0005.jpg`,
    title: "Handmade Artisanal Loaves & Sponges",
    category: "Breads & Pastry",
    aspect: "landscape",
    caption: "Students practicing crumb texture and golden bake control in the IGBCA studio.",
  },
  {
    id: "g2",
    src: `${BASE_URL}2024/07/IMG-20230606-WA0082.jpg`,
    title: "Layered Celebration Cake Mastery",
    category: "Cakes & Sugar Art",
    aspect: "portrait",
    caption: "Sharp ganache finishes and modern floral decoration during practical sessions.",
  },
  {
    id: "g3",
    src: `${BASE_URL}2024/07/IMG-20230929-WA0029.jpg`,
    title: "Individual Studio Workstations",
    category: "Studio Life",
    aspect: "square",
    caption: "Dedicated benches equipped with commercial prep tools and mixers.",
  },
  {
    id: "g4",
    src: `${BASE_URL}2024/06/PHOTO-2023-02-08-16-57-161.jpg`,
    title: "French Pâtisserie Batch Showcase",
    category: "Patisserie",
    aspect: "landscape",
    caption: "Freshly pulled éclairs, choux buns, and tarts crafted by diploma candidates.",
  },
  {
    id: "g5",
    src: `${BASE_URL}2024/06/PHOTO-2023-02-09-17-19-27.jpg`,
    title: "Gourmet Savoury Tarts & Quiches",
    category: "Patisserie",
    aspect: "portrait",
    caption: "Mastering delicate blind baking and balanced savory egg custards.",
  },
  {
    id: "g6",
    src: `${BASE_URL}2024/06/PHOTO-2023-02-15-21-19-25.jpg`,
    title: "Glazed Entremets & Mousse Layers",
    category: "Patisserie",
    aspect: "square",
    caption: "Precision temperature dipping and mirror glaze application.",
  },
  {
    id: "g7",
    src: `${BASE_URL}2024/06/PHOTO-2023-03-02-20-09-512.jpg`,
    title: "Fondant Modeling & Celebration Cakes",
    category: "Cakes & Sugar Art",
    aspect: "landscape",
    caption: "Structural tiering and sugar sculpting for custom bespoke celebrations.",
  },
  {
    id: "g8",
    src: `${BASE_URL}2024/06/PHOTO-2023-03-23-00-58-322.jpg`,
    title: "Fine Dining Plated Desserts",
    category: "Patisserie",
    aspect: "portrait",
    caption: "Modern geometric plating with crisp tuiles and contrasting coulis.",
  },
  {
    id: "g9",
    src: `${BASE_URL}2024/06/PHOTO-2023-07-13-17-55-354.jpg`,
    title: "Laminated Dough & Choux Pastry",
    category: "Breads & Pastry",
    aspect: "landscape",
    caption: "Flaky viennoiserie lamination and crispy craquelin puff shells.",
  },
  {
    id: "g10",
    src: `${BASE_URL}2024/06/PHOTO-2023-08-09-13-30-54.jpg`,
    title: "Studio Practical Guidance",
    category: "Studio Life",
    aspect: "square",
    caption: "Direct chef demonstration and bench correction during practicals.",
  },
  {
    id: "g11",
    src: `${BASE_URL}2024/06/PHOTO-2023-11-17-21-12-163.jpg`,
    title: "Artisan Bread Scoring & Crusts",
    category: "Breads & Pastry",
    aspect: "portrait",
    caption: "Achieving deep ear bloom and crackling crusts using commercial steam deck ovens.",
  },
  {
    id: "g12",
    src: `${BASE_URL}2024/07/IMG-20231117-WA0022.jpg`,
    title: "Chocolate Pralines & Truffles",
    category: "Patisserie",
    aspect: "landscape",
    caption: "Beta crystal tempering, coloured cocoa butter splatters, and filled bonbons.",
  },
  {
    id: "g13",
    src: `${BASE_URL}2024/07/IMG-20240509-WA0025.jpg`,
    title: "Student Graduation Showcases",
    category: "Studio Life",
    aspect: "portrait",
    caption: "Celebrating final dessert buffets and graduation accomplishments.",
  },
  {
    id: "g14",
    src: `${BASE_URL}2024/07/IMG-20230929-WA0033.jpg`,
    title: "Creative Piping & Buttercream Art",
    category: "Cakes & Sugar Art",
    aspect: "landscape",
    caption: "Modern palette knife florals and textured Swiss meringue designs.",
  },
  {
    id: "g15",
    src: `${BASE_URL}2024/07/IMG-20240719-WA0005.jpg`,
    title: "Chef Demonstration Counter",
    category: "Studio Life",
    aspect: "square",
    caption: "Students observing master pastry methods up close in Chandigarh.",
  },
];

