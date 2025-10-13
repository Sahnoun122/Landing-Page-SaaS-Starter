"use client"

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'

export function ThemeSystemDetector() {
  const { setTheme, theme } = useTheme()
  const [systemTheme, setSystemTheme] = useState<'light' | 'dark'>('light')
  const [showNotification, setShowNotification] = useState(false)

  useEffect(() => {
    // Détecte le thème système
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    setSystemTheme(mediaQuery.matches ? 'dark' : 'light')

    // Listener pour les changements de thème système
    const handleChange = (e: MediaQueryListEvent) => {
      const newSystemTheme = e.matches ? 'dark' : 'light'
      setSystemTheme(newSystemTheme)
      
      // Optionnel : Auto-sync avec le thème système
      if (theme === 'system' || !theme) {
        setTheme(newSystemTheme)
        setShowNotification(true)
        setTimeout(() => setShowNotification(false), 3000)
      }
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [setTheme, theme])

  if (!showNotification) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className="fixed top-4 right-4 z-50 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-lg"
    >
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Theme switched to match system preference: <strong>{systemTheme}</strong>
      </p>
    </motion.div>
  )
}