"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Instagram, Twitter } from "lucide-react";

const footerLinks = {
  Shop: ["Collection", "Lookbook", "Sizing Guide", "Gift Cards"],
  Support: ["FAQ", "Shipping", "Returns", "Lifetime Repair"],
  Company: ["About VELA", "Sustainability", "Press", "Careers"],
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <footer id="footer" className="bg-[#0d0d0d] border-t border-white/[0.04]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-12 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 mb-10">
          <div className="lg:col-span-2">
            <p className="font-display text-3xl font-semibold tracking-[0.12em] text-[#fafaf8] mb-3">
              VELA
            </p>
            <p className="text-[13px] text-[#6b6b6b] leading-relaxed font-light max-w-xs mb-5">
              Precision crafted in limited quantities. For those who know the difference between wearing clothes and wearing intentions.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
              <p className="text-[10px] tracking-[0.18em] uppercase text-[#9b9b9b] mb-1.5">
                Join the Waitlist
              </p>
              {submitted ? (
                <p className="text-[12px] text-[#c8b89a] tracking-wide">
                  You&rsquo;re on the list. We&rsquo;ll be in touch.
                </p>
              ) : (
                <div className="flex border border-white/[0.08] focus-within:border-white/20 transition-colors">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="flex-1 bg-transparent px-3 py-2.5 text-[12px] text-[#e8e8e2] placeholder:text-[#4a4a4a] outline-none"
                    required
                  />
                  <button
                    type="submit"
                    className="px-4 border-l border-white/[0.08] text-[#9b9b9b] hover:text-[#fafaf8] transition-colors"
                    aria-label="Subscribe"
                  >
                    <ArrowRight size={14} />
                  </button>
                </div>
              )}
            </form>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#6b6b6b] font-medium mb-3.5">
                {category}
              </p>
              <ul className="flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[13px] text-[#9b9b9b] hover:text-[#fafaf8] transition-colors font-light"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-[#4a4a4a] tracking-wide">
            &copy; {new Date().getFullYear()} VELA. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="#"
              className="text-[11px] tracking-[0.14em] uppercase text-[#4a4a4a] hover:text-[#9b9b9b] transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-[11px] tracking-[0.14em] uppercase text-[#4a4a4a] hover:text-[#9b9b9b] transition-colors"
            >
              Terms
            </a>
            <div className="flex items-center gap-3 ml-2">
              <a
                href="#"
                aria-label="Instagram"
                className="text-[#4a4a4a] hover:text-[#9b9b9b] transition-colors"
              >
                <Instagram size={16} strokeWidth={1.5} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-[#4a4a4a] hover:text-[#9b9b9b] transition-colors"
              >
                <Twitter size={16} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
