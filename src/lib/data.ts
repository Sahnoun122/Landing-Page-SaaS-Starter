// Données pour les différentes sections de la landing page
import { Zap, Shield, Palette, Code, Smartphone, BarChart3 } from "lucide-react"

export const FEATURES_DATA = [
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
    description: "Built-in analytics integration. Track user behavior and optimize your conversion rates."
  }
] as const

export const TESTIMONIALS_DATA = [
  {
    content: "This SaaS starter saved me months of development time. The code quality is exceptional and the documentation is crystal clear. Highly recommended!",
    author: {
      name: "Sarah Chen",
      role: "Founder @ TechFlow",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face&auto=format"
    },
    rating: 5
  },
  {
    content: "The best investment I've made for my startup. Clean code, modern design, and everything works out of the box. Our users love working with it.",
    author: {
      name: "Marcus Rodriguez",
      role: "CTO @ DataVibe",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face&auto=format"
    },
    rating: 5
  },
  {
    content: "Incredible attention to detail. The UI components are beautiful and the developer experience is fantastic. This is how all starter kits should be built.",
    author: {
      name: "Emily Watson",
      role: "Lead Developer @ Nexus",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face&auto=format"
    },
    rating: 5
  }
] as const

export const PRICING_PLANS = [
  {
    name: "Starter",
    description: "Perfect for side projects and small applications",
    price: "$29",
    period: "/month",
    features: [
      "Up to 1,000 users",
      "Basic authentication",
      "Standard support",
      "Core components",
      "Basic analytics"
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Pro",
    description: "Best for growing businesses and organizations",
    price: "$79",
    period: "/month",
    features: [
      "Up to 10,000 users",
      "Advanced authentication",
      "Priority support",
      "All components",
      "Advanced analytics",
      "Custom integrations",
      "Multi-user support"
    ],
    cta: "Start Free Trial",
    popular: true
  },
  {
    name: "Enterprise",
    description: "For large organizations with custom needs",
    price: "Custom",
    period: "",
    features: [
      "Unlimited users",
      "SSO & Advanced security",
      "24/7 dedicated support",
      "Custom components",
      "Enterprise analytics",
      "White-label solution",
      "SLA guarantee",
      "Custom integrations"
    ],
    cta: "Contact Sales",
    popular: false
  }
] as const

export const FAQ_DATA = [
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
] as const
