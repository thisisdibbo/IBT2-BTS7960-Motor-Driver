import { profile } from '../content'
import { Container } from './Container'

const itemClass =
  'text-[11px] font-medium uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:text-foreground'

export function Footer() {
  return (
    <footer className="bg-background">
      <Container className="flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <p className="font-display text-[17px] font-extrabold uppercase tracking-[-0.01em]">{profile.fullName}</p>
        <ul className="flex flex-wrap items-center gap-x-8 gap-y-3">
          <li>
            <a
              href={`mailto:${profile.email}`}
              className="text-[13px] font-medium tracking-[0.02em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {profile.email}
            </a>
          </li>
          <li>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className={itemClass}>
              LinkedIn
            </a>
          </li>
          <li>
            <a href={profile.links.github} target="_blank" rel="noreferrer" className={itemClass}>
              GitHub
            </a>
          </li>
          <li className="text-[11px] font-medium uppercase tracking-[0.24em] text-muted-foreground">© 2026</li>
        </ul>
      </Container>
    </footer>
  )
}
