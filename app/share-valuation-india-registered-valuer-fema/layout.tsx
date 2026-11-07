import type { Metadata } from "next"

export const metadata: Metadata = {
  title: { absolute: "Share Valuation in India: Registered Valuer, FEMA and Tax Rules" },
  description: "When an Indian company needs a share valuation, who may sign it and which rules apply: FEMA pricing, Companies Act registered valuer reports and income tax.",
  alternates: { canonical: "https://www.theaucorp.com/share-valuation-india-registered-valuer-fema" },
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Share%20Valuation%20in%20India%3A%20Registered%20Valuer%2C%20FEMA%20and%20Tax%20Rules", width: 1200, height: 630, alt: "Share Valuation in India: Registered Valuer, FEMA and Tax Rules" }],
    siteName: "AU Corporate",
    title: "Share Valuation in India: Registered Valuer, FEMA and Tax Rules",
    description: "When an Indian company needs a share valuation, who may sign it and which rules apply: FEMA pricing, Companies Act registered valuer reports and income tax.",
    url: "https://www.theaucorp.com/share-valuation-india-registered-valuer-fema",
    locale: "en_IN",
  },
  twitter: { title: "Share Valuation in India: Registered Valuer, FEMA and Tax Rules", description: "When an Indian company needs a share valuation, who may sign it and which rules apply: FEMA pricing, Companies Act registered valuer reports and income tax." },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
