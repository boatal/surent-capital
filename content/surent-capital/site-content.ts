export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.surentcapital.com";
export const fallbackSiteUrl = "https://www.surentcapital.com";
export const contactEmail = "rworld@surentgroup.com";

export const siteName = "Surent Capital";
export const companyName = siteName;

export const navItems = [
  { href: "/mandate", label: "Mandate" },
  { href: "/strategy", label: "Strategy" },
  { href: "/capital", label: "Capital" },
  { href: "/scenarios", label: "Scenarios" },
  { href: "/process", label: "Process" },
  { href: "/about", label: "About" },
] as const;

export const primaryNav = navItems;

export const homeContent = {
  heroTitle: ["Capital", "that moves", "when others", "cannot."],
  heroSub:
    "Structured capital for complex real estate. We deploy where timing, situation, and precision determine the outcome.",
  mandateTag: "01 — Mandate",
  mandateTitle: [
    "We do not offer",
    "financing.",
    "We deploy",
    "structured capital.",
  ],
  mandateBody:
    "Traditional capital sources fail when timing is compressed, situations are complex, or deals fall outside conventional mandates. That is precisely where we operate. Surent Capital occupies the gap between speed and sophistication — structured solutions that institutional lenders cannot provide and conventional lenders cannot contemplate.",
  mandatePillars: [
    "Structured Capital Deployment",
    "Situation-Driven Underwriting",
    "Execution Without Delay",
  ],
  triptych: [
    {
      href: "/strategy",
      tag: "Strategy",
      title: "How we think about a deal.",
      body:
        "Every capital decision begins with a single question: does this situation demand a structurer, not a processor?",
      cta: "Read our strategy →",
    },
    {
      href: "/scenarios",
      tag: "Scenarios",
      title: "When traditional capital fails.",
      body:
        "Real situations. Real stakes. How Surent Capital has moved where others stopped.",
      cta: "See scenarios →",
    },
    {
      href: "/process",
      tag: "Process",
      title: "Intake to execution.",
      body:
        "How deals move through Surent Capital. No stages that do not serve the outcome.",
      cta: "See the process →",
    },
  ],
  closingTag: "Present your situation",
  closingTitle: ["If the deal", "is real,", "we will know."],
  closingNote:
    "Direct sponsors only. We do not respond to unsolicited brokers.",
} as const;

export const mandateContent = {
  tag: "What we do",
  title: [
    "Capital",
    "for the",
    "deal that",
    "exists,",
    "not the one",
    "they wanted.",
  ],
  intro: [
    "Surent Capital was built around a single observation: the most significant real estate opportunities often carry characteristics that traditional capital cannot accommodate. The asset is unconventional. The timeline is compressed. The borrower profile is complex. The structure required does not fit a template.",
    "These are not problems. These are the conditions under which Surent Capital operates best. We are not a last resort — we are a deliberate choice made by sponsors who understand that the right capital source is as important as the deal itself.",
  ],
  blocks: [
    {
      numeral: "I",
      title: ["We deploy capital.", "We do not process applications."],
      body:
        "The difference is not semantic. Processing is mechanical — a deal moves through a system built for average situations. Deploying capital is judgmental — it requires reading the full picture, seeing the opportunity inside the complexity, and making a decision that a machine cannot replicate. Every Surent Capital engagement begins with a human evaluation, not an automated screening.",
    },
    {
      numeral: "II",
      title: ["We select deals.", "We do not accept them."],
      body:
        "Selection implies standards. Every deal we fund reflects our conviction — about the asset, the sponsor, the structure, and the outcome. We maintain that selectivity deliberately. Not because we are inaccessible, but because capital deployed without conviction is capital at risk. Our track record is built on the deals we passed on as much as the ones we funded.",
    },
    {
      numeral: "III",
      title: ["We move when", "others cannot."],
      body:
        "Traditional lenders operate within institutional timelines. Committees, cascading approvals, compliance layers — each adding days to a process where days can cost millions. Surent Capital's structure is built for speed without sacrificing rigor. We compress the timeline by elevating the decision to the people who can make it, not the process that delays it.",
    },
    {
      numeral: "IV",
      title: ["Certainty is", "our product."],
      body:
        "A term sheet that arrives late is not a term sheet. A commitment that dissolves at the table is not a commitment. When Surent Capital indicates interest, sponsors can proceed with confidence. When we structure a deal, sponsors can close it. That reliability — the absence of uncertainty at the moment it matters most — is the actual value we deliver.",
    },
  ],
  positionTag: "The Surent Position",
  positionTitle: [
    "We are not filling a gap",
    "in the market.",
    "We are the market",
    "that others cannot reach.",
  ],
  quote:
    '"The most valuable capital is not the cheapest capital — it is the capital that is present, structured, and certain when the deal requires it."',
} as const;

