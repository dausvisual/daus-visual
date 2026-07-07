"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ArrowRight, MonitorSmartphone, Video, Camera, Plane, PenTool, Scissors } from "lucide-react"
import { servicesData } from "@/lib/data"

const iconMap: Record<string, React.ElementType> = {
  MonitorSmartphone,
  Video,
  Camera,
  Plane,
  PenTool,
  Scissors,
}

export function Services() {
  return (
    <section id="services" className="py-24 bg-[#090909] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-[400px] bg-primary/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-[300px] bg-red-900/20 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            Layanan Kami
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold font-heading mb-4"
          >
            Provide <span className="text-primary">Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Berbagai layanan kreatif yang siap membantu mewujudkan ide menjadi karya visual terbaik dengan sentuhan profesional.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.icon] || MonitorSmartphone
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-[1px] rounded-2xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-border via-transparent to-primary/30 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative h-full bg-card/80 backdrop-blur-sm p-8 rounded-2xl flex flex-col items-center text-center gap-4 transition-transform duration-300 group-hover:-translate-y-1">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Icon className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-xl font-bold font-heading">{service.title}</h3>
                  <p className="text-muted-foreground text-sm flex-grow">
                    {service.description}
                  </p>
                  
                  <button className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:text-white transition-colors group/btn">
                    Pelajari Lebih Lanjut
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
