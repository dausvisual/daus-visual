import * as React from "react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ExternalLink, CheckCircle2 } from "lucide-react"
import { portfolioData } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export async function generateStaticParams() {
  return portfolioData.map((project) => ({
    id: project.id,
  }))
}

export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const project = portfolioData.find((p) => p.id === resolvedParams.id)

  if (!project) {
    notFound()
  }

  const relatedProjects = portfolioData
    .filter((p) => p.category === project.category && p.id !== project.id)
    .slice(0, 3)

  return (
    <main className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Back Button */}
        <Link href="/#portfolio" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Kembali ke Portofolio
        </Link>

        {/* Hero Section */}
        <div className="relative w-full aspect-[21/9] md:aspect-[21/7] rounded-3xl overflow-hidden mb-12 group">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex gap-3 mb-4">
                <Badge variant="default" className="bg-primary/20 text-primary hover:bg-primary/30 border-none">{project.category}</Badge>
                <Badge variant="outline" className="text-white border-white/20">{project.year}</Badge>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-heading text-white mb-2">{project.title}</h1>
              <p className="text-xl text-white/80">{project.client}</p>
            </div>
            <Button size="lg" variant="gradient" className="rounded-full shadow-[0_0_20px_rgba(255,26,26,0.4)] hover:scale-105 transition-transform">
              Live Preview
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            <section>
              <h2 className="text-2xl font-bold font-heading mb-4 text-white">Deskripsi Proyek</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Proyek undangan digital "{project.title}" dirancang khusus untuk {project.client} dengan mengedepankan tema {project.category.toLowerCase()} yang elegan. 
                Desain ini menggabungkan elemen visual yang menarik dengan pengalaman pengguna yang interaktif, memastikan tamu undangan mendapatkan kesan pertama yang tak terlupakan.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-heading mb-4 text-white">Fitur Utama</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {project.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="text-white/90">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            {project.testimonial && (
              <section className="p-8 rounded-3xl bg-primary/5 border border-primary/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-[50px]" />
                <h2 className="text-xl font-bold font-heading mb-4 text-white">Apa Kata Klien</h2>
                <p className="text-lg text-white/90 italic relative z-10">"{project.testimonial}"</p>
                <p className="text-primary mt-4 font-medium relative z-10">— {project.client}</p>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            
            <div className="glass p-6 rounded-2xl border border-white/10">
              <h3 className="text-lg font-bold font-heading mb-4 text-white">Color Palette</h3>
              <div className="flex flex-wrap gap-3">
                {project.palette.map((color, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div 
                      className="w-8 h-8 rounded-full border border-white/20 shadow-inner" 
                      style={{ backgroundColor: color }}
                    />
                    <span className="text-sm text-muted-foreground uppercase">{color}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass p-6 rounded-2xl border border-white/10">
              <h3 className="text-lg font-bold font-heading mb-4 text-white">Typography</h3>
              <div className="space-y-4">
                {project.typography.map((font, i) => (
                  <div key={i}>
                    <p className="text-sm text-muted-foreground mb-1">{i === 0 ? 'Primary' : 'Secondary'}</p>
                    <p className="text-xl text-white" style={{ fontFamily: font, fontWeight: i === 0 ? 700 : 400 }}>{font}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <div className="mt-24 pt-12 border-t border-white/10">
            <h2 className="text-3xl font-bold font-heading mb-8 text-white">Proyek Serupa</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedProjects.map((rp) => (
                <Link key={rp.id} href={`/portfolio/${rp.id}`} className="group block">
                  <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-card border border-border group-hover:border-primary/50 transition-colors">
                    <img
                      src={rp.image}
                      alt={rp.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <h3 className="text-xl font-bold font-heading text-white">{rp.client}</h3>
                      <p className="text-white/70 text-sm">{rp.title}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </main>
  )
}
