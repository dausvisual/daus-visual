"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Badge } from "./ui/badge"

const categories = ["All", "Wedding", "Engagement", "Khitan", "Birthday", "Corporate", "Graduation"]

export function Projects({ initialProjects }: { initialProjects: any[] }) {
  const [filter, setFilter] = React.useState("All")
  
  const filteredProjects = React.useMemo(() => {
    if (filter === "All") return initialProjects
    return initialProjects.filter((project) => project.category === filter)
  }, [filter, initialProjects])

  return (
    <section id="portfolio" className="py-24 bg-background relative z-20">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
              Our <span className="text-primary">Masterpieces</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Jelajahi koleksi desain undangan digital terbaik yang pernah kami buat. 
              Setiap karya adalah representasi unik dari cerita bahagia klien kami.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === category 
                    ? "bg-primary text-white shadow-[0_0_15px_rgba(255,26,26,0.4)]" 
                    : "bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group cursor-pointer"
              >
                <a href={project.liveUrl || `/portfolio/${project.id}`} target={project.liveUrl ? "_blank" : "_self"} rel={project.liveUrl ? "noreferrer" : undefined}>
                  <div className="relative overflow-hidden rounded-2xl aspect-square bg-card border border-border group-hover:border-primary/50 transition-colors">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col gap-2">
                      <div className="flex justify-between items-center">
                        <Badge variant="secondary" className="bg-white/20 text-white backdrop-blur-md border-none">
                          {project.category}
                        </Badge>
                        <span className="text-white/70 text-sm font-medium">{project.year}</span>
                      </div>
                      <h3 className="text-2xl font-bold font-heading text-white mt-2">{project.client}</h3>
                      <p className="text-white/80 text-sm">{project.title}</p>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
      </div>
    </section>
  )
}
