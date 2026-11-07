# SEO audit follow-up (AU Corporate vs KRPR, crawl of 29 Oct 2026)

`page-checklist.csv` lists every AU page from the audit workbook with the audit's numbers next to
numbers re-measured from this repo's production build (raw server HTML, no JavaScript), using the
workbook's own Methodology rules:

- Word count: visible body text with header, nav, footer, scripts and styles removed.
- Density: occurrences of the density term (plurals and hyphen variants count) / words x 100.
- "short" = under 90% of the required word count; density is checked against the required range.
- Similarity: highest 5-word-shingle Jaccard overlap with a post in another country folder (60%+ = duplicate).

Status is re-generated after each phase of work. The measuring tool is not the auditor's, so expect
small per-page differences in word counts.

Note: the pages measured at "/blog/<country>-to-india" now live at "/<country>-to-india" (308 redirect).

Rows that are not worth changing: the density flags on /terms, /contact and /about, and on case
studies, compare legal and navigation pages against a keyword band designed for service pages, so
they are left as they are on purpose.

Deliberate exceptions (marked "Not applicable" or left Open with a reason):

- /blog: now an index of the 10 country guide series (6 guides each plus a "See all" link to the
  hub's #series list). Each country hub is the category page with the full list. The audit's 800-word
  target and "India" density band are meant for content pages, not a listing.
- /blog/uk-to-india: "subsidiary" runs at about 0.9% against the audit's 1.2-1.76% band. It already
  appears about 39 times; forcing in another 14 would be over-optimisation, so it is left as is.
- The Australia and Germany density bands in the workbook ("0.5-0.43%", "0.5-0.31%") are inverted;
  they are treated as "at or below 0.5%".

## Status labels in page-checklist.csv

- **Done**: meets the audit's word-count rule (90% of required) and density band.
- **Topic term kept**: a country post whose only flag is that its keyword runs above the band
  because the keyword is the post's subject (for example "visa" on the visa guide, "apostille" on the
  documents guide, "GST" on the VAT/GST guide, "arbitration", "notice", "audit", "treaty", "EOR",
  "valuation", "origin", "sanction"). These were reduced where it read naturally; forcing them lower
  would mean awkward synonyms.
- **Measurement artefact**: the audit's density term is a word stem ("residen", "restrict"); a
  whole-word count shows 0% although the pages use "resident", "residence" and "restricted" throughout.
- **Deliberate exception**: /insights (noindexed, one of the audit's two options); /oidar-gst-registration-india
  and /payroll-expat-services (13,600 and 4,250 words; reaching the band would mean adding about 50 and
  36 more keyword repetitions); /blog/uk-to-india (see above).
- **Not applicable**: legal, navigation and case-study pages measured against a service-page band.

All country posts stay below 45% template similarity (audit threshold 60%).
