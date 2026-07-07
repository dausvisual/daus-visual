"use client"

import * as React from "react"
import { motion, useInView } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

function Counter({ from, to, duration = 2, suffix = "" }: { from: number, to: number, duration?: number, suffix?: string }) {
  const [count, setCount] = React.useState(from)
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  React.useEffect(() => {
    if (isInView) {
      let startTime: number
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
        setCount(Math.floor(progress * (to - from) + from))
        if (progress < 1) {
          window.requestAnimationFrame(step)
        }
      }
      window.requestAnimationFrame(step)
    }
  }, [isInView, from, to, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

export function About() {
  return (
    <section id="about" className="py-24 bg-background relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Profile & Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 glass">
              <img 
                src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070&auto=format&fit=crop" 
                alt="Daus Visual Studio" 
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8 bg-black/50 backdrop-blur-md border border-white/10 p-6 rounded-2xl">
                <h3 className="text-xl font-bold font-heading text-white mb-2">Our Vision</h3>
                <p className="text-white/80 text-sm">Menjadi pionir inovasi visual dan digital invitation di Indonesia yang menginspirasi banyak orang.</p>
              </div>
            </div>
            
            {/* Decor */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/20 blur-2xl rounded-full mix-blend-screen" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-red-900/40 blur-2xl rounded-full mix-blend-screen" />
          </motion.div>

          {/* Right: Content & Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
              Tentang Kami
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
              Mewujudkan Momen Anda dalam <span className="text-primary">Karya Digital</span>
            </h2>
            
            <p className="text-muted-foreground text-lg mb-8">
              Daus Visual Creative Industry berdedikasi untuk menciptakan desain dan dokumentasi visual kelas premium. Kami memadukan seni dan teknologi untuk menghasilkan undangan digital dan mahakarya visual yang elegan.
            </p>

            <div className="space-y-4 mb-10">
              {[
                "Desain eksklusif dan custom sesuai keinginan Anda.",
                "Tim profesional dengan pengalaman lebih dari 5 tahun.",
                "Pelayanan cepat, responsif, dan mengutamakan kualitas."
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <span className="text-muted-foreground">{text}</span>
                </div>
              ))}
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center md:text-left">
                <div className="text-4xl font-bold text-white font-heading mb-2">
                  <Counter from={0} to={100} suffix="+" />
                </div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-4xl font-bold text-white font-heading mb-2">
                  <Counter from={0} to={50} suffix="+" />
                </div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-4xl font-bold text-white font-heading mb-2">
                  <Counter from={0} to={5} suffix="+" />
                </div>
                <div className="text-sm text-muted-foreground">Years Exp</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
