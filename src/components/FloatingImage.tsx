import { motion } from 'framer-motion'

type FloatingImageProps = {
  src: string
  alt?: string
  className?: string
  animation?: 'float' | 'float-slow'
  priority?: boolean
}

export function FloatingImage({
  src,
  alt = '',
  className = '',
  animation = 'float',
  priority = false,
}: FloatingImageProps) {
  const duration = animation === 'float-slow' ? 9 : 7
  const distance = animation === 'float-slow' ? 5 : 6

  return (
    <motion.img
      src={src}
      alt={alt}
      aria-hidden={alt === '' ? true : undefined}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={priority ? 'high' : 'auto'}
      animate={{ y: [0, -distance, 0] }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className={`pointer-events-none h-auto max-w-full select-none ${className}`}
    />
  )
}
