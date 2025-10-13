"use client"

import { Container } from "@/components/ui/container"
import { Accordion } from "@/components/ui/accordion"
import { motion } from "framer-motion"

const faqItems = [
  {
    question: "What's included in the SaaS starter kit?",
    answer: "Our starter kit includes a complete Next.js application with authentication, payment processing, user management, API routes, database schemas, email templates, and comprehensive documentation. Everything you need to launch your SaaS quickly."
  },
  {
    question: "Can I customize the design and components?",
    answer: "Absolutely! All components are built with Tailwind CSS and are fully customizable. The code is clean, well-documented, and follows best practices, making it easy to modify colors, layouts, and functionality to match your brand."
  },
  {
    question: "What technologies are used?",
    answer: "We use the latest technologies including Next.js 14, TypeScript, Tailwind CSS, Framer Motion, Prisma, NextAuth.js, Stripe for payments, and Resend for emails. All tools are industry-standard and actively maintained."
  },
  {
    question: "Do you provide support and updates?",
    answer: "Yes! We provide ongoing support through our Discord community and email. You'll also receive free updates with new features, security patches, and compatibility updates for at least 12 months after purchase."
  },
  {
    question: "Can I use this for commercial projects?",
    answer: "Yes, you can use our starter kit for unlimited commercial projects. Once you purchase, you have full rights to modify, customize, and sell applications built with our code."
  },
  {
    question: "Is there a money-back guarantee?",
    answer: "We offer a 30-day money-back guarantee. If you're not completely satisfied with the starter kit, contact us within 30 days of purchase for a full refund."
  }
]

export function FAQSection() {
  return (
    <section id="faq" className="section-alt py-24 relative overflow-hidden">
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
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              FAQ
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-foreground">
            Frequently asked{" "}
            <span className="gradient-text">questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a different question? Contact our support team and we'll get back to you.
          </p>
        </motion.div>
        
        <motion.div 
          className="max-w-4xl mx-auto relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="card-modern rounded-3xl p-8 md:p-12">
            <Accordion items={faqItems} />
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
