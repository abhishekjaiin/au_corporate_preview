import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "ESOPs for Indian Employees of an Australian Parent Company",
  },
  description:
    "How Australian parent ESOPs and RSUs work for Indian employees: Indian tax at exercise or vesting, FEMA reporting, valuation and cost recharges.",
  alternates: guideAlternates("australia", "esop"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=ESOPs%20for%20Indian%20Employees%20of%20an%20Australian%20Parent%20Company", width: 1200, height: 630, alt: "ESOPs for Indian Employees of an Australian Parent Company" }],
    siteName: "AU Corporate",
    title: "ESOPs for Indian Employees of an Australian Parent Company",
    description:
      "How Australian parent ESOPs and RSUs work for Indian employees: Indian tax at exercise or vesting, FEMA reporting, valuation and cost recharges.",
    url: "https://www.theaucorp.com/australia-to-india/esop",
    locale: "en_AU",
  },
  twitter: { card: "summary_large_image",
    title: "ESOPs for Indian Employees of an Australian Parent Company",
    description:
      "How Australian parent ESOPs and RSUs work for Indian employees: Indian tax at exercise or vesting, FEMA reporting, valuation and cost recharges.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
