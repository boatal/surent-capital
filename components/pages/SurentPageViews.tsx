import type { ReactNode } from "react";
import Link from "next/link";
import { CustomCursor } from "@/components/site/CustomCursor";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { Reveal } from "@/components/site/Reveal";

type FooterLink = {
  href: string;
  label: string;
};

type Scenario = {
  index: string;
  title: ReactNode;
  subtitle: string;
  body: string[];
  outcome: string;
};

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

function PageFooter({ links }: { links: FooterLink[] }) {
  return <Footer links={links} />;
}

function HomeTriptychCard({
  href,
  tag,
  title,
  body,
  linkLabel,
}: {
  href: string;
  tag: string;
  title: ReactNode;
  body: string;
  linkLabel: string;
}) {
  return (
    <Link href={href} className="triptych-card group flex h-full flex-col">
      <span className={sectionTagClass}>{tag}</span>
      <p className="font-serif text-[clamp(1.5rem,2.5vw,2.2rem)] font-light leading-[1.2] text-[#e6e2d8]">
        {title}
      </p>
      <p className="mt-6 max-w-[22rem] text-[0.72rem] font-light leading-[2] tracking-[0.03em] text-[#a09a8e]">
        {body}
      </p>
      <p className="triptych-arrow mt-10">
        {linkLabel} &rarr;
      </p>
    </Link>
  );
}

