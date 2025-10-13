"use client"

import Link from "next/link"
import { Menu, X, Zap, Layers, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { ThemeToggle } from "@/components/ui/theme-toggle"

import { motion, AnimatePresence } from "framer-motion"
import { useMobileMenu } from "@/hooks/useMobileMenu"

const navigation = [
  { name: "Features", href: "#features" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
]

export function Header() {
  const { isOpen: mobileMenuOpen, openMenu, closeMenu } = useMobileMenu()

  return (
    <header className="fixed top-0 z-50 w-full">
      {/* Background professionnel unifié */}
      <motion.div 
        className="absolute inset-0 card-modern border-b border-border shadow-2xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      />
      {/* Overlay gradient subtil cohérent */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/[0.02] to-transparent dark:via-primary/[0.05] pointer-events-none" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <nav className="flex h-20 items-center justify-between" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">FlowCraft</span>
              <div className="flex items-center space-x-3">
                {/* Logo professionnel cohérent */}
                <div className="relative h-12 w-12 rounded-2xl bg-gradient-to-br from-purple-600 via-purple-700 to-blue-600 flex items-center justify-center shadow-2xl hover:scale-105 transition-all duration-300">
                  {/* Effet de lueur d'arrière-plan */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-400 to-blue-400 opacity-75 blur-lg" />
                  
                  {/* Stack d'icônes principal */}
                  <div className="relative flex items-center justify-center">
                    <Layers className="h-5 w-5 text-white absolute transform -rotate-12" />
                    <Code className="h-4 w-4 text-purple-200 absolute transform rotate-12 translate-x-1" />
                    <Zap className="h-6 w-6 text-white relative z-10" />
                  </div>
                  
                  {/* Point d'accent */}
                  <div className="absolute top-1 right-1 w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                </div>
                
                <div className="flex flex-col">
                  <span className="font-bold text-xl gradient-text leading-tight">FlowCraft</span>
                  <span className="text-xs text-muted-foreground font-medium tracking-wider">PRO</span>
                </div>
              </div>
            </Link>
          </div>
          
          <div className="flex lg:hidden">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={openMenu}
              className="relative p-3 rounded-2xl glass-card transition-all duration-300 group"
            >
              <Menu className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
            </motion.button>
          </div>
          
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </div>
          
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-x-4">
            {/* Theme Toggle professionnel */}
            <div className="relative">
              <ThemeToggle />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse" />
            </div>
            <Link href="/login">
              <Button variant="ghost" className="rounded-full text-foreground hover:text-primary hover:bg-secondary">Log in</Button>
            </Link>
            <Link href="/get-started">
              <Button className="rounded-full btn-primary px-6 py-2.5 shadow-lg">Get Started</Button>
            </Link>
          </div>
        </nav>
      </div>
      
      {/* Professional Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden"
          >
            {/* Backdrop avec effet de flou */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/60 mobile-menu-backdrop" 
              onClick={closeMenu} 
            />
            
            {/* Panel mobile optimisé */}
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ 
                type: "spring", 
                damping: 25, 
                stiffness: 200,
                mass: 0.8
              }}
              className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto card-modern border-l border-border sm:max-w-sm mobile-menu-scroll"
            >
              {/* Header mobile professionnel */}
              <div className="flex items-center justify-between p-6 border-b border-border bg-gradient-to-r from-background/90 via-secondary/30 to-background/90 backdrop-blur-xl">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Link href="/" className="-m-1.5 p-1.5" onClick={closeMenu}>
                    <div className="flex items-center space-x-3">
                      {/* Mobile logo cohérent */}
                      <motion.div 
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.3, type: "spring", damping: 15 }}
                        className="relative h-12 w-12 rounded-2xl bg-gradient-to-br from-purple-600 via-purple-700 to-blue-600 flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300"
                      >
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-400 to-blue-400 opacity-75 blur-lg" />
                        <div className="relative flex items-center justify-center">
                          <Layers className="h-5 w-5 text-white absolute transform -rotate-12" />
                          <Code className="h-4 w-4 text-purple-200 absolute transform rotate-12 translate-x-1" />
                          <Zap className="h-6 w-6 text-white relative z-10" />
                        </div>
                        <div className="absolute top-1 right-1 w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                      </motion.div>
                      <div className="flex flex-col">
                        <span className="font-bold text-xl gradient-text leading-tight">FlowCraft</span>
                        <span className="text-xs text-muted-foreground font-medium tracking-wider">PRO</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
                
                  <motion.button
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ scale: 1.05, rotate: 90 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={closeMenu}
                  className="p-3 rounded-2xl glass-card hover:border-red-300/50 dark:hover:border-red-600/50 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <X className="w-5 h-5 text-foreground group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors" />
                </motion.button>
              </div>
              
              {/* Contenu du menu avec animations séquentielles */}
              <div className="flex-1 overflow-y-auto px-6 py-8">
                <div className="space-y-8">
                  {/* Section Navigation */}
                  <div>
                    <motion.h3 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4"
                    >
                      Navigation
                    </motion.h3>
                    <div className="space-y-2">
                      {navigation.map((item, index) => (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, x: -30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + index * 0.1 }}
                        >
                          <Link
                            href={item.href}
                            className="group flex items-center justify-between p-4 rounded-2xl glass-card hover:border-primary/50 shadow-sm hover:shadow-lg transition-all duration-300"
                            onClick={closeMenu}
                          >
                            <div className="flex items-center space-x-4">
                              <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                              <span className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                                {item.name}
                              </span>
                            </div>
                            <motion.div
                              whileHover={{ x: 5 }}
                              className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                            >
                              <span className="text-white text-xs font-bold">→</span>
                            </motion.div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Section Authentification */}
                  <div>
                    <motion.h3 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 }}
                      className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4"
                    >
                      Account
                    </motion.h3>
                    
                    <div className="space-y-4">
                      {/* Theme Toggle pour mobile */}
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.9 }}
                        className="flex items-center justify-between p-4 rounded-2xl glass-card border border-border"
                      >
                        <span className="text-lg font-semibold text-foreground">
                          Theme
                        </span>
                        <ThemeToggle />
                      </motion.div>

                      {/* Boutons d'authentification optimisés avec espacement */}
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.0 }}
                        className="space-y-4"
                      >
                        <Link href="/login" onClick={closeMenu}>
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full p-4 rounded-2xl btn-secondary border-2 hover:border-primary/30 font-semibold text-lg shadow-sm hover:shadow-lg transition-all duration-300"
                          >
                            Log in
                          </motion.button>
                        </Link>
                        
                        {/* Espace supplémentaire entre les boutons */}
                        <div className="h-2"></div>
                        
                        <Link href="/get-started" onClick={closeMenu}>
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full p-4 rounded-2xl btn-primary font-bold text-lg shadow-xl transition-all duration-300"
                          >
                            Get Started
                          </motion.button>
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer du menu mobile professionnel */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="p-6 border-t border-primary/20 bg-gradient-to-r from-secondary/50 to-background/50 backdrop-blur-sm"
              >
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">
                    Ready to build something amazing?
                  </p>
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-muted-foreground font-medium">
                      FlowCraft PRO • Always Innovating
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>


    </header>
  )
}