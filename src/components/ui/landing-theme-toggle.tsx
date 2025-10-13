"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function LandingThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  if (!mounted) {
    return (
      <button className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white">
        <Sun className="h-4 w-4" />
      </button>
    )
  }

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative p-2.5 rounded-full bg-white/10 hover:bg-white/20 dark:bg-gray-800/50 dark:hover:bg-gray-700/70 backdrop-blur-xl border border-white/20 dark:border-gray-600/50 transition-all duration-300 group shadow-lg hover:shadow-xl"
    >
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
      
      {/* Icon container */}
      <div className="relative flex items-center justify-center">
        <AnimatePresence mode="wait">
          {theme === "light" ? (
            <motion.div
              key="sun"
              initial={{ rotate: -180, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              exit={{ rotate: 180, scale: 0 }}
              transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
            >
              <Sun className="h-5 w-5 text-orange-500 group-hover:text-orange-400 transition-colors duration-300" />
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              initial={{ rotate: 180, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              exit={{ rotate: -180, scale: 0 }}
              transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
            >
              <Moon className="h-5 w-5 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      <span className="sr-only">
        {theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
      </span>
    </motion.button>
  )
}