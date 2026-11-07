import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Exit and Restructuring of a German-Owned Subsidiary",
  },
  description:
    "How a German parent exits an Indian subsidiary: share sale and FEMA pricing, capital gains and the treaty, buyback, voluntary liquidation, strike off.",
  alternates: guideAlternates("germany", "restructuring-and-exit"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Exit%20and%20Restructuring%20of%20a%20German-Owned%20Subsidiary", width: 1200, height: 630, alt: "Exit and Restructuring of a German-Owned Subsidiary" }],
    siteName: "AU Corporate",
    title: "Exit and Restructuring of a German-Owned Subsidiary",
    description:
      "How a German parent exits an Indian subsidiary: share sale and FEMA pricing, capital gains and the treaty, buyback, voluntary liquidation, strike off.",
    url: "https://www.theaucorp.com/germany-to-india/exit-and-restructuring",
    locale: "en_DE",
  },
  twitter: {
    title: "Exit and Restructuring of a German-Owned Subsidiary",
    description:
      "How a German parent exits an Indian subsidiary: share sale and FEMA pricing, capital gains and the treaty, buyback, voluntary liquidation, strike off.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
