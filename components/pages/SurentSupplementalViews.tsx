import type { ReactNode } from "react";
import Image from "next/image";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { Reveal } from "@/components/site/Reveal";
import { SurentContactForm } from "./SurentContactForm";

const shellClass =
  "min-h-screen bg-[#0a0a08] text-[#e6e2d8] selection:bg-[#c8a96e]/20";
const sectionTagClass =
  "text-[0.58rem] font-light uppercase tracking-[0.35em] text-[#7a6741]";
const bodyTextClass =
  "text-[0.78rem] font-light leading-[2.1] tracking-[0.03em] text-[#a09a8e]";

function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className={shellClass}>
      <Header />
      <main className="pt-20">{children}</main>
    </div>
  );
}

export function ProcessPageView() {
  const steps = [
    {
      index: "01",
      subtitle: "Day 1",
      title: "Intake & Initial Assessment",
      body:
        "Every engagement begins with a concise review of the sponsor, the asset, the capital need, and the timeline. We are not collecting data for a queue. We are determining whether the situation merits immediate attention.",
      bullets: [
        "Preliminary interest",
        "Conditional interest",
        "Clear declination",
      ],
    },
    {
      index: "02",
      subtitle: "Days 2 - 5",
      title: "Underwriting & Due Diligence",
      body:
        "If a situation fits our mandate, underwriting begins immediately. We review the asset, the sponsor, the structure, the timeline, and the exit. Third-party diligence begins only when it advances the decision, not because a checklist demands it.",
      bullets: [
        "Asset and market review",
        "Sponsor track record review",
        "Structure and exit analysis",
      ],
    },
    {
      index: "03",
      subtitle: "Days 5 - 10",
      title: "Structuring & Term Sheet",
      body:
        "Once conviction is established, we structure the transaction around the actual situation - not the closest existing template. Economics, covenants, intercreditor dynamics, disbursement controls, and closing mechanics are all addressed before paper goes out.",
      bullets: [
        "Situation-specific economics",
        "Intercreditor and legal alignment",
        "Executable term sheet",
      ],
    },
    {
      index: "04",
      subtitle: "Days 7 - 21",
      title: "Execution & Close",
      body:
        "The final stage is execution, not re-underwriting. Legal, diligence, and closing process move in parallel. The sponsor stays in direct contact with the people making decisions, and the deal moves to close on the shortest credible path.",
      bullets: [
        "Direct principal coordination",
        "Parallel legal and diligence workstreams",
        "Closing on an execution timeline",
      ],
    },
  ];

  const timeline = [
    ["24 hrs", "Initial response to qualified submissions"],
    ["5 days", "Preliminary decision or clear declination"],
    ["10 days", "Term sheet for approved transactions"],
    ["21 days", "Target close for executable situations"],
    ["Always", "Direct principal access throughout"],
  ];

  return (
    <SiteShell>
      <section className="site-section border-b border-white/[0.055]">
        <div className="site-container grid gap-12 md:grid-cols-2 md:items-end xl:gap-24">
          <Reveal>
            <div>
              <span className={sectionTagClass}>How deals move</span>
              <p className="mt-8 font-serif text-[clamp(3.2rem,6vw,6rem)] font-light leading-[0.94] tracking-[-0.01em] text-[#e6e2d8]">
                No stages
                <br />
                that do not serve
                <br />
                the <em className="not-italic text-[#c8a96e]">outcome.</em>
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.18}>
            <p className={bodyTextClass}>
              Most capital processes are built around the lender&apos;s comfort,
              not the deal&apos;s requirements. Surent Capital&apos;s process is
              built around one objective: arriving at a clear decision -
              commitment or declination - as quickly as rigorous evaluation
              allows.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="site-section-tight border-b border-white/[0.055]">
        <div className="site-container">
          {steps.map((step) => (
            <Reveal key={step.index}>
              <article className="grid gap-8 border-b border-white/[0.055] py-16 md:grid-cols-[100px_1fr_1fr] md:gap-16 last:border-b-0">
              <div className="font-serif text-[4rem] font-light italic leading-none text-[#7a6741]/70">
                {step.index}
              </div>
              <div>
                <p className="mb-5 text-[0.62rem] uppercase tracking-[0.22em] text-[#c8a96e]">
                  {step.subtitle}
                </p>
                <h2 className="font-serif text-[clamp(1.8rem,2.5vw,2.4rem)] font-light leading-[1.1] text-[#e6e2d8]">
                  {step.title}
                </h2>
              </div>
              <div>
                <p className="text-[0.75rem] font-light leading-[2.1] tracking-[0.03em] text-[#a09a8e]">
                  {step.body}
                </p>
                <ul className="mt-6 flex flex-col gap-4">
                  {step.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-4 text-[0.7rem] font-light leading-[1.8] text-[#a09a8e]"
                    >
                      <span className="mt-[0.55rem] block h-px w-5 shrink-0 bg-[#7a6741]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="site-section border-b border-white/[0.055] bg-[#0f0f0d]">
        <div className="site-container grid gap-12 md:grid-cols-2 md:items-center xl:gap-24">
          <Reveal>
            <div>
              <span className={sectionTagClass}>Our Commitment</span>
              <p className="mt-8 font-serif text-[clamp(2rem,3.5vw,3rem)] font-light leading-[1.12] text-[#e6e2d8]">
                What you can
                <br />
                hold us to.
              </p>
              <p className={`${bodyTextClass} mt-8 max-w-[34rem]`}>
                Every sponsor who engages Surent Capital will receive a decision
                within 5 business days of submitting a complete package. Every
                term sheet we issue reflects a real commitment. Every closing we
                schedule, we execute.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="flex flex-col">
              {timeline.map(([day, description]) => (
                <div
                  key={day}
                  className="flex gap-10 border-b border-white/[0.055] py-6 last:border-b-0"
                >
                  <div className="min-w-20 font-serif text-[1.4rem] font-light italic leading-none text-[#c8a96e]">
                    {day}
                  </div>
                  <p className="pt-1 text-[0.72rem] leading-[1.8] text-[#a09a8e]">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <Footer links={[{ href: "/about", label: "About ->" }]} />
    </SiteShell>
  );
}

export function AboutPageView() {
  const values = [
    [
      "Directness",
      "We say yes or no clearly. Ambiguity wastes time sponsors do not have.",
    ],
    [
      "Conviction",
      "Every deal we fund reflects a deliberate, principal-level decision.",
    ],
    ["Rigor", "Speed never replaces underwriting. It sharpens it."],
    [
      "Alignment",
      "The people who commit the capital are the people who execute the closing.",
    ],
    ["Selectivity", "We do fewer deals on purpose. Precision requires it."],
  ];

  const columns = [
    {
      heading: "The conventional lender",
      items: [
        "Approval by committee over 30-60 days",
        "Template-based underwriting",
        "Declines complexity on principle",
        "No direct principal access",
        "Conditional commitments that can change",
        "Volume-driven, not conviction-driven",
      ],
      highlight: false,
    },
    {
      heading: "The hard money lender",
      items: [
        "Fast but surface-level underwriting",
        "Limited structuring sophistication",
        "Rate-driven, not outcome-driven",
        "Cannot handle complex capital stacks",
        "Servicing that creates friction",
        "Not a strategic capital partner",
      ],
      highlight: false,
    },
    {
      heading: "Surent Capital",
      items: [
        "Principal decision in 5 days",
        "Situation-built structures",
        "Complexity is the advantage",
        "Direct principal throughout",
        "Commitments that close",
        "Conviction-driven deployment",
      ],
      highlight: true,
    },
  ];

  return (
    <SiteShell>
      <section className="site-section relative overflow-hidden border-b border-white/[0.055]">
        <div className="site-container">
          <Reveal>
            <div className="max-w-[48.75rem]">
              <span className={sectionTagClass}>Who we are</span>
              <p className="mt-8 font-serif text-[clamp(3.2rem,6vw,6rem)] font-light leading-[0.94] tracking-[-0.01em] text-[#e6e2d8]">
                Built for the deal
                <br />
                that requires more
                <br />
                than a <em className="not-italic text-[#c8a96e]">lender.</em>
              </p>
              <p className={`${bodyTextClass} mt-8 max-w-[36.25rem]`}>
                Surent Capital was founded on a specific conviction: that the
                most consequential real estate transactions are the ones that do
                not fit the existing capital infrastructure. The founders built
                Surent to be the capital source they wished had existed - fast,
                structured, certain, and genuinely engaged with the complexity of
                each deal.
              </p>
            </div>
          </Reveal>
        </div>
        <span className="pointer-events-none absolute bottom-8 right-[-2rem] hidden whitespace-nowrap font-serif text-[9rem] font-light tracking-[0.1em] text-[#c8a96e]/[0.03] xl:block">
          SURENT
        </span>
      </section>

      <section className="site-section border-b border-white/[0.055]">
        <div className="site-container grid gap-12 md:grid-cols-2 md:items-start xl:gap-24">
          <Reveal>
            <div className="flex flex-col gap-10">
            <p className="text-[0.8rem] font-light leading-[2.2] tracking-[0.03em] text-[#a09a8e]">
              We operate as a principal-led platform, not a layered institution.
              That distinction matters. Every mandate we accept is evaluated by
              the people who will ultimately structure it, commit it, and close
              it.
            </p>
            <p className="text-[0.8rem] font-light leading-[2.2] tracking-[0.03em] text-[#a09a8e]">
              That structure creates an alignment that institutional capital
              cannot replicate. When Surent Capital commits to a deal, the
              people who made that commitment are the people who close it,
              service it, and resolve it. There is no hand-off. There is no
              committee to re-approve. The decision made on day one is the
              commitment honored on closing day.
            </p>
            <p className="text-[0.8rem] font-light leading-[2.2] tracking-[0.03em] text-[#a09a8e]">
              Our perspective is shaped by direct experience across structured
              finance, real estate investment, legal complexity, and sponsor
              execution. That multidisciplinary fluency allows us to see the
              full structure of a deal quickly - not just one slice of it.
            </p>
            </div>
          </Reveal>
          <Reveal delay={0.18}>
            <div>
              <h2 className="font-serif text-[clamp(1.5rem,2.5vw,2.2rem)] font-light leading-[1.15] text-[#e6e2d8]">
                What we stand for.
              </h2>
              <div className="mt-8 flex flex-col">
                {values.map(([title, description]) => (
                  <div key={title} className="border-b border-white/[0.055] py-8 last:border-b-0">
                    <h3 className="font-serif text-[1.3rem] font-light text-[#e6e2d8]">
                      {title}
                    </h3>
                    <p className="mt-2 text-[0.7rem] font-light leading-[1.9] text-[#5c5852]">
                      {description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="site-section border-b border-white/[0.055]">
        <div className="site-container">
          <Reveal>
            <div className="mb-12">
              <span className={sectionTagClass}>Principal</span>
            </div>
          </Reveal>
          <div className="grid gap-12 md:grid-cols-[320px_1fr] md:items-start xl:gap-24">
          <Reveal>
            <div className="relative isolate max-w-[20rem]">
              <Image
                src="/images/surent/robert-world-ii-headshot.jpg"
                alt="Robert World II, Chief Executive Officer of Surent Capital"
                width={640}
                height={853}
                className="relative z-10 aspect-[3/4] w-full object-cover object-center object-top"
              />
              <span className="pointer-events-none absolute inset-[1.2rem_-1.2rem_-1.2rem_1.2rem] z-0 border border-[#7a6741]" />
            </div>
          </Reveal>
            <Reveal delay={0.18}>
              <div className="pt-4">
              <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-light leading-[1.1] text-[#e6e2d8]">
                Robert World II
              </h2>
              <p className="mt-3 text-[0.65rem] uppercase tracking-[0.3em] text-[#c8a96e]">
                Chief Executive Officer
              </p>
              <div className="my-11 h-px w-10 bg-[#7a6741]" />
              <p className="max-w-[32.5rem] text-[0.8rem] font-light leading-[2.2] tracking-[0.03em] text-[#a09a8e]">
                Robert World II founded Surent Capital on the conviction that
                the most consequential real estate opportunities are routinely
                passed over by capital sources unable to match their complexity
                or speed. With a background spanning structured finance, real
                estate investment, and capital markets, he built Surent to
                operate where institutional capital stops - deploying with the
                rigor of a major fund and the decisiveness of a single
                principal.
              </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="site-section border-b border-white/[0.055] bg-[#0f0f0d]">
        <div className="site-container">
          <Reveal>
            <div className="mb-12">
              <span className={sectionTagClass}>How we are different</span>
              <p className="mt-8 font-serif text-[clamp(1.5rem,2.5vw,2.2rem)] font-light leading-[1.15] text-[#e6e2d8]">
                The market has lenders.
                <br />
                <em className="not-italic text-[#c8a96e]">Surent is something else.</em>
              </p>
            </div>
          </Reveal>
          <div className="grid gap-10 md:grid-cols-3 md:gap-0">
            {columns.map((column, index) => (
              <Reveal key={column.heading}>
                <div
                  className={`border-b border-white/[0.055] pb-10 md:border-b-0 ${
                    index < columns.length - 1 ? "md:border-r" : ""
                  } ${
                    index === 0
                      ? "md:pr-12"
                      : index === columns.length - 1
                        ? "md:pl-12"
                        : "md:px-12"
                  }`}
                >
                  <span className="mb-8 block text-[0.6rem] uppercase tracking-[0.25em] text-[#7a6741]">
                    {column.heading}
                  </span>
                  <div className="flex flex-col gap-3">
                    {column.items.map((item) => (
                      <div
                        key={item}
                        className={`flex gap-4 text-[0.73rem] leading-[2] ${
                          column.highlight ? "text-[#e6e2d8]" : "text-[#a09a8e]"
                        }`}
                      >
                        {column.highlight ? (
                          <span className="mt-[0.6rem] block h-px w-4 shrink-0 bg-[#c8a96e]" />
                        ) : null}
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer links={[{ href: "/contact", label: "Submit a Deal ->" }]} />
    </SiteShell>
  );
}

export function ContactPageView() {
  const criteria = [
    "Asset-backed with defensible collateral",
    "Defined exit strategy and timeline",
    "Sponsor with verifiable execution track record",
    "Situation with identifiable capital gap",
    "Timeline that rewards decisiveness",
    "Minimum $1M capital requirement",
  ];

  const info = [
    {
      label: "Direct line",
      value: "Principal desk",
      body:
        "For time-sensitive situations, submit the form and note urgency. We monitor submissions continuously.",
    },
    {
      label: "Response time",
      value: "1 business day",
      body:
        "Every qualified submission receives a direct response. No auto-replies, no processing queues.",
    },
    {
      label: "Who we talk to",
      value: "Principals only",
      body:
        "We engage directly with deal sponsors. Broker submissions are not accepted through this channel.",
    },
  ];

  return (
    <SiteShell>
      <section className="site-section border-b border-white/[0.055]">
        <div className="site-container grid md:grid-cols-2">
          <div className="flex flex-col justify-between border-b border-white/[0.055] py-0 md:border-b-0 md:border-r md:pr-12">
            <Reveal>
              <div>
                <span className={sectionTagClass}>Submit a deal</span>
                <p className="mt-8 font-serif text-[clamp(3.2rem,6vw,6rem)] font-light leading-[0.94] tracking-[-0.01em] text-[#e6e2d8]">
                  Present
                  <br />
                  your
                  <br />
                  <em className="not-italic text-[#c8a96e]">situation.</em>
                </p>
                <p className={`${bodyTextClass} mt-8 max-w-[32rem]`}>
                  We engage principals directly. If the deal is real, we will
                  evaluate it with full seriousness and respond within one
                  business day with a clear indication of interest or a direct
                  declination.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-16 md:mt-0">
                <p className="mb-6 text-[0.7rem] uppercase tracking-[0.08em] text-[#5c5852]">
                  Deals that fit our mandate
                </p>
                <ul className="flex flex-col">
                  {criteria.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-6 border-b border-white/[0.055] py-5 text-[0.7rem] tracking-[0.08em] text-[#5c5852] last:border-b-0"
                    >
                      <span className="block h-[5px] w-[5px] shrink-0 rounded-full border border-[#7a6741]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <div className="pt-16 md:pt-0 md:pl-12">
            <Reveal>
              <SurentContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="site-section-tight border-b border-white/[0.055]">
        <div className="site-container grid md:grid-cols-3">
          {info.map((item, index) => (
            <Reveal key={item.label}>
              <div
                className={`border-b border-white/[0.055] py-4 md:border-b-0 ${
                  index < info.length - 1 ? "md:border-r md:pr-12" : "md:pl-12"
                }`}
              >
              <span className="mb-3 block text-[0.58rem] uppercase tracking-[0.28em] text-[#7a6741]">
                {item.label}
              </span>
              <div className="font-serif text-[1.1rem] font-light text-[#e6e2d8]">
                {item.value}
              </div>
              <p className="mt-2 text-[0.65rem] leading-[1.7] text-[#5c5852]">
                {item.body}
              </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Footer
        links={[
          { href: "/", label: "Home" },
          { href: "/mandate", label: "Mandate" },
          { href: "/process", label: "Process" },
        ]}
      />
    </SiteShell>
  );
}
