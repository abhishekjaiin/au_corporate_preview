import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Payroll, PF, ESI and Expat Services in India",
  },
  description:
    "Payroll, PF and ESI, professional tax, labour law compliance, recruitment, employment contracts and FRRO registration for expats in India.",
  alternates: {
    canonical: "https://www.theaucorp.com/payroll-expat-services",
  },
  openGraph: {
    type: "website",
    images: [{ url: "https://www.theaucorp.com/og?title=Payroll%2C%20PF%2C%20ESI%20and%20Expat%20Services%20in%20India", width: 1200, height: 630, alt: "Payroll, PF, ESI and Expat Services in India" }],
    locale: "en_IN",
    siteName: "AU Corporate",
    title: "Payroll, PF, ESI and Expat Services in India",
    description:
      "Payroll, PF and ESI, professional tax, labour law compliance, recruitment, employment contracts and FRRO registration for expats in India.",
    url: "https://www.theaucorp.com/payroll-expat-services",
  },
  twitter: {
    title: "Payroll, PF, ESI and Expat Services in India",
    description:
      "Payroll, PF and ESI, professional tax, labour law compliance, recruitment, employment contracts and FRRO registration for expats in India.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
