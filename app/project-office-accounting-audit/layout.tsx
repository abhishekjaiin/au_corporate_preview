import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Accounting and Audit Support for Project Offices in India",
  },
  description:
    "Project-wise accounting, head office reconciliation, retention and WIP, TDS and GST workings, US GAAP or IFRS reporting and audit for India project offices.",
  alternates: {
    canonical: "https://www.theaucorp.com/project-office-accounting-audit",
  },
  openGraph: {
    type: "website",
    images: [{ url: "https://www.theaucorp.com/og?title=Accounting%20and%20Audit%20Support%20for%20Project%20Offices%20in%20India", width: 1200, height: 630, alt: "Accounting and Audit Support for Project Offices in India" }],
    locale: "en_IN",
    siteName: "AU Corporate",
    title: "Accounting and Audit Support for Project Offices in India",
    description:
      "Project-wise accounting, head office reconciliation, retention and WIP, TDS and GST workings, US GAAP or IFRS reporting and audit for India project offices.",
    url: "https://www.theaucorp.com/project-office-accounting-audit",
  },
  twitter: {
    title: "Accounting and Audit Support for Project Offices in India",
    description:
      "Project-wise accounting, head office reconciliation, retention and WIP, TDS and GST workings, US GAAP or IFRS reporting and audit for India project offices.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
