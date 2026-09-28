import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useMotionValue, useSpring } from 'motion/react'
import { useCanHover } from '../lib/useMediaQuery'

type Mode = 'dot' | 'view'

/**
 * A 10px coral dot that trails the pointer on a spring. Over anything marked
 * data-cursor="view" it grows to 64px and reads "View". Inside a section marked
 * data-cursor-invert (the coral contact block) it turns dark so it stays visible.
 * Not rendered on touch devices.
 */
export function CursorDot() {
  const canHover = useCanHover()
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 520, damping: 42, mass: 0.6 })
  const sy = useSpring(y, { stiffness: 520, damping: 42, mass: 0.6 })
  const [mode, setMode] = useState<Mode>('dot')
  const [inverted, setInverted] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!canHover) return
    const onMove = (e: PointerEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      setVisible(true)
      const el = e.target instanceof Element ? e.target : null
      setMode(el?.closest('[data-cursor="view"]') ? 'view' : 'dot')
      setInverted(Boolean(el?.closest('[data-cursor-invert]')))
    }
    const onLeave = () => setVisible(false)
    window.addEventListener('pointermove', onMove, { passive: true })
    document.documentElement.addEventListener('pointerleave', onLeave)
    return () => {
      window.removeEventListener('pointermove', onMove)
      document.documentElement.removeEventListener('pointerleave', onLeave)
    }
  }, [canHover, x, y])

  if (!canHover) return null

  const size = mode === 'view' ? 64 : 10

  return (
    <motion.div aria-hidden className="pointer-events-none fixed left-0 top-0 z-[100]" style={{ x: sx, y: sy }}>
      <motion.div
        className="flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full"
        initial={false}
        animate={{
          width: size,
          height: size,
          opacity: visible ? 1 : 0,
          backgroundColor: inverted ? 'hsl(0, 0%, 6%)' : 'hsl(8, 92%, 62%)',
        }}
        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
      >
        <AnimatePresence>
          {mode === 'view' && (
            <motion.span
              key="view"
              className="text-[11px] font-medium uppercase tracking-[0.14em] text-primary-foreground"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.2 }}
            >
              View
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}
