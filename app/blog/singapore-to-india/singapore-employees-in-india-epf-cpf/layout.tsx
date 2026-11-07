import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Singapore Employees in India: Treaty, EPF Exemption and CPF",
  },
  description:
    "How income tax, India's Employees' Provident Fund and Singapore's CPF apply to Singapore staff working in India: the treaty's 183-day test, the citizen.",
  alternates: guideAlternates("singapore", "foreign-employee-treaty-ssa"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Singapore%20Employees%20in%20India%3A%20Treaty%2C%20EPF%20Exemption%20and%20CPF", width: 1200, height: 630, alt: "Singapore Employees in India: Treaty, EPF Exemption and CPF" }],
    siteName: "AU Corporate",
    title: "Singapore Employees in India: Treaty, EPF Exemption and CPF",
    description:
      "How income tax, India's Employees' Provident Fund and Singapore's CPF apply to Singapore staff working in India: the treaty's 183-day test, the citizen.",
    url: "https://www.theaucorp.com/singapore-to-india/singapore-employees-in-india-epf-cpf",
    locale: "en_SG",
  },
  twitter: {
    title: "Singapore Employees in India: Treaty, EPF Exemption and CPF",
    description:
      "How income tax, India's Employees' Provident Fund and Singapore's CPF apply to Singapore staff working in India: the treaty's 183-day test, the citizen.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
