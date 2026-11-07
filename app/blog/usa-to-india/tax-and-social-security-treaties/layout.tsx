import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Tax and Social Security Treaties for US Companies in India",
  },
  description:
    "The India-US tax treaty (DTAA) and social security for US expats: treaty rates, residency, EPF, FICA and the missing totalization agreement.",
  alternates: guideAlternates("usa", "treaties-hub"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Tax%20and%20Social%20Security%20Treaties%20for%20US%20Companies%20in%20India", width: 1200, height: 630, alt: "Tax and Social Security Treaties for US Companies in India" }],
    locale: "en_US",
    siteName: "AU Corporate",
    title: "Tax and Social Security Treaties for US Companies in India",
    description:
      "The India-US tax treaty (DTAA) and social security for US expats: treaty rates, residency, EPF, FICA and the missing totalization agreement.",
    url: "https://www.theaucorp.com/usa-to-india/tax-and-social-security-treaties",
  },
  twitter: {
    title: "Tax and Social Security Treaties for US Companies in India",
    description:
      "The India-US tax treaty (DTAA) and social security for US expats: treaty rates, residency, EPF, FICA and the missing totalization agreement.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
