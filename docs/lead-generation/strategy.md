# Lead generation strategy: AU Corporate (theaucorp.com)

Prepared 13 November 2026. Covers what is live on the site, the channels that feed it, how leads are
handled, and what to measure. One offer runs through all of it: **a free first consultation with a
Chartered Accountant, with the best pricing and better work support**. The published fee guide stays as
it is: USD 750–1,000 for incorporating a subsidiary with share capital up to ₹10 lakh.

## 1. Starting point

- Search Console shows about 76 clicks a month, mostly brand searches. 82% of non-brand impressions are
  at position 21 or lower, so organic leads will grow as authority grows (see
  docs/seo-audit-2026-11/off-page-plan.md). Until then, direct channels need to carry part of the load.
- Every form already sends to Web3Forms, which emails the lead to the inbox. It attaches the UTM
  parameters, ad click IDs (gclid, fbclid, msclkid), landing page and referrer. GA4 records
  `generate_lead`, `whatsapp_click`, `book_call_click`, `phone_click` and `email_click`.

## 2. Ways to get in touch on the site

| Point | Where | Status |
|---|---|---|
| **Timed popup after 6 seconds** | Money pages (below) | **New.** Desktop opens the form; phones get a small bottom card with a "Get free advice" button |
| **/free-consultation landing page** | Header "Get Started" button, footer, ads, emails, LinkedIn, partners | **New.** Full form, outcomes, three-step process, case studies, FAQs, USD fee guide |
| Click-to-open enquiry popup | Every "Talk to an Expert" and enquiry button | Existing |
| Mobile sticky bar | All pages on phones | Existing |
| Inline lead form | Bottom of every guide page | Existing |
| WhatsApp, Cal.com booking, phone | Sitewide | Existing |

### Popup rules (lib/lead-popup.ts)

- **Shows on:** home, /free-consultation, all service pages (including the branch, liaison and project
  office sub-pages), the compliance calendar, case studies, the 11 country hubs, the cost, timeline,
  NRI, resident director, hiring-cost, benefits, manufacturing, Press Note 3, valuation, ESOP and
  funding pages, the city pages, and both Japan alliance pages.
- **Not shown on:** blog guide posts, legal pages, contact, careers or insights. Readers there are
  researching, and a popup would hurt reading time and risk Google's mobile intrusive-interstitial
  penalty.
- **Frequency:** once per browser every 7 days. Never again after the visitor has sent an enquiry. It
  never interrupts someone already typing into a form or with another popup open.
- **Tracking:** GA4 events `lead_popup_shown` (with `popup_mode` = modal or mobile_card) and
  `lead_popup_open`. Submissions arrive as `generate_lead` with `form_location` = popup or page.
- **To change the delay or the page list,** edit `AUTO_POPUP_DELAY_MS` and `LEAD_PAGES` in
  lib/lead-popup.ts.

## 3. Channels

| Channel | What to do | Lands on |
|---|---|---|
| **SEO and AI answers** | Already built: country hubs, cost and timeline pages, city pages, llms.txt. Next comes authority (off-page plan) | Money pages, where the popup runs |
| **Japan alliance** | Nihon-bashi International Accounting Firm already links to the site. Agree a referral process: shared enquiry email, a joint seminar or webinar for Japanese companies, JETRO and IJCCI events | /japan-alliance, /ja/japan-alliance |
| **LinkedIn** | Founder posts twice a week from CA Abhishek Jaiin, on case results and rule changes (FEMA, labour codes, CEPA/CETA/ECTA). Link with UTM tags | /free-consultation |
| **Paid search (optional, small budget)** | Exact-match, high-intent terms only: "india subsidiary registration", "cost of setting up a subsidiary in india", "company registration in india for foreigners". Location-target the US, UK, Japan, UAE, Singapore, Germany and Australia | /free-consultation |
| **Professional referrals** | CA, law and accounting firms abroad that have clients entering India: the Nihon-bashi model, repeated per country | /free-consultation?utm_source=partner-name |
| **Chambers and directories** | USIBC, UKIBC, IGCC, JETRO, IJCCI and similar: member listings and speaking slots | Country hubs |
| **Email** | Send every lead the compliance calendar and the matching country guide, with a short follow-up at 3, 7 and 14 days | /compliance-calendar, country hub |

UTM convention: `utm_source` = platform or partner (linkedin, google, nihonbashi), `utm_medium` = cpc,
social, referral or email, `utm_campaign` = country-or-service_month (for example japan-entry_2026-12).

## 4. Handling leads

1. **Reply within 24 hours**, as promised on every form; same day for "As soon as possible". Use the
   need and country the visitor chose to send the right guide with the reply.
2. **Qualify on the first call:** parent country, structure, timeline, sector (FDI caps, Press Note 3)
   and who decides. Give a written fixed quote after the call.
3. **Log every lead** in a CRM or a shared sheet, with source and medium (from the form email), need,
   country, status and value, so you can see which channel brings clients and not just enquiries.
4. **Japanese leads:** offer Nihon-bashi for a Japanese-language first call when it helps.

## 5. What to measure

- In GA4, mark `generate_lead`, `book_call_click` and `whatsapp_click` as key events.
- Weekly figures:
  - leads by source
  - popup shown → submitted rate (by modal or mobile card)
  - landing-page conversion rate
  - reply time
  - lead → call → client conversion
- **Watch for:** if a page's bounce rate rises sharply after the popup goes live, remove that page from
  `LEAD_PAGES` or raise the delay.

## 6. First 90 days

| Weeks | Actions |
|---|---|
| 1–2 | Deploy. Mark the GA4 key events. Set up a lead log. Agree the referral process with Nihon-bashi |
| 3–6 | LinkedIn twice a week. Approach 3 overseas referral firms. Apply to 2 chambers or directories. Optional paid-search test to /free-consultation |
| 7–12 | Review leads by source. Keep the channels that bring clients. Test the popup headline and the landing-page headline (one change at a time) |

The targets are yours to set. A sensible first check is whether paid and referral traffic to
/free-consultation converts above the site average. If it doesn't, change the offer wording before
spending more.
