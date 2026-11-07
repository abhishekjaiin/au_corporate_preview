import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "UK Employees in India: Tax and Social Security",
  },
  description:
    "How the India-UK tax treaty (Articles 15 and 16), Indian tax residence, provident fund and the 2026 India-UK Double Contributions Convention apply to UK.",
  alternates: guideAlternates("uk", "foreign-employee-treaty-ssa"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=UK%20Employees%20in%20India%3A%20Tax%20and%20Social%20Security", width: 1200, height: 630, alt: "UK Employees in India: Tax and Social Security" }],
    siteName: "AU Corporate",
    title: "UK Employees in India: Tax and Social Security",
    description:
      "How the India-UK tax treaty (Articles 15 and 16), Indian tax residence, provident fund and the 2026 India-UK Double Contributions Convention apply to UK.",
    url: "https://www.theaucorp.com/uk-to-india/uk-employees-in-india-dcc",
    locale: "en_GB",
  },
  twitter: {
    title: "UK Employees in India: Tax and Social Security",
    description:
      "How the India-UK tax treaty (Articles 15 and 16), Indian tax residence, provident fund and the 2026 India-UK Double Contributions Convention apply to UK.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
