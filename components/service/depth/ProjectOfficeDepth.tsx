import { DepthLink, DepthList, DepthP, DepthSection, DepthTable } from "@/components/service/DepthBlocks"

/** In-depth reference sections for /project-office-registration. */
export function ProjectOfficeDepth() {
  return (
    <>
      <DepthSection
        id="running-the-project"
        title="Running the Project: Bank Accounts, Funds and Surplus"
        intro="A project office exists for one contract, and the RBI rules on money follow that single purpose."
      >
        <DepthList
          items={[
            <>
              <strong>Foreign currency accounts.</strong> With the AD bank&apos;s permission, the office can hold
              non-interest-bearing foreign currency accounts in India, funded only by remittances from abroad and by
              receipts from the project itself.
            </>,
            <>
              <strong>Moving surplus between projects.</strong> Using one project&apos;s surplus for another Indian
              project needs the AD bank&apos;s approval and is allowed only within the conditions it sets.
            </>,
            <>
              <strong>Interim remittances.</strong> Surplus can be remitted abroad during the project against the
              auditor&apos;s certificate and proof that Indian taxes have been paid.
            </>,
            <>
              <strong>Final remittance.</strong> On completion, the remaining balance goes to the head office after the
              closing audit and tax clearance.
            </>,
          ]}
        />
      </DepthSection>

      <DepthSection
        id="tax"
        tint
        title="Tax on Project Profits"
        intro="A project office is a permanent establishment of the foreign company, so the profit attributable to the Indian contract is taxed in India."
      >
        <DepthTable
          head={["Item", "Treatment"]}
          rows={[
            ["Rate", "Foreign company rate: 35% plus surcharge and cess"],
            ["Withholding by the Indian client", "The client deducts TDS on payments; the office files a return and claims credit or a refund"],
            [
              "Presumptive schemes",
              "Some contracts are taxed on a deemed profit instead of actual profit, such as the presumptive scheme for certain turnkey power projects (previously Section 44BBB)",
            ],
            ["Treaty", "The construction or installation PE article of the relevant tax treaty sets when the project becomes taxable and how profit is attributed"],
            ["GST", "Registration is needed where the office makes taxable supplies in India, and GST is charged on project invoices"],
          ]}
        />
        <DepthP>
          Duration matters under most treaties: many only treat a site or installation project as a permanent
          establishment once it lasts beyond a set period, such as six or twelve months. We map your timeline against
          the treaty before work starts. Ongoing work is covered by{" "}
          <DepthLink href="/project-office-tax-gst-transfer-pricing">project office tax, GST and transfer pricing</DepthLink>.
        </DepthP>
      </DepthSection>

      <DepthSection id="annual-and-closing" title="Annual and Closing Filings">
        <DepthTable
          head={["Filing", "Due"]}
          rows={[
            ["Form FC-4 annual return to the Registrar", "Within 60 days of the financial year end"],
            ["Form FC-3 annual accounts to the Registrar", "Within 6 months of the financial year end"],
            ["Annual Activity Certificate with audited accounts, to the AD bank", "By 30 September"],
            ["Income tax return, with tax audit and transfer pricing report where applicable", "31 October, or 30 November where transfer pricing applies"],
            ["Closure application to the AD bank", "On completion of the project, with the auditor's certificate and tax clearance"],
          ]}
        />
        <DepthP>
          A project office should be closed promptly when the contract ends, including the bank accounts and the
          Registrar filings. If more Indian contracts follow, a branch office or subsidiary is usually more efficient
          than opening a new project office each time; see{" "}
          <DepthLink href="/branch-office-registration">branch office registration</DepthLink>.
        </DepthP>
      </DepthSection>
    </>
  )
}
