'use client'

import { usePathname } from 'next/navigation'
import DashboardNav from '@/components/dashboard/DashboardNav'

interface GlobalLayoutProps {
  children: React.ReactNode
}

export default function GlobalLayout({ children }: GlobalLayoutProps) {
  const pathname = usePathname()
  
  // Pages qui doivent avoir la DashboardNav
  const dashboardPages = ['/dashboard', '/projects', '/analytics', '/team', '/api-docs', '/profile']
  const shouldShowNavbar = dashboardPages.includes(pathname)
  
  return (
    <>
      {shouldShowNavbar && (
        <DashboardNav />
      )}
      {children}
    </>
  )
}
