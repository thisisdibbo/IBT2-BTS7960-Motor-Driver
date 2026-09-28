import { ArrowRight } from 'lucide-react'
import { services } from '../content'
import { Container } from './Container'

export function WhatIDo() {
  return (
    <section aria-labelledby="what-i-do" className="py-24 md:py-32">
      <Container>
        <h2 id="what-i-do" className="type-label">
          What I do
        </h2>
        <div className="mt-10 grid gap-14 md:mt-14 md:grid-cols-3 md:gap-10 lg:gap-14">
          {services.map((s) => (
            <article key={s.index} className="flex flex-col border-t border-border pt-7">
              <span className="font-display text-[15px] font-semibold tracking-[0.04em] text-primary">{s.index}</span>
              <h3 className="mt-6 font-display text-[28px] font-semibold leading-[1.1] tracking-[-0.02em] md:text-[30px]">
                {s.title}
              </h3>
              <p className="mt-4 text-muted-foreground">{s.body}</p>
              <p className="mt-5 text-[13px] leading-relaxed tracking-[0.02em] text-foreground/55">{s.tools}</p>
              <a
                href={s.link.href}
                {...(s.link.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
                className="group mt-auto inline-flex items-center gap-2 self-start pt-8 text-[11px] font-medium uppercase tracking-[0.24em] text-foreground transition-colors hover:text-primary"
              >
                {s.link.label}
                <ArrowRight className="size-3.5 transition-transform duration-500 ease-[var(--ease-expo)] group-hover:translate-x-1" />
              </a>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
