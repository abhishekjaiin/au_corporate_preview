import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "German Parent Obligations for an Indian Subsidiary",
  },
  description:
    "German-side duties for a parent with an Indian subsidiary: corporation and trade tax, the 95% participation exemption, notification of foreign holdings.",
  alternates: guideAlternates("germany", "parent-obligations"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=German%20Parent%20Obligations%20for%20an%20Indian%20Subsidiary", width: 1200, height: 630, alt: "German Parent Obligations for an Indian Subsidiary" }],
    siteName: "AU Corporate",
    title: "German Parent Obligations for an Indian Subsidiary",
    description:
      "German-side duties for a parent with an Indian subsidiary: corporation and trade tax, the 95% participation exemption, notification of foreign holdings.",
    url: "https://www.theaucorp.com/germany-to-india/german-parent-obligations",
    locale: "en_DE",
  },
  twitter: {
    title: "German Parent Obligations for an Indian Subsidiary",
    description:
      "German-side duties for a parent with an Indian subsidiary: corporation and trade tax, the 95% participation exemption, notification of foreign holdings.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
