"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  const imageY = useTransform(scrollY, [0, 600], [0, 120]);
  const textY = useTransform(scrollY, [0, 600], [0, -60]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  const dur = (d: number, del = 0) => ({
    duration: d,
    delay: del,
    ease: "easeOut" as const,
  });

  return (
    <section
      ref={containerRef}
      className="relative h-[88vh] min-h-[600px] overflow-hidden bg-[#0a0a0a]"
    >
      <motion.div
        style={{ y: imageY }}
        className="absolute inset-0 scale-[1.15]"
      >
        <img
          src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1800"
          alt="VELA hero"
          className="w-full h-full object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/50 via-transparent to-transparent" />
      </motion.div>

      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 h-full flex flex-col justify-end pb-10 md:pb-12 px-6 md:px-10 lg:px-16 max-w-[1440px] mx-auto"
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={dur(0.7, 0.3)}
          className="text-[11px] tracking-[0.25em] uppercase text-[#c8b89a] mb-4 font-medium"
        >
          Drop 01 — Now Available
        </motion.p>

        <div className="overflow-hidden mb-1">
          <motion.h1
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={dur(0.9, 0.42)}
            className="font-display text-[clamp(3.25rem,8vw,7rem)] leading-[0.94] font-light text-[#fafaf8] tracking-[-0.02em]"
          >
            Wear Less.
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-6">
          <motion.h1
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={dur(0.9, 0.54)}
            className="font-display text-[clamp(3.25rem,8vw,7rem)] leading-[0.94] font-light italic text-[#fafaf8] tracking-[-0.02em]"
          >
            Say More.
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={dur(0.7, 0.68)}
          className="text-[14px] text-[#a0a09a] max-w-xs leading-relaxed mb-6 font-light"
        >
          Precision-crafted, limited-edition pieces for those who understand
          the difference.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={dur(0.7, 0.80)}
          className="flex items-center gap-6"
        >
          <a
            href="#products"
            className="group inline-flex items-center gap-3 bg-[#fafaf8] text-[#0a0a0a] px-7 py-3.5 text-[12px] font-medium tracking-[0.15em] uppercase hover:bg-[#c8b89a] transition-colors duration-300"
          >
            Shop Now
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
          <a
            href="#story"
            className="text-[12px] tracking-[0.15em] uppercase text-[#6b6b6b] hover:text-[#fafaf8] transition-colors border-b border-[#6b6b6b]/50 pb-0.5"
          >
            Our Story
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[1px] h-8 bg-gradient-to-b from-transparent to-[#6b6b6b]"
        />
        <span className="text-[10px] tracking-[0.2em] uppercase text-[#6b6b6b]">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
