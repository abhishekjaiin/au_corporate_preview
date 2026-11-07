import type { Metadata } from "next"

export const metadata: Metadata = {
  title: { absolute: "Company Registration in Pune for Foreign Companies" },
  description: "How a foreign company registers a company in Pune: the Registrar, Maharashtra shops and establishments and professional tax rules, offices, talent and timeline.",
  alternates: { canonical: "https://www.theaucorp.com/company-registration-in-pune" },
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Company%20Registration%20in%20Pune%20for%20Foreign%20Companies", width: 1200, height: 630, alt: "Company Registration in Pune for Foreign Companies" }],
    siteName: "AU Corporate",
    title: "Company Registration in Pune for Foreign Companies",
    description: "How a foreign company registers a company in Pune: the Registrar, Maharashtra shops and establishments and professional tax rules, offices, talent and timeline.",
    url: "https://www.theaucorp.com/company-registration-in-pune",
    locale: "en_IN",
  },
  twitter: { title: "Company Registration in Pune for Foreign Companies", description: "How a foreign company registers a company in Pune: the Registrar, Maharashtra shops and establishments and professional tax rules, offices, talent and timeline." },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
