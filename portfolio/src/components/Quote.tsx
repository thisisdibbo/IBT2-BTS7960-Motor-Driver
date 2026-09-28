import { quote } from '../content'
import { Container } from './Container'

export function Quote() {
  return (
    <section aria-label="Design note" className="py-28 md:py-40">
      <Container>
        <figure>
          <blockquote className="font-display text-[clamp(34px,5.4vw,86px)] font-semibold leading-[1.02] tracking-[-0.03em] text-foreground">
            <span className="text-primary">&ldquo;</span>
            {quote.lead}
            <span className="text-primary">{quote.highlight}</span>
            {quote.rest}
            <span className="text-primary">&rdquo;</span>
          </blockquote>
          <figcaption className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-1 md:mt-14">
            <span className="h-px w-10 bg-primary" aria-hidden="true" />
            <span className="text-[15px] font-medium text-foreground">{quote.name}</span>
            <span className="text-[15px] text-muted-foreground">{quote.role}</span>
          </figcaption>
        </figure>
      </Container>
    </section>
  )
}
