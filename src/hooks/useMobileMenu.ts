"use client"

import { useState, useEffect } from 'react'

export function useMobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  // Empêcher le scroll du body quand le menu est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = 'var(--scrollbar-width, 0px)'
    } else {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }

    return () => {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }
  }, [isOpen])

  // Fermer le menu avec la touche Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen])

  const openMenu = () => setIsOpen(true)
  const closeMenu = () => setIsOpen(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  return {
    isOpen,
    openMenu,
    closeMenu,
    toggleMenu
  }
}