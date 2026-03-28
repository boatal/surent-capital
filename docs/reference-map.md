# Surent Capital Reference Map

## Source Files Touched
- `C:\Users\md\Downloads\surentcapital_full_site (1).html`
- `C:\Users\md\projects\surent-capital\app\layout.tsx`
- `C:\Users\md\projects\surent-capital\app\page.tsx`
- `C:\Users\md\projects\surent-capital\app\inquiry\page.tsx`
- `C:\Users\md\projects\surent-capital\app\privacy\page.tsx`
- `C:\Users\md\projects\surent-capital\app\terms\page.tsx`
- `C:\Users\md\projects\surent-capital\components\site\Header.tsx`
- `C:\Users\md\projects\surent-capital\components\site\Footer.tsx`

## Assumptions
- The attached HTML is the visual and content authority, even though it is implemented as a single HTML file with client-side page switching.
- Some characters in the downloaded HTML are mojibake from encoding issues. Intended glyphs are still clear in context:
  - `â€”` => em dash
  - `â†’` => right arrow
  - `Â©` => copyright symbol
  - `30â€“60` => 30-60
- The base64 leadership portrait embedded in the reference must be replaced by the user-supplied headshot.

## Blockers
- None for extraction. The reference HTML was readable and the current repo was accessible.

## Current Repo Snapshot
- Existing top-level pages: `/`, `/inquiry`, `/privacy`, `/terms`
- Missing required top-level pages from reference: `/mandate`, `/strategy`, `/capital`, `/scenarios`, `/process`, `/about`, `/contact`
- Existing design system does not match reference:
  - Fonts use `Inter` and `Playfair Display`, not `Barlow` and `Cormorant Garamond`
  - Current nav is transparent/lightweight and anchor-based, not fixed dark editorial nav with page routes
  - Current footer is privacy/terms utility footer, not the route-aware editorial footer pattern

## Global Experience Map

### Navigation
- Fixed top nav, 70px tall
- Dark translucent background with blur and bottom border
- Left: `Surent Capital` serif wordmark, uppercase, letterspaced
- Center links:
  - Mandate
  - Strategy
  - Capital
  - Scenarios
  - Process
  - About
- Right CTA: `Submit a Deal`
- Mobile:
  - Hamburger shown below 960px
  - Full-screen overlay under nav with large serif links
  - CTA link in gold
- Active state:
  - Gold text
  - Gold underline line animation

### Footer Pattern
- Shared footer base:
  - Dark background continuation
  - Top border
  - Left wordmark
  - Center/right route nav or single next-step link
  - Right muted copyright `© 2025 Surent Capital · Private`
- Footer differs by page:
  - Home: Mandate, Strategy, Scenarios, Process, About, Contact
  - Mandate: Strategy ->
  - Strategy: Capital ->
  - Capital: Scenarios ->
  - Scenarios: Process ->
  - Process: About ->
  - About: Submit a Deal ->
  - Contact: Home, Mandate, Process

### Shared Visual Tokens
- Colors:
  - `--void: #0a0a08`
  - `--deep: #0f0f0d`
  - `--surface: #141412`
  - `--edge: #1c1c1a`
  - `--line: rgba(255,255,255,0.055)`
  - `--line-strong: rgba(255,255,255,0.10)`
  - `--gold: #c8a96e`
  - `--gold-dim: #7a6741`
  - `--gold-pale: rgba(200,169,110,0.08)`
  - `--gold-glow: rgba(200,169,110,0.15)`
  - `--text: #e6e2d8`
  - `--text-mid: #a09a8e`
  - `--muted: #5c5852`
- Typography:
  - Serif display: `Cormorant Garamond`
  - Sans support: `Barlow`
  - Display sizing is large and editorial with very low line-height
  - Uppercase utility text uses high letterspacing
- Shared primitives:
  - `section-tag`
  - `serif-xl`
  - `serif-lg`
  - `serif-md`
  - `gold-italic`
  - `body-text`
  - `gold-line`
  - `btn-primary`
- Borders and lines:
  - Thin low-contrast borders on most section boundaries
  - Gold line accents used sparingly for emphasis
  - Grid separators are structural and visible

### Motion and Interaction Notes
- Reveal-on-scroll:
  - Initial state: opacity 0, translateY(36px)
  - Visible state transitions over `0.85s` with cubic-bezier `(0.16,1,0.3,1)`
  - Stagger helpers: `rd1`, `rd2`, `rd3`, `rd4`
- Home hero has initial line-drawing animation:
  - vertical cross scales in over `2.2s`
  - horizontal cross scales in over `2.2s`
  - center dot fades in after line draw
  - hero headline and subcopy fade up with delays
- Hover treatments:
  - nav underline growth
  - triptych top gold rule expands
  - cards tint with pale gold background
  - instrument name turns gold on hover
  - scenario rows tint with pale gold background
- Custom cursor exists in reference:
  - small gold dot
  - enlarges over interactive elements
- Mobile breakpoint:
  - primary breakpoint at `960px`
  - nav links collapse
  - most two-column layouts collapse to one
  - triptych becomes stacked
  - footer becomes centered column

