"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react"
import { useLanguage } from "./LanguageContext"

export function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-24 bg-[#111111] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
              {t.contact.badge}
            </div>

            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-white">
              {t.contact.title1} <br />
              <span className="text-primary">{t.contact.titleHighlight}</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
              {t.contact.desc}
            </p>

            <div className="grid grid-cols-3 gap-2 md:gap-6 mb-12">
              <div className="glass p-2 md:p-8 rounded-xl md:rounded-2xl border border-white/10 flex flex-col items-center text-center gap-2 md:gap-4 hover:bg-white/5 transition-colors">
                <div className="w-8 h-8 md:w-14 md:h-14 rounded-full bg-white/5 flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-4 h-4 md:w-6 md:h-6" />
                </div>
                <div className="flex flex-col flex-grow justify-start">
                  <h4 className="text-white font-bold text-[10px] md:text-base mb-1 md:mb-2 leading-tight">{t.contact.addressTitle}</h4>
                  <p className="text-muted-foreground text-[8px] md:text-sm leading-tight">{t.contact.addressDesc}</p>
                </div>
              </div>
              
              <div className="glass p-2 md:p-8 rounded-xl md:rounded-2xl border border-white/10 flex flex-col items-center text-center gap-2 md:gap-4 hover:bg-white/5 transition-colors">
                <div className="w-8 h-8 md:w-14 md:h-14 rounded-full bg-white/5 flex items-center justify-center text-primary shrink-0">
                  <Phone className="w-4 h-4 md:w-6 md:h-6" />
                </div>
                <div className="flex flex-col flex-grow justify-start">
                  <h4 className="text-white font-bold text-[10px] md:text-base mb-1 md:mb-2 leading-tight">{t.contact.phoneTitle}</h4>
                  <p className="text-muted-foreground text-[8px] md:text-sm leading-tight break-words">+6285341866227</p>
                </div>
              </div>
              
              <div className="glass p-2 md:p-8 rounded-xl md:rounded-2xl border border-white/10 flex flex-col items-center text-center gap-2 md:gap-4 hover:bg-white/5 transition-colors">
                <div className="w-8 h-8 md:w-14 md:h-14 rounded-full bg-white/5 flex items-center justify-center text-primary shrink-0">
                  <Mail className="w-4 h-4 md:w-6 md:h-6" />
                </div>
                <div className="flex flex-col flex-grow justify-start">
                  <h4 className="text-white font-bold text-[10px] md:text-base mb-1 md:mb-2 leading-tight">{t.contact.emailTitle}</h4>
                  <p className="text-muted-foreground text-[8px] md:text-sm leading-tight break-all">dausvisual<br className="md:hidden"/>@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Google Map Embedded */}
            <div className="w-full h-[300px] md:h-[450px] bg-white/5 rounded-3xl border border-white/10 overflow-hidden relative shadow-2xl">
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
