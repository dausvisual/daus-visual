"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Package, FileText, PenTool, CheckCircle } from "lucide-react"

const steps = [
  {
    title: "Pilih Paket",
    description: "Pilih paket yang sesuai dengan kebutuhan Anda",
    icon: Package,
  },
  {
    title: "Kirim Data",
    description: "Kirim data, foto, teks dan detail acara",
    icon: FileText,
  },
  {
    title: "Proses Desain",
    description: "Kami desain sesuai kebutuhan Anda",
    icon: PenTool,
  },
  {
    title: "Revisi & Selesai",
    description: "Revisi (jika ada) dan undangan siap digunakan!",
    icon: CheckCircle,
  },
]

export function OrderProcess() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary text-sm font-bold tracking-widest uppercase mb-4"
          >
            PROSES PEMESANAN
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold font-heading mb-4 text-white"
          >
            Mudah, Cepat & Terstruktur
          </motion.h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-white/10 border-t-2 border-dashed border-white/20 -z-10" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center relative"
              >
                <div className="w-24 h-24 rounded-full bg-background border-[8px] border-background flex items-center justify-center mb-6 relative z-10 group cursor-default">
                  <div className="absolute inset-0 bg-primary/20 rounded-full group-hover:scale-110 transition-transform duration-300" />
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-[0_0_20px_rgba(229,16,16,0.4)] relative z-10">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold font-heading text-white mb-2">{index + 1}. {step.title}</h3>
                <p className="text-muted-foreground text-sm max-w-[200px]">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
