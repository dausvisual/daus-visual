import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { Projects } from "@/components/Projects"
import { Services } from "@/components/Services"
import { Pricing } from "@/components/Pricing"
import { Testimonials } from "@/components/Testimonials"
import { OrderProcess } from "@/components/OrderProcess"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"
import { WhyChooseUs } from "@/components/WhyChooseUs"
import { getEnrichedPortfolioData } from "@/lib/data"

export default async function Home() {
  const projectsData = await getEnrichedPortfolioData()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyChooseUs />
        <Projects initialProjects={projectsData} />
        <Pricing />
        <Services />
        <OrderProcess />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
