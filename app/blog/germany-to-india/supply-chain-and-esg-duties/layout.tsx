import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "German Supply-Chain and ESG Rules for India Operations",
  },
  description:
    "How German and EU supply chain, sustainability and carbon border rules reach an Indian subsidiary or supplier: the German Supply Chain Act (LkSG), EU.",
  alternates: guideAlternates("germany", "esg-supply-chain"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=German%20Supply-Chain%20and%20ESG%20Rules%20for%20India%20Operations", width: 1200, height: 630, alt: "German Supply-Chain and ESG Rules for India Operations" }],
    siteName: "AU Corporate",
    title: "German Supply-Chain and ESG Rules for India Operations",
    description:
      "How German and EU supply chain, sustainability and carbon border rules reach an Indian subsidiary or supplier: the German Supply Chain Act (LkSG), EU.",
    url: "https://www.theaucorp.com/germany-to-india/supply-chain-and-esg-duties",
    locale: "en_DE",
  },
  twitter: {
    title: "German Supply-Chain and ESG Rules for India Operations",
    description:
      "How German and EU supply chain, sustainability and carbon border rules reach an Indian subsidiary or supplier: the German Supply Chain Act (LkSG), EU.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
