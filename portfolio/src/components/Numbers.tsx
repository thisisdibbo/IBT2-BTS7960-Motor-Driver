import { motion } from 'motion/react'
import { numbers } from '../content'
import { EASE } from '../lib/motion'
import { Container } from './Container'

export function Numbers() {
  return (
    <section aria-label="In numbers" className="border-y border-border py-20 md:py-28">
      <Container>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-14 md:grid-cols-4 md:gap-x-10">
          {numbers.map((n, i) => (
            <motion.div
              key={n.label}
              className="flex flex-col"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.9, ease: EASE, delay: i * 0.08 }}
            >
              <dt className="order-2 mt-4 max-w-[26ch] text-[15px] leading-snug text-muted-foreground">{n.label}</dt>
              <dd className="order-1 font-display text-[clamp(52px,7vw,104px)] font-semibold leading-[0.9] tracking-[-0.04em] text-primary tabular-nums">
                {n.value}
                {n.unit && <span className="ml-1 text-[0.42em] tracking-[-0.01em]">{n.unit}</span>}
              </dd>
            </motion.div>
          ))}
        </dl>
      </Container>
    </section>
  )
}
