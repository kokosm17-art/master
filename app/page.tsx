import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { StoryboardBuilder } from "@/components/storyboard-builder"
import { FrameworkSection } from "@/components/framework-section"
import { StatsSection } from "@/components/stats-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <StoryboardBuilder />
      <FrameworkSection />
      <StatsSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
