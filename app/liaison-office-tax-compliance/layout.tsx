import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Liaison Office Tax Compliance in India: TDS, Statement, PE",
  },
  description:
    "TDS, annual statement, permanent establishment risk, GST position and expat tax for the India liaison office of a foreign company.",
  alternates: {
    canonical: "https://www.theaucorp.com/liaison-office-tax-compliance",
  },
  openGraph: {
    type: "website",
    images: [{ url: "https://www.theaucorp.com/og?title=Liaison%20Office%20Tax%20Compliance%20in%20India%3A%20TDS%2C%20Statement%2C%20PE", width: 1200, height: 630, alt: "Liaison Office Tax Compliance in India: TDS, Statement, PE" }],
    locale: "en_IN",
    siteName: "AU Corporate",
    title: "Liaison Office Tax Compliance in India: TDS, Statement, PE",
    description:
      "TDS, annual statement, permanent establishment risk, GST position and expat tax for the India liaison office of a foreign company.",
    url: "https://www.theaucorp.com/liaison-office-tax-compliance",
  },
  twitter: {
    title: "Liaison Office Tax Compliance in India: TDS, Statement, PE",
    description:
      "TDS, annual statement, permanent establishment risk, GST position and expat tax for the India liaison office of a foreign company.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
