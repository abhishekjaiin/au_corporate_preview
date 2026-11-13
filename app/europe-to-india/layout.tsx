import type { Metadata } from "next"

export const metadata: Metadata = {
  title: { absolute: "Set Up a Subsidiary in India from the Netherlands and Europe" },
  description: "How Dutch, German, French and other European companies set up a subsidiary in India: Dutch BV route, treaties, social security, the EU FTA and GDPR.",
  alternates: { canonical: "https://www.theaucorp.com/europe-to-india" },
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Set%20Up%20a%20Subsidiary%20in%20India%20from%20the%20Netherlands%20and%20Europe", width: 1200, height: 630, alt: "Set Up a Subsidiary in India from the Netherlands and Europe" }],
    siteName: "AU Corporate",
    title: "Set Up a Subsidiary in India from the Netherlands and Europe",
    description: "How Dutch, German, French and other European companies set up a subsidiary in India: Dutch BV route, treaties, social security, the EU FTA and GDPR.",
    url: "https://www.theaucorp.com/europe-to-india",
    locale: "en_IN",
  },
  twitter: { card: "summary_large_image", title: "Set Up a Subsidiary in India from the Netherlands and Europe", description: "How Dutch, German, French and other European companies set up a subsidiary in India: Dutch BV route, treaties, social security, the EU FTA and GDPR." },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
