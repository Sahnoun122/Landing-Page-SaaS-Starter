"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Zap, Layers, Code, Eye, EyeOff, Mail, Lock, User, ArrowRight, Github, Chrome, Check } from "lucide-react"
import { motion } from "framer-motion"

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for getting started",
    features: ["5 projects", "10GB storage", "Basic support", "Community access"],
    recommended: false
  },
  {
    name: "Pro",
    price: "$29",
    description: "Best for growing teams",
    features: ["Unlimited projects", "100GB storage", "Priority support", "Advanced analytics", "Custom domains", "Team collaboration"],
    recommended: true
  },
  {
    name: "Enterprise",
    price: "$99",
    description: "For large organizations",
    features: ["Everything in Pro", "Unlimited storage", "24/7 phone support", "SSO integration", "Custom integrations", "Dedicated manager"],
    recommended: false
  }
]

export default function GetStartedPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState("Pro")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-mesh relative">
      {/* Theme Toggle */}
      <div className="absolute top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      {/* Modern Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}} />
      </div>
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_800px_600px_at_50%_-100px,_rgba(139,92,246,0.15),_transparent)] dark:bg-[radial-gradient(ellipse_800px_600px_at_50%_-100px,_rgba(139,92,246,0.25),_transparent)]" />
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-purple opacity-20 rounded-full blur-2xl animate-float" />
      <div className="absolute bottom-20 right-16 w-40 h-40 bg-gradient-to-br from-purple-400 to-blue-400 opacity-15 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}} />
      
      <div className="relative z-10 py-12">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="inline-flex items-center space-x-3 mb-6">
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
            <h1 className="text-5xl font-bold gradient-text mb-4">Get Started with FlowCraft</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose your plan and create your account to start building amazing workflows
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Plans Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-3xl font-bold mb-8 text-center lg:text-left">Choose Your Plan</h2>
              <div className="space-y-4">
                {plans.map((plan) => (
                  <div
                    key={plan.name}
                    className={`relative p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                      selectedPlan === plan.name
                        ? 'card-modern border-2 border-purple-500 shadow-2xl'
                        : 'glass-card border border-gray-200 dark:border-gray-800 hover:shadow-lg'
                    } ${plan.recommended ? 'ring-2 ring-purple-500/50' : ''}`}
                    onClick={() => setSelectedPlan(plan.name)}
                  >
                    {plan.recommended && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-purple text-white px-4 py-1 rounded-full text-sm font-medium">
                          Recommended
                        </span>
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{plan.name}</h3>
                        <p className="text-muted-foreground">{plan.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold gradient-text">{plan.price}</div>
                        {plan.price !== "Free" && <div className="text-sm text-muted-foreground">/month</div>}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      {plan.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {selectedPlan === plan.name && (
                      <div className="absolute top-4 right-4">
                        <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Signup Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="card-modern border-0 shadow-2xl">
                <CardHeader className="space-y-1 pb-6">
                  <CardTitle className="text-2xl font-bold text-center">Create Account</CardTitle>
                  <CardDescription className="text-center text-base">
                    Start your journey with FlowCraft today
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Social Signup */}
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

                  {/* Signup Form */}
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-sm font-medium">First name</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                          <Input
                            id="firstName"
                            type="text"
                            placeholder="John"
                            className="pl-10 h-12 glass-card border-0"
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-sm font-medium">Last name</Label>
                        <Input
                          id="lastName"
                          type="text"
                          placeholder="Doe"
                          className="h-12 glass-card border-0"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">Email address</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
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
                          placeholder="Create a strong password"
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

                    <div className="flex items-center space-x-2">
                      <input
                        id="terms"
                        type="checkbox"
                        className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500"
                        required
                      />
                      <Label htmlFor="terms" className="text-sm text-muted-foreground">
                        I agree to the{" "}
                        <Link href="/terms" className="text-purple-600 hover:text-purple-500">
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link href="/privacy" className="text-purple-600 hover:text-purple-500">
                          Privacy Policy
                        </Link>
                      </Label>
                    </div>

                    <Button
                      type="submit"
                      className="w-full h-12 btn-primary text-base font-semibold group"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <div className="flex items-center">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          Creating account...
                        </div>
                      ) : (
                        <>
                          Create Account
                          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Login link */}
              <div className="text-center mt-6">
                <p className="text-muted-foreground">
                  Already have an account?{" "}
                  <Link href="/login" className="text-purple-600 hover:text-purple-500 font-semibold">
                    Sign in
                  </Link>
                </p>
              </div>
            </motion.div>
          </div>

          {/* Back to home */}
          <motion.div
            className="text-center mt-12"
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
    </div>
  )
}


