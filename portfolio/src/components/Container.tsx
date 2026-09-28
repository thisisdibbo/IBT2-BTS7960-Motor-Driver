import clsx from 'clsx'
import type { ReactNode } from 'react'

export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={clsx('mx-auto w-full max-w-[1280px] px-5 md:px-10', className)}>{children}</div>
}
