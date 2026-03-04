"use client";

import { useState } from "react";
import { useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/site/Reveal";
import { Section } from "@/components/site/Section";

const modes = [
  {
    key: "direct",
    label: "DIRECT",
    title: "Direct",
    primary:
      "Balance sheet capital for conviction-backed transactions requiring speed, control, and certainty.",
    expanded:
      "Selective internal capital deployment for bridge or acquisition scenarios where execution discipline matters.",
  },
  {
    key: "institutional",
    label: "INSTITUTIONAL",
    title: "Institutional",
    primary:
      "Aligned institutional relationships for transactions requiring scale, complexity, or specialty collateral.",
    expanded:
      "Efficient execution with consistent underwriting and sponsor alignment.",
  },
  {
    key: "structured",
    label: "STRUCTURED",
    title: "Structured",
    primary:
      "Layered capital engineered around asset performance and defined exits.",
    expanded:
      "Senior and subordinate positions structured to match business plans and protect downside exposure.",
  },
] as const;

export function PlatformSection() {
  const [activeMode, setActiveMode] = useState<(typeof modes)[number]["key"]>("direct");
  const reduceMotion = useReducedMotion();
  const active = modes.find((mode) => mode.key === activeMode) ?? modes[0];

  return (
    <Section id="platform" tone="bg2" minHeight="chapter">
      <div className="grid gap-8 lg:col-span-12">
        <Reveal className="grid gap-6" stagger>
          <p className="font-heading text-[12px] uppercase tracking-[0.28em] text-[#B8A27A]/90">
            CAPITAL PLATFORM
          </p>
          <h2 className="font-heading max-w-[20ch] text-4xl md:text-6xl">
            Deployment, Structured
          </h2>
          <p className="max-w-[70ch] leading-7 text-[var(--muted)]">
            Direct balance sheet capital where conviction is high. Institutional
            alignment where scale or complexity requires it.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="grid grid-cols-12 items-center gap-x-[clamp(24px,4vw,64px)] gap-y-8">
            <div className="order-2 col-span-12 flex flex-col justify-center lg:order-1 lg:col-span-5">
              <div className="flex gap-2 overflow-x-auto pb-1">
                {modes.map((mode) => {
                  const isActive = mode.key === activeMode;
                  return (
                    <button
                      key={mode.key}
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => setActiveMode(mode.key)}
                      className={`relative whitespace-nowrap px-1 py-2 text-left text-[12px] uppercase tracking-[0.16em] transition-colors duration-200 ease-out focus-visible:outline focus-visible:outline-1 focus-visible:outline-[var(--accent)] ${
                        isActive
                          ? "font-semibold text-[var(--accent)]"
                          : "font-medium text-white/55 hover:text-white/75"
                      }`}
                    >
                      {mode.label}
                      <span
                        className={`absolute bottom-0 left-0 h-px bg-[var(--accent)] transition-all duration-200 ease-out ${
                          isActive ? "w-full opacity-90" : "w-0 opacity-0"
                        }`}
                        aria-hidden
                      />
                    </button>
                  );
                })}
              </div>
              <div
                className="mt-3"
                style={{ transition: reduceMotion ? "none" : "opacity 200ms ease-out" }}
              >
                <h3 className="font-heading text-2xl md:text-3xl">{active.title}</h3>
                <p className="mt-4 max-w-[520px] text-[var(--text)]/90">{active.primary}</p>
                <p className="mt-4 max-w-[520px] text-[var(--muted)]">{active.expanded}</p>
              </div>
            </div>

            <div className="order-1 col-span-12 flex items-center justify-center lg:order-2 lg:col-span-7">
              <div className="aspect-square w-full max-w-none bg-black/30 p-[clamp(24px,4vw,40px)] shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset] md:max-w-[460px]">
                <div className="flex h-full flex-col justify-center">
                  <p className="mb-3 text-[11px] uppercase tracking-[0.22em] text-white/70">
                    DEPLOYED CAPITAL CAPACITY
                  </p>
                  <p className="mb-4 font-heading text-[clamp(3.5rem,7vw,5.25rem)] leading-none tracking-[-0.02em]">
                    $50M
                  </p>
                  <p className="max-w-[350px] leading-[1.4] text-[var(--text)]/90">
                    Per transaction commitments across bridge, construction, and
                    transitional real estate credit.
                  </p>
                  <p className="mt-4 max-w-[350px] text-sm leading-[1.4] text-[var(--muted)]">
                    Individual allocations calibrated to transaction size and capital
                    stack.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
