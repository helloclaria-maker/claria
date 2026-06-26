import type { ReactNode } from 'react'

type BadgeProps = {
  children: ReactNode
  className?: string
}

export function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-border bg-accent px-3.5 py-1.5 text-[11px] font-medium tracking-wide text-accent-foreground ${className}`}
    >
      {children}
    </span>
  )
}
