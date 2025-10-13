'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Container } from "@/components/ui/container"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { motion } from "framer-motion"
import { 
  ArrowLeft, 
  Check, 
  Star, 
  Headphones, 
  Crown,
  Rocket,
  Users,
  Zap
} from "lucide-react"

export default function PricingPage() {
  // Updated pricing page with professional design
  const plans = [
    {
      name: 'Starter',
      price: '29',
      originalPrice: '49',
      description: 'Perfect for individuals and small teams getting started',
      icon: Rocket,
      popular: false,
      features: [
        'Up to 5 projects',
        '10GB storage',
        'Basic support',
        'Standard templates',
        'Mobile app access',
        'Basic analytics'
      ],
      buttonText: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: '79',
      originalPrice: '129',
      description: 'Ideal for growing teams and businesses',
      icon: Crown,
      popular: true,
      features: [
        'Up to 50 projects',
        '100GB storage',
        'Priority support',
        'Premium templates',
        'Advanced analytics',
        'Team collaboration',
        'API access',
        'Custom integrations'
      ],
      buttonText: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      originalPrice: null,
      description: 'For large organizations with advanced needs',
      icon: Users,
      popular: false,
      features: [
        'Unlimited projects',
        'Unlimited storage',
        '24/7 dedicated support',
        'Custom templates',
        'Advanced security',
        'SSO integration',
        'Custom onboarding',
        'SLA guarantee'
      ],
      buttonText: 'Contact Sales'
    }
  ]

  return (
    <div className="min-h-screen bg-mesh">
      {/* Header avec navigation */}
      <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border-b border-gray-200/30 dark:border-gray-700/30 sticky top-0 z-50">
        <Container>
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="rounded-full">
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <span className="font-semibold text-gray-900 dark:text-white">Back to Home</span>
            </Link>
            <ThemeToggle />
          </div>
        </Container>
      </div>

      <Container>
        <div className="py-20">
          {/* Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              Trusted by 50,000+ developers
            </div>
            
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
              Simple, transparent
              <span className="block gradient-text">pricing</span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Choose the perfect plan for your team. Start with a 14-day free trial, 
              no credit card required.
            </p>
          </motion.div>

          {/* Plans Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
          >
            {plans.map((plan, index) => {
              const IconComponent = plan.icon
              return (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative ${plan.popular ? 'lg:scale-105 lg:-mt-4' : ''}`}
                >
                  <Card className={`relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-105 ${
                    plan.popular
                      ? 'border-2 border-violet-500 dark:border-violet-400 shadow-xl shadow-violet-500/25 dark:shadow-violet-400/25'
                      : 'card-modern'
                  }`}>
                    {plan.popular && (
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold">
                          Most Popular
                        </div>
                      </div>
                    )}
                    
                    <CardContent className="p-8">
                      {/* Plan Header */}
                      <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-purple-600 mb-4">
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {plan.name}
                        </h3>
                        
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          {plan.description}
                        </p>
                      </div>

                      {/* Pricing */}
                      <div className="text-center mb-8">
                        {plan.price === 'Custom' ? (
                          <div className="text-4xl font-black text-gray-900 dark:text-white">
                            Custom
                          </div>
                        ) : (
                          <div className="flex items-center justify-center gap-2">
                            {plan.originalPrice && (
                              <span className="text-2xl text-gray-400 line-through">
                                ${plan.originalPrice}
                              </span>
                            )}
                            <span className="text-5xl font-black text-gray-900 dark:text-white">
                              ${plan.price}
                            </span>
                            <span className="text-gray-600 dark:text-gray-400">
                              /month
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Features */}
                      <ul className="space-y-4 mb-8">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-3">
                            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                              <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
                            </div>
                            <span className="text-gray-700 dark:text-gray-300">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA Button */}
                      <Button 
                        className={`w-full py-6 text-lg font-semibold rounded-xl transition-all duration-300 ${
                          plan.popular
                            ? 'bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl'
                            : plan.name === 'Enterprise'
                            ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100'
                            : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
                        }`}
                      >
                        {plan.buttonText}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>

          {/* FAQ Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Still have questions?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Our team is here to help you choose the right plan
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white px-8 py-3 text-lg">
                  <Headphones className="w-5 h-5 mr-2" />
                  Talk to Sales
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-3 text-lg">
                  View FAQ
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  )
}
