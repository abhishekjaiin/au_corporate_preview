import type { Metadata } from "next"

export const metadata: Metadata = {
  title: { absolute: "Company Registration in India for NRIs and Foreign Nationals" },
  description: "How NRIs, OCIs and foreign nationals register a company in India: structures, repatriation basis, documents, bank accounts, resident director and tax.",
  alternates: { canonical: "https://www.theaucorp.com/company-registration-in-india-for-nri" },
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Company%20Registration%20in%20India%20for%20NRIs%20and%20Foreign%20Nationals", width: 1200, height: 630, alt: "Company Registration in India for NRIs and Foreign Nationals" }],
    siteName: "AU Corporate",
    title: "Company Registration in India for NRIs and Foreign Nationals",
    description: "How NRIs, OCIs and foreign nationals register a company in India: structures, repatriation basis, documents, bank accounts, resident director and tax.",
    url: "https://www.theaucorp.com/company-registration-in-india-for-nri",
    locale: "en_IN",
  },
  twitter: { title: "Company Registration in India for NRIs and Foreign Nationals", description: "How NRIs, OCIs and foreign nationals register a company in India: structures, repatriation basis, documents, bank accounts, resident director and tax." },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
