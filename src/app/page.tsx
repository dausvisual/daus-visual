import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { Projects } from "@/components/Projects"
import { Services } from "@/components/Services"
import { Pricing } from "@/components/Pricing"
import { Testimonials } from "@/components/Testimonials"
import { WhyChooseUs } from "@/components/WhyChooseUs"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"
import { getEnrichedPortfolioData } from "@/lib/data"

export default async function Home() {
  const projectsData = await getEnrichedPortfolioData()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Pricing />
        <Projects initialProjects={projectsData} />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
