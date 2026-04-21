"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/lib/cart-context";

const navLinks = [
  { label: "Collection", href: "/collection" },
  { label: "Story", href: "/story" },
  { label: "Materials", href: "/materials" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { openCart, totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#fafaf8]/90 backdrop-blur-md border-b border-black/[0.06]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a
              href="/"
              className="font-display text-2xl font-semibold tracking-[0.12em] text-[#0a0a0a]"
            >
              VELA
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[11px] font-medium tracking-[0.18em] uppercase text-[#4a4a4a] hover:text-[#0a0a0a] transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <button
                onClick={openCart}
                className="relative p-2 text-[#0a0a0a] hover:opacity-60 transition-opacity"
                aria-label="Open cart"
              >
                <ShoppingBag strokeWidth={1.5} size={22} />
                {totalItems > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#0a0a0a] text-[#fafaf8] text-[9px] font-medium rounded-full flex items-center justify-center"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </button>

              <button
                onClick={() => setMenuOpen(true)}
                className="md:hidden p-2 text-[#0a0a0a] hover:opacity-60 transition-opacity"
                aria-label="Open menu"
              >
                <Menu strokeWidth={1.5} size={22} />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 md:hidden"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-y-0 right-0 w-full bg-[#0a0a0a] flex flex-col px-8 pt-6 pb-10"
            >
              <div className="flex items-center justify-between mb-16">
                <span className="font-display text-2xl font-semibold tracking-[0.12em] text-[#fafaf8]">
                  VELA
                </span>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-2 text-[#fafaf8] hover:opacity-60 transition-opacity"
                  aria-label="Close menu"
                >
                  <X strokeWidth={1.5} size={22} />
                </button>
              </div>

              <nav className="flex flex-col gap-8">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
                    onClick={() => setMenuOpen(false)}
                    className="font-display text-4xl font-light text-[#fafaf8] hover:text-[#c8b89a] transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              <div className="mt-auto">
                <p className="text-[11px] tracking-[0.18em] uppercase text-[#6b6b6b]">
                  Drop 01 — Available Now
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
