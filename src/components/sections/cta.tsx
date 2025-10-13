"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { ArrowRight, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-purple-600 via-purple-700 to-blue-600">
      {/* Effets d'arrière-plan cohérents */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-white/10 to-blue-300/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-gradient-to-br from-purple-300/20 to-white/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}} />
      </div>
      
      {/* Motif de grille subtil */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
            backgroundSize: '30px 30px'
          }} 
        />
      </div>
      
      <Container>
        <motion.div 
          className="text-center relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Icône professionnelle */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="w-20 h-20 mx-auto glass-card backdrop-blur-xl rounded-3xl flex items-center justify-center group hover:scale-110 transition-all duration-300">
              <Sparkles className="w-10 h-10 text-white group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </motion.div>
          
          {/* Headline */}
          <motion.h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Ready to build your
            <br />
            next big thing?
          </motion.h2>
          
          {/* Description */}
          <motion.p 
            className="text-xl text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Join thousands of developers who are shipping faster with our SaaS starter kit. 
            Start building today.
          </motion.p>
          
          {/* Boutons CTA cohérents */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Link href="/get-started">
              <Button className="group bg-white text-purple-600 hover:bg-gray-50 px-8 py-4 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300">
                <span className="flex items-center">
                  Get Started Free
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
            </Link>
            
            <Button className="group glass-card hover:bg-white/20 text-white px-8 py-4 text-lg font-semibold rounded-2xl backdrop-blur-xl hover:scale-105 transition-all duration-300">
              Contact Sales
            </Button>
          </motion.div>
          
          {/* Trust indicators */}
          <motion.div 
            className="flex items-center justify-center gap-8 mt-12 text-white/60"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <div className="text-sm font-medium">30-day</div>
              <div className="text-xs">Money back</div>
            </div>
            <div className="w-px h-8 bg-white/20" />
            <div className="text-center">
              <div className="text-sm font-medium">No setup</div>
              <div className="text-xs">fees</div>
            </div>
            <div className="w-px h-8 bg-white/20" />
            <div className="text-center">
              <div className="text-sm font-medium">24/7</div>
              <div className="text-xs">Support</div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}