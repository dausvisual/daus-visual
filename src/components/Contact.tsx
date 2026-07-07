"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Send, MessageCircle } from "lucide-react"
import { Button } from "./ui/button"

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#111111] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Left: Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
              Hubungi Kami
            </div>

            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-white">
              Mari Berkolaborasi <br />
              <span className="text-primary">Bersama Kami</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-10">
              Punya pertanyaan atau ingin mendiskusikan proyek Anda? Jangan ragu untuk menghubungi kami. Tim Daus Visual siap melayani Anda dengan sepenuh hati.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Alamat Studio</h4>
                  <p className="text-muted-foreground">Bulukumba, Sulawesi Selatan, Indonesia</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Telepon / WhatsApp</h4>
                  <p className="text-muted-foreground">+62 85341866227</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Email</h4>
                  <p className="text-muted-foreground">dausvisual@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Google Map Embedded */}
            <div className="w-full h-64 md:h-80 bg-white/5 rounded-2xl border border-white/10 overflow-hidden relative">
              <iframe
                src="https://maps.google.com/maps?q=Ujung%20Bulu,%20Bulukumba,%20Sulawesi%20Selatan&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              ></iframe>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass p-8 md:p-10 rounded-3xl h-full border border-white/10">
              <h3 className="text-2xl font-bold font-heading text-white mb-6">Kirim Pesan</h3>
              <form className="space-y-6 flex flex-col h-full">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-white/80">Nama Lengkap</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Masukkan nama Anda"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-white/80">Alamat Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Masukkan email Anda"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-white/80">Nomor Telepon / WA</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Masukkan nomor Anda"
                  />
                </div>
                <div className="space-y-2 flex-grow">
                  <label htmlFor="message" className="text-sm font-medium text-white/80">Pesan Anda</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder="Ceritakan detail proyek atau pertanyaan Anda..."
                  ></textarea>
                </div>
                <Button size="lg" variant="gradient" className="w-full group py-6 text-base">
                  Kirim Pesan
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/6285341866227"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:scale-110 transition-transform z-50 cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-ping" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-background" />
      </a>
    </section>
  )
}
