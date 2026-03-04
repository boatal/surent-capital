import Link from "next/link";
import { Reveal } from "@/components/site/Reveal";
import { Section } from "@/components/site/Section";

export function HeroSection() {
  return (
    <Section minHeight="hero" className="border-t-0">
      <ContourWatermark />
      <div className="pointer-events-none absolute inset-0 opacity-[0.2] lg:hidden">
        <ContourPanel />
      </div>
      <div className="relative z-10 grid items-center gap-12 lg:col-span-12 lg:grid-cols-[13fr_7fr]">
        <Reveal className="grid gap-8 pt-[clamp(6rem,10vh,8rem)]" stagger>
          <h1 className="font-heading max-w-[12ch] text-[clamp(2.25rem,7vw,3.25rem)] leading-[0.98] tracking-[-0.015em] md:text-[clamp(3rem,6vw,4.75rem)] lg:text-[clamp(4.5rem,8vw,7.5rem)] 2xl:-mr-12">
            STRUCTURE
            <br />
            IS THE EDGE
          </h1>
          <p className="max-w-[62ch] text-[var(--text)]/90">
            Structured real estate credit across transitional strategies.
          </p>
          <Link
            href="/inquiry"
            className="link-underline inline-flex items-center gap-3 py-1 text-sm tracking-[0.1em] text-[var(--text)]"
          >
            <span>Submit a Financing Inquiry</span>
            <span aria-hidden>{"->"}</span>
          </Link>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="relative hidden h-[52vh] min-h-[440px] bg-[var(--bg2)] lg:block">
            <ContourPanel />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,transparent_0%,rgba(18,23,28,0.38)_48%,rgba(18,23,28,0.88)_100%)]" />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

function ContourPanel() {
  return (
    <svg
      viewBox="0 0 1000 800"
      className="absolute inset-0 h-full w-full opacity-65"
      aria-hidden
    >
      <defs>
        <pattern id="contour" width="120" height="80" patternUnits="userSpaceOnUse">
          <path
            d="M0 60C20 55 40 45 60 46C90 48 102 70 120 74"
            fill="none"
            className="contour-stroke-a"
            strokeWidth="1"
          />
          <path
            d="M0 35C18 24 32 18 58 18C88 19 106 32 120 45"
            fill="none"
            className="contour-stroke-b"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#contour)" />
    </svg>
  );
}

function ContourWatermark() {
  return (
    <svg
      viewBox="0 0 1800 900"
      className="pointer-events-none absolute -left-[10vw] top-1/2 h-[120%] w-[120%] -translate-y-1/2 opacity-[0.02]"
      aria-hidden
    >
      {Array.from({ length: 10 }).map((_, index) => (
        <path
          key={index}
          d={`M0 ${120 + index * 70} C 280 ${90 + index * 68}, 520 ${170 + index * 60}, 760 ${130 + index * 64} C 1080 ${90 + index * 58}, 1360 ${180 + index * 62}, 1800 ${140 + index * 70}`}
          fill="none"
          stroke="var(--text)"
          strokeWidth="3"
        />
      ))}
    </svg>
  );
}
