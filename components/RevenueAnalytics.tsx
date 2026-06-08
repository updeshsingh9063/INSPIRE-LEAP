"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown,
  Calendar,
  Download,
  Filter,
  PieChart,
  BarChart3
} from "lucide-react"
import { cn } from "@/lib/utils"

const revenueData = {
  monthly: [
    { month: "Jan", revenue: 45000, growth: 12 },
    { month: "Feb", revenue: 52000, growth: 15 },
    { month: "Mar", revenue: 48000, growth: 8 },
    { month: "Apr", revenue: 61000, growth: 22 },
    { month: "May", revenue: 58000, growth: 18 },
    { month: "Jun", revenue: 72000, growth: 25 },
    { month: "Jul", revenue: 68000, growth: 20 },
    { month: "Aug", revenue: 75000, growth: 28 },
    { month: "Sep", revenue: 82000, growth: 32 },
    { month: "Oct", revenue: 78000, growth: 29 },
    { month: "Nov", revenue: 89000, growth: 35 },
    { month: "Dec", revenue: 95000, growth: 40 },
  ],
  quarterly: [
    { quarter: "Q1", revenue: 145000, growth: 12 },
    { quarter: "Q2", revenue: 191000, growth: 32 },
    { quarter: "Q3", revenue: 225000, growth: 18 },
    { quarter: "Q4", revenue: 262000, growth: 16 },
  ],
  yearly: [
    { year: "2021", revenue: 450000, growth: 15 },
    { year: "2022", revenue: 620000, growth: 38 },
    { year: "2023", revenue: 890000, growth: 44 },
    { year: "2024", revenue: 1250000, growth: 40 },
  ],
}

const revenueSources = [
  { name: "Course Sales", value: 65, color: "from-blue-500 to-cyan-500" },
  { name: "Certifications", value: 20, color: "from-purple-500 to-pink-500" },
  { name: "Placement Services", value: 10, color: "from-green-500 to-emerald-500" },
  { name: "Corporate Training", value: 5, color: "from-orange-500 to-red-500" },
]

const timeRanges = [
  { id: "monthly", label: "Monthly" },
  { id: "quarterly", label: "Quarterly" },
  { id: "yearly", label: "Yearly" },
]

export default function RevenueAnalytics() {
  const [timeRange, setTimeRange] = useState("monthly")
  const [chartType, setChartType] = useState("bar")
  const currentData = revenueData[timeRange as keyof typeof revenueData]
  const maxRevenue = Math.max(...currentData.map(d => d.revenue))

  return (
    <div className="glass rounded-2xl p-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-white">Revenue Analytics</h3>
          <p className="text-gray-400 text-sm">Track revenue growth and sources</p>
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

          {/* Chart Type Toggle */}
          <div className="flex glass rounded-lg p-1">
            <button
              onClick={() => setChartType("bar")}
              className={cn(
                "p-1.5 rounded-md transition-colors",
                chartType === "bar"
                  ? "bg-primary/20 text-primary"
                  : "text-gray-400 hover:text-white"
              )}
            >
              <BarChart3 className="h-4 w-4" />
            </button>
            <button
              onClick={() => setChartType("pie")}
              className={cn(
                "p-1.5 rounded-md transition-colors",
                chartType === "pie"
                  ? "bg-primary/20 text-primary"
                  : "text-gray-400 hover:text-white"
              )}
            >
              <PieChart className="h-4 w-4" />
            </button>
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

      {/* Revenue Chart */}
      <div className="mb-8">
        {chartType === "bar" ? (
          <div className="h-64">
            <div className="flex items-end h-48 space-x-2 md:space-x-4">
              {currentData.map((item, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${(item.revenue / maxRevenue) * 100}%` }}
                    transition={{ duration: 1, delay: index * 0.05 }}
                    className="w-full bg-gradient-to-t from-primary to-primary/60 rounded-t-lg"
                  />
                  <div className="mt-2 text-xs text-gray-400">
                    {'month' in item ? item.month : 'quarter' in item ? item.quarter : item.year}
                  </div>
                  <div className="text-xs font-medium text-white mt-1">
                    ₹{(item.revenue / 1000).toFixed(0)}K
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
        ) : (
          <div className="h-64 flex items-center justify-center">
            <div className="relative w-48 h-48">
              {revenueSources.map((source, index) => {
                const circumference = 2 * Math.PI * 60
                const strokeDasharray = `${(source.value / 100) * circumference} ${circumference}`
                const rotation = index === 0 ? 0 : 
                  revenueSources.slice(0, index).reduce((acc, s) => acc + (s.value / 100) * 360, 0)
                
                return (
                  <motion.circle
                    key={source.name}
                    initial={{ strokeDasharray: `0 ${circumference}` }}
                    animate={{ strokeDasharray }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    cx="96"
                    cy="96"
                    r="60"
                    fill="transparent"
                    stroke={`url(#${source.name.replace(/\s+/g, '-')})`}
                    strokeWidth="30"
                    strokeLinecap="round"
                    transform={`rotate(${rotation} 96 96)`}
                    className="origin-center"
                  />
                )
              })}
              
              {/* Gradient Definitions */}
              <defs>
                {revenueSources.map((source) => (
                  <linearGradient
                    key={source.name}
                    id={source.name.replace(/\s+/g, '-')}
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" className={source.color.split(' ')[1]} />
                    <stop offset="100%" className={source.color.split(' ')[3]} />
                  </linearGradient>
                ))}
              </defs>
              
              <text
                x="96"
                y="96"
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-2xl font-bold text-white"
              >
                ₹12.5L
              </text>
              <text
                x="96"
                y="120"
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-sm text-gray-400"
              >
                Total Revenue
              </text>
            </div>
          </div>
        )}
      </div>

      {/* Revenue Sources Breakdown */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {revenueSources.map((source, index) => (
          <motion.div
            key={source.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-4 rounded-xl border border-white/10"
          >
            <div className="flex items-center space-x-3 mb-2">
              <div className={`h-3 w-3 rounded-full bg-gradient-to-br ${source.color}`} />
              <div className="text-sm font-medium text-white">{source.name}</div>
            </div>
            <div className="text-2xl font-bold text-white">{source.value}%</div>
            <div className="text-xs text-gray-400">of total revenue</div>
            
            {/* Mini Progress Bar */}
            <div className="mt-3 h-1.5 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${source.value}%` }}
                transition={{ duration: 1, delay: index * 0.1 }}
                className={`h-full bg-gradient-to-r ${source.color} rounded-full`}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Summary Stats */}
      <div className="mt-6 pt-6 border-t border-white/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-3 rounded-lg bg-white/5">
            <div className="text-lg font-bold text-white">₹9.5L</div>
            <div className="text-gray-400 text-xs">This Quarter</div>
          </div>
          <div className="text-center p-3 rounded-lg bg-white/5">
            <div className="text-lg font-bold text-white">+32%</div>
            <div className="text-gray-400 text-xs">Growth Rate</div>
          </div>
          <div className="text-center p-3 rounded-lg bg-white/5">
            <div className="text-lg font-bold text-white">248</div>
            <div className="text-gray-400 text-xs">Transactions</div>
          </div>
          <div className="text-center p-3 rounded-lg bg-white/5">
            <div className="text-lg font-bold text-white">₹4.2K</div>
            <div className="text-gray-400 text-xs">Avg. Order Value</div>
          </div>
        </div>
      </div>
    </div>
  )
}