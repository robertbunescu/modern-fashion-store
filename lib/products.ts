export type Product = {
  id: string;
  name: string;
  descriptor: string;
  price: number;
  badge?: string;
  image: string;
  hoverImage: string;
  sizes: string[];
  category: "jackets" | "tshirts" | "jeans";
  colors: string[];
};

export const products: Product[] = [
  {
    id: "p1",
    name: "Archive Utility Jacket",
    descriptor: "Waxed cotton canvas · Oversized silhouette",
    price: 328,
    badge: "Drop 01",
    image:
      "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800",
    hoverImage:
      "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
    sizes: ["XS", "S", "M", "L", "XL"],
    category: "jackets",
    colors: ["Black", "Khaki", "Navy"],
  },
  {
    id: "p2",
    name: "Structured Ripstop Cargo",
    descriptor: "Technical nylon · Articulated fit",
    price: 218,
    badge: "Limited",
    image:
      "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800",
    hoverImage:
      "https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&w=800",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    category: "jeans",
    colors: ["Black", "Olive"],
  },
  {
    id: "p3",
    name: "Foundation Heavyweight Tee",
    descriptor: "320gsm ring-spun cotton · Boxy cut",
    price: 88,
    image:
      "https://images.pexels.com/photos/1040946/pexels-photo-1040946.jpeg?auto=compress&cs=tinysrgb&w=800",
    hoverImage:
      "https://images.pexels.com/photos/2220316/pexels-photo-2220316.jpeg?auto=compress&cs=tinysrgb&w=800",
    sizes: ["XS", "S", "M", "L", "XL"],
    category: "tshirts",
    colors: ["White", "Black", "Cream"],
  },
  {
    id: "p4",
    name: "Fine Merino Crew",
    descriptor: "Grade A merino wool · Slim structure",
    price: 248,
    image:
      "https://images.pexels.com/photos/2220316/pexels-photo-2220316.jpeg?auto=compress&cs=tinysrgb&w=800",
    hoverImage:
      "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800",
    sizes: ["S", "M", "L", "XL"],
    category: "tshirts",
    colors: ["Charcoal", "Cream", "Navy"],
  },
  {
    id: "p5",
    name: "Minimal Denim",
    descriptor: "Organic cotton · Raw hem",
    price: 198,
    image:
      "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
    hoverImage:
      "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800",
    sizes: ["28", "30", "32", "34", "36"],
    category: "jeans",
    colors: ["Indigo", "Black"],
  },
  {
    id: "p6",
    name: "Oversized Linen Shirt",
    descriptor: "100% linen · Relaxed cut",
    price: 178,
    image:
      "https://images.pexels.com/photos/1822400/pexels-photo-1822400.jpeg?auto=compress&cs=tinysrgb&w=800",
    hoverImage:
      "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    category: "tshirts",
    colors: ["Off-white", "Sage"],
  },
  {
    id: "p7",
    name: "Technical Puffer Jacket",
    descriptor: "Recycled nylon · Insulated",
    price: 398,
    badge: "New",
    image:
      "https://images.pexels.com/photos/3622608/pexels-photo-3622608.jpeg?auto=compress&cs=tinysrgb&w=800",
    hoverImage:
      "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800",
    sizes: ["XS", "S", "M", "L", "XL"],
    category: "jackets",
    colors: ["Black", "Slate"],
  },
  {
    id: "p8",
    name: "Classic 5-Pocket Denim",
    descriptor: "Sanforized cotton · Mid-rise",
    price: 178,
    image:
      "https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&w=800",
    hoverImage:
      "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800",
    sizes: ["28", "30", "32", "34", "36"],
    category: "jeans",
    colors: ["Dark Indigo", "Black"],
  },
];

export const storyBlocks = [
  {
    heading: "Cut for the relentless.",
    body: "Every silhouette is designed around movement. Not just fashion — functional architecture for the way you actually live.",
    label: "01 — Design Philosophy",
  },
  {
    heading: "Premium from the thread up.",
    body: "We source selectively. Only mills that meet our exacting standards. The result is garments that age with character, not wear out.",
    label: "02 — Materials",
  },
  {
    heading: "Limited. Always.",
    body: "We release in tightly controlled drops. Not a marketing gimmick — a commitment to quality over volume. Once it's gone, it's gone.",
    label: "03 — Drop Model",
  },
  {
    heading: "Built to last a decade.",
    body: "We stand behind every seam. Free repairs for the life of the garment. Wear it hard. We'll keep it with you.",
    label: "04 — Guarantee",
  },
];

export const testimonials = [
  {
    id: "t1",
    name: "Marcus L.",
    initials: "ML",
    rating: 5,
    text: "The Archive Jacket is the best piece of outerwear I've owned. The construction is impeccable and it only gets better with wear.",
    location: "New York, NY",
  },
  {
    id: "t2",
    name: "Priya S.",
    initials: "PS",
    rating: 5,
    text: "Finally a brand that doesn't compromise. The fit, the weight, the finish — everything is exactly right. Worth every cent.",
    location: "London, UK",
  },
  {
    id: "t3",
    name: "Theo R.",
    initials: "TR",
    rating: 5,
    text: "I've worn the Merino Crew almost every day this winter. Still looks brand new. This is what quality actually means.",
    location: "Berlin, DE",
  },
];

export const categories = [
  {
    slug: "jeans",
    name: "Jeans",
    description: "Precision-cut denim crafted from the finest mills.",
    image: "https://images.pexels.com/photos/16390580/pexels-photo-16390580.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    slug: "tshirts",
    name: "T-Shirts",
    description: "Foundation pieces designed to last.",
    image: "https://images.pexels.com/photos/5698851/pexels-photo-5698851.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    slug: "jackets",
    name: "Jackets",
    description: "Technical outerwear for every season.",
    image: "https://images.pexels.com/photos/7989576/pexels-photo-7989576.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];
