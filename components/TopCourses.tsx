"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { 
  BookOpen, 
  TrendingUp, 
  Users,
  Star,
  Clock,
  DollarSign,
  Filter,
  MoreVertical,
  Eye,
  Edit,
  Trash2
} from "lucide-react"
import { cn, formatCurrency } from "@/lib/utils"
import Link from "next/link"

const courses = [
  {
    id: 1,
    title: "Full Stack Web Development",
    instructor: "Rajesh Kumar",
    category: "Development",
    price: 14999,
    enrollments: 342,
    rating: 4.8,
    completionRate: 78,
    revenue: 845000,
    status: "active",
    color: "from-blue-500 to-cyan-500",
    lastUpdated: "2 days ago",
  },
  {
    id: 2,
    title: "Data Science Fundamentals",
    instructor: "Anjali Sharma",
    category: "Data Science",
    price: 12999,
    enrollments: 218,
    rating: 4.6,
    completionRate: 72,
    revenue: 520000,
    status: "active",
    color: "from-purple-500 to-pink-500",
    lastUpdated: "1 week ago",
  },
  {
    id: 3,
    title: "UI/UX Design Mastery",
    instructor: "Vikram Singh",
    category: "Design",
    price: 16999,
    enrollments: 156,
    rating: 4.9,
    completionRate: 82,
    revenue: 380000,
    status: "active",
    color: "from-orange-500 to-red-500",
    lastUpdated: "3 days ago",
  },
  {
    id: 4,
    title: "Cloud Computing with AWS",
    instructor: "Priya Patel",
    category: "Cloud",
    price: 18999,
    enrollments: 98,
    rating: 4.5,
    completionRate: 68,
    revenue: 240000,
    status: "active",
    color: "from-green-500 to-emerald-500",
    lastUpdated: "5 days ago",
  },
  {
    id: 5,
    title: "DevOps Engineering",
    instructor: "Rohan Mehta",
    category: "DevOps",
    price: 15999,
    enrollments: 124,
    rating: 4.7,
    completionRate: 75,
    revenue: 320000,
    status: "draft",
    color: "from-indigo-500 to-blue-500",
    lastUpdated: "1 month ago",
  },
  {
    id: 6,
    title: "Placement Preparation Program",
    instructor: "Wipro HR Team",
    category: "Career",
    price: 9999,
    enrollments: 287,
    rating: 4.8,
    completionRate: 85,
    revenue: 420000,
    status: "active",
    color: "from-teal-500 to-green-500",
    lastUpdated: "2 weeks ago",
  },
]

const filters = [
  { id: "all", label: "All Courses" },
  { id: "active", label: "Active" },
  { id: "draft", label: "Draft" },
  { id: "archived", label: "Archived" },
]

const sortOptions = [
  { id: "enrollments", label: "Most Enrollments" },
  { id: "revenue", label: "Highest Revenue" },
  { id: "rating", label: "Top Rated" },
  { id: "recent", label: "Recently Updated" },
]

