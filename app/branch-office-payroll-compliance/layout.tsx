import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Payroll, PF, Labour Law & FRRO for Branch Offices in India",
  },
  description:
    "Payroll, social security compliance, professional tax, Labour Codes compliance and FRRO support for expats at the India branch office of a foreign company.",
  alternates: {
    canonical: "https://www.theaucorp.com/branch-office-payroll-compliance",
  },
  openGraph: {
    type: "website",
    images: [{ url: "https://www.theaucorp.com/og?title=Payroll%2C%20PF%2C%20Labour%20Law%20%26%20FRRO%20for%20Branch%20Offices%20in%20India", width: 1200, height: 630, alt: "Payroll, PF, Labour Law & FRRO for Branch Offices in India" }],
    locale: "en_IN",
    siteName: "AU Corporate",
    title: "Payroll, PF, Labour Law & FRRO for Branch Offices in India",
    description:
      "Payroll, social security compliance, professional tax, Labour Codes compliance and FRRO support for expats at the India branch office of a foreign company.",
    url: "https://www.theaucorp.com/branch-office-payroll-compliance",
  },
  twitter: {
    title: "Payroll, PF, Labour Law & FRRO for Branch Offices in India",
    description:
      "Payroll, social security compliance, professional tax, Labour Codes compliance and FRRO support for expats at the India branch office of a foreign company.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
