import type { Metadata } from "next"

export const metadata: Metadata = {
  title: { absolute: "ESOPs in India for Foreign-Owned Companies: Plans, Valuation, Tax" },
  description: "How foreign groups give equity to Indian employees: parent ESOP and RSU plans, an Indian company ESOP, ESOP valuation, perquisite tax, FEMA and recharges.",
  alternates: { canonical: "https://www.theaucorp.com/esop-india-foreign-owned-companies" },
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=ESOPs%20in%20India%20for%20Foreign-Owned%20Companies%3A%20Plans%2C%20Valuation%2C%20Tax", width: 1200, height: 630, alt: "ESOPs in India for Foreign-Owned Companies: Plans, Valuation, Tax" }],
    siteName: "AU Corporate",
    title: "ESOPs in India for Foreign-Owned Companies: Plans, Valuation, Tax",
    description: "How foreign groups give equity to Indian employees: parent ESOP and RSU plans, an Indian company ESOP, ESOP valuation, perquisite tax, FEMA and recharges.",
    url: "https://www.theaucorp.com/esop-india-foreign-owned-companies",
    locale: "en_IN",
  },
  twitter: { card: "summary_large_image", title: "ESOPs in India for Foreign-Owned Companies: Plans, Valuation, Tax", description: "How foreign groups give equity to Indian employees: parent ESOP and RSU plans, an Indian company ESOP, ESOP valuation, perquisite tax, FEMA and recharges." },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
