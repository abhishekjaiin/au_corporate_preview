import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Payroll, PF, Labour Law & FRRO for Project Offices in India",
  },
  description:
    "Payroll, provident fund, professional tax, labour codes and FRRO support for a foreign company's India project office.",
  alternates: {
    canonical: "https://www.theaucorp.com/project-office-payroll-compliance",
  },
  openGraph: {
    type: "website",
    images: [{ url: "https://www.theaucorp.com/og?title=Payroll%2C%20PF%2C%20Labour%20Law%20%26%20FRRO%20for%20Project%20Offices%20in%20India", width: 1200, height: 630, alt: "Payroll, PF, Labour Law & FRRO for Project Offices in India" }],
    locale: "en_IN",
    siteName: "AU Corporate",
    title: "Payroll, PF, Labour Law & FRRO for Project Offices in India",
    description:
      "Payroll, provident fund, professional tax, labour codes and FRRO support for a foreign company's India project office.",
    url: "https://www.theaucorp.com/project-office-payroll-compliance",
  },
  twitter: {
    title: "Payroll, PF, Labour Law & FRRO for Project Offices in India",
    description:
      "Payroll, provident fund, professional tax, labour codes and FRRO support for a foreign company's India project office.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
