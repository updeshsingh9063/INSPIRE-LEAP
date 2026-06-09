"use client"

import { motion } from "framer-motion"
import { 
  BookOpen, 
  Clock, 
  TrendingUp, 
  Award,
  Target,
  Users,
  Star,
  Calendar
} from "lucide-react"
import { cn } from "@/lib/utils"

export default function DashboardStats() {
  const stats = [
    {
      id: 1,
      title: "Active Courses",
      value: "3",
      change: "+1 this month",
      icon: BookOpen,
      color: "from-blue-500 to-cyan-500",
      progress: 75,
      description: "Courses in progress"
    },
    {
      id: 2,
      title: "Learning Hours",
      value: "42",
      change: "+8 this week",
      icon: Clock,
      color: "from-purple-500 to-pink-500",
      progress: 60,
      description: "Hours this month"
    },
    {
      id: 3,
      title: "Placement Score",
      value: "85%",
      change: "+5% this month",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500",
      progress: 85,
      description: "Readiness level"
    },
    {
      id: 4,
      title: "Certificates",
      value: "2",
      change: "1 pending",
      icon: Award,
      color: "from-orange-500 to-red-500",
      progress: 40,
      description: "Earned this year"
    },
  ]

  const milestones = [
    {
      id: 1,
      title: "Next Mock Interview",
      date: "Tomorrow, 3 PM",
      icon: Users,
      status: "upcoming",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Assignment Due",
      date: "Dec 15, 11:59 PM",
      icon: BookOpen,
      status: "pending",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "Skill Assessment",
      date: "Dec 20, 10 AM",
      icon: Target,
      status: "scheduled",
      color: "from-green-500 to-emerald-500"
    },
  ]

  const skillProgress = [
    { skill: "JavaScript", level: 85, color: "from-yellow-500 to-orange-500" },
    { skill: "React", level: 78, color: "from-blue-500 to-cyan-500" },
    { skill: "Node.js", level: 72, color: "from-green-500 to-emerald-500" },
    { skill: "MongoDB", level: 65, color: "from-purple-500 to-pink-500" },
  ]

  return (
    <div className="space-y-8">
      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          
          return (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass rounded-2xl p-6 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={cn(
                  "h-12 w-12 rounded-xl flex items-center justify-center",
                  `bg-gradient-to-r ${stat.color}`
                )}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-sm font-medium text-green-500">
                  {stat.change}
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-2xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">
                  {stat.title}
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mt-6">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-gray-500">Progress</span>
                  <span className="text-white font-medium">{stat.progress}%</span>
                </div>
                <div className="h-2 glass rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${stat.progress}%` }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    className={cn("h-full", `bg-gradient-to-r ${stat.color}`)}
                  />
                </div>
                <div className="text-xs text-gray-500 mt-2">
                  {stat.description}
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Milestones & Skills */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Upcoming Milestones */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="lg:col-span-2 glass rounded-2xl p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-white">
              Upcoming Milestones
            </h3>
            <button className="text-sm text-primary hover:text-secondary">
              View All
            </button>
          </div>

          <div className="space-y-4">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon
              
              return (
                <motion.div
                  key={milestone.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center justify-between p-4 glass rounded-xl hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className={cn(
                      "h-10 w-10 rounded-lg flex items-center justify-center",
                      `bg-gradient-to-r ${milestone.color}`
                    )}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-white">
                        {milestone.title}
                      </div>
                      <div className="text-sm text-gray-500">
                        {milestone.date}
                      </div>
                    </div>
                  </div>

                  <div className={cn(
                    "px-3 py-1 rounded-full text-xs font-medium",
                    milestone.status === "upcoming" 
                      ? "bg-blue-500/20 text-blue-400"
                      : milestone.status === "pending"
                      ? "bg-orange-500/20 text-orange-400"
                      : "bg-green-500/20 text-green-400"
                  )}>
                    {milestone.status}
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Add New Milestone */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <button className="w-full px-4 py-3 glass rounded-xl text-gray-400 hover:text-white transition-colors flex items-center justify-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span className="text-sm font-medium">Add New Milestone</span>
            </button>
          </div>
        </motion.div>

        {/* Skill Progress */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="glass rounded-2xl p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-white">
              Skill Progress
            </h3>
            <div className="text-sm text-green-500 font-medium">
              +12% this month
            </div>
          </div>

          <div className="space-y-6">
            {skillProgress.map((skill, index) => (
              <motion.div
                key={skill.skill}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                className="space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-white">
                    {skill.skill}
                  </span>
                  <span className="text-sm text-gray-400">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-2 glass rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                    className={cn("h-full", `bg-gradient-to-r ${skill.color}`)}
                  />
                </div>
                <div className="text-xs text-gray-500">
                  {skill.level >= 80 ? "Advanced" : 
                   skill.level >= 60 ? "Intermediate" : 
                   "Beginner"} level
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skill Assessment Button */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <button className="w-full px-4 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-medium hover:opacity-90 transition-opacity flex items-center justify-center space-x-2">
              <Target className="h-5 w-5" />
              <span className="text-sm font-medium">Take Skill Assessment</span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Performance Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="glass rounded-2xl p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-white">
              Performance Summary
            </h3>
            <p className="text-sm text-gray-400">
              Last updated: Today, 10:30 AM
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Star className="h-5 w-5 text-yellow-500" />
            <div>
              <div className="text-lg font-bold text-white">4.8</div>
              <div className="text-xs text-gray-500">Overall Rating</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Course Completion */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-white">
                Course Completion
              </span>
              <span className="text-sm text-green-500">37%</span>
            </div>
            <div className="h-2 glass rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "37%" }}
                transition={{ duration: 1, delay: 0.9 }}
                className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
              />
            </div>
            <div className="text-xs text-gray-500">
              3 of 8 courses completed
            </div>
          </div>

          {/* Assignment Score */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-white">
                Assignment Score
              </span>
              <span className="text-sm text-green-500">92%</span>
            </div>
            <div className="h-2 glass rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "92%" }}
                transition={{ duration: 1, delay: 1.0 }}
                className="h-full bg-gradient-to-r from-green-500 to-emerald-500"
              />
            </div>
            <div className="text-xs text-gray-500">
              Average across all assignments
            </div>
          </div>

          {/* Placement Readiness */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-white">
                Placement Readiness
              </span>
              <span className="text-sm text-green-500">85%</span>
            </div>
            <div className="h-2 glass rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "85%" }}
                transition={{ duration: 1, delay: 1.1 }}
                className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
              />
            </div>
            <div className="text-xs text-gray-500">
              Based on mock interviews & assessments
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-medium hover:opacity-90 transition-opacity">
              View Detailed Report
            </button>
            <button className="px-6 py-3 glass text-white rounded-xl font-medium hover:bg-white/10 transition-colors">
              Download Certificate
            </button>
            <button className="px-6 py-3 glass text-white rounded-xl font-medium hover:bg-white/10 transition-colors">
              Schedule Mentor Session
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}