"use client"

import { useEffect, useId, useState } from "react"
import { CalendarCheck, CheckCircle2, MessageCircle } from "lucide-react"
import { getStoredAttribution } from "@/lib/attribution"
import { LEAD_NEEDS, LEAD_TIMELINES, countryFromPath, needFromPath, trackEvent } from "@/lib/lead-context"

export const WEB3FORMS_ACCESS_KEY = "7f7b220d-2540-451d-88ba-6b6f878ec151"
export const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit"

const BOOKING_URL = "https://cal.com/abhishek-jaiin-ybbklq/30min"
const WHATSAPP_NUMBER = "919999010513"

/** Subject line for the lead email, so the inbox shows what the enquiry is about. */
export function leadSubject(kind: string, need?: string) {
  if (typeof window === "undefined") return `New ${kind} from theaucorp.com`
  const path = window.location.pathname
  if (path.startsWith("/career")) return "New job application from theaucorp.com"
  return need ? `New ${kind}: ${need}` : `New ${kind} from theaucorp.com`
}

const inputClass =
  "w-full rounded-lg border border-[#d6dce6] bg-white px-4 py-3 text-sm text-gray-900 shadow-sm transition placeholder:text-gray-400 focus:border-[#0E1B4D] focus:outline-none focus:ring-2 focus:ring-[#FFD21F]/40"
const labelClass = "mb-1.5 block text-sm font-semibold text-[#243047]"
const optionalClass = "font-normal text-gray-400"

type Submitted = { name: string; email: string; need: string }

