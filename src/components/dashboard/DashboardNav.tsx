/**
 * Dashboard Navigation Component
 * 
 * This is the main navigation component for the dashboard pages.
 * It provides a responsive navigation bar with the following features:
 * - Brand logo and name
 * - Navigation menu items (Dashboard, Projects, Analytics, Team, API Docs)
 * - Search functionality
 * - Notifications dropdown with real-time updates
 * - Mobile-responsive hamburger menu
 * - Dark/light mode support
 * - Create project modal
 * 
 * The component uses Framer Motion for smooth animations and supports
 * both desktop and mobile layouts with adaptive behavior.
 */

'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  LayoutDashboard, 
  FolderKanban, 
  BarChart3, 
  Users, 
  BookOpen,
  Bell,
  Menu,
  X,
  CheckCircle,
  AlertCircle,
  Clock
} from 'lucide-react'
import { ThemeToggle } from '@/components/ui/theme-toggle'

// Interface defining the structure of notification objects
interface Notification {
  id: string
  title: string
  message: string
  type: 'success' | 'warning' | 'info' | 'error'
  time: string
  read: boolean
}

// Sample notification data - Replace with real data from your backend
const notifications: Notification[] = [
  {
    id: '1',
    title: 'New user registered',
    message: 'Sarah Chen has joined as an Admin',
    type: 'success',
    time: '2 minutes ago',
    read: false
  },
  {
    id: '2',
    title: 'Project deployment completed',
    message: 'Mobile App v2.1 has been successfully deployed',
    type: 'success',
    time: '1 hour ago',
    read: false
  },
  {
    id: '3',
    title: 'Storage usage warning',
    message: 'You are using 85% of your storage limit',
    type: 'warning',
    time: '3 hours ago',
    read: true
  },
  {
    id: '4',
    title: 'API rate limit reached',
    message: 'Your API usage has reached 90% of the monthly limit',
    type: 'warning',
    time: '1 day ago',
    read: true
  },
  {
    id: '5',
    title: 'Security scan completed',
    message: 'No vulnerabilities found in your codebase',
    type: 'info',
    time: '2 days ago',
    read: true
  }
]

