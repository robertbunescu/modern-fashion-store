import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import { storyBlocks } from "@/lib/products";

export const metadata = {
  title: "Our Story — VELA",
  description: "Learn about VELA's philosophy, materials, and commitment to quality.",
};

export default function StoryPage() {
  return (
    <main>
      <Navbar />
      <CartDrawer />

      <section className="bg-[#fafaf8]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 pt-24 md:pt-28 pb-16">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div className="relative overflow-hidden h-[460px]">
              <img
                src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="VELA Story"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/20 to-transparent" />
            </div>

            <div className="flex flex-col gap-12">
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#c8b89a] mb-3 font-medium">
                  The VELA Philosophy
                </p>
                <h1 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.05] tracking-[-0.02em] text-[#0a0a0a] mb-4">
                  Design as a form of<br />
                  <span className="italic">radical clarity.</span>
                </h1>
                <p className="text-[14px] text-[#6b6b6b] leading-[1.7] font-light">
                  We believe the most powerful statement is restraint. VELA was
                  built for those who know exactly who they are. Every piece
                  answers a single question: what if we made something that
                  lasts?
                </p>
              </div>

              {storyBlocks.map((block) => (
                <div key={block.label}>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-[#9b9b9b] mb-2.5 font-medium">
                    {block.label}
                  </p>
                  <h3 className="font-display text-[clamp(1.5rem,2.5vw,2.25rem)] font-light leading-[1.1] tracking-[-0.01em] text-[#0a0a0a] mb-3">
                    {block.heading}
                  </h3>
                  <p className="text-[13px] text-[#6b6b6b] leading-[1.75] font-light">
                    {block.body}
                  </p>
                  <div className="mt-4 w-8 h-[1px] bg-[#c8b89a]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
