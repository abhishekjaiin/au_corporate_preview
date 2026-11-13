# Content Gaps tracker (from the "Content Gaps" sheet of AU_Corporate_vs_KRPR_SEO_Audit.xlsx)

Use the workbook in this folder as the brief for every page added or changed: target keyword,
recommended length, intent and the density bands in the Methodology sheet. Re-measure with the
same method (visible body text, header/nav/footer removed) after each change.

| Gap (workbook row) | Target keyword | Page | Status |
|---|---|---|---|
| UAE / Dubai to India | set up a company in India from Dubai | /uae-to-india (hreflang en-AE + x-default) | Built, ~3,600 words (target 4,000+) |
| Company registration for NRIs / foreign nationals | company registration in India for NRI | /company-registration-in-india-for-nri | Built, ~2,250 words |
| Cost of setting up a subsidiary | cost of setting up a subsidiary in India | /cost-of-setting-up-a-subsidiary-in-india | Built; explains cost components without prices; free consultation message |
| How long it takes | how long to set up a subsidiary in India | /how-long-to-set-up-a-subsidiary-in-india | Built; links to the 14-day case study |
| Resident / nominee director service | resident director services in India | /resident-director-services-india | Built; fee "quote on request" |
| Can a foreign company own 100%? | 100% FDI India | /can-a-foreign-company-own-100-percent-of-an-indian-company | Built |
| Cost of hiring employees | cost of hiring employees in India | /cost-of-hiring-employees-in-india | Built with worked examples (static HTML, no JS calculator) |
| New Labour Codes explainer | new labour codes gratuity 50% wage rule | /new-labour-codes-india-50-percent-wage-rule-gratuity | Built |
| Manufacturing company setup | manufacturing company setup in India | /manufacturing-company-setup-in-india | Built |
| Netherlands and Europe hub | set up a subsidiary in India from Netherlands | /europe-to-india | Built; links Germany and Spain hubs |
| Pricing / packages page | Indian subsidiary registration cost | Not built, by decision | AU does not publish prices for all services. New pages use: best pricing, better work support and a free first consultation. Fee wording that was already on the site is unchanged |
| Valuation services | registered valuer valuation report | /share-valuation-india-registered-valuer-fema | Built as a guide; AU's role described as coordinating the valuer and filings |
| ESOP advisory / valuation | ESOP valuation India | /esop-india-foreign-owned-companies | Built as a guide |
| Fund-raising instruments (CCD, notes) | compulsory convertible debentures | /funding-instruments-india-ccd-ccps-convertible-notes | Built as a guide |
| City pages | company registration in Bengaluru for foreign companies | /company-registration-in-bengaluru, /company-registration-in-gurugram, /company-registration-in-mumbai, /company-registration-in-pune | Built; each with its own state rules and local detail (overlap between pages under 50%) |
| Localised versions (ja, de, zh) | インド 子会社 設立, Tochtergesellschaft Indien gründen | Not built | Needs a native reviewer |
| Insights hub (15 words) | India regulatory updates | /insights noindexed | Done (audit's "or noindex" option) |

Keyword density on the cost, NRI, manufacturing and UAE pages runs above the band because the keyword
is the page's subject; treated like the "topic term" rows in page-checklist.csv.

## Site checks fixed alongside

- scripts/validate-llms.mjs: the required-link list named /india-entry-for-us-companies and
  /doing-business-in-india pages that now redirect; it now names their current destinations, and
  public/llms.txt links to every required page plus the new guides. The only remaining warning,
  /insights not in the sitemap, appears when no published insights exist (as in a local build
  without the database); the sitemap adds /insights automatically once it lists content.
- Three country posts had meta descriptions over 165 characters that were also cut off mid-sentence
  (Singapore EPF/CPF, China PIPL/DPDP, Russia 152-FZ/DPDP); rewritten in full.

## Country Matrix items

| Country | Matrix action | Status |
|---|---|---|
| USA | Cost page and a US-specific pricing CTA | Cost page built; all 10 hubs now carry the best-pricing and free-consultation message instead of a price list |
| UK | CETA-led content; hub to 4,500+ words | CETA section added; hub expanded |
| Australia | Differentiate near-duplicate posts | Done (no post above 43% similarity) |
| Japan, Germany | ja-JP and de-DE versions | On hold until a native reviewer is available |
| Singapore | CECA comparison table; promote holdco and DTAA posts | Done |
| China | Press Note 3 service landing page | Built: /press-note-3-approval-india, linked from the China and Hong Kong hubs |
| Hong Kong | Merge thin posts into the hub | Not needed: every post now meets its length target |
| Russia | Refresh sanctions/payments quarterly | Recurring task; see off-page-plan.md |
| UAE, Netherlands, Europe, NRI | New pillars and service page | Built |

Off-page work (chambers, directories, guest articles, reviews) is planned in off-page-plan.md and
needs the AU team to carry out.