export default function TopCourses() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [sortBy, setSortBy] = useState("enrollments")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredCourses = courses
    .filter(course => {
      if (activeFilter !== "all" && course.status !== activeFilter) {
        return false
      }
      
      if (searchQuery) {
        const query = searchQuery.toLowerCase()
        return (
          course.title.toLowerCase().includes(query) ||
          course.instructor.toLowerCase().includes(query) ||
          course.category.toLowerCase().includes(query)
        )
      }
      
      return true
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "enrollments":
          return b.enrollments - a.enrollments
        case "revenue":
          return b.revenue - a.revenue
        case "rating":
          return b.rating - a.rating
        case "recent":
          return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime()
        default:
          return 0
      }
    })

  const totalRevenue = filteredCourses.reduce((sum, course) => sum + course.revenue, 0)
  const totalEnrollments = filteredCourses.reduce((sum, course) => sum + course.enrollments, 0)
  const avgRating = filteredCourses.reduce((sum, course) => sum + course.rating, 0) / filteredCourses.length

  return (
    <div className="glass rounded-2xl p-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-white">Top Courses</h3>
          <p className="text-gray-400 text-sm">Manage and analyze course performance</p>
        </div>
        
        <div className="flex items-center space-x-3 mt-4 md:mt-0">
          {/* Sort Dropdown */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="pl-3 pr-8 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white appearance-none focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent"
            >
              {sortOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </select>
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <Filter className="h-4 w-4 text-gray-400" />
            </div>
          </div>

          {/* Add Course Button */}
          <Link
            href="/admin/courses/new"
            className="px-4 py-2 bg-gradient-to-r from-primary to-primary/80 rounded-lg text-white text-sm font-medium hover:opacity-90 transition-opacity flex items-center space-x-2"
          >
            <BookOpen className="h-4 w-4" />
            <span>Add Course</span>
          </Link>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={cn(
              "px-3 py-1.5 rounded-lg text-sm font-medium transition-colors",
              activeFilter === filter.id
                ? "bg-primary text-white"
                : "glass text-gray-400 hover:text-white"
            )}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Course Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="p-4 rounded-xl border border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-400">Total Revenue</div>
              <div className="text-2xl font-bold text-white">{formatCurrency(totalRevenue)}</div>
            </div>
            <div className="p-2 rounded-lg bg-green-500/10">
              <DollarSign className="h-5 w-5 text-green-500" />
            </div>
          </div>
        </div>
        
        <div className="p-4 rounded-xl border border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-400">Total Enrollments</div>
              <div className="text-2xl font-bold text-white">{totalEnrollments}</div>
            </div>
            <div className="p-2 rounded-lg bg-blue-500/10">
              <Users className="h-5 w-5 text-blue-500" />
            </div>
          </div>
        </div>
        
        <div className="p-4 rounded-xl border border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-400">Avg. Rating</div>
              <div className="text-2xl font-bold text-white flex items-center">
                {avgRating.toFixed(1)}
                <Star className="h-5 w-5 text-amber-400 ml-1" />
              </div>
            </div>
            <div className="p-2 rounded-lg bg-amber-500/10">
              <Star className="h-5 w-5 text-amber-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Courses List */}
      <div className="space-y-4">
        {filteredCourses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-4 rounded-xl border border-white/10 hover:border-primary/30 transition-colors"
          >
            <div className="flex items-start justify-between">
              {/* Course Info */}
              <div className="flex items-start space-x-4">
                <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center`}>
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h4 className="font-medium text-white">{course.title}</h4>
                    <span className={cn(
                      "px-2 py-0.5 rounded-full text-xs font-medium",
                      course.status === "active"
                        ? "bg-green-500/20 text-green-400"
                        : course.status === "draft"
                        ? "bg-amber-500/20 text-amber-400"
                        : "bg-gray-500/20 text-gray-400"
                    )}>
                      {course.status}
                    </span>
                  </div>
                  
                  <div className="text-sm text-gray-400 mb-3">
                    by {course.instructor} • {course.category}
                  </div>
                  
                  {/* Course Metrics */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <div className="text-xs text-gray-400">Enrollments</div>
                      <div className="text-lg font-bold text-white flex items-center">
                        {course.enrollments}
                        <Users className="h-4 w-4 text-blue-400 ml-1" />
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-xs text-gray-400">Rating</div>
                      <div className="text-lg font-bold text-white flex items-center">
                        {course.rating}
                        <Star className="h-4 w-4 text-amber-400 ml-1" />
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-xs text-gray-400">Completion</div>
                      <div className="text-lg font-bold text-white flex items-center">
                        {course.completionRate}%
                        <TrendingUp className="h-4 w-4 text-green-400 ml-1" />
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-xs text-gray-400">Revenue</div>
                      <div className="text-lg font-bold text-white">
                        {formatCurrency(course.revenue)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center space-x-2">
                <Link
                  href={`/course/${course.id}`}
                  className="p-2 glass rounded-lg hover:bg-white/10 transition-colors group"
                  title="View Course"
                >
                  <Eye className="h-4 w-4 text-gray-400 group-hover:text-white" />
                </Link>
                
                <Link
                  href={`/admin/courses/edit/${course.id}`}
                  className="p-2 glass rounded-lg hover:bg-white/10 transition-colors group"
                  title="Edit Course"
                >
                  <Edit className="h-4 w-4 text-gray-400 group-hover:text-white" />
                </Link>
                
                <button
                  className="p-2 glass rounded-lg hover:bg-red-500/10 transition-colors group"
                  title="Delete Course"
                >
                  <Trash2 className="h-4 w-4 text-gray-400 group-hover:text-red-400" />
                </button>
                
                <button className="p-2 glass rounded-lg hover:bg-white/10 transition-colors">
                  <MoreVertical className="h-4 w-4 text-gray-400 hover:text-white" />
                </button>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
              <div className="text-xs text-gray-500">
                Price: <span className="text-white font-medium">{formatCurrency(course.price)}</span>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="text-xs text-gray-500">
                  Updated: <span className="text-white">{course.lastUpdated}</span>
                </div>
                
                <button className="px-3 py-1.5 bg-gradient-to-r from-primary to-primary/80 rounded-lg text-white text-xs font-medium hover:opacity-90 transition-opacity">
                  View Analytics
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Summary */}
      <div className="mt-6 pt-6 border-t border-white/10">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-gray-400">
              Showing {filteredCourses.length} of {courses.length} courses
            </div>
            <div className="text-xs text-gray-500">
              Avg. Completion Rate: {Math.round(filteredCourses.reduce((sum, c) => sum + c.completionRate, 0) / filteredCourses.length)}%
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <button className="px-4 py-2 glass rounded-lg text-white text-sm font-medium hover:bg-white/10 transition-colors">
              View All Courses
            </button>
            <button className="px-4 py-2 bg-gradient-to-r from-primary to-primary/80 rounded-lg text-white text-sm font-medium hover:opacity-90 transition-opacity">
              Generate Report
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}