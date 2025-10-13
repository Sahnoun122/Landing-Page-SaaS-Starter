import { Header } from "@/components/sections/header"
import { HeroSection } from "@/components/sections/hero"
import { FeaturesSection } from "@/components/sections/features"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { PricingSection } from "@/components/sections/pricing"
import { FAQSection } from "@/components/sections/faq"
import { CTASection } from "@/components/sections/cta"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-mesh" suppressHydrationWarning={true}>
      <Header />
      <main className="relative">
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
