"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  User, 
  Mail, 
  MapPin, 
  Calendar, 
  Phone, 
  Globe, 
  Camera, 
  Edit3, 
  Save, 
  X,
  Building,
  Briefcase,
  Award,
  Clock,
  Shield,
  Settings,
  LogOut,
  Sparkles,
  Star,
  TrendingUp
} from "lucide-react"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [profileData, setProfileData] = useState({
    firstName: "John",
    lastName: "Doe", 
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    website: "https://johndoe.dev",
    company: "FlowCraft Inc.",
    jobTitle: "Senior Full Stack Developer",
    bio: "Passionate developer with 8+ years of experience building scalable web applications. I love creating beautiful user interfaces and robust backend systems.",
    joinDate: "January 2024",
    profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  })

  const handleInputChange = (field: string, value: string) => {
    setProfileData(prev => ({ ...prev, [field]: value }))
  }

  const handleSave = () => {
    console.log("Saving profile:", profileData)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setIsEditing(false)
  }

  const stats = [
    { label: "Projects", value: "24", icon: Briefcase, color: "from-purple-500 to-blue-500" },
    { label: "Completed", value: "18", icon: Award, color: "from-green-500 to-emerald-500" },
    { label: "Hours Logged", value: "1,247", icon: Clock, color: "from-orange-500 to-red-500" },
    { label: "Team Members", value: "12", icon: User, color: "from-pink-500 to-rose-500" }
  ]

  return (
    <div className="min-h-screen bg-mesh">
      {/* Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-32 w-96 h-96 bg-gradient-to-br from-purple-400/30 to-pink-400/30 dark:from-purple-500/20 dark:to-pink-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -left-32 w-96 h-96 bg-gradient-to-br from-blue-400/30 to-purple-400/30 dark:from-blue-500/20 dark:to-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute -bottom-40 right-1/4 w-96 h-96 bg-gradient-to-br from-pink-400/30 to-orange-400/30 dark:from-pink-500/20 dark:to-orange-500/20 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      {/* Theme Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      <Container className="py-12 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="gradient-text text-3xl font-bold mb-2">
            User Profile
          </h1>
          <p className="text-muted-foreground">
            Manage your personal information and account settings
          </p>
        </motion.div>
        {/* Profile Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card-modern mb-12 overflow-hidden relative group"
        >
          {/* Premium gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/5 to-pink-500/10 dark:from-purple-400/20 dark:via-blue-400/10 dark:to-pink-400/20" />
          
          {/* Animated sparkles */}
          <div className="absolute top-4 left-6 opacity-30 dark:opacity-40">
            <Sparkles className="w-6 h-6 text-purple-500 animate-pulse" />
          </div>
          <div className="absolute bottom-4 right-8 opacity-20 dark:opacity-30">
            <Star className="w-4 h-4 text-pink-500 animate-bounce delay-1000" />
          </div>

          {/* Cover Background */}
          <div className="h-32 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            <div className="absolute inset-0 bg-mesh opacity-20" />
            
            <div className="absolute top-6 right-6">
              {!isEditing ? (
                <Button
                  onClick={() => setIsEditing(true)}
                  className="bg-white/20 hover:bg-white/30 backdrop-blur-xl border-white/30 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  size="sm"
                >
                  <Edit3 className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              ) : (
                <div className="flex space-x-3">
                  <Button
                    onClick={handleCancel}
                    variant="outline"
                    size="sm"
                    className="bg-red-500/20 hover:bg-red-500/30 backdrop-blur-xl border-red-300/30 text-white transition-all duration-300"
                  >
                    <X className="w-4 h-4 mr-2" />
                    Cancel
                  </Button>
                  <Button
                    onClick={handleSave}
                    size="sm"
                    className="bg-white text-purple-600 hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    Save Changes
                  </Button>
                </div>
              )}
            </div>
          </div>

          {/* Profile Info */}
          <div className="px-8 pb-8 relative">
            <div className="flex flex-col lg:flex-row lg:items-end lg:space-x-8">
              {/* Profile Picture */}
              <div className="relative -mt-16 mb-6 lg:mb-0">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
                  <img
                    src={profileData.profileImage}
                    alt="Profile"
                    className="relative w-32 h-32 rounded-full border-4 border-white dark:border-gray-800 shadow-2xl object-cover hover:scale-105 transition-transform duration-300"
                  />
                  {isEditing && (
                    <div className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                      <Camera className="w-8 h-8 text-white" />
                    </div>
                  )}
                </div>
              </div>

              {/* Profile Details */}
              <div className="flex-1">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    {isEditing ? (
                      <div className="space-y-4 mb-4">
                        <div className="grid grid-cols-2 gap-4">
                          <Input
                            value={profileData.firstName}
                            onChange={(e) => handleInputChange("firstName", e.target.value)}
                            placeholder="First Name"
                            className="text-lg font-bold glass-input"
                          />
                          <Input
                            value={profileData.lastName}
                            onChange={(e) => handleInputChange("lastName", e.target.value)}
                            placeholder="Last Name"
                            className="text-lg font-bold glass-input"
                          />
                        </div>
                        <Input
                          value={profileData.jobTitle}
                          onChange={(e) => handleInputChange("jobTitle", e.target.value)}
                          placeholder="Job Title"
                          className="glass-input"
                        />
                      </div>
                    ) : (
                      <div className="mb-4">
                        <h2 className="gradient-text text-3xl md:text-4xl font-bold mb-2">
                          {profileData.firstName} {profileData.lastName}
                        </h2>
                        <p className="text-xl text-muted-foreground mb-3">
                          {profileData.jobTitle}
                        </p>
                        <div className="flex items-center text-muted-foreground">
                          <Building className="w-5 h-5 mr-2 text-primary" />
                          <span className="font-medium">{profileData.company}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Quick Actions */}
                  <div className="flex items-center space-x-3">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="hidden lg:flex glass-card hover:shadow-lg transition-all duration-300 hover:scale-105"
                    >
                      <Settings className="w-4 h-4 mr-2" />
                      Settings
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="hidden lg:flex text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 border-red-200 dark:border-red-800 transition-all duration-300"
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      Sign Out
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Profile Details */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Personal Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="card-modern">
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-card-foreground">Personal Information</h3>
                      <p className="text-muted-foreground">Your personal details and contact information</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <Label className="text-sm font-semibold flex items-center gap-2 text-card-foreground">
                          <Mail className="w-4 h-4 text-primary" />
                          Email Address
                        </Label>
                        {isEditing ? (
                          <Input
                            value={profileData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            type="email"
                            className="glass-input"
                          />
                        ) : (
                          <div className="glass-card p-4 font-medium text-card-foreground">
                            {profileData.email}
                          </div>
                        )}
                      </div>
                      
                      <div className="space-y-3">
                        <Label className="text-sm font-semibold flex items-center gap-2 text-card-foreground">
                          <Phone className="w-4 h-4 text-blue-500" />
                          Phone Number
                        </Label>
                        {isEditing ? (
                          <Input
                            value={profileData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            className="glass-input"
                          />
                        ) : (
                          <div className="glass-card p-4 font-medium text-card-foreground">
                            {profileData.phone}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <Label className="text-sm font-semibold flex items-center gap-2 text-card-foreground">
                          <MapPin className="w-4 h-4 text-green-500" />
                          Location
                        </Label>
                        {isEditing ? (
                          <Input
                            value={profileData.location}
                            onChange={(e) => handleInputChange("location", e.target.value)}
                            className="glass-input"
                          />
                        ) : (
                          <div className="glass-card p-4 font-medium text-card-foreground">
                            {profileData.location}
                          </div>
                        )}
                      </div>
                      
                      <div className="space-y-3">
                        <Label className="text-sm font-semibold flex items-center gap-2 text-card-foreground">
                          <Globe className="w-4 h-4 text-orange-500" />
                          Website
                        </Label>
                        {isEditing ? (
                          <Input
                            value={profileData.website}
                            onChange={(e) => handleInputChange("website", e.target.value)}
                            className="glass-input"
                          />
                        ) : (
                          <a
                            href={profileData.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glass-card p-4 font-medium text-primary hover:text-primary/80 block transition-all duration-300 hover:shadow-lg"
                          >
                            {profileData.website}
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label className="text-sm font-semibold text-card-foreground">Bio</Label>
                      {isEditing ? (
                        <textarea
                          value={profileData.bio}
                          onChange={(e) => handleInputChange("bio", e.target.value)}
                          rows={4}
                          className="w-full px-4 py-3 glass-card border-0 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 resize-none text-card-foreground"
                          placeholder="Tell us about yourself..."
                        />
                      ) : (
                        <div className="glass-card p-4 text-card-foreground leading-relaxed">
                          {profileData.bio}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Professional Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="card-modern">
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-card-foreground">Professional Information</h3>
                      <p className="text-muted-foreground">Your work experience and professional details</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label className="text-sm font-semibold text-card-foreground">Company</Label>
                      {isEditing ? (
                        <Input
                          value={profileData.company}
                          onChange={(e) => handleInputChange("company", e.target.value)}
                          className="glass-input"
                        />
                      ) : (
                        <div className="glass-card p-4 font-medium text-card-foreground">
                          {profileData.company}
                        </div>
                      )}
                    </div>
                    
                    <div className="space-y-3">
                      <Label className="text-sm font-semibold flex items-center gap-2 text-card-foreground">
                        <Calendar className="w-4 h-4 text-primary" />
                        Member Since
                      </Label>
                      <div className="glass-card p-4 font-medium text-card-foreground">
                        {profileData.joinDate}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Stats & Security */}
          <div className="space-y-8">
            
            {/* Stats Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="card-modern">
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-card-foreground">Statistics</h3>
                      <p className="text-muted-foreground">Your activity overview</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="glass-card p-4 hover:shadow-lg transition-all duration-300 group hover:scale-105"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                              <stat.icon className="w-5 h-5 text-white" />
                            </div>
                            <span className="font-medium text-muted-foreground">
                              {stat.label}
                            </span>
                          </div>
                          <span className="text-2xl font-bold gradient-text">
                            {stat.value}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Security Settings */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="card-modern">
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-card-foreground">Security</h3>
                      <p className="text-muted-foreground">Manage your account security</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button 
                      variant="outline" 
                      className="w-full justify-start glass-card hover:shadow-lg transition-all duration-300 hover:scale-105 group"
                    >
                      <Shield className="w-4 h-4 mr-3 text-primary group-hover:text-primary/80 transition-colors" />
                      Change Password
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full justify-start glass-card hover:shadow-lg transition-all duration-300 hover:scale-105 group"
                    >
                      <Settings className="w-4 h-4 mr-3 text-blue-500 group-hover:text-blue-600 transition-colors" />
                      Privacy Settings
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full justify-start glass-card hover:shadow-lg transition-all duration-300 hover:scale-105 group border-red-200 dark:border-red-800"
                    >
                      <LogOut className="w-4 h-4 mr-3 text-red-500 group-hover:text-red-600 transition-colors" />
                      Sign Out
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  )
}