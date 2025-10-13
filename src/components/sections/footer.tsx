"use client"

import Link from "next/link"
import { Container } from "@/components/ui/container"
import { Github, Twitter, Linkedin, Mail, Zap, Layers, Code } from "lucide-react"

const navigation = {
  product: [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Documentation", href: "#docs" },
    { name: "API Reference", href: "#api" },
  ],
  company: [
    { name: "About", href: "#about" },
    { name: "Blog", href: "#blog" },
    { name: "Careers", href: "#careers" },
    { name: "Contact", href: "/contact" },
  ],
  support: [
    { name: "Help Center", href: "/contact" },
    { name: "Contact Support", href: "/contact" },
    { name: "System Status", href: "#status" },
    { name: "Community", href: "#community" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
    { name: "Cookie Policy", href: "#cookies" },
    { name: "GDPR", href: "#gdpr" },
  ],
  social: [
    {
      name: "GitHub",
      href: "#",
      icon: Github,
    },
    {
      name: "Twitter",
      href: "#",
      icon: Twitter,
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: Linkedin,
    },
    {
      name: "Email",
      href: "mailto:hello@saasstarterkit.com",
      icon: Mail,
    },
  ],
}

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-white overflow-hidden">
      
      <Container>
        <div className="py-20 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
            {/* Brand */}
            <div className="col-span-1 md:col-span-2">
              <Link href="/" className="flex items-center space-x-3 mb-6">
                {/* Modern logo design */}
                <div className="relative h-12 w-12 rounded-2xl bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-600 flex items-center justify-center shadow-2xl transform hover:scale-105 transition-all duration-300">
                  {/* Background glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-400 to-purple-400 opacity-75 blur-lg" />
                  
                  {/* Main icon stack */}
                  <div className="relative flex items-center justify-center">
                    <Layers className="h-5 w-5 text-white absolute transform -rotate-12" />
                    <Code className="h-4 w-4 text-purple-200 absolute transform rotate-12 translate-x-1" />
                    <Zap className="h-6 w-6 text-white relative z-10" />
                  </div>
                  
                  {/* Accent dot */}
                  <div className="absolute top-1 right-1 w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                </div>
                
                <div className="flex flex-col">
                  <span className="font-bold text-2xl text-white leading-tight">FlowCraft</span>
                  <span className="text-xs text-purple-300 font-medium tracking-wider">PRO</span>
                </div>
              </Link>
              <p className="text-gray-300 text-base leading-relaxed mb-6">
                The most advanced SaaS starter kit for developers who want to build powerful workflows and scale efficiently.
              </p>
              <div className="flex space-x-5">
                {navigation.social.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" />
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Product */}
            <div>
              <h3 className="font-bold text-white mb-6 text-lg">Product</h3>
              <ul className="space-y-4">
                {navigation.product.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-white transition-colors font-medium"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Support */}
            <div>
              <h3 className="font-bold text-white mb-6 text-lg">Support</h3>
              <ul className="space-y-4">
                {navigation.support.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-white transition-colors font-medium"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Company */}
            <div>
              <h3 className="font-bold text-white mb-6 text-lg">Company</h3>
              <ul className="space-y-4">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-white transition-colors font-medium"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Legal */}
            <div>
              <h3 className="font-bold text-white mb-6 text-lg">Legal</h3>
              <ul className="space-y-4">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-white transition-colors font-medium"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="border-t border-purple-800/50 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-300 font-medium">
              © 2024 FlowCraft PRO. All rights reserved.
            </p>
            <p className="text-gray-300 font-medium">
              Built with ❤️ using Next.js, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
