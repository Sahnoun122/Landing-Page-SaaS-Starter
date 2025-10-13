'use client'

import { ThemeToggle } from "@/components/ui/theme-toggle"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-mesh">
      {/* Header avec navigation */}
      <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border-b border-gray-200/30 dark:border-gray-700/30 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="rounded-full">
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <span className="font-semibold text-gray-900 dark:text-white">Back to Home</span>
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Modern Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-blue-500/20 dark:from-purple-600/30 dark:to-blue-600/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-600/30 dark:to-purple-600/30 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-sm font-medium mb-6">
            <Mail className="w-4 h-4" />
            We typically respond within 24 hours
          </div>
          
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
            Get in
            <span className="block gradient-text">touch</span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Have a question or want to work together? We'd love to hear from you. 
            Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="card-modern border-0 shadow-2xl hover:shadow-3xl transition-all duration-500">
              <CardHeader className="pb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-600 to-purple-600 flex items-center justify-center">
                    <Send className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                      Send us a message
                    </CardTitle>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Fill out the form below and we'll get back to you
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-gray-700 dark:text-gray-300 font-medium">
                      First name
                    </Label>
                    <Input 
                      id="firstName" 
                      className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:border-violet-500 dark:focus:border-violet-400 transition-colors" 
                      placeholder="John" 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-gray-700 dark:text-gray-300 font-medium">
                      Last name
                    </Label>
                    <Input 
                      id="lastName" 
                      className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:border-violet-500 dark:focus:border-violet-400 transition-colors" 
                      placeholder="Doe" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700 dark:text-gray-300 font-medium">
                    Email address
                  </Label>
                  <Input 
                    id="email" 
                    type="email" 
                    className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:border-violet-500 dark:focus:border-violet-400 transition-colors" 
                    placeholder="john@company.com" 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-gray-700 dark:text-gray-300 font-medium">
                    Subject
                  </Label>
                  <Input 
                    id="subject" 
                    className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:border-violet-500 dark:focus:border-violet-400 transition-colors" 
                    placeholder="How can we help you?" 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-700 dark:text-gray-300 font-medium">
                    Message
                  </Label>
                  <textarea 
                    id="message" 
                    className="w-full p-4 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-violet-500 dark:focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-500/20 resize-none h-32 text-gray-900 dark:text-white transition-colors"
                    placeholder="Tell us about your project or question..."
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <Card className="card-modern hover:shadow-xl transition-all duration-500 group">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Email Us</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">
                      Send us an email anytime and we'll get back to you within 24 hours.
                    </p>
                    <a 
                      href="mailto:contact@flowcraft.com" 
                      className="text-violet-600 dark:text-violet-400 font-semibold hover:underline"
                    >
                      contact@flowcraft.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-modern hover:shadow-xl transition-all duration-500 group">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Call Us</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">
                      Prefer to talk? Give us a call during business hours.
                    </p>
                    <a 
                      href="tel:+15551234567" 
                      className="text-violet-600 dark:text-violet-400 font-semibold hover:underline"
                    >
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-modern hover:shadow-xl transition-all duration-500 group">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Visit Us</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">
                      Come and say hello at our headquarters.
                    </p>
                    <address className="text-gray-600 dark:text-gray-300 not-italic">
                      123 Innovation Street<br />
                      Tech City, TC 12345<br />
                      United States
                    </address>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Check out our FAQ section or get in touch directly.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/#faq">
              <Button variant="outline" className="border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-3 text-lg">
                View FAQ
              </Button>
            </Link>
            <Link href="/">
              <Button variant="outline" className="border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-3 text-lg">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}