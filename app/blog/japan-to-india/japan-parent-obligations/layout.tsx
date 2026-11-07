import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Japanese Parent Reporting for an Indian Subsidiary",
  },
  description:
    "Japanese reporting that follows when you own an Indian subsidiary: CFC rules, dividend exemption, transfer pricing documentation, J-SOX and overseas reporting.",
  alternates: guideAlternates("japan", "parent-obligations"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Japanese%20Parent%20Reporting%20for%20an%20Indian%20Subsidiary", width: 1200, height: 630, alt: "Japanese Parent Reporting for an Indian Subsidiary" }],
    locale: "en_JP",
    siteName: "AU Corporate",
    title: "Japanese Parent Reporting for an Indian Subsidiary",
    description:
      "Japanese reporting that follows when you own an Indian subsidiary: CFC rules, dividend exemption, transfer pricing documentation, J-SOX and overseas reporting.",
    url: "https://www.theaucorp.com/japan-to-india/japan-parent-obligations",
  },
  twitter: {
    title: "Japanese Parent Reporting for an Indian Subsidiary",
    description:
      "Japanese reporting that follows when you own an Indian subsidiary: CFC rules, dividend exemption, transfer pricing documentation, J-SOX and overseas reporting.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
