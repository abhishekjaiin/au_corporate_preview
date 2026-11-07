import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Using Hong Kong as a Regional Hub for India",
  },
  description:
    "How groups use a Hong Kong company as a regional holding, trading or treasury hub for India, the substance Indian and Hong Kong tax authorities expect.",
  alternates: guideAlternates("hongkong", "holdco"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Using%20Hong%20Kong%20as%20a%20Regional%20Hub%20for%20India", width: 1200, height: 630, alt: "Using Hong Kong as a Regional Hub for India" }],
    siteName: "AU Corporate",
    title: "Using Hong Kong as a Regional Hub for India",
    description:
      "How groups use a Hong Kong company as a regional holding, trading or treasury hub for India, the substance Indian and Hong Kong tax authorities expect.",
    url: "https://www.theaucorp.com/hong-kong-to-india/hong-kong-as-regional-hub-for-india",
    locale: "en_HK",
  },
  twitter: {
    title: "Using Hong Kong as a Regional Hub for India",
    description:
      "How groups use a Hong Kong company as a regional holding, trading or treasury hub for India, the substance Indian and Hong Kong tax authorities expect.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
