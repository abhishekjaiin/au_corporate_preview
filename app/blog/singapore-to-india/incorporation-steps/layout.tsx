import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Incorporating an Indian Subsidiary from Singapore",
  },
  description:
    "A split plan for a Singapore parent forming an Indian private limited company: what the Singapore team does, what the Indian team does, SPICe+, bank.",
  alternates: guideAlternates("singapore", "incorporation-process"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Incorporating%20an%20Indian%20Subsidiary%20from%20Singapore", width: 1200, height: 630, alt: "Incorporating an Indian Subsidiary from Singapore" }],
    siteName: "AU Corporate",
    title: "Incorporating an Indian Subsidiary from Singapore",
    description:
      "A split plan for a Singapore parent forming an Indian private limited company: what the Singapore team does, what the Indian team does, SPICe+, bank.",
    url: "https://www.theaucorp.com/singapore-to-india/incorporation-steps",
    locale: "en_SG",
  },
  twitter: {
    title: "Incorporating an Indian Subsidiary from Singapore",
    description:
      "A split plan for a Singapore parent forming an Indian private limited company: what the Singapore team does, what the Indian team does, SPICe+, bank.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
