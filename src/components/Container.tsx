import type { ReactNode } from 'react'

type ContainerProps = {
  children: ReactNode
  className?: string
  size?: 'default' | 'narrow'
}

export function Container({
  children,
  className = '',
  size = 'default',
}: ContainerProps) {
  const widthClass =
    size === 'narrow' ? 'max-w-[960px]' : 'max-w-[1280px]'

  return (
    <div
      className={`mx-auto w-full ${widthClass} px-5 lg:px-12 ${className}`}
    >
      {children}
    </div>
  )
}
