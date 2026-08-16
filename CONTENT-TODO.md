# CW Metals Inc. — Content & Verification Checklist

Every `[[VERIFY]]` and `[[CONTENT NEEDED]]` item must be resolved **before going live** under the real domain. Do not launch with placeholder text visible.

---

## Section 1 — Hero

- [ ] **[[VERIFY: founding year]]** — "Since 1990" removed from eyebrow pending confirmation. Restore with correct year once confirmed, or leave as-is.

---

## Section 2 — "No Original? No Problem." Process Section

- [ ] **[[CONTENT NEEDED: process photography]]** — Three images required:
  1. Archival photo reference used as source
  2. 3D-printed mold
  3. Finished stamped piece installed
  *Cezary to supply. Section photo grid will replace the orange callout block once images are provided.*

---

## Section 3 — Services

- [ ] **[[VERIFY: shop borough and street address]]** — "Brooklyn shop" removed from services intro. Restore with verified address once confirmed.
- [ ] **[[VERIFY: laser bed dimensions and max material thickness by alloy]]** — Removed from Division 03 card. Add back once confirmed: "Maximum bed size: [X″ × Y″]. Sheet thickness: up to [Z″] in steel / [Z″] in aluminum."

---

## Section 4 — Portfolio

- [ ] **[[CONTENT NEEDED: project captions]]** — All 22 gallery images currently captioned generically. Cezary to supply for each image:
  - Building / project name
  - Address and borough
  - What was fabricated (cornice, coping, stamped panel, etc.)
  - Material
  - Year completed
  - Architect and General Contractor (if known)

- [ ] **[[CONTENT NEEDED: named project details]]**
  - A. Philip Randolph Houses (Harlem) — confirm scope, year, architect
  - Sullivan Street (SoHo) — confirm profile source was archival photography, year, architect
  - TEP Charter School (153 Sherman Ave, Manhattan) — confirm scope, year
  - Tres Puentes Residential Complex (Bronx) — confirm scope, year, architect

- [ ] **[[CONTENT NEEDED: case studies]]** — 4–6 full case study pages to be built once project data is supplied.

---

## Section 5 — Awards

- [ ] **[[CONTENT NEEDED: all eight award records]]** — Cezary to supply from award certificates or program books:
  - All 6 Lucy G. Moses Preservation Award years, project names, and project architects
  - Both Preservation League of NY State award years, project names, and project architects
  - Format needed: Year | Award | Project Name | Architect

  Known: 2017 | Preservation League Excellence | A. Philip Randolph Houses, Phase One | Architect [[VERIFY]]

---

## Section 6 — RFQ Portal

- [ ] **[[VERIFY: who receives RFQs]]** — Add estimator's direct name alongside estimating@cwmetalsinc.com
- [ ] **[[VERIFY: upload end-to-end]]** — Test file upload works, including 250 MB limit, on desktop and mobile

---

## Section 7 — Compliance & Credentials

- [ ] **[[VERIFY: full legal entity name and registered address]]**
- [ ] **[[VERIFY: years in business]]**
- [ ] **[[VERIFY: GL/WC insurance limits]]**
- [ ] **[[VERIFY: bonding capacity]]**
- [ ] **[[VERIFY: EMR (Experience Modification Rate)]]**
- [ ] **[[VERIFY: union affiliation]]** — Is CW Metals a union shop? If yes, which local?
- [ ] **[[VERIFY: MWBE/SBE/DBE certification status]]**

---

## Section 8 — About / Leadership

- [ ] **[[CONTENT NEEDED: Cezary Witek biography]]** — One paragraph: years in trade, background, credentials. Written in third person.
- [ ] **[[CONTENT NEEDED: shop photograph]]** — Interior or exterior photo of the shop facility.

---

## Section 9 — Footer / Contact

- [ ] **[[VERIFY: full shop street address, borough, zip]]** — Currently absent from entire site. Required for LocalBusiness schema and contact section.
- [ ] **[[VERIFY: shop hours]]** — Regular business hours
- [ ] **[[VERIFY: receiving/delivery hours]]** — For contractors coordinating material drop-offs

---

## Section 10 — Technical (Pre-Launch Checklist)

- [ ] Create `sitemap.xml` with all pages once case study URLs are known
- [ ] Add `LocalBusiness` JSON-LD structured data with verified address, phone, geo, and hours
- [ ] Verify `robots.txt` is present and correct
- [ ] Consolidate laser-cutting subdomain → 301 redirect to cwmetalsinc.com
- [ ] Test RFQ file upload on mobile (iOS Safari + Android Chrome)
- [ ] Verify AA color contrast on all text elements
- [ ] Verify keyboard navigation / visible focus states
- [ ] LCP under 2.5s on simulated 4G (test in Lighthouse)
- [ ] Set up form submission monitoring with email alerting

---

*Last updated: 2026-07-29*
*Generated from revision brief — do not delete this file.*
