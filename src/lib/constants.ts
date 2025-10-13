// Constantes et données de configuration pour le projet

export const SITE_CONFIG = {
  name: "SaaS Starter",
  description: "The most advanced SaaS starter kit with everything you need to launch your next big idea.",
  url: "https://saasstarterkit.com",
  ogImage: "/og-image.png",
  author: "SaaS Starter Team",
  email: "hello@saasstarterkit.com",
  version: "1.0.0"
} as const

export const NAVIGATION_ITEMS = [
  { name: "Features", href: "#features" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
] as const

export const SOCIAL_LINKS = [
  { name: "GitHub", href: "#", icon: "Github" },
  { name: "Twitter", href: "#", icon: "Twitter" },
  { name: "LinkedIn", href: "#", icon: "Linkedin" },
  { name: "Email", href: "mailto:hello@saasstarterkit.com", icon: "Mail" },
] as const

export const COMPANY_LINKS = [
  { name: "About", href: "#about" },
  { name: "Blog", href: "#blog" },
  { name: "Careers", href: "#careers" },
  { name: "Contact", href: "#contact" },
] as const

export const PRODUCT_LINKS = [
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "Documentation", href: "#docs" },
  { name: "API Reference", href: "#api" },
] as const

export const LEGAL_LINKS = [
  { name: "Privacy Policy", href: "#privacy" },
  { name: "Terms of Service", href: "#terms" },
  { name: "Cookie Policy", href: "#cookies" },
  { name: "GDPR", href: "#gdpr" },
] as const