export const strategyContent = {
  tag: "How we think",
  title: ["The", "logic", "of our", "capital."],
  intro: [
    "Capital strategy is not a formula. It is a point of view — held consistently, applied situationally. Surent Capital's approach to every deal is built on three convictions that have remained unchanged since our inception: that timing is the primary variable, that complexity is a signal not a warning, and that certainty is non-negotiable.",
    "These convictions shape how we evaluate situations, how we structure capital, and how we engage with sponsors. They are not aspirational — they are operational.",
  ],
  principles: [
    {
      numeral: "I",
      title: ["Timing", "is the asset."],
      subtitle:
        "Speed is not a feature we offer — it is the entire investment thesis.",
      body:
        "When a deal requires capital in fourteen days and the incumbent lender needs forty-five, the fourteen-day capital source is not a convenience — it is the enabling condition of the transaction. The sponsor who understands this does not optimize for rate. They optimize for execution.\n\nSurent Capital is built for the deals where speed is the underwriting variable that matters most. Our structure eliminates the decision layers that slow institutional capital. Our team is authorized to commit. Our legal is ready to close. The result is capital that moves at the speed of opportunity, not the speed of bureaucracy.",
    },
    {
      numeral: "II",
      title: ["Complexity", "is the signal."],
      subtitle: "Where others see a problem, we see an opportunity to be first.",
      body:
        "Conventional capital retreats from complexity. When a deal has unusual characteristics — an unconventional borrower, a layered capital stack, a hybrid asset class, a legal complexity — the institutional response is to decline. That declination creates the opportunity.\n\nSurent Capital leans into complexity with rigorous analysis, not avoidance. We do not simplify deals to fit our models — we build models that fit the deal. Each engagement begins with a clear-eyed evaluation of every complexity and a deliberate decision about whether the risk-adjusted return justifies our capital.",
    },
    {
      numeral: "III",
      title: ["Certainty", "is the product."],
      subtitle: "We do not present options. We present a decision.",
      body:
        "Every sponsor who engages Surent Capital will receive one of two responses: a structured commitment or a clear declination. Both are delivered quickly. Neither is ambiguous. This discipline is not a constraint — it is the core of our value proposition.\n\nSponsors who have experienced a lender pull a term sheet days before closing understand why certainty commands a premium. Surent Capital's commitment is not contingent on conditions that emerge post-term sheet. When we commit, the deal is done.",
    },
    {
      numeral: "IV",
      title: ["Structure", "drives outcome."],
      subtitle: "The right structure is not decoration. It is the deal.",
      body:
        "A well-structured deal protects the borrower, aligns incentives, and creates a clear path to exit. Poor structure creates friction at every stage — from closing to operation to refinance. Surent Capital's team brings deep structuring experience to every engagement, designing capital solutions that anticipate the deal's full lifecycle, not just its entry point.\n\nWe think about intercreditor dynamics, exit waterfall, construction risk allocation, and refinance scenarios before we think about rate. The result is capital that performs through the deal's evolution, not just at its inception.",
    },
  ],
  thesisTag: "The Thesis",
  thesisTitle: [
    "The most inefficient",
    "moment in real estate",
    "is the gap between",
    "a deal ready to close",
    "and capital that cannot move.",
  ],
  thesisPoints: [
    "We occupy that gap by design, not by accident. Our mandate, team, and capital structure all point at the same moment: when execution is everything.",
    "Every investment we make is predicated on the belief that our capital, structured correctly, is the enabling condition of the deal — not merely a component of it.",
    "That belief shapes every decision: who we engage, what we fund, how we structure, and how we hold ourselves accountable to the sponsor and the deal.",
    "We do not diversify into volume. We concentrate into conviction. Fewer deals, executed with absolute precision, at the moment they matter most.",
  ],
} as const;

