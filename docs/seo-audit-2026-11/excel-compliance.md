# Excel compliance check, sheet by sheet

Workbook: `AU_Corporate_vs_KRPR_SEO_Audit.xlsx` (crawl of 29 Oct 2026), in this folder.
Checked on 13 November 2026 against a production build of this branch (`pnpm build && pnpm start`),
reading the raw server HTML with no JavaScript. Word counts and density use the workbook's own
Methodology rules (see README.md).

## Technical and interlinking verification (whole site)

| Check | Result |
|---|---|
| Pages in sitemap.xml | 308, all return 200 |
| Distinct internal link targets across all pages | 309: all 200, **0 redirects, 0 broken** |
| In-page anchor links (`#section`) | 0 pointing at a missing id |
| Canonical tags | Every page self-canonical |
| Robots | No sitemap page is noindex; /insights is noindex on purpose (see Content Gaps) |
| hreflang | Reciprocal on every country hub and post, x-default = USA version, en-AE for UAE |
| Titles / meta descriptions (`scripts/seo-audit.mjs`) | 0 duplicates, all within length limits, 0 heading-level skips |
| JSON-LD | 1,213 blocks, 0 invalid |
| llms.txt / llms-full.txt (`scripts/validate-llms.mjs`) | Every required page linked. The one warning (/insights not in the sitemap) appears only in a local build without the database; the sitemap adds /insights by itself once published insights exist |
| Browser console (13 key templates, Playwright) | 0 app errors. The only failed requests are Google Tag Manager, Clarity and Apollo, which this sandbox blocks |
| Rendering | Everything is server-rendered HTML; content, FAQs, tables and links are readable without JavaScript |

Fixed in this pass: 14 internal links still going through redirects. These were on the GCC page, and
in the related cards on the tax, FEMA, subsidiary and secretarial pages. They now point straight at
their live pages.

## Sheet: Summary (key findings 1–7)

| Finding | Status |
|---|---|
| 1. AU has the larger, deeper site | Kept. The site grew from 252 to 308 indexable URLs |
| 2. Money pages shorter than the SERP benchmark | Done. Branch Office 3,738 words (required 3,800, 98%), Liaison Office 3,013 (3,000), Subsidiary 4,360 (4,100) |
| 3. USA/Australia/Japan posts 70–84% near-duplicates | Done. Highest cross-country similarity is now 43%, and no post is at 60% or above |
| 4. Commercial topics KRPR has and AU lacked | Done. See Content Gaps below |
| 5. Neither site ranks top-9 for the head terms | On-page work done. Rankings need off-page authority: see off-page-plan.md (AU team action) |
| 6. Entity name repeated at 2–3% on sub-pages | Done. Every branch, liaison and project office page is now inside its density band |
| 7. Strengths to keep (hreflang, Service/FAQ schema, CA-led E-E-A-T) | Kept and extended: x-default and en-AE added; Article and Person schema on posts |

## Sheet: AU Service Pages (38 rows)

All rows are in `page-checklist.csv`. They are Done, apart from the documented exceptions: navigation, legal and
compare pages measured against a service-page band. See README.md.

## Sheet: AU Country Hubs (9 rows)

Done. Every hub meets its word target and density band, except /uk-to-india "subsidiary" at about
0.9%, which was left as is to avoid over-optimisation (README.md). A 10th hub, /uae-to-india, was
added.

## Sheet: AU Country Blog Posts (205 rows)

Every row is resolved: Done, or "Topic term kept" where the keyword is the post's subject (for
example "visa" on the visa guide). Three rows are measurement artefacts, where the workbook's term is a word stem. No post is
short. No post is a near-duplicate. Five 404 URLs were rebuilt as new posts: the Japan CEPA, Australia ECTA,
Japan and Australia GCC posts, and Japan APPI/DPDP.

Totals in `page-checklist.csv` (252 rows): 194 Done, 43 Topic term kept, 8 Not applicable,
4 Deliberate exception, 3 Measurement artefact, **0 open**.

## Sheets: Competitor KRPR Pages, SERP Competitor Benchmarks, Methodology

