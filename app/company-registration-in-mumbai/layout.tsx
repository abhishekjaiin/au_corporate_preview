import type { Metadata } from "next"

export const metadata: Metadata = {
  title: { absolute: "Company Registration in Mumbai for Foreign Companies" },
  description: "How a foreign company registers a company in Mumbai: the Registrar, Maharashtra shops and establishments and professional tax rules, offices, talent and timeline.",
  alternates: { canonical: "https://www.theaucorp.com/company-registration-in-mumbai" },
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Company%20Registration%20in%20Mumbai%20for%20Foreign%20Companies", width: 1200, height: 630, alt: "Company Registration in Mumbai for Foreign Companies" }],
    siteName: "AU Corporate",
    title: "Company Registration in Mumbai for Foreign Companies",
    description: "How a foreign company registers a company in Mumbai: the Registrar, Maharashtra shops and establishments and professional tax rules, offices, talent and timeline.",
    url: "https://www.theaucorp.com/company-registration-in-mumbai",
    locale: "en_IN",
  },
  twitter: { card: "summary_large_image", title: "Company Registration in Mumbai for Foreign Companies", description: "How a foreign company registers a company in Mumbai: the Registrar, Maharashtra shops and establishments and professional tax rules, offices, talent and timeline." },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
