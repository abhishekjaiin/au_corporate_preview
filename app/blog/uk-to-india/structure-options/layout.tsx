import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Subsidiary, Branch, Liaison or LLP: UK",
  },
  description:
    "How a UK company should choose between an Indian subsidiary, branch, liaison office, LLP or Employer of Record, and whether to hold it directly or through.",
  alternates: guideAlternates("uk", "subsidiary-vs-branch-vs-liaison-office-vs-llp"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Subsidiary%2C%20Branch%2C%20Liaison%20or%20LLP%3A%20UK", width: 1200, height: 630, alt: "Subsidiary, Branch, Liaison or LLP: UK" }],
    siteName: "AU Corporate",
    title: "Subsidiary, Branch, Liaison or LLP: UK",
    description:
      "How a UK company should choose between an Indian subsidiary, branch, liaison office, LLP or Employer of Record, and whether to hold it directly or through.",
    url: "https://www.theaucorp.com/uk-to-india/structure-options",
    locale: "en_GB",
  },
  twitter: {
    title: "Subsidiary, Branch, Liaison or LLP: UK",
    description:
      "How a UK company should choose between an Indian subsidiary, branch, liaison office, LLP or Employer of Record, and whether to hold it directly or through.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
