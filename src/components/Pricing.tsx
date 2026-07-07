"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Check, ArrowRight, ExternalLink } from "lucide-react"

const packages = [
  {
    id: 1,
    name: "PAKET BASIC",
    description: "Cocok untuk undangan simple yang elegan",
    features: [
      "Bisa kirim unlimited ke tamu",
      "Tidak Bisa Custom/Ganti Nama Tamu",
      "Musik : Marry Your Doughter (Tidak Autoplay)",
      "Album 5 Foto",
      "Navigasi Lokasi/Maps",
      "Hitung Mundur",
      "Kolom Ucapan Selamat",
      "Teks bisa disesuaikan",
      "Hanya Bisa Tema Rustic dan Adat",
    ],
    popular: false,
  },
  {
    id: 2,
    name: "PAKET VIP",
    description: "Lebih eksklusif dengan musik autoplay",
    features: [
      "Semua Fitur Basic",
      "Tulis Nama Tamu Unlimited di Website",
      "Musik Latar Autoplay",
      "Album 10 Foto",
      "Gratis Undangan JPEG",
      "Hanya Bisa Tema Rustic dan Adat",
    ],
    popular: false,
  },
  {
    id: 3,
    name: "PAKET VVIP",
    description: "Paket lengkap dengan fitur premium",
    features: [
      "Semua Fitur Basic dan VIP",
      "Tulis Nama Tamu Unlimited di Website",
      "Request musik sesukamu",
      "Fitur Pengingat Tamu",
      "Album 15 Foto",
      "RSVP (Konfirmasi kehadiran by WA)",
      "Love Story (opsional)",
      "Video Prewed / Live (opsional)",
      "Kirim Kado/Nomor Rekening",
      "Bonus Undangan Video / Filter IG",
      "Gratis Undangan JPEG",
    ],
    popular: true,
  },
  {
    id: 4,
    name: "TEMA PREMIUM",
    description: "Custom desain sesuai keinginan Anda",
    features: [
      "Semua Fitur VVIP",
      "Bebas Custom Sesuai keinginan",
      "Revisi Prioritas",
      "Desain Eksklusif",
    ],
    popular: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            Digital Invitation
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold font-heading mb-4 text-white"
          >
            Fitur <span className="text-primary">Undangan Digital</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Pilih paket undangan digital yang paling sesuai dengan kebutuhan acara spesial Anda. Kami menawarkan berbagai fitur unggulan untuk mempermudah momen bahagia Anda.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative glass p-8 rounded-3xl flex flex-col ${
                pkg.popular 
                  ? "border-primary/50 shadow-[0_0_30px_rgba(255,26,26,0.15)] -translate-y-2 bg-gradient-to-b from-primary/5 to-transparent" 
                  : "border-white/5 hover:border-white/20 transition-colors"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-xs font-bold rounded-full shadow-lg">
                  PALING DIMINATI
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-xl font-bold font-heading text-white mb-2">{pkg.name}</h3>
                <p className="text-muted-foreground text-sm">{pkg.description}</p>
              </div>

              <div className="flex-grow">
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex gap-3 text-sm text-white/80">
                      <Check className="w-5 h-5 text-primary shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a 
                href="#contact" 
                className={`w-full py-3 rounded-xl text-center text-sm font-medium transition-all duration-300 ${
                  pkg.popular 
                    ? "bg-primary text-white hover:shadow-[0_0_20px_rgba(255,26,26,0.4)]" 
                    : "bg-white/5 text-white hover:bg-white/10"
                }`}
              >
                Pilih Paket
              </a>
            </motion.div>
          ))}
        </div>

        {/* Template Link Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto glass rounded-3xl p-8 md:p-12 border border-primary/20 bg-gradient-to-r from-primary/5 to-transparent flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div>
            <h3 className="text-2xl font-bold text-white mb-2 font-heading">Eksplorasi Desain Template Kami</h3>
            <p className="text-muted-foreground">Temukan ratusan tema undangan digital yang bisa disesuaikan dengan konsep acara Anda. Dari yang modern, minimalis, hingga tradisional.</p>
          </div>
          <a 
            href="https://sabdacinta.com/Daus-Visual-" 
            target="_blank" 
            rel="noreferrer"
            className="group shrink-0 inline-flex items-center gap-2 px-6 py-4 bg-white text-black hover:bg-gray-200 rounded-full font-bold transition-all duration-300"
          >
            Lihat Template
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
