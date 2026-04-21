"use client";

import { motion } from "framer-motion";
import { products } from "@/lib/products";
import ProductCard from "./ProductCard";
import { ArrowRight } from "lucide-react";

export default function FeaturedProducts() {
  const featured = products.slice(0, 4);

  return (
    <section className="bg-[#fafaf8] py-12 md:py-16">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-6">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[10px] tracking-[0.22em] uppercase text-[#c8b89a] font-medium mb-2"
            >
              Featured Selection
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="font-display text-[clamp(2rem,4vw,3.75rem)] font-light leading-[1.05] tracking-[-0.02em] text-[#0a0a0a]"
            >
              The Edit
            </motion.h2>
          </div>

          <motion.a
            href="/collection"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group inline-flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase text-[#0a0a0a] border-b border-[#0a0a0a]/40 pb-0.5 hover:border-[#0a0a0a] transition-all self-start md:self-auto"
          >
            Explore All
            <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-3">
          {featured.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
