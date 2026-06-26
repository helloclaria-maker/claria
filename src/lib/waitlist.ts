export type WaitlistPayload = {
  email: string
}

export type WaitlistResponse = {
  success: boolean
  message?: string
}

export type WaitlistCountResponse = {
  count: number
}

const ENDPOINT =
  import.meta.env.VITE_WAITLIST_ENDPOINT ||
  "https://script.google.com/macros/s/AKfycbzzlkhKKoFyDePK1Wj8tyS2YXXtcMpW6tCUQPtsSfFHOMYGwOgceEt6YtoVpIWCIqwn1w/exec"
export const WAITLIST_DEFAULT_COUNT = 247

export async function submitToWaitlist(
  payload: WaitlistPayload,
): Promise<WaitlistResponse> {
  const email = payload.email.trim()

  if (!email) {
    return {
      success: false,
      message: 'Introduce un correo electrónico válido.',
    }
  }

  const response = await fetch(ENDPOINT, {
    method: 'POST',
    body: new URLSearchParams({ email }),
  })

  const raw = await response.text()
  let parsed: Record<string, unknown> | null = null

  if (raw) {
    try {
      parsed = JSON.parse(raw) as Record<string, unknown>
    } catch {
      parsed = null
    }
  }

  if (!response.ok) {
    const message =
      typeof parsed?.message === 'string'
        ? parsed.message
        : 'No pudimos registrarte. Intenta de nuevo.'
    return { success: false, message }
  }

  if (parsed && parsed.success === false) {
    return {
      success: false,
      message:
        typeof parsed.message === 'string'
          ? parsed.message
          : 'No pudimos registrarte. Intenta de nuevo.',
    }
  }

  return { success: true }
}

export async function fetchWaitlistCount(): Promise<number> {
  try {
    const response = await fetch(`${ENDPOINT}?action=count`)

    if (!response.ok) return WAITLIST_DEFAULT_COUNT

    const raw = await response.text()
    if (!raw) return WAITLIST_DEFAULT_COUNT

    const parsed = JSON.parse(raw) as WaitlistCountResponse

    if (typeof parsed.count === 'number' && parsed.count >= 0) {
      return parsed.count
    }

    return WAITLIST_DEFAULT_COUNT
  } catch {
    return WAITLIST_DEFAULT_COUNT
  }
}