## Route Inventory

### `/`
#### Section order
1. Fixed global nav
2. Hero
3. Home mandate split section
4. Triptych cards
5. Closing CTA
6. Global footer

#### Copy hierarchy
- H1: `Capital that moves when others cannot.`
- Hero support:
  - `Structured capital for complex real estate. We deploy where timing, situation, and precision determine the outcome.`
- Mandate tag: `01 — Mandate`
- Mandate statement:
  - `We do not offer financing. We deploy structured capital.`
- Mandate body:
  - `Traditional capital sources fail when timing is compressed, situations are complex, or deals fall outside conventional mandates...`
- Pillars:
  - Structured Capital Deployment
  - Situation-Driven Underwriting
  - Execution Without Delay
- Triptych cards:
  - Strategy: `How we think about a deal.`
  - Scenarios: `When traditional capital fails.`
  - Process: `Intake to execution.`
- Closing tag: `Present your situation`
- Closing statement:
  - `If the deal is real, we will know.`
- Closing note:
  - `Direct sponsors only. We do not respond to unsolicited brokers.`

#### Structural notes
- Hero is full viewport with crosshair lines and gold center dot
- Scroll indicator sits bottom-right on desktop only
- Home mandate is two-column, aligned to bottom
- Triptych is 3 equal columns with card borders
- Closing section centers text on darker surface background

### `/mandate`
#### Section order
1. Intro split
2. Four mandate blocks grid
3. Full-width position statement / quote
4. Footer with next link

#### Copy hierarchy
- Tag: `What we do`
- Headline: `Capital for the deal that exists, not the one they wanted.`
- Intro body paragraph 1 begins:
  - `Surent Capital was built around a single observation...`
- Intro body paragraph 2 begins:
  - `These are not problems. These are the conditions under which Surent Capital operates best.`
- Blocks:
  - I: `We deploy capital. We do not process applications.`
  - II: `We select deals. We do not accept them.`
  - III: `We move when others cannot.`
  - IV: `Certainty is our product.`
- Statement tag: `The Surent Position`
- Statement:
  - `We are not filling a gap in the market. We are the market that others cannot reach.`
- Quote:
  - `The most valuable capital is not the cheapest capital — it is the capital that is present, structured, and certain when the deal requires it.`

#### Structural notes
- Large watermark `MANDATE` at top right of intro
- Blocks are 2x2 with borders separating cells
- Final statement section sits on deeper background and uses split layout

### `/strategy`
#### Section order
1. Header split
2. Principles list
3. Thesis split section
4. Footer with next link

#### Copy hierarchy
- Tag: `How we think`
- Headline: `The logic of our capital.`
- Header copy focuses on timing, complexity, certainty
- Principles:
  - I: `Timing is the asset.`
  - II: `Complexity is the signal.`
  - III: `Certainty is the product.`
  - IV: `Structure drives outcome.`
- Thesis tag: `The Thesis`
- Thesis headline:
  - `The most inefficient moment in real estate is the gap between a deal ready to close and capital that cannot move.`
- Thesis list has 4 bullet statements beginning:
  - `We occupy that gap by design...`
  - `Every investment we make...`
  - `That belief shapes every decision...`
  - `We do not diversify into volume...`

#### Structural notes
- Principle rows are 3-column: numeral, title/mini-summary, body
- Thesis section uses dark inset background with bullet list on right

### `/capital`
#### Section order
1. Intro
2. Instruments label + 4 instrument rows
3. Deployment parameters split section
4. Footer with next link

#### Copy hierarchy
- Tag: `Investment Approach`
- Headline: `The instrument is built around the situation.`
- Intro body starts:
  - `Surent Capital does not arrive with a fixed product to sell...`
- Instruments:
  - Bridge Lending
  - Construction Capital
  - Mezzanine & Preferred
  - Situational Capital
- Each instrument has:
  - name
  - 2-paragraph description
  - meta facts
- Parameters tag: `Deployment Parameters`
- Parameters headline:
  - `Where we deploy. What we require.`
- Parameter values:
  - `$1M` minimum loan size
  - `$25M+` maximum single deal
  - `75%` max LTV (bridge)
  - `14 days` target close timeline
  - `50 states` geographic reach
  - `100%` principal decisions

#### Structural notes
- Instrument rows are 3-column and highly editorial
- Hover only shifts name color, not aggressive card treatment
- Parameter grid is 2x3 inside a split section

### `/scenarios`
#### Section order
1. Page header
2. Scenario list
3. Footer with next link

#### Copy hierarchy
- Tag: `Real situations`
- Headline: `The deals that could not wait.`
- Intro copy:
  - `The following situations represent the types of engagements Surent Capital was built to handle...`
- Scenarios:
  - 01 `The bank pulled out nine days before close.` Bridge · Multifamily · $4.2M
  - 02 `A foreclosure created a 72-hour window.` Bridge · Commercial · $7.8M
  - 03 `Construction stalled. The GC had defaulted.` Construction Gap · Residential · $2.9M
  - 04 `The sponsor was right. The credit profile was not.` Bridge · Land · $3.5M
  - 05 `The partnership dissolved mid-project.` Situational · Mixed-Use · $6.1M
