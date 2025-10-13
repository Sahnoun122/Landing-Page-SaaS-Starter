/**
 * Projects Management Page Component
 * 
 * This is a comprehensive project management interface that allows users to:
 * - View all projects in a grid or list layout
 * - Search and filter projects by status, priority, and keywords
 * - Sort projects by different criteria
 * - View detailed project information including progress, team members, and revenue
 * - Switch between different view modes (grid/list)
 * 
 * Key Features:
 * - Responsive design that works on all screen sizes
 * - Real-time search functionality
 * - Advanced filtering options
 * - Beautiful animations using Framer Motion
 * - Progress indicators and status badges
 * - Team member avatars and role information
 * - Revenue tracking per project
 * - Task completion metrics
 * 
 * Customization:
 * - Update the `projects` array with your actual project data
 * - Modify the status and priority options to match your workflow
 * - Customize the color schemes and styling
 * - Add additional filters or sorting options as needed
 * - Connect to your backend API for real data management
 */

'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Search, 
  Filter, 
  MoreVertical, 
  Calendar, 
  Users, 
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
  XCircle,
  Star,
  GitBranch,
  Eye,
  Edit3,
  Trash2,
  Share2,
  Download,
  Plus,
  X,
  FolderKanban
} from 'lucide-react'

// TypeScript interface defining the structure of a project object
interface Project {
  id: string
  name: string
  description: string
  status: 'active' | 'completed' | 'paused' | 'archived'
  priority: 'low' | 'medium' | 'high' | 'critical'
  progress: number
  dueDate: string
  team: { name: string; avatar: string; role: string }[]
  tags: string[]
  revenue: number
  tasks: { total: number; completed: number }
  lastActivity: string
  color: string
}

