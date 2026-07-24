"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Diamond, Smartphone, Music, Share2 } from "lucide-react"
import { useLanguage } from "./LanguageContext"

const icons = [Diamond, Smartphone, Music, Share2]



export function WhyChooseUs() {
  const { t } = useLanguage()

  return (
    <section className="py-12 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-8 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary text-sm font-bold tracking-widest uppercase mb-4"
          >
            {t.why.badge}
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-bold font-heading text-white"
          >
            {t.why.title1} <span className="text-primary">{t.why.titleHighlight}</span>
          </motion.h2>
          <div className="w-12 h-1 bg-primary mt-2"></div>
        </div>

        <div className="grid grid-cols-4 gap-3 lg:gap-6">
          {t.why.features.map((feature: any, index: number) => {
            const Icon = icons[index]
            return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass border border-white/10 bg-black/40 p-3 lg:p-8 rounded-2xl lg:rounded-3xl hover:bg-white/5 transition-colors group flex flex-col items-center text-center"
            >
              <div className="mb-3 lg:mb-6 text-primary">
                <Icon className="w-6 h-6 lg:w-10 lg:h-10" />
              </div>
              <h3 className="text-[10px] sm:text-xs lg:text-xl font-bold font-heading text-white mb-1 lg:mb-3 leading-tight">{feature.title}</h3>
              <p className="text-[8px] sm:text-[10px] lg:text-base text-muted-foreground leading-tight">{feature.description}</p>
            </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
