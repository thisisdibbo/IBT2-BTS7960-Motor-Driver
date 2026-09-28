import { useState, type PointerEvent } from 'react'
import { AnimatePresence, motion, useMotionValue, useSpring } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import type { TalkItem } from '../content'
import { EASE } from '../lib/motion'
import { useCanHover } from '../lib/useMediaQuery'
import { Container } from './Container'

const THUMB_W = 280

type Props = { id: string; label: string; heading: string; items: TalkItem[] }

/**
 * Large rows with a coral arrow. On hover the row shifts 6px, the arrow 10px, and a
 * thumbnail follows the pointer (pointer devices only).
 */
export function TalkRows({ id, label, heading, items }: Props) {
  const canHover = useCanHover()
  const [active, setActive] = useState<number | null>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 260, damping: 28, mass: 0.7 })
  const sy = useSpring(y, { stiffness: 260, damping: 28, mass: 0.7 })

  const onMove = (e: PointerEvent) => {
    // Sit to the right of the pointer, or to the left when there is no room.
    const room = e.clientX + 32 + THUMB_W < window.innerWidth
    x.set(room ? e.clientX + 32 : e.clientX - 32 - THUMB_W)
    // Float mostly above the pointer so the title under it stays readable.
    const h = (THUMB_W * 5) / 7
    y.set(e.clientY - h * 0.9 < 84 ? e.clientY + 28 : e.clientY - h * 0.9)
  }

  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="py-24 md:py-32">
      <Container>
        <p className="type-label">{label}</p>
        <h2 id={`${id}-heading`} className="type-h2 mt-5">
          {heading}
        </h2>

        <ul
          className="mt-12 border-t border-border md:mt-16"
          onPointerMove={canHover ? onMove : undefined}
          onPointerLeave={() => setActive(null)}
        >
          {items.map((item, i) => (
            <li key={item.title} className="border-b border-border" onPointerEnter={() => setActive(i)}>
              <TalkRow item={item} />
            </li>
          ))}
        </ul>
      </Container>

      {canHover && (
        <motion.div aria-hidden="true" className="pointer-events-none fixed left-0 top-0 z-40" style={{ x: sx, y: sy }}>
          <AnimatePresence>
            {active !== null && (
              <motion.div
                key="thumb"
                className="relative aspect-[7/5] overflow-hidden rounded-[6px] bg-card shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)] ring-1 ring-white/10"
                style={{ width: THUMB_W }}
                initial={{ opacity: 0, scale: 0.8, rotate: -4 }}
                animate={{ opacity: 1, scale: 1, rotate: -2 }}
                exit={{ opacity: 0, scale: 0.8, rotate: -4 }}
                transition={{ duration: 0.45, ease: EASE }}
              >
                <AnimatePresence initial={false}>
                  <motion.div
                    key={active}
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Thumb item={items[active]} />
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </section>
  )
}

function TalkRow({ item }: { item: TalkItem }) {
  const body = (
    <>
      <div className="min-w-0 transition-transform duration-500 ease-[var(--ease-expo)] group-hover:translate-x-1.5">
        <h3 className="font-display text-[26px] font-semibold leading-[1.06] tracking-[-0.02em] md:text-[clamp(32px,3.6vw,48px)]">
          {item.title}
        </h3>
        <p className="mt-3 max-w-[64ch] text-muted-foreground">{item.description}</p>
        <p className="mt-3 text-[14px] leading-relaxed text-foreground/60">{item.venue}</p>
      </div>
      {item.href ? (
        <ArrowRight
          className="mt-1 size-7 shrink-0 text-primary transition-transform duration-500 ease-[var(--ease-expo)] group-hover:translate-x-2.5 md:size-10"
          strokeWidth={1.5}
        />
      ) : (
        <span className="type-label mt-2 hidden shrink-0 rounded-full border border-border px-3 py-1.5 !text-muted-foreground sm:inline-block">
          {item.status ?? 'In progress'}
        </span>
      )}
    </>
  )
  const cls = 'group grid grid-cols-[minmax(0,1fr)_auto] items-start gap-6 py-8 md:gap-10 md:py-11'
  return item.href ? (
    <a href={item.href} target="_blank" rel="noreferrer" className={cls}>
      {body}
    </a>
  ) : (
    <div className={cls}>{body}</div>
  )
}

function Thumb({ item }: { item: TalkItem }) {
  if (item.thumb) {
    return <img src={item.thumb} alt="" className="size-full object-cover" />
  }
  return (
    <div className="flex size-full flex-col justify-between bg-[radial-gradient(120%_90%_at_20%_0%,hsl(8_40%_18%),var(--card)_60%)] p-5">
      <span className="type-label">{item.thumbKicker}</span>
      <span className="font-display text-[34px] font-semibold leading-none tracking-[-0.02em] text-foreground">
        {item.thumbLabel}
      </span>
    </div>
  )
}
