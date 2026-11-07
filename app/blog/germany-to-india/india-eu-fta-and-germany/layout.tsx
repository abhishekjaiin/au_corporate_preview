import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "India-EU FTA for German Companies Entering India",
  },
  description:
    "Status and content of the India-EU free trade agreement for German companies: services access, staff mobility, tariffs on components, the investment.",
  alternates: guideAlternates("germany", "trade-agreement"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=India-EU%20FTA%20for%20German%20Companies%20Entering%20India", width: 1200, height: 630, alt: "India-EU FTA for German Companies Entering India" }],
    siteName: "AU Corporate",
    title: "India-EU FTA for German Companies Entering India",
    description:
      "Status and content of the India-EU free trade agreement for German companies: services access, staff mobility, tariffs on components, the investment.",
    url: "https://www.theaucorp.com/germany-to-india/india-eu-fta-and-germany",
    locale: "en_DE",
  },
  twitter: {
    title: "India-EU FTA for German Companies Entering India",
    description:
      "Status and content of the India-EU free trade agreement for German companies: services access, staff mobility, tariffs on components, the investment.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
