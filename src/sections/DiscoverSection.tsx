import { FadeIn } from '../components/FadeIn'
import { Container } from '../components/Container'
import discoverMapImg from '../assets/discover-map.png'

export function DiscoverSection() {
  return (
    <section className="border-t border-border bg-background py-16 lg:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,55%)_minmax(0,45%)] lg:gap-16">
          <FadeIn className="max-w-md lg:max-w-lg">
            <p className="section-label mb-4">Descubre</p>
            <h2 className="heading-section text-[1.75rem] sm:text-3xl lg:text-[2.5rem]">
              Descubre beneficios cerca de ti
            </h2>
            <p className="body-large mt-4 max-w-md lg:mt-5">
              Encuentra beneficios exclusivos disponibles en lugares como centros
              comerciales, aeropuertos, restaurantes, hoteles y muchos más.
            </p>
          </FadeIn>

          <FadeIn delay={0.05}>
            <img
              src={discoverMapImg}
              alt=""
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
