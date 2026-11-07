import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "India-Japan DTAA Withholding Tax Rates: Payments to Japan",
  },
  description:
    "Treaty rates for payments from India to Japan: 10% on dividends, interest, royalties and fees for technical services, against 20% domestic rates.",
  alternates: guideAlternates("japan", "dtaa-withholding-rates"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=India-Japan%20DTAA%20Withholding%20Tax%20Rates%3A%20Payments%20to%20Japan", width: 1200, height: 630, alt: "India-Japan DTAA Withholding Tax Rates: Payments to Japan" }],
    locale: "en_JP",
    siteName: "AU Corporate",
    title: "India-Japan DTAA Withholding Tax Rates: Payments to Japan",
    description:
      "Treaty rates for payments from India to Japan: 10% on dividends, interest, royalties and fees for technical services, against 20% domestic rates.",
    url: "https://www.theaucorp.com/japan-to-india/tax-and-social-security-treaties/dtaa-withholding-rates",
  },
  twitter: {
    title: "India-Japan DTAA Withholding Tax Rates: Payments to Japan",
    description:
      "Treaty rates for payments from India to Japan: 10% on dividends, interest, royalties and fees for technical services, against 20% domestic rates.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
