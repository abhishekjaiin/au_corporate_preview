import type { Metadata } from "next"

export const metadata: Metadata = {
  title: { absolute: "Press Note 3 Approval for Chinese and Hong Kong Investors" },
  description: "Who needs Press Note 3 approval to invest in India, the March 2026 easing, documents, the approval process, timelines, director clearance and filings after approval.",
  alternates: { canonical: "https://www.theaucorp.com/press-note-3-approval-india" },
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Press%20Note%203%20Approval%20in%20India%20for%20Chinese%20and%20Hong%20Kong%20Investors", width: 1200, height: 630, alt: "Press Note 3 Approval for Chinese and Hong Kong Investors" }],
    siteName: "AU Corporate",
    title: "Press Note 3 Approval for Chinese and Hong Kong Investors",
    description: "Who needs Press Note 3 approval to invest in India, the March 2026 easing, documents, the approval process, timelines, director clearance and filings after approval.",
    url: "https://www.theaucorp.com/press-note-3-approval-india",
    locale: "en_IN",
  },
  twitter: { title: "Press Note 3 Approval for Chinese and Hong Kong Investors", description: "Who needs Press Note 3 approval to invest in India, the March 2026 easing, documents, the approval process, timelines, director clearance and filings after approval." },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
