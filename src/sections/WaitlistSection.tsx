import { ClariaText } from '../components/ClariaText'
import { FadeIn } from '../components/FadeIn'
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
                ¿Quieres que los beneficios de tus productos aparezcan en{' '}
                <ClariaText>Claria</ClariaText>?
              </h2>

              <p className="body-large mx-auto mt-4 max-w-md lg:mx-0">
                Ayuda a tus clientes a descubrir, entender y aprovechar mejor
                los beneficios de los productos que ya tienen.
              </p>

              <div className="mt-8 lg:mt-10">
                <WaitlistCard
                  id="business-contact"
                  showSocialProof={false}
                />
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}
