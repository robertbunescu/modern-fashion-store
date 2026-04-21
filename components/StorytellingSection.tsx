"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { storyBlocks } from "@/lib/products";

export default function StorytellingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const gsapCtx = useRef<any>(null);

  useEffect(() => {
    let gsap: any, ScrollTrigger: any;

    const initGSAP = async () => {
      const gsapModule = await import("gsap");
      const stModule = await import("gsap/ScrollTrigger");
      gsap = gsapModule.default;
      ScrollTrigger = stModule.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      if (!sectionRef.current) return;

      gsapCtx.current = gsap.context(() => {
        const blocks = sectionRef.current!.querySelectorAll(".story-block");

        blocks.forEach((block: Element, i: number) => {
          gsap.fromTo(
            block,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: block,
                start: "top 70%",
                end: "bottom 30%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });

        if (imageRef.current) {
          gsap.to(imageRef.current, {
            y: -80,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.5,
            },
          });
        }
      }, sectionRef);
    };

    initGSAP();

    return () => {
      if (gsapCtx.current) gsapCtx.current.revert();
    };
  }, []);

  return (
    <section
      id="story"
      ref={sectionRef}
      className="bg-[#fafaf8] py-12 md:py-16 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-14 items-stretch">
          <div className="flex flex-col md:h-full">
            <div className="relative overflow-hidden aspect-[3/4] md:aspect-auto md:flex-1 md:min-h-[600px]">
              <div ref={imageRef} className="absolute inset-x-0 -top-20 -bottom-20">
                <img
                  src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="VELA Story"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/20 to-transparent" />
              </div>
            </div>
            <div className="mt-3">
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#6b6b6b]">
                Archive Utility Jacket
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#c8b89a] font-medium">
              Drop 01 · The VELA Philosophy
            </p>

            <div className="story-block opacity-0">
              <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.05] tracking-[-0.02em] text-[#0a0a0a] mb-3">
                Design as a form of<br />
                <span className="italic">radical clarity.</span>
              </h2>
              <p className="text-[14px] text-[#6b6b6b] leading-[1.6] font-light max-w-sm">
                We believe the most powerful statement is restraint. VELA was
                built for those who know exactly who they are.
              </p>
            </div>

            {storyBlocks.map((block) => (
              <div key={block.label} className="story-block opacity-0">
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#9b9b9b] mb-1.5 font-medium">
                  {block.label}
                </p>
                <h3 className="font-display text-[clamp(1.5rem,2.5vw,2.25rem)] font-light leading-[1.1] tracking-[-0.01em] text-[#0a0a0a] mb-2">
                  {block.heading}
                </h3>
                <p className="text-[13px] text-[#6b6b6b] leading-[1.6] font-light max-w-xs">
                  {block.body}
                </p>
                <div className="mt-2.5 w-8 h-[1px] bg-[#c8b89a]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
