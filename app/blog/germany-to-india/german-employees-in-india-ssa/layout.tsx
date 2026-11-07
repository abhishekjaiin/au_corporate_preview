import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "German Employees in India: Tax and Social Security",
  },
  description:
    "How income tax and social security apply to German staff in India: the 183-day treaty test, the 2009 social security agreement, the 48-month detachment.",
  alternates: guideAlternates("germany", "foreign-employee-treaty-ssa"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=German%20Employees%20in%20India%3A%20Tax%20and%20Social%20Security", width: 1200, height: 630, alt: "German Employees in India: Tax and Social Security" }],
    siteName: "AU Corporate",
    title: "German Employees in India: Tax and Social Security",
    description:
      "How income tax and social security apply to German staff in India: the 183-day treaty test, the 2009 social security agreement, the 48-month detachment.",
    url: "https://www.theaucorp.com/germany-to-india/german-employees-in-india-ssa",
    locale: "en_DE",
  },
  twitter: {
    title: "German Employees in India: Tax and Social Security",
    description:
      "How income tax and social security apply to German staff in India: the 183-day treaty test, the 2009 social security agreement, the 48-month detachment.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
