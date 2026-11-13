import Link from "next/link"
import { guideServiceFor } from "@/lib/guides/guide-services"

/**
 * "Get this done with AU Corporate" box shown on every country guide page.
 * Ties the guide to the service page that delivers it and to a real case
 * study, in plain server-rendered HTML.
 */
export function GuideServiceBox({ path }: { path: string }) {
  const service = guideServiceFor(path)
  return (
    <aside className="rounded-xl border-2 border-gold bg-[#fffbe6] p-6 my-10" aria-labelledby="au-service-heading">
      <p className="text-xs font-bold uppercase tracking-wider text-[#081a42]/70 mb-1">AU Corporate service</p>
      <h2 id="au-service-heading" className="text-xl font-bold text-[#081a42] mb-2">
        Get this done with AU Corporate
      </h2>
      <p className="text-gray-700 leading-relaxed mb-3">{service.blurb}</p>
      <p className="mb-3">
        <Link href={service.path} className="font-semibold text-blue-800 hover:underline">
          {service.name} →
        </Link>
      </p>
      <p className="text-sm text-gray-700">
        Client result:{" "}
        <Link href={service.caseStudy.href} className="font-semibold text-blue-800 hover:underline">
          {service.caseStudy.label}
        </Link>
        . Chartered Accountants serving foreign companies across India since 2016.
      </p>
      {path.startsWith("/japan-to-india") && (
        <p className="text-sm text-gray-700 mt-3 pt-3 border-t border-gold/60">
          <strong>Japan–India alliance:</strong> AU Corporate works with{" "}
          <Link href="/japan-alliance" className="font-semibold text-blue-800 hover:underline">
            Nihon-bashi International Accounting Firm (日本橋国際会計事務所)
          </Link>
          , a Tokyo CPA and tax firm, under an MOU signed on 19 October 2026. Japanese companies can start in
          Japanese in Tokyo, while AU Corporate handles incorporation, tax and compliance in India.
        </p>
      )}
    </aside>
  )
}
