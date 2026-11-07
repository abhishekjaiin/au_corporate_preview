import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "US Tax on an Indian Subsidiary: NCTI and Subpart F",
  },
  description:
    "The US side of an Indian subsidiary for a US C corporation or pass-through owner: how profits are taxed when earned or when distributed, what changed after.",
  alternates: guideAlternates("usa", "home-country-tax"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=US%20Tax%20on%20an%20Indian%20Subsidiary%3A%20NCTI%20and%20Subpart%20F", width: 1200, height: 630, alt: "AU Corporate" }],
    siteName: "AU Corporate",
    title: "US Tax on an Indian Subsidiary: NCTI and Subpart F",
    description:
      "The US side of an Indian subsidiary for a US C corporation or pass-through owner: how profits are taxed when earned or when distributed, what changed after.",
    url: "https://www.theaucorp.com/usa-to-india/us-tax-on-indian-subsidiary-ncti-subpart-f-and-foreign-tax-credit",
    locale: "en_US",
  },
  twitter: {
    title: "US Tax on an Indian Subsidiary: NCTI and Subpart F",
    description:
      "The US side of an Indian subsidiary for a US C corporation or pass-through owner: how profits are taxed when earned or when distributed, what changed after.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
