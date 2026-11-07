import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Subsidiary, Branch, Liaison or LLP: Japan",
  },
  description:
    "Compare the four ways a Japanese company can enter India: wholly owned subsidiary, branch office, liaison office and LLP.",
  alternates: guideAlternates("japan", "subsidiary-vs-branch-vs-liaison-office-vs-llp"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Subsidiary%2C%20Branch%2C%20Liaison%20or%20LLP%3A%20Japan", width: 1200, height: 630, alt: "Subsidiary, Branch, Liaison or LLP: Japan" }],
    locale: "en_JP",
    siteName: "AU Corporate",
    title: "Subsidiary, Branch, Liaison or LLP: Japan",
    description:
      "Compare the four ways a Japanese company can enter India: wholly owned subsidiary, branch office, liaison office and LLP.",
    url: "https://www.theaucorp.com/japan-to-india/subsidiary-vs-branch-vs-liaison-office-vs-llp",
  },
  twitter: {
    title: "Subsidiary, Branch, Liaison or LLP: Japan",
    description:
      "Compare the four ways a Japanese company can enter India: wholly owned subsidiary, branch office, liaison office and LLP.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
