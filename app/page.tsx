import Header from "components/Header"
import Hero from "components/Hero"
import ProductModules from "components/ProductModules"
import AISection from "components/AISection"
import Solutions from "components/Solutions"
import ResultsBand from "components/ResultsBand"
import Footer from "components/Footer"
import { StickyCTA } from "components/StickyCTA"

export default function Page() {
  return (
    <main>
      <Hero />
      <ProductModules />
      <AISection />
      <Solutions />
      <ResultsBand />
      <StickyCTA />
    </main>
  )
}