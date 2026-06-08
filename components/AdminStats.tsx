"use client"

import { motion } from "framer-motion"
import { 
  Users, 
  DollarSign, 
  BookOpen, 
  TrendingUp,
  Target,
  Clock,
  Award,
  BarChart
} from "lucide-react"
import { cn } from "@/lib/utils"

const stats = [
  {
    id: 1,
    title: "Total Revenue",
    value: "₹2,45,800",
    change: "+12.5%",
    changeType: "increase",
    icon: DollarSign,
    color: "from-green-500 to-emerald-500",
    description: "This month",
    trend: [65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120],
  },
  {
    id: 2,
    title: "Active Users",
    value: "1,248",
    change: "+8.2%",
    changeType: "increase",
    icon: Users,
    color: "from-blue-500 to-cyan-500",
    description: "Online now",
    trend: [40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95],
  },
  {
    id: 3,
    title: "Course Enrollments",
    value: "342",
    change: "+15.3%",
    changeType: "increase",
    icon: BookOpen,
    color: "from-purple-500 to-pink-500",
    description: "This month",
    trend: [20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75],
  },
  {
    id: 4,
    title: "Completion Rate",
    value: "78%",
    change: "+5.2%",
    changeType: "increase",
    icon: Target,
    color: "from-orange-500 to-red-500",
    description: "Average across courses",
    trend: [60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82],
  },
  {
    id: 5,
    title: "Avg. Session Time",
    value: "42m",
    change: "+3.1%",
    changeType: "increase",
    icon: Clock,
    color: "from-indigo-500 to-blue-500",
    description: "Per user",
    trend: [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46],
  },
  {
    id: 6,
    title: "Certificates Issued",
    value: "156",
    change: "+22.4%",
    changeType: "increase",
    icon: Award,
    color: "from-amber-500 to-yellow-500",
    description: "This quarter",
    trend: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
  },
  {
    id: 7,
    title: "Placement Rate",
    value: "85%",
    change: "+7.8%",
    changeType: "increase",
    icon: TrendingUp,
    color: "from-teal-500 to-green-500",
    description: "Graduated students",
    trend: [70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92],
  },
  {
    id: 8,
    title: "Platform Growth",
    value: "3.2x",
    change: "+45%",
    changeType: "increase",
    icon: BarChart,
    color: "from-rose-500 to-pink-500",
    description: "YoY comparison",
    trend: [1.0, 1.2, 1.4, 1.6, 1.8, 2.0, 2.2, 2.4, 2.6, 2.8, 3.0, 3.2],
  },
]

export default function AdminStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="glass rounded-2xl p-5 hover:border-primary/30 border border-white/10 transition-colors"
        >
          <div className="flex items-start justify-between mb-4">
            <div className={`p-2.5 rounded-xl bg-gradient-to-br ${stat.color}`}>
              <stat.icon className="h-5 w-5 text-white" />
            </div>
            <div className={cn(
              "px-2 py-1 rounded-full text-xs font-medium",
              stat.changeType === "increase" 
                ? "bg-green-500/20 text-green-400"
                : "bg-red-500/20 text-red-400"
            )}>
              {stat.change}
            </div>
          </div>

          <div className="mb-2">
            <div className="text-2xl font-bold text-white">{stat.value}</div>
            <div className="text-sm text-gray-400">{stat.title}</div>
          </div>

          <div className="text-xs text-gray-500 mb-3">{stat.description}</div>

          {/* Mini Trend Chart */}
          <div className="relative h-8">
            <div className="absolute inset-0 flex items-end space-x-0.5">
              {stat.trend.map((value, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${(value / Math.max(...stat.trend)) * 100}%` }}
                  transition={{ delay: index * 0.1 + i * 0.02 }}
                  className={cn(
                    "flex-1 rounded-t",
                    stat.changeType === "increase"
                      ? "bg-gradient-to-t from-green-500/30 to-green-500/60"
                      : "bg-gradient-to-t from-red-500/30 to-red-500/60"
                  )}
                />
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}