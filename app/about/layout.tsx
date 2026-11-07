import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "About AU Corporate | CA-Led Incorporation Firm in India",
  },
  description:
    "CA-led firm founded in 2016 and led by Abhishek Jaiin, incorporating and running companies across India for Indian and foreign clients.",
  alternates: {
    canonical: "https://www.theaucorp.com/about",
  },
  openGraph: {
    type: "website",
    images: [{ url: "https://www.theaucorp.com/og?title=About%20AU%20Corporate%20%7C%20CA-Led%20Incorporation%20Firm%20in%20India", width: 1200, height: 630, alt: "About AU Corporate | CA-Led Incorporation Firm in India" }],
    locale: "en_IN",
    siteName: "AU Corporate",
    title: "About AU Corporate | CA-Led Incorporation Firm in India",
    description:
      "CA-led firm founded in 2016 and led by Abhishek Jaiin, incorporating and running companies across India for Indian and foreign clients.",
    url: "https://www.theaucorp.com/about",
  },
  twitter: {
    title: "About AU Corporate | CA-Led Incorporation Firm in India",
    description:
      "CA-led firm founded in 2016 and led by Abhishek Jaiin, incorporating and running companies across India for Indian and foreign clients.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
