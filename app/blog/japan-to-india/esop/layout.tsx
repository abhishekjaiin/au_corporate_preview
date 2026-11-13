import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "ESOPs for Indian Employees of a Japanese Parent Company",
  },
  description:
    "How Japanese parent stock options and RSUs work for Indian employees: Indian tax at exercise, FEMA reporting, valuation and cost recharges.",
  alternates: guideAlternates("japan", "esop"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=ESOPs%20for%20Indian%20Employees%20of%20a%20Japanese%20Parent%20Company", width: 1200, height: 630, alt: "ESOPs for Indian Employees of a Japanese Parent Company" }],
    locale: "en_JP",
    siteName: "AU Corporate",
    title: "ESOPs for Indian Employees of a Japanese Parent Company",
    description:
      "How Japanese parent stock options and RSUs work for Indian employees: Indian tax at exercise, FEMA reporting, valuation and cost recharges.",
    url: "https://www.theaucorp.com/japan-to-india/esop",
  },
  twitter: { card: "summary_large_image",
    title: "ESOPs for Indian Employees of a Japanese Parent Company",
    description:
      "How Japanese parent stock options and RSUs work for Indian employees: Indian tax at exercise, FEMA reporting, valuation and cost recharges.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
