"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { faqData } from "@/lib/data"
import { useLanguage } from "./LanguageContext"

function AccordionItem({ 
  question, 
  answer, 
  isOpen, 
  onClick 
}: { 
  question: string, 
  answer: string, 
  isOpen: boolean, 
  onClick: () => void 
}) {
  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
      >
        <h3 className={`text-lg font-medium transition-colors ${isOpen ? 'text-primary' : 'text-white group-hover:text-white/80'}`}>
          {question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="ml-4 shrink-0 text-muted-foreground group-hover:text-white"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-muted-foreground leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function Faq() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0)
  const { t, language } = useLanguage()

  return (
    <section id="faq" className="py-24 bg-[#090909] relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-4"
            >
              {t.faq.badge}
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold font-heading mb-4 text-white"
            >
              {t.faq.title1} <span className="text-primary">{t.faq.titleHighlight}</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-6 md:p-10"
          >
            {faqData.map((faq, index) => (
              <AccordionItem
                key={faq.id}
                question={language === "id" ? faq.question : faq.question_en || faq.question}
                answer={language === "id" ? faq.answer : faq.answer_en || faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}
