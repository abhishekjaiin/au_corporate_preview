import { DepthH3, DepthLink, DepthList, DepthNote, DepthP, DepthSection, DepthTable } from "@/components/service/DepthBlocks"

/** In-depth reference sections for /india-subsidiary-registration. */
export function SubsidiaryDepth() {
  return (
    <>
      <DepthSection
        id="fdi-route"
        title="Step Zero: Can Your Parent Invest Under the Automatic Route?"
        intro="Before any form is filed, we check how the foreign investment rules apply to your business. That decides whether you can incorporate straight away or need government approval first."
      >
        <DepthP>
          India&apos;s FDI policy and the Foreign Exchange Management (Non-debt Instruments) Rules, 2019 sort every
          business activity into one of three groups. Most of what foreign parents set up in India (software and SaaS
          development, IT-enabled services, consulting, engineering, manufacturing, trading on a wholesale or
          cash-and-carry basis, and captive or global capability centres) falls under the{" "}
          <strong>automatic route with 100% foreign ownership allowed</strong>. You can incorporate and receive the
          capital without any approval; the investment is simply reported to the Reserve Bank of India afterwards.
        </DepthP>
        <DepthTable
          head={["Route", "What it means", "Typical examples"]}
          rows={[
            [
              "Automatic route",
              "No prior approval. Incorporate, receive capital, report on the RBI's FIRMS portal.",
              "IT and software services, SaaS, consulting, most manufacturing, wholesale trading, R&D centres",
            ],
            [
              "Government route",
              "Approval from the relevant ministry through the Foreign Investment Facilitation Portal before shares are issued.",
              "Sectors above their automatic-route cap (for example parts of defence, broadcasting and print media), multi-brand retail",
            ],
            [
              "Prohibited",
              "Foreign investment is not allowed at all.",
              "Lottery, gambling and betting, chit funds, Nidhi companies, real estate business and farmhouses, trading in TDRs, manufacturing of tobacco products",
            ],
          ]}
        />
        <DepthNote>
          <strong>Land-border rule (Press Note 3 of 2020):</strong> if the investor, or the beneficial owner behind it,
          is a resident of or a citizen of a country sharing a land border with India (China, Pakistan, Bangladesh,
          Nepal, Bhutan, Myanmar or Afghanistan), every investment needs government approval, whatever the sector. A
          Singapore, Hong Kong or US company with a Chinese ultimate owner is caught too, so we trace the ownership
          chain at the start. See our <DepthLink href="/china-to-india/india-press-note-3-and-chinese-investors">Press Note 3 guide</DepthLink>{" "}
          for how the approval works.
        </DepthNote>
      </DepthSection>

      <DepthSection
        id="spice-plus"
        tint
        title="The SPICe+ Incorporation Filing, Form by Form"
        intro="Indian companies are incorporated online on the Ministry of Corporate Affairs (MCA) portal through one integrated web form, SPICe+ (INC-32). It bundles what used to be ten separate registrations."
      >
        <DepthTable
          head={["Form", "What it does", "Who signs"]}
          rows={[
            ["SPICe+ Part A", "Reserves the company name. You can propose two names; an approved name is held for 20 days.", "Filed by us"],
            [
              "SPICe+ Part B",
              "Incorporates the company and allots Director Identification Numbers (DIN) to up to three new directors, plus PAN and TAN.",
              "Directors and subscribers, by digital signature",
            ],
            ["e-MoA (INC-33)", "The Memorandum of Association: name, registered state, objects and capital.", "Subscribers (the parent and the nominee shareholder)"],
            ["e-AoA (INC-34)", "The Articles of Association: the internal rules, including share transfer and board powers.", "Subscribers"],
            [
              "AGILE-PRO-S (INC-35)",
              "Applies for GSTIN (optional), EPFO and ESIC registration, professional tax in some states, and the company's bank account.",
              "A director",
            ],
            ["INC-9 and DIR-2", "Declarations by the subscribers and the consent of each director to act.", "Each subscriber and director"],
          ]}
        />
        <DepthP>
          Every person who signs needs a <strong>Digital Signature Certificate (DSC)</strong>. Foreign directors and
          the parent&apos;s authorised signatory get one through a licensed certifying authority after a short video
          verification and an authenticated copy of their passport and address proof. We run the DSC applications
          while your documents are being apostilled, so they are ready the day the forms are.
        </DepthP>
        <DepthP>
          The MCA charges no filing fee under SPICe+ for a company with authorised capital up to INR 15 lakh. Above that,
          a filing fee applies on a sliding scale. Stamp duty on the MoA, the AoA and the share certificates is set by
          each state and is the main reason government costs vary from one state to another.
        </DepthP>
      </DepthSection>

      <DepthSection id="structure" title="Structure Decisions We Settle Before Filing">
        <DepthH3>Shareholders: the parent plus a nominee</DepthH3>
        <DepthP>
          A private limited company needs at least two shareholders. Most foreign parents hold all but one share
          directly and place the last share with a nominee: an affiliate company or an individual who holds it on the
          parent&apos;s behalf. The nominee and the parent sign declarations of beneficial interest (Forms MGT-4 and
          MGT-5) and the company reports them to the Registrar in Form MGT-6, so the subsidiary remains wholly owned in
          substance.
        </DepthP>
        <DepthH3>Directors: at least two, one resident</DepthH3>
        <DepthP>
          The board needs at least two directors. Under Section 149(3) of the Companies Act, 2013, at least one must
          have stayed in India for 182 days or more in the financial year; for a newly incorporated company the
          requirement applies proportionately. Foreign nationals can make up the rest of the board. If no one on
          your team qualifies, our resident director service fills the seat with a professional who understands the
          role and its liabilities.
        </DepthP>
        <DepthH3>Capital: authorised versus paid-up</DepthH3>
        <DepthP>
          India has no minimum capital for a private company. Authorised capital is the ceiling stated in the MoA;
          paid-up capital is what the parent actually remits. We usually recommend paid-up capital that covers the
          first six to twelve months of running costs, because a thinly capitalised company ends up funding itself
          through parent loans, which bring External Commercial Borrowing rules and interest withholding tax with them.
        </DepthP>
        <DepthH3>Objects and financial year</DepthH3>
        <DepthP>
          The objects clause should describe what the company will actually do, since banks, GST officers and the RBI
          read it. Every Indian company follows an April to March financial year. A company incorporated between
          1 January and 31 March may close its first financial year on 31 March of the following year.
        </DepthP>
      </DepthSection>

      <DepthSection
        id="after-incorporation"
        tint
        title="The First 180 Days: What Must Happen After Incorporation"
        intro="The Certificate of Incorporation starts several clocks running. Missing them leads to late fees or, for FEMA filings, compounding before the RBI. We track each one for you."
      >
        <DepthTable
          head={["Deadline", "What", "Law"]}
          rows={[
            ["Within 30 days", "First board meeting", "Companies Act, s.173"],
            ["Within 30 days", "Board appoints the first statutory auditor, who holds office until the first annual general meeting", "Companies Act, s.139(6)"],
            ["Before receiving capital", "Bank account opened and the Entity Master registered on the RBI's FIRMS portal", "FEMA reporting framework"],
            ["Within 60 days of receiving capital", "Shares allotted to the parent; otherwise the money must be refunded", "FEMA (Non-debt Instruments) Rules"],
            ["Within 30 days of allotment", "Form FC-GPR reporting the foreign investment, with a valuation certificate and the bank's KYC", "FEMA (Mode of Payment and Reporting) Regulations"],
            ["Within 30 days of allotment", "Return of allotment, Form PAS-3, filed with the Registrar", "Companies Act, s.39"],
            ["Within 2 months of incorporation", "Share certificates issued to subscribers", "Companies Act, s.56(4)"],
            ["Within 180 days of incorporation", "Declaration of commencement of business, Form INC-20A, confirming subscribers paid for their shares", "Companies Act, s.10A"],
            ["By 15 July each year", "Annual return on foreign liabilities and assets (FLA)", "FEMA"],
          ]}
        />
        <DepthP>
          State-level registrations follow too: the Shops and Establishments licence for the office, professional tax
          where the state levies it, and GST registration once turnover crosses the threshold or the company makes
          inter-state or export supplies that need it.
        </DepthP>
      </DepthSection>

      <DepthSection id="delays" title="What Usually Delays a Subsidiary Registration">
        <DepthList
          items={[
            <>
              <strong>Name rejections.</strong> Names too close to an existing company, LLP or registered trademark are
              refused. We search the MCA and trademark registers before proposing names.
            </>,
            <>
              <strong>Mismatched details across documents.</strong> A director&apos;s name spelled differently on the
              passport, address proof and board resolution stops the filing. We check every document side by side before
              it is apostilled.
            </>,
            <>
              <strong>Stale address proof.</strong> Address proofs for subscribers and the registered office utility bill
              must generally be recent, usually not older than two months.
            </>,
            <>
              <strong>Capital sent too early or without details.</strong> Money remitted before the account exists, or
              without the company name and purpose, gets stuck. We give your treasury team a payment instruction letter.
            </>,
            <>
              <strong>FC-GPR returned by the bank.</strong> The usual reasons are a missing valuation certificate, a
              share price below fair value, or missing KYC from the remitting bank. We prepare the valuation with the
              allotment, not afterwards.
            </>,
          ]}
        />
      </DepthSection>

      <DepthSection
        id="subsidiary-vs-others"
        tint
        title="Subsidiary, Branch Office or LLP: How the Tax and Control Compare"
        intro="Most foreign companies choose a subsidiary because it is taxed at a lower rate and keeps liability inside India. A branch or LLP suits narrower cases."
      >
        <DepthTable
          head={["Point", "Private limited subsidiary", "Branch office", "LLP"]}
          rows={[
            [
              "Income tax",
              "About 25.17% effective under the concessional regime (Section 200 of the Income-tax Act, 2025, previously Section 115BAA)",
              "35% plus surcharge and cess, as a foreign company",
              "30% plus surcharge and cess",
            ],
            ["Approval needed", "None under the automatic route", "RBI approval through an authorised dealer bank", "None, but only in sectors open to 100% FDI without conditions"],
            ["Liability", "Limited to the subsidiary", "The parent is directly liable", "Limited to the LLP"],
            ["Getting profits home", "Dividends, taxed at 20% or the lower treaty rate", "Branch profits remitted without further tax", "Profit share, not taxed again in the partner's hands in India"],
            ["Activities", "Anything allowed under the FDI policy", "Only activities listed by the RBI", "Anything allowed for LLPs under FDI rules"],
          ]}
        />
        <DepthP>
          Weighing a branch instead? See our <DepthLink href="/branch-office-registration">branch office registration</DepthLink> service, or a{" "}
          <DepthLink href="/liaison-office-registration">liaison office</DepthLink> if you only need a representative presence while you test the market.
        </DepthP>
      </DepthSection>
    </>
  )
}
