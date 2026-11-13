import Link from "next/link"
import { Breadcrumb } from "@/components/Breadcrumb"
import { GuideArticleSchema } from "@/components/guide/GuideArticleSchema"
import { GuideLeadForm } from "@/components/guide/GuideLeadForm"

const PAGE_URL = "https://www.theaucorp.com/ja/japan-alliance"
const TITLE = "日本橋国際会計事務所との業務提携に関するお知らせ"
const DESCRIPTION =
  "AU Corporate は2026年10月19日付で、東京・日本橋の日本橋国際会計事務所と、日本とインドの間の進出支援に関する業務提携の覚書（MOU）を締結しました。"

const partnerSchema = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  "@id": "https://www.n-cpa.com/#organization",
  name: "日本橋国際会計事務所",
  alternateName: "Nihon-bashi International Accounting Firm",
  url: "https://www.n-cpa.com/",
  foundingDate: "2009-02",
  address: {
    "@type": "PostalAddress",
    streetAddress: "日本橋2丁目1-3 アーバンネット日本橋二丁目ビル10F",
    addressLocality: "中央区",
    addressRegion: "東京都",
    postalCode: "103-0027",
    addressCountry: "JP",
  },
}

const P = "text-gray-700 leading-loose mb-5"
const H2 = "text-xl font-bold text-gray-900 mt-10 mb-4 border-l-4 border-gold pl-3"
const A = "text-blue-800 font-semibold hover:underline"

export default function JaJapanAlliancePage() {
  return (
    <main lang="ja" className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline={TITLE}
        description={DESCRIPTION}
        datePublished="2026-11-13"
        dateModified="2026-11-13"
        inLanguage="ja"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(partnerSchema) }} />

      <Breadcrumb items={[{ label: "日本との業務提携", href: "/japan-alliance" }, { label: "お知らせ（日本語）" }]} />

      <section className="bg-[#081a42] text-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <p className="text-sm font-semibold text-gold mb-2">お知らせ</p>
          <h1 className="text-2xl sm:text-3xl font-bold leading-snug">{TITLE}</h1>
          <p className="mt-4 text-sm text-white/80">
            <time dateTime="2026-11-13">2026年11月13日</time>　AU Corporate
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-12">
        <p className={P}>時下ますますご清栄のこととお喜び申し上げます。平素は、格別のご高配を賜り、厚く御礼申し上げます。</p>
        <p className={P}>
          このたび、AU Corporate（AU Corporate Private Limited）は、2026年10月19日付で、東京・日本橋に本拠を置く会計事務所{" "}
          <a href="https://www.n-cpa.com/" className={A} rel="noopener">日本橋国際会計事務所</a>
          と、日本とインドの間の進出支援に関する業務提携の覚書（MOU）を締結いたしました。
        </p>
        <p className={P}>
          本提携により、インドへの進出・事業拡大をお考えの日本企業の皆様、また日本への進出をお考えのインド企業の皆様に対し、両国の専門家が連携して、会社設立から会計・税務・各種コンプライアンス対応まで、一貫したサポートをご提供してまいります。
        </p>
        <p className={P}>
          日本語でのご相談は日本橋国際会計事務所が日本側の窓口としてお受けし、インド現地での会社設立、外資規制（FEMA）・インド準備銀行（RBI）への対応、法人税・GST・移転価格、会計・給与計算、会社法上の届出・秘書役業務などは AU Corporate が担当いたします。
        </p>

        <h2 className={H2}>日本橋国際会計事務所について</h2>
        <p className={P}>
          日本橋国際会計事務所は、2009年に設立された、東京都中央区日本橋に本拠を置く会計事務所です。公認会計士・税理士・米国公認会計士（ワシントン州）の根本俊一氏が代表を務め、IFRS・US-GAAP 監査、子会社監査、デューデリジェンス、株価算定、外資系企業の法人設立支援・税務申告などのサービスを提供しています。
        </p>

        <h2 className={H2}>AU Corporate について</h2>
        <p className={P}>
          AU Corporate は、2016年に設立された、インド・ニューデリーに本拠を置く会計事務所です（グルグラムにも拠点があります）。勅許会計士（Chartered Accountant）の Abhishek Jaiin が率い、インド子会社・支店・駐在員事務所の設立から、会計・税務・各種コンプライアンス対応まで幅広いサービスを提供しています。
        </p>
        <p className={P}>
          インド子会社設立の当事務所報酬の目安は USD 750〜1,000（資本金100万ルピーまで）です。政府手数料、印紙税、日本での公証・アポスティーユ費用は別途となります。初回のご相談は無料です。
        </p>

        <p className={`${P} text-sm bg-gray-50 border rounded-lg p-4`}>
          なお、AU Corporate と日本橋国際会計事務所はそれぞれ独立した事務所であり、支店・子会社等の関係にはありません。各国における業務は、それぞれの事務所がお客様と直接契約のうえ提供いたします。
        </p>

        <h2 className={H2}>詳細・関連ページ</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
          <li>
            <Link href="/japan-alliance" className={A}>業務提携の詳細（英語）</Link>
          </li>
          <li>
            <Link href="/japan-to-india" className={A}>日本からのインド進出ガイド（英語）</Link>
          </li>
          <li>
            <a href="https://www.n-cpa.com/au-corporate-alliance/" className={A} rel="noopener">日本橋国際会計事務所によるお知らせ</a>
          </li>
          <li>
            <a href="https://www.n-cpa.com/finance/overseas-expansion/india-business-support/" className={A} rel="noopener">日本橋国際会計事務所「インド進出支援」</a>
          </li>
        </ul>

        <p className={P}>今後とも変わらぬご支援とお引き立てを賜りますようお願い申し上げます。</p>
        <p className="text-gray-900 font-semibold text-right">AU Corporate</p>
      </article>

      <GuideLeadForm
        title="インド進出のご相談（英語・日本語）"
        description="Tell us about your plans in English, or ask for Japanese-language support through Nihon-bashi International Accounting Firm. The first consultation is free."
      />
    </main>
  )
}
