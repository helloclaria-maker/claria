import { motion, type HTMLMotionProps } from 'framer-motion'
import type { ReactNode } from 'react'

type FadeInProps = HTMLMotionProps<'div'> & {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'none'
  immediate?: boolean
}

const directionOffset = {
  up: 10,
  down: -10,
  none: 0,
} as const

export function FadeIn({
  children,
  delay = 0,
  direction = 'up',
  immediate = false,
  className,
  ...props
}: FadeInProps) {
  const motionProps = immediate
    ? { animate: { opacity: 1, y: 0 } }
    : {
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-80px' },
      }

  return (
    <motion.div
      initial={{ opacity: 0, y: directionOffset[direction] }}
      transition={{ duration: 0.25, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...motionProps}
      {...props}
    >
      {children}
    </motion.div>
  )
}
