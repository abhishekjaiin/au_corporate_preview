import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "UK Employees in India: Tax and Social Security",
  },
  description:
    "How the India-UK tax treaty, Indian tax residence, provident fund and the 2026 Double Contributions Convention apply to UK employees working in India.",
  alternates: guideAlternates("uk", "foreign-employee-treaty-ssa"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=UK%20Employees%20in%20India%3A%20Tax%20and%20Social%20Security", width: 1200, height: 630, alt: "UK Employees in India: Tax and Social Security" }],
    siteName: "AU Corporate",
    title: "UK Employees in India: Tax and Social Security",
    description:
      "How the India-UK tax treaty, Indian tax residence, provident fund and the 2026 Double Contributions Convention apply to UK employees working in India.",
    url: "https://www.theaucorp.com/uk-to-india/uk-employees-in-india-dcc",
    locale: "en_GB",
  },
  twitter: { card: "summary_large_image",
    title: "UK Employees in India: Tax and Social Security",
    description:
      "How the India-UK tax treaty, Indian tax residence, provident fund and the 2026 Double Contributions Convention apply to UK employees working in India.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
