import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ImageCarousel } from '@/components/image-carousel'
import { AboutSection } from '@/components/about-section'
import { ServicesSection } from '@/components/services-section'
import { WorksSection } from '@/components/works-section'
import { ContactSection } from '@/components/contact-section'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <ImageCarousel />
        <AboutSection />
        <ServicesSection />
        <WorksSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

