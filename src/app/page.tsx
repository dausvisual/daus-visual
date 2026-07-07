import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { Projects } from "@/components/Projects"
import { Services } from "@/components/Services"
import { Pricing } from "@/components/Pricing"
import { About } from "@/components/About"
import { WhyChooseUs } from "@/components/WhyChooseUs"
import { Testimonials } from "@/components/Testimonials"
import { Faq } from "@/components/Faq"
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
        <About />
        <WhyChooseUs />
        <Pricing />
        <Projects initialProjects={projectsData} />
        <Services />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