export const capitalContent = {
  tag: "Investment Approach",
  title: ["The instrument", "is built around", "the situation."],
  intro:
    "Surent Capital does not arrive with a fixed product to sell. We arrive with a set of tools — each designed for a different dimension of real estate capital need — and we build the right solution for the specific situation in front of us.",
  instrumentsTag: "Instruments",
  instruments: [
    {
      title: ["Bridge", "Lending"],
      body:
        "Short-term, asset-backed capital deployed when a transaction requires immediacy and the long-term financing solution is identifiable but not yet executable. Bridge positions allow sponsors to close, stabilize, or reposition an asset before moving to permanent capital — without sacrificing the opportunity in the interim.\n\nSurent Capital's bridge positions are underwritten on the asset's as-is and as-stabilized value, the sponsor's execution track record, and the clarity of the exit. We do not require sponsorship profiles that fit a template. We require situations where the capital gap is clear, the asset is defensible, and the path forward is defined.",
      meta: [
        ["Term", "6 – 24 months"],
        ["LTV", "Up to 75% as-is"],
        ["Timeline", "7 – 21 days to close"],
        ["Asset types", "Multifamily, mixed-use, commercial, land"],
      ],
    },
    {
      title: ["Construction", "Capital"],
      body:
        "Structured capital for ground-up development and major renovation projects where the construction timeline, cost certainty, and exit underwriting require a lender who understands the development process — not just the balance sheet.\n\nSurent Capital's construction facilities are structured around the project's draw schedule, cost-to-complete analysis, and market absorption assumptions. We engage construction professionals as part of our diligence process, and we structure disbursements that align with milestones — protecting both the sponsor's capital and ours.",
      meta: [
        ["Term", "12 – 36 months"],
        ["LTC", "Up to 80% of total cost"],
        ["Structure", "Draw-based disbursement"],
        ["Asset types", "Residential, mixed-use, hospitality"],
      ],
    },
    {
      title: ["Mezzanine", "& Preferred"],
      body:
        "Subordinate capital positions that fill the gap between senior debt and equity — allowing sponsors to optimize their capital stack, reduce equity requirements, and increase returns on invested capital while maintaining control of the asset.\n\nSurent Capital's mezzanine and preferred equity positions are structured around the senior lender's intercreditor requirements, the sponsor's waterfall economics, and the specific risk profile of the junior position.",
      meta: [
        ["Position", "Junior to senior debt"],
        ["Return", "Structured by situation"],
        ["Control", "Non-dilutive to sponsor"],
        ["Intercreditor", "Negotiated as required"],
      ],
    },
    {
      title: ["Situational", "Capital"],
      body:
        "Bespoke capital structures for situations that do not fit a defined instrument. Distressed acquisitions, note purchases, deed-in-lieu scenarios, bankruptcy-adjacent situations, partnership restructurings — circumstances where the capital need is real but the structure has no precedent in conventional lending.\n\nSurent Capital approaches these situations with legal and financial rigor, a clear view of the risk-adjusted return, and the creativity to build structures that protect our capital while enabling the sponsor's outcome. These engagements are by referral only.",
      meta: [
        ["Structure", "Bespoke to situation"],
        ["Access", "Referral only"],
        ["Minimum", "$2M"],
        ["Geography", "Continental US"],
      ],
    },
  ],
  parametersTag: "Deployment Parameters",
  parametersTitle: ["Where we deploy.", "What we require."],
  parametersBody:
    "These parameters represent our primary deployment range. We evaluate situations on a case-by-case basis, and exceptional situations may fall outside these ranges.",
  parameters: [
    ["$1M", "Minimum loan size"],
    ["$25M+", "Maximum single deal"],
    ["75%", "Max LTV (bridge)"],
    ["14 days", "Target close timeline"],
    ["50 states", "Geographic reach"],
    ["100%", "Principal decisions"],
  ],
} as const;

