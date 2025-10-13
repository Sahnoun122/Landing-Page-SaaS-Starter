'use client''use client''use client'



import Link from "next/link"

import { Button } from "@/components/ui/button"

import { Card, CardContent } from "@/components/ui/card"import Link from "next/link"import Link from "next/link"

import { ArrowLeft, Users, Target, Heart, Code } from "lucide-react"

import { motion } from "framer-motion"import { Button } from "@/components/ui/button"import { Button } from "@/components/ui/button"

import { ThemeToggle } from "@/components/ui/theme-toggle"

import { Card, CardContent } from "@/components/ui/card"import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {

  return (import { ArrowLeft, Zap, Layers, Code, Users, Target, Heart, Github, Twitter, Linkedin } from "lucide-react"import { ArrowLeft, Zap, Layers, Code, Users, Target, Heart, Github, Twitter, Linkedin } from "lucide-react"

    <div className="min-h-screen bg-mesh">

      {/* Theme Toggle */}import { motion } from "framer-motion"import { motion } from "framer-motion"

      <div className="absolute top-6 right-6 z-50">

        <ThemeToggle />import { ThemeToggle } from "@/components/ui/theme-toggle"import { ThemeToggle } from "@/components/ui/theme-toggle"

      </div>



      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Back Button */}export default function AboutPage() {export default function AboutPage() {

        <motion.div

          initial={{ opacity: 0, y: 20 }}  const team = [  const team = [

          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.6 }}    {

          className="mb-8"

        >      name: "John Smith",    },    {

          <Link 

            href="/"       role: "CEO & Founder",

            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"

          >      image: "https://randomuser.me/api/portraits/men/32.jpg",    {      name: "Alex Johnson",

            <ArrowLeft className="mr-2 h-4 w-4" />

            Back to home      bio: "Former senior engineer at Google with 10+ years building scalable systems.",

          </Link>

        </motion.div>      social: { twitter: "#", linkedin: "#", github: "#" }      icon: Target,      role: "CEO & Founder",



        {/* Header */}    },

        <motion.div

          initial={{ opacity: 0, y: 20 }}    {      title: 'Innovation',      image: "https://randomuser.me/api/portraits/men/32.jpg",

          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.6, delay: 0.1 }}      name: "Sarah Johnson",

          className="text-center mb-16"

        >      role: "Head of Design",      description: 'We continuously innovate to provide cutting-edge solutions.'      bio: "Former senior engineer at Google with 10+ years building scalable systems.",

          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">

            About FlowCraft      image: "https://randomuser.me/api/portraits/women/44.jpg",

          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">      bio: "Award-winning designer with experience at top design agencies worldwide.",    },      social: { twitter: "#", linkedin: "#", github: "#" }

            We're passionate about building tools that help teams create, collaborate, 

            and deliver exceptional digital experiences.      social: { twitter: "#", linkedin: "#", github: "#" }

          </p>

        </motion.div>    },    {    },



        {/* Mission */}    {

        <motion.div

          initial={{ opacity: 0, y: 20 }}      name: "Mike Chen",      icon: Award,    {

          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.6, delay: 0.2 }}      role: "Lead Developer",

          className="mb-20"

        >      image: "https://randomuser.me/api/portraits/men/85.jpg",      title: 'Excellence',      name: "Sarah Chen",

          <Card className="card-modern p-8">

            <CardContent className="p-0">      bio: "Full-stack developer and open-source contributor with expertise in React and Node.js.",

              <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>

              <p className="text-lg text-muted-foreground text-center leading-relaxed">      social: { twitter: "#", linkedin: "#", github: "#" }      description: 'We strive for excellence in every aspect of our work.'      role: "Head of Design",

                To empower creators and teams with intuitive, powerful tools that transform 

                ideas into reality. We believe that great software should be both beautiful     },

                and functional, helping users achieve more with less effort.

              </p>    {    },      image: "https://randomuser.me/api/portraits/women/44.jpg",

            </CardContent>

          </Card>      name: "Emily Park",

        </motion.div>

      role: "Product Manager",    {      bio: "Award-winning designer previously at Airbnb, passionate about user experience.",

        {/* CTA */}

        <motion.div      image: "https://randomuser.me/api/portraits/women/67.jpg",

          initial={{ opacity: 0, y: 20 }}

          animate={{ opacity: 1, y: 0 }}      bio: "Product strategist with a passion for user experience and growth optimization.",      icon: Lightbulb,      social: { twitter: "#", linkedin: "#", github: "#" }

          transition={{ duration: 0.6, delay: 0.5 }}

          className="text-center"      social: { twitter: "#", linkedin: "#", github: "#" }

        >

          <Card className="card-modern p-8">    }      title: 'Creativity',    },

            <CardContent className="p-0">

              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>  ]

              <p className="text-muted-foreground text-lg mb-8">

                Join thousands of teams already using FlowCraft to build amazing products.      description: 'We believe in creative thinking and bold ideas.'    {

              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">  const values = [

                <Button asChild className="btn-primary">

                  <Link href="/get-started">Get Started Free</Link>    {    }      name: "Marcus Rodriguez",

                </Button>

                <Button variant="outline" asChild>      icon: Users,

                  <Link href="/contact">Contact Us</Link>

                </Button>      title: 'Customer First',  ]      role: "Lead Developer",

              </div>

            </CardContent>      description: 'We put our customers at the heart of everything we do.'

          </Card>

        </motion.div>    },      image: "https://randomuser.me/api/portraits/men/85.jpg",

      </div>

    </div>    {

  )

}      icon: Target,  return (      bio: "Full-stack developer and open-source contributor with expertise in React and Node.js.",

      title: 'Innovation',

      description: 'We continuously innovate to provide cutting-edge solutions.'    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">      social: { twitter: "#", linkedin: "#", github: "#" }

    },

    {      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">    },

      icon: Heart,

      title: 'Excellence',        <motion.div    {

      description: 'We strive for excellence in every aspect of our work.'

    },          initial={{ opacity: 0, y: 20 }}      name: "Emily Park",

    {

      icon: Code,          animate={{ opacity: 1, y: 0 }}      role: "Product Manager",

      title: 'Creativity',

      description: 'We believe in creative thinking and bold ideas.'          transition={{ duration: 0.5 }}      image: "https://randomuser.me/api/portraits/women/68.jpg",

    }

  ]          className="text-center mb-16"      bio: "Product strategist with experience launching successful SaaS products at scale.",



  return (        >      social: { twitter: "#", linkedin: "#", github: "#" }

    <div className="min-h-screen bg-mesh">

      {/* Theme Toggle */}          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">    }

      <div className="absolute top-6 right-6 z-50">

        <ThemeToggle />            About Our Company  ]

      </div>

          </h1>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Back Button */}          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">  const stats = [

        <motion.div

          initial={{ opacity: 0, y: 20 }}            We are passionate about creating innovative solutions that help businesses     { label: "Happy Customers", value: "10,000+", icon: Users },

          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.6 }}            grow and succeed in the digital age.    { label: "Projects Created", value: "50,000+", icon: Layers },

          className="mb-8"

        >          </p>    { label: "Countries Served", value: "120+", icon: Target },

          <Link 

            href="/"         </motion.div>    { label: "Team Members", value: "25+", icon: Heart }

            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"

          >  ]

            <ArrowLeft className="mr-2 h-4 w-4" />

            Back to home        <motion.section

          </Link>

        </motion.div>          initial={{ opacity: 0, y: 30 }}  const values = [



        {/* Header */}          animate={{ opacity: 1, y: 0 }}    {

        <motion.div

          initial={{ opacity: 0, y: 20 }}          transition={{ duration: 0.6, delay: 0.2 }}      icon: Zap,

          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.6, delay: 0.1 }}          className="mb-20"      title: "Innovation First",

          className="text-center mb-16"

        >        >      description: "We constantly push the boundaries of what's possible in SaaS development."

          <div className="inline-flex items-center space-x-3 mb-6">

            <div className="relative h-16 w-16 rounded-2xl bg-gradient-to-br from-purple-600 via-purple-700 to-blue-600 flex items-center justify-center shadow-2xl">          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">    },

              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-400 to-blue-400 opacity-75 blur-lg" />

              <div className="relative flex items-center justify-center">            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h2>    {

                <Layers className="h-6 w-6 text-white absolute transform -rotate-12" />

                <Code className="h-5 w-5 text-purple-200 absolute transform rotate-12 translate-x-1" />            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">      icon: Users,

                <Zap className="h-8 w-8 text-white relative z-10" />

              </div>              To empower businesses worldwide with cutting-edge SaaS solutions that drive       title: "Customer Focused",

            </div>

          </div>              growth, increase efficiency, and unlock new possibilities.      description: "Every decision we make is driven by our commitment to customer success."

          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">

            About FlowCraft            </p>    },

          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">          </div>    {

            We're passionate about building tools that help teams create, collaborate, 

            and deliver exceptional digital experiences.        </motion.section>      icon: Heart,

          </p>

        </motion.div>      title: "Quality Driven",



        {/* Mission */}        <motion.section      description: "We believe in delivering excellence in every line of code and pixel of design."

        <motion.div

          initial={{ opacity: 0, y: 20 }}          initial={{ opacity: 0, y: 30 }}    },

          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.6, delay: 0.2 }}          animate={{ opacity: 1, y: 0 }}    {

          className="mb-20"

        >          transition={{ duration: 0.6, delay: 0.4 }}      icon: Target,

          <Card className="card-modern p-8">

            <CardContent className="p-0">        >      title: "Mission Driven",

              <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>

              <p className="text-lg text-muted-foreground text-center leading-relaxed">          <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-12">Our Values</h2>      description: "Our goal is to democratize SaaS development for creators worldwide."

                To empower creators and teams with intuitive, powerful tools that transform 

                ideas into reality. We believe that great software should be both beautiful           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">    }

                and functional, helping users achieve more with less effort.

              </p>            {values.map((value, index) => {  ]

            </CardContent>

          </Card>              const Icon = value.icon

        </motion.div>

              return (  return (

        {/* Values */}

        <motion.div                <motion.div    <div className="min-h-screen bg-gradient-to-br from-purple-50/50 via-white/30 to-blue-50/50 dark:from-purple-900/20 dark:via-gray-900/40 dark:to-blue-900/20">

          initial={{ opacity: 0, y: 20 }}

          animate={{ opacity: 1, y: 0 }}                  key={value.title}      {/* Background decorations */}

          transition={{ duration: 0.6, delay: 0.3 }}

          className="mb-20"                  initial={{ opacity: 0, y: 20 }}      <div className="absolute inset-0 bg-[radial-gradient(ellipse_800px_600px_at_50%_-100px,_rgba(139,92,246,0.15),_transparent)] dark:bg-[radial-gradient(ellipse_800px_600px_at_50%_-100px,_rgba(139,92,246,0.25),_transparent)]" />

        >

          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>                  animate={{ opacity: 1, y: 0 }}      

          <div className="grid md:grid-cols-2 gap-6">

            {values.map((value, index) => {                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}      {/* Floating orbs */}

              const Icon = value.icon

              return (                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-purple opacity-20 rounded-full blur-2xl animate-float" />

                <Card key={index} className="card-modern hover:shadow-lg transition-shadow">

                  <CardContent className="p-6">                >      <div className="absolute bottom-20 right-16 w-40 h-40 bg-gradient-to-br from-purple-400 to-blue-400 opacity-15 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}} />

                    <div className="flex items-center mb-4">

                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">                  <div className="flex items-center mb-4">      

                        <Icon className="w-6 h-6 text-white" />

                      </div>                    <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-4">      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">

                      <h3 className="text-xl font-semibold">{value.title}</h3>

                    </div>                      <Icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />        {/* Back to Home */}

                    <p className="text-muted-foreground">{value.description}</p>

                  </CardContent>                    </div>        <motion.div

                </Card>

              )                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{value.title}</h3>          className="mb-8"

            })}

          </div>                  </div>          initial={{ opacity: 0, x: -20 }}

        </motion.div>

                  <p className="text-gray-600 dark:text-gray-300">{value.description}</p>          animate={{ opacity: 1, x: 0 }}

        {/* Team */}

        <motion.div                </motion.div>          transition={{ duration: 0.6 }}

          initial={{ opacity: 0, y: 20 }}

          animate={{ opacity: 1, y: 0 }}              )        >

          transition={{ duration: 0.6, delay: 0.4 }}

          className="mb-20"            })}          <Link 

        >

          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>          </div>            href="/" 

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {team.map((member, index) => (        </motion.section>            className="inline-flex items-center gap-2 text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors duration-200"

              <Card key={index} className="card-modern text-center hover:shadow-lg transition-shadow">

                <CardContent className="p-6">      </div>          >

                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">

                    <img     </div>            <ArrowLeft className="w-4 h-4" />

                      src={member.image} 

                      alt={member.name}  )            Back to Home

                      className="w-full h-full object-cover"

                    />}          </Link>

                  </div>        </motion.div>

                  <h3 className="text-lg font-semibold mb-1">{member.name}</h3>

                  <p className="text-purple-600 dark:text-purple-400 text-sm font-medium mb-3">        {/* Header */}

                    {member.role}        <motion.div

                  </p>          className="text-center mb-20"

                  <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>          initial={{ opacity: 0, y: 20 }}

                  <div className="flex justify-center space-x-3">          animate={{ opacity: 1, y: 0 }}

                    <a href={member.social.twitter} className="text-muted-foreground hover:text-purple-600 transition-colors">          transition={{ duration: 0.6, delay: 0.1 }}

                      <Twitter className="w-4 h-4" />        >

                    </a>          <div className="flex items-center justify-center space-x-3 mb-6">

                    <a href={member.social.linkedin} className="text-muted-foreground hover:text-purple-600 transition-colors">            <Link href="/" className="flex items-center space-x-2">

                      <Linkedin className="w-4 h-4" />              <div className="relative h-12 w-12 rounded-2xl bg-gradient-to-br from-purple-600 via-purple-700 to-blue-600 flex items-center justify-center shadow-xl">

                    </a>                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-400 to-blue-400 opacity-75 blur-sm" />

                    <a href={member.social.github} className="text-muted-foreground hover:text-purple-600 transition-colors">                <div className="relative flex items-center justify-center">

                      <Github className="w-4 h-4" />                  <Layers className="h-5 w-5 text-white absolute transform -rotate-12" />

                    </a>                  <Code className="h-4 w-4 text-purple-200 absolute transform rotate-12 translate-x-0.5" />

                  </div>                  <Zap className="h-6 w-6 text-white relative z-10" />

                </CardContent>                </div>

              </Card>                <div className="absolute top-0.5 right-0.5 w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />

            ))}              </div>

          </div>              <span className="font-bold text-2xl gradient-text">FlowCraft</span>

        </motion.div>            </Link>

          </div>

        {/* CTA */}          

        <motion.div          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">

          initial={{ opacity: 0, y: 20 }}            <span className="text-foreground">Building the </span>

          animate={{ opacity: 1, y: 0 }}            <span className="gradient-text">Future</span>

          transition={{ duration: 0.6, delay: 0.5 }}            <span className="text-foreground"> of SaaS</span>

          className="text-center"          </h1>

        >          

          <Card className="card-modern p-8">          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">

            <CardContent className="p-0">            We're on a mission to democratize SaaS development by providing developers with the most 

              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>            advanced tools and templates to build, launch, and scale their ideas faster than ever before.

              <p className="text-muted-foreground text-lg mb-8">          </p>

                Join thousands of teams already using FlowCraft to build amazing products.        </motion.div>

              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">        {/* Stats */}

                <Button asChild className="btn-primary">        <motion.div

                  <Link href="/get-started">Get Started Free</Link>          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"

                </Button>          initial={{ opacity: 0, y: 20 }}

                <Button variant="outline" asChild>          animate={{ opacity: 1, y: 0 }}

                  <Link href="/contact">Contact Us</Link>          transition={{ duration: 0.6, delay: 0.3 }}

                </Button>        >

              </div>          {stats.map((stat, index) => (

            </CardContent>            <Card key={index} className="card-modern border-0 shadow-lg text-center">

          </Card>              <CardContent className="p-6">

        </motion.div>                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-purple rounded-2xl flex items-center justify-center shadow-lg">

      </div>                  <stat.icon className="w-6 h-6 text-white" />

    </div>                </div>

  )                <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>

}                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Story Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  FlowCraft was born from a simple frustration: building modern SaaS applications 
                  required starting from scratch every single time. As developers ourselves, we 
                  spent countless hours recreating the same authentication flows, dashboard layouts, 
                  and user management systems.
                </p>
                <p>
                  In 2023, we decided to change that. We set out to create the most comprehensive, 
                  modern, and developer-friendly SaaS starter kit available. What started as an 
                  internal tool quickly grew into something much bigger.
                </p>
                <p>
                  Today, FlowCraft powers thousands of SaaS applications worldwide, helping 
                  developers ship faster and focus on what really matters - building great products 
                  that solve real problems.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="glass-card p-8 rounded-2xl border-0 shadow-lg">
                <div className="space-y-4">
                  <div className="h-4 bg-gradient-to-r from-purple-500/50 to-blue-500/50 rounded w-3/4" />
                  <div className="h-4 bg-gradient-to-r from-blue-500/50 to-purple-500/50 rounded w-1/2" />
                  <div className="h-4 bg-gradient-to-r from-purple-500/50 to-blue-500/50 rounded w-5/6" />
                  <div className="h-4 bg-gradient-to-r from-blue-500/50 to-purple-500/50 rounded w-2/3" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
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
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-purple rounded-2xl flex items-center justify-center shadow-lg">
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
          transition={{ duration: 0.6, delay: 0.9 }}
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
          transition={{ duration: 0.6, delay: 1.1 }}
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
