import { useCallback, useState } from 'react'
import { submitToWaitlist } from '../lib/waitlist'

type WaitlistStatus = 'idle' | 'loading' | 'success' | 'error'

export function useWaitlist() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<WaitlistStatus>('idle')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const submit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()

      if (status === 'loading' || status === 'success') return

      setStatus('loading')
      setErrorMessage(null)

      try {
        const result = await submitToWaitlist({ email: email.trim() })

        if (!result.success) {
          setStatus('error')
          setErrorMessage(
            result.message ?? 'No pudimos registrarte. Intenta de nuevo.',
          )
          return
        }

        setStatus('success')
        setEmail('')
      } catch {
        setStatus('error')
        setErrorMessage(
          'No pudimos registrarte. Revisa tu conexión e intenta de nuevo.',
        )
      }
    },
    [email, status],
  )

  const reset = useCallback(() => {
    setStatus('idle')
    setErrorMessage(null)
  }, [])

  return {
    email,
    setEmail,
    status,
    errorMessage,
    submit,
    reset,
    isLoading: status === 'loading',
    isSuccess: status === 'success',
    isDisabled: status === 'loading' || status === 'success',
  }
}
