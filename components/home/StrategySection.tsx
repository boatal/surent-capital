"use client";

import { useState } from "react";
import { useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/site/Reveal";
import { Section } from "@/components/site/Section";

const steps = [
  {
    number: "01",
    title: "Origination",
    body: "Evaluate sponsor strength, asset fundamentals, and exit clarity.",
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1800&q=80&sat=-100",
    alt: "Concrete foundation and structural base",
  },
  {
    number: "02",
    title: "Structuring",
    body: "Match capital terms to execution plan, timeline, and risk profile.",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1800&q=80&sat=-100",
    alt: "Steel beams and interior architecture",
  },
  {
    number: "03",
    title: "Allocation",
    body: "Deploy selectively, prioritizing capital preservation and certainty.",
    image:
      "https://images.unsplash.com/photo-1460472178825-e5240623afd5?auto=format&fit=crop&w=1800&q=80&sat=-100",
    alt: "Moody skyline and finished building mass",
  },
];

export function StrategySection() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();
  const showHoverImagery = !reduceMotion && hoveredStep !== null;

  return (
    <Section id="strategy" minHeight="chapter">
      <div className="flex min-h-[85vh] flex-col lg:col-span-12">
        <Reveal className="grid gap-4 lg:max-w-[62ch]" stagger>
          <p className="font-heading text-[12px] uppercase tracking-[0.28em] text-[#B8A27A]/90">
            STRATEGY
          </p>
          <h2 className="font-heading text-4xl md:text-6xl">
            Underwriting Before Allocation
          </h2>
          <p className="max-w-[56ch] text-[var(--muted)]">
            Disciplined review precedes deployment.
          </p>
        </Reveal>
        <Reveal
          delay={0.08}
          className="mt-12 flex flex-1 items-center md:mt-16 lg:mt-24 lg:translate-y-6"
        >
          <div className="w-full">
            <div
              className="relative hidden w-full lg:block"
              style={
                {
                  "--dot-size": "5px",
                  "--dot-top": "1.75rem",
                  "--line-y": "calc(var(--dot-top) + (var(--dot-size) / 2))",
                } as React.CSSProperties
              }
              onMouseLeave={() => setHoveredStep(null)}
            >
              {showHoverImagery ? (
                <div className="pointer-events-none absolute -top-64 left-0 right-0 h-[230px] overflow-hidden xl:h-[240px]">
                  {steps.map((step, index) => (
                    <figure
                      key={step.title}
                      className="absolute inset-0"
                      aria-hidden={hoveredStep !== index}
                    >
                      <img
                        src={step.image}
                        alt={step.alt}
                        className="h-full w-full object-cover"
                        style={{
                          opacity: hoveredStep === index ? 1 : 0,
                          transform:
                            hoveredStep === index
                              ? "translateY(0px)"
                              : "translateY(8px)",
                          transition:
                            "opacity 260ms ease-out, transform 260ms ease-out",
                        }}
                      />
                      <div className="absolute inset-0 bg-black/45" />
                    </figure>
                  ))}
                </div>
              ) : null}
              <div className="pointer-events-none absolute left-[16.666%] right-[16.666%] border-t border-white/[0.16] [top:var(--line-y)]" />
              <div className="grid grid-cols-3">
                {steps.map((step, index) => (
                  <article
                    key={step.title}
                    className="relative px-8"
                    onMouseEnter={() => setHoveredStep(index)}
                  >
                    <p className="text-center font-inter text-[11px] tracking-[0.22em] text-white/55">
                      {step.number}
                    </p>
                    <span className="absolute left-1/2 block -translate-x-1/2 rounded-full bg-white/60 [height:var(--dot-size)] [top:var(--dot-top)] [width:var(--dot-size)]" />
                    <div className="mx-auto mt-10 w-full max-w-[300px] text-center lg:max-w-[320px]">
                      <h3 className="font-inter text-[18px] font-bold text-white">
                        {step.title}
                      </h3>
                      <p className="mt-3 font-inter text-[14px] leading-normal text-white/70">
                        {step.body}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <div className="relative pl-8 lg:hidden">
              <div className="pointer-events-none absolute bottom-0 left-1 top-0 border-l border-white/[0.16]" />
              <div className="grid">
                {steps.map((step, index) => (
                  <article
                    key={step.title}
                    className={`relative py-8 ${index > 0 ? "border-t border-white/10" : ""}`}
                  >
                    <span className="absolute -left-[0.42rem] top-[2.2rem] h-[5px] w-[5px] rounded-full bg-white/60" />
                    <p className="font-inter text-[11px] tracking-[0.22em] text-white/55">
                      {step.number}
                    </p>
                    <div className="mx-auto w-full max-w-[300px] text-center">
                      <h3 className="mt-5 font-inter text-[18px] font-bold text-white">
                        {step.title}
                      </h3>
                      <p className="mt-3 font-inter text-[14px] leading-normal text-white/70">
                        {step.body}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
