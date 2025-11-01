"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function ThemeToggle() {
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
      <Button 
        variant="ghost" 
        size="icon"
        className="h-9 w-9 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
      >
        <Sun className="h-4 w-4" />
      </Button>
    )
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        className="relative h-9 w-9 rounded-xl bg-gradient-to-br from-orange-100 to-blue-100 hover:from-orange-200 hover:to-blue-200 dark:from-gray-800 dark:to-gray-700 dark:hover:from-gray-700 dark:hover:to-gray-600 border border-orange-200 dark:border-gray-600 transition-all duration-300 shadow-sm hover:shadow-md group overflow-hidden"
      >
        {/* Background gradient animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-blue-400/20 dark:from-blue-500/20 dark:to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
        
        {/* Icon container */}
        <div className="relative flex items-center justify-center">
          <AnimatePresence mode="wait">
            {theme === "light" ? (
              <motion.div
                key="sun"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Sun className="h-4 w-4 text-orange-600 dark:text-orange-400" />
              </motion.div>
            ) : (
              <motion.div
                key="moon"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Moon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
        
        <span className="sr-only">
          {theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
        </span>
      </Button>
    </motion.div>
  )
}
