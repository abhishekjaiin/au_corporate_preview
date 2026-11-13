import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "GCC Setup in India: Cost, Timeline and Steps (2026 Guide)",
  },
  description:
    "How to set up a GCC in India: subsidiary, JV or BOT, cost drivers, timeline, FEMA filings and safe harbour tax. CA-led team, free consultation.",
  keywords: ["GCC setup in India", "GCC setup cost India", "GCC setup timeline India", "joint venture GCC setup", "Global Capability Center India", "GCC vs subsidiary India", "GCC entity structure India", "how to set up a GCC in India", "GCC compliance India"],
  alternates: {
    canonical: "https://www.theaucorp.com/gcc-setup-india",
  },
  openGraph: {
    type: "website",
    images: [{ url: "https://www.theaucorp.com/og?title=GCC%20Setup%20in%20India%3A%20Cost%2C%20Timeline%20and%20Steps%20(2026%20Guide)", width: 1200, height: 630, alt: "GCC Setup in India: Cost, Timeline and Steps (2026 Guide)" }],
    locale: "en_IN",
    siteName: "AU Corporate",
    title: "GCC Setup in India: Cost, Timeline and Steps (2026 Guide)",
    description:
      "How to set up a GCC in India: subsidiary, JV or BOT, cost drivers, timeline, FEMA filings and safe harbour tax. CA-led team, free consultation.",
    url: "https://www.theaucorp.com/gcc-setup-india",
  },
  twitter: { card: "summary_large_image",
    title: "GCC Setup in India: Cost, Timeline and Steps (2026 Guide)",
    description:
      "How to set up a GCC in India: subsidiary, JV or BOT, cost drivers, timeline, FEMA filings and safe harbour tax. CA-led team, free consultation.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
