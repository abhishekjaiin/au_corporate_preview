import Link from "next/link"
import { OFFICES } from "@/lib/site"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import HeroSection from "@/components/HeroSection"
import { FaqAccordion } from "@/components/FaqAccordion"
import { InquiryForm } from "@/components/InquiryForm"
import { ClickableReveal } from "@/components/ClickableReveal"
import { InquiryCard } from "@/components/InquiryCard"
import { ComplianceCalendarCTA } from "@/components/ComplianceCalendarCTA"
import { CaseStudyCard } from "@/components/case-study/CaseStudyCard"
import { caseStudies } from "@/lib/case-studies"

import {
  Calculator,
  FileCheck,
  Scale,
  Users,
  Building2,
  Landmark,
} from "lucide-react"

/* Matches the sitewide --blue / --gold design tokens defined in globals.css */
const NAVY = "#0E1B4D"
const GOLD = "#FFD21F"

/* SERVICES */
const services = [
  {
    icon: Building2,
    title: "India Subsidiary Registration",
    description: "Incorporation of your wholly owned subsidiary or joint venture, including name approval, PAN and TAN, bank account opening, share issue to the parent",
    href: "/india-subsidiary-registration",
    cta: "How we register your subsidiary",
  },
  {
    icon: FileCheck,
    title: "Accounting, Reporting and Audit Support",
    description: "Monthly bookkeeping, MIS and reporting packs for the parent in US GAAP or IFRS, plus statutory audit coordination.",
    href: "/accounting-reporting-audit-support",
    cta: "Our accounting and audit support",
  },
  {
    icon: Landmark,
    title: "FEMA and RBI Compliance",
    description: "FC-GPR, FC-TRS, the annual FLA return, ECB reporting for parent loans, and repatriation of funds.",
    href: "/fema-rbi-compliance",
    cta: "Our FEMA and RBI filings",
  },
  {
    icon: Calculator,
    title: "Corporate Tax, GST and Transfer Pricing",
    description: "Corporate tax returns, advance tax, TDS, GST registration and returns, tax audit, and transfer pricing for intercompany transactions.",
    href: "/corporate-tax-gst-transfer-pricing",
    cta: "Our tax, GST and transfer pricing work",
  },
  {
    icon: Scale,
    title: "Secretarial and ROC Compliance",
    description: "Board meetings, AGM, annual ROC filings, director KYC, statutory registers, and resident director and registered office support.",
    href: "/secretarial-roc-compliance",
    cta: "Our secretarial and ROC services",
  },
  {
    icon: Users,
    title: "Payroll and Expat Services",
    description: "Payroll processing, PF and ESI, employment contracts, and tax and social security compliance for expats working in India.",
    href: "/payroll-expat-services",
    cta: "Our payroll and expat services",
  },
]

/* PARENT COMPANY COUNTRIES — only linked where AU has a dedicated country guide;
   the rest are shown as plain badges rather than linked to a page that doesn't exist. */
const parentCountries = [
  { label: "USA", href: "/usa-to-india" },
  { label: "UK", href: "/uk-to-india" },
  { label: "Singapore", href: "/singapore-to-india" },
  { label: "Australia", href: "/australia-to-india" },
  { label: "Germany", href: "/germany-to-india" },
  { label: "Japan", href: "/japan-to-india" },
  { label: "China", href: "/china-to-india" },
  { label: "Hong Kong", href: "/hong-kong-to-india" },
  { label: "Russia", href: "/russia-to-india" },
  { label: "Spain", href: "/spain-to-india" },
  { label: "France" },
  { label: "UAE" },
]

