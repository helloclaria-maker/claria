import { useEffect } from 'react'

export function useSmoothScroll() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement | null

      if (!anchor) return

      const id = anchor.getAttribute('href')?.slice(1)
      if (!id) return

      const element = document.getElementById(id)
      if (!element) return

      event.preventDefault()
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])
}
