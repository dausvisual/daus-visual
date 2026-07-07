"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ArrowRight, Play } from "lucide-react"
import { Button } from "./ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-red-900/20 rounded-full blur-[150px] mix-blend-screen opacity-50" />
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

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading tracking-tight leading-[1.1]">
              Create Beautiful <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-red-100 to-primary">
                Digital Invitations
              </span> <br className="hidden lg:block" />
              That Tell Your Story
            </h1>

            <p className="text-lg text-muted-foreground max-w-[600px] mx-auto lg:mx-0">
              Ubah momen spesial Anda menjadi mahakarya digital. Undangan modern, elegan, dan interaktif yang akan memukau tamu Anda sejak pandangan pertama.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mt-4"
            >
              <Button size="lg" variant="gradient" className="w-full sm:w-auto group">
                Buat Undangan Sekarang
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto group rounded-full border-white/10 hover:bg-white/5">
                <Play className="mr-2 w-4 h-4 group-hover:text-primary transition-colors" />
                Lihat Portofolio
              </Button>
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
                <img 
                  src="/image/theme-modern.png" 
                  alt="Invitation Mockup Modern" 
                  className="w-full h-full object-cover opacity-60"
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
                <img 
                  src="/image/theme-luxury.png" 
                  alt="Invitation Mockup Luxury" 
                  className="w-full h-full object-cover"
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
                <img 
                  src="/image/theme-rustic.png" 
                  alt="Invitation Mockup Rustic" 
                  className="w-full h-full object-cover opacity-60"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