/* INDUSTRIES — broad support framing, not claiming deep specialist certification */
const industryDetails = [
  { name: "Technology, SaaS and GCCs", description: "Captive engineering centres, Safe Harbour transfer pricing" },
  { name: "AI Companies", description: "India R&D teams, data protection compliance, transfer pricing for model development" },
  { name: "Electronics Manufacturing", description: "Factory setup, import and customs registrations, incentive scheme support" },
  { name: "Manufacturing", description: "Plant setup, import and customs registrations, related-party purchases" },
  { name: "Infrastructure", description: "Subsidiaries and JVs for long-term projects, multi-state GST, contract accounting" },
  { name: "Education", description: "EdTech and training businesses, and the right structure for academic activities" },
  { name: "Trading and Distribution", description: "Importing the parent's products, GST and pricing on resale" },
  { name: "Logistics and Supply Chain", description: "Warehousing, freight and multi-state GST registrations" },
  { name: "Professional Services", description: "India delivery teams billing the parent" },
  { name: "Startups", description: "Foreign startups setting up their first India team, with lean compliance" },
]

const featuredGuides = [
  {
    title: "Corporate Tax, GST and Transfer Pricing",
    category: "Taxation",
    excerpt: "Corporate tax, GST, TDS and transfer pricing for an Indian subsidiary, including the 2026 safe harbour margin.",
    href: "/corporate-tax-gst-transfer-pricing",
  },
  {
    title: "FEMA and RBI Compliance",
    category: "India Entry",
    excerpt: "Automatic and government-route FDI, FC-GPR, and the RBI filings that follow a foreign investment into an Indian company.",
    href: "/fema-rbi-compliance",
  },
  {
    title: "India Subsidiary Registration",
    category: "Business Setup",
    excerpt: "How a foreign company incorporates a wholly owned subsidiary in India, from name approval through the first RBI filing.",
    href: "/india-subsidiary-registration",
  },
]

/* WHY FOREIGN COMPANIES CHOOSE AU CORPORATE */
const pillars = [
  {
    title: "Tax, law and banking in one team",
    description: "CAs, Company Secretaries, lawyers and ex-bankers in-house, so nothing is handed off to another firm.",
  },
  {
    title: "Reporting your parent understands",
    description: "Monthly packs in US GAAP or IFRS, with both sides of intercompany transactions reconciled.",
  },
  {
    title: "One point of contact",
    description: "A named manager for your subsidiary who knows your filings, deadlines and history.",
  },
  {
    title: "Since 2016",
    description: "Serving clients across India, incorporating and running companies for clients in India and more than 10 countries.",
  },
]

