import { canonicalPublicUrl } from "@/lib/seo/public-path"
import { guideServiceFor, guideServiceSchemaId } from "@/lib/guides/guide-services"

/**
 * WebPage + Article JSON-LD for a guide page.
 * Organization and Person live once, on the root layout, and are referenced
 * by @id. BreadcrumbList comes from Breadcrumb and FAQPage from GuideFaqList.
 */
export function GuideArticleSchema({
  url,
  headline,
  description,
  datePublished,
  dateModified,
  isPartOfUrl,
  inLanguage = "en-US",
}: {
  url: string
  headline: string
  description: string
  datePublished: string
  dateModified: string
  /** The hub page's #webpage @id, when this is a spoke article. Omit on the hub itself. */
  isPartOfUrl?: string
  /** BCP 47 tag for the page's English variant, e.g. "en-AU" for the Australia cluster. */
  inLanguage?: string
}) {
  const canonicalUrl = canonicalPublicUrl(url)
  const canonicalPartOfUrl = isPartOfUrl ? canonicalPublicUrl(isPartOfUrl) : undefined
  const service = guideServiceFor(canonicalUrl)
  const serviceId = guideServiceSchemaId(service)
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: headline,
        description,
        inLanguage,
        dateModified,
        ...(canonicalPartOfUrl ? { isPartOf: { "@id": `${canonicalPartOfUrl}#webpage` } } : {}),
      },
      {
        "@type": "Article",
        "@id": `${canonicalUrl}#article`,
        headline,
        description,
        author: { "@id": "https://www.theaucorp.com/#abhishek-jaiin" },
        publisher: { "@id": "https://www.theaucorp.com/#organization" },
        datePublished,
        dateModified,
        mainEntityOfPage: { "@id": `${canonicalUrl}#webpage` },
        about: { "@id": serviceId },
        inLanguage,
      },
      {
        "@type": "Service",
        "@id": serviceId,
        name: service.name,
        url: `https://www.theaucorp.com${service.path}`,
        provider: { "@id": "https://www.theaucorp.com/#organization" },
        areaServed: "India",
      },
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
