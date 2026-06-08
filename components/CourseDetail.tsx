"use client"

import { motion } from "framer-motion"
import { 
  Clock, 
  Users, 
  Star, 
  Award, 
  TrendingUp,
  CheckCircle,
  PlayCircle,
  Download,
  Share2,
  BookOpen,
  Target
} from "lucide-react"
import { cn, formatCurrency } from "@/lib/utils"

interface CourseDetailProps {
  course: {
    id: number
    title: string
    category: string
    description: string
    detailedDescription: string
    duration: string
    students: string
    rating: number
    reviews: number
    price: number
    discountedPrice: number
    instructor: string
    instructorRole: string
    features: string[]
    level: string
    language: string
    certificate: string
    placementRate: string
    slug: string
    prerequisites: string[]
    learningOutcomes: string[]
  }
}

export default function CourseDetail({ course }: CourseDetailProps) {
  const discountPercentage = Math.round(((course.price - course.discountedPrice) / course.price) * 100)

  return (
    <div className="space-y-8">
      {/* Course Header */}
      <div className="space-y-6">
        <div className="flex flex-wrap gap-2">
          <span className="px-4 py-2 bg-gradient-to-r from-primary/20 to-secondary/20 text-primary text-sm font-medium rounded-full">
            {course.category}
          </span>
          <span className="px-4 py-2 glass text-gray-400 text-sm font-medium rounded-full">
            {course.level}
          </span>
          {course.trending && (
            <span className="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-medium rounded-full">
              Trending
            </span>
          )}
          {course.popular && (
            <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-medium rounded-full">
              Popular
            </span>
          )}
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
        >
          {course.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl text-gray-400"
        >
          {course.description}
        </motion.p>
      </div>

      {/* Course Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        <div className="glass rounded-xl p-6">
          <div className="flex items-center space-x-3">
            <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center">
              <Star className="h-6 w-6 text-primary" />
            </div>
            <div>
              <div className="text-2xl font-bold text-white">{course.rating}</div>
              <div className="text-sm text-gray-400">Rating</div>
            </div>
          </div>
        </div>

        <div className="glass rounded-xl p-6">
          <div className="flex items-center space-x-3">
            <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <div>
              <div className="text-2xl font-bold text-white">{course.students}</div>
              <div className="text-sm text-gray-400">Students</div>
            </div>
          </div>
        </div>

        <div className="glass rounded-xl p-6">
          <div className="flex items-center space-x-3">
            <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <div>
              <div className="text-2xl font-bold text-white">{course.duration}</div>
              <div className="text-sm text-gray-400">Duration</div>
            </div>
          </div>
        </div>

        <div className="glass rounded-xl p-6">
          <div className="flex items-center space-x-3">
            <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <div>
              <div className="text-2xl font-bold text-white">{course.placementRate}</div>
              <div className="text-sm text-gray-400">Placement Rate</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Course Video Preview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-black"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="h-20 w-20 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mx-auto mb-4">
              <PlayCircle className="h-10 w-10 text-white" />
            </div>
            <div className="text-white text-lg font-medium">Course Preview</div>
            <div className="text-gray-400 text-sm">Watch a sample lesson</div>
          </div>
        </div>
        <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 glass rounded-lg text-white hover:bg-white/10 transition-colors flex items-center space-x-2">
              <Download className="h-4 w-4" />
              <span className="text-sm">Syllabus</span>
            </button>
            <button className="px-4 py-2 glass rounded-lg text-white hover:bg-white/10 transition-colors flex items-center space-x-2">
              <Share2 className="h-4 w-4" />
              <span className="text-sm">Share</span>
            </button>
          </div>
          <div className="text-sm text-gray-400">
            {course.duration} • {course.language} • {course.certificate}
          </div>
        </div>
      </motion.div>

      {/* Detailed Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="glass rounded-2xl p-8"
      >
        <h2 className="text-2xl font-bold text-white mb-6">About This Course</h2>
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-400 mb-6">
            {course.detailedDescription}
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Learning Outcomes */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Target className="h-5 w-5 mr-2 text-primary" />
                What You'll Learn
              </h3>
              <ul className="space-y-3">
                {course.learningOutcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start text-gray-400">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Prerequisites */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <BookOpen className="h-5 w-5 mr-2 text-primary" />
                Prerequisites
              </h3>
              <ul className="space-y-3">
                {course.prerequisites.map((prereq, index) => (
                  <li key={index} className="flex items-start text-gray-400">
                    <div className="h-2 w-2 rounded-full bg-primary mr-3 mt-2" />
                    <span>{prereq}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Price Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="glass rounded-2xl p-8 border-2 border-primary/30"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center space-x-4 mb-2">
              <div className="text-4xl font-bold text-white">
                {formatCurrency(course.discountedPrice)}
              </div>
              <div className="text-2xl text-gray-400 line-through">
                {formatCurrency(course.price)}
              </div>
              <div className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-bold rounded-full">
                {discountPercentage}% OFF
              </div>
            </div>
            <div className="text-gray-400">
              Limited time offer. Enrollment ends in 3 days.
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold hover:opacity-90 transition-opacity">
              Enroll Now
            </button>
            <button className="px-8 py-4 glass text-white rounded-xl font-medium hover:bg-white/10 transition-colors">
              Try Free Preview
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}