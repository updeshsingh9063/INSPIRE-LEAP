"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  BookOpen, 
  Clock, 
  ChevronDown, 
  ChevronUp,
  PlayCircle,
  FileText,
  CheckCircle,
  Lock
} from "lucide-react"
import { cn } from "@/lib/utils"

interface CurriculumItem {
  module: number
  title: string
  duration: string
  topics: string[]
}

interface CourseCurriculumProps {
  curriculum: CurriculumItem[]
}

export default function CourseCurriculum({ curriculum }: CourseCurriculumProps) {
  const [expandedModules, setExpandedModules] = useState<number[]>([1])

  const toggleModule = (moduleNumber: number) => {
    setExpandedModules(prev =>
      prev.includes(moduleNumber)
        ? prev.filter(m => m !== moduleNumber)
        : [...prev, moduleNumber]
    )
  }

  const totalDuration = curriculum.reduce((total, module) => {
    const weeks = parseInt(module.duration)
    return total + (isNaN(weeks) ? 0 : weeks)
  }, 0)

  const totalTopics = curriculum.reduce((total, module) => total + module.topics.length, 0)

  return (
    <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Course Curriculum</h2>
          <div className="flex items-center space-x-6 text-gray-600">
            <div className="flex items-center">
              <BookOpen className="h-4 w-4 mr-2" />
              <span>{curriculum.length} Modules</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>{totalDuration} Weeks</span>
            </div>
            <div className="flex items-center">
              <FileText className="h-4 w-4 mr-2" />
              <span>{totalTopics} Topics</span>
            </div>
          </div>
        </div>
        <button className="px-4 py-2 bg-gray-100 border border-gray-200 rounded-lg text-gray-900 hover:bg-gray-200 transition-colors text-sm font-medium">
          Download Syllabus
        </button>
      </div>

      <div className="space-y-4">
        {curriculum.map((module) => {
          const isExpanded = expandedModules.includes(module.module)
          const isCompleted = module.module <= 2 // Mock: first 2 modules completed

          return (
            <div
              key={module.module}
              className={cn(
                "rounded-xl overflow-hidden transition-all duration-300 border border-gray-200",
                isExpanded ? "bg-white shadow-md" : "bg-gray-50 hover:bg-gray-100"
              )}
            >
              {/* Module Header */}
              <button
                onClick={() => toggleModule(module.module)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <div className={cn(
                      "h-12 w-12 rounded-lg flex items-center justify-center",
                      isCompleted
                        ? "bg-gradient-to-r from-green-500 to-emerald-500"
                        : "bg-gradient-to-r from-primary/20 to-secondary/20"
                    )}>
                      {isCompleted ? (
                        <CheckCircle className="h-6 w-6 text-white" />
                      ) : (
                        <BookOpen className="h-6 w-6 text-primary" />
                      )}
                    </div>
                    <div className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-xs font-bold text-white">
                      {module.module}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      Module {module.module}: {module.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {module.duration}
                      </div>
                      <div className="flex items-center">
                        <FileText className="h-3 w-3 mr-1" />
                        {module.topics.length} topics
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  {isCompleted && (
                    <div className="px-3 py-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 text-xs font-medium rounded-full">
                      Completed
                    </div>
                  )}
                  {isExpanded ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </div>
              </button>

              {/* Module Content */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <div className="pt-6 border-t border-gray-200">
                      <h4 className="text-sm font-bold text-gray-900 mb-4">Topics Covered:</h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {module.topics.map((topic, index) => {
                          const isTopicCompleted = isCompleted && index < 3 // Mock: first 3 topics completed
                          return (
                            <div
                              key={index}
                              className={cn(
                                "flex items-center justify-between p-3 rounded-lg transition-colors border",
                                isTopicCompleted
                                  ? "bg-green-50 border-green-100"
                                  : "bg-white border-gray-100 hover:bg-gray-50"
                              )}
                            >
                              <div className="flex items-center space-x-3">
                                {isTopicCompleted ? (
                                  <CheckCircle className="h-4 w-4 text-green-500" />
                                ) : (
                                  <PlayCircle className="h-4 w-4 text-gray-500" />
                                )}
                                <span className={cn(
                                  "text-sm font-medium",
                                  isTopicCompleted ? "text-green-700" : "text-gray-700"
                                )}>
                                  {topic}
                                </span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <span className="text-xs text-gray-500">
                                  45 min
                                </span>
                                {!isCompleted && module.module > 2 && (
                                  <Lock className="h-3 w-3 text-gray-600" />
                                )}
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>

                    {/* Module Resources */}
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <h4 className="text-sm font-bold text-gray-900 mb-4">Resources:</h4>
                      <div className="flex flex-wrap gap-2">
                        <button className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors text-sm flex items-center space-x-2 font-medium">
                          <FileText className="h-4 w-4" />
                          <span>Lecture Notes</span>
                        </button>
                        <button className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors text-sm flex items-center space-x-2 font-medium">
                          <FileText className="h-4 w-4" />
                          <span>Code Examples</span>
                        </button>
                        <button className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors text-sm flex items-center space-x-2 font-medium">
                          <FileText className="h-4 w-4" />
                          <span>Assignment PDF</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>

      {/* Progress Bar */}
      <div className="mt-8 pt-8 border-t border-gray-200">
        <div className="flex items-center justify-between mb-3">
          <div className="text-sm font-bold text-gray-900">Your Progress</div>
          <div className="text-sm font-medium text-gray-600">33% Complete</div>
        </div>
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "33%" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-full bg-gradient-to-r from-primary to-secondary"
          />
        </div>
        <div className="flex justify-between text-xs text-gray-500 mt-2">
          <span>2 modules completed</span>
          <span>4 modules remaining</span>
        </div>
      </div>

      {/* Learning Path */}
      <div className="mt-8 pt-8 border-t border-gray-200">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Learning Path</h3>
        <div className="relative">
          {/* Timeline */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-transparent" />
          
          <div className="space-y-8">
            {curriculum.map((module, index) => (
              <div key={module.module} className="relative pl-16">
                {/* Timeline Dot */}
                <div className={cn(
                  "absolute left-4 top-2 h-4 w-4 rounded-full border-4",
                  module.module <= 2
                    ? "border-green-500 bg-green-500/20"
                    : module.module === 3
                    ? "border-primary bg-primary/20"
                    : "border-gray-600 bg-gray-600/20"
                )} />

                <div className={cn(
                  "p-4 rounded-xl border",
                  module.module <= 2
                    ? "bg-green-50 border-green-100"
                    : module.module === 3
                    ? "bg-white border-primary/20 shadow-sm"
                    : "bg-gray-50 border-gray-200"
                )}>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-gray-900">
                      Week {index + 1}: {module.title}
                    </h4>
                    <span className="text-xs font-medium text-gray-500">{module.duration}</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    {module.topics.slice(0, 2).join(", ")}...
                  </p>
                  <div className="flex items-center space-x-2 mt-3">
                    {module.module <= 2 ? (
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    ) : module.module === 3 ? (
                      <PlayCircle className="h-4 w-4 text-primary" />
                    ) : (
                      <Lock className="h-4 w-4 text-gray-600" />
                    )}
                    <span className={cn(
                      "text-xs font-bold",
                      module.module <= 2
                        ? "text-green-600"
                        : module.module === 3
                        ? "text-primary"
                        : "text-gray-600"
                    )}>
                      {module.module <= 2
                        ? "Completed"
                        : module.module === 3
                        ? "In Progress"
                        : "Locked"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}