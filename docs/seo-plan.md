# Surent Capital SEO Plan

## Current Repo Gap

- Current repo exposes only `/`, `/inquiry`, `/privacy`, and `/terms`.
- Reference experience requires true indexable routes for `/`, `/mandate`, `/strategy`, `/capital`, `/scenarios`, `/process`, `/about`, and `/contact`.
- Recommendation: replace `/inquiry` in primary UX with `/contact`, preserve visible CTA label as `Submit a Deal`, and optionally 301 `/inquiry` to `/contact`.

## Route Map

### `/`
- Page intent: overview of Surent Capital's structured real estate capital platform for sponsors with complex, time-sensitive situations.
- Suggested title: `Surent Capital | Structured Capital For Complex Real Estate`
- Suggested meta description: `Surent Capital provides structured capital for complex real estate situations where timing, complexity, and execution certainty determine the outcome.`
- Canonical: `/`
- Primary schema: `WebPage`, `Organization`, `WebSite`
- Support schema: `BreadcrumbList`
- Internal links: mandate, strategy, scenarios, process, contact
- AI-crawler notes: keep the hero subhead, home mandate copy, triptych copy, and closing sponsor criteria fully server-rendered; those lines do most of the intent-setting.

### `/mandate`
- Page intent: explain when Surent Capital is the right capital source and define its underwriting posture.
- Suggested title: `Mandate | Surent Capital`
- Suggested meta description: `Learn Surent Capital's mandate for deploying structured capital into real estate situations that fall outside conventional lender requirements.`
- Canonical: `/mandate`
- Primary schema: `WebPage`, `BreadcrumbList`
- Support schema: `FinancialService` only if positioned carefully around capital structuring and deployment, not regulated advisory claims. Safer default is `Service`.
- Internal links: strategy, contact, home, about
- AI-crawler notes: preserve the four mandate blocks as semantic H2/H3 content; they are the clearest articulation of the firm's positioning.

### `/strategy`
- Page intent: explain the firm's decision logic, speed thesis, complexity orientation, and commitment discipline.
- Suggested title: `Strategy | Surent Capital`
- Suggested meta description: `See how Surent Capital evaluates timing, complexity, structure, and certainty when deploying capital into real estate transactions.`
- Canonical: `/strategy`
- Primary schema: `WebPage`, `BreadcrumbList`
- Support schema: `Service`
- Internal links: mandate, capital, scenarios, contact
- AI-crawler notes: structure the principles as discrete sections with explicit headings so answer engines can extract the operating thesis cleanly.

### `/capital`
- Page intent: describe the capital types Surent Capital deploys and the parameters that shape deployment.
- Suggested title: `Capital | Surent Capital`
- Suggested meta description: `Explore Surent Capital's bridge, construction, mezzanine, preferred, and situational capital solutions for complex real estate deals.`
- Canonical: `/capital`
- Primary schema: `WebPage`, `BreadcrumbList`
- Support schema: `Service`
- Internal links: strategy, scenarios, process, contact
- AI-crawler notes: each instrument should be a named section with plain-language descriptive copy and visible deployment parameters in HTML.

### `/scenarios`
- Page intent: show concrete situations where structured capital solved a real closing or capitalization problem.
- Suggested title: `Scenarios | Surent Capital`
- Suggested meta description: `Review real-world scenarios that show how Surent Capital responds when traditional capital sources cannot execute.`
- Canonical: `/scenarios`
- Primary schema: `WebPage`, `BreadcrumbList`
- Support schema: `CollectionPage`
- Internal links: capital, process, contact
- AI-crawler notes: keep each scenario as a separate article-like section with title, context, execution summary, and outcome.

### `/process`
- Page intent: explain how deals move from intake to decision, diligence, structuring, and closing.
- Suggested title: `Process | Surent Capital`
- Suggested meta description: `Understand the Surent Capital process for reviewing, structuring, diligencing, and closing complex real estate transactions.`
- Canonical: `/process`
- Primary schema: `WebPage`, `BreadcrumbList`
- Support schema: `HowTo` is not appropriate here because this is firm process, not user instructions. Use `Service` if needed; otherwise keep `WebPage`.
- Internal links: scenarios, contact, mandate
- AI-crawler notes: mark each stage with consistent headings and keep timeline language visible in source for retrieval systems.

### `/about`
- Page intent: provide company perspective, values, leadership identity, and market distinction.
- Suggested title: `About | Surent Capital`
- Suggested meta description: `Read about Surent Capital's perspective, values, and leadership, including Robert World II and the firm's approach to structured real estate capital.`
- Canonical: `/about`
- Primary schema: `AboutPage`, `BreadcrumbList`, `Organization`, `Person`
- Support schema: `ImageObject` for the leadership headshot if desired
- Internal links: mandate, contact, home
- AI-crawler notes: keep company perspective, values, and distinction grid as clean semantic sections; add accurate headshot alt text for Robert World II.

