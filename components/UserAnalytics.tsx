"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { 
  Users, 
  TrendingUp, 
  Clock,
  MapPin,
  GraduationCap,
  Briefcase,
  Smartphone,
  Globe,
  Filter,
  Download
} from "lucide-react"
import { cn } from "@/lib/utils"

const userData = {
  monthly: [
    { month: "Jan", users: 450, growth: 8 },
    { month: "Feb", users: 520, growth: 15 },
    { month: "Mar", users: 610, growth: 17 },
    { month: "Apr", users: 680, growth: 11 },
    { month: "May", users: 750, growth: 10 },
    { month: "Jun", users: 820, growth: 9 },
    { month: "Jul", users: 890, growth: 8 },
    { month: "Aug", users: 950, growth: 7 },
    { month: "Sep", users: 1020, growth: 7 },
    { month: "Oct", users: 1100, growth: 8 },
    { month: "Nov", users: 1180, growth: 7 },
    { month: "Dec", users: 1248, growth: 6 },
  ],
}

const userSegments = [
  { name: "Students", value: 65, color: "from-blue-500 to-cyan-500", icon: GraduationCap },
  { name: "Professionals", value: 25, color: "from-purple-500 to-pink-500", icon: Briefcase },
  { name: "Corporate", value: 8, color: "from-green-500 to-emerald-500", icon: Users },
  { name: "Others", value: 2, color: "from-gray-500 to-gray-700", icon: Users },
]

const deviceUsage = [
  { device: "Mobile", percentage: 68, color: "from-blue-500 to-cyan-500", icon: Smartphone },
  { device: "Desktop", percentage: 28, color: "from-purple-500 to-pink-500", icon: Globe },
  { device: "Tablet", percentage: 4, color: "from-green-500 to-emerald-500", icon: Smartphone },
]

const geographicData = [
  { region: "North India", users: 420, growth: 12 },
  { region: "South India", users: 380, growth: 15 },
  { region: "West India", users: 280, growth: 8 },
  { region: "East India", users: 168, growth: 5 },
]

const timeRanges = [
  { id: "monthly", label: "Monthly" },
  { id: "quarterly", label: "Quarterly" },
  { id: "yearly", label: "Yearly" },
]

export default function UserAnalytics() {
  const [timeRange, setTimeRange] = useState("monthly")
  const currentData = userData[timeRange as keyof typeof userData]
  const maxUsers = Math.max(...currentData.map(d => d.users))

  return (
    <div className="glass rounded-2xl p-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-white">User Analytics</h3>
          <p className="text-gray-400 text-sm">Track user growth, segments, and behavior</p>
        </div>
        
        <div className="flex items-center space-x-3 mt-4 md:mt-0">
          {/* Time Range Selector */}
          <div className="flex glass rounded-lg p-1">
            {timeRanges.map((range) => (
              <button
                key={range.id}
                onClick={() => setTimeRange(range.id)}
                className={cn(
                  "px-3 py-1.5 rounded-md text-sm font-medium transition-colors",
                  timeRange === range.id
                    ? "bg-primary text-white"
                    : "text-gray-400 hover:text-white"
                )}
              >
                {range.label}
              </button>
            ))}
          </div>

          {/* Action Buttons */}
          <button className="p-2 glass rounded-lg hover:bg-white/10 transition-colors">
            <Filter className="h-4 w-4 text-gray-400 hover:text-white" />
          </button>
          <button className="p-2 glass rounded-lg hover:bg-white/10 transition-colors">
            <Download className="h-4 w-4 text-gray-400 hover:text-white" />
          </button>
        </div>
      </div>

      {/* User Growth Chart */}
      <div className="mb-8">
        <div className="h-48">
          <div className="flex items-end h-32 space-x-2 md:space-x-4">
            {currentData.map((item, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${(item.users / maxUsers) * 100}%` }}
                  transition={{ duration: 1, delay: index * 0.05 }}
                  className="w-full bg-gradient-to-t from-primary to-primary/60 rounded-t-lg"
                />
                <div className="mt-2 text-xs text-gray-400">
                  {item.month}
                </div>
                <div className="text-xs font-medium text-white mt-1">
                  {item.users}
                </div>
                <div className={cn(
                  "text-xs mt-1",
                  item.growth >= 0 ? "text-green-400" : "text-red-400"
                )}>
                  {item.growth >= 0 ? "+" : ""}{item.growth}%
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* User Segments & Device Usage */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* User Segments */}
        <div>
          <h4 className="text-sm font-semibold text-white mb-4 flex items-center">
            <Users className="h-4 w-4 mr-2" />
            User Segments
          </h4>
          
          <div className="space-y-3">
            {userSegments.map((segment, index) => (
              <motion.div
                key={segment.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between"
              >
                <div className="flex items-center space-x-3">
                  <div className={`p-1.5 rounded-lg bg-gradient-to-br ${segment.color}`}>
                    <segment.icon className="h-3 w-3 text-white" />
                  </div>
                  <div className="text-sm text-gray-300">{segment.name}</div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-sm font-medium text-white">{segment.value}%</div>
                  <div className="w-24 h-2 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${segment.value}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className={`h-full bg-gradient-to-r ${segment.color} rounded-full`}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Device Usage */}
        <div>
          <h4 className="text-sm font-semibold text-white mb-4 flex items-center">
            <Smartphone className="h-4 w-4 mr-2" />
            Device Usage
          </h4>
          
          <div className="space-y-3">
            {deviceUsage.map((device, index) => (
              <motion.div
                key={device.device}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between"
              >
                <div className="flex items-center space-x-3">
                  <div className={`p-1.5 rounded-lg bg-gradient-to-br ${device.color}`}>
                    <device.icon className="h-3 w-3 text-white" />
                  </div>
                  <div className="text-sm text-gray-300">{device.device}</div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-sm font-medium text-white">{device.percentage}%</div>
                  <div className="w-24 h-2 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${device.percentage}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className={`h-full bg-gradient-to-r ${device.color} rounded-full`}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Geographic Distribution */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-white mb-4 flex items-center">
          <MapPin className="h-4 w-4 mr-2" />
          Geographic Distribution
        </h4>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {geographicData.map((region, index) => (
            <motion.div
              key={region.region}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-4 rounded-xl border border-white/10"
            >
              <div className="text-sm font-medium text-white mb-1">
                {region.region}
              </div>
              <div className="text-2xl font-bold text-white">{region.users}</div>
              <div className="flex items-center text-xs mt-1">
                <TrendingUp className="h-3 w-3 text-green-400 mr-1" />
                <span className="text-green-400">+{region.growth}%</span>
                <span className="text-gray-400 ml-2">growth</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* User Engagement Stats */}
      <div className="pt-6 border-t border-white/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-3 rounded-lg bg-white/5">
            <div className="text-lg font-bold text-white">42m</div>
            <div className="text-gray-400 text-xs flex items-center justify-center">
              <Clock className="h-3 w-3 mr-1" />
              Avg. Session
            </div>
          </div>
          <div className="text-center p-3 rounded-lg bg-white/5">
            <div className="text-lg font-bold text-white">78%</div>
            <div className="text-gray-400 text-xs">Retention Rate</div>
          </div>
          <div className="text-center p-3 rounded-lg bg-white/5">
            <div className="text-lg font-bold text-white">3.2</div>
            <div className="text-gray-400 text-xs">Avg. Courses/User</div>
          </div>
          <div className="text-center p-3 rounded-lg bg-white/5">
            <div className="text-lg font-bold text-white">24%</div>
            <div className="text-gray-400 text-xs">Referral Rate</div>
          </div>
        </div>
      </div>
    </div>
  )
}