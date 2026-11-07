import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "India Entry and Compliance Guides",
  },
  description:
    "Insights and guides from AU Corporate on India market entry, taxation, compliance, and business advisory topics.",
  alternates: {
    canonical: "https://www.theaucorp.com/blog",
  },
  openGraph: {
    type: "website",
    images: [{ url: "https://www.theaucorp.com/og?title=India%20Entry%20and%20Compliance%20Guides", width: 1200, height: 630, alt: "India Entry and Compliance Guides" }],
    locale: "en_IN",
    siteName: "AU Corporate",
    title: "India Entry and Compliance Guides",
    description:
      "Insights and guides from AU Corporate on India market entry, taxation, compliance, and business advisory topics.",
    url: "https://www.theaucorp.com/blog",
  },
  twitter: {
    title: "India Entry and Compliance Guides",
    description:
      "Insights and guides from AU Corporate on India market entry, taxation, compliance, and business advisory topics.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
