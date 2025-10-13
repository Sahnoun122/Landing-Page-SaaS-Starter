'use client'

export default function TestDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Dashboard Test - Simple Version
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Projects</h3>
            <p className="text-3xl font-bold text-purple-600">24</p>
            <p className="text-green-600 text-sm mt-2">+12% from last month</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Active Users</h3>
            <p className="text-3xl font-bold text-purple-600">1,284</p>
            <p className="text-green-600 text-sm mt-2">+8% from last month</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Revenue</h3>
            <p className="text-3xl font-bold text-purple-600">$12,456</p>
            <p className="text-green-600 text-sm mt-2">+23% from last month</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Projects</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h3 className="font-medium text-gray-900">E-commerce Redesign</h3>
                <p className="text-gray-600 text-sm">In Progress • 75% Complete</p>
              </div>
              <span className="text-purple-600 font-medium">View →</span>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h3 className="font-medium text-gray-900">Mobile App Development</h3>
                <p className="text-gray-600 text-sm">Review • 90% Complete</p>
              </div>
              <span className="text-purple-600 font-medium">View →</span>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h3 className="font-medium text-gray-900">Brand Identity</h3>
                <p className="text-gray-600 text-sm">Planning • 25% Complete</p>
              </div>
              <span className="text-purple-600 font-medium">View →</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}