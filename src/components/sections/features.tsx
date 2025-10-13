"use client"

import { Container } from "@/components/ui/container"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Shield, Palette, Code, Smartphone, BarChart3 } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Built with Next.js 14 and optimized for maximum performance. Your users will love the speed."
  },
  {
    icon: Shield,
    title: "Secure by Default",
    description: "Enterprise-grade security features built-in. Your data and your users' data are always protected."
  },
  {
    icon: Palette,
    title: "Beautiful Design",
    description: "Modern, clean UI components with dark mode support. Designed with the latest trends in mind."
  },
  {
    icon: Code,
    title: "Developer Friendly",
    description: "Clean, well-documented code with TypeScript support. Easy to customize and extend."
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Responsive design that works perfectly on all devices. Mobile-optimized from the ground up."
  },
  {
    icon: BarChart3,
    title: "Analytics Ready",
    description: "Built-in analytics integration to track your growth and optimize your business metrics."
  }
]

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

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 relative overflow-hidden section-professional">
      {/* Effets d'arrière-plan cohérents */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}} />
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
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Features
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-foreground">
            Everything you need to{" "}
            <span className="gradient-text">
              succeed
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Built for developers who want to ship fast and scale efficiently. 
            Every component is crafted with attention to detail.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative z-10"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div key={`feature-${index}`} variants={item}>
              <Card className="relative h-full group card-modern overflow-hidden">
                <CardHeader className="pb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-card-foreground mb-3">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Highlight additionnel professionnel */}
        <motion.div 
          className="mt-20 text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="card-modern rounded-3xl p-10">
            <h3 className="text-3xl font-bold mb-6 gradient-text">
              And much more...
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
              Authentication, payments, email templates, database schemas, API routes, 
              and comprehensive documentation to get you started in minutes.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Authentication", "Payments", "Email", "Database", "API", "Documentation"].map((tag) => (
                <span key={tag} className="px-4 py-2 text-sm btn-primary rounded-full font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
