"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { testimonials } from "@/lib/products";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`text-[10px] ${i < rating ? "text-[#c8b89a]" : "text-[#d4d4d0]"}`}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section ref={ref} className="bg-[#0a0a0a] py-12 md:py-18">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-7 md:mb-9"
        >
          <p className="text-[10px] tracking-[0.22em] uppercase text-[#c8b89a] font-medium mb-3">
            Worn by the Few
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.75rem)] font-light leading-[1.05] tracking-[-0.02em] text-[#fafaf8]">
            Words from those<br />
            <span className="italic">who know.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#111111] border border-white/[0.05] p-6"
            >
              <StarRating rating={t.rating} />

              <p className="mt-4 text-[14px] text-[#c8c8c2] leading-[1.75] font-light">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="mt-6 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#2a2a2a] flex items-center justify-center">
                  <span className="text-[11px] font-medium text-[#9b9b9b] tracking-wide">
                    {t.initials}
                  </span>
                </div>
                <div>
                  <p className="text-[12px] font-medium text-[#e8e8e2]">
                    {t.name}
                  </p>
                  <p className="text-[10px] text-[#6b6b6b] tracking-wide">
                    {t.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 pt-8 border-t border-white/[0.06] grid grid-cols-3 gap-0"
        >
          {[
            { value: "4,200+", label: "Happy Customers" },
            { value: "98%", label: "5-Star Reviews" },
            { value: "3", label: "Global Drops" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className={`px-6 ${i > 0 ? "border-l border-white/[0.06]" : ""}`}
            >
              <p className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-light text-[#fafaf8] tracking-[-0.02em]">
                {stat.value}
              </p>
              <p className="text-[11px] text-[#6b6b6b] tracking-[0.1em] uppercase mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