export const scenariosContent = {
  tag: "Real situations",
  title: ["The deals", "that could not", "wait."],
  intro:
    "The following situations represent the types of engagements Surent Capital was built to handle. In each case, the defining factor was not the asset or the sponsor — it was the capital source willing to engage.",
  scenarios: [
    {
      index: "01",
      title: ["The bank pulled out", "nine days before close."],
      subtitle: "Bridge · Multifamily · $4.2M",
      body:
        "A 32-unit multifamily acquisition in the Southeast was fully contracted, inspected, and cleared for closing. The senior lender — a regional bank — withdrew its commitment eleven days out, citing a shift in internal policy on multifamily concentration. The seller's contract had a hard close date with no extension option. The $4.2M acquisition would collapse unless a capital source could underwrite the deal, issue a commitment, and close in under ten days.\n\nSurent Capital was introduced through a direct sponsor referral on a Tuesday. By Thursday, we had completed our desktop underwriting, reviewed the existing appraisal and rent rolls, and issued a term sheet. Legal was engaged simultaneously. The deal closed the following Wednesday — seven business days from initial conversation.",
      outcome:
        "The acquisition closed. The sponsor proceeded to complete a light renovation and refinanced into agency financing fourteen months later at a stabilized value 28% above the acquisition basis.",
    },
    {
      index: "02",
      title: ["A foreclosure created", "a 72-hour window."],
      subtitle: "Bridge · Commercial · $7.8M",
      body:
        "A mixed-use commercial property in a high-demand urban corridor was set to go to public auction following the prior owner's default. A well-capitalized sponsor identified the asset as significantly undervalued — existing rents were 40% below market, the building had deferred maintenance that was visible rather than structural, and the submarket vacancy rate was under 4%.\n\nThe auction required certified funds within 48 hours of winning the bid and full payment within 72 hours of close. No conventional lender could underwrite and fund in that window. The sponsor had 30% equity available but needed $7.8M in debt capital with no contingencies.\n\nSurent Capital underwrote the deal on the basis of as-is value, the sponsor's track record in similar repositioning scenarios, and a conservative exit assumption based on prevailing market cap rates. We pre-funded through a controlled disbursement structure that allowed the sponsor to bid with certainty.",
      outcome:
        "The sponsor won the auction. Capital was deployed within the auction window. The asset is currently in active lease-up, with rents trending 18% above the underwriting assumptions at the 12-month mark.",
    },
    {
      index: "03",
      title: ["Construction stalled.", "The GC had defaulted."],
      subtitle: "Construction Gap · Residential · $2.9M",
      body:
        "A 14-unit townhome development was 65% complete when the general contractor filed for bankruptcy. The existing construction lender froze draw disbursements pending resolution of the contractor situation, citing lien subordination concerns. The sponsor had adequate equity and a defined path forward with a replacement GC — but the frozen draw facility made it impossible to re-engage subcontractors and restart construction.\n\nThe project needed $2.9M in completion capital structured to accommodate the existing senior lender's lien position and the pending sub-contractor lien risk. Surent Capital engaged legal counsel experienced in construction lien resolution, developed a disbursement protocol that satisfied the senior lender's intercreditor requirements, and structured a completion facility that prioritized subcontractor payoffs as the first draw condition.",
      outcome:
        "The project restarted within 30 days of Surent Capital's engagement. The development completed four months later. All 14 units sold within 90 days of Certificate of Occupancy.",
    },
    {
      index: "04",
      title: ["The sponsor was right.", "The credit profile was not."],
      subtitle: "Bridge · Land · $3.5M",
      body:
        "A land acquisition opportunity in a rapidly appreciating exurban market was identified by an experienced developer with 22 years in the business and a strong track record of successful entitlements. The land was priced below replacement value, the entitlement path was clear, and the exit thesis was well-documented.\n\nThe sponsor's corporate credit profile, however, was complicated by a prior venture that experienced losses during the 2020 market disruption. Every institutional lender approached declined on the basis of the credit profile, without engaging the merits of the specific opportunity.\n\nSurent Capital underwrites sponsors, not credit files. We engaged the sponsor directly, spent two hours reviewing the specific opportunity, and underwrote the land asset on its own merits — entitlement timeline, comparable land sales, development economics, and exit assumptions.",
      outcome:
        "Surent Capital provided a $3.5M land acquisition facility. Entitlements were received 18 months later. The sponsor executed a ground lease with a regional homebuilder at a land value 2.4x the acquisition basis.",
    },
    {
      index: "05",
      title: ["The partnership dissolved", "mid-project."],
      subtitle: "Situational · Mixed-Use · $6.1M",
      body:
        "A mixed-use development had reached stabilization when one of the two managing partners sought to exit the venture. The remaining partner had the operating expertise, the tenant relationships, and the desire to acquire the departing partner's interest — but the existing senior debt did not permit a partial ownership transfer without lender consent, and the consent process was expected to take 90+ days.\n\nThe departing partner's attorneys were pressing for a buyout on a 45-day timeline. Without a capital source willing to engage the complexity of a partner buyout in a constrained consent environment, the deal was likely to result in a forced sale of the entire asset at a discount to market.\n\nSurent Capital structured a $6.1M facility that funded the partner buyout, negotiated a standstill with the senior lender's counsel pending formal consent, and created a bridge position that allowed the remaining partner to acquire full ownership and pursue a recapitalization on a normalized timeline.",
      outcome:
        "The partnership dissolved cleanly. The remaining partner took full ownership. A conventional recapitalization was executed six months later, repaying Surent Capital and locking in long-term financing on a fully stabilized asset.",
    },
  ],
} as const;

