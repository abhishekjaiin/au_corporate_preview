import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Chinese Employees in India: Tax and Provident Fund",
  },
  description:
    "What a Chinese employer must plan for staff in India: the 183-day treaty test, Section 392 salary tax, residence rules, EPF contributions for international.",
  alternates: guideAlternates("china", "foreign-employee-treaty-ssa"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Chinese%20Employees%20in%20India%3A%20Tax%20and%20Provident%20Fund", width: 1200, height: 630, alt: "Chinese Employees in India: Tax and Provident Fund" }],
    siteName: "AU Corporate",
    title: "Chinese Employees in India: Tax and Provident Fund",
    description:
      "What a Chinese employer must plan for staff in India: the 183-day treaty test, Section 392 salary tax, residence rules, EPF contributions for international.",
    url: "https://www.theaucorp.com/china-to-india/chinese-employees-in-india",
    locale: "en_CN",
  },
  twitter: {
    title: "Chinese Employees in India: Tax and Provident Fund",
    description:
      "What a Chinese employer must plan for staff in India: the 183-day treaty test, Section 392 salary tax, residence rules, EPF contributions for international.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
