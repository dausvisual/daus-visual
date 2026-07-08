"use client"

import * as React from "react"
import { motion } from "framer-motion"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { Star, Quote, User } from "lucide-react"
import { testimonialsData } from "@/lib/data"

export function Testimonials() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 5000, stopOnInteraction: true })]
  )

  return (
    <section id="testimonials" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary text-sm font-bold tracking-widest uppercase mb-4"
          >
            TESTIMONIAL
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold font-heading mb-4 text-white"
          >
            Apa Kata <span className="text-primary">Mereka?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            Kepuasan klien adalah prioritas utama kami. Berikut adalah cerita bahagia mereka setelah bekerja sama dengan Daus Visual.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden cursor-grab active:cursor-grabbing"
          ref={emblaRef}
        >
          <div className="flex -ml-4">
            {testimonialsData.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4"
              >
                <div className="glass p-8 rounded-3xl h-full flex flex-col relative group hover:border-primary/50 transition-colors bg-[#0f0f0f]">
                  
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center overflow-hidden">
                      {/* Placeholder for user image */}
                      <User className="w-6 h-6 text-white/70" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white font-heading">{testimonial.name}</h4>
                      <p className="text-xs text-muted-foreground">Client Invitation</p>
                    </div>
                  </div>
                  
                  <p className="text-white/80 text-sm leading-relaxed mb-6 flex-grow italic">
                    "{testimonial.review}"
                  </p>
                  
                  <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/5">
                    <span className="font-bold text-white text-sm">5.0</span>
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-4 h-4 fill-primary text-primary" 
                        />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground font-medium ml-auto">G</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
