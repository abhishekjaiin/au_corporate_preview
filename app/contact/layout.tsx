import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Contact AU Corporate | India Entry & Advisory Team",
  },
  description:
    "Contact AU Corporate for company registration, tax, compliance and Virtual CFO support. Serving clients across India.",
  alternates: {
    canonical: "https://www.theaucorp.com/contact",
  },
  openGraph: {
    type: "website",
    images: [{ url: "https://www.theaucorp.com/og?title=Contact%20AU%20Corporate%20%7C%20India%20Entry%20%26%20Advisory%20Team", width: 1200, height: 630, alt: "Contact AU Corporate | India Entry & Advisory Team" }],
    locale: "en_IN",
    siteName: "AU Corporate",
    title: "Contact AU Corporate | India Entry & Advisory Team",
    description:
      "Contact AU Corporate for company registration, tax, compliance and Virtual CFO support. Serving clients across India.",
    url: "https://www.theaucorp.com/contact",
  },
  twitter: {
    title: "Contact AU Corporate | India Entry & Advisory Team",
    description:
      "Contact AU Corporate for company registration, tax, compliance and Virtual CFO support. Serving clients across India.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
