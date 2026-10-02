import { Badge } from '../components/Badge'
import { FadeIn } from '../components/FadeIn'
import { Container } from '../components/Container'
import comparatorImg from '../assets/comparador.png'

export function ComparatorSection() {
  return (
    <section className="border-t border-border bg-background py-16 lg:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,45%)_minmax(0,55%)] lg:gap-16">
          <FadeIn className="max-w-md lg:max-w-lg">
            <Badge className="mb-5">Disponible en Claria</Badge>

            <h2 className="heading-section text-[1.75rem] sm:text-3xl lg:text-[2.5rem]">
              Compara productos y descubre cuál tiene los beneficios que más
              te importan.
            </h2>

            <p className="body-large mt-4 max-w-md lg:mt-5">
              ¿Buscas una tarjeta, un seguro u otro producto? Compara sus
              beneficios de forma sencilla y encuentra la opción que mejor
              se adapta a lo que estás buscando.
            </p>
          </FadeIn>

          <FadeIn delay={0.05}>
            <img
              src={comparatorImg}
              alt="Comparador de productos de Claria"
              className="h-auto w-full object-contain"
              loading="lazy"
              decoding="async"
            />
          </FadeIn>
        </div>
      </Container>
    </section>
  )
}