export const processContent = {
  tag: "How deals move",
  title: ["No stages", "that do not", "serve the", "outcome."],
  intro: [
    "Most capital processes are built around the lender's comfort, not the deal's requirements. Surent Capital's process is built around one objective: arriving at a clear decision — commitment or declination — as quickly as rigorous evaluation allows.",
    "There are four stages. Each has a defined purpose. None exists to create delay. Every sponsor can expect to know where they stand at every moment.",
  ],
  steps: [
    {
      number: "01",
      subtitle: "Day 1",
      title: ["Intake &", "Initial Assessment"],
      body:
        "Every engagement begins with a direct conversation — principal to principal. We do not route deals through intake forms and processing queues. When a sponsor reaches out, they speak with someone who can evaluate the situation and provide an initial response within 24 hours.\n\nThe initial assessment covers the essential dimensions of the opportunity: asset type and location, capital requirement, timeline, exit thesis, and sponsor profile.",
      bullets: [
        "Preliminary interest — we want to proceed to full underwriting",
        "Conditional interest — we need specific additional information",
        "Clear declination — the deal does not fit our mandate, and we say so immediately",
      ],
    },
    {
      number: "02",
      subtitle: "Days 2 – 5",
      title: ["Underwriting &", "Due Diligence"],
      body:
        "Full underwriting is initiated immediately upon indication of preliminary interest. We do not wait for a signed NDA or a fee to begin evaluating a deal. Our underwriting process is parallel, not sequential — legal review, property analysis, market evaluation, and sponsor assessment happen simultaneously.",
      bullets: [
        "Asset-level analysis: as-is value, as-stabilized projection, comparables",
        "Market analysis: submarket dynamics, absorption, comparable transactions",
        "Sponsor evaluation: track record, execution capacity, alignment",
        "Exit analysis: primary and secondary exit scenarios, timeline stress test",
        "Legal review: title, existing liens, encumbrances, contract terms",
      ],
    },
    {
      number: "03",
      subtitle: "Days 5 – 10",
      title: ["Structuring &", "Term Sheet"],
      body:
        "If underwriting supports a commitment, we move directly to structuring. We build the capital structure that best fits the deal's requirements, constraints, and risk profile, then present it as a complete term sheet. Our term sheets are not indicative — they reflect our actual commitment, subject only to confirmatory due diligence items identified during underwriting.",
      bullets: [
        "Loan amount, LTV/LTC, and advance schedule",
        "Interest rate, structure (fixed/floating), and accrual method",
        "Term, extension options, and prepayment provisions",
        "Reserves, holdbacks, and release conditions",
        "Closing conditions and confirmatory items",
      ],
    },
    {
      number: "04",
      subtitle: "Days 7 – 21",
      title: ["Execution &", "Close"],
      body:
        "Once a term sheet is executed, we move to close. Our legal team is pre-engaged and works on a parallel track with underwriting, which means loan documents are substantially prepared before the term sheet is signed. We do not introduce new conditions at close. What is agreed in the term sheet is what closes.",
      bullets: [
        "Loan documentation prepared and circulated within 48 hours of term sheet execution",
        "Title and insurance requirements confirmed simultaneously",
        "Funding coordinated with title company on sponsor's required date",
        "Post-close servicing assigned with dedicated point of contact",
      ],
    },
  ],
  promiseTag: "Our Commitment",
  promiseTitle: ["What you can hold us to."],
  promiseBody:
    "Every sponsor who engages Surent Capital will receive a decision within 5 business days of submitting a complete package. Every term sheet we issue reflects a real commitment. Every closing we schedule, we execute.",
  timeline: [
    ["24 hrs", "Initial response to every qualified inquiry"],
    ["5 days", "Preliminary decision or clear declination"],
    ["10 days", "Term sheet issued for approved transactions"],
    ["21 days", "Target close from initial engagement"],
    ["Always", "Direct principal access throughout the process"],
  ],
} as const;

