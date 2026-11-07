import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Treaty and Social Security for Foreign Employees in India",
  },
  description:
    "How the India-Australia DTAA (Article 15) and the India-Australia Social Security Agreement apply to Australian employees working in India: the 183-day.",
  alternates: guideAlternates("australia", "foreign-employee-treaty-ssa"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Treaty%20and%20Social%20Security%20for%20Foreign%20Employees%20in%20India", width: 1200, height: 630, alt: "Treaty and Social Security for Foreign Employees in India" }],
    siteName: "AU Corporate",
    title: "Treaty and Social Security for Foreign Employees in India",
    description:
      "How the India-Australia DTAA (Article 15) and the India-Australia Social Security Agreement apply to Australian employees working in India: the 183-day.",
    url: "https://www.theaucorp.com/australia-to-india/foreign-employee-treaty-ssa",
    locale: "en_AU",
  },
  twitter: {
    title: "Treaty and Social Security for Foreign Employees in India",
    description:
      "How the India-Australia DTAA (Article 15) and the India-Australia Social Security Agreement apply to Australian employees working in India: the 183-day.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
