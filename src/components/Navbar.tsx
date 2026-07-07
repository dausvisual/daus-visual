"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Video } from "lucide-react"
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
  const pathname = usePathname()

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-4 glass border-b border-white/5" : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <img src="/image/logo.png" alt="Daus Visual" className="h-10 md:h-12 w-auto transition-transform group-hover:scale-105" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (pathname === '/' && link.href === '/')
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors hover:text-white hover:bg-white/5 ${
                  isActive ? "text-white" : "text-muted-foreground"
                }`}
              >
                {link.name}
              </Link>
            )
          })}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="gradient" className="rounded-full">
            Hubungi Saya
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
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-sm font-medium text-muted-foreground hover:text-white hover:bg-white/5 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Button variant="gradient" className="w-full mt-4 rounded-xl">
                Hubungi Saya
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
