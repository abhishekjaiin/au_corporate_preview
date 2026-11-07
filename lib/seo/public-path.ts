/** Public country-guide URLs omit the /blog prefix that the files live under. */

const COUNTRY =
  "usa|uk|japan|germany|singapore|australia|china|hong-kong|russia|spain"

const BLOG_GUIDE = new RegExp(`/blog/(${COUNTRY})-to-india(?=/|$)`)

export function canonicalPublicUrl(url: string): string {
  return url.replace(BLOG_GUIDE, "/$1-to-india")
}

export function canonicalPathname(pathname: string): string {
  const path = pathname.startsWith("http") ? new URL(pathname).pathname : pathname
  const canonical = canonicalPublicUrl(path)
  if (canonical.length > 1 && canonical.endsWith("/")) return canonical.slice(0, -1)
  return canonical || "/"
}

/** Sets <html lang> from the pathname without reading request headers. */
export const HTML_LANG_SCRIPT = `(function(){var p=location.pathname.replace(/^\\/blog\\/(${COUNTRY})-to-india(?=\\/|$)/,"/$1-to-india");var s=(p.split("/").filter(Boolean)[0]||"");var m={"usa-to-india":"en-US","australia-to-india":"en-AU","uk-to-india":"en-GB","singapore-to-india":"en-SG","japan-to-india":"en-JP","germany-to-india":"en-DE","china-to-india":"en-CN","hong-kong-to-india":"en-HK","russia-to-india":"en-RU","spain-to-india":"en-ES"};document.documentElement.lang=m[s]||"en-IN";})();`
