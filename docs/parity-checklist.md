# Surent Capital Parity Checklist

## Scope
- Reference authority: `C:\Users\md\Downloads\surentcapital_full_site (1).html`
- Current repo audited: `C:\Users\md\projects\surent-capital`

## Pass / Fail Key
- `PASS`: implemented and materially aligned with reference
- `FAIL`: missing or materially different from reference
- `PARTIAL`: present but not yet parity-safe

## Current Repo Status Summary
- Overall status: `FAIL`
- Reason:
  - reference route architecture not implemented
  - current home structure and copy do not match
  - nav/footer design diverges
  - typography and palette diverge
  - about/contact/reference-specific content missing

## Global Parity
- Fixed dark nav with serif logo, route links, CTA, mobile overlay: `FAIL`
- Active nav state with gold underline and gold active text: `FAIL`
- Fixed 70px nav spacing behavior: `FAIL`
- Footer pattern with route-aware next-link behavior: `FAIL`
- Dark palette fidelity (`--void`, `--deep`, muted gold): `FAIL`
- Serif/sans relationship matching `Cormorant Garamond` + `Barlow`: `FAIL`
- Shared editorial section borders and line treatments: `FAIL`
- Reveal-on-scroll motion system with stagger classes: `PARTIAL`
- Custom cursor behavior from reference: `FAIL`
- Mobile breakpoint behavior around 960px: `FAIL`

## Route Inventory Parity
- `/`: `FAIL`
- `/mandate`: `FAIL`
- `/strategy`: `FAIL`
- `/capital`: `FAIL`
- `/scenarios`: `FAIL`
- `/process`: `FAIL`
- `/about`: `FAIL`
- `/contact`: `FAIL`
- `/privacy`: `PARTIAL`
- `/terms`: `PARTIAL`

## Page-by-Page Checklist

### `/`
- Hero with crosshair lines, center gold dot, and full-viewport composition: `FAIL`
- H1 copy matches reference exactly: `FAIL`
- Home mandate two-column section with exact copy: `FAIL`
- Pillar list with 3 items and gold rules: `FAIL`
- Triptych cards for Strategy / Scenarios / Process: `FAIL`
- Closing CTA section with exact copy and note: `FAIL`
- Home footer with six route links: `FAIL`

### `/mandate`
- Intro split section and watermark treatment: `FAIL`
- Four mandate blocks with exact titles and body copy: `FAIL`
- Surent Position statement block and quote: `FAIL`
- Footer next link to Strategy: `FAIL`

### `/strategy`
- Header split section with exact headline and copy: `FAIL`
- Four principle rows with exact numerals, titles, summaries, and bodies: `FAIL`
- Thesis split section and 4-item list: `FAIL`
- Footer next link to Capital: `FAIL`

### `/capital`
- Intro section with exact headline and support copy: `FAIL`
- Instruments section with four instrument rows: `FAIL`
- Instrument metadata values match reference: `FAIL`
- Deployment Parameters split section with 6 stat cells: `FAIL`
- Footer next link to Scenarios: `FAIL`

### `/scenarios`
- Page header treatment with exact intro copy: `FAIL`
- All 5 scenario rows present: `FAIL`
- Scenario titles, subtitles, and outcomes match reference: `FAIL`
- Hover tint treatment on rows: `FAIL`
- Footer next link to Process: `FAIL`

### `/process`
- Intro split section with exact copy: `FAIL`
- All 4 process steps preserved with correct day ranges: `FAIL`
- Step bullet lists preserved: `FAIL`
- Commitment/timeline section preserved: `FAIL`
- Footer next link to About: `FAIL`

### `/about`
- Opening section with watermark and exact headline: `FAIL`
- Three about body paragraphs preserved: `FAIL`
- Values list of 5 items preserved: `FAIL`
- Leadership card with Robert World II content: `FAIL`
- Replacement headshot integrated with premium portrait crop: `FAIL`
- Distinction comparison grid of 3 columns preserved: `FAIL`
- Footer next link to Submit a Deal: `FAIL`

### `/contact`
- Split layout preserved: `FAIL`
- Left-side deal criteria list preserved: `FAIL`
- Right-side minimalist form field layout preserved: `FAIL`
- Contact info strip preserved: `FAIL`
- Submit CTA copy and behavior aligned: `FAIL`
- Footer route links Home / Mandate / Process: `FAIL`

## Content Parity Checks
- Visible copy remains reference-authentic with no filler: `FAIL`
- Section order matches reference on every page: `FAIL`
- CTA labels match reference:
  - `Submit a Deal`
  - `Reach the desk`
  - route footer next links
  `FAIL`
- Leadership identity preserved:
  - Robert World II
  - Chief Executive Officer
  `FAIL`
- Contact intent preserved:
  - direct sponsors only
  - one business day response language
  `FAIL`

## Structural / UX Checks
- True multi-page routing replacing HTML page toggles without visual drift: `FAIL`
- Keyboard-accessible mobile menu with overlay: `FAIL`
- Buttons versus links mapped semantically: `PARTIAL`
- Forms properly labeled and accessible: `PARTIAL`
- Heading hierarchy page-by-page: `FAIL`
- Internal linking structure mirrors design flow: `FAIL`

## SEO / Discoverability Checks
- Unique page metadata for all required routes: `FAIL`
- Canonical URLs per page: `FAIL`
- Per-page H1 and semantic H2/H3 structure: `FAIL`
- JSON-LD plan not yet implemented: `FAIL`
- Robots route: `FAIL`
- Sitemap route: `FAIL`
- Crawlable server-rendered content for all required pages: `FAIL`
- AI crawler readiness support structure: `FAIL`

## Assets Checks
- Reference headshot placeholder replaced with user image: `FAIL`
- All imagery uses optimized Next.js image pipeline: `FAIL`
- No broken images in current repo state: `PASS`

## Precision Checks for Rebuild QA
- Desktop spacing rhythm matches reference: `PENDING`
- Mobile spacing rhythm matches reference: `PENDING`
- Typography scale and line-height match reference: `PENDING`
- Gold accents used with same restraint: `PENDING`
- Hover behavior matches reference cards/rows/buttons/nav: `PENDING`
- Footer behavior per page matches reference: `PENDING`
- No hydration mismatch: `PENDING`
- No TypeScript errors: `PENDING`
- No blocking ESLint issues: `PENDING`
- No major Lighthouse red flags: `PENDING`

## Recommended Verification Sequence
1. Confirm route inventory exists and all required pages resolve.
2. Confirm global shell parity: nav, mobile menu, footer, fonts, palette, borders.
3. Confirm page copy parity against `docs/reference-map.md`.
4. Confirm interaction parity: reveals, hover lines, card tinting, button motion.
5. Confirm About headshot integration and portrait crop.
6. Confirm metadata, schema, robots, sitemap, canonicals.
7. Run lint/build and responsive spot checks.

## Handoff Notes
- This checklist is intentionally strict. The current repo is closer to a different Surent concept than the provided reference.
- The lead agent should treat `/inquiry` as a replace-or-redirect candidate because the approved reference requires `/contact` with different visible structure and copy.
