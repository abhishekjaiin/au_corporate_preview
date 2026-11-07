import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Incorporating an Indian Subsidiary from Russia",
  },
  description:
    "Step-by-step route for a Russian parent to set up an Indian private limited company: ownership and sanctions checks, name, SPICe+, DIN and DSC, resident.",
  alternates: guideAlternates("russia", "incorporation-process"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Incorporating%20an%20Indian%20Subsidiary%20from%20Russia", width: 1200, height: 630, alt: "AU Corporate" }],
    siteName: "AU Corporate",
    title: "Incorporating an Indian Subsidiary from Russia",
    description:
      "Step-by-step route for a Russian parent to set up an Indian private limited company: ownership and sanctions checks, name, SPICe+, DIN and DSC, resident.",
    url: "https://www.theaucorp.com/russia-to-india/incorporation-steps",
    locale: "en_RU",
  },
  twitter: {
    title: "Incorporating an Indian Subsidiary from Russia",
    description:
      "Step-by-step route for a Russian parent to set up an Indian private limited company: ownership and sanctions checks, name, SPICe+, DIN and DSC, resident.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
