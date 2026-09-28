import { experience } from '../content'
import { Container } from './Container'

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="py-24 md:py-32">
      <Container>
        <h2 id="experience-heading" className="type-label">
          Experience &amp; education
        </h2>
        <ul className="mt-8 border-t border-border md:mt-10">
          {experience.map((e) => (
            <li
              key={e.title}
              className="grid grid-cols-[minmax(0,1fr)_auto] gap-x-6 gap-y-1.5 border-b border-border py-6 md:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)_104px] md:items-baseline md:gap-x-10"
            >
              <span className="font-display text-[19px] font-semibold leading-snug tracking-[-0.01em] md:text-[22px]">
                {e.title}
              </span>
              <span className="col-start-1 row-start-2 text-[15px] leading-snug text-muted-foreground md:col-start-auto md:row-start-auto md:text-[16px]">
                {e.org}
              </span>
              <span className="col-start-2 row-start-1 text-right text-[15px] tabular-nums text-muted-foreground md:col-start-auto md:row-start-auto">
                {e.year}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