const projects: Project[] = [
  {
    id: '1',
    name: 'E-commerce Platform',
    description: 'Modern shopping platform with advanced analytics and AI recommendations',
    status: 'active',
    priority: 'high',
    progress: 78,
    dueDate: '2024-03-15',
    team: [
      { name: 'Sarah Chen', avatar: '/avatars/sarah.jpg', role: 'Lead Developer' },
      { name: 'Mike Johnson', avatar: '/avatars/mike.jpg', role: 'UI/UX Designer' },
      { name: 'Emily Davis', avatar: '/avatars/emily.jpg', role: 'Product Manager' }
    ],
    tags: ['React', 'TypeScript', 'Stripe', 'AWS'],
    revenue: 125000,
    tasks: { total: 45, completed: 35 },
    lastActivity: '2 hours ago',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: '2',
    name: 'Mobile Banking App',
    description: 'Secure mobile banking solution with biometric authentication',
    status: 'active',
    priority: 'critical',
    progress: 92,
    dueDate: '2024-02-28',
    team: [
      { name: 'David Wilson', avatar: '/avatars/david.jpg', role: 'Security Expert' },
      { name: 'Lisa Zhang', avatar: '/avatars/lisa.jpg', role: 'Mobile Developer' }
    ],
    tags: ['React Native', 'Node.js', 'PostgreSQL', 'Security'],
    revenue: 340000,
    tasks: { total: 32, completed: 29 },
    lastActivity: '1 hour ago',
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: '3',
    name: 'AI Content Generator',
    description: 'AI-powered content creation tool for marketing teams',
    status: 'paused',
    priority: 'medium',
    progress: 45,
    dueDate: '2024-04-20',
    team: [
      { name: 'Alex Kumar', avatar: '/avatars/alex.jpg', role: 'AI Engineer' },
      { name: 'Sophie Martin', avatar: '/avatars/sophie.jpg', role: 'Data Scientist' }
    ],
    tags: ['Python', 'TensorFlow', 'OpenAI', 'FastAPI'],
    revenue: 75000,
    tasks: { total: 28, completed: 13 },
    lastActivity: '3 days ago',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: '4',
    name: 'Healthcare Dashboard',
    description: 'Comprehensive patient management system for hospitals',
    status: 'completed',
    priority: 'high',
    progress: 100,
    dueDate: '2024-01-31',
    team: [
      { name: 'Dr. James Lee', avatar: '/avatars/james.jpg', role: 'Medical Advisor' },
      { name: 'Anna Rodriguez', avatar: '/avatars/anna.jpg', role: 'Full Stack Developer' }
    ],
    tags: ['Vue.js', 'Laravel', 'MySQL', 'HIPAA'],
    revenue: 280000,
    tasks: { total: 67, completed: 67 },
    lastActivity: '1 week ago',
    color: 'from-teal-500 to-blue-500'
  }
]

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedStatus, setSelectedStatus] = useState('all')
  const [selectedPriority, setSelectedPriority] = useState('all')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [showFilters, setShowFilters] = useState(false)

  // Écouter l'événement personnalisé pour ouvrir le modal de création
  useEffect(() => {
    const handleOpenCreateModal = () => {
      setShowCreateModal(true)
    }

    window.addEventListener('openCreateProjectModal', handleOpenCreateModal)
    return () => {
      window.removeEventListener('openCreateProjectModal', handleOpenCreateModal)
    }
  }, [])

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    
    const matchesStatus = selectedStatus === 'all' || project.status === selectedStatus
    const matchesPriority = selectedPriority === 'all' || project.priority === selectedPriority
    
    return matchesSearch && matchesStatus && matchesPriority
  })

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return <TrendingUp className="w-4 h-4 text-green-500" />
      case 'completed': return <CheckCircle className="w-4 h-4 text-blue-500" />
      case 'paused': return <Clock className="w-4 h-4 text-yellow-500" />
      case 'archived': return <XCircle className="w-4 h-4 text-gray-500" />
      default: return <AlertCircle className="w-4 h-4 text-gray-500" />
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'bg-red-100 text-red-800 border-red-200'
      case 'high': return 'bg-orange-100 text-orange-800 border-orange-200'
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'low': return 'bg-green-100 text-green-800 border-green-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const stats = [
    { name: 'Total Projects', value: projects.length, change: '+12%', icon: FolderKanban, color: 'from-blue-500 to-cyan-500' },
    { name: 'Active Projects', value: projects.filter(p => p.status === 'active').length, change: '+8%', icon: TrendingUp, color: 'from-green-500 to-emerald-500' },
    { name: 'Completed', value: projects.filter(p => p.status === 'completed').length, change: '+15%', icon: CheckCircle, color: 'from-purple-500 to-pink-500' },
    { name: 'Total Revenue', value: `$${projects.reduce((sum, p) => sum + p.revenue, 0).toLocaleString()}`, change: '+23%', icon: TrendingUp, color: 'from-orange-500 to-red-500' },
  ]

  return (
    <div className="min-h-screen bg-mesh">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row sm:items-start sm:justify-between"
          >
            <div>
              <h1 className="gradient-text text-3xl font-bold mb-2">
                Projects
              </h1>
              <p className="text-muted-foreground">
                Manage and track all your projects in one place
              </p>
            </div>
            
            <button
              onClick={() => setShowCreateModal(true)}
              className="mt-4 sm:mt-0 btn-base btn-primary btn-md inline-flex items-center space-x-2"
            >
              <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">New Project</span>
              <span className="sm:hidden">New</span>
            </button>
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
                className="card-modern p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm font-medium">
                      {stat.name}
                    </p>
                    <p className="text-2xl font-bold text-card-foreground mt-1">
                      {stat.value}
                    </p>
                    <p className="text-green-600 dark:text-green-400 text-sm font-medium mt-1">
                      {stat.change} from last month
                    </p>
                  </div>
                  <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Filters and Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="card-modern p-6 mb-8"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            {/* Search */}
            <div className="relative flex-1 max-w-lg">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search projects, tags, or descriptions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 glass-card border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all duration-200"
              />
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 px-4 py-3 glass-card border-0 rounded-xl hover:shadow-lg transition-all duration-200"
            >
              <Filter className="w-5 h-5 text-muted-foreground" />
              <span className="text-muted-foreground font-medium">Filters</span>
            </button>

            {/* View Mode */}
            <div className="flex items-center space-x-2 glass-card rounded-xl p-1 border-0">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3 py-2 rounded-lg font-medium transition-all duration-200 ${
                  viewMode === 'grid'
                    ? 'bg-card text-primary shadow-sm'
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                Grid
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-3 py-2 rounded-lg font-medium transition-all duration-200 ${
                  viewMode === 'list'
                    ? 'bg-card text-primary shadow-sm'
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                List
              </button>
            </div>
          </div>

          {/* Expanded Filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-6 pt-6 border-t border-border/20"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Status
                    </label>
                    <select
                      value={selectedStatus}
                      onChange={(e) => setSelectedStatus(e.target.value)}
                      className="w-full px-3 py-2 glass-card border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all duration-200"
                    >
                      <option value="all">All Status</option>
                      <option value="active">Active</option>
                      <option value="completed">Completed</option>
                      <option value="paused">Paused</option>
                      <option value="archived">Archived</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Priority
                    </label>
                    <select
                      value={selectedPriority}
                      onChange={(e) => setSelectedPriority(e.target.value)}
                      className="w-full px-3 py-2 glass-card border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all duration-200"
                    >
                      <option value="all">All Priorities</option>
                      <option value="critical">Critical</option>
                      <option value="high">High</option>
                      <option value="medium">Medium</option>
                      <option value="low">Low</option>
                    </select>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Projects Grid/List */}
        <div className={`${viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}`}>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group card-modern hover:shadow-xl transition-all duration-300 p-6`}
            >
              {viewMode === 'grid' ? (
                <>
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${project.color} rounded-xl flex items-center justify-center`}>
                      <FolderKanban className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full border ${getPriorityColor(project.priority)}`}>
                        {project.priority.toUpperCase()}
                      </span>
                      <button className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors duration-200">
                      {project.name}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Progress */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-muted-foreground">
                        Progress
                      </span>
                      <span className="text-sm font-semibold text-card-foreground">
                        {project.progress}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${project.progress}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className={`h-2 bg-gradient-to-r ${project.color} rounded-full`}
                      />
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-md">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Team */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex -space-x-2">
                        {project.team.slice(0, 3).map((member, i) => (
                          <div
                            key={i}
                            className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full border-2 border-white dark:border-gray-800 flex items-center justify-center text-white text-xs font-semibold"
                          >
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </div>
                        ))}
                        {project.team.length > 3 && (
                          <div className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full border-2 border-white dark:border-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 text-xs font-semibold">
                            +{project.team.length - 3}
                          </div>
                        )}
                      </div>
                      <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
                        {getStatusIcon(project.status)}
                        <span className="text-xs font-medium capitalize">{project.status}</span>
                      </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200/20 dark:border-gray-700/20">
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Due: {new Date(project.dueDate).toLocaleDateString()}
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200">
                        <Edit3 className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200">
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                /* List View */
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-10 h-10 bg-gradient-to-br ${project.color} rounded-lg flex items-center justify-center`}>
                      <FolderKanban className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200">
                        {project.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {project.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="text-center">
                      <div className="text-sm font-semibold text-gray-900 dark:text-white">
                        {project.progress}%
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Progress</div>
                    </div>
                    <div className="flex items-center space-x-1">
                      {getStatusIcon(project.status)}
                      <span className="text-sm font-medium capitalize text-gray-700 dark:text-gray-300">
                        {project.status}
                      </span>
                    </div>
                    <div className="flex -space-x-1">
                      {project.team.slice(0, 3).map((member, i) => (
                        <div
                          key={i}
                          className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full border-2 border-white dark:border-gray-800 flex items-center justify-center text-white text-xs font-semibold"
                        >
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      ))}
                    </div>
                    <button className="p-2 text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <FolderKanban className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              No projects found
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {searchQuery || selectedStatus !== 'all' || selectedPriority !== 'all'
                ? 'Try adjusting your search or filters'
                : 'Get started by creating your first project'
              }
            </p>
            <button
              onClick={() => setShowCreateModal(true)}
              className="btn-base btn-primary btn-lg inline-flex items-center space-x-2"
            >
              <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-responsive-sm">Create New Project</span>
            </button>
          </motion.div>
        )}
      </div>

      {/* Create Project Modal - FULLSCREEN */}
      <AnimatePresence>
        {showCreateModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50"
            onClick={() => setShowCreateModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="w-full h-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header fixe */}
              <div className="flex items-center justify-between p-8 border-b border-gray-200/20 dark:border-gray-700/20 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl">
                <div>
                  <h2 className="text-4xl font-bold gradient-text">Create New Project</h2>
                  <p className="text-muted-foreground mt-2 text-xl">
                    Start a new project and configure its settings
                  </p>
                </div>
                <button
                  onClick={() => setShowCreateModal(false)}
                  className="h-14 w-14 p-0 hover:bg-red-100 hover:text-red-600 dark:hover:bg-red-900/20 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                >
                  <X className="w-8 h-8" />
                </button>
              </div>
              
              {/* Contenu scrollable */}
              <div className="flex-1 overflow-y-auto p-8">
                <div className="max-w-4xl mx-auto">
                  <div className="space-y-8">
                    <div>
                      <label className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">
                        Project Name *
                      </label>
                      <input
                        type="text"
                        placeholder="Enter project name..."
                        className="w-full h-14 px-4 py-2 text-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-200/20 dark:border-gray-700/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">
                        Description
                      </label>
                      <textarea
                        placeholder="Project description..."
                        rows={6}
                        className="w-full px-4 py-2 text-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-200/20 dark:border-gray-700/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <label className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">
                          Priority
                        </label>
                        <select className="w-full h-14 px-4 py-2 text-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-200/20 dark:border-gray-700/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                          <option value="low">Low</option>
                          <option value="medium">Medium</option>
                          <option value="high">High</option>
                          <option value="critical">Critical</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">
                          Due Date
                        </label>
                        <input
                          type="date"
                          className="w-full h-14 px-4 py-2 text-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-200/20 dark:border-gray-700/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Footer fixe avec boutons */}
              <div className="p-8 border-t border-gray-200/20 dark:border-gray-700/20 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl">
                <div className="max-w-4xl mx-auto flex justify-end space-x-6">
                  <button
                    onClick={() => setShowCreateModal(false)}
                    className="btn-base btn-secondary btn-lg h-12 sm:h-14"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => setShowCreateModal(false)}
                    className="btn-base btn-primary btn-lg h-12 sm:h-14"
                  >
                    Create Project
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
