"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  ArrowLeft,
  CreditCard,
  Download,
  Receipt,
  Calendar,
  DollarSign,
  FileText,
  Clock,
  CheckCircle,
  AlertCircle,
  Zap,
  Layers,
  Code,
  Filter,
  Search,
  ExternalLink
} from "lucide-react"
import { motion } from "framer-motion"

export default function BillingPage() {
  const [filterStatus, setFilterStatus] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const currentPlan = {
    name: "Pro Plan",
    price: 29,
    billing: "monthly",
    nextBilling: "2024-02-15",
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "Priority support",
      "100GB storage",
      "API access"
    ]
  }

  const paymentMethod = {
    type: "Visa",
    last4: "4242",
    expiry: "12/25",
    brand: "visa"
  }

  const invoices = [
    {
      id: "inv_001",
      date: "2024-01-15",
      amount: 29.00,
      status: "paid",
      description: "Pro Plan - Monthly",
      downloadUrl: "#"
    },
    {
      id: "inv_002",
      date: "2023-12-15",
      amount: 29.00,
      status: "paid",
      description: "Pro Plan - Monthly",
      downloadUrl: "#"
    },
    {
      id: "inv_003",
      date: "2023-11-15",
      amount: 29.00,
      status: "paid",
      description: "Pro Plan - Monthly",
      downloadUrl: "#"
    },
    {
      id: "inv_004",
      date: "2023-10-15",
      amount: 29.00,
      status: "failed",
      description: "Pro Plan - Monthly",
      downloadUrl: "#"
    },
    {
      id: "inv_005",
      date: "2023-09-15",
      amount: 29.00,
      status: "paid",
      description: "Pro Plan - Monthly",
      downloadUrl: "#"
    }
  ]

  const usageStats = [
    { label: "Projects Used", value: "12", limit: "∞", percentage: 0 },
    { label: "Storage Used", value: "45GB", limit: "100GB", percentage: 45 },
    { label: "API Calls", value: "8.2K", limit: "50K", percentage: 16 },
    { label: "Active Users", value: "5", limit: "25", percentage: 20 }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "paid": return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
      case "pending": return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
      case "failed": return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
      default: return "bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "paid": return CheckCircle
      case "pending": return Clock
      case "failed": return AlertCircle
      default: return FileText
    }
  }

  const filteredInvoices = invoices.filter(invoice => {
    const matchesSearch = invoice.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         invoice.id.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesFilter = filterStatus === "all" || invoice.status === filterStatus
    return matchesSearch && matchesFilter
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50/50 via-white/30 to-blue-50/50">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_800px_600px_at_50%_-100px,_rgba(139,92,246,0.15),_transparent)] dark:bg-[radial-gradient(ellipse_800px_600px_at_50%_-100px,_rgba(139,92,246,0.25),_transparent)]" />
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-purple opacity-20 rounded-full blur-2xl animate-float" />
      <div className="absolute bottom-20 right-16 w-40 h-40 bg-gradient-to-br from-purple-400 to-blue-400 opacity-15 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}} />
      
      <div className="relative z-10 max-w-7xl mx-auto p-4 py-8">
        {/* Back to Dashboard */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link 
            href="/dashboard" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex items-center space-x-3 mb-4 lg:mb-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative h-8 w-8 rounded-lg bg-gradient-to-br from-purple-600 via-purple-700 to-blue-600 flex items-center justify-center shadow-lg">
                <div className="relative flex items-center justify-center">
                  <Layers className="h-3 w-3 text-white absolute transform -rotate-12" />
                  <Code className="h-2.5 w-2.5 text-purple-200 absolute transform rotate-12 translate-x-0.5" />
                  <Zap className="h-4 w-4 text-white relative z-10" />
                </div>
              </div>
              <span className="font-bold gradient-text">FlowCraft</span>
            </Link>
            <div>
              <h1 className="text-4xl font-bold text-foreground">Billing & Invoices</h1>
              <p className="text-muted-foreground text-lg">Manage your subscription and billing history.</p>
            </div>
          </div>
          
          <Link href="/pricing">
            <Button className="btn-primary">
              <ExternalLink className="w-4 h-4 mr-2" />
              Change Plan
            </Button>
          </Link>
        </motion.div>

        {/* Current Plan */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="card-modern border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="w-5 h-5" />
                Current Plan
              </CardTitle>
              <CardDescription>Your subscription details and next billing</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="glass-card p-6 rounded-xl border-0">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold">{currentPlan.name}</h3>
                      <p className="text-muted-foreground">
                        ${currentPlan.price}/{currentPlan.billing}
                      </p>
                    </div>
                    <div className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-sm font-medium">
                      Active
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    {currentPlan.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>Next billing: {currentPlan.nextBilling}</span>
                  </div>
                </div>
                
                <div className="glass-card p-6 rounded-xl border-0">
                  <h4 className="font-semibold mb-4">Payment Method</h4>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-8 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xs font-bold">{paymentMethod.type.toUpperCase()}</span>
                    </div>
                    <div>
                      <div className="font-medium">•••• •••• •••• {paymentMethod.last4}</div>
                      <div className="text-sm text-muted-foreground">Expires {paymentMethod.expiry}</div>
                    </div>
                  </div>
                  <Button variant="outline" className="glass-card border-0 w-full">
                    Update Payment Method
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Usage Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {usageStats.map((stat, index) => (
            <Card key={index} className="card-modern border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-muted-foreground">{stat.label}</span>
                  <span className="text-xs text-muted-foreground">{stat.value} / {stat.limit}</span>
                </div>
                <div className="text-2xl font-bold mb-2">{stat.value}</div>
                {stat.percentage > 0 && (
                  <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-purple rounded-full transition-all duration-500"
                      style={{ width: `${stat.percentage}%` }}
                    />
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Invoices */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="card-modern border-0 shadow-lg">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Receipt className="w-5 h-5" />
                    Invoice History
                  </CardTitle>
                  <CardDescription>Download and manage your invoices</CardDescription>
                </div>
                
                <div className="flex gap-2 mt-4 md:mt-0">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                      placeholder="Search invoices..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 pr-4 py-2 w-64 glass-card border-0 rounded-lg text-sm focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                    />
                  </div>
                  
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="px-4 py-2 glass-card border-0 rounded-lg focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                  >
                    <option value="all">All Status</option>
                    <option value="paid">Paid</option>
                    <option value="pending">Pending</option>
                    <option value="failed">Failed</option>
                  </select>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredInvoices.map((invoice, index) => {
                  const StatusIcon = getStatusIcon(invoice.status)
                  return (
                    <div key={invoice.id} className="flex items-center justify-between glass-card p-4 rounded-xl border-0 hover:shadow-md transition-shadow duration-200">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-gradient-purple rounded-lg flex items-center justify-center">
                          <FileText className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="font-medium">{invoice.description}</div>
                          <div className="text-sm text-muted-foreground">
                            {invoice.id} • {invoice.date}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <div className="font-semibold">${invoice.amount.toFixed(2)}</div>
                          <div className={`flex items-center gap-1 text-xs font-medium ${getStatusColor(invoice.status)}`}>
                            <StatusIcon className="w-3 h-3" />
                            {invoice.status}
                          </div>
                        </div>
                        
                        {invoice.status === 'paid' && (
                          <Button size="sm" variant="outline" className="glass-card border-0">
                            <Download className="w-3 h-3 mr-1" />
                            PDF
                          </Button>
                        )}
                        
                        {invoice.status === 'failed' && (
                          <Button size="sm" className="btn-primary">
                            Retry Payment
                          </Button>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
              
              {filteredInvoices.length === 0 && (
                <div className="text-center py-8">
                  <Receipt className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-lg font-semibold mb-2">No invoices found</h3>
                  <p className="text-muted-foreground">
                    {searchQuery ? "Try adjusting your search terms" : "No invoices match the selected filter"}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
