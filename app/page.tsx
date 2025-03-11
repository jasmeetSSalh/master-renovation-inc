import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import Projects from "@/components/projects"
import Services from "@/components/services"
import AboutUs from "@/components/about-us"
import ContactUs from "@/components/contact-us"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <HeroSection />
      <AboutUs />      
      <Services />
      <Projects />
      <ContactUs />
      
    </main>
  )
}

