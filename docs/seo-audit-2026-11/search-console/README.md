# Search Console validation (Methodology sheet: "validate in Semrush/Ahrefs/GSC")

Source: Google Search Console, property sc-domain:theaucorp.com, 15 August to 13 November 2026
(90 days, top 500 queries and top 500 pages). Semrush and Ahrefs could not be used: the Semrush
account had no API units available and the Ahrefs API key is on a free plan with no units, so
market search volumes were not re-checked. GSC gives AU's own impressions and clicks, not market volume.

## Findings

| Measure | Value |
|---|---|
| Clicks, whole site | about 76 a month (229 in 90 days) |
| Impressions, whole site | about 5,470 a month (16,412 in 90 days) |
| Audit's modelled traffic for the 252 audited pages | 797 a month |
| GSC clicks on those pages | about 67 a month |
| Clicks from brand queries ("au corporate" and variants) | 44 of the 50 query-attributed clicks |
| Non-brand queries | 495 queries, 3,535 impressions, 6 clicks |
| Non-brand impressions by position | 1-3: 49; 4-10: 391; 11-20: 205; 21-50: 948; 50+: 1,942 |
| Audit target keywords seen as exact queries | 4 of 64 |

What this means:

1. The audit's traffic model is optimistic for the current site: real non-brand traffic is close to
   zero, because most impressions are at position 21 or lower. This confirms the audit's own finding
   that authority (off-page work) is the main gap. See ../off-page-plan.md.
2. All on-site work in this branch is not yet live, so these figures are the baseline. Re-run the
   same export about 8 to 12 weeks after the changes are deployed and indexed.
3. GSC shows demand the workbook did not list, now addressed:
   - "employee benefits in India for Singapore / UK / German companies", "how do Singapore companies
     insure employees in India" (about 370 impressions, positions 30-65): new page
     /employee-benefits-in-india-for-foreign-companies.
   - "company formation in India", "establish entity in India", "business setup in India",
     "company setup in India" (about 520 impressions, positions 66-78): new company formation section
     on /india-subsidiary-registration.

## Files

- page-validation.csv: every audited URL with the audit's estimated volume, position and traffic next
  to GSC clicks, impressions and average position (URLs normalised from /blog/<country>-to-india to
  /<country>-to-india).
- keyword-validation.csv: the audit's primary keywords (service pages, hubs, content gaps), whether
  each appears as a GSC query, and the closest query AU does appear for.
- striking-distance.csv: non-brand queries at positions 8-20 with 30+ impressions (only one today).
