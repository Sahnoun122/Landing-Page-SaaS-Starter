"use client"

import { useState, useEffect } from "react"
import { Container } from "@/components/ui/container"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"
import { motion } from "framer-motion"
import { PricingPlansManager, type PricingPlan, formatCurrency } from "@/lib/billing-manager"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export function PricingSection() {
  const [plans, setPlans] = useState<PricingPlan[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Load pricing plans from billing manager
    const loadedPlans = PricingPlansManager.getPlans()
    setPlans(loadedPlans)
    setLoading(false)
  }, [])

  if (loading) {
    return (
      <section id="pricing" className="section-modern">
        <Container>
          <div className="text-center">
            <div className="w-8 h-8 border-4 border-gray-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="text-muted-foreground mt-4">Loading pricing plans...</p>
          </div>
        </Container>
      </section>
    )
  }

  if (plans.length === 0) {
    return (
      <section id="pricing" className="section-modern">
        <Container>
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Simple, transparent{" "}
              <span className="gradient-text">pricing</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Choose the perfect plan for your needs. Upgrade or downgrade at any time.
            </p>
            <div className="glass-card rounded-2xl p-8 max-w-md mx-auto">
              <p className="text-muted-foreground mb-6 text-lg">
                No pricing plans available at the moment.
              </p>
              <p className="text-sm text-muted-foreground">
                Please check back later or contact us for more information.
              </p>
            </div>
          </div>
        </Container>
      </section>
    )
  }
  return (
    <section id="pricing" className="section-professional py-24 relative overflow-hidden">
      {/* Effets d'arrière-plan cohérents */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}} />
      </div>
      
      <Container>
        <motion.div 
          className="text-center mb-20 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium mb-8">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Pricing
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-foreground">
            Simple, transparent{" "}
            <span className="gradient-text">pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect plan for your needs. Start free, upgrade anytime.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto pt-12 relative z-10"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {plans.map((plan) => (
            <motion.div key={plan.name} variants={item}>
              <Card className={`relative h-full group card-modern overflow-visible ${plan.popular ? 'border-primary/30 shadow-2xl scale-105' : 'mt-10'}`}>
                {plan.popular && (
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="btn-primary px-8 py-3 rounded-full text-sm font-bold flex items-center gap-2 shadow-2xl">
                      <Star className="w-4 h-4 fill-current" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <CardHeader className={`text-center pb-6 relative z-10 ${plan.popular ? 'pt-20' : 'pt-8'}`}>
                  <CardTitle className="text-3xl font-bold text-card-foreground group-hover:text-primary transition-colors duration-300">{plan.name}</CardTitle>
                  <CardDescription className="text-muted-foreground text-lg mt-2 transition-colors duration-300">
                    {plan.description}
                  </CardDescription>
                  <div className="mt-6">
                    <span className="text-5xl font-bold gradient-text">{formatCurrency(plan.price)}</span>
                    <span className="text-muted-foreground text-lg">/{plan.billing === 'monthly' ? 'month' : 'year'}</span>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0 relative z-10">
                  <Button 
                    className={`w-full mb-8 h-12 text-lg font-semibold rounded-xl transition-all duration-300 ${
                      plan.popular 
                        ? 'btn-primary' 
                        : 'btn-secondary'
                    }`}
                  >
                    {plan.buttonText}
                  </Button>
                  
                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3 group/item">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300" />
                        <span className="text-card-foreground group-hover/item:text-primary transition-colors duration-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        {/* FAQ CTA professionnel */}
        <motion.div 
          className="text-center mt-20 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="card-modern rounded-3xl p-10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Questions about pricing?
            </h3>
            <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
              We're here to help you find the perfect plan for your needs. 
              Check out our FAQ or contact our team directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-primary">
                View FAQ
              </Button>
              <Button className="btn-secondary">
                Contact Sales
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
