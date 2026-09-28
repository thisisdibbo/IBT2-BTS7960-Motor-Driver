import { useState } from 'react'
import { ArrowUpRight, Check, Copy } from 'lucide-react'
import { contact, profile } from '../content'
import { Container } from './Container'

export function Contact() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard blocked: select the address so it can be copied by hand.
      const el = document.getElementById('contact-email')
      if (el) window.getSelection()?.selectAllChildren(el)
    }
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      data-cursor-invert
      className="bg-primary text-primary-foreground"
    >
      <Container className="grid gap-12 py-24 md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] md:gap-16 md:py-32">
        <div>
          <p className="type-label !text-primary-foreground/70">Get in touch</p>
          <h2
            id="contact-heading"
            className="mt-6 font-display text-[clamp(44px,6.6vw,104px)] font-semibold leading-[0.96] tracking-[-0.035em]"
          >
            {contact.heading}
          </h2>
        </div>
        <div className="flex min-w-0 flex-col gap-6 md:pt-12">
          {contact.paragraphs.map((p) => (
            <p key={p} className="text-[18px] font-normal leading-[1.65]">
              {p}
            </p>
          ))}
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex max-w-full items-center gap-3 rounded-full bg-primary-foreground px-6 py-4 text-[15px] font-medium text-foreground transition-transform duration-300 ease-[var(--ease-expo)] hover:scale-[1.03] md:text-[16px]"
            >
              <span id="contact-email" className="truncate">
                {profile.email}
              </span>
              <ArrowUpRight className="size-4 shrink-0 text-primary transition-transform duration-500 ease-[var(--ease-expo)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <button
              type="button"
              onClick={copy}
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-5 py-4 text-[11px] font-medium uppercase tracking-[0.24em] transition-colors hover:bg-primary-foreground/10"
            >
              {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
              <span aria-live="polite">{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
        </div>
      </Container>
    </section>
  )
}
