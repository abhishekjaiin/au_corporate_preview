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
