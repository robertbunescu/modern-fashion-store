import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import { categories } from "@/lib/products";
import Link from "next/link";

export const metadata = {
  title: "Collection — VELA",
  description: "Browse our curated collection of premium pieces.",
};

export default function CollectionPage() {
  return (
    <main>
      <Navbar />
      <CartDrawer />

      <section className="bg-[#fafaf8] min-h-screen pt-24 md:pt-28 pb-16">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="mb-12 md:mb-16">
            <p className="text-[10px] tracking-[0.22em] uppercase text-[#c8b89a] font-medium mb-3">
              Shop by Category
            </p>
            <h1 className="font-display text-[clamp(2.25rem,5vw,4.5rem)] font-light leading-[1.05] tracking-[-0.02em] text-[#0a0a0a] mb-4">
              Our Collection
            </h1>
            <p className="text-[14px] text-[#6b6b6b] max-w-xl leading-relaxed font-light">
              Explore our curated selection of premium pieces, each designed with precision and crafted from the finest materials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {categories.map((cat) => (
              <Link key={cat.slug} href={`/collection/${cat.slug}`}>
                <div className="group cursor-pointer">
                  <div className="relative aspect-square bg-[#f0f0eb] mb-5 overflow-hidden">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/35 via-transparent to-transparent" />
                    <span className="absolute bottom-4 left-4 text-[11px] tracking-[0.22em] uppercase text-white/90 font-medium">
                      {cat.name}
                    </span>
                  </div>
                  <h2 className="font-display text-[1.5rem] md:text-[1.875rem] font-light leading-[1.1] tracking-[-0.01em] text-[#0a0a0a] mb-2 group-hover:text-[#6b6b6b] transition-colors">
                    {cat.name}
                  </h2>
                  <p className="text-[13px] text-[#6b6b6b] leading-relaxed font-light mb-4">
                    {cat.description}
                  </p>
                  <span className="text-[10px] tracking-[0.18em] uppercase text-[#9b9b9b] group-hover:text-[#0a0a0a] transition-colors inline-flex items-center gap-2">
                    View →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
