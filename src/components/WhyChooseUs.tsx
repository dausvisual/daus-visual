"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Gem, Zap, MonitorSmartphone, Headset, Wallet, Lightbulb } from "lucide-react"

const features = [
  {
    title: "Premium Quality",
    description: "Desain eksklusif dengan detail yang sangat diperhatikan untuk hasil yang mewah.",
    icon: Gem,
  },
  {
    title: "Fast Delivery",
    description: "Proses pengerjaan cepat dan tepat waktu tanpa mengurangi kualitas.",
    icon: Zap,
  },
  {
    title: "Responsive Design",
    description: "Tampil sempurna di semua perangkat, dari smartphone hingga desktop.",
    icon: MonitorSmartphone,
  },
  {
    title: "Professional Support",
    description: "Tim ahli yang siap membantu dan merevisi sesuai keinginan Anda.",
    icon: Headset,
  },
  {
    title: "Affordable Price",
    description: "Kualitas premium dengan harga yang masuk akal dan bersahabat.",
    icon: Wallet,
  },
  {
    title: "Creative Ideas",
    description: "Selalu menghadirkan konsep segar dan tidak pasaran untuk setiap klien.",
    icon: Lightbulb,
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#111111] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold font-heading mb-4 text-white"
          >
            Why <span className="text-primary">Choose Us</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            Kami memberikan nilai lebih dari sekadar desain. Komitmen kami adalah kepuasan Anda melalui keunggulan di setiap aspek layanan.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass p-8 rounded-3xl hover:bg-white/5 transition-colors group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:text-primary transition-colors text-white">
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold font-heading text-white mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
