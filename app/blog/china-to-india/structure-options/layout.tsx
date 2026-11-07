import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Subsidiary, Joint Venture, Branch or EOR: China",
  },
  description:
    "A comparison of ways for a Chinese company to operate in India: wholly owned subsidiary, joint venture with an Indian partner, branch or liaison office, LLP.",
  alternates: guideAlternates("china", "subsidiary-vs-branch-vs-liaison-office-vs-llp"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Subsidiary%2C%20Joint%20Venture%2C%20Branch%20or%20EOR%3A%20China", width: 1200, height: 630, alt: "Subsidiary, Joint Venture, Branch or EOR: China" }],
    siteName: "AU Corporate",
    title: "Subsidiary, Joint Venture, Branch or EOR: China",
    description:
      "A comparison of ways for a Chinese company to operate in India: wholly owned subsidiary, joint venture with an Indian partner, branch or liaison office, LLP.",
    url: "https://www.theaucorp.com/china-to-india/structure-options",
    locale: "en_CN",
  },
  twitter: {
    title: "Subsidiary, Joint Venture, Branch or EOR: China",
    description:
      "A comparison of ways for a Chinese company to operate in India: wholly owned subsidiary, joint venture with an Indian partner, branch or liaison office, LLP.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
