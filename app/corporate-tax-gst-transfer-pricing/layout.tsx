import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Corporate Tax, GST and Transfer Pricing in India",
  },
  description:
    "Corporate tax, GST, transfer pricing, DTAA, repatriation and expat tax for Indian subsidiaries of foreign companies. CA-led team, free consultation.",
  alternates: {
    canonical: "https://www.theaucorp.com/corporate-tax-gst-transfer-pricing",
  },
  openGraph: {
    type: "website",
    images: [{ url: "https://www.theaucorp.com/og?title=Corporate%20Tax%2C%20GST%20and%20Transfer%20Pricing%20in%20India", width: 1200, height: 630, alt: "Corporate Tax, GST and Transfer Pricing in India" }],
    locale: "en_IN",
    siteName: "AU Corporate",
    title: "Corporate Tax, GST and Transfer Pricing in India",
    description:
      "Corporate tax, GST, transfer pricing, DTAA, repatriation and expat tax for Indian subsidiaries of foreign companies. CA-led team, free consultation.",
    url: "https://www.theaucorp.com/corporate-tax-gst-transfer-pricing",
  },
  twitter: { card: "summary_large_image",
    title: "Corporate Tax, GST and Transfer Pricing in India",
    description:
      "Corporate tax, GST, transfer pricing, DTAA, repatriation and expat tax for Indian subsidiaries of foreign companies. CA-led team, free consultation.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
