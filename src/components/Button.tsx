import { ArrowRight } from 'lucide-react'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  showArrow?: boolean
  variant?: 'primary' | 'ghost'
}

export function Button({
  children,
  showArrow = false,
  variant = 'primary',
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  const variants = {
    primary: 'btn-primary-gradient text-primary-foreground',
    ghost:
      'bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground',
  }

  return (
    <button
      disabled={disabled}
      className={`focus-ring group inline-flex h-14 items-center justify-center gap-2 rounded-2xl px-6 text-base font-semibold disabled:cursor-not-allowed disabled:opacity-60 ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
        {showArrow && (
          <ArrowRight
            className="h-4 w-4 transition-transform duration-[250ms] group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        )}
      </span>
    </button>
  )
}
