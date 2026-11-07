"use client"

import { useEffect, useState } from "react"
import { X } from "lucide-react"
import { Web3Form } from "@/components/Web3Form"
import { captureAttribution } from "@/lib/attribution"
import { OPEN_INQUIRY_MODAL_EVENT } from "@/lib/inquiry-modal"
import { trackEvent } from "@/lib/lead-context"

export function FloatingInquiryCTA() {
  const [open, setOpen] = useState(false)
  const [barDismissed, setBarDismissed] = useState(false)

  useEffect(() => {
    captureAttribution()
  }, [])

  // Count contact clicks sitewide (WhatsApp, call booking, phone, email) as
  // GA4 events, so every route to a lead is measured, not just the form.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null
      if (!link) return
      const href = link.getAttribute("href") || ""
      const name = href.startsWith("https://wa.me")
        ? "whatsapp_click"
        : href.includes("cal.com/")
          ? "book_call_click"
          : href.startsWith("tel:")
            ? "phone_click"
            : href.startsWith("mailto:")
              ? "email_click"
              : ""
      if (name) trackEvent(name, { link_url: href.split("?")[0], page_path: window.location.pathname })
    }
    document.addEventListener("click", onClick, { capture: true })
    return () => document.removeEventListener("click", onClick, { capture: true })
  }, [])

  useEffect(() => {
    const onOpen = () => setOpen(true)
    window.addEventListener(OPEN_INQUIRY_MODAL_EVENT, onOpen)
    return () => window.removeEventListener(OPEN_INQUIRY_MODAL_EVENT, onOpen)
  }, [])

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = "hidden"
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKey)
    }
  }, [open])

  return (
    <>
      {/* Mobile sticky CTA bar — both controls kept centered/left so neither
          sits under the WhatsApp bubble anchored at bottom-right. */}
      {!barDismissed && (
        <div className="fixed inset-x-0 bottom-0 z-[55] flex items-center justify-center gap-3 bg-gold px-4 py-3 lg:hidden">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="text-sm font-semibold text-[#081a42]"
          >
            Talk to an Expert →
          </button>
          <button
            type="button"
            onClick={() => setBarDismissed(true)}
            aria-label="Dismiss"
            className="shrink-0 rounded-full p-3 -m-1 text-[#081a42]/70 hover:text-[#081a42]"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      )}

      {/* Modal */}
      {open && (
        <div
          role="presentation"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-[#081a42]/55 p-4 backdrop-blur-sm"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Enquiry form"
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl"
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-3 top-3 z-10 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#081a42]/5 text-[#081a42] hover:bg-[#081a42]/10"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
            <h3 className="mb-1 text-xl font-bold text-[#081a42]">
              Talk to an Expert
            </h3>
            <p className="mb-4 text-sm text-gray-600">
              Tell us what you&apos;re planning. A Chartered Accountant replies within 24 hours.
            </p>
            <Web3Form compact />
          </div>
        </div>
      )}
    </>
  )
}
