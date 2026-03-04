import { ReactNode } from "react";

type MinHeightPreset = "hero" | "chapter" | "band" | "marquee";
type Tone = "bg" | "bg2";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: Tone;
  minHeight?: MinHeightPreset;
  leftRule?: boolean;
};

const minHeightClass: Record<MinHeightPreset, string> = {
  hero: "min-h-[78vh] lg:min-h-[95vh]",
  chapter: "min-h-[75vh] lg:min-h-[85vh] 2xl:min-h-[92vh]",
  band: "min-h-[70vh] lg:min-h-[82vh]",
  marquee: "min-h-[78vh] lg:min-h-[92vh]",
};

export function Section({
  id,
  children,
  className = "",
  tone = "bg",
  minHeight = "chapter",
  leftRule = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative w-screen overflow-hidden border-t border-white/10 ${
        tone === "bg2" ? "bg-[var(--bg2)]" : "bg-[var(--bg)]"
      } ${minHeightClass[minHeight]} py-[clamp(5rem,8vw,9rem)] ${className}`}
    >
      <div className="relative grid w-full grid-cols-1 px-6 md:px-10 lg:grid-cols-12 lg:px-16 2xl:px-24">
        {leftRule ? (
          <span
            aria-hidden
            className="pointer-events-none absolute bottom-[clamp(5rem,8vw,9rem)] top-[clamp(5rem,8vw,9rem)] hidden w-px bg-[var(--accent)]/45 lg:left-16 lg:block 2xl:left-24"
          />
        ) : null}
        {children}
      </div>
    </section>
  );
}
