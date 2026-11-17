import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "German Subsidiary in India: Choosing the Right Structure",
  },
  description:
    "A decision guide for German companies: wholly owned subsidiary, joint venture with an Indian partner, project office, branch, liaison office, LLP and EOR.",
  alternates: guideAlternates("germany", "subsidiary-vs-branch-vs-liaison-office-vs-llp"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Choosing%20an%20Indian%20Structure%20from%20Germany", width: 1200, height: 630, alt: "German Subsidiary in India: Choosing the Right Structure" }],
    siteName: "AU Corporate",
    title: "German Subsidiary in India: Choosing the Right Structure",
    description:
      "A decision guide for German companies: wholly owned subsidiary, joint venture with an Indian partner, project office, branch, liaison office, LLP and EOR.",
    url: "https://www.theaucorp.com/germany-to-india/structure-options",
    locale: "en_DE",
  },
  twitter: { card: "summary_large_image",
    title: "German Subsidiary in India: Choosing the Right Structure",
    description:
      "A decision guide for German companies: wholly owned subsidiary, joint venture with an Indian partner, project office, branch, liaison office, LLP and EOR.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
