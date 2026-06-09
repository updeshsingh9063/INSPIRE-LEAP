"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { 
  BookOpen, 
  TrendingUp, 
  Users,
  Target,
  Calendar,
  Filter,
  Download,
  BarChart3,
  LineChart
} from "lucide-react"
import { cn } from "@/lib/utils"

const enrollmentData = {
  monthly: [
    { month: "Jan", enrollments: 45, completions: 32, dropouts: 3 },
    { month: "Feb", enrollments: 52, completions: 38, dropouts: 4 },
    { month: "Mar", enrollments: 61, completions: 45, dropouts: 5 },
    { month: "Apr", enrollments: 68, completions: 50, dropouts: 6 },
    { month: "May", enrollments: 75, completions: 55, dropouts: 7 },
    { month: "Jun", enrollments: 82, completions: 60, dropouts: 8 },
    { month: "Jul", enrollments: 89, completions: 65, dropouts: 9 },
    { month: "Aug", enrollments: 95, completions: 70, dropouts: 10 },
    { month: "Sep", enrollments: 102, completions: 75, dropouts: 11 },
    { month: "Oct", enrollments: 110, completions: 80, dropouts: 12 },
    { month: "Nov", enrollments: 118, completions: 85, dropouts: 13 },
    { month: "Dec", enrollments: 124, completions: 90, dropouts: 14 },
  ],
}

const coursePerformance = [
  { 
    name: "Full Stack Web Dev", 
    enrollments: 342, 
    completionRate: 78, 
    rating: 4.8,
    revenue: "₹8,45,000",
    color: "from-blue-500 to-cyan-500"
  },
  { 
    name: "Data Science", 
    enrollments: 218, 
    completionRate: 72, 
    rating: 4.6,
    revenue: "₹5,20,000",
    color: "from-purple-500 to-pink-500"
  },
  { 
    name: "UI/UX Design", 
    enrollments: 156, 
    completionRate: 82, 
    rating: 4.9,
    revenue: "₹3,80,000",
    color: "from-orange-500 to-red-500"
  },
  { 
    name: "Cloud Computing", 
    enrollments: 98, 
    completionRate: 68, 
    rating: 4.5,
    revenue: "₹2,40,000",
    color: "from-green-500 to-emerald-500"
  },
]

const enrollmentSources = [
  { source: "Organic Search", percentage: 35, color: "from-blue-500 to-cyan-500" },
  { source: "Social Media", percentage: 25, color: "from-purple-500 to-pink-500" },
  { source: "Referrals", percentage: 20, color: "from-green-500 to-emerald-500" },
  { source: "Email Marketing", percentage: 15, color: "from-orange-500 to-red-500" },
  { source: "Direct", percentage: 5, color: "from-gray-500 to-gray-700" },
]

const timeRanges = [
  { id: "monthly", label: "Monthly" },
  { id: "quarterly", label: "Quarterly" },
  { id: "yearly", label: "Yearly" },
]

export default function EnrollmentAnalytics() {
  const [timeRange, setTimeRange] = useState("monthly")
  const [chartType, setChartType] = useState("bar")
  const currentData = enrollmentData[timeRange as keyof typeof enrollmentData]
  const maxEnrollments = Math.max(...currentData.map(d => d.enrollments))

  return (
    <div className="glass rounded-2xl p-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-white">Enrollment Analytics</h3>
          <p className="text-gray-400 text-sm">Track course enrollments, completion rates, and performance</p>
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
              onClick={() => setChartType("line")}
              className={cn(
                "p-1.5 rounded-md transition-colors",
                chartType === "line"
                  ? "bg-primary/20 text-primary"
                  : "text-gray-400 hover:text-white"
              )}
            >
              <LineChart className="h-4 w-4" />
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

      {/* Enrollment Chart */}
      <div className="mb-8">
        <div className="h-64">
          <div className="flex items-end h-48 space-x-2 md:space-x-4">
            {currentData.map((item, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                {/* Enrollments Bar */}
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${(item.enrollments / maxEnrollments) * 100}%` }}
                  transition={{ duration: 1, delay: index * 0.05 }}
                  className="w-full bg-gradient-to-t from-primary to-primary/60 rounded-t-lg"
                />
                
                {/* Completions Bar (overlay) */}
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${(item.completions / maxEnrollments) * 100}%` }}
                  transition={{ duration: 1, delay: index * 0.05 + 0.2 }}
                  className="w-3/4 bg-gradient-to-t from-green-500 to-green-500/60 rounded-t-lg absolute bottom-0"
                />
                
                <div className="mt-2 text-xs text-gray-400">
                  {item.month}
                </div>
                <div className="text-xs font-medium text-white mt-1">
                  {item.enrollments}
                </div>
                <div className="text-xs text-green-400 mt-1">
                  {item.completions} completed
                </div>
              </div>
            ))}
          </div>
          
          {/* Legend */}
          <div className="flex items-center justify-center space-x-6 mt-4">
            <div className="flex items-center space-x-2">
              <div className="h-3 w-3 rounded bg-gradient-to-r from-primary to-primary/60" />
              <span className="text-xs text-gray-400">Enrollments</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-3 w-3 rounded bg-gradient-to-r from-green-500 to-green-500/60" />
              <span className="text-xs text-gray-400">Completions</span>
            </div>
          </div>
        </div>
      </div>

      {/* Course Performance */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-white mb-4 flex items-center">
          <BookOpen className="h-4 w-4 mr-2" />
          Top Performing Courses
        </h4>
        
        <div className="space-y-4">
          {coursePerformance.map((course, index) => (
            <motion.div
              key={course.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-4 rounded-xl border border-white/10 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className={`h-3 w-3 rounded-full bg-gradient-to-br ${course.color}`} />
                  <h4 className="font-medium text-white">{course.name}</h4>
                </div>
                <div className="text-sm font-medium text-white">{course.enrollments} enrollments</div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <div className="text-xs text-gray-400">Completion Rate</div>
                  <div className="text-lg font-bold text-white">{course.completionRate}%</div>
                </div>
                <div>
                  <div className="text-xs text-gray-400">Rating</div>
                  <div className="text-lg font-bold text-white flex items-center">
                    {course.rating}
                    <Star className="h-4 w-4 text-amber-400 ml-1" />
                  </div>
                </div>
                <div>
                  <div className="text-xs text-gray-400">Revenue</div>
                  <div className="text-lg font-bold text-white">{course.revenue}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-400">Performance</div>
                  <div className="flex items-center">
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${course.completionRate}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className={`h-full bg-gradient-to-r ${course.color} rounded-full`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Enrollment Sources */}
      <div className="pt-6 border-t border-white/10">
        <h4 className="text-sm font-semibold text-white mb-4">Enrollment Sources</h4>
        
        <div className="space-y-3">
          {enrollmentSources.map((source, index) => (
            <motion.div
              key={source.source}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-between"
            >
              <div className="flex items-center space-x-3">
                <div className={`h-3 w-3 rounded-full bg-gradient-to-br ${source.color}`} />
                <div className="text-sm text-gray-300">{source.source}</div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-sm font-medium text-white">{source.percentage}%</div>
                <div className="w-32 h-2 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${source.percentage}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className={`h-full bg-gradient-to-r ${source.color} rounded-full`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Star icon component for ratings
const Star = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
)