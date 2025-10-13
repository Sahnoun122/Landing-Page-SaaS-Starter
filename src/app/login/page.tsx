"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Zap, Layers, Code, Eye, EyeOff, Mail, Lock, ArrowRight, Github, Chrome } from "lucide-react"
import { motion } from "framer-motion"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-mesh relative">
      {/* Theme Toggle */}
      <div className="absolute top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      {/* Modern Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}} />
      </div>
      <div className="absolute bottom-20 right-16 w-40 h-40 bg-gradient-to-br from-purple-400 to-blue-400 opacity-15 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}} />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 opacity-25 rounded-full blur-2xl animate-float" style={{animationDelay: '4s'}} />
      
      <div className="w-full max-w-md relative z-10">
        {/* Logo */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/" className="inline-flex items-center space-x-3 mb-4">
            <div className="relative h-16 w-16 rounded-2xl bg-gradient-to-br from-purple-600 via-purple-700 to-blue-600 flex items-center justify-center shadow-2xl">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-400 to-blue-400 opacity-75 blur-lg" />
              <div className="relative flex items-center justify-center">
                <Layers className="h-6 w-6 text-white absolute transform -rotate-12" />
                <Code className="h-5 w-5 text-purple-200 absolute transform rotate-12 translate-x-1" />
                <Zap className="h-8 w-8 text-white relative z-10" />
              </div>
              <div className="absolute top-1 right-1 w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
            </div>
          </Link>
          <h1 className="text-3xl font-bold gradient-text mb-2">Welcome back</h1>
          <p className="text-muted-foreground">Sign in to your FlowCraft account</p>
        </motion.div>

        {/* Login Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Card className="card-modern border-0 shadow-2xl">
            <CardHeader className="space-y-1 pb-6">
              <CardTitle className="text-2xl font-bold text-center">Sign in</CardTitle>
              <CardDescription className="text-center text-base">
                Enter your email and password to access your account
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Social Login */}
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="h-12 glass-card border-0">
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </Button>
                <Button variant="outline" className="h-12 glass-card border-0">
                  <Chrome className="mr-2 h-5 w-5" />
                  Google
                </Button>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator className="w-full" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                </div>
              </div>

              {/* Login Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">Email address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="pl-10 h-12 glass-card border-0"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm font-medium">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="pl-10 pr-12 h-12 glass-card border-0"
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5 text-muted-foreground" />
                      ) : (
                        <Eye className="h-5 w-5 text-muted-foreground" />
                      )}
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <input
                      id="remember"
                      type="checkbox"
                      className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500"
                    />
                    <Label htmlFor="remember" className="text-sm text-muted-foreground">
                      Remember me
                    </Label>
                  </div>
                  <Link
                    href="/forgot-password"
                    className="text-sm text-purple-600 hover:text-purple-500 font-medium"
                  >
                    Forgot password?
                  </Link>
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 btn-primary text-base font-semibold group"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Signing in...
                    </div>
                  ) : (
                    <>
                      Sign in
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        {/* Sign up link */}
        <motion.div
          className="text-center mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-muted-foreground">
            Don't have an account?{" "}
            <Link href="/get-started" className="text-purple-600 hover:text-purple-500 font-semibold">
              Get started
            </Link>
          </p>
        </motion.div>

        {/* Back to home */}
        <motion.div
          className="text-center mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center">
            ← Back to home
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

