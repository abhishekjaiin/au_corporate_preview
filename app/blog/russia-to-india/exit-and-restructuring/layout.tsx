import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Exit and Restructuring in India for a Russian Parent",
  },
  description:
    "How a Russian parent exits or restructures an Indian business: sale of shares, buyer sanctions checks, FEMA pricing, FC-TRS, capital gains tax, buy-back.",
  alternates: guideAlternates("russia", "restructuring-and-exit"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Exit%20and%20Restructuring%20in%20India%20for%20a%20Russian%20Parent", width: 1200, height: 630, alt: "AU Corporate" }],
    siteName: "AU Corporate",
    title: "Exit and Restructuring in India for a Russian Parent",
    description:
      "How a Russian parent exits or restructures an Indian business: sale of shares, buyer sanctions checks, FEMA pricing, FC-TRS, capital gains tax, buy-back.",
    url: "https://www.theaucorp.com/russia-to-india/exit-and-restructuring",
    locale: "en_RU",
  },
  twitter: {
    title: "Exit and Restructuring in India for a Russian Parent",
    description:
      "How a Russian parent exits or restructures an Indian business: sale of shares, buyer sanctions checks, FEMA pricing, FC-TRS, capital gains tax, buy-back.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
