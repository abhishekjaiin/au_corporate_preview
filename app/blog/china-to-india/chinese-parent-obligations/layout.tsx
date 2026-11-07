import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Chinese Parent Obligations: ODI and Tax Reporting",
  },
  description:
    "The Chinese-side steps for a parent investing in India: NDRC and MOFCOM outbound investment approval or filing, SAFE foreign exchange registration through.",
  alternates: guideAlternates("china", "parent-obligations"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Chinese%20Parent%20Obligations%3A%20ODI%20and%20Tax%20Reporting", width: 1200, height: 630, alt: "Chinese Parent Obligations: ODI and Tax Reporting" }],
    siteName: "AU Corporate",
    title: "Chinese Parent Obligations: ODI and Tax Reporting",
    description:
      "The Chinese-side steps for a parent investing in India: NDRC and MOFCOM outbound investment approval or filing, SAFE foreign exchange registration through.",
    url: "https://www.theaucorp.com/china-to-india/chinese-parent-obligations",
    locale: "en_CN",
  },
  twitter: {
    title: "Chinese Parent Obligations: ODI and Tax Reporting",
    description:
      "The Chinese-side steps for a parent investing in India: NDRC and MOFCOM outbound investment approval or filing, SAFE foreign exchange registration through.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
