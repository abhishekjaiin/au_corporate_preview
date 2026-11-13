import type { Metadata } from "next"

export const metadata: Metadata = {
  title: { absolute: "Cost of Hiring Employees in India: Employer Costs (2026)" },
  description: "What an employee costs in India: CTC, provident fund, ESI, gratuity, insurance, recruitment and office costs, with worked examples at three salaries.",
  alternates: { canonical: "https://www.theaucorp.com/cost-of-hiring-employees-in-india" },
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Cost%20of%20Hiring%20Employees%20in%20India%20%282026%29%3A%20Employer%20Costs%20Explained", width: 1200, height: 630, alt: "Cost of Hiring Employees in India: Employer Costs (2026)" }],
    siteName: "AU Corporate",
    title: "Cost of Hiring Employees in India: Employer Costs (2026)",
    description: "What an employee costs in India: CTC, provident fund, ESI, gratuity, insurance, recruitment and office costs, with worked examples at three salaries.",
    url: "https://www.theaucorp.com/cost-of-hiring-employees-in-india",
    locale: "en_IN",
  },
  twitter: { card: "summary_large_image", title: "Cost of Hiring Employees in India: Employer Costs (2026)", description: "What an employee costs in India: CTC, provident fund, ESI, gratuity, insurance, recruitment and office costs, with worked examples at three salaries." },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
