import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: { absolute: "GCC Setup in India for Australian Companies (2026 Guide)" },
  description: "How Australian companies set up a GCC in India: own centre, BOT or EOR pilot, time zones, APRA CPS 230, Privacy Act transfers and cost-plus tax.",
  alternates: guideAlternates("australia", "gcc"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=GCC%20Setup%20in%20India%20for%20Australian%20Companies%20%282026%20Guide%29", width: 1200, height: 630, alt: "AU Corporate" }],
    siteName: "AU Corporate",
    title: "GCC Setup in India for Australian Companies (2026 Guide)",
    description: "How Australian companies set up a GCC in India: own centre, BOT or EOR pilot, time zones, APRA CPS 230, Privacy Act transfers and cost-plus tax.",
    url: "https://www.theaucorp.com/australia-to-india/gcc-for-australian-companies",
    locale: "en_AU",
  },
  twitter: { card: "summary_large_image", title: "GCC Setup in India for Australian Companies (2026 Guide)", description: "How Australian companies set up a GCC in India: own centre, BOT or EOR pilot, time zones, APRA CPS 230, Privacy Act transfers and cost-plus tax." },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
