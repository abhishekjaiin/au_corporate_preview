import type { Metadata } from "next"

export const metadata: Metadata = {
  title: { absolute: "India's New Labour Codes: 50% Wage Rule and Gratuity" },
  description: "India's labour codes, in force since 21 November 2025: the 50% wage rule, gratuity for fixed-term staff, wage deadlines and layoff thresholds.",
  alternates: { canonical: "https://www.theaucorp.com/new-labour-codes-india-50-percent-wage-rule-gratuity" },
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=India%27s%20New%20Labour%20Codes%3A%20The%2050%25%20Wage%20Rule%20and%20Gratuity%20Explained", width: 1200, height: 630, alt: "India's New Labour Codes: 50% Wage Rule and Gratuity" }],
    siteName: "AU Corporate",
    title: "India's New Labour Codes: 50% Wage Rule and Gratuity",
    description: "India's labour codes, in force since 21 November 2025: the 50% wage rule, gratuity for fixed-term staff, wage deadlines and layoff thresholds.",
    url: "https://www.theaucorp.com/new-labour-codes-india-50-percent-wage-rule-gratuity",
    locale: "en_IN",
  },
  twitter: { card: "summary_large_image", title: "India's New Labour Codes: 50% Wage Rule and Gratuity", description: "India's labour codes, in force since 21 November 2025: the 50% wage rule, gratuity for fixed-term staff, wage deadlines and layoff thresholds." },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
