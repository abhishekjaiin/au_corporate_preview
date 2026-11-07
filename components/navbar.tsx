"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Cpu,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { WhatsAppIcon } from "@/components/WhatsAppIcon"

// ── Foreign Company — mega menu, 3 columns ──────────────────────────────────
type DbiItem = { label: string; href?: string }

const dbiColumns: { heading: string; items: DbiItem[] }[] = [
  {
    heading: "Entity Types & Setup",
    items: [
      { label: "Subsidiary", href: "/india-subsidiary-registration" },
      { label: "Branch Office", href: "/branch-office-registration" },
      { label: "Liaison Office", href: "/liaison-office-registration" },
      { label: "Project Office", href: "/project-office-registration" },
    ],
  },
  {
    heading: "Post Incorporation",
    items: [
      { label: "Accounting, Reporting and Audit Support", href: "/accounting-reporting-audit-support" },
      { label: "FEMA and RBI Compliance", href: "/fema-rbi-compliance" },
      { label: "Corporate Tax, GST and Transfer Pricing", href: "/corporate-tax-gst-transfer-pricing" },
      { label: "Secretarial and ROC Compliance", href: "/secretarial-roc-compliance" },
      { label: "Payroll and Expat Services", href: "/payroll-expat-services" },
    ],
  },
  {
    heading: "Jurisdictions",
    items: [
      { label: "USA", href: "/usa-to-india" },
      { label: "Australia", href: "/australia-to-india" },
      { label: "UK", href: "/uk-to-india" },
      { label: "Japan", href: "/japan-to-india" },
      { label: "Singapore", href: "/singapore-to-india" },
      { label: "Germany", href: "/germany-to-india" },
      { label: "China", href: "/china-to-india" },
      { label: "Hong Kong", href: "/hong-kong-to-india" },
      { label: "Russia", href: "/russia-to-india" },
      { label: "Spain", href: "/spain-to-india" },
    ],
  },
]

// ── Services — matches the /services hub's own 8 categories & icons ────────
const coreServiceLinks = [
  { label: "India – OIDAR & GST Registration", desc: "GST registration & GSTR-5A filing", href: "/oidar-gst-registration-india", icon: Cpu },
]


// ── About ────────────────────────────────────────────────────────────────
const insightsLinks = [
  { label: "Blogs", href: "/blog" },
  { label: "Case Studies", href: "/case-studies" },
]

