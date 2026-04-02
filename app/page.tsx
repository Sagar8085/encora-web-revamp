import Header from "components/Header"
import Hero from "components/Hero"
import ProductModules from "components/ProductModules"
import AISection from "components/AISection"
import Solutions from "components/Solutions"
import ResultsBand from "components/ResultsBand"
import ComparisonSection from "components/ComparisonSection"
import CTASection from "components/CTASection"
import Footer from "components/Footer"
import { StickyCTA } from "components/StickyCTA"

export default function Page() {
  return (
    <main>
      <Hero />
      <ProductModules />
      <AISection />
      <ComparisonSection />
      <Solutions />
      <ResultsBand />
      <CTASection />
      <StickyCTA />
    </main>
  )
}