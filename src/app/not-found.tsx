"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft, Search, Zap, Layers, Code } from "lucide-react"
import { motion } from "framer-motion"

export default function NotFound() {
  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-mesh"
      style={{backgroundColor: 'rgb(var(--background))'}}
    >
      {/* Modern Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-gradient-to-br from-red-500/20 to-purple-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}} />
        <div className="absolute top-2/3 left-2/3 w-48 h-48 bg-gradient-to-br from-blue-500/20 to-green-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}} />
      </div>
      
      <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
        {/* Logo */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/" className="flex items-center space-x-4 group">
            <div className="relative h-20 w-20 rounded-3xl bg-gradient-primary flex items-center justify-center shadow-2xl transform group-hover:scale-105 transition-all duration-300 animate-pulse-glow">
              <div className="relative flex items-center justify-center">
                <Layers className="h-8 w-8 text-white absolute transform -rotate-12" />
                <Code className="h-6 w-6 text-purple-200 absolute transform rotate-12 translate-x-1" />
                <Zap className="h-9 w-9 text-white relative z-10" />
              </div>
              <div className="absolute top-2 right-2 w-3 h-3 bg-yellow-400 rounded-full animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-3xl gradient-text leading-tight">FlowCraft</span>
              <span className="text-sm font-medium tracking-wider" style={{color: 'rgb(var(--foreground-muted))'}}>PRO</span>
            </div>
          </Link>
        </motion.div>

        {/* 404 Animation */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div 
            className="text-9xl md:text-[12rem] lg:text-[14rem] font-black gradient-text mb-6 select-none leading-none"
            animate={{ 
              textShadow: [
                "0 0 20px rgba(139, 92, 246, 0.3)",
                "0 0 40px rgba(139, 92, 246, 0.5)",
                "0 0 20px rgba(139, 92, 246, 0.3)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            404
          </motion.div>
          <motion.div 
            className="glass-card inline-flex items-center gap-3 px-8 py-4 rounded-2xl"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse" />
            <span className="font-bold text-lg" style={{color: 'rgb(var(--foreground))'}}>
              Page Not Found
            </span>
          </motion.div>
        </motion.div>

        {/* Description */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{color: 'rgb(var(--foreground))'}}>
            Oops! Lost in Space?
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed mb-8" style={{color: 'rgb(var(--foreground-secondary))'}}>
            The page you're looking for doesn't exist or has been moved to another dimension. 
            <span className="block mt-2 font-semibold gradient-text">
              Let's navigate you back to safety! 🚀
            </span>
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link href="/">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="btn-primary group text-lg px-10 py-4 rounded-2xl">
                <Home className="mr-3 h-5 w-5 group-hover:-translate-y-0.5 transition-transform" />
                Back to Home
              </Button>
            </motion.div>
          </Link>
          
          <Link href="/get-started">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="btn-secondary text-lg px-10 py-4 rounded-2xl group">
                <Search className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Get Started
              </Button>
            </motion.div>
          </Link>
        </motion.div>

        {/* Quick Navigation */}
        <motion.div
          className="glass-card p-8 rounded-3xl max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="font-bold text-2xl mb-6 text-center gradient-text">
            Quick Navigation
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { href: "/", label: "Home", icon: Home },
              { href: "/get-started", label: "Get Started", icon: Search },
              { href: "/login", label: "Login", icon: ArrowLeft },
              { href: "/dashboard", label: "Dashboard", icon: Zap }
            ].map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
              >
                <Link 
                  href={item.href}
                  className="flex flex-col items-center gap-3 p-4 rounded-2xl transition-all duration-300 hover:scale-105 group"
                  style={{
                    background: 'rgb(var(--secondary))',
                    color: 'rgb(var(--foreground))'
                  }}
                >
                  <item.icon className="w-6 h-6 group-hover:scale-110 transition-transform" style={{color: 'rgb(var(--primary))'}} />
                  <span className="font-semibold text-sm">{item.label}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Back Button */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <motion.button 
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 group"
            style={{
              background: 'rgb(var(--secondary))',
              color: 'rgb(var(--foreground-muted))'
            }}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: 'rgb(var(--secondary-hover))'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Go back to previous page
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}