const aboutLinks = [
  { label: "About AU Corporate", href: "/about" },
  { label: "Partners", href: "/partners/uniproasia" },
  { label: "Careers", href: "/career" },
  { label: "Contact", href: "/contact" },
]

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [mobileMenu, setMobileMenu] = useState<string | null>(null)
  const [mobileDbiSub, setMobileDbiSub] = useState<string | null>(null)
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const closeMobile = () => {
    setIsOpen(false)
    setMobileMenu(null)
    setMobileDbiSub(null)
  }

  // The DBI/Services dropdown panels render fixed to the viewport (so they
  // can't overflow off-screen on narrower widths), which visually detaches
  // them from their trigger button — there's empty page between the two.
  // Closing on the trigger's plain onMouseLeave meant crossing that gap
  // closed the menu before the cursor ever reached the panel. openMenu/
  // scheduleClose/cancelClose give the panel itself a brief window to
  // "catch" the hover (via the same handlers) before the menu closes.
  const openMenu = (key: string) => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current)
    setActiveMenu(key)
  }
  const scheduleClose = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current)
    // Each trigger fills the full navbar height and every panel starts at the
    // navbar's bottom edge, so the cursor moves straight from trigger to panel
    // with no gap. The delay only has to forgive a slightly diagonal path,
    // and anything longer feels like the menu is lagging.
    closeTimeoutRef.current = setTimeout(() => setActiveMenu(null), 150)
  }
  const cancelClose = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current)
  }

  const handleLogoClick = () => {
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b bg-white">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Primary navigation">
        <div className="flex h-16 items-center justify-between sm:h-20">
          <Link href="/" className="flex items-center gap-2" onClick={handleLogoClick}>
            <Image src="/logo.png" alt="AU Corporate" width={42} height={42} priority sizes="42px" />
            <div className="flex flex-col leading-tight">
              <span translate="no" className="text-lg font-bold text-gold-dark sm:text-2xl">AU Corporate</span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#081a42] sm:text-[10px]">Growing Together</span>
            </div>
          </Link>

          <div className="hidden self-stretch items-stretch gap-1 lg:flex">
            {/* DOING BUSINESS IN INDIA — mega menu */}
            <div
              className="relative flex items-center"
              onMouseEnter={() => openMenu("dbi")}
              onMouseLeave={scheduleClose}
            >
              <button
                type="button"
                onClick={() => setActiveMenu(activeMenu === "dbi" ? null : "dbi")}
                className="flex items-center gap-1 px-3 py-2 text-sm text-gray-700 hover:text-black"
                aria-haspopup="true"
                aria-expanded={activeMenu === "dbi"}
              >
                Foreign Company <ChevronDown className="h-4 w-4" aria-hidden="true" />
              </button>

              {activeMenu === "dbi" && (
                <div
                  className="fixed left-1/2 top-20 z-50 w-[min(800px,calc(100vw-2rem))] -translate-x-1/2"
                  onMouseEnter={cancelClose}
                  onMouseLeave={scheduleClose}
                >
                  <div className="overflow-hidden rounded-2xl border bg-white shadow-2xl">
                    <div className="grid grid-cols-3 gap-0 p-6">
                      {dbiColumns.map((col, i) => (
                        <div key={col.heading} className={i > 0 ? "border-l pl-5 ml-5" : ""}>
                          <h3 className="mb-3 text-sm font-semibold text-[#081a42]">{col.heading}</h3>
                          <div className="space-y-0.5">
                            {col.items.map((item) =>
                              item.href ? (
                                <Link key={item.label} href={item.href} className="block py-1.5 text-sm leading-snug text-gray-700 hover:text-gold-dark">
                                  {item.label}
                                </Link>
                              ) : (
                                <span key={item.label} className="block py-1.5 text-sm leading-snug text-gray-400">
                                  {item.label}
                                </span>
                              )
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                    <Link
                      href="/contact"
                      className="flex items-center justify-between px-6 py-3.5 text-sm transition-colors hover:opacity-90"
                      style={{ backgroundColor: "#081a42" }}
                    >
                      <span className="text-white">
                        <span className="font-semibold">Not sure which entity type fits your business?</span>{" "}
                        <span className="text-white/70">Our team can walk you through it in one call.</span>
                      </span>
                      <span className="inline-flex shrink-0 items-center gap-1 font-semibold text-yellow-400">
                        Talk to an expert <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* SERVICES */}
            <div
              className="relative flex items-center"
              onMouseEnter={() => openMenu("services")}
              onMouseLeave={scheduleClose}
            >
              <button
                type="button"
                onClick={() => setActiveMenu(activeMenu === "services" ? null : "services")}
                className="flex items-center gap-1 px-3 py-2 text-sm text-gray-700 hover:text-black"
                aria-haspopup="true"
                aria-expanded={activeMenu === "services"}
              >
                Services <ChevronDown className="h-4 w-4" aria-hidden="true" />
              </button>

              {activeMenu === "services" && (
                <div
                  className="fixed left-1/2 top-20 z-50 w-[min(640px,calc(100vw-2rem))] -translate-x-1/2"
                  onMouseEnter={cancelClose}
                  onMouseLeave={scheduleClose}
                >
                  <div className="flex overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl">
                    {/* Navy service-line rail */}
                    <div className="w-[62%] py-4 bg-blue">
                      {coreServiceLinks.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="group mx-2 flex items-start gap-3 rounded-lg px-4 py-2.5 transition-colors hover:bg-white/10"
                        >
                          <item.icon className="mt-0.5 h-4 w-4 shrink-0 text-yellow-400" aria-hidden="true" />
                          <span>
                            <span className="block text-sm font-medium text-white">{item.label}</span>
                            <span className="block text-xs text-white/60">{item.desc}</span>
                          </span>
                        </Link>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex w-[38%] flex-col justify-between p-5">
                      <Link
                        href="/contact"
                        className="mt-4 block rounded-xl border border-gray-200 bg-gray-100 p-4 transition-colors hover:border-gold"
                      >
                        <p className="text-sm font-semibold text-[#081a42]">Not sure where to start?</p>
                        <p className="mt-1 text-xs text-gray-500">Talk to an expert about your specific requirement.</p>
                        <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-gold-dark">
                          Get in touch <ArrowRight className="h-3 w-3" aria-hidden="true" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* INSIGHTS */}
            <div
              className="relative flex items-center"
              onMouseEnter={() => openMenu("insights")}
              onMouseLeave={scheduleClose}
            >
              <button
                type="button"
                onClick={() => setActiveMenu(activeMenu === "insights" ? null : "insights")}
                className="flex items-center gap-1 px-3 py-2 text-sm text-gray-700 hover:text-black"
                aria-haspopup="true"
                aria-expanded={activeMenu === "insights"}
              >
                Insights <ChevronDown className="h-4 w-4" aria-hidden="true" />
              </button>

              {activeMenu === "insights" && (
                <div
                  className="absolute left-0 top-full z-50 w-[220px]"
                  onMouseEnter={cancelClose}
                  onMouseLeave={scheduleClose}
                >
                  <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl py-2">
                    {insightsLinks.map((item) => (
                      <Link key={item.label} href={item.href} className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#081a42]">
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* ABOUT */}
            <div
              className="relative flex items-center"
              onMouseEnter={() => openMenu("about")}
              onMouseLeave={scheduleClose}
            >
              <button
                type="button"
                onClick={() => setActiveMenu(activeMenu === "about" ? null : "about")}
                className="flex items-center gap-1 px-3 py-2 text-sm text-gray-700 hover:text-black"
                aria-haspopup="true"
                aria-expanded={activeMenu === "about"}
              >
                About <ChevronDown className="h-4 w-4" aria-hidden="true" />
              </button>

              {activeMenu === "about" && (
                <div
                  className="absolute right-0 top-full z-50 w-[220px]"
                  onMouseEnter={cancelClose}
                  onMouseLeave={scheduleClose}
                >
                  <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl py-2">
                    {aboutLinks.map((item) => (
                      <Link key={item.label} href={item.href} className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#081a42]">
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="hidden lg:block"><Button asChild><Link href="/contact">Get Started</Link></Button></div>
          <button type="button" onClick={() => setIsOpen((v) => !v)} className="rounded-md p-2 hover:bg-gray-100 lg:hidden" aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={isOpen} aria-controls="mobile-navigation">
            {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>

        {isOpen && (
          <div id="mobile-navigation" className="absolute left-0 top-16 h-[calc(100dvh-4rem)] w-full overflow-y-auto border-t bg-white px-5 py-6 shadow-lg sm:top-20 sm:h-[calc(100dvh-5rem)]">
            <MobileGroup label="Foreign Company" open={mobileMenu === "dbi"} onToggle={() => setMobileMenu(mobileMenu === "dbi" ? null : "dbi")}>
              {dbiColumns.map((col) => {
                const subOpen = mobileDbiSub === col.heading
                return (
                  <div key={col.heading} className="border-t first:border-t-0">
                    <button
                      type="button"
                      onClick={() => setMobileDbiSub(subOpen ? null : col.heading)}
                      className="flex w-full items-center justify-between py-2.5 text-left text-sm font-semibold text-gray-800"
                      aria-expanded={subOpen}
                    >
                      {col.heading}
                      <ChevronDown className={`h-4 w-4 shrink-0 text-gray-400 transition-transform ${subOpen ? "rotate-180" : ""}`} aria-hidden="true" />
                    </button>
                    {subOpen && (
                      <div className="pb-2">
                        {col.items.map((item) =>
                          item.href ? (
                            <Link key={item.label} href={item.href} onClick={closeMobile} className="block py-1.5 pl-2 text-sm text-gray-600">{item.label}</Link>
                          ) : (
                            <span key={item.label} className="block py-1.5 pl-2 text-sm text-gray-400">{item.label}</span>
                          )
                        )}
                      </div>
                    )}
                  </div>
                )
              })}
              <Link href="/contact" onClick={closeMobile} className="mt-4 block rounded-xl p-4 bg-blue">
                <span className="block text-sm font-semibold text-white">Not sure which entity type fits?</span>
                <span className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-yellow-400">Talk to an expert <ArrowRight className="h-3 w-3" aria-hidden="true" /></span>
              </Link>
            </MobileGroup>

            <MobileGroup label="Services" open={mobileMenu === "services"} onToggle={() => setMobileMenu(mobileMenu === "services" ? null : "services")}>
              {coreServiceLinks.map((item) => (
                <Link key={item.label} href={item.href} onClick={closeMobile} className="flex items-start gap-3 py-2">
                  <item.icon className="mt-0.5 h-4 w-4 shrink-0 text-[#081a42]" aria-hidden="true" />
                  <span>
                    <span className="block text-sm">{item.label}</span>
                    <span className="block text-xs text-gray-500">{item.desc}</span>
                  </span>
                </Link>
              ))}
              <Link href="/contact" onClick={closeMobile} className="mt-4 block rounded-xl p-4 bg-blue">
                <span className="block text-sm font-semibold text-white">Not sure where to start?</span>
                <span className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-yellow-400">Talk to an expert <ArrowRight className="h-3 w-3" aria-hidden="true" /></span>
              </Link>
            </MobileGroup>

            <MobileGroup label="Insights" open={mobileMenu === "insights"} onToggle={() => setMobileMenu(mobileMenu === "insights" ? null : "insights")}>
              {insightsLinks.map((item) => <Link key={item.label} href={item.href} onClick={closeMobile} className="block py-2 text-sm">{item.label}</Link>)}
            </MobileGroup>

            <MobileGroup label="About" open={mobileMenu === "about"} onToggle={() => setMobileMenu(mobileMenu === "about" ? null : "about")}>
              {aboutLinks.map((item) => <Link key={item.label} href={item.href} onClick={closeMobile} className="block py-2 text-sm">{item.label}</Link>)}
            </MobileGroup>

            <Button asChild className="mt-6 w-full"><Link href="/contact" onClick={closeMobile}>Get Started</Link></Button>
          </div>
        )}
      </nav>

      <a
        href="https://wa.me/919999010513"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with AU Corporate on WhatsApp"
        className="fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
      >
        <WhatsAppIcon size={30} />
      </a>
    </header>
  )
}

function MobileGroup({ label, open, onToggle, children }: { label: string; open: boolean; onToggle: () => void; children: React.ReactNode }) {
  return (
    <div className="mb-4 border-b pb-4">
      <button type="button" onClick={onToggle} className="flex w-full items-center justify-between py-2 text-base font-semibold" aria-expanded={open}>{label}<span aria-hidden="true">{open ? "−" : "+"}</span></button>
      {open && <div className="ml-3 mt-3 border-l pl-3 text-gray-700">{children}</div>}
    </div>
  )
}
