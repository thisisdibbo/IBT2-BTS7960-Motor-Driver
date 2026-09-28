import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Menu, X } from 'lucide-react'
import clsx from 'clsx'
import { nav, profile } from '../content'
import { EASE } from '../lib/motion'

const linkClass =
  'text-[11px] font-medium uppercase tracking-[0.24em] text-foreground/70 transition-colors duration-300 hover:text-foreground'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuButton = useRef<HTMLButtonElement>(null)
  const close = useCallback(() => {
    setOpen(false)
    menuButton.current?.focus()
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={clsx(
          'fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-500',
          scrolled ? 'border-border/70 bg-background/75 backdrop-blur-md' : 'border-transparent bg-transparent',
        )}
        style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}
      >
        <nav
          aria-label="Primary"
          className="mx-auto flex h-[72px] w-full max-w-[1280px] items-center justify-end gap-3 px-5 md:gap-9 md:px-10"
        >
          <ul className="hidden items-center gap-9 md:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={linkClass}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="rounded-full bg-primary px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.24em] text-primary-foreground transition-transform duration-300 ease-[var(--ease-expo)] hover:scale-[1.04]"
          >
            Get in touch
          </a>
          <button
            ref={menuButton}
            type="button"
            className="-mr-2 grid size-11 place-items-center text-foreground md:hidden"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
          >
            <Menu className="size-6" strokeWidth={1.5} />
          </button>
        </nav>
      </header>
      {/* Outside the header: its backdrop-filter would otherwise trap this fixed overlay. */}
      <AnimatePresence>{open && <MobileMenu onClose={close} />}</AnimatePresence>
    </>
  )
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <motion.div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      className="fixed inset-0 z-[60] flex flex-col bg-background px-5 pb-[calc(40px+env(safe-area-inset-bottom,0px))] pt-[env(safe-area-inset-top,0px)] md:hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: EASE }}
    >
      <div className="flex h-[72px] items-center justify-end">
        <button
          ref={closeRef}
          type="button"
          className="-mr-2 grid size-11 place-items-center text-foreground"
          aria-label="Close menu"
          onClick={onClose}
        >
          <X className="size-6" strokeWidth={1.5} />
        </button>
      </div>
      <nav aria-label="Mobile" className="mt-8">
        <ul className="flex flex-col gap-3">
          {nav.map((item, i) => (
            <li key={item.href} className="overflow-hidden">
              <motion.a
                href={item.href}
                onClick={onClose}
                className="block font-display text-[clamp(40px,13vw,64px)] font-semibold uppercase leading-[1.02] tracking-[-0.03em] text-foreground"
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, ease: EASE, delay: 0.08 + i * 0.06 }}
              >
                {item.label}
              </motion.a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-auto flex flex-col items-start gap-4">
        <a
          href="#contact"
          onClick={onClose}
          className="rounded-full bg-primary px-6 py-3.5 text-[11px] font-medium uppercase tracking-[0.24em] text-primary-foreground"
        >
          Get in touch
        </a>
        <p className="select-all text-[15px] text-muted-foreground">{profile.email}</p>
      </div>
    </motion.div>
  )
}
