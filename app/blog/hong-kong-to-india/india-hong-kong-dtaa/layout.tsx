import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "India-Hong Kong DTAA for Hong Kong Companies",
  },
  description:
    "The India-Hong Kong tax treaty explained for a Hong Kong parent: 5% dividend rate, 10% interest, royalties and fees for technical services, permanent.",
  alternates: guideAlternates("hongkong", "india-dtaa"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=India-Hong%20Kong%20DTAA%20for%20Hong%20Kong%20Companies", width: 1200, height: 630, alt: "India-Hong Kong DTAA for Hong Kong Companies" }],
    siteName: "AU Corporate",
    title: "India-Hong Kong DTAA for Hong Kong Companies",
    description:
      "The India-Hong Kong tax treaty explained for a Hong Kong parent: 5% dividend rate, 10% interest, royalties and fees for technical services, permanent.",
    url: "https://www.theaucorp.com/hong-kong-to-india/india-hong-kong-dtaa",
    locale: "en_HK",
  },
  twitter: {
    title: "India-Hong Kong DTAA for Hong Kong Companies",
    description:
      "The India-Hong Kong tax treaty explained for a Hong Kong parent: 5% dividend rate, 10% interest, royalties and fees for technical services, permanent.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
