import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Repatriating Profits from India to the US: Forms and Tax",
  },
  description:
    "How a US parent receives money from its Indian subsidiary: dividends, service fees, royalties, loans. Forms 145 and 146, Withholding Tax and DTAA relief.",
  alternates: guideAlternates("usa", "repatriating-profits"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Repatriating%20Profits%20from%20India%20to%20the%20US%3A%20Forms%20and%20Tax", width: 1200, height: 630, alt: "Repatriating Profits from India to the US: Forms and Tax" }],
    locale: "en_US",
    siteName: "AU Corporate",
    title: "Repatriating Profits from India to the US: Forms and Tax",
    description:
      "How a US parent receives money from its Indian subsidiary: dividends, service fees, royalties, loans. Forms 145 and 146, Withholding Tax and DTAA relief.",
    url: "https://www.theaucorp.com/usa-to-india/repatriating-profits",
  },
  twitter: {
    title: "Repatriating Profits from India to the US: Forms and Tax",
    description:
      "How a US parent receives money from its Indian subsidiary: dividends, service fees, royalties, loans. Forms 145 and 146, Withholding Tax and DTAA relief.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
