import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Cost of Setting Up a Subsidiary in India from Spain",
  },
  description:
    "A budgeting guide for Spanish groups: what the one-time set-up costs, the first-year running costs and the money you must fund as share capital.",
  alternates: guideAlternates("spain", "setup-cost"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Cost%20of%20Setting%20Up%20a%20Subsidiary%20in%20India%20from%20Spain", width: 1200, height: 630, alt: "AU Corporate" }],
    siteName: "AU Corporate",
    title: "Cost of Setting Up a Subsidiary in India from Spain",
    description:
      "A budgeting guide for Spanish groups: what the one-time set-up costs, the first-year running costs and the money you must fund as share capital.",
    url: "https://www.theaucorp.com/spain-to-india/cost-of-setting-up-a-subsidiary-in-india-from-spain",
    locale: "en_ES",
  },
  twitter: {
    title: "Cost of Setting Up a Subsidiary in India from Spain",
    description:
      "A budgeting guide for Spanish groups: what the one-time set-up costs, the first-year running costs and the money you must fund as share capital.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
