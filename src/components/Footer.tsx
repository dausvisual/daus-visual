"use client"

import * as React from "react"
import Link from "next/link"
import { Video } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-white/10 pt-16 pb-8 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[200px] bg-primary/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 group mb-6 w-fit">
              <img src="/image/logo.png" alt="Daus Visual" className="h-14 md:h-16 w-auto" />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Solusi kreatif untuk kebutuhan visual Anda. Kami hadir untuk memberikan hasil terbaik dengan sentuhan elegan dan profesional.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /></svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 7.1C2.5 7.1 2.5 5 4.5 5c1.5 0 7.5 0 7.5 0s6 0 7.5 0c2 0 2 2.1 2 2.1S22 9.2 22 12s0 4.9 0 4.9-0.5 2.1-2.5 2.1c-1.5 0-7.5 0-7.5 0s-6 0-7.5 0C2.5 19 2.5 16.9 2.5 16.9S2 14.8 2 12s0.5-4.9 0.5-4.9z" /><polygon points="9.5,15.5 15.5,12 9.5,8.5" /></svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3.81l.19-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 font-heading">Navigasi</h4>
            <ul className="space-y-3">
              {['Home', 'Portfolio', 'Services', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={item === 'Home' ? '/' : `/#${item.toLowerCase()}`} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6 font-heading">Layanan</h4>
            <ul className="space-y-3">
              {['Undangan Digital', 'Videografi', 'Fotografi', 'Drone Pilot', 'Desain Grafis', 'Editing'].map((item) => (
                <li key={item}>
                  <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6 font-heading">Kontak</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="font-medium text-white/80 w-16 shrink-0">Tel/WA:</span>
                +62 853-4186-6227
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="font-medium text-white/80 w-16 shrink-0">Email:</span>
                [dausvisual@gmail.com]
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="font-medium text-white/80 w-16 shrink-0">Alamat:</span>
                Bulukumba, Sulawesi Selatan, Indonesia
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-xs text-muted-foreground">
          <p>&copy; {currentYear} Daus Visual Creative Industry. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
