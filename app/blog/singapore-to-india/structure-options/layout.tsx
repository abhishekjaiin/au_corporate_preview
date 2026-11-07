import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Choosing an Indian Structure from Singapore",
  },
  description:
    "A decision guide for Singapore companies: wholly owned subsidiary, branch, liaison office, LLP, GIFT City IFSC unit and EOR, with eligibility tests, tax.",
  alternates: guideAlternates("singapore", "subsidiary-vs-branch-vs-liaison-office-vs-llp"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Choosing%20an%20Indian%20Structure%20from%20Singapore", width: 1200, height: 630, alt: "Choosing an Indian Structure from Singapore" }],
    siteName: "AU Corporate",
    title: "Choosing an Indian Structure from Singapore",
    description:
      "A decision guide for Singapore companies: wholly owned subsidiary, branch, liaison office, LLP, GIFT City IFSC unit and EOR, with eligibility tests, tax.",
    url: "https://www.theaucorp.com/singapore-to-india/structure-options",
    locale: "en_SG",
  },
  twitter: {
    title: "Choosing an Indian Structure from Singapore",
    description:
      "A decision guide for Singapore companies: wholly owned subsidiary, branch, liaison office, LLP, GIFT City IFSC unit and EOR, with eligibility tests, tax.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
