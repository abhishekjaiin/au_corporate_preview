import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Russian Employees in India: Tax and Provident Fund",
  },
  description:
    "What a Russian employer must plan for staff in India: Indian salary tax and the treaty test, EPF for international workers, no social security agreement.",
  alternates: guideAlternates("russia", "foreign-employee-treaty-ssa"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Russian%20Employees%20in%20India%3A%20Tax%20and%20Provident%20Fund", width: 1200, height: 630, alt: "AU Corporate" }],
    siteName: "AU Corporate",
    title: "Russian Employees in India: Tax and Provident Fund",
    description:
      "What a Russian employer must plan for staff in India: Indian salary tax and the treaty test, EPF for international workers, no social security agreement.",
    url: "https://www.theaucorp.com/russia-to-india/russian-employees-in-india",
    locale: "en_RU",
  },
  twitter: {
    title: "Russian Employees in India: Tax and Provident Fund",
    description:
      "What a Russian employer must plan for staff in India: Indian salary tax and the treaty test, EPF for international workers, no social security agreement.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