export default function DashboardNav() {
  // State management for UI interactions
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false) // Controls mobile menu visibility
  const [showNotifications, setShowNotifications] = useState(false) // Controls notifications dropdown
  const [showCreateModal, setShowCreateModal] = useState(false) // Controls create project modal
  
  // Form state for creating new projects
  const [createProjectForm, setCreateProjectForm] = useState({
    name: '',
    description: '',
    category: 'web',
    template: 'blank'
  })
  
  const pathname = usePathname() // Get current page path for active state
  const notificationsRef = useRef<HTMLDivElement>(null) // Ref for click outside detection

  // Close notifications dropdown when user clicks outside of it
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (notificationsRef.current && !notificationsRef.current.contains(event.target as Node)) {
        setShowNotifications(false)
      }
    }

    if (showNotifications) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showNotifications])

  // Navigation menu configuration
  // Add or remove items here to customize the navigation
  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Projects', href: '/projects', icon: FolderKanban },
    { name: 'Analytics', href: '/analytics', icon: BarChart3 },
    { name: 'Team', href: '/team', icon: Users },
    { name: 'API Docs', href: '/api-docs', icon: BookOpen },
  ]

  const unreadCount = notifications.filter(n => !n.read).length

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'success': return CheckCircle
      case 'warning': return AlertCircle
      case 'error': return AlertCircle
      case 'info': return Clock
      default: return Clock
    }
  }

  const getNotificationColor = (type: string) => {
    switch (type) {
      case 'success': return 'text-green-600 dark:text-green-400'
      case 'warning': return 'text-yellow-600 dark:text-yellow-400'
      case 'error': return 'text-red-600 dark:text-red-400'
      case 'info': return 'text-blue-600 dark:text-blue-400'
      default: return 'text-gray-600 dark:text-gray-400'
    }
  }

  const handleCreateProject = () => {
    console.log('Creating project:', createProjectForm)
    setShowCreateModal(false)
    setCreateProjectForm({
      name: '',
      description: '',
      category: 'web',
      template: 'blank'
    })
  }

  return (
    <>
      <nav className="sticky top-0 z-50 w-full">
        {/* Background professionnel unifié comme la landing page */}
        <motion.div 
          className="absolute inset-0 card-modern border-b border-border shadow-2xl dark:!bg-black dark:!border-black"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        />
        {/* Overlay gradient subtil cohérent */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/[0.02] to-transparent dark:via-primary/[0.05] pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/dashboard" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-tr from-purple-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                FlowCraft
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              const Icon = item.icon
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative group"
                >
                  <div className={`
                    flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all duration-200
                    ${isActive 
                      ? 'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/30' 
                      : 'text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                    }
                  `}>
                    <Icon className="w-4 h-4" />
                    <span className="text-sm">{item.name}</span>
                  </div>
                  
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl border border-purple-200 dark:border-purple-700"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              )
            })}
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <ThemeToggle />
            
            {/* Notifications */}
            <div className="relative" ref={notificationsRef}>
              <button 
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative p-2 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
              >
                <Bell className="w-5 h-5" />
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                    {unreadCount}
                  </span>
                )}
              </button>

              {/* Notifications Dropdown */}
              <AnimatePresence>
                {showNotifications && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-80 card-modern shadow-2xl z-50 dark:!bg-black dark:!border-black"
                  >
                    <div className="p-4 border-b border-border dark:border-black">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-foreground">
                          Notifications
                        </h3>
                        {unreadCount > 0 && (
                          <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                            {unreadCount} new
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="max-h-96 overflow-y-auto">
                      {notifications.map((notification) => {
                        const Icon = getNotificationIcon(notification.type)
                        const colorClass = getNotificationColor(notification.type)
                        
                        return (
                          <motion.div
                            key={notification.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className={`p-4 border-b border-border dark:border-black hover:bg-accent dark:hover:bg-black transition-colors duration-200 ${
                              !notification.read ? 'bg-primary/5 dark:bg-black/80' : 'dark:bg-black'
                            }`}
                          >
                            <div className="flex items-start space-x-3">
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                notification.type === 'success' ? 'bg-green-100 dark:bg-green-900/20' :
                                notification.type === 'warning' ? 'bg-yellow-100 dark:bg-yellow-900/20' :
                                notification.type === 'error' ? 'bg-red-100 dark:bg-black' :
                                'bg-blue-100 dark:bg-black'
                              }`}>
                                <Icon className={`w-4 h-4 ${colorClass}`} />
                              </div>
                              
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between">
                                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                                    {notification.title}
                                  </p>
                                  {!notification.read && (
                                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                  )}
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                  {notification.message}
                                </p>
                                <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                                  {notification.time}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        )
                      })}
                    </div>
                    
                    <div className="p-4 border-t border-gray-200 dark:!border-gray-800 dark:!bg-black">
                      <button className="w-full text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 text-sm font-medium transition-colors duration-200 dark:bg-black dark:border-black rounded-xl">
                        View All Notifications
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>



            {/* Profile Menu */}
            <div className="relative">
              <Link href="/profile" className="flex items-center space-x-3 p-2 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-200 group">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <Image 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Profile"
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                </div>
                <div className="hidden sm:block">
                  <p className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    John Doe
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    View Profile
                  </p>
                </div>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

      </div>

      {/* Mobile Navigation Drawer - Slides from Right */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Drawer Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
              className="md:hidden fixed top-0 right-0 bottom-0 w-80 bg-white/20 backdrop-blur-xl border-l border-white/20 z-50 shadow-2xl"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/20 bg-white/10 backdrop-blur-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-tr from-purple-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                  </div>
                  <span className="text-lg font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    FlowCraft
                  </span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Content */}
              <div className="flex-1 overflow-y-auto p-6 bg-white/10 backdrop-blur-xl">
                <div className="space-y-2">
                  {/* Mobile Navigation Links */}
                  {navigation.map((item, index) => {
                    const isActive = pathname === item.href
                    const Icon = item.icon
                    
                    return (
                      <motion.div
                        key={item.name}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`
                            flex items-center space-x-4 px-4 py-4 rounded-xl font-medium transition-all duration-200 group
                            ${isActive 
                              ? 'text-purple-600 bg-white/20 backdrop-blur-xl border-l-4 border-purple-500' 
                              : 'text-gray-800 hover:text-purple-600 hover:bg-white/20 hover:backdrop-blur-xl'
                            }
                          `}
                        >
                          <div className={`p-2 rounded-lg transition-all duration-200 ${
                            isActive 
                              ? 'bg-white/30 backdrop-blur-xl' 
                              : 'bg-white/20 backdrop-blur-xl group-hover:bg-white/30'
                          }`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <span className="text-base">{item.name}</span>
                        </Link>
                      </motion.div>
                    )
                  })}
                </div>

                {/* Divider */}
                <div className="my-6 border-t border-white/20"></div>

                {/* Mobile Profile Section */}
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: navigation.length * 0.1, duration: 0.3 }}
                >
                  <Link
                    href="/profile"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center space-x-4 px-4 py-4 rounded-xl font-medium text-gray-800 hover:text-purple-600 hover:bg-white/20 hover:backdrop-blur-xl transition-all duration-200 group"
                  >
                    <div className="p-2 bg-white/20 backdrop-blur-xl group-hover:bg-white/30 rounded-lg transition-all duration-200">
                      <div className="w-5 h-5 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center overflow-hidden">
                        <Image 
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                          alt="Profile"
                          width={20}
                          height={20}
                          className="w-5 h-5 rounded-full object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="text-base">My Profile</div>
                      <div className="text-sm text-gray-600">John Doe</div>
                    </div>
                  </Link>
                </motion.div>
              </div>

              {/* Drawer Footer */}
              <div className="p-6 border-t border-white/20 bg-white/10 backdrop-blur-xl">
                <div className="text-center text-sm text-gray-600">
                  FlowCraft Dashboard v2.0
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>

    {/* Create Project Modal - FULLSCREEN */}
      <AnimatePresence>
        {showCreateModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50"
            onClick={() => setShowCreateModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="w-full h-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header fixe */}
              <div className="flex items-center justify-between p-8 border-b border-gray-200/20 dark:border-gray-700/20 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl">
                <div>
                  <h2 className="text-4xl font-bold gradient-text">Create New Project</h2>
                  <p className="text-muted-foreground mt-2 text-xl">
                    Start a new project and organize your work
                  </p>
                </div>
                <button
                  onClick={() => setShowCreateModal(false)}
                  className="h-14 w-14 p-0 hover:bg-red-100 hover:text-red-600 dark:hover:bg-red-900/20 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                >
                  <X className="w-8 h-8" />
                </button>
              </div>

              {/* Contenu scrollable */}
              <div className="flex-1 overflow-y-auto p-8">
                <div className="max-w-4xl mx-auto">
                  <div className="space-y-8">
                    {/* Project Name */}
                    <div>
                      <label className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">
                        Project Name *
                      </label>
                      <input
                        type="text"
                        value={createProjectForm.name}
                        onChange={(e) => setCreateProjectForm({ ...createProjectForm, name: e.target.value })}
                        className="w-full h-14 px-4 py-3 text-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-200/20 dark:border-gray-700/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                        placeholder="Enter project name..."
                      />
                    </div>

                    {/* Project Description */}
                    <div>
                      <label className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">
                        Description
                      </label>
                      <textarea
                        value={createProjectForm.description}
                        onChange={(e) => setCreateProjectForm({ ...createProjectForm, description: e.target.value })}
                        className="w-full px-4 py-3 text-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-200/20 dark:border-gray-700/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none"
                        rows={6}
                        placeholder="Brief description of your project..."
                      />
                    </div>

                    {/* Project Category */}
                    <div>
                      <label className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">
                        Category
                      </label>
                      <select
                        value={createProjectForm.category}
                        onChange={(e) => setCreateProjectForm({ ...createProjectForm, category: e.target.value })}
                        className="w-full h-14 px-4 py-3 text-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-200/20 dark:border-gray-700/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                      >
                        <option value="web">Web Application</option>
                        <option value="mobile">Mobile App</option>
                        <option value="api">API Service</option>
                        <option value="desktop">Desktop App</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Project Template */}
                    <div>
                      <label className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">
                        Template
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          { id: 'blank', name: 'Blank Project', desc: 'Start from scratch' },
                          { id: 'react', name: 'React App', desc: 'Modern React.js setup' },
                          { id: 'nextjs', name: 'Next.js', desc: 'Full-stack framework' },
                          { id: 'api', name: 'REST API', desc: 'Backend service' }
                        ].map((template) => (
                          <button
                            key={template.id}
                            onClick={() => setCreateProjectForm({ ...createProjectForm, template: template.id })}
                            className={`p-6 rounded-xl border-2 transition-all duration-200 text-left ${
                              createProjectForm.template === template.id
                                ? 'border-purple-500 bg-purple-50/80 dark:bg-purple-900/20 backdrop-blur-xl'
                                : 'border-gray-200/20 dark:border-gray-600/20 hover:border-purple-300 dark:hover:border-purple-600 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl'
                            }`}
                          >
                            <div className="font-medium text-gray-900 dark:text-white text-lg">
                              {template.name}
                            </div>
                            <div className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                              {template.desc}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer fixe avec boutons */}
              <div className="p-8 border-t border-gray-200/20 dark:border-gray-700/20 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl">
                <div className="max-w-4xl mx-auto flex justify-end space-x-6">
                  <button
                    onClick={() => setShowCreateModal(false)}
                    className="h-14 px-8 text-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-200/20 dark:border-gray-700/20 text-gray-700 dark:text-gray-300 rounded-lg transition-all duration-200 font-medium hover:bg-gray-100/20 dark:hover:bg-gray-800/20"
                  >
                    Cancel
                  </button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleCreateProject}
                    disabled={!createProjectForm.name.trim()}
                    className="h-14 px-8 text-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed text-white rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl disabled:shadow-none"
                  >
                    Create Project
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
