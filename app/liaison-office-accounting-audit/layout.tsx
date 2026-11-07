import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Accounting and Audit Support for Liaison Offices in India",
  },
  description:
    "Monthly accounting, remittance reconciliation, TDS, head-office reporting and audit support for a foreign company's India liaison office.",
  alternates: {
    canonical: "https://www.theaucorp.com/liaison-office-accounting-audit",
  },
  openGraph: {
    type: "website",
    images: [{ url: "https://www.theaucorp.com/og?title=Accounting%20and%20Audit%20Support%20for%20Liaison%20Offices%20in%20India", width: 1200, height: 630, alt: "Accounting and Audit Support for Liaison Offices in India" }],
    locale: "en_IN",
    siteName: "AU Corporate",
    title: "Accounting and Audit Support for Liaison Offices in India",
    description:
      "Monthly accounting, remittance reconciliation, TDS, head-office reporting and audit support for a foreign company's India liaison office.",
    url: "https://www.theaucorp.com/liaison-office-accounting-audit",
  },
  twitter: {
    title: "Accounting and Audit Support for Liaison Offices in India",
    description:
      "Monthly accounting, remittance reconciliation, TDS, head-office reporting and audit support for a foreign company's India liaison office.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
