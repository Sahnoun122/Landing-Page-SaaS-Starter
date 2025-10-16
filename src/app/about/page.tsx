'use client'

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Zap, Layers, Code, Users, Target, Heart, Github, Twitter, Linkedin } from "lucide-react"
import { motion } from "framer-motion"
import { ThemeToggle } from "@/components/ui/theme-toggle"

const team = [
  {
    name: "Alex Johnson",
    role: "CEO & Founder", 
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "Former senior engineer at Google with 10+ years building scalable systems.",
    social: { twitter: "#", linkedin: "#", github: "#" }
  },
  {
    name: "Sarah Chen",
    role: "Head of Design",
    image: "https://randomuser.me/api/portraits/women/44.jpg", 
    bio: "Award-winning designer previously at Airbnb, passionate about user experience.",
    social: { twitter: "#", linkedin: "#", github: "#" }
  },
  {
    name: "Marcus Rodriguez", 
    role: "Lead Developer",
    image: "https://randomuser.me/api/portraits/men/85.jpg",
    bio: "Full-stack developer and open-source contributor with expertise in React and Node.js.",
    social: { twitter: "#", linkedin: "#", github: "#" }
  },
  {
    name: "Emily Park",
    role: "Product Manager", 
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    bio: "Product strategist with experience launching successful SaaS products at scale.",
    social: { twitter: "#", linkedin: "#", github: "#" }
  }
]

const stats = [
  { label: "Happy Customers", value: "10,000+", icon: Users },
  { label: "Projects Created", value: "50,000+", icon: Layers },
  { label: "Countries Served", value: "120+", icon: Target },
  { label: "Team Members", value: "25+", icon: Heart }
]

const values = [
  {
    icon: Zap,
    title: "Innovation First",
    description: "We constantly push the boundaries of what's possible in SaaS development."
  },
  {
    icon: Users,
    title: "Customer Focused", 
    description: "Every decision we make is driven by our commitment to customer success."
  },
  {
    icon: Heart,
    title: "Quality Driven",
    description: "We believe in delivering excellence in every line of code and pixel of design."
  },
  {
    icon: Target,
    title: "Mission Driven",
    description: "Our goal is to democratize SaaS development for creators worldwide."
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50/50 via-white/30 to-blue-50/50 dark:from-purple-900/20 dark:via-gray-900/40 dark:to-blue-900/20">
      {/* Theme Toggle */}
      <div className="absolute top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
        {/* Back to Home */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">About </span>
            <span className="gradient-text">FlowCraft</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We're on a mission to democratize SaaS development by providing developers with the most 
            advanced tools and templates to build, launch, and scale their ideas faster than ever before.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {stats.map((stat, index) => (
            <Card key={index} className="card-modern border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Values */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The principles that guide everything we do and every decision we make.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="card-modern border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Team */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The passionate individuals behind FlowCraft, working to make SaaS development accessible to everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="card-modern border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
                    <Image 
                      src={member.image} 
                      alt={member.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                  <p className="text-purple-600 dark:text-purple-400 text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{member.bio}</p>
                  <div className="flex justify-center space-x-3">
                    <Link href={member.social.twitter} className="text-muted-foreground hover:text-purple-600 transition-colors">
                      <Twitter className="w-4 h-4" />
                    </Link>
                    <Link href={member.social.linkedin} className="text-muted-foreground hover:text-purple-600 transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </Link>
                    <Link href={member.social.github} className="text-muted-foreground hover:text-purple-600 transition-colors">
                      <Github className="w-4 h-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <Card className="card-modern border-0 shadow-lg bg-gradient-to-br from-purple-500 to-blue-600 text-white overflow-hidden relative max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
            <CardContent className="relative p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to join us?</h2>
              <p className="text-purple-100 text-lg mb-8 max-w-2xl mx-auto">
                Start building your next SaaS application with FlowCraft today and become part of our growing community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/get-started">
                  <Button className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-3">
                    Get Started Free
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-3">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}