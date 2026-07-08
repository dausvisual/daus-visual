"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { MessageCircle } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-white/10 pt-16 pb-8 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[200px] bg-primary/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* CTA Block */}
        <div className="bg-[#0f0f0f] rounded-3xl p-8 md:p-12 mb-20 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-white mb-2">
              Siap Membuat Undangan <br className="hidden md:block" />
              Digital Impian Anda?
            </h2>
            <p className="text-muted-foreground">
              Konsultasikan kebutuhan Anda sekarang juga.
            </p>
          </div>
          <a 
            href="https://wa.me/6285341866227" 
            target="_blank" 
            rel="noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-full font-bold transition-all duration-300 shadow-[0_0_20px_rgba(229,16,16,0.4)]"
          >
            Hubungi Kami di WhatsApp
            <MessageCircle className="w-5 h-5 ml-1" />
          </a>
        </div>

        <div className="flex justify-center md:justify-start mb-12">
          {/* Brand */}
          <div className="space-y-4 max-w-sm text-center md:text-left">
            <Link href="/" className="inline-block mb-4">
              <Image src="/image/logo.png" alt="Daus Visual" width={180} height={64} className="h-14 md:h-16 w-auto mx-auto md:mx-0" />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Solusi kreatif untuk kebutuhan visual Anda. Kami hadir untuk memberikan hasil terbaik dengan sentuhan elegan dan profesional.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-4">
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
