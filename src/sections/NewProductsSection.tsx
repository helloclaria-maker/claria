import { Badge } from '../components/Badge'
import { FadeIn } from '../components/FadeIn'
import { Container } from '../components/Container'
import newProductsImg from '../assets/descubre.jpeg'

export function NewProductsSection() {
  return (
    <section className="border-t border-border bg-background py-16 lg:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,55%)_minmax(0,45%)] lg:gap-16">
          <FadeIn>
            <img
              src={newProductsImg}
              alt="Descubre nuevos productos con Claria"
              className="h-auto w-full object-contain"
              loading="lazy"
              decoding="async"
            />
          </FadeIn>

          <FadeIn delay={0.05} className="max-w-md lg:max-w-lg">
            <Badge className="mb-5">Próximamente</Badge>

            <h2 className="heading-section text-[1.75rem] sm:text-3xl lg:text-[2.5rem]">
              Descubre nuevos productos
            </h2>

            <p className="body-large mt-4 max-w-md lg:mt-5">
              Explora nuevos productos, conoce sus beneficios y descubre
              opciones que pueden adaptarse mejor a lo que necesitas.
            </p>
          </FadeIn>
        </div>
      </Container>
    </section>
  )
}
