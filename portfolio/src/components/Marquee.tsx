import { marquee } from '../content'

/** One row of competition and community names drifting right to left. */
export function Marquee() {
  const items = [...marquee, ...marquee]
  return (
    <section aria-label="Competitions and communities" className="border-y border-border py-7 md:py-9">
      <p className="sr-only">{marquee.join(', ')}</p>
      <div
        className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_6%,#000_94%,transparent)]"
        aria-hidden="true"
      >
        <ul className="flex w-max shrink-0 animate-marquee-fast items-center motion-reduce:animate-none md:animate-marquee">
          {items.map((name, i) => (
            <li key={i} className="flex items-center">
              <span className="whitespace-nowrap px-7 font-display text-[20px] font-semibold uppercase tracking-[-0.01em] text-foreground opacity-55 transition-opacity duration-300 hover:opacity-100 md:px-12 md:text-[26px]">
                {name}
              </span>
              <span className="size-1.5 shrink-0 rounded-full bg-muted-foreground/60" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
