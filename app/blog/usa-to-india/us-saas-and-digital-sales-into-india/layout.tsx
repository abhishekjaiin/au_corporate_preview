import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "US SaaS and Digital Sales into India: GST",
  },
  description:
    "How a US software or digital business is taxed when it sells to India without a local entity: GST on online information and database access services, B2B.",
  alternates: guideAlternates("usa", "digital-sales-gst"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=US%20SaaS%20and%20Digital%20Sales%20into%20India%3A%20GST", width: 1200, height: 630, alt: "AU Corporate" }],
    siteName: "AU Corporate",
    title: "US SaaS and Digital Sales into India: GST",
    description:
      "How a US software or digital business is taxed when it sells to India without a local entity: GST on online information and database access services, B2B.",
    url: "https://www.theaucorp.com/usa-to-india/us-saas-and-digital-sales-into-india",
    locale: "en_US",
  },
  twitter: {
    title: "US SaaS and Digital Sales into India: GST",
    description:
      "How a US software or digital business is taxed when it sells to India without a local entity: GST on online information and database access services, B2B.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