Reference sheets with no actions of their own. Their figures set the "Required" word counts and density bands
used above, and the Methodology rules are the ones used for every re-measurement.

## Sheet: Country Matrix

| Country | Workbook action | Status |
|---|---|---|
| USA | Deepen DTAA guide; cost page; US pricing CTA | Done. The CTA uses the "best pricing, better work support, free consultation" message, not prices (owner's decision) |
| UK | CETA landing content; hub 4,500+ words | Done |
| Australia | Differentiate near-duplicates | Done (43% maximum similarity) |
| Japan | ja-JP version | On hold: needs a native reviewer |
| Singapore | Promote holdco/DTAA; CECA table | Done |
| Germany | de-DE version; expand DTAA guide | DTAA guide expanded. de-DE on hold: needs a native reviewer |
| China | Press Note 3 service landing page | Done: /press-note-3-approval-india |
| Hong Kong | Merge thin posts | Not needed: no post is thin now |
| Russia | Quarterly sanctions/payments refresh | Recurring task (off-page-plan.md) |
| UAE | New pillar | Done: /uae-to-india, 4,080 words, en-AE |
| Netherlands / Europe | EU hub | Done: /europe-to-india |
| NRI | NRI registration service page | Done: /company-registration-in-india-for-nri |
| USA / UK (GCC) | Covered by /gcc-setup-india | Kept; its links now all go direct |

## Sheet: Content Gaps (17 rows)

| Gap | Page | Status |
|---|---|---|
| UAE / Dubai to India (4,000+, en-AE) | /uae-to-india | Done, 4,080 words |
| NRI company registration | /company-registration-in-india-for-nri | Done |
| Cost of setting up a subsidiary | /cost-of-setting-up-a-subsidiary-in-india | Done, cost components without prices |
| How long it takes | /how-long-to-set-up-a-subsidiary-in-india | Done, links to the 14-day case study |
| Resident director service | /resident-director-services-india | Done |
| Valuation services | /share-valuation-india-registered-valuer-fema | Done |
| ESOP advisory | /esop-india-foreign-owned-companies | Done |
| Funding instruments (CCD, notes) | /funding-instruments-india-ccd-ccps-convertible-notes | Done |
| Netherlands and Europe hub | /europe-to-india | Done |
| Manufacturing company setup | /manufacturing-company-setup-in-india | Done |
| 100% foreign ownership | /can-a-foreign-company-own-100-percent-of-an-indian-company | Done |
| Cost of hiring employees | /cost-of-hiring-employees-in-india | Done, worked examples in HTML |
| New Labour Codes explainer | /new-labour-codes-india-50-percent-wage-rule-gratuity | Done |
| City pages | Bengaluru, Gurugram, Mumbai, Pune | Done |
| Localised ja / de / zh | — | On hold: needs a native reviewer |
| Insights hub with 15 words | /insights | Done: noindex until content is published (the workbook's own option) |
| Pricing / packages page | — | Not built, by owner's decision: no prices published. Pages use the free-consultation message instead |

## Sheet: Technical & SEO Findings

| Finding | Status |
|---|---|
| AU template duplication | Done (43% max, 0 at 60%+) |
| AU over-optimised supporting pages | Done (all within band) |
| AU under-length money pages | Done (see Summary 2) |
| AU /insights empty | Done (noindex) |
| AU /blog listing 8,756 words, unpaginated | Done: /blog is now a 3,364-word index of the 10 country series, and each hub is the category page |
| AU hreflang: add x-default and en-AE | Done |
| AU schema: Article/BlogPosting and author Person on posts | Done. Review/AggregateRating waits until genuine reviews exist |
| AU no pricing/cost content | Cost and timeline pages built, without prices (owner's decision) |
| KRPR redirected sitemap URLs | Competitor note. AU's own sitemap has 0 redirecting URLs |
| KRPR thin service pages | Competitor note: AU is deeper on every overlapping service |
| KRPR broader menu | Covered by the Content Gaps rows above |
| Both: low SERP visibility | Needs off-page work by the AU team (off-page-plan.md) |

## Still with the AU team

1. ja-JP / de-DE / zh versions, which need a native-speaker reviewer.
2. Off-page work: chambers of commerce, directories, guest articles and reviews (off-page-plan.md).
3. A CA review of the new pages before going live.
4. Review/AggregateRating schema, once real client reviews are collected.
5. Merging this branch and deploying.

## Added after the Excel: Japan–India alliance (13 Nov 2026)

- New page /japan-alliance. It covers the MOU with Nihon-bashi International Accounting Firm (日本橋国際会計事務所),
  signed on 19 October 2026. Every fact on the page comes from the partner's own pages, which are cited as sources. It includes
  AccountingService and WebPage structured data, plus the partner's Japanese announcement text marked lang="ja".
- The alliance note appears in the service box on every Japan page (35 URLs). The Japan hub has an alliance section and an FAQ,
  the Japan FAQ page has a new question, the About page has an "International Alliances" section, and llms.txt has the
  alliance in its summary and under its own heading.
- The existing USD 750–1,000 incorporation fee wording is kept and repeated on the alliance page.

## Final check (13 Nov 2026, clean production build)

| Check | Result |
|---|---|
| TypeScript (`tsc --noEmit`) | 0 errors |
| Production build from scratch | Passes |
| Sitemap pages | 311, all 200, self-canonical, none noindex |
| Internal link targets | 312: 0 redirects, 0 broken, 0 bad anchors |
| hreflang | 241 pages carry hreflang; every pair reciprocal and in the sitemap (including en/ja for the Japan alliance) |
| Titles and descriptions | 0 duplicates, 0 out of range |
| JSON-LD | 1,225 blocks, 0 invalid |
| llms.txt / llms-full.txt | All required pages linked (the /insights note only appears without the database) |
| Old /blog/<country>-to-india URLs | 308 to the new paths |
| Everything in HTML (all 311 pages) | Each page was loaded in Chromium with JavaScript off and on. Text and link counts match on every page (0 pages lose content without JS), and no page is thin without JS. FAQs, tables, collapsed sections and the enquiry form are all in the server HTML. Only the timed popup needs JavaScript, and the same form is in the page HTML |
| Browser console (13 templates) | 0 app errors |
| 6-second popup | Opens at 6 s on money pages (desktop form; mobile bottom card). Not on blog posts. Does not repeat on reload |

Note: `pnpm lint` (eslint) has no configuration file in this repo, so it did not run. This predates this
work; TypeScript and the build are the checks that apply.

## Code audit of every route (13 Nov 2026)

| Check | Result |
|---|---|
| Routes in app/ vs sitemap | 322 routes. Every public static route is in the sitemap. Only /admin/* (login redirect plus noindex, robots-disallowed) and /insights (noindex until content is published) are left out, on purpose. The case-study [slug] pages are all listed |
| Rendering | All indexable pages are prerendered static HTML. Only admin, auth, insights and /og are rendered on request |
| Error handling | Unknown URLs, unknown case studies and unknown guide posts return 404 with noindex. A trailing slash 308s to the clean URL. UTM parameters keep the canonical clean |
| Per-page head | Every page has a description, canonical, og:url (equal to the canonical), og:image, twitter:card and html lang. Exactly one H1 per page. No img without alt |
| URLs inside code | No localhost, vercel.app, http:// or non-www links. No structured-data, hreflang or link URL that points to a redirect or a missing page |
| Orphans | None. Every sitemap page is linked from at least one other page |
| Security | Every external link that opens a new tab has noopener/noreferrer. CSP, HSTS, X-Frame-Options, nosniff, Referrer-Policy and Permissions-Policy headers are present |
| Fixed in this pass | (1) twitter:card was "summary" on 309 pages: each page's twitter metadata replaced the root's summary_large_image. All 311 pages now use the large card for bigger previews. (2) /free-consultation had no in-content links: it is now linked from the CTA box on every guide page. (3) The Japan hub links to the Japanese notice |
| Share image route /og | Works on the live site (checked https://www.theaucorp.com/og, 200 image/png). It fails only in this sandbox's local image library, so no code change was made |
