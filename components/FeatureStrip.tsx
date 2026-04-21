"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, Package, Star, Lock } from "lucide-react";

const features = [
  {
    icon: Lock,
    label: "Limited Drops",
    description: "Never mass-produced. Each release is strictly capped.",
  },
  {
    icon: Star,
    label: "Grade A Materials",
    description: "Sourced from the world's finest mills in Japan and Italy.",
  },
  {
    icon: Package,
    label: "Delivered in 48h",
    description: "Express worldwide shipping on every order, always included.",
  },
  {
    icon: Zap,
    label: "Lifetime Repair",
    description: "We stand behind every stitch. Free repairs, indefinitely.",
  },
];

export default function FeatureStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section ref={ref} className="bg-[#fafaf8] py-7 border-t border-b border-black/[0.06]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {features.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-2 px-6 py-4 border-b lg:border-b-0 lg:border-r border-black/[0.06] last:border-0"
            >
              <f.icon strokeWidth={1.25} size={20} className="text-[#0a0a0a]" />
              <div>
                <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#0a0a0a] mb-1.5">
                  {f.label}
                </p>
                <p className="text-[13px] text-[#6b6b6b] leading-relaxed font-light">
                  {f.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
