import { useEffect } from "react"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import HeroSection from "@/components/sections/HeroSection"
import AboutSection from "@/components/sections/AboutSection"
import HistorySection from "@/components/sections/HistorySection"
import CaseSection from "@/components/sections/CaseSection"
import ValuesSection from "@/components/sections/ValuesSection"
import ServicesSection from "@/components/sections/ServicesSection"
import BenefitsSection from "@/components/sections/BenefitsSection"
import ContactSection from "@/components/sections/ContactSection"
import WhatsAppButton from "@/components/ui/whatsapp-button"
import { initializeScrollAnimations } from "@/lib/scroll"

const Index = () => {
  useEffect(() => {
    // Initialize smooth scroll and animations when component mounts
    initializeScrollAnimations()
  }, [])

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <HeroSection />
        <AboutSection />
        <HistorySection />
        <CaseSection />
        <ValuesSection />
        <ServicesSection />
        <BenefitsSection />
        <ContactSection />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default Index