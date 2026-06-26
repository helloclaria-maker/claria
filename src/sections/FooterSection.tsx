import { Mail, ShieldCheck } from 'lucide-react'
import { Container } from '../components/Container'

export function FooterSection() {
  return (
    <footer className="border-t border-border bg-background">
      <Container className="flex flex-col items-center justify-between gap-5 py-14 sm:flex-row">
        <div className="flex flex-col items-center gap-2 text-center sm:items-start sm:text-left">
          <div className="flex items-center gap-2.5 text-sm font-normal text-muted-foreground">
            <ShieldCheck
              className="h-4 w-4 shrink-0 text-muted-foreground"
              aria-hidden="true"
            />
            Tu información está protegida y no la compartimos con nadie.
          </div>
          <div className="flex items-center gap-2.5 text-sm font-normal text-muted-foreground">
            <Mail
              className="h-[17px] w-[17px] shrink-0 text-muted-foreground"
              aria-hidden="true"
            />
            <a
              href="mailto:helloclaria@gmail.com"
              className="transition-colors duration-200 hover:text-foreground"
            >
              helloclaria@gmail.com
            </a>
          </div>
        </div>
        <div className="text-sm font-normal text-muted-foreground">
          © {new Date().getFullYear()} Claria
        </div>
      </Container>
    </footer>
  )
}
