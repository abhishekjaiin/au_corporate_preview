import Link from "next/link"
import { Breadcrumb } from "@/components/Breadcrumb"
import { CaseStudyCard } from "@/components/case-study/CaseStudyCard"
import { caseStudies } from "@/lib/case-studies"

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Breadcrumb items={[{ label: "Case Studies" }]} />

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-4 font-heading text-blue sm:text-4xl">
            Subsidiaries We&apos;ve Set Up and Run
          </h1>
          <p className="text-gray-600 text-center max-w-xl mx-auto mb-14">
            How foreign parents from the USA, China and other countries set up, run and fix the compliance of their Indian subsidiaries with AU Corporate.
          </p>

          {caseStudies.length === 0 ? (
            <p className="text-gray-500 text-center max-w-xl mx-auto mb-14">
              We&apos;re preparing detailed case studies from current and past engagements.
              Check back soon, or{" "}
              <Link href="/contact" className="text-gold-dark font-semibold hover:underline">
                get in touch
              </Link>{" "}
              to discuss your own situation directly.
            </p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
              {caseStudies.map((c) => (
                <CaseStudyCard key={c.slug} study={c} headingLevel="h2" />
              ))}
            </div>
          )}

          <div className="max-w-4xl mx-auto mb-14 text-gray-700 leading-relaxed">
            <h2 className="text-2xl font-bold font-heading text-blue mb-4">What these client results show</h2>
            <p className="mb-4">
              Each case study describes a real engagement, with the client&apos;s name withheld where confidentiality requires it. Together they cover the three situations foreign parents most often bring to us: setting up a new Indian company quickly, running an established captive centre on a defensible cost-plus model, and repairing past compliance gaps before they become expensive.
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Speed of setup.</strong> How a US company went from signed documents to a working Indian company in 14 days, by preparing the Indian filings while its documents were authenticated at home.</li>
              <li><strong>Running a captive centre.</strong> How a US software group priced its Indian engineering centre, kept FEMA, tax, payroll and audit filings aligned, and answered transfer pricing questions with one set of documents.</li>
              <li><strong>Fixing the past.</strong> How a Chinese-owned company regularised late FEMA reporting through compounding with the RBI, and put a calendar in place so it would not happen again.</li>
            </ul>
            <h2 className="text-2xl font-bold font-heading text-blue mb-4">Common threads across our client work</h2>
            <p className="mb-4">
              The same lessons come up in almost every engagement. Indian filings are rarely difficult on their own; problems start when accounting, tax, FEMA and company-law records are kept by different people and stop agreeing with each other. Foreign parents also tend to underestimate how much the Indian calendar differs from their own, from the 31 March year end to monthly GST and payroll deadlines. Finally, decisions taken in the first month, such as who the resident director is, how capital is remitted and how intercompany charges are priced, shape the cost of compliance for years afterwards.
            </p>
            <p className="mb-6">
              That is why we prefer to be involved from the first board resolution, and why each case study ends with the practical steps the client took to keep its Indian company on track.
            </p>
            <h2 className="text-2xl font-bold font-heading text-blue mb-4">How an engagement usually runs</h2>
            <ol className="list-decimal pl-6 space-y-2 mb-6">
              <li>A call to understand the parent, its plans for India and any history of filings.</li>
              <li>A written scope and fixed quote, agreed before work starts.</li>
              <li>One team of Chartered Accountants and Company Secretaries covering incorporation, accounting, tax, FEMA, payroll and audit support.</li>
              <li>A monthly report to the parent on what was filed, what was paid and what is coming up.</li>
            </ol>
            <p>
              The services behind these results are 
              <Link href="/india-subsidiary-registration" className="text-gold-dark font-semibold hover:underline">India company registration</Link>, 
              <Link href="/fema-rbi-compliance" className="text-gold-dark font-semibold hover:underline">FEMA and RBI compliance</Link>, 
              <Link href="/corporate-tax-gst-transfer-pricing" className="text-gold-dark font-semibold hover:underline">tax and transfer pricing</Link> and 
              <Link href="/gcc-setup-india" className="text-gold-dark font-semibold hover:underline">GCC setup</Link>. Our 
              <Link href="/compliance-calendar" className="text-gold-dark font-semibold hover:underline">compliance calendar</Link> lists the dates every foreign-owned company must meet.
            </p>
          </div>

          <p className="bg-gray-100 rounded-lg px-5 py-4 text-center text-gray-600 text-sm">
            Not ready for a subsidiary? We also set up{" "}
            <Link href="/branch-office-registration" className="text-gold-dark font-semibold hover:underline">
              Branch Offices
            </Link>{" "}
            and{" "}
            <Link href="/project-office-registration" className="text-gold-dark font-semibold hover:underline">
              Project Offices
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  )
}
