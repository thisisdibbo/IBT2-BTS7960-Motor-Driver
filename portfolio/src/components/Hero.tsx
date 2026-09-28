import type { ReactNode } from 'react'
import { motion } from 'motion/react'
import clsx from 'clsx'
import { hero, profile } from '../content'
import { EASE } from '../lib/motion'

/**
 * The name is set edge to edge and the cut-out portrait stands in it:
 * line one sits behind the portrait (z-0), line two runs in front of the chest (z-20).
 * On phones the two lines stack and the portrait moves below them.
 */
export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col pt-[calc(72px+env(safe-area-inset-top,0px))]">
      <h1 className="sr-only">
        {profile.fullName}: {hero.label}
      </h1>

      <motion.p
        className="type-label px-5 pt-6 text-center text-balance overlap:pt-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
      >
        {hero.label.split(' · ').map((part, i) => (
          <span key={part}>
            {i > 0 && '\u00a0· '}
            {part.replace(/ /g, '\u00a0')}
          </span>
        ))}
      </motion.p>

      <div className="flex flex-1 flex-col justify-center py-6 overlap:py-4">
        <div className="hero-stack flex flex-col items-center overlap:block" aria-hidden="true">
          <NameLine delay={0.15} className="overlap:absolute overlap:inset-x-0 overlap:top-[var(--line1)] overlap:z-0">
            {profile.firstName}
          </NameLine>

          <motion.img
            src={hero.portrait}
            alt=""
            width={560}
            height={963}
            fetchPriority="high"
            className="hero-portrait order-last mt-4 w-auto max-w-none select-none overlap:absolute overlap:left-1/2 overlap:top-0 overlap:z-10 overlap:mt-0 overlap:-translate-x-1/2"
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: EASE, delay: 0.3 }}
            draggable={false}
          />

          <NameLine
            delay={0.27}
            className="relative z-20 overlap:absolute overlap:inset-x-0 overlap:top-[var(--line2)]"
          >
            {profile.lastName}
          </NameLine>
        </div>
      </div>

      <motion.p
        className="mx-auto max-w-[44ch] px-5 pb-10 text-center text-balance text-[19px] font-light leading-[1.55] text-foreground/85 overlap:max-w-[62ch] overlap:pb-12 overlap:text-[21px]"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: EASE, delay: 0.75 }}
      >
        {hero.statement}
      </motion.p>
    </section>
  )
}

function NameLine({ children, delay, className }: { children: ReactNode; delay: number; className?: string }) {
  return (
    <div className={clsx('hero-line overflow-hidden', className)}>
      <motion.div
        className="type-name text-center text-foreground"
        initial={{ y: 120 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: EASE, delay }}
      >
        {children}
      </motion.div>
    </div>
  )
}
