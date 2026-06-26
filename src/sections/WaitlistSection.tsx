import { FadeIn } from '../components/FadeIn'
import { SocialProof } from '../components/SocialProof'
import { WaitlistCard } from '../components/WaitlistCard'
import { Container } from '../components/Container'

export function WaitlistSection() {
  return (
    <section className="border-t border-border py-16 lg:py-24">
      <Container size="narrow">
        <FadeIn>
          <div className="rounded-3xl border border-border bg-accent px-6 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
            <div className="mx-auto max-w-xl text-center lg:text-left">
              <h2 className="heading-section text-2xl sm:text-3xl lg:text-[2rem]">
                Sé de los primeros en usar Claria.
              </h2>
              <p className="body-large mx-auto mt-4 max-w-md lg:mx-0">
                Únete a la lista de espera y obtén acceso anticipado al
                lanzamiento de Claria.
              </p>

              <SocialProof className="mx-auto mt-6 justify-center lg:mx-0 lg:justify-start" />

              <div className="mt-8 lg:mt-10">
                <WaitlistCard id="waitlist-final" showSocialProof={false} />
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}