export function Web3Form({ compact = false }: { compact?: boolean } = {}) {
  const uid = useId()
  const fid = (name: string) => `${uid}-${name}`
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [need, setNeed] = useState("")
  const [country, setCountry] = useState("")
  const [submitted, setSubmitted] = useState<Submitted | null>(null)

  // Preselect the need and country from the page the visitor is reading.
  useEffect(() => {
    const path = window.location.pathname
    setNeed((current) => current || needFromPath(path))
    setCountry((current) => current || countryFromPath(path))
  }, [])

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus("submitting")

    const form = event.currentTarget
    const formData = new FormData(form)
    for (const [key, value] of Object.entries(getStoredAttribution())) {
      if (value) formData.set(key, value)
    }
    const chosenNeed = String(formData.get("need") || "")
    formData.set("subject", leadSubject("enquiry", chosenNeed))
    formData.set("page", window.location.href)
    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      })
      const result = await res.json()
      if (result.success) {
        trackEvent("generate_lead", {
          lead_need: chosenNeed,
          lead_country: String(formData.get("country") || ""),
          lead_timeline: String(formData.get("timeline") || ""),
          form_location: compact ? "popup" : "page",
          page_path: window.location.pathname,
        })
        setSubmitted({
          name: String(formData.get("name") || ""),
          email: String(formData.get("email") || ""),
          need: chosenNeed,
        })
        setStatus("success")
        form.reset()
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  if (status === "success" && submitted) {
    const firstName = submitted.name.split(" ")[0]
    const booking = `${BOOKING_URL}?name=${encodeURIComponent(submitted.name)}&email=${encodeURIComponent(submitted.email)}`
    const whatsappText = `Hi AU Corporate, I'm ${submitted.name}. I just sent an enquiry on your website${submitted.need ? ` about: ${submitted.need}` : ""}.`
    const whatsapp = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappText)}`
    return (
      <div className="rounded-xl border border-gray-200 bg-white p-6 text-left" role="status">
        <div className="flex items-center gap-3">
          <CheckCircle2 className="h-8 w-8 shrink-0 text-green-600" aria-hidden="true" />
          <p className="text-lg font-semibold text-[#081a42]">Thanks{firstName ? `, ${firstName}` : ""}. We&apos;ve got your enquiry.</p>
        </div>
        <p className="mt-3 text-sm text-gray-600">
          A Chartered Accountant on our team will reply within 24 hours. Want to move faster? Pick a time now.
        </p>
        <div className="mt-4 space-y-2.5">
          <a
            href={booking}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#FFD21F] px-4 py-3 text-sm font-bold text-[#0E1B4D] transition hover:bg-[#F2B705]"
          >
            <CalendarCheck className="h-4 w-4" aria-hidden="true" />
            Book your free 30-minute call
          </a>
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-[#0E1B4D] px-4 py-3 text-sm font-semibold text-[#0E1B4D] transition hover:bg-[#f5f7fb]"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Continue on WhatsApp
          </a>
        </div>
        {!compact && (
          <ol className="mt-5 space-y-1.5 border-t border-gray-100 pt-4 text-sm text-gray-600">
            <li>
              <strong className="text-[#081a42]">1.</strong> We review your enquiry and reply by email within 24 hours.
            </li>
            <li>
              <strong className="text-[#081a42]">2.</strong> On a short call, we map the right structure, steps and timeline for you.
            </li>
            <li>
              <strong className="text-[#081a42]">3.</strong> You get a fixed written quote before any work starts.
            </li>
          </ol>
        )}
      </div>
    )
  }

  return (
    // action/method let the form submit as plain HTML when JavaScript is off;
    // with JavaScript, handleSubmit sends it in place and shows the next steps.
    <form action={WEB3FORMS_ENDPOINT} method="POST" onSubmit={handleSubmit} className="space-y-4">
      <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
      <input type="hidden" name="subject" value="New enquiry from theaucorp.com" />
      <input type="hidden" name="from_name" value="AU Corporate Website" />
      {/* Spam trap: hidden from people, filled in by bots, rejected by Web3Forms. */}
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className={compact ? "space-y-4" : "grid gap-4 sm:grid-cols-2"}>
        <div>
          <label htmlFor={fid("name")} className={labelClass}>
            Your name*
          </label>
          <input id={fid("name")} type="text" name="name" required autoComplete="name" className={inputClass} />
        </div>
        <div>
          <label htmlFor={fid("email")} className={labelClass}>
            Work email*
          </label>
          <input id={fid("email")} type="email" name="email" required autoComplete="email" className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor={fid("need")} className={labelClass}>
          What do you need help with?*
        </label>
        <select
          id={fid("need")}
          name="need"
          required
          value={need}
          onChange={(e) => setNeed(e.target.value)}
          className={inputClass}
        >
          <option value="" disabled>
            Choose one
          </option>
          {LEAD_NEEDS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className={compact ? "space-y-4" : "grid gap-4 sm:grid-cols-2"}>
        <div>
          <label htmlFor={fid("country")} className={labelClass}>
            Your country <span className={optionalClass}>(optional)</span>
          </label>
          <input
            id={fid("country")}
            type="text"
            name="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="e.g. USA, Japan, Germany"
            autoComplete="country-name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor={fid("phone")} className={labelClass}>
            WhatsApp or phone <span className={optionalClass}>(optional)</span>
          </label>
          <input id={fid("phone")} type="tel" name="phone" autoComplete="tel" placeholder="With country code" className={inputClass} />
        </div>
      </div>

      {!compact && (
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor={fid("company")} className={labelClass}>
              Company <span className={optionalClass}>(optional)</span>
            </label>
            <input id={fid("company")} type="text" name="company" autoComplete="organization" className={inputClass} />
          </div>
          <div>
            <label htmlFor={fid("timeline")} className={labelClass}>
              When do you want to start? <span className={optionalClass}>(optional)</span>
            </label>
            <select id={fid("timeline")} name="timeline" defaultValue="" className={inputClass}>
              <option value="">Choose one</option>
              {LEAD_TIMELINES.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}

      <div>
        <label htmlFor={fid("message")} className={labelClass}>
          Anything else we should know? <span className={optionalClass}>(optional)</span>
        </label>
        <textarea
          id={fid("message")}
          name="message"
          rows={compact ? 2 : 3}
          placeholder="Your sector, plans or questions"
          className={inputClass}
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600" role="alert">
          Something went wrong. Please try again, or email us at{" "}
          <a href="mailto:partner@theaucorp.com" className="font-semibold underline">
            partner@theaucorp.com
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-lg bg-[#FFD21F] px-6 py-3.5 text-sm font-bold text-[#0E1B4D] shadow-sm transition hover:bg-[#F2B705] hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Get free expert advice"}
      </button>
      <p className="text-center text-xs leading-relaxed text-gray-500">
        A Chartered Accountant replies within 24 hours. No obligation, and we never share your details. See our{" "}
        <a href="/privacy" className="underline hover:text-gray-700">
          privacy policy
        </a>
        .
      </p>
    </form>
  )
}
