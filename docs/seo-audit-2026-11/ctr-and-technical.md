# Click-rate and technical pass (13 November 2026)

## What was checked

- Full crawl of all sitemap URLs on a production build: status codes, internal links, image alt text,
  canonicals and H1s. Result: every page returns 200, 0 broken internal links, 0 images without alt,
  0 canonical mismatches, exactly one H1 per page.
- Search Console URLs not in the sitemap: 3,021 impressions on old URLs already 308-redirect to the
  right pages; 5 URLs returned 404 (230 impressions). All five now exist as pages:
  /japan-to-india/india-japan-cepa, /australia-to-india/india-australia-ecta,
  /japan-to-india/gcc-for-japanese-companies, /australia-to-india/gcc-for-australian-companies,
  /japan-to-india/data-protection-appi-dpdp. They are registered in the hreflang clusters
  (trade-agreement, gcc, data-protection), the sitemap, llms-full.txt and the hub series lists.
- Lighthouse (mobile, local build) on the home page, subsidiary page, USA hub, a USA post and the UAE
  hub: SEO 100, accessibility 96, best practices 96, performance 86-93, CLS 0, LCP about 3.2-3.4 s.

## Click-rate changes

1. **Truncated meta descriptions fixed.** 102 country-post descriptions were cut off mid-phrase
   (for example "...the 183-day.", "...the Social."). Each was rebuilt from the page's full schema
   description and trimmed at a clause boundary, so the snippet Google shows is a complete sentence.
   Two ESOP posts that ended up identical were given country-specific descriptions.
2. **Titles matched to real queries** (Search Console, Aug-Nov 2026):
   - Singapore and Germany hiring posts now mention employee benefits (the queries they appear for),
     with a benefits section added to each.
   - "German subsidiary", "audit of US subsidiary", "FRRO office UK", "company board resolution
     apostille", "CECA Singapore" and "India-Germany DTAA" queries now meet titles using that wording.
   - India subsidiary registration title now promises process, documents and timeline.
3. **Service descriptions** for branch, liaison and project office, OIDAR, tax, payroll, GCC and
   secretarial pages now end with "CA-led" and "free consultation" instead of "fixed fee" or
   "Get a quote", in line with the decision not to publish prices.
4. **Freshness.** 168 changed pages carry dateModified 2026-11-13 in their Article schema, the
   visible "updated" date and the sitemap lastModified.

## Left as is, by decision

- **Gold text colour.** Lighthouse flags `text-gold-dark` (#FFD21F on white, contrast 1.44) in the
  header logo and some labels. globals.css records a user instruction (25 September 2026) that
  --gold-dark should match the bright yellow icons, so the colour was not changed. Using a darker gold
  for text on white backgrounds would fix the accessibility warning.
- **LCP of about 3.2 s** on simulated mobile is above Google's 2.5 s "good" threshold; it is measured
  on a local build with throttling. Re-check in PageSpeed Insights after deployment.

## Realistic expectations

Search Console shows that about 82% of non-brand impressions are at position 21 or lower. Better
titles and descriptions raise click-through once pages reach page one; reaching page one for the
competitive head terms depends mainly on authority (see off-page-plan.md).
