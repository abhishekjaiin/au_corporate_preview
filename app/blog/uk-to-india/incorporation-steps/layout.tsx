import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Incorporating an Indian Subsidiary from the UK",
  },
  description:
    "A week-by-week plan for a UK company to incorporate a wholly owned Indian subsidiary: documents, DSC and DIN, SPICe+, bank account, FC-GPR, first board.",
  alternates: guideAlternates("uk", "incorporation-process"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Incorporating%20an%20Indian%20Subsidiary%20from%20the%20UK", width: 1200, height: 630, alt: "Incorporating an Indian Subsidiary from the UK" }],
    siteName: "AU Corporate",
    title: "Incorporating an Indian Subsidiary from the UK",
    description:
      "A week-by-week plan for a UK company to incorporate a wholly owned Indian subsidiary: documents, DSC and DIN, SPICe+, bank account, FC-GPR, first board.",
    url: "https://www.theaucorp.com/uk-to-india/incorporation-steps",
    locale: "en_GB",
  },
  twitter: {
    title: "Incorporating an Indian Subsidiary from the UK",
    description:
      "A week-by-week plan for a UK company to incorporate a wholly owned Indian subsidiary: documents, DSC and DIN, SPICe+, bank account, FC-GPR, first board.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
