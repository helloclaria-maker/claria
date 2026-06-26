import { ClariaText } from './ClariaText'
import { motion } from 'framer-motion'
import { CheckCircle2, Lock } from 'lucide-react'
import { Button } from './Button'
import { SocialProof } from './SocialProof'
import { useWaitlist } from '../hooks/useWaitlist'

type WaitlistFormProps = {
  id?: string
  autoFocus?: boolean
  showSocialProof?: boolean
  compact?: boolean
  layout?: 'stacked' | 'inline'
}

function LaunchOffer() {
  return (
    <div className="space-y-3 text-center lg:text-left">
      <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card px-3.5 py-1.5 text-xs font-medium text-foreground shadow-sm">
        🎁 Lanzamiento exclusivo
      </span>
      <p className="mx-auto max-w-[280px] text-sm font-bold leading-relaxed text-muted-foreground lg:mx-0 lg:max-w-sm">
        <ClariaText>
          Los primeros 1.000 usuarios recibirán un regalo exclusivo de Claria
          Premium cuando hagamos el lanzamiento oficial.
        </ClariaText>
      </p>
    </div>
  )
}

export function WaitlistForm({
  id,
  autoFocus = false,
  showSocialProof = true,
  compact = false,
  layout = 'stacked',
}: WaitlistFormProps) {
  const {
    email,
    setEmail,
    submit,
    isLoading,
    isSuccess,
    isDisabled,
    errorMessage,
  } = useWaitlist()

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="space-y-3 py-4 text-center lg:text-left"
        role="status"
      >
        <CheckCircle2 className="mx-auto h-8 w-8 text-success lg:mx-0" aria-hidden="true" />
        <p className="text-lg font-semibold tracking-tight text-foreground">
          ¡Estás en la lista!
        </p>
        <p className="text-sm leading-relaxed text-muted-foreground">
          <ClariaText>
            Te avisaremos cuando Claria esté lista. Gracias por confiar en
            nosotros.
          </ClariaText>
        </p>
      </motion.div>
    )
  }

  const isInline = layout === 'inline'

  return (
    <form
      id={id}
      className={compact ? 'space-y-4' : 'space-y-5'}
      onSubmit={submit}
      noValidate
    >
      {!compact && (
        <div className="space-y-2 text-center lg:text-left">
          <h3 className="text-lg font-semibold tracking-tight text-foreground">
            Únete al acceso anticipado
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            <ClariaText>
              Déjanos tu correo y te avisaremos cuando Claria esté lista.
            </ClariaText>
          </p>
        </div>
      )}

      {showSocialProof && <SocialProof />}

      <LaunchOffer />

      <div className={isInline ? 'flex flex-col gap-3 sm:flex-row sm:items-start' : 'space-y-3'}>
        <input
          type="email"
          required
          autoFocus={autoFocus}
          placeholder="tu@correo.com"
          maxLength={255}
          value={email}
          disabled={isDisabled}
          onChange={(event) => setEmail(event.target.value)}
          aria-label="Correo electrónico"
          aria-invalid={errorMessage ? true : undefined}
          className="focus-ring input-premium sm:min-w-0 sm:flex-1"
        />

        <Button
          type="submit"
          showArrow
          disabled={isDisabled}
          className={isInline ? 'h-[52px] shrink-0 rounded-xl px-6 sm:w-auto' : 'w-full'}
        >
          {isLoading ? 'Enviando…' : 'Quiero acceso anticipado'}
        </Button>
      </div>

      {errorMessage && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="text-sm text-error"
          role="alert"
        >
          {errorMessage}
        </motion.p>
      )}

      <p className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground lg:justify-start">
        <Lock className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
        Tu información está protegida. No compartimos tu correo.
      </p>
    </form>
  )
}
