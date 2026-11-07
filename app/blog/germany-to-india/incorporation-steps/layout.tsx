import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Incorporating an Indian Subsidiary from Germany",
  },
  description:
    "A split plan for a German parent forming an Indian private limited company: what the German team does, what the Indian team does, SPICe+, bank account.",
  alternates: guideAlternates("germany", "incorporation-process"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Incorporating%20an%20Indian%20Subsidiary%20from%20Germany", width: 1200, height: 630, alt: "Incorporating an Indian Subsidiary from Germany" }],
    siteName: "AU Corporate",
    title: "Incorporating an Indian Subsidiary from Germany",
    description:
      "A split plan for a German parent forming an Indian private limited company: what the German team does, what the Indian team does, SPICe+, bank account.",
    url: "https://www.theaucorp.com/germany-to-india/incorporation-steps",
    locale: "en_DE",
  },
  twitter: {
    title: "Incorporating an Indian Subsidiary from Germany",
    description:
      "A split plan for a German parent forming an Indian private limited company: what the German team does, what the Indian team does, SPICe+, bank account.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
