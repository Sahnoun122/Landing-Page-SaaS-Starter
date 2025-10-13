"use client"

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, AlertCircle, X, Info } from 'lucide-react'

interface Toast {
  id: string
  type: 'success' | 'error' | 'info' | 'warning'
  title: string
  description?: string
  duration?: number
}

interface ToastContextType {
  toasts: Toast[]
  addToast: (toast: Omit<Toast, 'id'>) => void
  removeToast: (id: string) => void
  success: (title: string, description?: string) => void
  error: (title: string, description?: string) => void
  info: (title: string, description?: string) => void
  warning: (title: string, description?: string) => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([])

  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id))
  }, [])

  const addToast = useCallback((toast: Omit<Toast, 'id'>) => {
    const id = Date.now().toString(36) + Math.random().toString(36).substr(2)
    const newToast: Toast = {
      ...toast,
      id,
      duration: toast.duration ?? 5000
    }

    setToasts(prev => [...prev, newToast])

    // Auto remove after duration
    if (newToast.duration && newToast.duration > 0) {
      setTimeout(() => {
        removeToast(id)
      }, newToast.duration)
    }
  }, [removeToast])

  const success = useCallback((title: string, description?: string) => {
    addToast({ type: 'success', title, description })
  }, [addToast])

  const error = useCallback((title: string, description?: string) => {
    addToast({ type: 'error', title, description })
  }, [addToast])

  const info = useCallback((title: string, description?: string) => {
    addToast({ type: 'info', title, description })
  }, [addToast])

  const warning = useCallback((title: string, description?: string) => {
    addToast({ type: 'warning', title, description })
  }, [addToast])

  return (
    <ToastContext.Provider value={{
      toasts,
      addToast,
      removeToast,
      success,
      error,
      info,
      warning
    }}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  )
}

export function useToast() {
  const context = useContext(ToastContext)
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context
}

function ToastContainer() {
  const { toasts } = useToast()

  return (
    <div className="fixed top-4 right-4 z-50 space-y-3 max-w-sm w-full">
      <AnimatePresence>
        {toasts.map((toast) => (
          <ToastItem key={toast.id} toast={toast} />
        ))}
      </AnimatePresence>
    </div>
  )
}

function ToastItem({ toast }: { toast: Toast }) {
  const { removeToast } = useToast()

  const getIcon = () => {
    switch (toast.type) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-500" />
      case 'error':
        return <AlertCircle className="w-5 h-5 text-red-500" />
      case 'warning':
        return <AlertCircle className="w-5 h-5 text-yellow-500" />
      case 'info':
        return <Info className="w-5 h-5 text-blue-500" />
      default:
        return <Info className="w-5 h-5 text-gray-500" />
    }
  }

  const getBgColor = () => {
    switch (toast.type) {
      case 'success':
        return 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
      case 'error':
        return 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'
      case 'warning':
        return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800'
      case 'info':
        return 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800'
      default:
        return 'bg-gray-50 dark:bg-gray-900/20 border-gray-200 dark:border-gray-800'
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -20, x: 100 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      exit={{ opacity: 0, y: -20, x: 100 }}
      transition={{ duration: 0.3 }}
      className={`glass-card border p-4 rounded-xl shadow-lg ${getBgColor()}`}
    >
      <div className="flex items-start gap-3">
        {getIcon()}
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-semibold text-foreground">
            {toast.title}
          </h4>
          {toast.description && (
            <p className="text-sm text-muted-foreground mt-1">
              {toast.description}
            </p>
          )}
        </div>
        <button
          onClick={() => removeToast(toast.id)}
          className="text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  )
}