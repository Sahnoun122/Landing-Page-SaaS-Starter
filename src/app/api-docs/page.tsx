'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Key, Globe, Code, Copy, Check, Terminal, Shield, Users, Database, Zap } from 'lucide-react';

export default function ApiDocsPage() {
  const [activeSection, setActiveSection] = useState('quickstart');
  const [copiedCode, setCopiedCode] = useState('');

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(''), 2000);
  };

  return (
    <div className="min-h-screen bg-mesh p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="card-modern p-8 mb-8">
          <div className="flex items-center space-x-4 mb-6">
            <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-600 rounded-xl shadow-lg">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="gradient-text text-3xl font-bold">API Documentation</h1>
              <p className="text-muted-foreground mt-1">
                Complete guide to integrating with our REST API
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="card-modern p-6 sticky top-8">
              <h3 className="font-semibold text-card-foreground mb-4 flex items-center">
                <Terminal className="w-5 h-5 mr-2 text-primary" />
                API Sections
              </h3>
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveSection('quickstart')}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 flex items-center ${
                    activeSection === 'quickstart'
                      ? 'bg-primary/10 text-primary shadow-lg'
                      : 'text-muted-foreground hover:glass-card hover:text-card-foreground hover:shadow-lg'
                  }`}
                >
                  <Zap className="w-4 h-4 mr-2" />
                  Quick Start
                </button>
                <button
                  onClick={() => setActiveSection('authentication')}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 flex items-center ${
                    activeSection === 'authentication'
                      ? 'bg-primary/10 text-primary shadow-lg'
                      : 'text-muted-foreground hover:glass-card hover:text-card-foreground hover:shadow-lg'
                  }`}
                >
                  <Shield className="w-4 h-4 mr-2" />
                  Authentication
                </button>
                <button
                  onClick={() => setActiveSection('users')}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 flex items-center ${
                    activeSection === 'users'
                      ? 'bg-primary/10 text-primary shadow-lg'
                      : 'text-muted-foreground hover:glass-card hover:text-card-foreground hover:shadow-lg'
                  }`}
                >
                  <Users className="w-4 h-4 mr-2" />
                  Users
                </button>
                <button
                  onClick={() => setActiveSection('data')}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 flex items-center ${
                    activeSection === 'data'
                      ? 'bg-primary/10 text-primary shadow-lg'
                      : 'text-muted-foreground hover:glass-card hover:text-card-foreground hover:shadow-lg'
                  }`}
                >
                  <Database className="w-4 h-4 mr-2" />
                  Data
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeSection === 'quickstart' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
              >
                <div className="card-modern p-8">
                  <h2 className="gradient-text text-2xl font-bold mb-6 flex items-center">
                    <Zap className="w-6 h-6 mr-3 text-primary" />
                    Quick Start Guide
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="flex items-center text-lg font-semibold text-card-foreground mb-4">
                        <Key className="w-5 h-5 mr-2 text-blue-600" />
                        Authentication
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        All API requests require authentication using Bearer tokens.
                      </p>
                      <div className="relative bg-gray-900 dark:bg-gray-950 rounded-xl p-4 mb-6">
                        <button
                          onClick={() => copyToClipboard('Authorization: Bearer your_api_key_here', 'auth-header')}
                          className="absolute top-3 right-3 p-2 text-gray-400 hover:text-white transition-colors duration-200"
                        >
                          {copiedCode === 'auth-header' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        </button>
                        <code className="text-green-400 text-sm">
                          Authorization: Bearer your_api_key_here
                        </code>
                      </div>
                    </div>

                    <div>
                      <h3 className="flex items-center text-lg font-semibold text-card-foreground mb-4">
                        <Globe className="w-5 h-5 mr-2 text-green-600" />
                        Base URL
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        All API endpoints are relative to the base URL:
                      </p>
                      <div className="relative bg-gray-900 dark:bg-gray-950 rounded-xl p-4 mb-6">
                        <button
                          onClick={() => copyToClipboard('https://api.example.com/v1', 'base-url')}
                          className="absolute top-3 right-3 p-2 text-gray-400 hover:text-white transition-colors duration-200"
                        >
                          {copiedCode === 'base-url' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        </button>
                        <code className="text-blue-400 text-sm">
                          https://api.example.com/v1
                        </code>
                      </div>
                    </div>

                    <div>
                      <h3 className="flex items-center text-lg font-semibold text-card-foreground mb-4">
                        <Code className="w-5 h-5 mr-2 text-orange-600" />
                        Example Request
                      </h3>
                      <div className="relative bg-gray-900 dark:bg-gray-950 rounded-xl p-4">
                        <button
                          onClick={() => copyToClipboard('curl -X GET https://api.example.com/v1/users -H "Authorization: Bearer your_api_key" -H "Content-Type: application/json"', 'example-request')}
                          className="absolute top-3 right-3 p-2 text-gray-400 hover:text-white transition-colors duration-200"
                        >
                          {copiedCode === 'example-request' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        </button>
                        <code className="text-gray-300 text-sm">
                          curl -X GET https://api.example.com/v1/users -H "Authorization: Bearer your_api_key" -H "Content-Type: application/json"
                        </code>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeSection === 'authentication' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                    <Shield className="w-6 h-6 mr-3 text-purple-600" />
                    Authentication
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-8">
                    Secure your API requests with our authentication system
                  </p>
                  
                  <div className="space-y-4">
                    <div className="border border-gray-200/50 dark:border-gray-700/50 rounded-xl p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="px-3 py-1 rounded-lg text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                          POST
                        </span>
                        <code className="text-gray-900 dark:text-gray-100 font-mono">
                          /api/auth/login
                        </code>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Authenticate user and receive access token
                      </p>
                      <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                        <code className="text-sm text-gray-800 dark:text-gray-200">
                          {JSON.stringify({ token: "jwt_token", user: "user_data" }, null, 2)}
                        </code>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeSection === 'users' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                    <Users className="w-6 h-6 mr-3 text-purple-600" />
                    Users
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-8">
                    Manage user accounts and profiles
                  </p>
                  
                  <div className="space-y-4">
                    <div className="border border-gray-200/50 dark:border-gray-700/50 rounded-xl p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="px-3 py-1 rounded-lg text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                          GET
                        </span>
                        <code className="text-gray-900 dark:text-gray-100 font-mono">
                          /api/users
                        </code>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Retrieve list of all users
                      </p>
                      <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                        <code className="text-sm text-gray-800 dark:text-gray-200">
                          {JSON.stringify({ users: [], total: 100, page: 1 }, null, 2)}
                        </code>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeSection === 'data' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                    <Database className="w-6 h-6 mr-3 text-purple-600" />
                    Data
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-8">
                    Access and manipulate application data
                  </p>
                  
                  <div className="space-y-4">
                    <div className="border border-gray-200/50 dark:border-gray-700/50 rounded-xl p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="px-3 py-1 rounded-lg text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                          GET
                        </span>
                        <code className="text-gray-900 dark:text-gray-100 font-mono">
                          /api/data/analytics
                        </code>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Retrieve analytics data
                      </p>
                      <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                        <code className="text-sm text-gray-800 dark:text-gray-200">
                          {JSON.stringify({ data: [], summary: {} }, null, 2)}
                        </code>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}