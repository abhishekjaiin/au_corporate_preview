# AU Corporate website: SEO audit update (November 2026)

This version of the site carries out the SEO audit workbook
`docs/seo-audit-2026-11/AU_Corporate_vs_KRPR_SEO_Audit.xlsx`, sheet by sheet. It also adds the
Japan–India alliance and a lead-generation setup. Every page is server-rendered HTML and can be read
without JavaScript.

## Where to look

| File | What it shows |
|---|---|
| `docs/seo-audit-2026-11/excel-compliance.md` | **Start here.** Every Excel sheet and item with its status, plus the full technical and code audit |
| `docs/seo-audit-2026-11/page-checklist.csv` | All 252 audited pages: audit numbers next to re-measured numbers. 0 open items |
| `docs/seo-audit-2026-11/content-gaps.md` | The Content Gaps and Country Matrix items and the page built for each |
| `docs/seo-audit-2026-11/new-pages-check.csv` | Word count and keyword check for the new pages |
| `docs/seo-audit-2026-11/ctr-and-technical.md` | Title and description rewrites from Search Console data, and technical fixes |
| `docs/seo-audit-2026-11/search-console/` | Search Console baseline and keyword validation |
| `docs/seo-audit-2026-11/off-page-plan.md` | Link building and authority plan (for the AU team) |
| `docs/lead-generation/strategy.md` | Lead-generation strategy, popup rules, GA4 setup (property 559118754) |

## What changed, in short

- **Excel brief:** every service page, country hub and country post meets the audit's length and
  keyword rules, or has a written reason. Template duplication fell from 70–84% to at most 43%.
- **27 new pages:**
  - **Regional and city:** UAE and Europe hubs; city pages for Bengaluru, Gurugram, Mumbai and Pune.
  - **Setup and cost:** NRI registration, cost, timeline, 100% ownership and resident director pages.
  - **People:** hiring cost, employee benefits and the labour codes explainer.
  - **Industry and funding:** manufacturing, Press Note 3, valuation, ESOP and funding instruments.
  - **Recovered posts:** the Japan CEPA, Australia ECTA, Japan and Australia GCC, and Japan APPI/DPDP
    posts, all previously 404s.
  - **Alliance and lead pages:** /japan-alliance, /ja/japan-alliance (Japanese) and /free-consultation.
- **Japan–India alliance** with Nihon-bashi International Accounting Firm (MOU of 19 October 2026). It is
  noted on all 35 Japan pages, the About page and llms.txt.
- **Pricing:** the existing USD 750–1,000 incorporation fee wording is kept. New pages use the "best
  pricing, better work support, free first consultation" message.
- **Technical:**
  - **Links and tags:** 0 broken internal links and 0 redirects; reciprocal hreflang including en-AE
    and en/ja.
  - **Metadata and structured data:** unique titles and descriptions; valid structured data; large
    social-preview cards on every page.
  - **llms.txt:** updated for AI assistants.
- **Lead generation:**
  - **Popup:** the enquiry form opens after 6 seconds on money pages, as a small card on mobile.
    Once per week, and never after an enquiry.
  - **Landing page:** the new /free-consultation page; the header's "Get Started" button links to it.

## Content pass: full word targets (17 November 2026)

The first pass treated 90% of the Excel's required word count as done. This pass brings every page
to 100% of it.

- **Pages edited:** 112. Each got a new, country-specific section above "How AU Corporate helps",
  "Official sources" or the FAQs, and an entry in the page's table of contents. The two branch-office
  service pages got one extra FAQ each.
- **Result:** 251 of 252 audited pages now meet the full required word count. The exception is
  /insights, which stays noindexed until articles are published, as the Excel recommends.
- **New pages:** all 19 in `new-pages-check.csv` meet their targets. Four are now longer than KRPR's
  page on the same topic: NRI registration, the setup timeline, resident director services and
  manufacturing setup.
- **Checks:**
  - **Density:** no page left its density band.
  - **Similarity:** the highest cross-country template similarity fell from 44% to 42%.
  - **SEO audit:** `scripts/seo-audit.mjs` passes.
- **Records:** word counts for the edited pages are updated in `page-checklist.csv` and
  `new-pages-check.csv`.
- **Not done on purpose:** padding each of the nine country versions of a topic (for example "common
  mistakes") to match a single long KRPR guide. It would push template duplication back up, which
  the Excel rated High severity.

## To run locally

```bash
pnpm install
pnpm build
pnpm start
```

The site needs the same environment variables as production (database, auth, IndexNow). Without the
database, /insights simply shows no articles.

## Still to do (AU team)

1. Merge this branch and deploy.
2. Submit the sitemap in Search Console.
3. Send one test enquiry from the live site and check it arrives.
4. GA4: mark `book_call_click` as a key event, register the custom dimensions, and filter internal and
   preview traffic. See `docs/lead-generation/strategy.md`.
5. CA review of the new pages and of the new sections added in the content pass. Native Japanese
   review of /ja/japan-alliance.
6. Off-page authority work (`off-page-plan.md`). Review schema once genuine client reviews exist.
