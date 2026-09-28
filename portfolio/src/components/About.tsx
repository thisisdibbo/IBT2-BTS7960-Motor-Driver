import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { about, profile } from '../content'
import { Container } from './Container'

const linkClass =
  'group inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.24em] text-foreground transition-colors hover:text-primary'

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-24 md:py-32">
      <Container className="grid items-start gap-12 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-14 lg:gap-24">
        <div className="mx-auto w-full max-w-[460px] overflow-hidden rounded-[28px] border border-border bg-card md:sticky md:top-28 md:max-w-none">
          <img
            src={about.portrait}
            alt={`Portrait of ${profile.fullName}`}
            width={760}
            height={950}
            loading="lazy"
            decoding="async"
            className="aspect-[4/5] w-full object-cover"
          />
        </div>

        <div className="min-w-0">
          <p className="type-label">About</p>
          <h2 id="about-heading" className="type-h2 mt-5">
            About {profile.firstName}.
          </h2>
          <div className="mt-8 flex max-w-[62ch] flex-col gap-6 text-foreground/85">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <dl className="mt-12 grid max-w-[62ch] gap-5 border-t border-border pt-8">
            {about.toolkit.map((t) => (
              <div key={t.label} className="grid gap-1 sm:grid-cols-[150px_minmax(0,1fr)] sm:gap-6">
                <dt className="type-label pt-[3px] !text-muted-foreground">{t.label}</dt>
                <dd className="text-[15px] leading-relaxed text-foreground/75">{t.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-12 flex flex-wrap gap-x-10 gap-y-5">
            <a href={profile.cv} download className={linkClass}>
              Download CV (PDF)
              <ArrowDown className="size-3.5 transition-transform duration-500 ease-[var(--ease-expo)] group-hover:translate-y-0.5" />
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className={linkClass}>
              LinkedIn
              <ArrowUpRight className="size-3.5 transition-transform duration-500 ease-[var(--ease-expo)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a href={profile.links.github} target="_blank" rel="noreferrer" className={linkClass}>
              GitHub
              <ArrowUpRight className="size-3.5 transition-transform duration-500 ease-[var(--ease-expo)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
