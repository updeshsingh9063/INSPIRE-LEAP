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
import { initiatePayment } from "@/lib/payment"

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
    trending?: boolean
    popular?: boolean
  }
}

export default function CourseDetail({ course }: CourseDetailProps) {
  const discountPercentage = Math.round(((course.price - course.discountedPrice) / course.price) * 100)

  const handleEnroll = () => {
    initiatePayment(course.title, course.discountedPrice)
  }

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
        <div className="bg-white border border-gray-100 shadow-md rounded-xl p-6">
          <div className="flex items-center space-x-3">
            <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center">
              <Star className="h-6 w-6 text-primary" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">{course.rating}</div>
              <div className="text-sm text-gray-500">Rating</div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-100 shadow-md rounded-xl p-6">
          <div className="flex items-center space-x-3">
            <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">{course.students}</div>
              <div className="text-sm text-gray-500">Students</div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-100 shadow-md rounded-xl p-6">
          <div className="flex items-center space-x-3">
            <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">{course.duration}</div>
              <div className="text-sm text-gray-500">Duration</div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-100 shadow-md rounded-xl p-6">
          <div className="flex items-center space-x-3">
            <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">{course.placementRate}</div>
              <div className="text-sm text-gray-500">Placement Rate</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Course Video Preview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="relative aspect-video rounded-2xl overflow-hidden bg-gray-100 border border-gray-200"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="h-20 w-20 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mx-auto mb-4 shadow-lg shadow-primary/30">
              <PlayCircle className="h-10 w-10 text-white" />
            </div>
            <div className="text-gray-900 text-lg font-bold">Course Preview</div>
            <div className="text-gray-600 text-sm">Watch a sample lesson</div>
          </div>
        </div>
        <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 bg-white/80 backdrop-blur border border-gray-200 rounded-lg text-gray-900 hover:bg-white transition-colors flex items-center space-x-2 shadow-sm">
              <Download className="h-4 w-4" />
              <span className="text-sm font-medium">Syllabus</span>
            </button>
            <button className="px-4 py-2 bg-white/80 backdrop-blur border border-gray-200 rounded-lg text-gray-900 hover:bg-white transition-colors flex items-center space-x-2 shadow-sm">
              <Share2 className="h-4 w-4" />
              <span className="text-sm font-medium">Share</span>
            </button>
          </div>
          <div className="text-sm font-medium text-gray-700 bg-white/80 backdrop-blur px-3 py-1.5 rounded-lg border border-gray-200">
            {course.duration} • {course.language} • {course.certificate}
          </div>
        </div>
      </motion.div>

      {/* Detailed Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6">About This Course</h2>
        <div className="prose max-w-none">
          <p className="text-gray-600 mb-6 leading-relaxed">
            {course.detailedDescription}
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {/* Learning Outcomes */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <Target className="h-5 w-5 mr-2 text-primary" />
                What You'll Learn
              </h3>
              <ul className="space-y-3">
                {course.learningOutcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Prerequisites */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <BookOpen className="h-5 w-5 mr-2 text-primary" />
                Prerequisites
              </h3>
              <ul className="space-y-3">
                {course.prerequisites.map((prereq, index) => (
                  <li key={index} className="flex items-start text-gray-700">
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
        className="bg-white rounded-2xl p-8 border-2 border-primary/20 shadow-xl"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center space-x-4 mb-2">
              <div className="text-4xl font-bold text-gray-900">
                {formatCurrency(course.discountedPrice)}
              </div>
              <div className="text-2xl text-gray-400 line-through">
                {formatCurrency(course.price)}
              </div>
              <div className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-bold rounded-full shadow-sm">
                {discountPercentage}% OFF
              </div>
            </div>
            <div className="text-gray-600 font-medium">
              Limited time offer. Enrollment ends in 3 days.
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={handleEnroll}
              className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 transition-all"
            >
              Enroll Now
            </button>
            <button className="px-8 py-4 bg-gray-100 text-gray-900 border border-gray-200 rounded-xl font-bold hover:bg-gray-200 transition-colors">
              Try Free Preview
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}