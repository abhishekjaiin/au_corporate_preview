import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Transfer Pricing for Russian Groups in India",
  },
  description:
    "Transfer pricing for a Russian group with an Indian subsidiary: arm's length rules, accountant's report, master file and local file, supply of equipment.",
  alternates: guideAlternates("russia", "transfer-pricing"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Transfer%20Pricing%20for%20Russian%20Groups%20in%20India", width: 1200, height: 630, alt: "AU Corporate" }],
    siteName: "AU Corporate",
    title: "Transfer Pricing for Russian Groups in India",
    description:
      "Transfer pricing for a Russian group with an Indian subsidiary: arm's length rules, accountant's report, master file and local file, supply of equipment.",
    url: "https://www.theaucorp.com/russia-to-india/transfer-pricing",
    locale: "en_RU",
  },
  twitter: {
    title: "Transfer Pricing for Russian Groups in India",
    description:
      "Transfer pricing for a Russian group with an Indian subsidiary: arm's length rules, accountant's report, master file and local file, supply of equipment.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
