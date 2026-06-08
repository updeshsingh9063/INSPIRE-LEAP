"use client"

import { motion } from "framer-motion"
import { 
  BookOpen, 
  Clock, 
  Users, 
  Star, 
  ChevronRight,
  TrendingUp
} from "lucide-react"
import { cn, formatCurrency } from "@/lib/utils"
import Link from "next/link"

interface RelatedCoursesProps {
  currentCourseId: number
}

const allCourses = [
  {
    id: 1,
    title: "Full Stack Web Development",
    category: "tech",
    description: "Master MERN stack with modern frameworks and deployment",
    duration: "6 months",
    students: "5.2K",
    rating: 4.8,
    price: 29999,
    discountedPrice: 19999,
    instructor: "Rajesh Kumar",
    trending: true,
    popular: true,
    slug: "full-stack-web-development",
  },
  {
    id: 2,
    title: "Data Science & Machine Learning",
    category: "data",
    description: "Complete AI/ML pipeline with real-world projects",
    duration: "8 months",
    students: "3.8K",
    rating: 4.9,
    price: 39999,
    discountedPrice: 29999,
    instructor: "Priya Sharma",
    trending: true,
    popular: true,
    slug: "data-science-machine-learning",
  },
  {
    id: 3,
    title: "Cloud Computing & AWS",
    category: "cloud",
    description: "Become AWS certified with hands-on cloud projects",
    duration: "4 months",
    students: "2.5K",
    rating: 4.7,
    price: 24999,
    discountedPrice: 17999,
    instructor: "Amit Patel",
    trending: false,
    popular: true,
    slug: "cloud-computing-aws",
  },
  {
    id: 4,
    title: "UI/UX Design Masterclass",
    category: "design",
    description: "Design thinking to prototyping with Figma",
    duration: "3 months",
    students: "1.8K",
    rating: 4.6,
    price: 19999,
    discountedPrice: 14999,
    instructor: "Neha Singh",
    trending: true,
    popular: false,
    slug: "ui-ux-design-masterclass",
  },
  {
    id: 5,
    title: "Digital Marketing Strategy",
    category: "business",
    description: "Complete digital marketing funnel optimization",
    duration: "3 months",
    students: "2.1K",
    rating: 4.5,
    price: 17999,
    discountedPrice: 12999,
    instructor: "Vikram Mehta",
    trending: false,
    popular: true,
    slug: "digital-marketing-strategy",
  },
  {
    id: 6,
    title: "Cybersecurity Fundamentals",
    category: "tech",
    description: "Network security, ethical hacking, and compliance",
    duration: "5 months",
    students: "1.5K",
    rating: 4.8,
    price: 34999,
    discountedPrice: 24999,
    instructor: "Sanjay Verma",
    trending: true,
    popular: false,
    slug: "cybersecurity-fundamentals",
  },
]

export default function RelatedCourses({ currentCourseId }: RelatedCoursesProps) {
  // Get related courses (excluding current course, same category first)
  const currentCourse = allCourses.find(course => course.id === currentCourseId)
  const relatedCourses = allCourses
    .filter(course => course.id !== currentCourseId)
    .sort((a, b) => {
      // Same category first
      if (a.category === currentCourse?.category && b.category !== currentCourse?.category) return -1
      if (a.category !== currentCourse?.category && b.category === currentCourse?.category) return 1
      
      // Then by rating
      return b.rating - a.rating
    })
    .slice(0, 3) // Show top 3 related courses

  if (relatedCourses.length === 0) {
    return null
  }

  return (
    <div className="glass rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-white">Related Courses</h3>
        <Link 
          href="/courses" 
          className="text-sm text-primary hover:text-secondary flex items-center space-x-1"
        >
          <span>View All</span>
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="space-y-4">
        {relatedCourses.map((course, index) => {
          const discountPercentage = Math.round(((course.price - course.discountedPrice) / course.price) * 100)

          return (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <Link href={`/course/${course.slug}`}>
                <div className="glass rounded-xl p-4 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    {/* Course Thumbnail */}
                    <div className="relative flex-shrink-0">
                      <div className="h-16 w-16 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                        <BookOpen className="h-6 w-6 text-primary" />
                      </div>
                      {course.trending && (
                        <div className="absolute -top-2 -right-2">
                          <div className="h-6 w-6 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
                            <TrendingUp className="h-3 w-3 text-white" />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Course Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-medium text-white group-hover:text-primary transition-colors truncate">
                          {course.title}
                        </h4>
                        <div className="flex items-center space-x-1">
                          <Star className="h-3 w-3 text-yellow-500" />
                          <span className="text-sm font-medium text-white">
                            {course.rating}
                          </span>
                        </div>
                      </div>

                      <p className="text-sm text-gray-400 mb-3 line-clamp-2">
                        {course.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-xs text-gray-400">
                          <div className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {course.duration}
                          </div>
                          <div className="flex items-center">
                            <Users className="h-3 w-3 mr-1" />
                            {course.students}
                          </div>
                        </div>

                        <div className="text-right">
                          <div className="flex items-center space-x-2">
                            <span className="text-sm font-bold text-white">
                              {formatCurrency(course.discountedPrice)}
                            </span>
                            {discountPercentage > 0 && (
                              <span className="text-xs text-gray-400 line-through">
                                {formatCurrency(course.price)}
                              </span>
                            )}
                          </div>
                          {discountPercentage > 0 && (
                            <div className="text-xs text-green-500 font-medium">
                              {discountPercentage}% OFF
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          )
        })}
      </div>

      {/* View All Courses Button */}
      <div className="mt-6 pt-6 border-t border-white/10">
        <Link
          href="/courses"
          className="w-full px-4 py-3 glass text-white rounded-lg font-medium hover:bg-white/10 transition-colors flex items-center justify-center space-x-2"
        >
          <span>Browse All Courses</span>
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}