"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  return (
    <section ref={ref} className="relative bg-[#0a0a0a] py-14 md:py-20 overflow-hidden">
      <motion.div
        style={{ y }}
        className="absolute inset-0 opacity-10"
        aria-hidden
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#c8b89a] blur-[120px]" />
      </motion.div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[10px] tracking-[0.25em] uppercase text-[#c8b89a] font-medium mb-4"
        >
          Drop 01 — Limited Availability
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[clamp(2.5rem,6.5vw,6.5rem)] font-light leading-[1.0] tracking-[-0.02em] text-[#fafaf8] mb-4"
        >
          The edit won't<br />
          <span className="italic">wait for you.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-[14px] text-[#6b6b6b] max-w-md mx-auto leading-relaxed font-light mb-6"
        >
          These pieces exist in finite quantity. When they&rsquo;re gone, they&rsquo;re gone —
          permanently. Claim yours before the drop closes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#products"
            className="group inline-flex items-center gap-3 bg-[#fafaf8] text-[#0a0a0a] px-10 py-4 text-[12px] font-medium tracking-[0.18em] uppercase hover:bg-[#c8b89a] transition-colors duration-300"
          >
            Shop the Drop
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#footer"
            className="text-[11px] tracking-[0.18em] uppercase text-[#4a4a4a] hover:text-[#fafaf8] transition-colors border-b border-[#4a4a4a]/50 pb-0.5"
          >
            Join Waitlist
          </a>
        </motion.div>
      </div>
    </section>
  );
}
