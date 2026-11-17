import Link from "next/link"
import { CheckCircle2 } from "lucide-react"
import { Breadcrumb } from "@/components/Breadcrumb"
import { Web3Form } from "@/components/Web3Form"
import { GuideFaqList } from "@/components/guide/GuideFaqList"

const outcomes = [
  "The right India structure for your plan: subsidiary, branch, liaison office or LLP",
  "A realistic timeline from your country, and the documents your parent company must prepare",
  "Your FEMA, RBI, tax, GST and transfer pricing obligations in the first year",
  "A written, fixed quote before any work starts",
]

const steps = [
  { title: "Tell us your plan", body: "Fill in the short form. It takes under a minute, and only your name, email and need are required." },
  { title: "Speak to a Chartered Accountant", body: "We reply within 24 hours and schedule a call in your time zone, by video, phone or WhatsApp." },
  { title: "Get your India plan and quote", body: "You receive the recommended structure, steps, timeline and a fixed fee in writing. No obligation." },
]

const proof = [
  { label: "Indian subsidiary incorporated in 14 days for a US company", href: "/case-studies/us-longevity-company-india-subsidiary-14-days" },
  { label: "Finance and HR for a US SaaS captive centre, client since 2018", href: "/case-studies/us-saas-captive-centre-india" },
  { label: "FEMA compounding of 14 contraventions for a China-owned subsidiary", href: "/case-studies/china-subsidiary-fema-compounding" },
]

const faqs = [
  { q: "Is the consultation really free?", a: "Yes. The first consultation is free and carries no obligation. If you go ahead, we confirm a fixed fee in writing before any work starts." },
  { q: "Who will I speak to?", a: "A Chartered Accountant from AU Corporate's team, led by CA Abhishek Jaiin, who has advised foreign companies on India entry and compliance since 2016." },
  { q: "What does setting up an Indian subsidiary cost?", a: "AU Corporate's indicative incorporation fee is USD 750 to USD 1,000 for share capital up to ₹10 lakh. Government fees, stamp duty and notary or apostille costs in your country depend on the state, the capital and your documents. We give you the full figure on the call." },
  { q: "Can you help if my company is in Japan?", a: "Yes. Through our alliance with Nihon-bashi International Accounting Firm in Tokyo, Japanese companies can start the conversation in Japanese, while we handle incorporation and compliance in India." },
  { q: "We already have an Indian entity. Can you still help?", a: "Yes. We take over accounting, tax, GST, FEMA and RBI filings, payroll and secretarial compliance for existing Indian subsidiaries and offices, including fixing missed filings." },
]

export default function FreeConsultationPage() {
  return (
    <main className="min-h-screen bg-white">
      <Breadcrumb items={[{ label: "Free consultation" }]} />

      <section className="bg-[#081a42] text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-gold">Free first consultation</p>
            <h1 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
              Set up and run your company in India, with a Chartered Accountant on your side
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-white/85">
              Talk to AU Corporate before you commit. In one free call we map your India entry: structure, documents,
              timeline, compliance and cost, with the best pricing and better work support.
            </p>
            <ul className="mt-6 space-y-3">
              {outcomes.map((o) => (
                <li key={o} className="flex gap-3 text-white/90">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                  <span>{o}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-white/70">
              CA-led since 2016 · Offices in New Delhi and Gurugram · Clients from 10+ countries ·{" "}
              <Link href="/japan-alliance" className="font-semibold text-white underline">Japan alliance with Nihon-bashi International Accounting Firm</Link>
            </p>
          </div>

          <div id="form" className="rounded-2xl bg-white p-6 text-gray-900 shadow-2xl">
            <h2 className="text-xl font-bold text-[#081a42]">Book your free consultation</h2>
            <p className="mb-5 mt-1 text-sm text-gray-600">A Chartered Accountant replies within 24 hours.</p>
            <Web3Form />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14">
        <h2 className="mb-8 text-2xl font-bold text-gray-900">How it works</h2>
        <ol className="grid gap-6 sm:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.title} className="rounded-xl border p-6">
              <span className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-gold font-bold text-[#081a42]">{i + 1}</span>
              <h3 className="mb-2 font-bold text-gray-900">{s.title}</h3>
              <p className="text-sm leading-relaxed text-gray-600">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-gray-50 py-14">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">What we help with</h2>
          <p className="mb-6 leading-relaxed text-gray-600">
            Foreign companies use us for{" "}
            <Link href="/india-subsidiary-registration" className="font-semibold text-blue-800 hover:underline">Indian subsidiary registration</Link>,{" "}
            <Link href="/branch-office-registration" className="font-semibold text-blue-800 hover:underline">branch</Link> and{" "}
            <Link href="/liaison-office-registration" className="font-semibold text-blue-800 hover:underline">liaison offices</Link>,{" "}
            <Link href="/fema-rbi-compliance" className="font-semibold text-blue-800 hover:underline">FEMA and RBI compliance</Link>,{" "}
            <Link href="/corporate-tax-gst-transfer-pricing" className="font-semibold text-blue-800 hover:underline">tax, GST and transfer pricing</Link>,{" "}
            <Link href="/payroll-expat-services" className="font-semibold text-blue-800 hover:underline">payroll and expat staff</Link> and{" "}
            <Link href="/gcc-setup-india" className="font-semibold text-blue-800 hover:underline">GCC setup</Link>. Indicative subsidiary incorporation fee:
            USD 750 to USD 1,000 for share capital up to ₹10 lakh.
          </p>
          <h3 className="mb-3 font-bold text-gray-900">Recent client work</h3>
          <ul className="list-disc space-y-2 pl-6 text-gray-700">
            {proof.map((p) => (
              <li key={p.href}>
                <Link href={p.href} className="font-semibold text-blue-800 hover:underline">{p.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-14">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">Frequently asked questions</h2>
        <GuideFaqList faqs={faqs} />
        <p className="mt-8 text-center">
          <a href="#form" className="inline-block rounded-lg bg-[#FFD21F] px-6 py-3 font-bold text-[#0E1B4D] hover:bg-[#F2B705]">
            Book your free consultation
          </a>
        </p>
      </section>
    </main>
  )
}
