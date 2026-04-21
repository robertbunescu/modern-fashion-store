import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

export const metadata = {
  title: "Materials & Craftsmanship — VELA",
  description: "Learn about our sourcing, construction, and commitment to quality.",
};

const details = [
  { label: "Origin", value: "Japan, Portugal, Italy" },
  { label: "Standard", value: "Grade A Only" },
  { label: "Certifications", value: "OEKO-TEX, GOTS Approved" },
  { label: "Repairability", value: "Lifetime Guarantee" },
];

const blocks = [
  {
    tag: "01 — Fabric Selection",
    heading: "Not all cotton is created equal.",
    body: "We exclusively source from mills that have been perfecting their craft for generations. Our 320gsm ring-spun cotton is grown in the Nile Delta and spun in Portugal — the only combination that achieves the weight, softness, and durability we demand. Every bale is tested for fiber length, tensile strength, and pilling resistance.",
    image:
      "https://images.pexels.com/photos/3622608/pexels-photo-3622608.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageRight: false,
  },
  {
    tag: "02 — Construction Techniques",
    heading: "Built to survive everything you throw at it.",
    body: "Double-stitched seams. Reinforced stress points. Bar-tacked on every pocket. These aren't upgrades — they're the baseline. Every VELA garment is constructed to the same spec as gear worn by those who depend on their clothing to perform. We use flat-felled seams on denim for maximum durability.",
    image:
      "https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageRight: true,
  },
  {
    tag: "03 — Aging & Patina",
    heading: "Better with time.",
    body: "Unlike fast fashion, VELA pieces are designed to age gracefully. Our untreated fabrics develop a unique patina, soft fades, and character that reflects your life in them. This isn't wear — it's the piece becoming truly yours. We provide detailed care guides to help you preserve and extend the life of each garment.",
    image:
      "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageRight: false,
  },
];

export default function MaterialsPage() {
  return (
    <main>
      <Navbar />
      <CartDrawer />

      <section className="bg-[#f5f5f0]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 pt-24 md:pt-28 pb-16">
          <div className="mb-12 md:mb-16">
            <p className="text-[10px] tracking-[0.22em] uppercase text-[#c8b89a] font-medium mb-3">
              Craftsmanship
            </p>
            <h1 className="font-display text-[clamp(2.25rem,5vw,4rem)] font-light leading-[1.05] tracking-[-0.02em] text-[#0a0a0a] max-w-3xl">
              The details no one sees are the ones that matter most.
            </h1>
          </div>

          <div className="flex flex-wrap gap-0 border-t border-black/[0.06] mb-14">
            {details.map((d) => (
              <div
                key={d.label}
                className="flex-1 min-w-[140px] border-r border-b border-black/[0.06] px-5 py-4 last:border-r-0"
              >
                <p className="text-[10px] tracking-[0.18em] uppercase text-[#9b9b9b] mb-1.5">
                  {d.label}
                </p>
                <p className="text-[13px] font-medium text-[#0a0a0a]">{d.value}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-16 md:gap-20">
            {blocks.map((block, idx) => (
              <div
                key={block.tag}
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
                  <h2 className="font-display text-[clamp(1.5rem,2.5vw,2.5rem)] font-light leading-[1.1] tracking-[-0.01em] text-[#0a0a0a] mb-4">
                    {block.heading}
                  </h2>
                  <p className="text-[13px] text-[#6b6b6b] leading-[1.75] font-light max-w-sm">
                    {block.body}
                  </p>
                  <div className="mt-5 w-12 h-[1px] bg-[#c8b89a]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
