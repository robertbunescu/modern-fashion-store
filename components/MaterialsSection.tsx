"use client";

import { motion } from "framer-motion";

const details = [
  { label: "Origin", value: "Japan, Portugal" },
  { label: "Standard", value: "Grade A Only" },
  { label: "Finish", value: "Enzyme Washed" },
  { label: "Repairability", value: "Lifetime Guarantee" },
];

const blocks = [
  {
    tag: "01 — Fabric",
    heading: "Not all cotton is created equal.",
    body: "We exclusively source from mills that have been perfecting their craft for generations. Our 320gsm ring-spun cotton is grown in the Nile Delta and spun in Portugal — the only combination that achieves the weight, softness, and durability we demand.",
    image: "https://images.pexels.com/photos/3622608/pexels-photo-3622608.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageRight: false,
  },
  {
    tag: "02 — Construction",
    heading: "Built to survive everything you throw at it.",
    body: "Double-stitched seams. Reinforced stress points. Bar-tacked on every pocket. These aren't upgrades — they're the baseline. Every VELA garment is constructed to the same spec as gear worn by those who depend on their clothing to perform.",
    image: "https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageRight: true,
  },
];

export default function MaterialsSection() {
  return (
    <section id="materials" className="bg-[#f5f5f0] py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 md:mb-16"
        >
          <p className="text-[10px] tracking-[0.22em] uppercase text-[#c8b89a] font-medium mb-3">
            Craftsmanship
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,4rem)] font-light leading-[1.05] tracking-[-0.02em] text-[#0a0a0a] max-w-xl">
            The details no one sees are the ones that matter most.
          </h2>
        </motion.div>

        <div className="flex flex-wrap gap-0 border-t border-black/[0.06] mb-14">
          {details.map((d, i) => (
            <motion.div
              key={d.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex-1 min-w-[140px] border-r border-b border-black/[0.06] px-5 py-4 last:border-r-0"
            >
              <p className="text-[10px] tracking-[0.18em] uppercase text-[#9b9b9b] mb-1.5">
                {d.label}
              </p>
              <p className="text-[13px] font-medium text-[#0a0a0a]">{d.value}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col gap-16 md:gap-20">
          {blocks.map((block) => (
            <motion.div
              key={block.tag}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`grid md:grid-cols-2 gap-8 lg:gap-14 items-center ${
                block.imageRight ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="overflow-hidden">
                <img
                  src={block.image}
                  alt={block.tag}
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>

              <div className={block.imageRight ? "md:order-1" : ""}>
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#9b9b9b] font-medium mb-3">
                  {block.tag}
                </p>
                <h3 className="font-display text-[clamp(1.5rem,2.5vw,2.5rem)] font-light leading-[1.1] tracking-[-0.01em] text-[#0a0a0a] mb-4">
                  {block.heading}
                </h3>
                <p className="text-[13px] text-[#6b6b6b] leading-[1.75] font-light max-w-sm">
                  {block.body}
                </p>
                <div className="mt-5 w-12 h-[1px] bg-[#c8b89a]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
