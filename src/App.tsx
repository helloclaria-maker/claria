import { Header } from './components/Header'
import { useSmoothScroll } from './hooks/useSmoothScroll'
import { BenefitsSection } from './sections/BenefitsSection'
import { ComparatorSection } from './sections/ComparatorSection'
import { DiscoverSection } from './sections/DiscoverSection'
import { FeaturesSection } from './sections/FeaturesSection'
import { FooterSection } from './sections/FooterSection'
import { HeroSection } from './sections/HeroSection'
import { NewProductsSection } from './sections/NewProductsSection'
import { WaitlistSection } from './sections/WaitlistSection'

function App() {
  useSmoothScroll()

  return (
    <div className="min-h-svh overflow-x-hidden bg-background">
      <Header />

      <main>
        <HeroSection />
        <FeaturesSection />
        <ComparatorSection />
        <NewProductsSection />
        <DiscoverSection />
        <BenefitsSection />
        <WaitlistSection />
      </main>

      <FooterSection />
    </div>
  )
}

export default App
