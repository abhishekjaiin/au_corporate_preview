import type { Metadata } from "next"

export const metadata: Metadata = {
  title: { absolute: "Japan–India Alliance: AU Corporate and Nihon-bashi CPA Firm" },
  description: "AU Corporate (New Delhi) and Nihon-bashi International Accounting Firm (Tokyo) signed an MOU on 19 October 2026 to support Japan–India market entry.",
  alternates: { canonical: "https://www.theaucorp.com/japan-alliance", languages: { en: "https://www.theaucorp.com/japan-alliance", ja: "https://www.theaucorp.com/ja/japan-alliance", "x-default": "https://www.theaucorp.com/japan-alliance" } },
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Japan%E2%80%93India%20Alliance%3A%20AU%20Corporate%20and%20Nihon-bashi%20CPA%20Firm", width: 1200, height: 630, alt: "Japan–India Alliance: AU Corporate and Nihon-bashi CPA Firm" }],
    siteName: "AU Corporate",
    title: "Japan–India Alliance: AU Corporate and Nihon-bashi CPA Firm",
    description: "AU Corporate (New Delhi) and Nihon-bashi International Accounting Firm (Tokyo) signed an MOU on 19 October 2026 to support Japan–India market entry.",
    url: "https://www.theaucorp.com/japan-alliance",
    locale: "en_IN",
  },
  twitter: { title: "Japan–India Alliance: AU Corporate and Nihon-bashi CPA Firm", description: "AU Corporate (New Delhi) and Nihon-bashi International Accounting Firm (Tokyo) signed an MOU on 19 October 2026 to support Japan–India market entry." },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
