import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Hong Kong Employees in India: Tax and Provident Fund",
  },
  description:
    "What a Hong Kong employer must plan for staff in India: Indian salary tax and the treaty day-count test, Hong Kong salaries tax, MPF, EPF for international.",
  alternates: guideAlternates("hongkong", "foreign-employee-treaty-ssa"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Hong%20Kong%20Employees%20in%20India%3A%20Tax%20and%20Provident%20Fund", width: 1200, height: 630, alt: "Hong Kong Employees in India: Tax and Provident Fund" }],
    siteName: "AU Corporate",
    title: "Hong Kong Employees in India: Tax and Provident Fund",
    description:
      "What a Hong Kong employer must plan for staff in India: Indian salary tax and the treaty day-count test, Hong Kong salaries tax, MPF, EPF for international.",
    url: "https://www.theaucorp.com/hong-kong-to-india/hong-kong-employees-in-india",
    locale: "en_HK",
  },
  twitter: {
    title: "Hong Kong Employees in India: Tax and Provident Fund",
    description:
      "What a Hong Kong employer must plan for staff in India: Indian salary tax and the treaty day-count test, Hong Kong salaries tax, MPF, EPF for international.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
