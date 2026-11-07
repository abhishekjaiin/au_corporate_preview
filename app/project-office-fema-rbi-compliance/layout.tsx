import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "FEMA and RBI Compliance for Project Offices in India",
  },
  description:
    "Form FNC, the Annual Activity Certificate, surplus remittance and closure for a foreign company's India project office.",
  alternates: {
    canonical: "https://www.theaucorp.com/project-office-fema-rbi-compliance",
  },
  openGraph: {
    type: "website",
    images: [{ url: "https://www.theaucorp.com/og?title=FEMA%20and%20RBI%20Compliance%20for%20Project%20Offices%20in%20India", width: 1200, height: 630, alt: "FEMA and RBI Compliance for Project Offices in India" }],
    locale: "en_IN",
    siteName: "AU Corporate",
    title: "FEMA and RBI Compliance for Project Offices in India",
    description:
      "Form FNC, the Annual Activity Certificate, surplus remittance and closure for a foreign company's India project office.",
    url: "https://www.theaucorp.com/project-office-fema-rbi-compliance",
  },
  twitter: {
    title: "FEMA and RBI Compliance for Project Offices in India",
    description:
      "Form FNC, the Annual Activity Certificate, surplus remittance and closure for a foreign company's India project office.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
