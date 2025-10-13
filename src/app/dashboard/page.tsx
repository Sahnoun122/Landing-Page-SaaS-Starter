'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { 
  BarChart3, 
  Users, 
  FolderOpen, 
  TrendingUp, 
  Activity, 
  Calendar,
  Clock,
  ArrowUpRight,
  ArrowDownRight,
  DollarSign,
  Target,
  Bell,
  ChevronRight,
  ArrowLeft,
  Settings,
  Search,
  Plus
} from 'lucide-react'

export default function DashboardPage() {
  const [timeRange, setTimeRange] = useState('7d')

  const stats = [
    {
      name: 'Total Projects',
      value: '24',
      change: '+12%',
      trend: 'up',
      icon: FolderOpen,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Active Users',
      value: '1,284',
      change: '+8%',
      trend: 'up',
      icon: Users,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Revenue',
      value: '$12,456',
      change: '+23%',
      trend: 'up',
      icon: DollarSign,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Conversion Rate',
      value: '3.2%',
      change: '-2%',
      trend: 'down',
      icon: Target,
      color: 'from-orange-500 to-red-500'
    }
  ]

  const recentProjects = [
    { id: 1, name: 'E-commerce Redesign', status: 'In Progress', progress: 75, members: 4, dueDate: '2024-01-15' },
    { id: 2, name: 'Mobile App Development', status: 'Review', progress: 90, members: 6, dueDate: '2024-01-20' },
    { id: 3, name: 'Brand Identity', status: 'Planning', progress: 25, members: 3, dueDate: '2024-01-25' },
    { id: 4, name: 'Website Optimization', status: 'Completed', progress: 100, members: 2, dueDate: '2024-01-10' }
  ]

  const activities = [
    { id: 1, user: 'Sarah Chen', action: 'completed task', project: 'E-commerce Redesign', time: '2 hours ago' },
    { id: 2, user: 'Mike Johnson', action: 'uploaded design', project: 'Mobile App', time: '4 hours ago' },
    { id: 3, user: 'Emily Davis', action: 'created new project', project: 'Brand Identity', time: '6 hours ago' },
    { id: 4, user: 'David Wilson', action: 'reviewed milestone', project: 'Website Optimization', time: '8 hours ago' }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border-green-200 dark:border-green-700'
      case 'In Progress': return 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-700'
      case 'Review': return 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 border-yellow-200 dark:border-yellow-700'
      case 'Planning': return 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-700'
      default: return 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 border-gray-200 dark:border-gray-700'
    }
  }

  return (
    <div className="min-h-screen bg-mesh">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h1 className="text-4xl font-black text-foreground mb-2">
                  Welcome back, <span className="gradient-text">John</span>! 👋
                </h1>
                <p className="text-xl text-muted-foreground">
                  Here's what's happening with your projects today
                </p>
              </div>
              
              <div className="mt-4 sm:mt-0 flex items-center space-x-3">
                <select
                  value={timeRange}
                  onChange={(e) => setTimeRange(e.target.value)}
                  className="glass-card border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all duration-300"
                >
                  <option value="7d">Last 7 days</option>
                  <option value="30d">Last 30 days</option>
                  <option value="90d">Last 90 days</option>
                </select>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-modern hover:shadow-2xl hover:scale-105 transition-all duration-500 group cursor-pointer"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="text-muted-foreground text-sm font-medium mb-2">
                        {stat.name}
                      </p>
                      <p className="text-3xl font-black text-card-foreground mb-3">
                        {stat.value}
                      </p>
                      <div className="flex items-center">
                        {stat.trend === 'up' ? (
                          <ArrowUpRight className="w-4 h-4 text-green-500 animate-bounce-subtle" />
                        ) : (
                          <ArrowDownRight className="w-4 h-4 text-red-500 animate-bounce-subtle" />
                        )}
                        <span className={`text-sm font-semibold ml-1 ${
                          stat.trend === 'up' 
                            ? 'text-green-600' 
                            : 'text-red-600'
                        }`}>
                          {stat.change}
                        </span>
                        <span className="text-xs text-muted-foreground ml-2">
                          vs last period
                        </span>
                      </div>
                    </div>
                    <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-2xl`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </CardContent>
              </motion.div>
            )
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Projects */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <Card className="card-modern hover:shadow-2xl transition-all duration-500">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl font-bold text-card-foreground">
                    Recent <span className="gradient-text">Projects</span>
                  </CardTitle>
                  <Button variant="ghost" className="text-primary hover:text-primary/80 hover:bg-secondary focus-ring">
                    <span>View all</span>
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {recentProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 glass-card hover:border-primary/30 transition-all duration-300 cursor-pointer group"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                        <FolderOpen className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-card-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                          {project.name}
                        </h3>
                        <div className="flex items-center space-x-4">
                          <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(project.status)} dark:bg-opacity-20`}>
                            {project.status}
                          </span>
                          <span className="text-muted-foreground text-sm">
                            {project.members} members
                          </span>
                          <span className="text-muted-foreground text-sm">
                            Due {project.dueDate}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <div className="text-sm font-semibold text-card-foreground mb-1">
                          {project.progress}%
                        </div>
                        <div className="w-20 bg-muted rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${project.progress}%` }}
                          />
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Card className="card-modern hover:shadow-2xl transition-all duration-500">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-bold text-card-foreground">
                    Recent <span className="gradient-text">Activity</span>
                  </CardTitle>
                  <div className="relative">
                    <Bell className="w-5 h-5 text-muted-foreground" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {activities.map((activity, index) => (
                  <motion.div
                    key={activity.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start space-x-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors duration-200"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Activity className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-card-foreground">
                        <span className="font-semibold">{activity.user}</span>
                        <span className="text-muted-foreground"> {activity.action} </span>
                        <span className="font-semibold text-primary">{activity.project}</span>
                      </p>
                      <p className="text-xs text-muted-foreground mt-1 flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {activity.time}
                      </p>
                    </div>
                  </motion.div>
                ))}
                
                <Button variant="ghost" className="w-full mt-4 pt-4 border-t border-border text-primary hover:text-primary/80 hover:bg-secondary focus-ring">
                  View all activity
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Performance Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-8"
        >
          <Card className="card-modern hover:shadow-2xl transition-all duration-500">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl font-bold text-card-foreground">
                  Performance <span className="gradient-text">Metrics</span>
                </CardTitle>
                <div className="glass-card px-4 py-2 rounded-full">
                  <div className="flex items-center space-x-2 text-sm text-card-foreground">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <Clock className="w-4 h-4" />
                    <span>Real-time</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* CPU Usage */}
            <div className="text-center">
              <div className="relative w-20 h-20 mx-auto mb-3">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="6"
                    className="text-gray-200"
                  />
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#10B981"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeDasharray="283"
                    initial={{ strokeDashoffset: 283 }}
                    animate={{ strokeDashoffset: 283 - (283 * 0.73) }}
                    transition={{ duration: 2, ease: "easeOut" }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm font-bold text-card-foreground">73%</span>
                </div>
              </div>
              <div className="text-sm text-card-foreground font-medium">CPU Usage</div>
              <div className="text-xs text-muted-foreground">Optimal</div>
            </div>
            
            {/* Memory */}
            <div className="text-center">
              <div className="relative w-20 h-20 mx-auto mb-3">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="6"
                    className="text-gray-200 dark:text-gray-700"
                  />
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#F59E0B"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeDasharray="283"
                    initial={{ strokeDashoffset: 283 }}
                    animate={{ strokeDashoffset: 283 - (283 * 0.85) }}
                    transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm font-bold text-card-foreground">85%</span>
                </div>
              </div>
              <div className="text-sm text-card-foreground font-medium">Memory</div>
              <div className="text-xs text-muted-foreground">High</div>
            </div>
            
            {/* Storage */}
            <div className="text-center">
              <div className="relative w-20 h-20 mx-auto mb-3">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="6"
                    className="text-gray-200"
                  />
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#3B82F6"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeDasharray="283"
                    initial={{ strokeDashoffset: 283 }}
                    animate={{ strokeDashoffset: 283 - (283 * 0.45) }}
                    transition={{ duration: 2, ease: "easeOut", delay: 0.4 }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm font-bold text-card-foreground">45%</span>
                </div>
              </div>
              <div className="text-sm text-card-foreground font-medium">Storage</div>
              <div className="text-xs text-muted-foreground">Good</div>
            </div>
          </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
