import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Australian Parent Reporting for an Indian Subsidiary",
  },
  description:
    "Australian tax reporting that follows when you own an Indian subsidiary: CFC rules, the International Dealings Schedule, foreign income tax offsets.",
  alternates: guideAlternates("australia", "parent-obligations"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Australian%20Parent%20Reporting%20for%20an%20Indian%20Subsidiary", width: 1200, height: 630, alt: "Australian Parent Reporting for an Indian Subsidiary" }],
    siteName: "AU Corporate",
    title: "Australian Parent Reporting for an Indian Subsidiary",
    description:
      "Australian tax reporting that follows when you own an Indian subsidiary: CFC rules, the International Dealings Schedule, foreign income tax offsets.",
    url: "https://www.theaucorp.com/australia-to-india/australian-parent-obligations",
    locale: "en_AU",
  },
  twitter: {
    title: "Australian Parent Reporting for an Indian Subsidiary",
    description:
      "Australian tax reporting that follows when you own an Indian subsidiary: CFC rules, the International Dealings Schedule, foreign income tax offsets.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
