import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "ESOPs for Indian Employees of a US Parent Company",
  },
  description:
    "How ESOPs and RSUs work for employees of an Indian subsidiary: FEMA reporting, employee tax, valuation, cost recharge and transfer pricing for a US parent.",
  alternates: guideAlternates("usa", "esop"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=ESOPs%20for%20Indian%20Employees%20of%20a%20US%20Parent%20Company", width: 1200, height: 630, alt: "ESOPs for Indian Employees of a US Parent Company" }],
    locale: "en_US",
    siteName: "AU Corporate",
    title: "ESOPs for Indian Employees of a US Parent Company",
    description:
      "How ESOPs and RSUs work for employees of an Indian subsidiary: FEMA reporting, employee tax, valuation, cost recharge and transfer pricing for a US parent.",
    url: "https://www.theaucorp.com/usa-to-india/esop",
  },
  twitter: {
    title: "ESOPs for Indian Employees of a US Parent Company",
    description:
      "How ESOPs and RSUs work for employees of an Indian subsidiary: FEMA reporting, employee tax, valuation, cost recharge and transfer pricing for a US parent.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
