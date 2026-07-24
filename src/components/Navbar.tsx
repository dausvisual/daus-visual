"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, MessageCircle, Globe } from "lucide-react"
import { Button } from "./ui/button"
import { useLanguage } from "./LanguageContext"

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [activeSection, setActiveSection] = React.useState("/")
  const pathname = usePathname()
  
  const { t, language, setLanguage } = useLanguage()

  const navLinks = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.paket, href: "#pricing" },
    { name: t.nav.portfolio, href: "#portfolio" },
    { name: t.nav.services, href: "#services" },
    { name: t.nav.testimonials, href: "#testimonials" },
    { name: t.nav.contact, href: "#contact" },
  ]

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Determine active section
      const sections = navLinks.map(link => link.href === "/" ? "home" : link.href.replace("#", ""))
      
      let current = "/"
      if (window.scrollY > 100) {
        for (let i = sections.length - 1; i >= 0; i--) {
          const sectionId = sections[i]
          const element = document.getElementById(sectionId)
          if (element) {
            const rect = element.getBoundingClientRect()
            if (rect.top <= 150) {
              current = navLinks[i].href
              break
            }
          }
        }
      }
      
      if (current !== activeSection) {
        setActiveSection(current)
      }
    }
    
    window.addEventListener("scroll", handleScroll)
    // Trigger once on mount
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [activeSection, navLinks])

  const toggleLanguage = () => {
    setLanguage(language === "id" ? "en" : "id")
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-4 glass" : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Image src="/image/logo.png" alt="Daus Visual" width={150} height={48} className="h-6 md:h-10 w-auto transition-transform group-hover:scale-105" style={{ width: 'auto' }} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors hover:text-white hover:bg-white/5 ${
                  isActive ? "text-white bg-white/10" : "text-muted-foreground"
                }`}
              >
                {link.name}
              </Link>
            )
          })}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 hover:bg-white/10 text-white text-sm font-medium transition-colors border border-white/10"
          >
            <Globe className="w-4 h-4" />
            {language.toUpperCase()}
          </button>

          <Button className="rounded-full bg-primary hover:bg-primary/90 text-white font-medium px-6 py-2">
            {t.nav.cta}
            <MessageCircle className="ml-2 w-4 h-4" />
          </Button>
        </div>

        {/* Mobile Menu Toggle & Lang */}
        <div className="flex items-center gap-3 md:hidden">
          <button 
            onClick={toggleLanguage}
            className="flex items-center justify-center w-9 h-9 rounded-full bg-white/5 text-white text-xs font-bold border border-white/10"
          >
            {language.toUpperCase()}
          </button>
          
          <button
            className="text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/60 backdrop-blur-2xl border-t border-white/10 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      isActive ? "bg-white/10 text-white" : "text-muted-foreground hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              })}
              <Button className="w-full mt-4 rounded-xl bg-primary hover:bg-primary/90 text-white font-medium py-3">
                {t.nav.cta}
                <MessageCircle className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

