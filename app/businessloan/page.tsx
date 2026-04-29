import Link from "next/link";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { Reveal } from "@/components/site/Reveal";
import { SchemaScript } from "@/components/site/SchemaScript";
import { createPageMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, webpageSchema } from "@/lib/seo/schema";

const applicationUrl =
  "https://app.advancefundsnetwork.com/application/RcEBxFNwGGhwe5Z1Mehzaj2vqfm2?partner=6uB577iCWSWiELmF0Pxx2xleo0T2";

const sectionTagClass =
  "text-[0.58rem] font-light uppercase tracking-[0.35em] text-[#7a6741]";
const bodyTextClass =
  "text-[0.76rem] font-light leading-[2] tracking-[0.03em] text-[#a09a8e]";

const heroUses = [
  "Working capital",
  "Equipment and inventory",
  "Expansion and acquisition capital",
  "Short-term cash flow support",
  "Debt consolidation options",
] as const;

const processSteps = [
  {
    number: "01",
    title: "Apply",
    body: "Submit your business and funding details.",
  },
  {
    number: "02",
    title: "Review",
    body: "Reviewed using revenue, credit, time in business, and documentation.",
  },
  {
    number: "03",
    title: "Decide",
    body: "Review available terms and decide whether the structure makes sense.",
  },
] as const;

const scenarios = [
  "Working capital",
  "Inventory purchases",
  "Equipment",
  "Payroll and operating expenses",
  "Marketing and growth",
  "Business acquisition",
  "Bridge cash flow",
  "Refinancing expensive short-term debt",
] as const;

const fitScenarios = [
  "Established businesses with active revenue",
  "Owners looking beyond traditional bank timelines",
  "Businesses managing growth, seasonality, or cash flow gaps",
  "Operators evaluating a purchase, expansion, or refinance",
  "Borrowers who want options before committing to terms",
] as const;

const principles = [
  "Clear intake",
  "Realistic options",
  "Disciplined follow-through",
] as const;

export const metadata = createPageMetadata({
  title: "Business Funding",
  description:
    "Explore business funding options for working capital, inventory, equipment, expansion, acquisitions, and cash flow needs through Surent Capital.",
  path: "/businessloan",
});

