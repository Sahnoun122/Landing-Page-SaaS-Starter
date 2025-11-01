'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from "@/components/ui/container";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { 
  Users, 
  DollarSign, 
  Eye, 
  Clock, 
  Calendar,
  Download,
  Filter,
  RefreshCw,
  PieChart,
  Activity,
  Globe,
  Smartphone,
  Monitor,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface MetricData {
  label: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: LucideIcon;
  color: string;
}

interface ChartDataPoint {
  date: string;
  value: number;
  sessions: number;
  revenue: number;
}

export default function AnalyticsPage() {
  const [selectedPeriod, setSelectedPeriod] = useState('7d');
  const [isLoading, setIsLoading] = useState(false);

  const metrics: MetricData[] = [
    {
      label: 'Total Users',
      value: '24,593',
      change: '+12.5%',
      trend: 'up',
      icon: Users,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      label: 'Revenue',
      value: '$45,692',
      change: '+8.2%',
      trend: 'up',
      icon: DollarSign,
      color: 'from-green-500 to-emerald-500'
    },
    {
      label: 'Page Views',
      value: '156,742',
      change: '-2.4%',
      trend: 'down',
      icon: Eye,
      color: 'from-purple-500 to-pink-500'
    },
    {
      label: 'Avg Session',
      value: '3m 45s',
      change: '+15.8%',
      trend: 'up',
      icon: Clock,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const chartData: ChartDataPoint[] = [
    { date: '2024-01-01', value: 1200, sessions: 800, revenue: 2400 },
    { date: '2024-01-02', value: 1800, sessions: 1200, revenue: 3600 },
    { date: '2024-01-03', value: 1600, sessions: 1100, revenue: 3200 },
    { date: '2024-01-04', value: 2200, sessions: 1500, revenue: 4400 },
    { date: '2024-01-05', value: 2800, sessions: 1800, revenue: 5600 },
    { date: '2024-01-06', value: 2400, sessions: 1600, revenue: 4800 },
    { date: '2024-01-07', value: 3200, sessions: 2000, revenue: 6400 }
  ];

  const deviceStats = [
    { device: 'Desktop', percentage: 58, users: 14307, icon: Monitor, color: 'bg-blue-500' },
    { device: 'Mobile', percentage: 35, users: 8608, icon: Smartphone, color: 'bg-green-500' },
    { device: 'Tablet', percentage: 7, users: 1722, icon: Globe, color: 'bg-purple-500' }
  ];

  const topPages = [
    { page: '/', views: 45692, bounce: '32%', duration: '4m 12s' },
    { page: '/dashboard', views: 28341, bounce: '28%', duration: '6m 45s' },
    { page: '/pricing', views: 19283, bounce: '41%', duration: '2m 38s' },
    { page: '/features', views: 15672, bounce: '35%', duration: '3m 22s' },
    { page: '/about', views: 12458, bounce: '48%', duration: '2m 15s' }
  ];

  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

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
            Analytics
          </h1>
          <p className="text-muted-foreground">
            Track your website performance and business metrics
          </p>
        </motion.div>

        {/* Controls */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="card-modern p-6 mb-8"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-card-foreground">
                <Calendar className="w-5 h-5 text-primary" />
                <span className="font-semibold">Time Period:</span>
              </div>
              <div className="flex items-center gap-2">
                {[
                  { label: '7 Days', value: '7d' },
                  { label: '30 Days', value: '30d' },
                  { label: '3 Months', value: '3m' },
                  { label: '1 Year', value: '1y' }
                ].map((period) => (
                  <button
                    key={period.value}
                    onClick={() => setSelectedPeriod(period.value)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      selectedPeriod === period.value
                        ? 'bg-primary text-primary-foreground shadow-lg'
                        : 'glass-card hover:shadow-lg text-muted-foreground hover:text-card-foreground'
                    }`}
                  >
                    {period.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleRefresh}
                disabled={isLoading}
                className={`p-3 glass-card hover:shadow-lg transition-all duration-200 ${
                  isLoading ? 'animate-spin' : 'hover:scale-105'
                }`}
              >
                <RefreshCw className="w-5 h-5 text-primary" />
              </button>
              <button className="btn-secondary flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Filter
              </button>
              <button className="btn-primary flex items-center gap-2">
                <Download className="w-4 h-4" />
                Export
              </button>
            </div>
          </div>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="card-modern p-6 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${metric.color} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                    metric.trend === 'up' 
                      ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                      : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                  }`}>
                    {metric.trend === 'up' ? (
                      <ArrowUpRight className="w-3 h-3" />
                    ) : (
                      <ArrowDownRight className="w-3 h-3" />
                    )}
                    {metric.change}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-card-foreground mb-1 group-hover:text-primary transition-colors">
                    {metric.value}
                  </h3>
                  <p className="text-muted-foreground text-sm font-medium">
                    {metric.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Main Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2 card-modern p-8"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-card-foreground flex items-center gap-2">
                  <Activity className="w-6 h-6 text-primary" />
                  Traffic Overview
                </h3>
                <p className="text-muted-foreground">Daily visitors and revenue trends</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Visitors</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Revenue</span>
                </div>
              </div>
            </div>

            {/* Chart Area */}
            <div className="relative h-64 glass-card p-6 rounded-xl">
              <div className="flex items-end justify-between h-full">
                {chartData.map((point) => (
                  <div key={point.date} className="flex flex-col items-center gap-2 flex-1">
                    <div className="flex items-end gap-1 h-32">
                      <div
                        className="bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-sm w-4 hover:from-blue-600 hover:to-blue-500 transition-all duration-300 hover:scale-110 cursor-pointer"
                        style={{ height: `${(point.sessions / 2000) * 100}%` }}
                        title={`Visitors: ${point.sessions}`}
                      />
                      <div
                        className="bg-gradient-to-t from-green-500 to-green-400 rounded-t-sm w-4 hover:from-green-600 hover:to-green-500 transition-all duration-300 hover:scale-110 cursor-pointer"
                        style={{ height: `${(point.revenue / 7000) * 100}%` }}
                        title={`Revenue: $${point.revenue}`}
                      />
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {new Date(point.date).getDate()}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Device Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="card-modern p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <PieChart className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-card-foreground">Device Usage</h3>
                <p className="text-muted-foreground text-sm">Traffic by device type</p>
              </div>
            </div>

            <div className="space-y-4">
              {deviceStats.map((device, index) => {
                const Icon = device.icon;
                return (
                  <motion.div
                    key={device.device}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="glass-card p-4 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 ${device.color} rounded-lg flex items-center justify-center`}>
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-medium text-card-foreground">{device.device}</span>
                      </div>
                      <span className="font-bold text-card-foreground">{device.percentage}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${device.percentage}%` }}
                        transition={{ duration: 1, delay: 0.7 + index * 0.1 }}
                        className={`h-2 ${device.color} rounded-full`}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      {device.users.toLocaleString()} users
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Top Pages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="card-modern p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
              <Eye className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-card-foreground">Top Pages</h3>
              <p className="text-muted-foreground">Most visited pages this period</p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/20">
                  <th className="text-left py-3 px-4 font-semibold text-card-foreground">Page</th>
                  <th className="text-right py-3 px-4 font-semibold text-card-foreground">Views</th>
                  <th className="text-right py-3 px-4 font-semibold text-card-foreground">Bounce Rate</th>
                  <th className="text-right py-3 px-4 font-semibold text-card-foreground">Avg Duration</th>
                </tr>
              </thead>
              <tbody>
                {topPages.map((page, index) => (
                  <motion.tr
                    key={page.page}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="border-b border-border/10 hover:bg-muted/50 transition-colors"
                  >
                    <td className="py-4 px-4">
                      <code className="text-primary font-medium bg-primary/10 px-2 py-1 rounded">
                        {page.page}
                      </code>
                    </td>
                    <td className="text-right py-4 px-4 font-semibold text-card-foreground">
                      {page.views.toLocaleString()}
                    </td>
                    <td className="text-right py-4 px-4 text-muted-foreground">
                      {page.bounce}
                    </td>
                    <td className="text-right py-4 px-4 text-muted-foreground">
                      {page.duration}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}