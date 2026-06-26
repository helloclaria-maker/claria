import { ClariaText } from '../components/ClariaText'
import { Badge } from '../components/Badge'
import { FadeIn } from '../components/FadeIn'
import { ProductBenefitCard } from '../components/ProductBenefitCard'
import { SectionBackdrop } from '../components/SectionBackdrop'
import { Container } from '../components/Container'
import { PRODUCT_BENEFITS } from '../lib/constants'
import walletImg from '../assets/3d-wallet.png'

export function BenefitsSection() {
  return (
    <section className="relative overflow-hidden border-t border-border bg-background py-16 lg:py-24">
      <SectionBackdrop src={walletImg} />

      <Container className="relative z-10">
        <div className="max-w-xl lg:max-w-full">
          <FadeIn>
            <Badge className="mb-5">La visión</Badge>
          </FadeIn>

          <FadeIn delay={0.05}>
            <h2 className="heading-section text-pretty text-[1.75rem] text-foreground sm:text-3xl lg:max-w-[85%] lg:text-[2.5rem]">
              <ClariaText>
                Claria organiza todos los beneficios incluidos en los productos
                que ya pagas para que puedas encontrarlos y aprovecharlos justo
                cuando los necesites.
              </ClariaText>
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-[15px] lg:mt-5 lg:max-w-full">
              Encuentra en segundos el WhatsApp, teléfono o correo de contacto
              de cada beneficio. Olvídate de buscar entre aplicaciones, páginas
              web o documentos cuando necesites hacer una consulta o solicitar
              un servicio.
            </p>
          </FadeIn>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {PRODUCT_BENEFITS.map((product, index) => (
            <FadeIn key={product.id} delay={0.05 + index * 0.03}>
              <ProductBenefitCard product={product} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  )
}
