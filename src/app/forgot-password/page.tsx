"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Zap, Layers, Code, Mail, ArrowLeft, ArrowRight, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isEmailSent, setIsEmailSent] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsLoading(false)
    setIsEmailSent(true)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center p-4 relative">
      {/* Theme Toggle */}
      <div className="absolute top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_800px_600px_at_50%_-100px,_rgba(139,92,246,0.15),_transparent)] dark:bg-[radial-gradient(ellipse_800px_600px_at_50%_-100px,_rgba(139,92,246,0.25),_transparent)]" />
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-purple opacity-20 rounded-full blur-2xl animate-float" />
      <div className="absolute bottom-20 right-16 w-40 h-40 bg-gradient-to-br from-purple-400 to-blue-400 opacity-15 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}} />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 opacity-25 rounded-full blur-2xl animate-float" style={{animationDelay: '4s'}} />
      <div className="absolute top-1/4 right-1/4 w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-400 opacity-30 rounded-full blur-xl animate-float" style={{animationDelay: '1s'}} />
      
      <div className="w-full max-w-md relative z-10">
        {/* Logo */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/" className="inline-flex items-center space-x-3 mb-4 group">
            <div className="relative h-16 w-16 rounded-2xl bg-gradient-to-br from-purple-600 via-purple-700 to-blue-600 flex items-center justify-center shadow-2xl transform group-hover:scale-105 transition-all duration-300">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-400 to-blue-400 opacity-75 blur-lg" />
              <div className="relative flex items-center justify-center">
                <Layers className="h-6 w-6 text-white absolute transform -rotate-12 group-hover:-rotate-6 transition-transform duration-300" />
                <Code className="h-5 w-5 text-purple-200 absolute transform rotate-12 translate-x-1 group-hover:rotate-6 transition-transform duration-300" />
                <Zap className="h-8 w-8 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="absolute top-1 right-1 w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
            </div>
          </Link>
          
          {!isEmailSent ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-3xl font-bold gradient-text mb-2">Forgot Password?</h1>
              <p className="text-muted-foreground">No worries, we'll send you reset instructions</p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
              <h1 className="text-3xl font-bold gradient-text mb-2">Check Your Email</h1>
              <p className="text-muted-foreground">We sent a password reset link to {email}</p>
            </motion.div>
          )}
        </motion.div>

        {/* Reset Password Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Card className="card-modern bg-white dark:bg-black border-0 shadow-2xl">
            {!isEmailSent ? (
              <>
                <CardHeader className="space-y-1 pb-6">
                  <CardTitle className="text-2xl font-bold text-center">Reset Password</CardTitle>
                  <CardDescription className="text-center text-base">
                    Enter your email and we'll send you a link to reset your password
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Reset Form */}
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">Email address</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          className="pl-10 h-12 glass-card bg-white dark:bg-black border-0"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full h-12 btn-primary text-base font-semibold group"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <div className="flex items-center">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          Sending reset link...
                        </div>
                      ) : (
                        <>
                          Send Reset Link
                          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </>
            ) : (
              <CardContent className="space-y-6 p-8">
                <div className="text-center space-y-4">
                  <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800">
                    <p className="text-sm text-green-700 dark:text-green-300">
                      We've sent a password reset link to your email address. Please check your inbox and follow the instructions to reset your password.
                    </p>
                  </div>
                  
                  <div className="text-sm text-muted-foreground">
                    <p>Didn't receive the email? Check your spam folder or </p>
                    <Button
                      variant="link"
                      className="p-0 h-auto font-semibold text-purple-600 hover:text-purple-500"
                      onClick={() => setIsEmailSent(false)}
                    >
                      try again
                    </Button>
                  </div>

                  <Button
                    onClick={() => setIsEmailSent(false)}
                    className="w-full h-12 btn-secondary text-base font-semibold"
                  >
                    Back to Reset Form
                  </Button>
                </div>
              </CardContent>
            )}
          </Card>
        </motion.div>

        {/* Back to login */}
        <motion.div
          className="text-center mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link 
            href="/login" 
            className="text-muted-foreground hover:text-foreground inline-flex items-center text-sm font-medium group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to login
          </Link>
        </motion.div>

        {/* Additional help */}
        <motion.div
          className="text-center mt-8 p-4 glass-card bg-white dark:bg-black rounded-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="font-semibold mb-2">Need more help?</h3>
          <p className="text-sm text-muted-foreground mb-3">
            If you're still having trouble accessing your account, our support team is here to help.
          </p>
          <Link href="/contact" className="text-sm text-purple-600 hover:text-purple-500 font-medium">
            Contact Support →
          </Link>
        </motion.div>

        {/* Back to home */}
        <motion.div
          className="text-center mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center">
            ← Back to home
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

