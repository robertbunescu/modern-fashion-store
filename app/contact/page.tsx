"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import { Mail, Instagram, Twitter, ArrowRight } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <main>
      <Navbar />
      <CartDrawer />

      <section className="bg-[#0a0a0a] min-h-screen flex flex-col">
        <div className="flex-1 flex flex-col items-center justify-center pt-24 md:pt-28 pb-12 px-6">
          <div className="max-w-2xl w-full">
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#c8b89a] mb-4 font-medium text-center">
              Get in Touch
            </p>

            <h1 className="font-display text-[clamp(2rem,5.5vw,4rem)] font-light leading-[1.05] tracking-[-0.02em] text-[#fafaf8] mb-3 text-center">
              We'd love to hear from you.
            </h1>

            <p className="text-[14px] text-[#8b8b85] text-center mb-10 max-w-lg mx-auto leading-relaxed font-light">
              Have a question about our pieces, sizing, or anything else? Reach out directly. We read every message.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5 mb-10">
              <div>
                <label htmlFor="name" className="block text-[11px] tracking-[0.16em] uppercase text-[#6b6b6b] mb-2">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-transparent border-b border-white/[0.1] text-[#e8e8e2] px-0 py-3 text-[14px] placeholder:text-[#4a4a4a] outline-none focus:border-white/30 transition-colors"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[11px] tracking-[0.16em] uppercase text-[#6b6b6b] mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-transparent border-b border-white/[0.1] text-[#e8e8e2] px-0 py-3 text-[14px] placeholder:text-[#4a4a4a] outline-none focus:border-white/30 transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[11px] tracking-[0.16em] uppercase text-[#6b6b6b] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-transparent border-b border-white/[0.1] text-[#e8e8e2] px-0 py-3 text-[14px] placeholder:text-[#4a4a4a] outline-none focus:border-white/30 transition-colors resize-none"
                  placeholder="Tell us what's on your mind..."
                  rows={5}
                  required
                />
              </div>

              <button
                type="submit"
                className="group w-full mt-6 flex items-center justify-center gap-3 bg-[#fafaf8] text-[#0a0a0a] py-3.5 text-[12px] font-medium tracking-[0.18em] uppercase hover:bg-[#c8b89a] transition-colors duration-300"
              >
                Send Message
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </button>

              {submitted && (
                <p className="text-[12px] text-[#c8b89a] text-center">
                  Thanks for reaching out. We'll be in touch soon.
                </p>
              )}
            </form>

            <div className="border-t border-white/[0.06] pt-8">
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#6b6b6b] mb-5 text-center">
                Or connect with us directly
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-10">
                <a
                  href="mailto:hello@vela.com"
                  className="flex items-center gap-3 text-[#e8e8e2] hover:text-[#c8b89a] transition-colors group"
                >
                  <Mail size={18} strokeWidth={1.5} />
                  <span className="text-[13px] font-light">hello@vela.com</span>
                </a>

                <a
                  href="#"
                  aria-label="Instagram"
                  className="text-[#6b6b6b] hover:text-[#e8e8e2] transition-colors"
                >
                  <Instagram size={20} strokeWidth={1.5} />
                </a>

                <a
                  href="#"
                  aria-label="Twitter"
                  className="text-[#6b6b6b] hover:text-[#e8e8e2] transition-colors"
                >
                  <Twitter size={20} strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
