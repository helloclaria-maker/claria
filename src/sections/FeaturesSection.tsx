import { FadeIn } from '../components/FadeIn'
import { FeatureCard } from '../components/FeatureCard'
import { SectionBackdrop } from '../components/SectionBackdrop'
import { Container } from '../components/Container'
import { FEATURES } from '../lib/constants'
import shoppingImg from '../assets/3d-shopping.png'

export function FeaturesSection() {
  return (
    <section className="relative overflow-hidden border-t border-border bg-background py-16 lg:py-24">
      <SectionBackdrop src={shoppingImg} />

      <Container className="relative z-10">
        <FadeIn className="max-w-md lg:max-w-lg">
          <p className="section-label mb-4">El problema</p>
          <h2 className="heading-section text-[1.75rem] sm:text-3xl lg:text-[2.5rem]">
            Probablemente ya pagas beneficios como estos sin siquiera saber que
            existen.
          </h2>
        </FadeIn>

        <div className="mt-12 grid grid-cols-2 gap-4 md:gap-5 lg:mt-14 lg:grid-cols-4">
          {FEATURES.map((feature, index) => (
            <FadeIn key={feature.title} delay={index * 0.03} className="min-w-0">
              <FeatureCard
                image={feature.image}
                title={feature.title}
                description={feature.description}
              />
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.1} className="mt-12 lg:mt-14">
          <p className="max-w-md text-[13px] leading-[1.7] font-normal text-muted-foreground">
            Estos son solo algunos ejemplos de beneficios que millones de
            personas ya pagan y casi nunca aprovechan.
          </p>
        </FadeIn>
      </Container>
    </section>
  )
}
