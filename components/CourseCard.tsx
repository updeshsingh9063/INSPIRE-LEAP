"use client"

import { motion } from "framer-motion"
import { 
  BookOpen, 
  Clock, 
  Users, 
  Star, 
  TrendingUp, 
  ChevronRight,
  PlayCircle,
  CheckCircle,
  Award,
  ExternalLink
} from "lucide-react"
import { cn, formatCurrency } from "@/lib/utils"
import Link from "next/link"

interface CourseCardProps {
  course: {
    id: number
    title: string
    category: string
    description: string
    duration: string
    students: string
    rating: number
    price: number
    discountedPrice: number
    instructor: string
    instructorRole: string
    features: string[]
    trending: boolean
    popular: boolean
    level: string
    language: string
    certificate: string
    placementRate: string
    slug: string
  }
  viewMode: "grid" | "list"
}

export default function CourseCard({ course, viewMode }: CourseCardProps) {
  const discountPercentage = Math.round(((course.price - course.discountedPrice) / course.price) * 100)

  if (viewMode === "list") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.02 }}
        className="glass rounded-2xl p-6 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
      >
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Course Image/Thumbnail */}
          <div className="lg:w-1/4">
            <div className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <PlayCircle className="h-12 w-12 text-white/50" />
              </div>
              {course.trending && (
                <div className="absolute top-3 left-3">
                  <div className="px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-medium rounded-full">
                    Trending
                  </div>
                </div>
              )}
              {course.popular && (
                <div className="absolute top-3 right-3">
                  <div className="px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-medium rounded-full">
                    Popular
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Course Details */}
          <div className="lg:w-2/4">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  <Link href={`/course/${course.slug}`} className="hover:text-primary transition-colors">
                    {course.title}
                  </Link>
                </h3>
                <p className="text-gray-400 text-sm mb-4">{course.description}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-4">
              <div className="flex items-center text-sm text-gray-400">
                <Clock className="h-4 w-4 mr-2" />
                {course.duration}
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <Users className="h-4 w-4 mr-2" />
                {course.students} students
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <Star className="h-4 w-4 mr-2 text-yellow-500" />
                {course.rating} rating
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <Award className="h-4 w-4 mr-2" />
                {course.certificate}
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {course.features.slice(0, 3).map((feature, index) => (
                <div
                  key={index}
                  className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-400"
                >
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* Price & CTA */}
          <div className="lg:w-1/4 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-2xl font-bold text-white">
                  {formatCurrency(course.discountedPrice)}
                </span>
                {discountPercentage > 0 && (
                  <>
                    <span className="text-lg text-gray-400 line-through">
                      {formatCurrency(course.price)}
                    </span>
                    <span className="px-2 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-medium rounded">
                      {discountPercentage}% OFF
                    </span>
                  </>
                )}
              </div>
              <div className="text-sm text-gray-400 mb-4">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                  {course.placementRate} placement rate
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <Link
                href={`/course/${course.slug}`}
                className="w-full px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center"
              >
                View Details
                <ExternalLink className="h-4 w-4 ml-2" />
              </Link>
              <button className="w-full px-6 py-3 glass text-white rounded-lg font-medium hover:bg-white/10 transition-colors">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  // Grid View (default)
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="glass rounded-2xl p-6 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover-glow gradient-border flex flex-col h-full"
    >
      {/* Course Header */}
      <div className="relative mb-6">
        <div className="aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 mb-4">
          <div className="absolute inset-0 flex items-center justify-center">
            <PlayCircle className="h-16 w-16 text-white/30" />
          </div>
        </div>
        
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="px-3 py-1 bg-white/10 text-primary text-xs font-medium rounded-full">
                {course.category}
              </span>
              {course.trending && (
                <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-medium rounded-full">
                  Trending
                </span>
              )}
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              <Link href={`/course/${course.slug}`} className="hover:text-primary transition-colors">
                {course.title}
              </Link>
            </h3>
          </div>
          {course.popular && (
            <div className="px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-medium rounded-full">
              Popular
            </div>
          )}
        </div>
      </div>

      {/* Course Description */}
      <p className="text-gray-400 text-sm mb-6 line-clamp-2">
        {course.description}
      </p>

      {/* Course Stats */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="flex items-center text-sm text-gray-400">
          <Clock className="h-4 w-4 mr-2" />
          {course.duration}
        </div>
        <div className="flex items-center text-sm text-gray-400">
          <Users className="h-4 w-4 mr-2" />
          {course.students}
        </div>
        <div className="flex items-center text-sm text-gray-400">
          <Star className="h-4 w-4 mr-2 text-yellow-500" />
          {course.rating}
        </div>
        <div className="flex items-center text-sm text-gray-400">
          <Award className="h-4 w-4 mr-2" />
          {course.level}
        </div>
      </div>

      {/* Features */}
      <div className="flex flex-wrap gap-2 mb-6">
        {course.features.slice(0, 2).map((feature, index) => (
          <div
            key={index}
            className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-400"
          >
            {feature}
          </div>
        ))}
      </div>

      {/* Instructor */}
      <div className="flex items-center mb-6">
        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold mr-3">
          {course.instructor.charAt(0)}
        </div>
        <div>
          <div className="text-sm font-medium text-white">{course.instructor}</div>
          <div className="text-xs text-gray-400">{course.instructorRole}</div>
        </div>
      </div>

      {/* Price & CTA */}
      <div className="flex flex-wrap items-center justify-between gap-4 mt-auto">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-2xl font-bold text-white">
              {formatCurrency(course.discountedPrice)}
            </span>
            {discountPercentage > 0 && (
              <>
                <span className="text-lg text-gray-400 line-through">
                  {formatCurrency(course.price)}
                </span>
                <span className="px-2 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-medium rounded whitespace-nowrap">
                  {discountPercentage}% OFF
                </span>
              </>
            )}
          </div>
          <div className="text-xs text-gray-400 mt-1">
            {course.placementRate} placement rate
          </div>
        </div>

        <Link
          href={`/course/${course.slug}`}
          className="px-5 py-2.5 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center whitespace-nowrap shrink-0 ml-auto"
        >
          Enroll Now
          <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
      </div>
    </motion.div>
  )
}