export const aboutContent = {
  tag: "Who we are",
  title: ["Built for", "the deal", "that requires", "more", "than", "a lender."],
  intro:
    "Surent Capital was founded on a specific conviction: that the most consequential real estate transactions are the ones that do not fit the existing capital infrastructure. The founders built Surent to be the capital source they wished had existed — fast, structured, certain, and genuinely engaged with the complexity of each deal.",
  body: [
    "We are not a fund with a mandate to deploy within a vintage. We are not a bank constrained by concentration limits and committee timelines. We are not a broker looking for the right lender to match with your deal. We are a capital platform — principals deploying our own capital, making our own decisions, and accountable directly to the outcome.",
    "That structure creates an alignment that institutional capital cannot replicate. When Surent Capital commits to a deal, the people who made that commitment are the people who close it, service it, and resolve it. There is no hand-off. There is no committee to re-approve. The decision made on day one is the commitment honored on closing day.",
    "Our team brings experience across structured finance, real estate development, capital markets, and legal. We have been on both sides of the table — as sponsors who needed capital and as capital sources who provided it. That experience informs every engagement: we know what a sponsor needs, and we know how to build a structure that delivers it.",
  ],
  valuesTitle: ["What we", "stand for."],
  values: [
    [
      "Directness",
      "We say what we think. We do what we say. Sponsors deserve to know where they stand at every moment — not at the end of a protracted process.",
    ],
    [
      "Conviction",
      "We do not hedge our commitments with conditions designed to allow us to exit. When we commit, we are committed. Our track record of closing reflects this.",
    ],
    [
      "Rigor",
      "Speed is not a substitute for underwriting. We move fast because our process is efficient, not because we skip the analysis. Every deal we fund has been thoroughly evaluated.",
    ],
    [
      "Alignment",
      "We are only compensated when the deal closes and performs. That alignment — our interests and the sponsor's interests pointed in the same direction — is structural, not aspirational.",
    ],
    [
      "Selectivity",
      "Not every deal earns our capital. That selectivity protects our ability to move decisively on the deals that do. Quality over volume is not a positioning statement — it is how we operate.",
    ],
  ],
  principalTag: "Principal",
  leader: {
    name: "Robert World II",
    title: "Chief Executive Officer",
    bio:
      "Robert World II founded Surent Capital on the conviction that the most consequential real estate opportunities are routinely passed over by capital sources unable to match their complexity or speed. With a background spanning structured finance, real estate investment, and capital markets, he built Surent to operate where institutional capital stops — deploying with the rigor of a major fund and the decisiveness of a single principal.",
    image: "/images/surent/robert-world-ii-headshot.jpg",
    alt: "Robert World II, Chief Executive Officer of Surent Capital",
  },
  distinctionTag: "How we are different",
  distinctionTitle: ["The market has lenders.", "Surent is something else."],
  distinction: [
    {
      heading: "The conventional lender",
      items: [
        "Approval by committee over 30–60 days",
        "Template-based underwriting",
        "Declines complexity on principle",
        "No direct principal access",
        "Conditional commitments that can change",
        "Volume-driven, not conviction-driven",
      ],
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
    },
    {
      heading: "Surent Capital",
      highlighted: true,
      items: [
        "Principal decision in 5 days",
        "Situation-built structures",
        "Complexity is the advantage",
        "Direct principal throughout",
        "Commitments that close",
        "Conviction-driven deployment",
      ],
    },
  ],
} as const;

