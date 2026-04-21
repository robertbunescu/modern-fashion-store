"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function EditorialBanner() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const textY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section ref={ref} className="relative h-[55vh] md:h-[65vh] overflow-hidden bg-[#0a0a0a]">
      <motion.div style={{ y }} className="absolute inset-0 scale-[1.2]">
        <img
          src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=2000"
          alt="VELA Editorial"
          className="w-full h-full object-cover object-top opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 via-[#0a0a0a]/20 to-[#0a0a0a]/80" />
      </motion.div>

      <motion.div
        style={{ y: textY }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
      >
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[10px] tracking-[0.25em] uppercase text-[#c8b89a] mb-4 font-medium"
        >
          The VELA Standard
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[clamp(2.5rem,6vw,6rem)] font-light leading-[1.0] tracking-[-0.02em] text-[#fafaf8] max-w-4xl mb-3"
        >
          Precision is not a feature.
          <span className="italic block">It's the productsssss.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-[14px] text-[#8b8b85] max-w-sm leading-relaxed font-light mt-4 mb-6"
        >
          Each VELA piece goes through 47 quality checkpoints before it reaches you.
        </motion.p>

        <motion.a
          href="#products"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="group inline-flex items-center gap-3 border border-[#fafaf8]/30 text-[#fafaf8] px-8 py-3 text-[11px] font-medium tracking-[0.2em] uppercase hover:bg-[#fafaf8] hover:text-[#0a0a0a] transition-all duration-300"
        >
          Explore Collection
          <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
        </motion.a>
      </motion.div>
    </section>
  );
}
