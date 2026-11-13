import type { Metadata } from "next"

export const metadata: Metadata = {
  title: { absolute: "Funding an Indian Company: CCDs, CCPS and Convertible Notes" },
  description: "How foreign investors fund an Indian company: equity, compulsorily convertible debentures and preference shares, convertible notes for start-ups, and the rules.",
  alternates: { canonical: "https://www.theaucorp.com/funding-instruments-india-ccd-ccps-convertible-notes" },
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Funding%20an%20Indian%20Company%3A%20CCDs%2C%20CCPS%20and%20Convertible%20Notes", width: 1200, height: 630, alt: "Funding an Indian Company: CCDs, CCPS and Convertible Notes" }],
    siteName: "AU Corporate",
    title: "Funding an Indian Company: CCDs, CCPS and Convertible Notes",
    description: "How foreign investors fund an Indian company: equity, compulsorily convertible debentures and preference shares, convertible notes for start-ups, and the rules.",
    url: "https://www.theaucorp.com/funding-instruments-india-ccd-ccps-convertible-notes",
    locale: "en_IN",
  },
  twitter: { card: "summary_large_image", title: "Funding an Indian Company: CCDs, CCPS and Convertible Notes", description: "How foreign investors fund an Indian company: equity, compulsorily convertible debentures and preference shares, convertible notes for start-ups, and the rules." },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
