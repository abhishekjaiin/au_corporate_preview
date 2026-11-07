import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Incorporating an Indian Subsidiary from Hong Kong",
  },
  description:
    "Step-by-step route for a Hong Kong parent to set up an Indian private limited company: Press Note 3 approval, name, SPICe+, DIN and DSC, resident director.",
  alternates: guideAlternates("hongkong", "incorporation-process"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Incorporating%20an%20Indian%20Subsidiary%20from%20Hong%20Kong", width: 1200, height: 630, alt: "Incorporating an Indian Subsidiary from Hong Kong" }],
    siteName: "AU Corporate",
    title: "Incorporating an Indian Subsidiary from Hong Kong",
    description:
      "Step-by-step route for a Hong Kong parent to set up an Indian private limited company: Press Note 3 approval, name, SPICe+, DIN and DSC, resident director.",
    url: "https://www.theaucorp.com/hong-kong-to-india/incorporation-steps",
    locale: "en_HK",
  },
  twitter: {
    title: "Incorporating an Indian Subsidiary from Hong Kong",
    description:
      "Step-by-step route for a Hong Kong parent to set up an Indian private limited company: Press Note 3 approval, name, SPICe+, DIN and DSC, resident director.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
