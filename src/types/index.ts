// Types de données pour le projet SaaS Landing Page

export interface Feature {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}

export interface Testimonial {
  content: string
  author: {
    name: string
    role: string
    image: string
  }
  rating: number
}

export interface PricingPlan {
  name: string
  description: string
  price: string
  period: string
  features: string[]
  cta: string
  popular: boolean
}

export interface FAQItem {
  question: string
  answer: string
}

export interface NavigationItem {
  name: string
  href: string
}

export interface SocialLink {
  name: string
  href: string
  icon: React.ComponentType<{ className?: string }>
}
