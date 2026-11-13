import type { Metadata } from "next"

export const metadata: Metadata = {
  title: { absolute: "Employee Benefits in India for Foreign Companies (2026 Guide)" },
  description: "Employee benefits in India for Singapore, UK, German and US companies: provident fund, ESI, gratuity, leave, group health insurance and common extras.",
  alternates: { canonical: "https://www.theaucorp.com/employee-benefits-in-india-for-foreign-companies" },
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Employee%20Benefits%20in%20India%20for%20Foreign%20Companies%20%282026%20Guide%29", width: 1200, height: 630, alt: "Employee Benefits in India for Foreign Companies (2026 Guide)" }],
    siteName: "AU Corporate",
    title: "Employee Benefits in India for Foreign Companies (2026 Guide)",
    description: "Employee benefits in India for Singapore, UK, German and US companies: provident fund, ESI, gratuity, leave, group health insurance and common extras.",
    url: "https://www.theaucorp.com/employee-benefits-in-india-for-foreign-companies",
    locale: "en_IN",
  },
  twitter: { title: "Employee Benefits in India for Foreign Companies (2026 Guide)", description: "Employee benefits in India for Singapore, UK, German and US companies: provident fund, ESI, gratuity, leave, group health insurance and common extras." },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