### `/contact`
- Page intent: direct sponsor intake for relevant deal submissions and contact information.
- Suggested title: `Submit A Deal | Surent Capital`
- Suggested meta description: `Submit a real estate opportunity to Surent Capital for review, including deal criteria, sponsor intake, and direct contact information.`
- Canonical: `/contact`
- Primary schema: `ContactPage`, `BreadcrumbList`, `Organization`
- Support schema: `ContactPoint` embedded in `Organization`
- Internal links: process, about, mandate, home
- AI-crawler notes: keep intake criteria as crawlable HTML, not only form placeholders. Label the form clearly for sponsor deal submissions.

### `/privacy`
- Page intent: legal privacy notice.
- Suggested title: `Privacy Policy | Surent Capital`
- Suggested meta description: `Review the Surent Capital privacy policy for information about data collection, use, and contact practices.`
- Canonical: `/privacy`
- Primary schema: `WebPage`

### `/terms`
- Page intent: legal terms.
- Suggested title: `Terms Of Use | Surent Capital`
- Suggested meta description: `Review the Surent Capital terms of use governing access to this website and related communications.`
- Canonical: `/terms`
- Primary schema: `WebPage`

## Metadata Rules

- Use a site-level title template: `%s | Surent Capital`
- Define absolute canonical URLs from a single site URL constant.
- Set route-specific Open Graph fields with consistent brand title and page-specific descriptions.
- Use `summary_large_image` Twitter cards.
- Keep robots as `index, follow` for all public marketing pages.
- Keep privacy and terms indexable unless business wants them excluded.
- Avoid keyword stuffing. Visible copy already carries strong topical signals around structured capital, complex real estate, speed, certainty, bridge, construction, mezzanine, preferred, and situational capital.

## Structured Data Plan

### Sitewide
- `Organization`
  - Name: `Surent Capital`
  - URL: production site URL
  - Logo: site wordmark or brand asset if one exists
  - Contact point: deal submission/contact channel when final data is available
- `WebSite`
  - Name: `Surent Capital`
  - URL: production site URL

### Route-specific
- Home: `WebPage` plus sitewide `Organization` and `WebSite`
- Mandate: `WebPage` with short page description
- Strategy: `WebPage`
- Capital: `WebPage` or `Service`
- Scenarios: `CollectionPage`
- Process: `WebPage`
- About: `AboutPage` + `Person`
- Contact: `ContactPage`

### Person Schema
- Use `Person` for `Robert World II` on `/about`
- Include: name, jobTitle, image, worksFor
- Do not add education, awards, or external profiles unless verified by the user or authoritative source

### Compliance Guardrails
- Do not use `Attorney`, `InvestmentFund`, `BankOrCreditUnion`, `MortgageBroker`, or any schema that implies licensure or regulatory status not stated by the business.
- If `FinancialService` is used, the copy must stay precise: structured capital for real estate sponsors, not consumer finance or regulated investment advice.

## Internal Linking Map

- Home -> mandate, strategy, scenarios, process, contact
- Mandate -> strategy, about, contact
- Strategy -> mandate, capital, scenarios, contact
- Capital -> strategy, scenarios, process, contact
- Scenarios -> capital, process, contact
- Process -> scenarios, contact, mandate
- About -> mandate, contact
- Contact -> process, about, mandate, home
- Footer should expose at least mandate, strategy, scenarios, process, about, contact on all pages.

## Robots, Sitemap, and Crawlability

- Implement `app/robots.ts`
  - Allow all marketing pages
  - Reference sitemap URL
  - Disallow only non-public or API paths if needed
- Implement `app/sitemap.ts`
  - Include `/`, `/mandate`, `/strategy`, `/capital`, `/scenarios`, `/process`, `/about`, `/contact`, `/privacy`, `/terms`
  - Set stable priority and change frequency values
- Optional: add `llms.txt` in `public/` with a concise site summary and key URLs
- Optional: add image entries in sitemap for leadership headshot and any branded OG asset if the framework setup makes that straightforward

## AI-Crawler Readiness

- Keep all core page copy server-rendered with semantic headings and section wrappers.
- Add short, invisible-to-design but visible-in-source summary copy only where needed near page tops; do not materially change the approved look.
- Use descriptive alt text for the leadership headshot and any meaningful imagery.
- Preserve direct wording around:
  - structured capital
  - complex real estate
  - speed
  - certainty
  - bridge capital
  - construction capital
  - mezzanine and preferred equity
  - situational capital
- Avoid collapsible accordions for primary copy; retrieval engines parse continuous HTML more reliably.
- Keep forms supplemented by visible criteria and contact details so the page remains useful even when forms are ignored by crawlers.

## Implementation Notes For Lead Agent

- Consolidate metadata generation in a helper under `lib/seo/metadata.ts`.
- Consolidate schema generation in `lib/seo/schema.ts`.
- Export route-specific metadata from each page file once routes are rebuilt.
- Preserve visible luxury aesthetic; SEO work should happen in metadata, schema, semantic HTML, internal links, alt text, and crawlable copy structure.
- Use `/contact` as the canonical deal-intake route. If `/inquiry` is retained, mark it as a redirect or secondary alias to avoid duplicate intent pages.
