import { ClariaText } from './ClariaText'
import { useWaitlistCount } from '../hooks/useWaitlistCount'

type SocialProofProps = {
  className?: string
}

export function SocialProof({ className = '' }: SocialProofProps) {
  const { count, isLoading } = useWaitlistCount()

  return (
    <p
      className={`text-sm leading-relaxed text-muted-foreground ${className}`}
      aria-live="polite"
    >
      Únete a más de{' '}
      <span
        className={`font-semibold tabular-nums text-foreground transition-opacity duration-200 ${isLoading ? 'opacity-50' : 'opacity-100'}`}
      >
        {count.toLocaleString('es-CO')}
      </span>{' '}
      <ClariaText>personas que ya esperan Claria.</ClariaText>
    </p>
  )
}
