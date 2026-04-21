"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "When does Drop 01 ship?",
    a: "All in-stock items ship within 48 hours. Express worldwide delivery is included on every VELA order, at no additional cost. You'll receive a tracking link the moment your order leaves our facility.",
  },
  {
    q: "How does sizing work?",
    a: "VELA pieces are intentionally designed with an oversized or relaxed fit. We recommend sizing down one from your usual size unless you prefer a very generous silhouette. Detailed measurements are available on each product page.",
  },
  {
    q: "What is your return policy?",
    a: "We offer free returns within 30 days of delivery. Items must be unworn with original tags attached. Once received, your refund is processed within 3-5 business days to your original payment method.",
  },
  {
    q: "What does lifetime repair cover?",
    a: "Any structural defect — seam failure, hardware issues, fabric integrity — is covered for the life of the garment. Normal wear and intended aging are not defects; they're features. Repair requests can be made via our support portal anytime.",
  },
  {
    q: "Are VELA pieces sustainably made?",
    a: "Sustainability for us means building things that last — not just using organic labels. We work exclusively with small-batch mills, produce zero excess inventory, and repair rather than replace. Our carbon footprint is measured and offset on every shipment.",
  },
  {
    q: "Will sold-out items be restocked?",
    a: "No. Each drop is permanently limited. Restocks would compromise the integrity of the release model. If you miss a drop, join the waitlist for priority access on future releases.",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="border-b border-black/[0.08]"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left group"
        aria-expanded={open}
      >
        <span className="text-[14px] font-medium text-[#0a0a0a] group-hover:text-[#3a3a3a] transition-colors pr-8">
          {q}
        </span>
        <span className="shrink-0 w-6 h-6 flex items-center justify-center border border-[#0a0a0a]/20 rounded-full group-hover:border-[#0a0a0a] transition-colors">
          {open ? (
            <Minus size={10} strokeWidth={2} />
          ) : (
            <Plus size={10} strokeWidth={2} />
          )}
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="text-[13px] text-[#6b6b6b] leading-[1.8] font-light pb-4 max-w-2xl">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section className="bg-[#fafaf8] py-16 md:py-22">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid md:grid-cols-[1fr_2fr] gap-10 lg:gap-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[10px] tracking-[0.22em] uppercase text-[#c8b89a] font-medium mb-3"
            >
              Common Questions
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-[clamp(1.75rem,3.5vw,3rem)] font-light leading-[1.1] tracking-[-0.02em] text-[#0a0a0a]"
            >
              Everything you need to know.
            </motion.h2>
          </div>

          <div>
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
