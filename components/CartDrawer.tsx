"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "@/lib/cart-context";

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeFromCart, updateQuantity, subtotal, totalItems } =
    useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
            onClick={closeCart}
          />

          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-[420px] bg-[#fafaf8] flex flex-col shadow-2xl"
          >
            <div className="flex items-center justify-between px-6 md:px-8 py-6 border-b border-black/[0.06]">
              <div className="flex items-center gap-2">
                <ShoppingBag size={18} strokeWidth={1.5} />
                <span className="text-[12px] font-medium tracking-[0.15em] uppercase">
                  Your Bag
                </span>
                {totalItems > 0 && (
                  <span className="ml-1 text-[11px] text-[#6b6b6b]">
                    ({totalItems})
                  </span>
                )}
              </div>
              <button
                onClick={closeCart}
                className="p-1.5 hover:opacity-60 transition-opacity"
                aria-label="Close cart"
              >
                <X size={18} strokeWidth={1.5} />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
                <ShoppingBag size={40} strokeWidth={0.8} className="text-[#d4d4d0] mb-5" />
                <p className="font-display text-2xl font-light text-[#0a0a0a] mb-2">
                  Your bag is empty.
                </p>
                <p className="text-[12px] text-[#9b9b9b] mb-8">
                  Add something worth wearing.
                </p>
                <button
                  onClick={closeCart}
                  className="text-[11px] tracking-[0.18em] uppercase text-[#0a0a0a] border-b border-[#0a0a0a]/40 pb-0.5 hover:border-[#0a0a0a] transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto scrollbar-hide px-6 md:px-8 py-4">
                  <div className="flex flex-col gap-0">
                    {items.map((item, i) => (
                      <motion.div
                        key={`${item.product.id}-${item.size}`}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ delay: i * 0.04 }}
                        className="flex gap-4 py-5 border-b border-black/[0.06] last:border-0"
                      >
                        <div className="w-20 h-24 bg-[#f0f0eb] shrink-0 overflow-hidden">
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <p className="text-[13px] font-medium text-[#0a0a0a] leading-tight">
                              {item.product.name}
                            </p>
                            <button
                              onClick={() => removeFromCart(item.product.id, item.size)}
                              className="text-[#9b9b9b] hover:text-[#0a0a0a] transition-colors shrink-0 mt-0.5"
                              aria-label="Remove item"
                            >
                              <X size={13} />
                            </button>
                          </div>

                          <p className="text-[11px] text-[#9b9b9b] mt-0.5 mb-3">
                            Size: {item.size}
                          </p>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-0 border border-black/[0.1]">
                              <button
                                onClick={() =>
                                  updateQuantity(item.product.id, item.size, item.quantity - 1)
                                }
                                className="w-7 h-7 flex items-center justify-center hover:bg-black/[0.04] transition-colors"
                                aria-label="Decrease quantity"
                              >
                                <Minus size={10} />
                              </button>
                              <span className="w-7 h-7 flex items-center justify-center text-[12px] font-medium border-l border-r border-black/[0.1]">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  updateQuantity(item.product.id, item.size, item.quantity + 1)
                                }
                                className="w-7 h-7 flex items-center justify-center hover:bg-black/[0.04] transition-colors"
                                aria-label="Increase quantity"
                              >
                                <Plus size={10} />
                              </button>
                            </div>

                            <p className="text-[13px] font-medium text-[#0a0a0a]">
                              ${(item.product.price * item.quantity).toLocaleString()}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="px-6 md:px-8 py-6 border-t border-black/[0.06] bg-[#fafaf8]">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[12px] text-[#6b6b6b] tracking-wide">Subtotal</span>
                    <span className="text-[14px] font-medium text-[#0a0a0a]">
                      ${subtotal.toLocaleString()}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#9b9b9b] mb-5">
                    Shipping and taxes calculated at checkout
                  </p>

                  <button className="group w-full flex items-center justify-center gap-3 bg-[#0a0a0a] text-[#fafaf8] py-4 text-[12px] font-medium tracking-[0.18em] uppercase hover:bg-[#c8b89a] hover:text-[#0a0a0a] transition-colors duration-300">
                    Checkout
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={closeCart}
                    className="w-full mt-3 text-[11px] tracking-[0.16em] uppercase text-[#9b9b9b] hover:text-[#0a0a0a] transition-colors py-2"
                  >
                    Continue Shopping
                  </button>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
