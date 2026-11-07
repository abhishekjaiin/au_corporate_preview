import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Exit and Restructuring of a China-Owned Subsidiary",
  },
  description:
    "How a Chinese parent exits an Indian subsidiary: share sale and FEMA pricing, capital gains and the treaty, approval for a land-border buyer, buyback.",
  alternates: guideAlternates("china", "restructuring-and-exit"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Exit%20and%20Restructuring%20of%20a%20China-Owned%20Subsidiary", width: 1200, height: 630, alt: "Exit and Restructuring of a China-Owned Subsidiary" }],
    siteName: "AU Corporate",
    title: "Exit and Restructuring of a China-Owned Subsidiary",
    description:
      "How a Chinese parent exits an Indian subsidiary: share sale and FEMA pricing, capital gains and the treaty, approval for a land-border buyer, buyback.",
    url: "https://www.theaucorp.com/china-to-india/exit-and-restructuring",
    locale: "en_CN",
  },
  twitter: {
    title: "Exit and Restructuring of a China-Owned Subsidiary",
    description:
      "How a Chinese parent exits an Indian subsidiary: share sale and FEMA pricing, capital gains and the treaty, approval for a land-border buyer, buyback.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
