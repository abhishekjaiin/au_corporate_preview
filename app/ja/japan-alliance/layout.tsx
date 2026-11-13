import type { Metadata } from "next"

const URL_JA = "https://www.theaucorp.com/ja/japan-alliance"
const URL_EN = "https://www.theaucorp.com/japan-alliance"
const TITLE = "日本橋国際会計事務所との業務提携に関するお知らせ | AU Corporate"
const DESCRIPTION =
  "AU Corporate は2026年10月19日付で、東京・日本橋の日本橋国際会計事務所と、日本とインドの間の進出支援に関する業務提携の覚書（MOU）を締結しました。"

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: URL_JA, languages: { en: URL_EN, ja: URL_JA, "x-default": URL_EN } },
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=" + encodeURIComponent("日本橋国際会計事務所との業務提携"), width: 1200, height: 630, alt: "AU Corporate" }],
    siteName: "AU Corporate",
    title: TITLE,
    description: DESCRIPTION,
    url: URL_JA,
    locale: "ja_JP",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
