"use client"

import { motion } from "framer-motion"
import { TrendingUp, Target, Award, Clock } from "lucide-react"

const progressData = [
  {
    id: 1,
    title: "Full Stack Web Development",
    progress: 65,
    target: 85,
    icon: TrendingUp,
    color: "from-blue-500 to-cyan-500",
    modules: "8/12 modules",
    nextMilestone: "Build a React Portfolio",
    daysLeft: 14,
  },
  {
    id: 2,
    title: "Data Science Fundamentals",
    progress: 42,
    target: 90,
    icon: Target,
    color: "from-purple-500 to-pink-500",
    modules: "5/10 modules",
    nextMilestone: "Complete Python Project",
    daysLeft: 21,
  },
  {
    id: 3,
    title: "UI/UX Design Mastery",
    progress: 88,
    target: 95,
    icon: Award,
    color: "from-orange-500 to-red-500",
    modules: "9/11 modules",
    nextMilestone: "Design System Creation",
    daysLeft: 7,
  },
  {
    id: 4,
    title: "Placement Preparation",
    progress: 30,
    target: 100,
    icon: Clock,
    color: "from-green-500 to-emerald-500",
    modules: "3/15 modules",
    nextMilestone: "Mock Interview 1",
    daysLeft: 28,
  },
]

export default function LearningProgress() {
  return (
    <div className="glass rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-white">Learning Progress</h3>
          <p className="text-gray-400 text-sm">Track your course completion and milestones</p>
        </div>
        <button className="px-4 py-2 bg-gradient-to-r from-primary to-primary/80 rounded-lg text-white text-sm font-medium hover:opacity-90 transition-opacity">
          View Details
        </button>
      </div>

      <div className="space-y-6">
        {progressData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="space-y-3"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg bg-gradient-to-br ${item.color}`}>
                  <item.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-white">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.modules}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-white">{item.progress}%</div>
                <div className="text-gray-400 text-sm">Target: {item.target}%</div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${item.progress}%` }}
                transition={{ duration: 1, delay: index * 0.1 }}
                className={`absolute h-full bg-gradient-to-r ${item.color} rounded-full`}
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <div className="text-gray-400">
                Next: <span className="text-white">{item.nextMilestone}</span>
              </div>
              <div className="flex items-center space-x-1 text-gray-400">
                <Clock className="h-4 w-4" />
                <span>{item.daysLeft} days left</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Overall Progress Summary */}
      <div className="mt-8 pt-6 border-t border-white/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">78%</div>
            <div className="text-gray-400 text-sm">Avg. Progress</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">4</div>
            <div className="text-gray-400 text-sm">Active Courses</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">25</div>
            <div className="text-gray-400 text-sm">Modules Done</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">12</div>
            <div className="text-gray-400 text-sm">Assignments</div>
          </div>
        </div>
      </div>
    </div>
  )
}