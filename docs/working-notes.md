# Surent Capital Rebuild Working Notes

## Page and Component Inventory

### Required Pages
- `/`
- `/mandate`
- `/strategy`
- `/capital`
- `/scenarios`
- `/process`
- `/about`
- `/contact`
- `/privacy`
- `/terms`

### Shared Components
- `components/site/Logo.tsx`
- `components/site/Header.tsx`
- `components/site/Footer.tsx`
- `components/site/Reveal.tsx`
- `components/site/Section.tsx`
- `components/site/*` new primitives to be added for parity

### Route-Specific Areas
- Home sections in `components/home/*`
- Route page files in `app/**/page.tsx`

## File Ownership Map

### Lead Agent Only
- `app/layout.tsx`
- `app/globals.css`
- `components/site/Header.tsx`
- `components/site/Footer.tsx`
- `components/site/Logo.tsx`
- `lib/seo/*`
- `app/robots.ts`
- `app/sitemap.ts`
- `content/surent-capital/site-content.ts`
- `docs/working-notes.md`

### Agent A: Extraction
- `docs/reference-map.md`
- `docs/parity-checklist.md`

### Agent B: Design System
- `components/site/ButtonPrimary.tsx`
- `components/site/PageHeader.tsx`
- `components/site/SectionTag.tsx`
- `components/site/LeadershipCard.tsx`
- `components/site/ScenarioItem.tsx`
- `components/site/ProcessStep.tsx`
- `components/site/InstrumentItem.tsx`
- `components/site/EditorialCard.tsx`
- `components/site/InfoGrid.tsx`

### Agent C: Route Builder
- `app/page.tsx`
- `app/mandate/page.tsx`
- `app/strategy/page.tsx`
- `app/capital/page.tsx`
- `app/scenarios/page.tsx`
- `app/process/page.tsx`
- `app/about/page.tsx`
- `app/contact/page.tsx`
- route-specific components under `components/home/*` and `components/pages/*`

### Agent D: SEO
- `docs/seo-plan.md`
- notes only for page-level metadata and schema requirements; no protected file edits

### Agent E: QA
- `docs/qa-report.md`

## Dependency Map
- Agent A provides reference structure, copy inventory, and parity checklist to all other agents.
- Agent B depends on Agent A's token and visual pattern extraction.
- Agent C depends on Agent A's structure and copy inventory, and Agent B's primitives.
- Agent D depends on Agent A's page inventory and Agent C's final route set.
- Lead agent integrates shared layout, navigation, footer, metadata wiring, schema helpers, robots, sitemap, and final polish after sub-agent outputs land.
- Agent E audits the integrated result against Agent A outputs and implemented routes.

## Merge Order
1. Extraction artifacts
2. Design primitives
3. Route implementations
4. SEO layer
5. QA findings
6. Lead-agent integration and polish
