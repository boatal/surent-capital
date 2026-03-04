"use client";

import { useState } from "react";
import { useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/site/Reveal";
import { Section } from "@/components/site/Section";

const slides = [
  {
    title: "Asset-Backed Credit",
    descriptor: "Capital structured against real assets with defined exit pathways.",
    image:
      "https://images.unsplash.com/photo-1465808028273-23916ac3d44f?auto=format&fit=crop&w=1800&q=80&sat=-100",
    alt: "Dark concrete and steel architecture",
  },
  {
    title: "Sponsor-Aligned Structuring",
    descriptor: "Designed around operator experience and execution strategy.",
    image:
      "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=1800&q=80&sat=-100",
    alt: "Structural beams and interior architecture",
  },
  {
    title: "Institutional Underwriting",
    descriptor: "Disciplined review grounded in risk and capital preservation.",
    image:
      "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1800&q=80&sat=-100",
    alt: "Modern geometric facade",
  },
  {
    title: "Relationship-Driven Deployment",
    descriptor: "Long-term operator alignment over transactional volume.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=80&sat=-100",
    alt: "Moody skyline of large-scale structures",
  },
] as const;

export function MandateSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  function goNext() {
    setActiveIndex((current) => (current + 1) % slides.length);
  }

  function goPrev() {
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
  }

  return (
    <Section
      id="mandate"
      tone="bg2"
      className="min-h-[80vh] lg:min-h-[90vh] py-24"
    >
      <div className="grid items-start gap-12 lg:col-span-12 lg:grid-cols-[9fr_11fr] lg:gap-14">
        <Reveal className="grid gap-6 pt-2" stagger>
          <p className="section-label">MANDATE</p>
          <h2 className="font-heading max-w-[20ch] text-4xl md:text-6xl">
            Capital Structured with Precision
          </h2>
          <p className="max-w-[60ch] leading-8 text-[var(--text)]/90">
            Surent Capital operates as a private capital platform focused on
            asset-backed real estate opportunities across transitional and
            value-driven strategies.
          </p>
          <p className="max-w-[60ch] leading-8 text-[var(--text)]/90">
            We partner with experienced operators who require thoughtful
            structuring, responsive underwriting, and disciplined execution.
          </p>
        </Reveal>
        <div className="grid gap-6">
          <Reveal delay={0.08}>
            <div className="relative h-[44vh] min-h-[340px] overflow-hidden md:h-[52vh] lg:min-h-[460px]">
              {slides.map((slide, index) => (
                <figure
                  key={slide.title}
                  className="absolute inset-0"
                  aria-hidden={index !== activeIndex}
                >
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className={`h-full w-full object-cover ${
                      index === activeIndex ? "scale-[1.02]" : "scale-100"
                    }`}
                    style={{
                      opacity: index === activeIndex ? 1 : 0,
                      transition: reduceMotion
                        ? "none"
                        : "opacity 460ms ease-out, transform 460ms ease-out",
                    }}
                  />
                  <div className="absolute inset-0 bg-black/40" />
                </figure>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid gap-2">
              <p className="text-lg font-medium">{slides[activeIndex].title}</p>
              <p className="max-w-[58ch] text-[var(--muted)]">
                {slides[activeIndex].descriptor}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="flex items-center justify-center gap-8 pt-2 md:gap-10">
              <button
                type="button"
                onClick={goPrev}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-transparent text-white/90 transition-all duration-200 ease-out motion-reduce:transition-none hover:scale-[1.02] hover:border-white hover:bg-white hover:text-[var(--bg)] motion-reduce:hover:scale-100 focus-visible:outline focus-visible:outline-1 focus-visible:outline-[var(--accent)] md:h-10 md:w-10 lg:h-11 lg:w-11"
                aria-label="Previous mandate slide"
              >
                <ArrowLeftIcon />
              </button>
              <div className="flex items-center gap-3">
                {slides.map((slide, index) => (
                  <button
                    key={slide.title}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`h-1.5 w-1.5 rounded-full transition-colors duration-200 ease-out motion-reduce:transition-none focus-visible:outline-none md:h-2 md:w-2 ${
                      index === activeIndex ? "bg-white/70" : "bg-white/25"
                    }`}
                    aria-label={`Show slide ${index + 1}: ${slide.title}`}
                    aria-current={index === activeIndex ? "true" : undefined}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={goNext}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-transparent text-white/90 transition-all duration-200 ease-out motion-reduce:transition-none hover:scale-[1.02] hover:border-white hover:bg-white hover:text-[var(--bg)] motion-reduce:hover:scale-100 focus-visible:outline focus-visible:outline-1 focus-visible:outline-[var(--accent)] md:h-10 md:w-10 lg:h-11 lg:w-11"
                aria-label="Next mandate slide"
              >
                <ArrowRightIcon />
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

function ArrowLeftIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[1.125rem] w-[1.125rem]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M19 12H5" />
      <path d="M10 7L5 12L10 17" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[1.125rem] w-[1.125rem]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M5 12H19" />
      <path d="M14 7L19 12L14 17" />
    </svg>
  );
}