export const contactContent = {
  tag: "Submit a deal",
  title: ["Present", "your", "situation."],
  intro:
    "We engage principals directly. If the deal is real, we will evaluate it with full seriousness and respond within one business day with a clear indication of interest or a direct declination.",
  criteriaLabel: "Deals that fit our mandate",
  criteria: [
    "Asset-backed with defensible collateral",
    "Defined exit strategy and timeline",
    "Sponsor with verifiable execution track record",
    "Situation with identifiable capital gap",
    "Timeline that rewards decisiveness",
    "Minimum $1M capital requirement",
  ],
  submissionTag: "Deal submission",
  submissionNote:
    "Complete the fields below. We review every submission personally. You will hear from us within one business day.",
  info: [
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
  ],
} as const;

export const footerSets = {
  home: [
    { href: "/mandate", label: "Mandate" },
    { href: "/strategy", label: "Strategy" },
    { href: "/scenarios", label: "Scenarios" },
    { href: "/process", label: "Process" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
  mandate: [{ href: "/strategy", label: "Strategy →" }],
  strategy: [{ href: "/capital", label: "Capital →" }],
  capital: [{ href: "/scenarios", label: "Scenarios →" }],
  scenarios: [{ href: "/process", label: "Process →" }],
  process: [{ href: "/about", label: "About →" }],
  about: [{ href: "/contact", label: "Submit a Deal →" }],
  contact: [
    { href: "/", label: "Home" },
    { href: "/mandate", label: "Mandate" },
    { href: "/process", label: "Process" },
  ],
} as const;

export const pageFooters = {
  "/": footerSets.home,
  "/mandate": footerSets.mandate,
  "/strategy": footerSets.strategy,
  "/capital": footerSets.capital,
  "/scenarios": footerSets.scenarios,
  "/process": footerSets.process,
  "/about": footerSets.about,
  "/contact": footerSets.contact,
} as const;
