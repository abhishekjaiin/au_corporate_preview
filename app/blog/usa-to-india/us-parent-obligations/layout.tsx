import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "US Reporting for an Indian Subsidiary: Form 5471, FBAR",
  },
  description:
    "US reporting that follows when you own an Indian subsidiary: Form 5471, FBAR, Form 8938 and international tax regimes. A guide for US finance teams.",
  alternates: guideAlternates("usa", "parent-obligations"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=US%20Reporting%20for%20an%20Indian%20Subsidiary%3A%20Form%205471%2C%20FBAR", width: 1200, height: 630, alt: "US Reporting for an Indian Subsidiary: Form 5471, FBAR" }],
    locale: "en_US",
    siteName: "AU Corporate",
    title: "US Reporting for an Indian Subsidiary: Form 5471, FBAR",
    description:
      "US reporting that follows when you own an Indian subsidiary: Form 5471, FBAR, Form 8938 and international tax regimes. A guide for US finance teams.",
    url: "https://www.theaucorp.com/usa-to-india/us-parent-obligations",
  },
  twitter: {
    title: "US Reporting for an Indian Subsidiary: Form 5471, FBAR",
    description:
      "US reporting that follows when you own an Indian subsidiary: Form 5471, FBAR, Form 8938 and international tax regimes. A guide for US finance teams.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