function HomePage() {
  return (
    <SiteShell>
      <CustomCursor />
      <section id="home-hero">
        <div className="hero-cross-v" />
        <div className="hero-cross-h" />
        <div className="hero-dot" />
        <div className="hero-content">
          <h1 className="hero-h1">
            Capital
            <br />
            that moves
            <br />
            when others
            <br />
            <em>cannot.</em>
          </h1>
          <p className="hero-sub">
            Structured capital for complex real estate. We deploy where timing,
            situation, and precision determine the outcome.
          </p>
        </div>
        <div className="hero-scroll-indicator" aria-hidden="true">
          <span className="scroll-bar" />
          <span>Scroll</span>
        </div>
      </section>

      <section className="home-mandate">
        <Reveal className="home-mandate-left">
          <div>
            <span className={sectionTagClass}>01 - Mandate</span>
            <p className="mt-8 font-serif text-[clamp(2.2rem,4vw,3.8rem)] font-light leading-[1.05] text-[#e6e2d8]">
              We do not offer
              <br />
              financing.
              <br />
              We deploy
              <br />
              <em className="not-italic text-[#c8a96e]">structured capital.</em>
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.18} className="home-mandate-right">
          <div>
            <p className={bodyTextClass}>
              Traditional capital sources fail when timing is compressed,
              situations are complex, or deals fall outside conventional
              mandates. That is precisely where we operate. Surent Capital
              occupies the gap between speed and sophistication - structured
              solutions that institutional lenders cannot provide and
              conventional lenders cannot contemplate.
            </p>
            <ul className="pillar-list">
              {[
                "Structured Capital Deployment",
                "Situation-Driven Underwriting",
                "Execution Without Delay",
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      <section className="home-triptych">
        <HomeTriptychCard
          href="/strategy"
          tag="Strategy"
          title={<>How we think about a deal.</>}
          body="Every capital decision begins with a single question: does this situation demand a structurer, not a processor?"
          linkLabel="Read our strategy"
        />
        <HomeTriptychCard
          href="/scenarios"
          tag="Scenarios"
          title={<>When traditional capital fails.</>}
          body="Real situations. Real stakes. How Surent Capital has moved where others stopped."
          linkLabel="See scenarios"
        />
        <HomeTriptychCard
          href="/process"
          tag="Process"
          title={<>Intake to execution.</>}
          body="How deals move through Surent Capital. No stages that do not serve the outcome."
          linkLabel="See the process"
        />
      </section>

      <section className="home-closing">
        <Reveal>
          <p className={sectionTagClass}>Present your situation</p>
        </Reveal>
        <Reveal delay={0.18}>
          <p className="mx-auto mt-12 max-w-[43.75rem] font-serif text-[clamp(3.2rem,6vw,6rem)] font-light leading-[0.94] tracking-[-0.01em] text-[#e6e2d8]">
            If the deal
            <br />
            is <em className="not-italic text-[#c8a96e]">real,</em>
            <br />
            we will know.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <Link href="/contact" className="btn-primary mt-12" data-cursor-hover>
            <span>Reach the desk</span>
            <span aria-hidden>&rarr;</span>
          </Link>
        </Reveal>
        <Reveal delay={0.44}>
          <p className="mt-8 text-[0.65rem] font-light tracking-[0.08em] text-[#5c5852]">
            Direct sponsors only. We do not respond to unsolicited brokers.
          </p>
        </Reveal>
      </section>

      <PageFooter
        links={[
          { href: "/mandate", label: "Mandate" },
          { href: "/strategy", label: "Strategy" },
          { href: "/scenarios", label: "Scenarios" },
          { href: "/process", label: "Process" },
          { href: "/about", label: "About" },
          { href: "/contact", label: "Contact" },
        ]}
      />
    </SiteShell>
  );
}

function MandatePage() {
  const blocks = [
    {
      numeral: "I",
      title: (
        <>
          We deploy capital.
          <br />
          We do not process applications.
        </>
      ),
      body:
        "The difference is not semantic. Processing is mechanical - a deal moves through a system built for average situations. Deploying capital is judgmental - it requires reading the full picture, seeing the opportunity inside the complexity, and making a decision that a machine cannot replicate. Every Surent Capital engagement begins with a human evaluation, not an automated screening.",
    },
    {
      numeral: "II",
      title: (
        <>
          We select deals.
          <br />
          We do not accept them.
        </>
      ),
      body:
        "Selection implies standards. Every deal we fund reflects our conviction - about the asset, the sponsor, the structure, and the outcome. We maintain that selectivity deliberately. Not because we are inaccessible, but because capital deployed without conviction is capital at risk. Our track record is built on the deals we passed on as much as the ones we funded.",
    },
    {
      numeral: "III",
      title: (
        <>
          We move when
          <br />
          others cannot.
        </>
      ),
      body:
        "Traditional lenders operate within institutional timelines. Committees, cascading approvals, compliance layers - each adding days to a process where days can cost millions. Surent Capital's structure is built for speed without sacrificing rigor. We compress the timeline by elevating the decision to the people who can make it, not the process that delays it.",
    },
    {
      numeral: "IV",
      title: (
        <>
          Certainty is
          <br />
          our product.
        </>
      ),
      body:
        "A term sheet that arrives late is not a term sheet. A commitment that dissolves at the table is not a commitment. When Surent Capital indicates interest, sponsors can proceed with confidence. When we structure a deal, sponsors can close it. That reliability - the absence of uncertainty at the moment it matters most - is the actual value we deliver.",
    },
  ];

  return (
    <SiteShell>
      <section className="site-section relative overflow-hidden border-b border-white/[0.055]">
        <span className="pointer-events-none absolute right-8 top-24 hidden font-serif text-[8rem] font-light tracking-[0.2em] text-[#c8a96e]/[0.04] xl:block">
          MANDATE
        </span>
        <div className="site-container grid gap-12 md:grid-cols-[1.2fr_1fr] md:items-end xl:gap-24">
          <Reveal>
            <div>
              <span className={sectionTagClass}>What we do</span>
              <p className="mt-8 font-serif text-[clamp(3.2rem,6vw,6rem)] font-light leading-[0.94] tracking-[-0.01em] text-[#e6e2d8]">
                Capital
                <br />
                for the
                <br />
                deal that
                <br />
                <em className="not-italic text-[#c8a96e]">exists,</em>
                <br />
                not the one
                <br />
                they wanted.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="flex flex-col gap-8">
              <p className={bodyTextClass}>
                Surent Capital was built around a single observation: the most
                significant real estate opportunities often carry characteristics
                that traditional capital cannot accommodate. The asset is
                unconventional. The timeline is compressed. The borrower profile
                is complex. The structure required does not fit a template.
              </p>
              <p className={bodyTextClass}>
                These are not problems. These are the conditions under which
                Surent Capital operates best. We are not a last resort - we are a
                deliberate choice made by sponsors who understand that the right
                capital source is as important as the deal itself.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="site-section-tight border-b border-white/[0.055]">
        <div className="site-container grid md:grid-cols-2">
          {blocks.map((block, index) => (
            <Reveal key={block.numeral} delay={index % 2 === 0 ? 0 : 0.18}>
              <article
                className={`border-b border-white/[0.055] py-12 md:pr-12 ${
                  index % 2 === 0 ? "md:border-r" : ""
                } ${index >= blocks.length - 2 ? "md:border-b-0" : ""}`}
              >
                <span className="mb-6 block font-serif text-[1.1rem] italic text-[#7a6741]">
                  {block.numeral}
                </span>
                <h2 className="font-serif text-[clamp(1.5rem,2.5vw,2.2rem)] font-light leading-[1.15] text-[#e6e2d8]">
                  {block.title}
                </h2>
                <p className="mt-6 max-w-[40rem] text-[0.78rem] font-light leading-[2.1] tracking-[0.03em] text-[#a09a8e]">
                  {block.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="site-section bg-[#0f0f0d] border-b border-white/[0.055]">
        <div className="site-container grid gap-12 md:grid-cols-2 md:items-center xl:gap-24">
          <Reveal>
            <div>
              <span className={sectionTagClass}>The Surent Position</span>
              <p className="mt-8 font-serif text-[clamp(1.8rem,3vw,2.6rem)] font-light leading-[1.15] text-[#e6e2d8]">
                We are not filling a gap
                <br />
                in the market.
                <br />
                <span className="italic text-[#c8a96e]">We are the market</span>
                <br />
                that others cannot reach.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.18}>
            <blockquote className="border-l border-[#7a6741] pl-8 font-serif text-[clamp(1.8rem,3vw,2.8rem)] font-light italic leading-[1.35] text-[#a09a8e]">
              &quot;The most valuable capital is not the cheapest capital - it is
              the capital that is{" "}
              <strong className="font-light not-italic text-[#e6e2d8]">
                present, structured, and certain
              </strong>{" "}
              when the deal requires it.&quot;
            </blockquote>
          </Reveal>
        </div>
      </section>

      <PageFooter links={[{ href: "/strategy", label: "Strategy ->" }]} />
    </SiteShell>
  );
}

function StrategyPage() {
  const principles = [
    {
      numeral: "I",
      title: (
        <>
          Timing
          <br />
          is the asset.
        </>
      ),
      subtitle:
        "Speed is not a feature we offer - it is the entire investment thesis.",
      body:
        "When a deal requires capital in fourteen days and the incumbent lender needs forty-five, the fourteen-day capital source is not a convenience - it is the enabling condition of the transaction. The sponsor who understands this does not optimize for rate. They optimize for execution.\n\nSurent Capital is built for the deals where speed is the underwriting variable that matters most. Our structure eliminates the decision layers that slow institutional capital. Our team is authorized to commit. Our legal is ready to close. The result is capital that moves at the speed of opportunity, not the speed of bureaucracy.",
    },
    {
      numeral: "II",
      title: (
        <>
          Complexity
          <br />
          is the signal.
        </>
      ),
      subtitle:
        "Where others see a problem, we see an opportunity to be first.",
      body:
        "Conventional capital retreats from complexity. When a deal has unusual characteristics - an unconventional borrower, a layered capital stack, a hybrid asset class, a legal complexity - the institutional response is to decline. That declination creates the opportunity.\n\nSurent Capital leans into complexity with rigorous analysis, not avoidance. We do not simplify deals to fit our models - we build models that fit the deal. Each engagement begins with a clear-eyed evaluation of every complexity and a deliberate decision about whether the risk-adjusted return justifies our capital.",
    },
    {
      numeral: "III",
      title: (
        <>
          Certainty
          <br />
          is the product.
        </>
      ),
      subtitle: "We do not present options. We present a decision.",
      body:
        "Every sponsor who engages Surent Capital will receive one of two responses: a structured commitment or a clear declination. Both are delivered quickly. Neither is ambiguous. This discipline is not a constraint - it is the core of our value proposition.\n\nSponsors who have experienced a lender pull a term sheet days before closing understand why certainty commands a premium. Surent Capital's commitment is not contingent on conditions that emerge post-term sheet. When we commit, the deal is done.",
    },
    {
      numeral: "IV",
      title: (
        <>
          Structure
          <br />
          drives outcome.
        </>
      ),
      subtitle: "The right structure is not decoration. It is the deal.",
      body:
        "A well-structured deal protects the borrower, aligns incentives, and creates a clear path to exit. Poor structure creates friction at every stage - from closing to operation to refinance. Surent Capital's team brings deep structuring experience to every engagement, designing capital solutions that anticipate the deal's full lifecycle, not just its entry point.\n\nWe think about intercreditor dynamics, exit waterfall, construction risk allocation, and refinance scenarios before we think about rate. The result is capital that performs through the deal's evolution, not just at its inception.",
    },
  ];

  const thesisItems = [
    "We occupy that gap by design, not by accident. Our mandate, team, and capital structure all point at the same moment: when execution is everything.",
    "Every investment we make is predicated on the belief that our capital, structured correctly, is the enabling condition of the deal - not merely a component of it.",
    "That belief shapes every decision: who we engage, what we fund, how we structure, and how we hold ourselves accountable to the sponsor and the deal.",
    "We do not diversify into volume. We concentrate into conviction. Fewer deals, executed with absolute precision, at the moment they matter most.",
  ];

  return (
    <SiteShell>
      <section className="site-section border-b border-white/[0.055]">
        <div className="site-container grid gap-12 md:grid-cols-[2fr_3fr] md:items-end xl:gap-24">
          <Reveal>
            <div>
              <span className={sectionTagClass}>How we think</span>
              <p className="mt-8 font-serif text-[clamp(3.2rem,6vw,6rem)] font-light leading-[0.94] tracking-[-0.01em] text-[#e6e2d8]">
                The
                <br />
                <em className="not-italic text-[#c8a96e]">logic</em>
                <br />
                of our
                <br />
                capital.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="flex flex-col gap-8">
              <p className={bodyTextClass}>
                Capital strategy is not a formula. It is a point of view - held
                consistently, applied situationally. Surent Capital&apos;s approach
                to every deal is built on three convictions that have remained
                unchanged since our inception: that timing is the primary
                variable, that complexity is a signal not a warning, and that
                certainty is non-negotiable.
              </p>
              <p className={bodyTextClass}>
                These convictions shape how we evaluate situations, how we
                structure capital, and how we engage with sponsors. They are not
                aspirational - they are operational.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="site-section-tight border-b border-white/[0.055]">
        <div className="site-container">
          {principles.map((principle) => (
            <Reveal key={principle.numeral}>
              <article className="grid gap-8 border-b border-white/[0.055] py-16 last:border-b-0 md:grid-cols-[80px_1fr_1.2fr] md:gap-16">
                <div className="font-serif text-[2.5rem] font-light italic leading-none text-[#7a6741]">
                  {principle.numeral}
                </div>
                <div>
                  <h2 className="font-serif text-[clamp(1.4rem,2.2vw,2rem)] font-light leading-[1.15] text-[#e6e2d8]">
                    {principle.title}
                  </h2>
                  <p className="mt-6 text-[0.72rem] font-light leading-[2] tracking-[0.03em] text-[#a09a8e]">
                    {principle.subtitle}
                  </p>
                </div>
                <div className={bodyTextClass}>
                  {principle.body.split("\n\n").map((paragraph) => (
                    <p key={paragraph} className="mb-6 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
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
              <span className={sectionTagClass}>The Thesis</span>
              <p className="mt-8 font-serif text-[clamp(2rem,3.5vw,3rem)] font-light leading-[1.12] text-[#e6e2d8]">
                The most inefficient
                <br />
                moment in real estate
                <br />
                is the gap between
                <br />
                <em className="not-italic text-[#c8a96e]">a deal ready to close</em>
                <br />
                and capital that cannot move.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.18}>
            <ul className="flex flex-col">
              {thesisItems.map((item) => (
                <li
                  key={item}
                  className="flex gap-8 border-b border-white/[0.055] py-6 text-[0.75rem] font-light leading-[1.9] tracking-[0.03em] text-[#a09a8e] last:border-b-0"
                >
                  <span className="font-serif text-[0.9rem] text-[#c8a96e]">
                    -
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <PageFooter links={[{ href: "/capital", label: "Capital ->" }]} />
    </SiteShell>
  );
}

function CapitalPage() {
  const instruments = [
    {
      title: (
        <>
          Bridge
          <br />
          <em className="not-italic">Lending</em>
        </>
      ),
      body: [
        "Short-term, asset-backed capital deployed when a transaction requires immediacy and the long-term financing solution is identifiable but not yet executable. Bridge positions allow sponsors to close, stabilize, or reposition an asset before moving to permanent capital - without sacrificing the opportunity in the interim.",
        "Surent Capital's bridge positions are underwritten on the asset's as-is and as-stabilized value, the sponsor's execution track record, and the clarity of the exit. We do not require sponsorship profiles that fit a template. We require situations where the capital gap is clear, the asset is defensible, and the path forward is defined.",
      ],
      meta: [
        ["Term", "6 - 24 months"],
        ["LTV", "Up to 75% as-is"],
        ["Timeline", "7 - 21 days to close"],
        ["Asset types", "Multifamily, mixed-use, commercial, land"],
      ],
    },
    {
      title: (
        <>
          Construction
          <br />
          <em className="not-italic">Capital</em>
        </>
      ),
      body: [
        "Structured capital for ground-up development and major renovation projects where the construction timeline, cost certainty, and exit underwriting require a lender who understands the development process - not just the balance sheet.",
        "Surent Capital's construction facilities are structured around the project's draw schedule, cost-to-complete analysis, and market absorption assumptions. We engage construction professionals as part of our diligence process, and we structure disbursements that align with milestones - protecting both the sponsor's capital and ours.",
      ],
      meta: [
        ["Term", "12 - 36 months"],
        ["LTC", "Up to 80% of total cost"],
        ["Structure", "Draw-based disbursement"],
        ["Asset types", "Residential, mixed-use, hospitality"],
      ],
    },
    {
      title: (
        <>
          Mezzanine
          <br />
          <em className="not-italic">&amp; Preferred</em>
        </>
      ),
      body: [
        "Subordinate capital positions that fill the gap between senior debt and equity - allowing sponsors to optimize their capital stack, reduce equity requirements, and increase returns on invested capital while maintaining control of the asset.",
        "Surent Capital's mezzanine and preferred equity positions are structured around the senior lender's intercreditor requirements, the sponsor's waterfall economics, and the specific risk profile of the junior position.",
      ],
      meta: [
        ["Position", "Junior to senior debt"],
        ["Return", "Structured by situation"],
        ["Control", "Non-dilutive to sponsor"],
        ["Intercreditor", "Negotiated as required"],
      ],
    },
    {
      title: (
        <>
          Situational
          <br />
          <em className="not-italic">Capital</em>
        </>
      ),
      body: [
        "Bespoke capital structures for situations that do not fit a defined instrument. Distressed acquisitions, note purchases, deed-in-lieu scenarios, bankruptcy-adjacent situations, partnership restructurings - circumstances where the capital need is real but the structure has no precedent in conventional lending.",
        "Surent Capital approaches these situations with legal and financial rigor, a clear view of the risk-adjusted return, and the creativity to build structures that protect our capital while enabling the sponsor's outcome. These engagements are by referral only.",
      ],
      meta: [
        ["Structure", "Bespoke to situation"],
        ["Access", "Referral only"],
        ["Minimum", "$2M"],
        ["Geography", "Continental US"],
      ],
    },
  ];

  const parameters = [
    ["$1M", "Minimum loan size"],
    ["$25M+", "Maximum single deal"],
    ["75%", "Max LTV (bridge)"],
    ["14 days", "Target close timeline"],
    ["50 states", "Geographic reach"],
    ["100%", "Principal decisions"],
  ];

  return (
    <SiteShell>
      <section className="site-section border-b border-white/[0.055]">
        <div className="site-container">
          <p className={sectionTagClass}>Investment Approach</p>
          <Reveal>
            <p className="mt-8 max-w-[46.875rem] font-serif text-[clamp(3.2rem,6vw,6rem)] font-light leading-[0.94] tracking-[-0.01em] text-[#e6e2d8]">
              The instrument
              <br />
              is built around
              <br />
              the <em className="not-italic text-[#c8a96e]">situation.</em>
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <p className={`${bodyTextClass} mt-8 max-w-[42rem]`}>
              Surent Capital does not arrive with a fixed product to sell. We
              arrive with a set of tools - each designed for a different dimension
              of real estate capital need - and we build the right solution for
              the specific situation in front of us.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="site-section-tight border-b border-white/[0.055]">
        <div className="site-container">
          <Reveal>
            <div className="pb-10">
              <span className={sectionTagClass}>Instruments</span>
            </div>
          </Reveal>
          {instruments.map((instrument, index) => (
            <Reveal key={`instrument-${index}-${instrument.meta[0][1]}`}>
              <article className="grid gap-8 border-t border-white/[0.055] py-12 md:grid-cols-[1fr_1fr_1fr] md:gap-12">
                <h2 className="font-serif text-[1.6rem] font-light leading-[1.15] text-[#e6e2d8]">
                  {instrument.title}
                </h2>
                <div className="text-[0.75rem] font-light leading-[2] tracking-[0.03em] text-[#a09a8e]">
                  {instrument.body.map((paragraph) => (
                    <p key={paragraph} className="mb-6 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <dl className="flex flex-col gap-5 pt-1">
                  {instrument.meta.map(([label, value]) => (
                    <div key={label} className="flex gap-6">
                      <dt className="w-[90px] shrink-0 pt-0.5 text-[0.6rem] uppercase tracking-[0.2em] text-[#5c5852]">
                        {label}
                      </dt>
                      <dd className="text-[0.72rem] text-[#a09a8e]">{value}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="site-section border-b border-white/[0.055] bg-[#0f0f0d]">
        <div className="site-container grid gap-12 md:grid-cols-2 md:items-start xl:gap-24">
          <Reveal>
            <div>
              <span className={sectionTagClass}>Deployment Parameters</span>
              <p className="mt-8 font-serif text-[clamp(1.5rem,2.5vw,2.2rem)] font-light leading-[1.15] text-[#e6e2d8]">
                Where we deploy.
                <br />
                What we require.
              </p>
              <p className={`${bodyTextClass} mt-8 max-w-[34rem]`}>
                These parameters represent our primary deployment range. We
                evaluate situations on a case-by-case basis, and exceptional
                situations may fall outside these ranges.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="grid sm:grid-cols-2">
              {parameters.map(([value, label], index) => (
                <div
                  key={label}
                  className={`border-b border-white/[0.055] py-8 ${
                    index % 2 === 0 ? "sm:pr-8 sm:border-r" : "sm:pl-8"
                  } ${index >= parameters.length - 2 ? "sm:border-b-0" : ""}`}
                >
                  <div className="font-serif text-[2rem] font-light leading-none text-[#c8a96e]">
                    {value}
                  </div>
                  <div className="mt-2 text-[0.62rem] uppercase tracking-[0.15em] text-[#5c5852]">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <PageFooter links={[{ href: "/scenarios", label: "Scenarios ->" }]} />
    </SiteShell>
  );
}

function ScenariosPage() {
  const scenarios: Scenario[] = [
    {
      index: "01",
      title: (
        <>
          The bank pulled out
          <br />
          nine days before close.
        </>
      ),
      subtitle: "Bridge · Multifamily · $4.2M",
      body: [
        "A 32-unit multifamily acquisition in the Southeast was fully contracted, inspected, and cleared for closing. The senior lender - a regional bank - withdrew its commitment eleven days out, citing a shift in internal policy on multifamily concentration. The seller's contract had a hard close date with no extension option. The $4.2M acquisition would collapse unless a capital source could underwrite the deal, issue a commitment, and close in under ten days.",
        "Surent Capital was introduced through a direct sponsor referral on a Tuesday. By Thursday, we had completed our desktop underwriting, reviewed the existing appraisal and rent rolls, and issued a term sheet. Legal was engaged simultaneously. The deal closed the following Wednesday - seven business days from initial conversation.",
      ],
      outcome:
        "The acquisition closed. The sponsor proceeded to complete a light renovation and refinanced into agency financing fourteen months later at a stabilized value 28% above the acquisition basis.",
    },
    {
      index: "02",
      title: (
        <>
          A foreclosure created
          <br />
          a 72-hour window.
        </>
      ),
      subtitle: "Bridge · Commercial · $7.8M",
      body: [
        "A mixed-use commercial property in a high-demand urban corridor was set to go to public auction following the prior owner's default. A well-capitalized sponsor identified the asset as significantly undervalued - existing rents were 40% below market, the building had deferred maintenance that was visible rather than structural, and the submarket vacancy rate was under 4%.",
        "The auction required certified funds within 48 hours of winning the bid and full payment within 72 hours of close. No conventional lender could underwrite and fund in that window. The sponsor had 30% equity available but needed $7.8M in debt capital with no contingencies.",
        "Surent Capital underwrote the deal on the basis of as-is value, the sponsor's track record in similar repositioning scenarios, and a conservative exit assumption based on prevailing market cap rates. We pre-funded through a controlled disbursement structure that allowed the sponsor to bid with certainty.",
      ],
      outcome:
        "The sponsor won the auction. Capital was deployed within the auction window. The asset is currently in active lease-up, with rents trending 18% above the underwriting assumptions at the 12-month mark.",
    },
    {
      index: "03",
      title: (
        <>
          Construction stalled.
          <br />
          The GC had defaulted.
        </>
      ),
      subtitle: "Construction Gap · Residential · $2.9M",
      body: [
        "A 14-unit townhome development was 65% complete when the general contractor filed for bankruptcy. The existing construction lender froze draw disbursements pending resolution of the contractor situation, citing lien subordination concerns. The sponsor had adequate equity and a defined path forward with a replacement GC - but the frozen draw facility made it impossible to re-engage subcontractors and restart construction.",
        "The project needed $2.9M in completion capital structured to accommodate the existing senior lender's lien position and the pending sub-contractor lien risk. Surent Capital engaged legal counsel experienced in construction lien resolution, developed a disbursement protocol that satisfied the senior lender's intercreditor requirements, and structured a completion facility that prioritized subcontractor payoffs as the first draw condition.",
      ],
      outcome:
        "The project restarted within 30 days of Surent Capital's engagement. The development completed four months later. All 14 units sold within 90 days of Certificate of Occupancy.",
    },
    {
      index: "04",
      title: (
        <>
          The sponsor was right.
          <br />
          The credit profile was not.
        </>
      ),
      subtitle: "Bridge · Land · $3.5M",
      body: [
        "A land acquisition opportunity in a rapidly appreciating exurban market was identified by an experienced developer with 22 years in the business and a strong track record of successful entitlements. The land was priced below replacement value, the entitlement path was clear, and the exit thesis was well-documented.",
        "The sponsor's corporate credit profile, however, was complicated by a prior venture that experienced losses during the 2020 market disruption. Every institutional lender approached declined on the basis of the credit profile, without engaging the merits of the specific opportunity.",
        "Surent Capital underwrites sponsors, not credit files. We engaged the sponsor directly, spent two hours reviewing the specific opportunity, and underwrote the land asset on its own merits - entitlement timeline, comparable land sales, development economics, and exit assumptions.",
      ],
      outcome:
        "Surent Capital provided a $3.5M land acquisition facility. Entitlements were received 18 months later. The sponsor executed a ground lease with a regional homebuilder at a land value 2.4x the acquisition basis.",
    },
    {
      index: "05",
      title: (
        <>
          The partnership dissolved
          <br />
          mid-project.
        </>
      ),
      subtitle: "Situational · Mixed-Use · $6.1M",
      body: [
        "A mixed-use development had reached stabilization when one of the two managing partners sought to exit the venture. The remaining partner had the operating expertise, the tenant relationships, and the desire to acquire the departing partner's interest - but the existing senior debt did not permit a partial ownership transfer without lender consent, and the consent process was expected to take 90+ days.",
        "The departing partner's attorneys were pressing for a buyout on a 45-day timeline. Without a capital source willing to engage the complexity of a partner buyout in a constrained consent environment, the deal was likely to result in a forced sale of the entire asset at a discount to market.",
        "Surent Capital structured a $6.1M facility that funded the partner buyout, negotiated a standstill with the senior lender's counsel pending formal consent, and created a bridge position that allowed the remaining partner to acquire full ownership and pursue a recapitalization on a normalized timeline.",
      ],
      outcome:
        "The partnership dissolved cleanly. The remaining partner took full ownership. A conventional recapitalization was executed six months later, repaying Surent Capital and locking in long-term financing on a fully stabilized asset.",
    },
  ];

  return (
    <SiteShell>
      <section className="site-section relative overflow-hidden border-b border-white/[0.055]">
        <span className="absolute inset-y-0 right-0 hidden w-[35%] border-l border-white/[0.055] md:block" />
        <div className="site-container">
          <div className="relative max-w-[43.75rem]">
            <span className={sectionTagClass}>Real situations</span>
            <Reveal>
              <p className="mt-8 font-serif text-[clamp(3.2rem,6vw,6rem)] font-light leading-[0.94] tracking-[-0.01em] text-[#e6e2d8]">
                The deals
                <br />
                that could not
                <br />
                wait.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className={`${bodyTextClass} mt-8`}>
                The following situations represent the types of engagements Surent
                Capital was built to handle. In each case, the defining factor was
                not the asset or the sponsor - it was the capital source willing
                to engage.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="site-section-tight border-b border-white/[0.055]">
        <div className="site-container">
          {scenarios.map((scenario) => (
            <Reveal key={scenario.index}>
              <article className="interaction-card grid gap-0 border-t border-white/[0.055] md:grid-cols-[1fr_1fr]">
                <div className="border-b border-white/[0.055] py-14 md:border-b-0 md:border-r md:pr-12">
                <span className="mb-8 block font-serif text-[0.85rem] italic text-[#7a6741]">
                  {scenario.index}
                </span>
                <h2 className="font-serif text-[clamp(1.5rem,2.5vw,2.2rem)] font-light leading-[1.15] text-[#e6e2d8]">
                  {scenario.title}
                </h2>
                <p className="mt-4 text-[0.65rem] uppercase tracking-[0.2em] text-[#7a6741]">
                  {scenario.subtitle}
                </p>
              </div>
              <div className="py-14 md:pl-12">
                {scenario.body.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mb-8 text-[0.75rem] font-light leading-[2.1] tracking-[0.03em] text-[#a09a8e] last:mb-0"
                  >
                    {paragraph}
                  </p>
                ))}
                <p className="mt-10 border-l border-[#7a6741] pl-6 text-[0.7rem] font-light italic leading-[1.9] text-[#e6e2d8]">
                  {scenario.outcome}
                </p>
              </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <PageFooter links={[{ href: "/process", label: "Process ->" }]} />
    </SiteShell>
  );
}

export function HomePageView() {
  return <HomePage />;
}

export function MandatePageView() {
  return <MandatePage />;
}

export function StrategyPageView() {
  return <StrategyPage />;
}

export function CapitalPageView() {
  return <CapitalPage />;
}

export function ScenariosPageView() {
  return <ScenariosPage />;
}