export default function BusinessLoanPage() {
  return (
    <>
      <SchemaScript
        schemas={[
          webpageSchema({
            path: "/businessloan",
            name: "Business Funding",
            description:
              "Business funding options for working capital, inventory, equipment, expansion, acquisitions, and cash flow needs.",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Business Funding", path: "/businessloan" },
          ]),
        ]}
      />
      <div className="min-h-screen bg-[#0a0a08] text-[#e6e2d8] selection:bg-[#c8a96e]/20">
        <Header />
        <main className="overflow-hidden pt-20">
          <section className="relative border-b border-white/[0.055]">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />
            <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-white/[0.055] lg:block" />
            <div className="pointer-events-none absolute left-1/2 top-[32%] hidden h-[5px] w-[5px] -translate-x-1/2 rounded-full bg-[#c8a96e] lg:block" />
            <div className="site-container relative py-20 md:py-24 xl:py-32">
              <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 xl:gap-24">
                <Reveal>
                  <div className="max-w-[41rem]">
                    <span className={sectionTagClass}>
                      Surent Capital | Business Funding
                    </span>
                    <h1 className="mt-8 font-serif text-[clamp(3.4rem,7vw,6.7rem)] font-light leading-[0.94] tracking-[-0.02em] text-[#e6e2d8]">
                      Business funding
                      <br />
                      built for{" "}
                      <em className="not-italic text-[#c8a96e]">speed,</em>
                      <br />
                      <em className="not-italic text-[#c8a96e]">
                        flexibility,
                      </em>{" "}
                      and
                      <br />
                      execution.
                    </h1>
                    <p className={`${bodyTextClass} mt-8 max-w-[32rem]`}>
                      Access working capital for growth, inventory, equipment,
                      payroll, acquisitions, and short-term cash flow needs
                      without traditional bank timelines.
                    </p>
                    <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center">
                      <Link href={applicationUrl} className="btn-primary">
                        <span>Get Funded Now</span>
                        <span aria-hidden>&rarr;</span>
                      </Link>
                      <Link
                        href="#funding-uses"
                        className="inline-flex text-[0.66rem] uppercase tracking-[0.24em] text-[#a09a8e] transition-colors hover:text-[#c8a96e]"
                      >
                        Explore Funding Uses
                      </Link>
                    </div>
                    <p className="mt-6 text-[0.64rem] font-light tracking-[0.08em] text-[#5c5852]">
                      Application is subject to underwriting, approval, and
                      program availability.
                    </p>
                  </div>
                </Reveal>

                <Reveal delay={0.18}>
                  <div className="relative flex h-full flex-col justify-between border border-white/[0.055] bg-[#0f0f0d]/80 p-6 sm:p-8">
                    <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#7a6741] to-transparent" />
                    <div>
                      <span className="text-[0.6rem] uppercase tracking-[0.24em] text-[#7a6741]">
                        Funding options for active businesses
                      </span>
                      <div className="mt-8 flex flex-col">
                        {heroUses.map((item) => (
                          <div
                            key={item}
                            className="flex items-center justify-between gap-4 border-b border-white/[0.055] py-4 last:border-b-0"
                          >
                            <span className="font-serif text-[1.1rem] font-light text-[#e6e2d8] sm:text-[1.25rem]">
                              {item}
                            </span>
                            <span className="hidden h-px w-10 shrink-0 bg-[#7a6741] sm:block" />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="mt-8 border-t border-white/[0.055] pt-5">
                      <p className="text-[0.66rem] uppercase tracking-[0.18em] text-[#5c5852]">
                        Structured for timely review and a clear next step.
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          <section className="site-section-tight border-b border-white/[0.055]">
            <div className="site-container">
              <Reveal>
                <div className="max-w-[34rem]">
                  <span className={sectionTagClass}>Start With The Basics</span>
                  <h2 className="mt-8 font-serif text-[clamp(2.2rem,4vw,4rem)] font-light leading-[1.02] text-[#e6e2d8]">
                    Get clarity fast.
                  </h2>
                </div>
              </Reveal>
              <div className="mt-12 grid gap-0 border-t border-white/[0.055] md:grid-cols-3">
                {processSteps.map((step, index) => (
                  <Reveal key={step.number} delay={index * 0.08}>
                    <article
                      className={`py-8 md:py-10 ${
                        index < processSteps.length - 1
                          ? "border-b border-white/[0.055] md:border-b-0 md:border-r"
                          : ""
                      } ${index === 0 ? "md:pr-10" : index === 1 ? "md:px-10" : "md:pl-10"}`}
                    >
                      <span className="block font-serif text-[2.6rem] font-light italic leading-none text-[#7a6741]/80">
                        {step.number}
                      </span>
                      <h3 className="mt-5 font-serif text-[1.55rem] font-light text-[#e6e2d8]">
                        {step.title}
                      </h3>
                      <p className="mt-4 max-w-[18rem] text-[0.72rem] font-light leading-[1.9] tracking-[0.03em] text-[#a09a8e]">
                        {step.body}
                      </p>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          <section
            id="funding-uses"
            className="site-section border-b border-white/[0.055] bg-[#0f0f0d]"
          >
            <div className="site-container">
              <Reveal>
                <div className="max-w-[38rem]">
                  <span className={sectionTagClass}>
                    Flexible Capital For Real Business Needs
                  </span>
                  <h2 className="mt-8 font-serif text-[clamp(2.2rem,4vw,4rem)] font-light leading-[1.02] text-[#e6e2d8]">
                    Common funding scenarios
                  </h2>
                </div>
              </Reveal>
              <div className="mt-12 grid grid-cols-1 border-t border-white/[0.055] sm:grid-cols-2 xl:grid-cols-4">
                {scenarios.map((item, index) => (
                  <Reveal key={item} delay={(index % 4) * 0.06}>
                    <div
                      className={`flex min-h-[130px] items-end border-b border-white/[0.055] px-0 py-6 sm:px-6 xl:px-8 ${
                        index % 2 === 0 ? "sm:border-r" : ""
                      } ${
                        index < 6 ? "xl:border-r" : ""
                      }`}
                    >
                      <div>
                        <span className="mb-4 block h-px w-8 bg-[#7a6741]" />
                        <p className="font-serif text-[1.1rem] font-light leading-[1.2] text-[#e6e2d8]">
                          {item}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          <section className="site-section border-b border-white/[0.055]">
            <div className="site-container grid gap-12 lg:grid-cols-2 lg:gap-20">
              <Reveal>
                <div className="border border-white/[0.055] p-6 sm:p-8">
                  <span className={sectionTagClass}>Good Fit Scenarios</span>
                  <h2 className="mt-8 font-serif text-[clamp(2rem,3.4vw,3rem)] font-light leading-[1.08] text-[#e6e2d8]">
                    Who this is built for.
                  </h2>
                  <p className={`${bodyTextClass} mt-6 max-w-[32rem]`}>
                    Designed for business owners who need practical funding
                    options, faster review, and a clear path to evaluate
                    capital.
                  </p>
                  <ul className="mt-8 flex flex-col">
                    {fitScenarios.map((item) => (
                      <li
                        key={item}
                        className="flex gap-5 border-b border-white/[0.055] py-4 text-[0.72rem] font-light leading-[1.8] tracking-[0.03em] text-[#a09a8e] last:border-b-0"
                      >
                        <span className="mt-[0.55rem] block h-px w-5 shrink-0 bg-[#7a6741]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={0.18}>
                <div className="border border-white/[0.055] bg-[#0f0f0d] p-6 sm:p-8">
                  <span className={sectionTagClass}>Our Approach</span>
                  <h2 className="mt-8 font-serif text-[clamp(2rem,3.4vw,3rem)] font-light leading-[1.08] text-[#e6e2d8]">
                    Capital should be clear before it is fast.
                  </h2>
                  <p className={`${bodyTextClass} mt-6 max-w-[32rem]`}>
                    Surent Capital focuses on clean intake, realistic structure,
                    and disciplined execution. The goal is simple: understand
                    the request, identify possible funding paths, and move the
                    file without unnecessary confusion.
                  </p>
                  <div className="mt-10 grid gap-5 sm:grid-cols-3 sm:gap-0">
                    {principles.map((item, index) => (
                      <div
                        key={item}
                        className={`border-white/[0.055] py-4 sm:py-0 ${
                          index < principles.length - 1
                            ? "border-b sm:border-b-0 sm:border-r"
                            : ""
                        } ${index === 0 ? "sm:pr-5" : index === 1 ? "sm:px-5" : "sm:pl-5"}`}
                      >
                        <span className="mb-3 block h-px w-7 bg-[#c8a96e]" />
                        <p className="font-serif text-[1rem] font-light text-[#e6e2d8]">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </section>

          <section className="site-section relative border-b border-white/[0.055] bg-[#141412]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,169,110,0.08),transparent_40%)]" />
            <div className="site-container relative text-center">
              <Reveal>
                <span className={sectionTagClass}>
                  Ready To Review Your Options?
                </span>
              </Reveal>
              <Reveal delay={0.18}>
                <h2 className="mx-auto mt-8 max-w-[38rem] font-serif text-[clamp(2.6rem,5vw,5rem)] font-light leading-[0.96] tracking-[-0.02em] text-[#e6e2d8]">
                  Start the application.
                </h2>
              </Reveal>
              <Reveal delay={0.3}>
                <p className={`${bodyTextClass} mx-auto mt-6 max-w-[28rem]`}>
                  Provide the basic business information needed for review.
                </p>
              </Reveal>
              <Reveal delay={0.44}>
                <div className="mt-10">
                  <Link href={applicationUrl} className="btn-primary">
                    <span>Get Funded Now</span>
                    <span aria-hidden>&rarr;</span>
                  </Link>
                </div>
              </Reveal>
              <Reveal delay={0.52}>
                <p className="mx-auto mt-10 max-w-[58rem] text-[0.63rem] font-light leading-[1.9] tracking-[0.03em] text-[#5c5852]">
                  Surent Capital does not guarantee approval, terms, rates, or
                  funding. Final terms are subject to underwriting, credit
                  profile, business performance, documentation, program
                  availability, and applicable law. Submitting an application
                  does not create a commitment to lend or fund.
                </p>
              </Reveal>
            </div>
          </section>
        </main>
        <Footer
          links={[
            { href: "/", label: "Home" },
            { href: "/strategy", label: "Strategy" },
            { href: "/contact", label: "Contact" },
          ]}
        />
      </div>
    </>
  );
}
