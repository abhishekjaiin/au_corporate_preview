import type { Metadata } from "next"

const title = "India Subsidiary Compliance Calendar"
const description =
  "Monthly, quarterly, annual and event-based filings for an Indian subsidiary: TDS, GST, ROC, RBI/FEMA and income tax, by due date for a 31 March year."

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: {
    canonical: "https://www.theaucorp.com/compliance-calendar",
  },
  openGraph: {
    type: "website",
    images: [{ url: "https://www.theaucorp.com/og?title=India%20Subsidiary%20Compliance%20Calendar", width: 1200, height: 630, alt: "India Subsidiary Compliance Calendar" }],
    locale: "en_IN",
    siteName: "AU Corporate",
    title,
    description,
    url: "https://www.theaucorp.com/compliance-calendar",
  },
  twitter: {
    title,
    description,
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
