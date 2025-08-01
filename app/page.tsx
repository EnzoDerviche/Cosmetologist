"use client"

import { Navigation } from "@/components/navigation"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { ElectrotherapySection } from "@/components/electrotherapy-section"
import { AppointmentsSection } from "@/components/appointments-section"
import { ImageCarousel } from "@/components/image-carousel"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { FloatingSocial } from "@/components/floating-social"

export default function CosmetologistLanding() {
  const openWhatsApp = () => {
    window.open("https://wa.me/541149171027?text=Hola! Me gustaría agendar una consulta en Cosmetologist", "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
      <Navigation />
      <Header />
      <HeroSection onWhatsAppClick={openWhatsApp} />
      <ServicesSection/>
      <ElectrotherapySection/>
      <AppointmentsSection onWhatsAppClick={openWhatsApp} />
      <ImageCarousel />
      <ContactSection onWhatsAppClick={openWhatsApp} />
      <Footer />

      <FloatingSocial onWhatsAppClick={openWhatsApp} />
    </div>
  )
}
