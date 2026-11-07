import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Accounting and Audit Support for Branch Offices in India",
  },
  description:
    "Monthly accounting, head office reconciliation, TDS and GST workings, US GAAP or IFRS reporting and audit support for the India branch of a foreign company.",
  alternates: {
    canonical: "https://www.theaucorp.com/branch-office-accounting-audit",
  },
  openGraph: {
    type: "website",
    images: [{ url: "https://www.theaucorp.com/og?title=Accounting%20and%20Audit%20Support%20for%20Branch%20Offices%20in%20India", width: 1200, height: 630, alt: "Accounting and Audit Support for Branch Offices in India" }],
    locale: "en_IN",
    siteName: "AU Corporate",
    title: "Accounting and Audit Support for Branch Offices in India",
    description:
      "Monthly accounting, head office reconciliation, TDS and GST workings, US GAAP or IFRS reporting and audit support for the India branch of a foreign company.",
    url: "https://www.theaucorp.com/branch-office-accounting-audit",
  },
  twitter: {
    title: "Accounting and Audit Support for Branch Offices in India",
    description:
      "Monthly accounting, head office reconciliation, TDS and GST workings, US GAAP or IFRS reporting and audit support for the India branch of a foreign company.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