/* FAQ */
const faqs = [
  {
    q: "Can a foreign company establish a business in India?",
    a: "Yes. Most sectors permit up to 100% foreign investment under the automatic route, meaning no prior government approval is required. Some sectors and source countries have additional requirements — we assess this as part of entry planning.",
  },
  {
    q: "What is the best structure for entering India?",
    a: "It depends on your activities, ownership plans, and long-term intent. A wholly-owned Private Limited subsidiary suits most companies planning genuine operations; branch, liaison, and project offices suit narrower, specific use cases.",
  },
  {
    q: "What is the difference between a subsidiary and a branch office?",
    a: "A subsidiary is a separate Indian legal entity with limited liability and access to the automatic FDI route in most sectors. A branch office is an extension of the foreign parent, requires specific RBI approval, and exposes the parent directly to Indian liabilities.",
  },
  {
    q: "Does an Indian company need a resident director?",
    a: "Yes — every Indian company, including a wholly-owned foreign subsidiary, must have at least one director who is both an Indian citizen and resident (present in India for more than 182 days in the previous financial year).",
  },
  {
    q: "Can AU Corporate help with bank account opening and ongoing accounting?",
    a: "Yes — we support corporate bank account setup after incorporation, and provide ongoing accounting, bookkeeping, and financial reporting as part of our ongoing compliance services.",
  },
  {
    q: "What tax registrations are required after incorporation?",
    a: "Typically PAN, TAN, and GST registration (where applicable based on turnover or business activity), followed by ongoing corporate tax and GST compliance.",
  },
  {
    q: "Can AU Corporate manage payroll and HR compliance?",
    a: "Yes — payroll processing, PF/ESI compliance, employment contracts, and HR administration are part of our HR & Payroll services.",
  },
  {
    q: "What does it cost to establish a business in India?",
    a: "Cost depends on entity structure, sector, number of directors, and ongoing service scope — we scope this precisely on a short consultation rather than quoting a flat number that may not fit your situation.",
  },
  {
    q: "What is the minimum capital required to register a company in India?",
    a: "There is no statutory minimum paid-up capital requirement for a Private Limited Company — you can incorporate with a nominal amount of share capital, set based on what the business needs to fund its initial operations.",
  },
  {
    q: "How long does company registration in India actually take?",
    a: "Typically 4 to 6 weeks from receipt of complete documents. The MCA stage (digital signatures, name approval, SPICe+ filing and the Certificate of Incorporation with PAN and TAN) takes 7 to 15 working days, and opening the bank account and the first FEMA steps take the rest. FC-GPR is then filed within 30 days of allotting shares. If the investment needs Government Route approval, for example under Press Note 3, that approval comes first and adds to the timeline.",
  },
  {
    q: "What sectors allow 100% foreign investment under the automatic route?",
    a: "Most sectors — including manufacturing, most services, IT and software, and infrastructure — allow 100% foreign investment with no prior government approval. A shorter list of sensitive sectors requires Government Route approval instead.",
  },
  {
    q: "How can profits be repatriated from an Indian subsidiary to the parent?",
    a: "The main routes are dividends, a share buyback, and a capital reduction — each taxed differently, and each affected by the DTAA (if any) between India and the parent's home jurisdiction.",
  },
  {
    q: "What is the Annual FLA Return?",
    a: "Any Indian entity holding foreign investment on its books must file the Annual Return on Foreign Liabilities and Assets (FLA) with RBI every year, regardless of whether any transaction happened that year.",
  },
  {
    q: "What is Form FC-GPR and when is it filed?",
    a: "FC-GPR reports the allotment of shares to a foreign investor to RBI via the FIRMS portal, within a defined window from the allotment date — it's the filing that formally records the foreign investment on RBI's books.",
  },
  {
    q: "Is GST registration mandatory immediately after incorporation?",
    a: "No — GST registration is triggered by crossing the applicable turnover threshold (Rs 20 lakh for services, Rs 40 lakh for goods), not by incorporation itself. Many foreign-owned entities register earlier anyway, voluntarily.",
  },
  {
    q: "What happens if we miss the FC-GPR filing deadline?",
    a: "A late filing isn't resolved by simply paying a fee — it goes through RBI's compounding process under FEMA, where a compounding amount is calculated and the case is formally closed once it's paid.",
  },
  {
    q: "Can AU Corporate take over compliance for an already-incorporated subsidiary?",
    a: "Yes — including a review of past filings, so nothing is missed in the handover before we take on the ongoing compliance calendar.",
  },
  {
    q: "Does India's tax treaty network reduce withholding tax on repatriation?",
    a: "Where India has a Double Taxation Avoidance Agreement with the parent's home jurisdiction, that treaty typically caps the withholding tax rate on dividends, interest, royalties and fees for technical services — the exact rate varies by treaty.",
  },
  {
    q: "What's the difference between a Wholly Owned Subsidiary and a GCC?",
    a: "Every GCC is legally a subsidiary (or branch, or JV) — \"GCC\" describes the purpose and scale of intent (a captive delivery center for the parent), not a separate legal entity type.",
  },
  {
    q: "How is an Indian subsidiary closed if it's no longer needed?",
    a: "An entity with no liabilities and limited activity can generally be struck off through a fast-track exit process; a more complex entity with liabilities, employees, or litigation to settle generally needs a formal voluntary liquidation instead.",
  },
]

