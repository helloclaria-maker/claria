import { ShieldCheck } from 'lucide-react'
import { Container } from '../components/Container'

export function FooterSection() {
  return (
    <footer className="border-t border-border bg-background">
      <Container className="flex flex-col items-center justify-between gap-5 py-14 sm:flex-row">
        <div className="flex items-center gap-2.5 text-center text-sm font-normal text-muted-foreground sm:text-left">
          <ShieldCheck
            className="h-4 w-4 shrink-0 text-muted-foreground"
            aria-hidden="true"
          />
          Tu información está protegida y no la compartimos con nadie.
        </div>
        <div className="text-sm font-normal text-muted-foreground">
          © {new Date().getFullYear()} Claria
        </div>
      </Container>
    </footer>
  )
}
