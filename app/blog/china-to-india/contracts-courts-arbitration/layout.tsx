import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Contracts and Arbitration for a Chinese Parent",
  },
  description:
    "How a Chinese parent protects its Indian subsidiary contracts: choice of law and seat, CIETAC, HKIAC and SIAC arbitration, enforcement of awards under.",
  alternates: guideAlternates("china", "contracts-and-arbitration"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Contracts%20and%20Arbitration%20for%20a%20Chinese%20Parent", width: 1200, height: 630, alt: "Contracts and Arbitration for a Chinese Parent" }],
    siteName: "AU Corporate",
    title: "Contracts and Arbitration for a Chinese Parent",
    description:
      "How a Chinese parent protects its Indian subsidiary contracts: choice of law and seat, CIETAC, HKIAC and SIAC arbitration, enforcement of awards under.",
    url: "https://www.theaucorp.com/china-to-india/contracts-courts-arbitration",
    locale: "en_CN",
  },
  twitter: {
    title: "Contracts and Arbitration for a Chinese Parent",
    description:
      "How a Chinese parent protects its Indian subsidiary contracts: choice of law and seat, CIETAC, HKIAC and SIAC arbitration, enforcement of awards under.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