export const metadata: Metadata = {
  title: "AU Corporate: Company Registration in India & Compliance",
  description:
    "CA-led firm for company incorporation and registration in India, serving clients across India and worldwide, with accounting, tax and FEMA compliance.",
  alternates: { canonical: "https://www.theaucorp.com/" },
  twitter: {
    title: "AU Corporate: Company Registration in India & Compliance",
    description:
      "CA-led firm for company incorporation and registration in India, serving clients across India and worldwide, with accounting, tax and FEMA compliance.",
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-x-hidden">

      {/* ================= HERO ================= */}
      <HeroSection />

      {/* ================= TRUST SIGNALS ================= */}
      <section className="border-b bg-white py-8 sm:py-10">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-gray-200 sm:grid-cols-4">
          {[
            ["Since 2016", "Serving clients pan India"],
            ["CA-Led Team", "Chartered Accountants & multidisciplinary specialists"],
            ["Full Lifecycle", "Incorporation through ongoing compliance"],
            ["FEMA · RBI · GST · ROC", "Regulatory filings we manage"],
          ].map(([value, label]) => (
            <div key={label} className="px-3 text-center sm:px-6">
              <div className="font-heading text-xl font-bold text-[#0E1B4D] sm:text-2xl">{value}</div>
              <div className="mt-1 text-xs leading-5 text-gray-600 sm:text-sm">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SUBSIDIARY LIFECYCLE ================= */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold text-[#0E1B4D] sm:text-4xl">
              Your India Subsidiary, Handled at Every Stage
            </h2>
            <p className="mt-4 text-gray-600">
              From the board resolution in your home country to every annual filing in India.
            </p>
          </div>

          <div className="relative mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            <div className="pointer-events-none absolute left-[10%] right-[10%] top-7 hidden h-0.5 bg-[#FFD21F] lg:block" aria-hidden="true" />
            {[
              ["01", "Plan", "Before incorporation", "Entity choice, FDI route, parent documents"],
              ["02", "Incorporate", "4–6 weeks", "Name approval, incorporation, PAN/TAN, bank account"],
              ["03", "Post-incorporation", "First 180 days", "FC-GPR, share certificates, first auditor, commencement of business"],
              ["04", "Operate", "Every month", "Accounting, GST, TDS, payroll, reporting to the parent"],
              ["05", "Comply", "Every year, in date order", "FLA return, audit support, AGM, ROC returns, transfer pricing report and income tax return"],
            ].map(([number, title, timing, description]) => (
              <div key={number} className="relative z-10 flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#FFD21F] bg-[#0E1B4D] font-heading text-sm font-bold text-white">
                  {number}
                </div>
                <h3 className="font-heading text-lg font-bold text-[#0E1B4D]">{title}</h3>
                <span className="mt-2 self-start rounded px-2 py-0.5 text-xs font-semibold text-[#713f12]" style={{ backgroundColor: "#fef9c3" }}>{timing}</span>
                <p className="mt-4 text-sm leading-6 text-gray-600">{description}</p>
              </div>
            ))}
          </div>

          <ComplianceCalendarCTA />
        </div>
      </section>

      {/* ================= CORE SERVICES ================= */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-3xl font-bold text-center mb-4 font-heading text-blue">
            Complete Services for Your India Subsidiary
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Everything a foreign company needs to set up, run and stay compliant with its Indian subsidiary, under one team.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="flex flex-col p-6 bg-white border rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-4 bg-yellow-50">
                  <service.icon size={20} style={{ color: GOLD }} />
                </div>
                <h3 className="font-semibold font-heading">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2 flex-1">
                  {service.description}
                </p>
                <span className="text-sm font-semibold mt-4 text-blue">{service.cta} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CASE STUDIES ================= */}
      <section id="case-studies" className="py-20 bg-white scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 font-heading text-blue">
            Subsidiaries We&apos;ve Set Up and Run
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            How foreign companies set up and run their Indian subsidiaries with AU Corporate.
          </p>
          {caseStudies.length > 0 ? (
            <>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                {caseStudies.slice(0, 3).map((c) => (
                  <CaseStudyCard key={c.slug} study={c} />
                ))}
              </div>
              <div className="text-center mb-10">
                <Button asChild variant="outline" className="border-blue text-blue bg-transparent hover:bg-gray-50">
                  <Link href="/case-studies">View all case studies</Link>
                </Button>
              </div>
            </>
          ) : (
            <div className="mx-auto max-w-3xl rounded-2xl border border-gray-200 bg-gray-50 p-8 text-center sm:p-10">
              <h3 className="font-heading text-xl font-semibold text-blue">
                Practical support beyond incorporation
              </h3>
              <p className="mt-3 leading-7 text-gray-600">
                Our work can span entity setup and the ongoing accounting, tax, FEMA, payroll and company-law compliance of an Indian subsidiary. We are preparing client case studies for publication; we do not publish client names or performance figures without verified details and approval.
              </p>
              <Link href="/contact" className="mt-5 inline-flex text-sm font-semibold text-blue hover:underline">
                Discuss your India setup →
              </Link>
            </div>
          )}
          <p className="mt-10 text-center text-sm text-gray-600">
            Not ready for a subsidiary? We also support{" "}
            <Link href="/branch-office-registration" className="font-semibold text-blue underline underline-offset-4">Branch Offices</Link>,{" "}
            <Link href="/liaison-office-registration" className="font-semibold text-blue underline underline-offset-4">Liaison Offices</Link> and{" "}
            <Link href="/project-office-registration" className="font-semibold text-blue underline underline-offset-4">Project Offices</Link>.
          </p>
        </div>
      </section>

      {/* ================= WHO WE WORK WITH ================= */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 font-heading text-blue">
            Who We Work With
          </h2>
          <p className="text-gray-600 text-center mb-10">
            Foreign parent companies running Indian subsidiaries across sectors.
          </p>

          <h3 className="text-center text-sm font-semibold uppercase tracking-wide text-gray-600 mb-4">
            Parent companies from
          </h3>
          <div className="flex flex-wrap justify-center gap-2.5 mb-14">
            {parentCountries.map((c) =>
              c.href ? (
                <Link
                  key={c.label}
                  href={c.href}
                  className="px-4 py-2.5 bg-white border rounded-full text-sm font-semibold hover:border-yellow-300 transition"
                  style={{ color: NAVY }}
                >
                  {c.label}
                </Link>
              ) : (
                <span
                  key={c.label}
                  className="px-4 py-2.5 bg-white border rounded-full text-sm font-semibold"
                  style={{ color: NAVY }}
                >
                  {c.label}
                </span>
              )
            )}
          </div>

          <h3 className="text-center text-sm font-semibold uppercase tracking-wide text-gray-600 mb-6">
            Industries
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {industryDetails.map((ind) => (
              <div key={ind.name} className="bg-white border rounded-xl p-4">
                <p className="font-semibold text-sm mb-1.5" style={{ color: NAVY }}>{ind.name}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{ind.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ABOUT TEASER ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 font-heading text-blue">
              Growing Together. Building Value.
            </h2>
            <p className="text-gray-600 mb-4">
              AU Corporate is a CA-led, multidisciplinary professional services firm serving clients across India, with a team of Chartered Accountants, CPAs, Company Secretaries, Cost Accountants, Lawyers, Industry Specialists, Ex-Bankers, and MBAs.
            </p>
            <p className="text-gray-600 mb-6">
              Established in 2016, we provide innovative solutions to complex business challenges and act as a catalyst for the growth of our clients across India and globally.
            </p>
            <Button asChild style={{ backgroundColor: GOLD }} className="text-black">
              <Link href="/about">Know More About Us</Link>
            </Button>
          </div>
          <div className="p-8 rounded-2xl bg-blue">
            <p className="text-yellow-400 text-sm font-semibold mb-3 tracking-wide uppercase">Our Approach</p>
            <p className="text-white/90 text-lg leading-relaxed font-heading">
              One Partner. Multiple Business Needs. AU Corporate brings market entry, accounting, tax, compliance, and advisory together — so you don&apos;t have to coordinate five different providers.
            </p>
          </div>
        </div>
      </section>

      {/* ================= WHY FOREIGN COMPANIES CHOOSE AU CORPORATE ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 font-heading text-blue">
            Why Foreign Companies Choose AU Corporate
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            AU Corporate is a CA-led, multidisciplinary professional services firm serving clients across India, with a team of Chartered Accountants, CPAs, Company Secretaries, Cost Accountants, Lawyers, Industry Specialists, Ex-Bankers and MBAs.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map((p) => (
              <InquiryCard
                key={p.title}
                title={p.title}
                description={p.description}
                className="block p-6 bg-gray-100 rounded-xl transition-all duration-300 hover:shadow-md"
                titleClassName="font-semibold mb-2"
                titleStyle={{ fontFamily: "var(--font-heading)" }}
                descriptionClassName="text-sm text-gray-600"
              />
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/about" className="text-sm font-semibold text-blue hover:underline">
              Know more about us →
            </Link>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-heading text-blue">
            Frequently Asked Questions
          </h2>
          <div className="grid gap-x-10 md:grid-cols-2">
            <FaqAccordion faqs={faqs.slice(0, 10)} compact />
            <FaqAccordion faqs={faqs.slice(10, 20)} compact />
          </div>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          }}
        />
      </section>

      {/* ================= INSIGHTS ================= */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 font-heading text-blue">
            Stay Informed. Stay Ahead.
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Taxation, compliance, and market-entry insights from our team.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {featuredGuides.map((post) => (
              <Link
                key={post.href}
                href={post.href}
                className="p-6 bg-white border rounded-xl hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <span className="text-xs font-semibold uppercase tracking-wide mb-3 text-gold-dark">
                  {post.category}
                </span>
                <h3 className="font-semibold mb-2 flex-1 font-heading">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <span className="text-sm font-semibold text-blue">
                  Read More →
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Button asChild aria-label="View all guides" style={{ backgroundColor: GOLD }} className="text-black">
              <Link href="/blog">View all guides</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ================= RELATED RESOURCES ================= */}
      <section className="py-16 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 font-heading text-blue">
            Related Resources
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/corporate-tax-gst-transfer-pricing" className="p-6 border rounded-lg hover:shadow-md transition group">
              <h3 className="font-semibold mb-2 font-heading">
                Corporate Tax, GST and Transfer Pricing
              </h3>
              <p className="text-sm text-gray-600">
                Corporate tax returns, advance tax, TDS, GST registration and returns, tax audit, and transfer pricing for your India subsidiary.
              </p>
            </Link>

            <Link href="/usa-to-india" className="p-6 border rounded-lg hover:shadow-md transition group">
              <h3 className="font-semibold mb-2 font-heading">
                Complete India Entry Guide
              </h3>
              <p className="text-sm text-gray-600">
                Step-by-step guidance for foreign companies entering the Indian market with compliance and tax efficiency.
              </p>
            </Link>

            <Link href="/accounting-reporting-audit-support" className="p-6 border rounded-lg hover:shadow-md transition group">
              <h3 className="font-semibold mb-2 font-heading">
                Accounting, Reporting and Audit Support
              </h3>
              <p className="text-sm text-gray-600">
                Monthly bookkeeping, MIS and reporting packs for the parent in US GAAP or IFRS, plus statutory audit coordination.
              </p>
            </Link>

            <Link href="/gcc-setup-india" className="p-6 border rounded-lg hover:shadow-md transition group">
              <h3 className="font-semibold mb-2 font-heading">
                GCC Setup in India
              </h3>
              <p className="text-sm text-gray-600">
                Entity choice, FEMA/RBI filings, and Safe Harbour tax rules for setting up a Global Capability Center in India.
              </p>
            </Link>



          </div>
        </div>
      </section>

      {/* ================= CONTACT / INQUIRY ================= */}
      <section id="inquiry-form" className="py-20 bg-blue scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-[1fr_1.1fr] gap-12 items-start">
          <div className="text-white">
            <h2 className="text-3xl font-bold mb-4 font-heading">
              Ready to Build Your Business in India?
            </h2>
            <p className="text-white/70 mb-6">
              Whether you&apos;re entering India for the first time or already operating here, share a few details and our team will get back to you within 24 hours.
            </p>
            <div className="text-white/80 text-sm leading-7">
              +91-9999010513
              <br />
              {OFFICES.newDelhi.lines}
              <br />
              {OFFICES.gurugram.lines}
            </div>
          </div>
          <InquiryForm
            title="Tell Us What You Need Help With"
            description="Share a few details and our team will get back to you within 24 hours."
          />
        </div>
      </section>

    </div>
  )
}
