"use client"

import { Container } from "@/components/ui/container"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

const testimonials = [
  {
    content: "This SaaS starter saved me months of development time. The code quality is exceptional and the documentation is crystal clear. Highly recommended!",
    author: {
      name: "Sarah Chen",
      role: "Founder @ TechFlow",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face&auto=format"
    },
    rating: 5
  },
  {
    content: "The best investment I've made for my startup. Clean code, modern design, and everything works out of the box. Our users love working with it.",
    author: {
      name: "Marcus Rodriguez",
      role: "CTO @ DataVibe",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face&auto=format"
    },
    rating: 5
  },
  {
    content: "Incredible attention to detail. The UI components are beautiful and the developer experience is fantastic. This is how all starter kits should be built.",
    author: {
      name: "Emily Watson",
      role: "Lead Developer @ Nexus",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face&auto=format"
    },
    rating: 5
  }
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden section-alt">
      {/* Effets d'arrière-plan cohérents */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}} />
      </div>
      
      <Container>
        <motion.div 
          className="text-center mb-20 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium mb-8">
              <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
              Testimonials
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-foreground">
            Loved by{" "}
            <span className="gradient-text">
              developers
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join thousands of developers who have built amazing products with our starter kit.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative z-10"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={`testimonial-${index}`} variants={item}>
              <Card className="relative h-full group card-modern overflow-hidden">
                <CardContent className="p-8">
                  {/* Rating professionnelle */}
                  <div className="flex items-center gap-1 mb-6">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-300" style={{animationDelay: `${i * 0.1}s`}} />
                    ))}
                  </div>
                  
                  {/* Content avec typographie améliorée */}
                  <blockquote className="text-card-foreground mb-8 leading-relaxed text-lg font-medium">
                    &ldquo;{testimonial.content}&rdquo;
                  </blockquote>
                  
                  {/* Author avec style cohérent */}
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20 group-hover:border-primary/40 transition-all duration-300">
                      <Image
                        src={testimonial.author.image}
                        alt={testimonial.author.name}
                        width={48}
                        height={48}
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-card-foreground group-hover:text-primary transition-colors duration-300">{testimonial.author.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.author.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Section statistiques professionnelle */}
        <motion.div 
          className="mt-24 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="glass-card rounded-3xl p-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="group">
                <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">10k+</div>
                <div className="text-muted-foreground font-medium">Happy Customers</div>
              </div>
              <div className="group">
                <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">99.9%</div>
                <div className="text-muted-foreground font-medium">Uptime</div>
              </div>
              <div className="group">
                <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">2M+</div>
                <div className="text-muted-foreground font-medium">API Calls</div>
              </div>
              <div className="group">
                <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
                <div className="text-muted-foreground font-medium">Support</div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
