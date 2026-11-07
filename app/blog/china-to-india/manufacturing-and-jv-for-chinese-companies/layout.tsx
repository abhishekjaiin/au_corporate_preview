import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Manufacturing and Joint Ventures for Chinese Companies",
  },
  description:
    "How Chinese manufacturers approach India: joint ventures with Indian partners, the 60-day fast-track sectors under the amended Press Note 3, incentive.",
  alternates: guideAlternates("china", "manufacturing-jv"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Manufacturing%20and%20Joint%20Ventures%20for%20Chinese%20Companies", width: 1200, height: 630, alt: "Manufacturing and Joint Ventures for Chinese Companies" }],
    siteName: "AU Corporate",
    title: "Manufacturing and Joint Ventures for Chinese Companies",
    description:
      "How Chinese manufacturers approach India: joint ventures with Indian partners, the 60-day fast-track sectors under the amended Press Note 3, incentive.",
    url: "https://www.theaucorp.com/china-to-india/manufacturing-and-jv-for-chinese-companies",
    locale: "en_CN",
  },
  twitter: {
    title: "Manufacturing and Joint Ventures for Chinese Companies",
    description:
      "How Chinese manufacturers approach India: joint ventures with Indian partners, the 60-day fast-track sectors under the amended Press Note 3, incentive.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
