'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  Search, 
  Bell, 
  User, 
  Menu, 
  X,
  Plus,
  ChevronDown
} from 'lucide-react';

interface DashboardHeaderProps {
  showCreateButton?: boolean;
  onCreateClick?: () => void;
  createButtonText?: string;
}

export default function DashboardHeader({ 
  showCreateButton = false, 
  onCreateClick,
  createButtonText = "Create Project"
}: DashboardHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/projects', label: 'Projects' },
    { href: '/analytics', label: 'Analytics' },
    { href: '/team', label: 'Team' },
    { href: '/api-docs', label: 'API Docs' },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border-b border-gray-200/20 dark:border-gray-700/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/dashboard" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">F</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              FlowCraft
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-200 ${
                  pathname === item.href
                    ? 'text-purple-600 dark:text-purple-400'
                    : 'text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400'
                }`}
              >
                {item.label}
                {pathname === item.href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600"
                    initial={false}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="hidden lg:block relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search..."
                className="w-64 pl-10 pr-4 py-2 bg-gray-100/50 dark:bg-gray-800/50 border border-gray-200/50 dark:border-gray-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500/50 transition-all duration-200"
              />
            </div>

            {/* Create Button */}
            {showCreateButton && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onCreateClick}
                className="hidden sm:flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Plus className="w-4 h-4" />
                <span className="font-medium">{createButtonText}</span>
              </motion.button>
            )}

            {/* Notifications */}
            <button className="relative p-2 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              <Bell className="w-5 h-5" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
            </button>

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-2 p-2 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <ChevronDown className="w-4 h-4" />
              </button>

              {isProfileOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-2 w-48 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-xl border border-gray-200/20 dark:border-gray-700/20 shadow-xl py-2"
                >
                  <Link href="/profile" className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100/50 dark:hover:bg-gray-700/50">
                    <User className="w-4 h-4" />
                    <span>My Profile</span>
                  </Link>
                  <Link href="/signin" className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100/50 dark:hover:bg-gray-700/50">
                    <span>Sign out</span>
                  </Link>
                </motion.div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 dark:text-gray-300"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-200/20 dark:border-gray-700/20 py-4"
          >
            <div className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    pathname === item.href
                      ? 'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20'
                      : 'text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              {showCreateButton && (
                <button
                  onClick={() => {
                    onCreateClick?.();
                    setIsMenuOpen(false);
                  }}
                  className="w-full flex items-center space-x-2 px-3 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium"
                >
                  <Plus className="w-4 h-4" />
                  <span>{createButtonText}</span>
                </button>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
