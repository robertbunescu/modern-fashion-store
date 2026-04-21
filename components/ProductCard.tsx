"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { Product } from "@/lib/products";
import { useCart } from "@/lib/cart-context";

type Props = { product: Product; index: number };

export default function ProductCard({ product, index }: Props) {
  const [hovered, setHovered] = useState(false);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [showSizes, setShowSizes] = useState(false);
  const { addToCart } = useCart();

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!showSizes) {
      setShowSizes(true);
      return;
    }
    if (!selectedSize) return;
    addToCart(product, selectedSize);
    setShowSizes(false);
    setSelectedSize(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: "-5%" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setShowSizes(false);
        setSelectedSize(null);
      }}
      className="group relative"
    >
      <div className="relative overflow-hidden bg-[#f0f0eb] aspect-[3/4] mb-3">
        {product.badge && (
          <div className="absolute top-4 left-4 z-10">
            <span className="text-[9px] tracking-[0.2em] uppercase font-medium bg-[#0a0a0a] text-[#fafaf8] px-2.5 py-1">
              {product.badge}
            </span>
          </div>
        )}

        <motion.img
          src={product.image}
          alt={product.name}
          animate={{ opacity: hovered ? 0 : 1, scale: hovered ? 1.04 : 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <motion.img
          src={product.hoverImage}
          alt={product.name}
          animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 1.04 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-4 left-4 right-4"
            >
              <AnimatePresence mode="wait">
                {showSizes ? (
                  <motion.div
                    key="sizes"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex gap-1.5"
                  >
                    {product.sizes.map((s) => (
                      <button
                        key={s}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedSize(s);
                        }}
                        className={`px-2.5 py-1.5 text-[10px] font-medium tracking-wider border transition-all ${
                          selectedSize === s
                            ? "bg-[#0a0a0a] text-[#fafaf8] border-[#0a0a0a]"
                            : "bg-[#fafaf8]/90 text-[#0a0a0a] border-[#0a0a0a]/20 hover:border-[#0a0a0a]"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                    <button
                      onClick={handleAdd}
                      disabled={!selectedSize}
                      className="ml-auto px-3 py-1.5 text-[10px] font-medium tracking-wider bg-[#0a0a0a] text-[#fafaf8] disabled:opacity-40 hover:bg-[#c8b89a] hover:text-[#0a0a0a] transition-colors"
                    >
                      Add
                    </button>
                  </motion.div>
                ) : (
                  <motion.button
                    key="cta"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={handleAdd}
                    className="w-full flex items-center justify-center gap-2 bg-[#fafaf8]/95 text-[#0a0a0a] py-3 text-[11px] font-medium tracking-[0.15em] uppercase hover:bg-[#0a0a0a] hover:text-[#fafaf8] transition-colors duration-200"
                  >
                    <Plus size={13} strokeWidth={2} />
                    Quick Add
                  </motion.button>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="px-0.5">
        <div className="flex items-start justify-between gap-2 mb-1">
          <p className="text-[13px] font-medium text-[#0a0a0a] leading-tight">
            {product.name}
          </p>
          <p className="text-[13px] font-medium text-[#0a0a0a] whitespace-nowrap">
            ${product.price}
          </p>
        </div>
        <p className="text-[11px] text-[#9b9b9b] tracking-wide">
          {product.descriptor}
        </p>
      </div>
    </motion.div>
  );
}
