import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Philosophy } from "@/components/philosophy"
import { SignatureDishes } from "@/components/signature-dishes"
import { Experience } from "@/components/experience"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <Philosophy />
      <SignatureDishes />
      <Experience />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
