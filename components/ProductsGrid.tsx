"use client";

import { motion } from "framer-motion";
import { products } from "@/lib/products";
import ProductCard from "./ProductCard";

export default function ProductsGrid() {
  return (
    <section id="products" className="bg-[#fafaf8] py-16 md:py-22">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[10px] tracking-[0.22em] uppercase text-[#c8b89a] font-medium mb-2"
            >
              Drop 01 — Collection
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-[clamp(2rem,4vw,3.75rem)] font-light leading-[1.05] tracking-[-0.02em] text-[#0a0a0a]"
            >
              The Edit
            </motion.h2>
          </div>

          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[11px] tracking-[0.18em] uppercase text-[#6b6b6b] border-b border-[#6b6b6b]/40 pb-0.5 hover:text-[#0a0a0a] hover:border-[#0a0a0a] transition-colors self-start md:self-auto"
          >
            View All
          </motion.a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-4">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
