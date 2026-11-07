import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "ESOPs for Indian Employees of an Australian Parent Company",
  },
  description:
    "How ESOPs and RSUs work for employees of an Indian subsidiary: FEMA reporting, employee tax, valuation, cost recharge and transfer pricing.",
  alternates: guideAlternates("australia", "esop"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=ESOPs%20for%20Indian%20Employees%20of%20an%20Australian%20Parent%20Company", width: 1200, height: 630, alt: "ESOPs for Indian Employees of an Australian Parent Company" }],
    siteName: "AU Corporate",
    title: "ESOPs for Indian Employees of an Australian Parent Company",
    description:
      "How ESOPs and RSUs work for employees of an Indian subsidiary: FEMA reporting, employee tax, valuation, cost recharge and transfer pricing.",
    url: "https://www.theaucorp.com/australia-to-india/esop",
    locale: "en_AU",
  },
  twitter: {
    title: "ESOPs for Indian Employees of an Australian Parent Company",
    description:
      "How ESOPs and RSUs work for employees of an Indian subsidiary: FEMA reporting, employee tax, valuation, cost recharge and transfer pricing.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