- Each scenario includes:
  - narrative problem/opportunity body
  - outcome callout in italic bordered block

#### Structural notes
- Shared page-header treatment with right-side border panel
- Scenario rows are split left/right with border divider
- Entire row gets pale gold tint on hover

### `/process`
#### Section order
1. Intro split
2. Four process steps
3. Commitment / timeline split section
4. Footer with next link

#### Copy hierarchy
- Tag: `How deals move`
- Headline: `No stages that do not serve the outcome.`
- Intro copy explains fast decision-oriented process
- Steps:
  - 01 Day 1: `Intake & Initial Assessment`
  - 02 Days 2 – 5: `Underwriting & Due Diligence`
  - 03 Days 5 – 10: `Structuring & Term Sheet`
  - 04 Days 7 – 21: `Execution & Close`
- Step 1 outcome list:
  - Preliminary interest
  - Conditional interest
  - Clear declination
- Commitment tag: `Our Commitment`
- Commitment headline:
  - `What you can hold us to.`
- Timeline items:
  - 24 hrs initial response
  - 5 days preliminary decision or declination
  - 10 days term sheet for approved transactions
  - 21 days target close
  - Always direct principal access

#### Structural notes
- Steps are 3-column rows: numeral, title block, body/list
- Final promise section uses timeline list on right

### `/about`
#### Section order
1. Opening hero-style section
2. About body split
3. Leadership section
4. Distinction comparison grid
5. Footer with CTA next link

#### Copy hierarchy
- Tag: `Who we are`
- Headline: `Built for the deal that requires more than a lender.`
- Opening body starts:
  - `Surent Capital was founded on a specific conviction...`
- Body left has 3 paragraphs on platform model, alignment, multidisciplinary experience
- Body right heading:
  - `What we stand for.`
- Values:
  - Directness
  - Conviction
  - Rigor
  - Alignment
  - Selectivity
- Leadership tag: `Principal`
- Leadership:
  - Name: `Robert World II`
  - Title: `Chief Executive Officer`
  - Bio begins:
    - `Robert World II founded Surent Capital on the conviction...`
- Distinction tag: `How we are different`
- Distinction heading:
  - `The market has lenders. Surent is something else.`
- Three comparison columns:
  - The conventional lender
  - The hard money lender
  - Surent Capital

#### Structural notes
- Opening includes giant faint `SURENT` watermark
- Leadership card is 2-column with framed portrait
- Portrait ratio is 3:4, object-position top-center, subtle grayscale/contrast
- Distinction grid is 3 columns with Surent column visually emphasized through gold markers

### `/contact`
#### Section order
1. Split contact layout
2. Contact info strip
3. Footer

#### Copy hierarchy
- Left tag: `Submit a deal`
- Headline: `Present your situation.`
- Left body:
  - `We engage principals directly...`
- Criteria heading:
  - `Deals that fit our mandate`
- Criteria bullets:
  - Asset-backed with defensible collateral
  - Defined exit strategy and timeline
  - Sponsor with verifiable execution track record
  - Situation with identifiable capital gap
  - Timeline that rewards decisiveness
  - Minimum $1M capital requirement
- Right tag: `Deal submission`
- Right note:
  - `Complete the fields below. We review every submission personally...`
- Form fields:
  - First name
  - Last name
  - Company / Entity
  - Email
  - Capital type needed
  - Loan amount
  - Asset type
  - Asset location
  - Timeline and situation summary
- Capital type options:
  - Bridge Loan
  - Construction Capital
  - Mezzanine / Preferred Equity
  - Situational / Other
- Legal note:
  - `We do not share submissions. Direct sponsors only.`
- Info strip:
  - Direct line / Principal desk
  - Response time / 1 business day
  - Who we talk to / Principals only

#### Structural notes
- Left and right columns are equal-width split on desktop
- Form styling is underlined minimalist fields, not boxed inputs
- Submit button becomes `Received ✓` in reference demo JS

## Responsive Rules Extracted
- Under `960px`:
  - Global nav horizontal links hidden
  - Hamburger shown
  - Headers/padded sections reduce from 4rem to 2rem side padding
  - Most dual-column layouts collapse to single-column
  - Home triptych stacks
  - Scenario rows collapse to top/bottom
  - Process steps reduce to 2-column with smaller numeral
  - Contact split collapses to stacked left then right
  - Footer becomes vertical and centered
  - Hero scroll indicator hidden

## Engineering Translation Notes for Rebuild
- The HTML uses client-side page toggling; production rebuild should convert this to App Router routes without changing visible sequence.
- All visible copy should stay server-rendered.
- Shared primitives to preserve:
  - page header pattern
  - split intro pattern
  - bordered grid/list rows
  - gold CTA/button treatment
  - reveal classes / stagger delays
- The reference contains no legal/privacy depth besides simple utility pages; those can remain secondary pages unless user specifies richer content.
