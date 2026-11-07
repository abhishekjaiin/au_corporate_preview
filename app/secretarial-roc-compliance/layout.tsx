import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Secretarial and ROC Compliance for Indian Subsidiaries",
  },
  description:
    "Board meetings, AGM, ROC filings, MCA notices, registered office shifting, mergers, winding up and resident director support for your Indian subsidiary.",
  alternates: {
    canonical: "https://www.theaucorp.com/secretarial-roc-compliance",
  },
  openGraph: {
    type: "website",
    images: [{ url: "https://www.theaucorp.com/og?title=Secretarial%20and%20ROC%20Compliance%20for%20Indian%20Subsidiaries", width: 1200, height: 630, alt: "Secretarial and ROC Compliance for Indian Subsidiaries" }],
    locale: "en_IN",
    siteName: "AU Corporate",
    title: "Secretarial and ROC Compliance for Indian Subsidiaries",
    description:
      "Board meetings, AGM, ROC filings, MCA notices, registered office shifting, mergers, winding up and resident director support for your Indian subsidiary.",
    url: "https://www.theaucorp.com/secretarial-roc-compliance",
  },
  twitter: {
    title: "Secretarial and ROC Compliance for Indian Subsidiaries",
    description:
      "Board meetings, AGM, ROC filings, MCA notices, registered office shifting, mergers, winding up and resident director support for your Indian subsidiary.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
