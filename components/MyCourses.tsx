"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  BookOpen, 
  Clock, 
  PlayCircle,
  CheckCircle,
  ChevronRight,
  Target,
  TrendingUp,
  Award,
  Users,
  Star,
  BarChart,
  Calendar,
  Download,
  Share2,
  MoreVertical
} from "lucide-react"
import { cn, formatCurrency } from "@/lib/utils"
import Link from "next/link"

export default function MyCourses() {
  const [activeTab, setActiveTab] = useState<"active" | "completed" | "upcoming">("active")
  const [expandedCourse, setExpandedCourse] = useState<number | null>(null)

  const courses = {
    active: [
      {
        id: 1,
        title: "Full Stack Web Development",
        instructor: "Rajesh Kumar",
        progress: 65,
        nextLesson: "React Hooks Deep Dive",
        dueDate: "Dec 15, 2024",
        modulesCompleted: 8,
        totalModules: 12,
        rating: 4.8,
        color: "from-blue-500 to-cyan-500",
        status: "active",
        lastAccessed: "2 hours ago",
        assignments: [
          { id: 1, title: "React Project", due: "Dec 12", status: "pending" },
          { id: 2, title: "API Integration", due: "Dec 18", status: "upcoming" },
        ]
      },
      {
        id: 2,
        title: "Data Science Fundamentals",
        instructor: "Priya Sharma",
        progress: 42,
        nextLesson: "Pandas Data Analysis",
        dueDate: "Dec 20, 2024",
        modulesCompleted: 5,
        totalModules: 12,
        rating: 4.6,
        color: "from-purple-500 to-pink-500",
        status: "active",
        lastAccessed: "1 day ago",
        assignments: [
          { id: 1, title: "Data Cleaning", due: "Dec 14", status: "submitted" },
        ]
      },
      {
        id: 3,
        title: "Cloud Computing with AWS",
        instructor: "Amit Patel",
        progress: 28,
        nextLesson: "EC2 Instances Setup",
        dueDate: "Jan 10, 2025",
        modulesCompleted: 3,
        totalModules: 10,
        rating: 4.7,
        color: "from-green-500 to-emerald-500",
        status: "active",
        lastAccessed: "3 days ago",
        assignments: []
      },
    ],
    completed: [
      {
        id: 4,
        title: "UI/UX Design Masterclass",
        instructor: "Neha Singh",
        progress: 100,
        completionDate: "Nov 30, 2024",
        certificate: "Wipro Certified",
        rating: 4.5,
        color: "from-orange-500 to-red-500",
        status: "completed",
        skills: ["Figma", "User Research", "Prototyping"]
      },
      {
        id: 5,
        title: "Digital Marketing Strategy",
        instructor: "Vikram Mehta",
        progress: 100,
        completionDate: "Oct 25, 2024",
        certificate: "Google Analytics Certified",
        rating: 4.4,
        color: "from-yellow-500 to-amber-500",
        status: "completed",
        skills: ["SEO", "Social Media", "Analytics"]
      },
    ],
    upcoming: [
      {
        id: 6,
        title: "Cybersecurity Fundamentals",
        instructor: "Sanjay Verma",
        startDate: "Jan 15, 2025",
        duration: "3 months",
        prerequisites: ["Basic Networking"],
        color: "from-indigo-500 to-purple-500",
        status: "upcoming",
        description: "Learn network security, ethical hacking, and compliance"
      },
      {
        id: 7,
        title: "DevOps Engineering",
        instructor: "Rahul Mehta",
        startDate: "Feb 1, 2025",
        duration: "4 months",
        prerequisites: ["Linux Basics", "Git"],
        color: "from-teal-500 to-cyan-500",
        status: "upcoming",
        description: "Master CI/CD, Docker, Kubernetes, and cloud infrastructure"
      },
    ]
  }

  const toggleCourseExpansion = (courseId: number) => {
    setExpandedCourse(expandedCourse === courseId ? null : courseId)
  }

  const currentCourses = courses[activeTab]

  return (
    <div className="glass rounded-2xl p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="text-2xl font-bold text-white">My Courses</h2>
          <p className="text-gray-400 mt-1">
            Track your learning progress and upcoming courses
          </p>
        </div>

        <div className="flex items-center space-x-4">
          <Link
            href="/courses"
            className="px-4 py-2 glass rounded-lg text-white hover:bg-white/10 transition-colors text-sm flex items-center space-x-2"
          >
            <BookOpen className="h-4 w-4" />
            <span>Browse Courses</span>
          </Link>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {[
          { id: "active", label: "Active Courses", count: courses.active.length },
          { id: "completed", label: "Completed", count: courses.completed.length },
          { id: "upcoming", label: "Upcoming", count: courses.upcoming.length },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={cn(
              "px-6 py-3 rounded-xl text-sm font-medium transition-all",
              activeTab === tab.id
                ? "bg-gradient-to-r from-primary to-secondary text-white"
                : "glass text-gray-400 hover:text-white"
            )}
          >
            <span className="flex items-center space-x-2">
              <span>{tab.label}</span>
              <span className="text-xs bg-white/10 px-2 py-0.5 rounded-full">
                {tab.count}
              </span>
            </span>
          </button>
        ))}
      </div>

      {/* Courses Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="space-y-6"
        >
          {currentCourses.map((course) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="glass rounded-xl overflow-hidden"
            >
              {/* Course Header */}
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div className="flex items-start space-x-4">
                    <div className={cn(
                      "h-12 w-12 rounded-lg flex items-center justify-center",
                      `bg-gradient-to-r ${course.color}`
                    )}>
                      <BookOpen className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg mb-1">
                        {course.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <span className="flex items-center">
                          <Users className="h-3 w-3 mr-1" />
                          {course.instructor}
                        </span>
                        {'rating' in course && course.rating && (
                          <span className="flex items-center">
                            <Star className="h-3 w-3 mr-1 text-yellow-500" />
                            {course.rating}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    {course.status === "active" && (
                      <button
                        onClick={() => toggleCourseExpansion(course.id)}
                        className="px-4 py-2 glass rounded-lg text-white hover:bg-white/10 transition-colors text-sm flex items-center space-x-2"
                      >
                        <span>Details</span>
                        <ChevronRight className={cn(
                          "h-4 w-4 transition-transform",
                          expandedCourse === course.id && "rotate-90"
                        )} />
                      </button>
                    )}
                    <button className="p-2 glass rounded-lg text-gray-400 hover:text-white">
                      <MoreVertical className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                {/* Progress Bar */}
                {course.status === "active" && (
                  <div className="mb-6">
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-gray-400">
                        {course.modulesCompleted} of {course.totalModules} modules completed
                      </span>
                      <span className="font-medium text-white">
                        {course.progress}%
                      </span>
                    </div>
                    <div className="h-2 glass rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${course.progress}%` }}
                        transition={{ duration: 1 }}
                        className={cn("h-full", `bg-gradient-to-r ${course.color}`)}
                      />
                    </div>
                  </div>
                )}

                {/* Course Details */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {course.status === "active" && (
                    <>
                      <div className="glass rounded-lg p-4">
                        <div className="flex items-center space-x-3">
                          <Clock className="h-5 w-5 text-primary" />
                          <div>
                            <div className="text-sm font-medium text-white">
                              Next Lesson
                            </div>
                            <div className="text-xs text-gray-400">
                              {course.nextLesson}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="glass rounded-lg p-4">
                        <div className="flex items-center space-x-3">
                          <Calendar className="h-5 w-5 text-primary" />
                          <div>
                            <div className="text-sm font-medium text-white">
                              Due Date
                            </div>
                            <div className="text-xs text-gray-400">
                              {course.dueDate}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="glass rounded-lg p-4">
                        <div className="flex items-center space-x-3">
                          <Target className="h-5 w-5 text-primary" />
                          <div>
                            <div className="text-sm font-medium text-white">
                              Assignments
                            </div>
                            <div className="text-xs text-gray-400">
                              {course.assignments.length} pending
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="glass rounded-lg p-4">
                        <div className="flex items-center space-x-3">
                          <TrendingUp className="h-5 w-5 text-primary" />
                          <div>
                            <div className="text-sm font-medium text-white">
                              Last Accessed
                            </div>
                            <div className="text-xs text-gray-400">
                              {course.lastAccessed}
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  {course.status === "completed" && (
                    <>
                      <div className="glass rounded-lg p-4">
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <div>
                            <div className="text-sm font-medium text-white">
                              Completed
                            </div>
                            <div className="text-xs text-gray-400">
                              {course.completionDate}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="glass rounded-lg p-4">
                        <div className="flex items-center space-x-3">
                          <Award className="h-5 w-5 text-yellow-500" />
                          <div>
                            <div className="text-sm font-medium text-white">
                              Certificate
                            </div>
                            <div className="text-xs text-gray-400">
                              {course.certificate}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="glass rounded-lg p-4">
                        <div className="flex items-center space-x-3">
                          <Star className="h-5 w-5 text-yellow-500" />
                          <div>
                            <div className="text-sm font-medium text-white">
                              Rating
                            </div>
                            <div className="text-xs text-gray-400">
                              {course.rating}/5.0
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="glass rounded-lg p-4">
                        <div className="flex items-center space-x-3">
                          <BarChart className="h-5 w-5 text-primary" />
                          <div>
                            <div className="text-sm font-medium text-white">
                              Skills Gained
                            </div>
                            <div className="text-xs text-gray-400">
                              {course.skills.length} skills
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  {course.status === "upcoming" && (
                    <>
                      <div className="glass rounded-lg p-4">
                        <div className="flex items-center space-x-3">
                          <Calendar className="h-5 w-5 text-primary" />
                          <div>
                            <div className="text-sm font-medium text-white">
                              Start Date
                            </div>
                            <div className="text-xs text-gray-400">
                              {course.startDate}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="glass rounded-lg p-4">
                        <div className="flex items-center space-x-3">
                          <Clock className="h-5 w-5 text-primary" />
                          <div>
                            <div className="text-sm font-medium text-white">
                              Duration
                            </div>
                            <div className="text-xs text-gray-400">
                              {course.duration}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="glass rounded-lg p-4">
                        <div className="flex items-center space-x-3">
                          <Target className="h-5 w-5 text-primary" />
                          <div>
                            <div className="text-sm font-medium text-white">
                              Prerequisites
                            </div>
                            <div className="text-xs text-gray-400">
                              {course.prerequisites.length} required
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="glass rounded-lg p-4">
                        <div className="flex items-center space-x-3">
                          <BookOpen className="h-5 w-5 text-primary" />
                          <div>
                            <div className="text-sm font-medium text-white">
                              Description
                            </div>
                            <div className="text-xs text-gray-400">
                              {course.description}
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Expanded Content */}
              <AnimatePresence>
                {expandedCourse === course.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-white/10"
                  >
                    <div className="p-6">
                      {/* Assignments */}
                      {course.assignments.length > 0 && (
                        <div className="mb-6">
                          <h4 className="text-sm font-medium text-white mb-4">
                            Upcoming Assignments
                          </h4>
                          <div className="space-y-3">
                            {course.assignments.map((assignment) => (
                              <div
                                key={assignment.id}
                                className="flex items-center justify-between p-3 glass rounded-lg"
                              >
                                <div>
                                  <div className="font-medium text-white">
                                    {assignment.title}
                                  </div>
                                  <div className="text-xs text-gray-400">
                                    Due: {assignment.due}
                                  </div>
                                </div>
                                <div className={cn(
                                  "px-3 py-1 rounded-full text-xs font-medium",
                                  assignment.status === "pending"
                                    ? "bg-orange-500/20 text-orange-400"
                                    : assignment.status === "submitted"
                                    ? "bg-green-500/20 text-green-400"
                                    : "bg-blue-500/20 text-blue-400"
                                )}>
                                  {assignment.status}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-3">
                        <button className="px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center space-x-2">
                          <PlayCircle className="h-4 w-4" />
                          <span>Continue Learning</span>
                        </button>
                        <button className="px-4 py-2 glass text-white rounded-lg font-medium hover:bg-white/10 transition-colors flex items-center space-x-2">
                          <Download className="h-4 w-4" />
                          <span>Download Materials</span>
                        </button>
                        <button className="px-4 py-2 glass text-white rounded-lg font-medium hover:bg-white/10 transition-colors flex items-center space-x-2">
                          <Share2 className="h-4 w-4" />
                          <span>Share Progress</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Empty State */}
      {currentCourses.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="h-16 w-16 text-gray-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-white mb-2">
            No {activeTab} courses
          </h3>
          <p className="text-gray-400 mb-6">
            {activeTab === "active" 
              ? "Start a new course to begin your learning journey"
              : activeTab === "completed"
              ? "Complete your active courses to see them here"
              : "Check back later for upcoming courses"}
          </p>
          <Link
            href="/courses"
            className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-medium hover:opacity-90 transition-opacity inline-flex items-center space-x-2"
          >
            <span>Browse Courses</span>
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      )}
    </div>
  )
}