/**
 * Modern Hero Section - Dribbble Inspired Design
 */

"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { ArrowRight, Play, Star, Users, Zap, Shield } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 bg-mesh"
    >
      {/* Arrière-plan professionnel unifié */}
      <div className="absolute inset-0">
        {/* Éléments flottants optimisés pour cohérence avec login */}
        <motion.div 
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '0s' }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '2s' }}
        />
        <motion.div
          className="absolute bottom-20 right-16 w-40 h-40 bg-gradient-to-br from-purple-400 to-blue-400 opacity-15 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '4s' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 opacity-25 rounded-full blur-2xl animate-float"
          style={{ animationDelay: '6s' }}
        />
        
        {/* Motif de grille subtil */}
        <div 
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.08]" 
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(var(--primary)) 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }} 
        />
      </div>
      
      <Container>
        <motion.div 
          className="text-center relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge professionnel cohérent */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl card-modern shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-semibold text-foreground">
                    50,000+ developers trust us
                  </span>
                </div>
                <div className="w-px h-5 bg-border" />
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-foreground">
                    5.0 rating
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Titre professionnel cohérent */}
          <motion.div 
            className="mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight leading-[0.9]">
              <span className="block text-foreground mb-3">
                Ship your
              </span>
              <span className="block relative">
                <span className="gradient-text">
                  SaaS faster
                </span>
                {/* Soulignement décoratif cohérent */}
                <motion.div
                  className="absolute -bottom-4 left-0 right-0 h-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                />
              </span>
              <span className="block text-foreground mt-3">
                than ever
              </span>
            </h1>
          </motion.div>
          
          {/* Description professionnelle */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-2xl lg:text-3xl leading-relaxed max-w-5xl mx-auto text-muted-foreground font-medium mb-6">
              The complete SaaS starter kit with modern architecture, 
              <br className="hidden lg:block" />
              built for developers who want to 
              <span className="gradient-text font-bold"> ship fast and scale</span>
            </p>
            
            {/* Highlights cohérents */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>Next.js 15</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                <span>TypeScript</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                <span>Authentication</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
                <span>Payments</span>
              </div>
            </div>
          </motion.div>
          
          {/* Boutons CTA professionnels */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Link href="/get-started">
              <Button className="group btn-primary px-10 py-5 text-xl font-bold rounded-2xl">
                <span className="relative z-10 flex items-center">
                  Start Building Now
                  <ArrowRight className="ml-3 w-6 h-6 transition-transform group-hover:translate-x-2" />
                </span>
              </Button>
            </Link>
            
            <Button className="group btn-secondary px-10 py-5 text-xl font-bold rounded-2xl">
              <Play className="mr-3 w-6 h-6 transition-transform group-hover:scale-110" />
              Live Demo
            </Button>
          </motion.div>

          {/* Demo du thème intégré */}
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center justify-center">
              <div className="flex items-center gap-4 px-6 py-3 rounded-2xl glass-card shadow-lg">
                <span className="text-sm font-medium text-foreground">
                  Try Dark Mode 👆
                </span>
                <div className="w-px h-6 bg-border" />
                <div className="scale-125">
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Stats Section - Dribbble Style */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto mb-32"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">50k+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">99.9%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">24/7</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Support</div>
            </div>
          </motion.div>
          
          {/* Features Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-20 mb-32"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {[
              { icon: Zap, title: "Lightning Fast", desc: "Built for performance" },
              { icon: Shield, title: "Enterprise Ready", desc: "Security first approach" },
              { icon: Users, title: "Team Collaboration", desc: "Built for teams" }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                className="glass-card p-6 text-center group hover:scale-105 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <feature.icon className="w-8 h-8 mx-auto mb-3" style={{color: 'rgb(var(--primary))'}} />
                <h3 className="font-semibold mb-2" style={{color: 'rgb(var(--foreground))'}}>
                  {feature.title}
                </h3>
                <p className="text-sm" style={{color: 'rgb(var(--foreground-muted))'}}>
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
