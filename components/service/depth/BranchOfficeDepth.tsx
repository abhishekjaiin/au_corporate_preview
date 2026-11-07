import { DepthH3, DepthLink, DepthList, DepthNote, DepthP, DepthSection, DepthTable } from "@/components/service/DepthBlocks"

/** In-depth reference sections for /branch-office-registration. */
export function BranchOfficeDepth() {
  return (
    <>
      <DepthSection
        id="eligibility"
        title="Eligibility in Detail: Track Record, Net Worth and Who Decides"
        intro="The application is judged on the head office's own numbers, so we test them before anything is signed."
      >
        <DepthTable
          head={["Test", "What the AD bank looks for", "How it is evidenced"]}
          rows={[
            ["Profit track record", "Profits in each of the five financial years immediately before the application, in the home country", "Audited financial statements for those five years"],
            [
              "Net worth",
              "At least USD 100,000 or its equivalent: paid-up capital plus free reserves, less intangible assets",
              "The latest audited balance sheet, or an accountant's net worth certificate where the accounts are older",
            ],
            ["Banker's report", "Confirmation from the head office's bank that it is a customer in good standing", "A banker's report on the bank's letterhead"],
            ["Group support", "If the applicant is a subsidiary that does not meet the tests itself, its parent can support it", "A Letter of Comfort from the parent, which must meet the tests"],
          ]}
        />
        <DepthH3>AD bank route or RBI route</DepthH3>
        <DepthP>
          Most applications are decided by the authorised dealer (AD) Category-I bank under delegated powers. Some go to
          the Reserve Bank of India, which consults the Government of India before deciding: applicants from China, Hong
          Kong, Macau, Pakistan, Bangladesh, Sri Lanka, Afghanistan and Iran, and applicants whose principal business is
          in defence, telecom, private security, or information and broadcasting. Expect the RBI route to take several
          months longer, because the security clearance runs in parallel with the bank&apos;s review.
        </DepthP>
        <DepthNote>
          An approval letter is not open-ended. If the branch is not set up within six months of the approval date,
          the approval lapses unless the AD bank extends it, so we plan the lease and the bank account before the
          letter arrives.
        </DepthNote>
      </DepthSection>

      <DepthSection
        id="tax"
        tint
        title="How a Branch Office Is Taxed in India"
        intro="A branch is a permanent establishment of the foreign company. Its Indian profits are taxed in India, and the head office then claims credit at home under the tax treaty."
      >
        <DepthTable
          head={["Item", "Treatment"]}
          rows={[
            [
              "Income tax rate",
              "35% plus surcharge (2% where income exceeds INR 1 crore, 5% above INR 10 crore) and 4% cess: an effective 36.4% to 38.22%",
            ],
            ["Head office expenses", "Deductible only up to 5% of adjusted total income (the limit previously in Section 44C of the 1961 Act)"],
            ["Dealings with head office", "Covered by transfer pricing: services, cost recharges and supplies must be at arm's length, with Form 48 (previously Form 3CEB) filed each year"],
            ["Sending profits home", "No dividend withholding. Net profits after tax are remitted through the AD bank against the audited accounts and Forms 145 and 146 (previously Forms 15CA and 15CB)"],
            ["Treaty relief at home", "The head office claims credit for Indian tax under the India tax treaty with its country, supported by the Indian return and tax payment proof"],
          ]}
        />
        <DepthP>
          Because the rate is higher than the roughly 25.17% a subsidiary pays under the concessional regime, a branch
          tends to suit businesses with modest Indian profits, or groups whose home country gives full credit for
          foreign tax. We model both before you decide; see{" "}
          <DepthLink href="/branch-office-tax-gst-transfer-pricing">branch office tax, GST and transfer pricing</DepthLink> for the ongoing work.
        </DepthP>
      </DepthSection>

      <DepthSection
        id="annual-compliance"
        title="Annual Compliance Calendar for Your India Office"
        intro="Four authorities expect filings each year: the AD bank, the Registrar of Companies, the Income Tax Department and GST. The figures in each must agree."
      >
        <DepthTable
          head={["Filing", "Due", "Filed with"]}
          rows={[
            ["Form FC-4 (annual return)", "Within 60 days of the close of the financial year", "Registrar of Companies"],
            ["Form FC-3 (annual accounts of the Indian business)", "Within 6 months of the close of the financial year", "Registrar of Companies"],
            ["Annual Activity Certificate (AAC) from a Chartered Accountant, with audited accounts", "By 30 September", "AD bank, with a copy to the Income Tax Department"],
            ["Tax audit and Form 48 transfer pricing report (previously Form 3CEB)", "By 31 October", "Income Tax Department"],
            ["Income tax return for the tax year", "By 30 November where transfer pricing applies", "Income Tax Department"],
            ["GST returns", "Monthly or quarterly, plus the annual return", "GST portal"],
            ["TDS returns", "Quarterly", "Income Tax Department"],
          ]}
        />
        <DepthP>
          The AAC confirms that the branch carried on only the activities in its approval letter. A late or missing AAC
          is the most common reason AD banks hold up profit remittances, and repeated defaults can be referred to the
          RBI. Our <DepthLink href="/branch-office-fema-rbi-compliance">branch office FEMA and RBI compliance</DepthLink> service files it for you.
        </DepthP>
      </DepthSection>

      <DepthSection id="mistakes" tint title="Where Branch Office Applications Go Wrong">
        <DepthList
          items={[
            <>
              <strong>Activities described too broadly.</strong> The approval lists what the branch may do. Phrases such
              as &quot;any business of the company&quot; are rejected; each activity must match the permitted list.
            </>,
            <>
              <strong>A loss year in the track record.</strong> One loss year in the last five fails the test. A Letter
              of Comfort from a profitable parent is often the fix.
            </>,
            <>
              <strong>Accounts in the wrong form.</strong> Unaudited management accounts are not accepted, and accounts
              in a language other than English need a certified translation.
            </>,
            <>
              <strong>FC-1 filed late.</strong> The 30-day clock for Form FC-1 runs from setting up the place of business,
              not from the bank account opening. Late filing attracts additional fees.
            </>,
            <>
              <strong>Starting work before approval.</strong> Signing leases, hiring or invoicing before the approval and
              UIN breaches FEMA and may need compounding.
            </>,
          ]}
        />
      </DepthSection>

      <DepthSection id="closure" title="Closing a Branch Office Later">
        <DepthP>
          When a branch is no longer needed, the closure runs through the same AD bank. The bank needs the original
          approval, an auditor&apos;s certificate of assets and liabilities and how the remaining funds were arrived at,
          confirmation that all Indian taxes are paid, and confirmation that the Registrar has been told. Once it is
          satisfied, the remaining balance is remitted to the head office. Many groups instead convert the branch&apos;s
          business into a subsidiary as they grow; we plan that move so staff, contracts and GST registrations carry
          across. See <DepthLink href="/india-subsidiary-registration">India subsidiary registration</DepthLink>.
        </DepthP>
      </DepthSection>
    </>
  )
}
