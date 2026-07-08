"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ArrowRight, Play, Star, MessageCircle } from "lucide-react"
import Image from "next/image"
import { Button } from "./ui/button"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] mix-blend-screen opacity-50" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary w-fit mx-auto lg:mx-0 text-sm font-medium"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Premium Digital Invitations
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading tracking-tight leading-[1.1] text-white">
              Undangan Digital <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-400">
                Eksklusif
              </span> & Berkesan
            </h1>

            <p className="text-lg text-muted-foreground max-w-[600px] mx-auto lg:mx-0">
              Buat momen spesial Anda lebih elegan dengan undangan digital modern, interaktif, dan berkesan.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-wrap items-center gap-4 justify-center lg:justify-start mt-8"
            >
              <a href="https://wa.me/6285341866227" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center h-12 md:h-14 px-6 md:px-8 rounded-full bg-primary hover:bg-primary/90 text-white font-medium transition-all group w-full sm:w-auto">
                Buat Undangan Sekarang
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#portfolio" className="inline-flex items-center justify-center h-12 md:h-14 px-6 md:px-8 rounded-full border border-white/10 hover:bg-white/5 text-white font-medium transition-all group w-full sm:w-auto">
                <Play className="mr-2 w-4 h-4 group-hover:text-primary transition-colors" />
                Lihat Portfolio
              </a>
              
              <div className="flex items-center gap-3 w-full sm:w-auto justify-center mt-2 sm:mt-0">
                <a href="https://wa.me/6285341866227" target="_blank" rel="noreferrer" className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/10 bg-white/5 hover:bg-primary hover:border-primary hover:text-white flex items-center justify-center text-muted-foreground transition-all" aria-label="WhatsApp">
                  <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
                </a>
                <a href="https://www.instagram.com/daus_visual?igsh=NHVhMnBlbWNhd2c1" target="_blank" rel="noreferrer" className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/10 bg-white/5 hover:bg-primary hover:border-primary hover:text-white flex items-center justify-center text-muted-foreground transition-all" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-6 md:h-6">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Floating Phones */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[400px] md:h-[500px] lg:h-[700px] w-full perspective-[1000px] mt-12 lg:mt-0 flex items-center justify-center"
          >
            <div className="relative w-full h-full scale-[0.65] sm:scale-75 md:scale-100 origin-center flex items-center justify-center">
              {/* Phone 1 (Back) */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotateZ: [-5, -2, -5],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-1/2 left-1/2 -translate-x-[90%] md:-translate-x-[80%] -translate-y-[60%] w-[250px] h-[500px] rounded-[3rem] border-8 border-white/10 bg-black overflow-hidden shadow-2xl z-10 glass hidden sm:block"
              >
                <Image 
                  src="/image/theme-modern.png" 
                  alt="Invitation Mockup Modern" 
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover opacity-60"
                />
              </motion.div>

              {/* Phone 2 (Front/Main) */}
              <motion.div
                animate={{
                  y: [0, 20, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] md:-translate-x-[40%] w-[280px] h-[580px] rounded-[3rem] border-8 border-white/20 bg-black overflow-hidden shadow-[0_0_50px_rgba(255,26,26,0.2)] z-20"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-black rounded-b-xl z-30" />
                <Image 
                  src="/image/theme-luxury.png" 
                  alt="Invitation Mockup Luxury" 
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white font-heading font-bold text-xl">Luxury Edition</h3>
                  <p className="text-white/80 text-sm">Tema Premium VVIP</p>
                </div>
              </motion.div>

              {/* Phone 3 (Right) */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotateZ: [5, 2, 5],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute top-1/2 left-1/2 translate-x-[10%] md:translate-x-[5%] -translate-y-[55%] w-[230px] h-[480px] rounded-[3rem] border-8 border-white/10 bg-black overflow-hidden shadow-2xl z-10 glass hidden sm:block"
              >
                <Image 
                  src="/image/theme-rustic.png" 
                  alt="Invitation Mockup Rustic" 
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover opacity-60"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 border-t border-white/10 pt-10 pb-4 flex justify-center"
        >
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16 w-full max-w-4xl">
            <div className="flex flex-col items-center text-center gap-1">
              <h3 className="text-3xl font-bold font-heading text-white">50+</h3>
              <p className="text-muted-foreground text-sm">Klien Puas</p>
            </div>
            <div className="flex flex-col items-center text-center gap-1">
              <h3 className="text-3xl font-bold font-heading text-white">100+</h3>
              <p className="text-muted-foreground text-sm">Proyek Selesai</p>
            </div>
            <div className="flex flex-col items-center text-center gap-1">
              <h3 className="text-3xl font-bold font-heading text-white">5 Tahun</h3>
              <p className="text-muted-foreground text-sm">Pengalaman</p>
            </div>
            <div className="flex flex-col items-center text-center gap-1">
              <div className="flex items-center justify-center gap-2">
                <h3 className="text-3xl font-bold font-heading text-white">4.9</h3>
                <Star className="w-5 h-5 fill-primary text-primary" />
              </div>
              <p className="text-muted-foreground text-sm">Rating di Google</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
