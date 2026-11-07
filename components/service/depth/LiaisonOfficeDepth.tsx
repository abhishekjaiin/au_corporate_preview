import { DepthLink, DepthList, DepthNote, DepthP, DepthSection, DepthTable } from "@/components/service/DepthBlocks"

/** In-depth reference sections for /liaison-office-registration. */
export function LiaisonOfficeDepth() {
  return (
    <>
      <DepthSection
        id="validity"
        title="How Long a Liaison Office Approval Lasts, and Renewing It"
        intro="Unlike a branch, a liaison office is approved for a fixed period. Letting it run out while the office is still open is a FEMA contravention."
      >
        <DepthTable
          head={["Applicant", "Approval period", "Renewal"]}
          rows={[
            ["Most foreign companies", "3 years from the approval date", "Apply to the AD bank before expiry, with the latest AAC and audited accounts"],
            ["Non-banking financial companies", "2 years", "Usually expected to close or convert to a subsidiary or joint venture at the end"],
            ["Construction and development companies", "2 years", "As for NBFCs"],
          ]}
        />
        <DepthP>
          The approval also lapses if the office is not set up within six months of the approval letter. We diarise
          both dates the day the letter arrives, and start renewal paperwork about three months before expiry.
        </DepthP>
      </DepthSection>

      <DepthSection
        id="money-and-staff"
        tint
        title="Funding, Staff and the Permanent Establishment Risk"
        intro="A liaison office runs entirely on money from abroad, and its tax position depends on staying strictly within its approved role."
      >
        <DepthList
          items={[
            <>
              <strong>Funding.</strong> All expenses, including rent and salaries, are met from inward remittances
              from the head office. A liaison office cannot borrow or lend in India, and cannot receive payments from
              Indian customers.
            </>,
            <>
              <strong>Staff.</strong> It can hire employees in India and must run payroll properly: TDS on salaries
              (so it needs a TAN), provident fund once the headcount threshold is reached, and professional tax in states
              that levy it. See <DepthLink href="/liaison-office-payroll-compliance">liaison office payroll compliance</DepthLink>.
            </>,
            <>
              <strong>Permanent establishment risk.</strong> If staff negotiate or conclude contracts, quote prices or
              sell, the tax authorities can treat the office as a permanent establishment of the foreign company and tax
              a share of its profits in India. We review job descriptions and email templates for this.
            </>,
          ]}
        />
        <DepthNote>
          A liaison office earns no income, but it is not invisible to the tax department. It must file its{" "}
          <strong>annual statement of activities</strong> (Form 49C under the earlier law) with the income tax authorities within 60 days of the end of each financial year,
          describing its activities, the people it dealt with and its expenses.
        </DepthNote>
      </DepthSection>

      <DepthSection id="annual-compliance" title="Yearly Filings for a Liaison Office">
        <DepthTable
          head={["Filing", "Due", "Filed with"]}
          rows={[
            ["Annual statement of activities (Form 49C under the earlier law)", "Within 60 days of the financial year end", "Income Tax Department"],
            ["Form FC-4 (annual return)", "Within 60 days of the financial year end", "Registrar of Companies"],
            ["Form FC-3 (annual accounts)", "Within 6 months of the financial year end", "Registrar of Companies"],
            ["Annual Activity Certificate from a Chartered Accountant", "By 30 September", "AD bank, with a copy to the Income Tax Department"],
            ["TDS returns on salaries and payments", "Quarterly", "Income Tax Department"],
          ]}
        />
        <DepthP>
          The AAC is where a liaison office proves it stayed within its approval: that it earned no income, was funded
          only by remittances, and carried out only the listed tasks. Our{" "}
          <DepthLink href="/liaison-office-fema-rbi-compliance">liaison office FEMA and RBI compliance</DepthLink> and{" "}
          <DepthLink href="/liaison-office-tax-compliance">tax compliance</DepthLink> services keep both sides consistent.
        </DepthP>
      </DepthSection>

      <DepthSection id="next-step" tint title="When to Convert or Close the Liaison Office">
        <DepthP>
          Most foreign companies use a liaison office for two or three years to build relationships before committing.
          Once the Indian team needs to sell, invoice or deliver services, the office has outgrown its approval. The
          usual next step is an Indian subsidiary, or a branch office where the activity fits the branch list. Closure
          runs through the AD bank, with an auditor&apos;s certificate of the remaining funds, confirmation of no
          pending tax dues and notice to the Registrar, after which the balance is remitted to the head office. See{" "}
          <DepthLink href="/india-subsidiary-registration">India subsidiary registration</DepthLink> and{" "}
          <DepthLink href="/branch-office-registration">branch office registration</DepthLink>.
        </DepthP>
      </DepthSection>
    </>
  )
}
