"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, MessageCircle } from "lucide-react"
import { Button } from "./ui/button"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Paket", href: "#pricing" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Services", href: "#services" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [activeSection, setActiveSection] = React.useState("/")
  const pathname = usePathname()

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
  }, [activeSection])

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
          <Image src="/image/logo.png" alt="Daus Visual" width={150} height={48} className="h-10 md:h-12 w-auto transition-transform group-hover:scale-105" />
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
          <Button className="rounded-full bg-primary hover:bg-primary/90 text-white font-medium px-6 py-2">
            Hubungi Saya
            <MessageCircle className="ml-2 w-4 h-4" />
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/5 overflow-hidden"
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
                Hubungi Saya
                <MessageCircle className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
