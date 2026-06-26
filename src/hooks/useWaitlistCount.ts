import { useEffect, useState } from 'react'
import { fetchWaitlistCount, WAITLIST_DEFAULT_COUNT } from '../lib/waitlist'

export function useWaitlistCount() {
  const [count, setCount] = useState(WAITLIST_DEFAULT_COUNT)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let cancelled = false

    fetchWaitlistCount()
      .then((value) => {
        if (!cancelled) setCount(value)
      })
      .finally(() => {
        if (!cancelled) setIsLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [])

  return { count, isLoading }
}
