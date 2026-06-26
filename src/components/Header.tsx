import { ArrowRight } from 'lucide-react'
import { Container } from './Container'
import logoClaria from '../assets/logo-claria.png'

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background/90 backdrop-blur-md">
      <Container className="flex items-center justify-between py-5 lg:py-6">
        <a href="#" className="focus-ring inline-flex items-center">
          <img
            src={logoClaria}
            alt="Claria"
            className="h-[56px] w-auto"
          />
        </a>

        <a
          href="#waitlist"
          className="focus-ring btn-primary-gradient inline-flex h-11 items-center gap-2 rounded-xl px-5 text-sm font-semibold text-primary-foreground"
        >
          Acceso anticipado
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </Container>
    </header>
  )
}
