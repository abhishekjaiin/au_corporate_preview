import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Treaty and Social Security FAQs for India-Japan Expats",
  },
  description:
    "50 plain answers on the India-Japan tax treaty, 10% withholding rates, certificate of residence, Form 41, expat tax and the Japan-India social security.",
  alternates: guideAlternates("japan", "treaties-faq"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Treaty%20and%20Social%20Security%20FAQs%20for%20India-Japan%20Expats", width: 1200, height: 630, alt: "Treaty and Social Security FAQs for India-Japan Expats" }],
    locale: "en_JP",
    siteName: "AU Corporate",
    title: "Treaty and Social Security FAQs for India-Japan Expats",
    description:
      "50 plain answers on the India-Japan tax treaty, 10% withholding rates, certificate of residence, Form 41, expat tax and the Japan-India social security.",
    url: "https://www.theaucorp.com/japan-to-india/tax-and-social-security-treaties/faq",
  },
  twitter: {
    title: "Treaty and Social Security FAQs for India-Japan Expats",
    description:
      "50 plain answers on the India-Japan tax treaty, 10% withholding rates, certificate of residence, Form 41, expat tax and the Japan-India social security.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
