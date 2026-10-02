import { ClariaText } from '../components/ClariaText'
import { Badge } from '../components/Badge'
import { Container } from '../components/Container'
import { FadeIn } from '../components/FadeIn'

import heroIllustration from '../assets/hero-illustration.png'
import appStoreBadge from '../assets/Download_on_the_App_Store_Badge_ES_RGB_blk_100217.svg'

const APP_STORE_URL =
  'https://apps.apple.com/co/app/claria-beneficios/id6796450134'

export function HeroSection() {
  return (
    <section className="relative bg-background">
      <Container className="relative pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,45%)] lg:gap-10 xl:gap-14">
          <div className="relative z-[2] text-center lg:text-left">
            <FadeIn immediate>
              <Badge className="mb-6 lg:mb-8">
                Ya disponible en iOS
              </Badge>
            </FadeIn>

            <FadeIn delay={0.05} immediate>
              <h1 className="heading-display text-[2rem] leading-[1.1] sm:text-[2.75rem] lg:text-[3.25rem] xl:text-[3.75rem]">
                Descubre los beneficios{' '}
                <span className="text-gradient-primary">que ya pagas…</span>{' '}
                <span className="block sm:inline">
                  y probablemente nunca has usado.
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.1} immediate>
              <p className="body-large mx-auto mt-5 max-w-[440px] lg:mx-0 lg:mt-6">
                Tarjetas de crédito, seguros, medicina prepagada, membresías y
                suscripciones incluyen beneficios que muchas personas nunca
                llegan a conocer. <ClariaText>Claria</ClariaText> los descubre
                por ti.
              </p>
            </FadeIn>

            <FadeIn delay={0.15} immediate>
              <div className="mt-8 flex flex-col items-center gap-3 lg:items-start">
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Descargar Claria en el App Store"
                  className="inline-block transition-transform duration-200 hover:scale-[1.03]"
                >
                  <img
                    src={appStoreBadge}
                    alt="Descargar en el App Store"
                    className="h-[52px] w-auto"
                  />
                </a>

                <p className="text-sm font-medium text-muted-foreground">
                  Comparador inteligente ya disponible · Android próximamente
                </p>
              </div>
            </FadeIn>
          </div>

          <div
            className="relative hidden min-h-[1px] lg:block"
            aria-hidden="true"
          >
            <img
              src={heroIllustration}
              alt=""
              className="pointer-events-none absolute top-1/2 right-[-200px] z-0 h-auto w-[500px] origin-right -translate-y-1/2 scale-[1.9] object-contain"
              decoding="async"
              fetchPriority="high"
            />
          </div>
        </div>

        <FadeIn
          immediate
          className="relative z-[2] mx-auto mt-12 max-w-lg lg:hidden"
        >
          <img
            src={heroIllustration}
            alt=""
            className="h-auto w-full object-contain"
            decoding="async"
            fetchPriority="high"
          />
        </FadeIn>
      </Container>
    </section>
  )
}
